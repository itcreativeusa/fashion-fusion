import React, { useEffect } from "react";
import { CardElement, useStripe, useElements, Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLazyQuery } from "@apollo/client";
import { QUERY_CHECKOUT } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import CartItem from "../CartItem";
import Auth from "../../utils/auth";
import { useStoreContext } from "../../utils/GlobalState";
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from "../../utils/actions";
import "./style.css";

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

const Cart = () => {
  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  //checkout form
  const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
      event.preventDefault();
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
      });

      if (error) {
        console.log("Stripe error:", error);
      } else {
        processPayment(paymentMethod);
      }

      console.log('button clicked')
    }

    async function processPayment(paymentMethod) {
      const response = await fetch("/api/charge", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          paymentMethodId: paymentMethod.id,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error("Payment failed:", data);
        return;
      }

      console.log("Payment successful:", data);
    }

    return (
      <form onSubmit={handleSubmit}>
        <CardElement />
          <button type="submit" disabled={!stripe}>
            Pay
          </button>
      </form>
    );
  }


  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise("cart", "get");
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    }

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
  }

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  function submitCheckout() {
    const productIds = [];

    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });

    getCheckout({
      variables: { products: productIds },
    });
  }

  if (!state.cartOpen) {
    return (
      <div className="cart-closed" onClick={toggleCart}>
        <span role="img" aria-label="trash">
                    <img className="cartLogo" src="/cart.ico" alt="cart image" />
        </span>
      </div>
    );
  }

  return (
    <Elements stripe={stripePromise}>
      <div className="cart">
        <div className="close" onClick={toggleCart}>
          [close]
        </div>
        <h2>Shopping Cart</h2>
        {state.cart.length ? (
          <div>
            {state.cart.map((item) => (
              <CartItem key={item._id} item={item} />
            ))}

            <div>
              <strong>Total: ${calculateTotal()} </strong>

              {Auth.loggedIn() ? (
                <div>
                  <button className="cartBtns" onClick={submitCheckout}>
                    Checkout
                  </button>
                  <CheckoutForm />
                </div>
              ) : (
                <span> (log in/sign up to check out)</span>
              )}
            </div>
          </div>
        ) : (
          <h3>
            <span role="img" aria-label="shocked">
              😱
            </span>
            You haven't added anything to your cart yet!
          </h3>
        )}
      </div>
    </Elements>
  );
};

export default Cart;
