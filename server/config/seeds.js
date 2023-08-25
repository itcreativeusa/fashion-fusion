const db = require("./connection");
const { User, Product, Category } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Red" },
    { name: "Yellow" },
    { name: "Orange" },
    { name: "Green" },
    { name: "Blue" },
    { name: "Purple" },
    { name: "White" },
    { name: "Black" },
  ]);

  // const article = Article.insertMany([
  //   { article: 'Pants'},
  //   { article: 'Shirts'},
  // ])

  console.log("categories seeded");

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: "Suspender Belt",
      description:
        "Add a pop of color and vintage flair to your outfit with these vibrant red suspenders. Whether you are dressing up or adding a quirky touch to your everyday look, these adjustable suspenders provide both style and functionality.",
      image: "red/redAccs1.png",
      category: categories[0]._id,
      price: 12.99,
      quantity: 500,
    },
    {
      name: "Heart Sunglasses",
      description:
        "Elevate your eyewear game with these charming heart-shaped sunglasses. The perfect blend of retro and playful, these sunglasses offer UV protection while making a bold fashion statement.",
      image: "red/redAccs2.png",
      category: categories[0]._id,
      price: 17.99,
      quantity: 500,
    },
    {
      name: "Hand Watch",
      category: categories[0]._id,
      description:
        "Exude confidence and style with our striking red hand watch. Its sleek design, combined with precision timekeeping, adds a bold and sophisticated touch to any ensemble.",
      image: "red/redAccs3.png",
      price: 39.99,
      quantity: 20,
    },
    {
      name: "Zip-Up Hoodie",
      category: categories[0]._id,
      description:
        "Wrap yourself in warmth and urban style with our red zip-up jacket hoodie. Whether you are hitting the streets or lounging at home, its comfortable fit and vibrant color make it a versatile must-have for your wardrobe.",
      image: "red/redJacket1.png",
      price: 23.99,
      quantity: 50,
    },
    {
      name: "Cropped Red Denim Jacket",
      category: categories[0]._id,
      description:
        "Elevate your fashion game with our cropped red buttoned denim jacket. This chic and versatile piece adds a pop of color to any outfit, making it a statement staple for every trendsetters closet.",
      image: "red/redJacket2.png",
      price: 29.99,
      quantity: 20,
    },
    {
      name: "Collared Jacket",
      category: categories[0]._id,
      description:
        "Make a bold statement with our red bomber jacket. Its classic design combined with a vibrant hue creates the perfect fusion of style and attitude, ensuring you stand out wherever you go.",
      image: "red/redJacket3.png",
      price: 35.99,
      quantity: 30,
    },
    {
      name: "Cargo Pants",
      category: categories[0]._id,
      description:
        "With their bold color and functional design, these pants effortlessly combine fashion and practicality for a versatile addition to your wardrobe.",
      image: "red/redPants1.png",
      price: 15.99,
      quantity: 30,
    },
    {
      name: "Trousers",
      category: categories[0]._id,
      description:
        "These impeccably tailored trousers blend a vibrant color with a polished design, ensuring you exude confidence and style in any office setting.",
      image: "red/redPants2.png",
      price: 39.99,
      quantity: 30,
    },
    {
      name: "Pants",
      category: categories[0]._id,
      description:
        "Refine your workwear with our red work pants, combining sharp tailoring with a touch of boldness. Designed for both comfort and professionalism, these pants effortlessly enhance your office ensemble while making a statement.",
      image: "red/redPants3.png",
      price: 39.99,
      quantity: 30,
    },
    {
      name: "Button-Up",
      category: categories[0]._id,
      description:
        "A versatile piece that seamlessly transitions from casual to smart. Crafted with attention to detail and a modern fit, this shirt offers both style and comfort for any occasion.",
      image: "red/redShirt1.png",
      price: 25.99,
      quantity: 100,
    },
    {
      name: "Crop Top",
      category: categories[0]._id,
      description:
        "A vibrant essential that pairs effortlessly with high-waisted bottoms for a chic, trendy look. Designed to accentuate your style, this crop top is perfect for adding a bold pop of color to your outfits.",
      image: "red/redshirt2.png",
      price: 9.99,
      quantity: 100,
    },
    {
      name: "Basic Shirt",
      category: categories[0]._id,
      description:
        "Discover everyday comfort with our Gildan basic shirt, an essential addition to your wardrobe that combines quality and simplicity. Crafted for a relaxed fit and lasting softness, this shirt is perfect for effortless style and lasting comfort.",
      image: "red/redShirt3.png",
      price: 5.99,
      quantity: 600,
    },
    {
      name: "Sneakers",
      description:
        "Step up your footwear game with our red sneakers. These sneakers blend classic design with a contemporary twist, offering comfort and flair for a trendy and timeless look.",
      image: "red/redShoe1.png",
      category: categories[0]._id,
      price: 14.99,
      quantity: 500,
    },
    {
      name: "Heels",
      description:
        "Elevate your elegance with our red heels, a striking choice that adds a pop of color and sophistication to any outfit. Designed for both comfort and style, these heels are a must-have for making a statement at any occasion.",
      image: "red/redShoe2.png",
      category: categories[0]._id,
      price: 19.99,
      quantity: 500,
    },
    {
      name: "Sneakers",
      category: categories[0]._id,
      description:
        "Add a bold touch to your footwear collection with our vibrant red shoes, designed to blend fashion-forward style with all-day comfort. Whether you are strolling through the city or hitting the dance floor, these shoes are the perfect choice for making a striking impression.",
      image: "red/redShoe3.png",
      price: 19.99,
      quantity: 20,
    },
    {
      name: "Heart-Shaped Sunglasses",
      category: categories[1]._id,
      description:
        "Spread love and style with our yellow heart-shaped sunglasses, a playful accessory that adds a cheerful twist to your look. These sunglasses not only shield your eyes but also radiate positivity and charm wherever you go.",
      image: "yellow/yellowAccs1.png",
      price: 17.99,
      quantity: 50,
    },
    {
      name: "Mesh Gloves",
      category: categories[1]._id,
      description:
        "Elevate your fashion game with our yellow mesh hand gloves, a unique accessory that adds a touch of edgy flair to your ensemble. These gloves blend style and functionality, making them a statement piece for any daring fashionista.",
      image: "yellow/yellowAccs2.png",
      price: 14.99,
      quantity: 100,
    },
    {
      name: "Sweatbands",
      category: categories[1]._id,
      description:
        "Enhance your workout or sporty look with our vibrant yellow sweatbands, designed for both style and performance. These sweatbands keep you comfortable while adding a pop of color to your active lifestyle.",
      image: "yellow/yellowAccs3.png",
      price: 9.99,
      quantity: 30,
    },
    {
      name: "Denim Jacket",
      category: categories[1]._id,
      description:
        "Unleash your individuality with our yellow denim jacket, a striking piece that redefines classic style with a bold twist of color. Crafted for both fashion and comfort, this jacket is a must-have for those who dare to stand out from the crowd.",
      image: "yellow/yellowJacket1.png",
      price: 19.99,
      quantity: 30,
    },
    {
      name: "Raincoat",
      category: categories[1]._id,
      description:
        "Brighten up rainy days with our yellow raincoat, a cheerful and waterproof essential that keeps you dry while making a fashion statement. Combining practicality with style, this raincoat is the perfect companion for embracing the wet weather in confidence.",
      image: "yellow/yellowJacket2.png",
      price: 29.99,
      quantity: 100,
    },
    {
      name: "Jacket",
      category: categories[1]._id,
      description:
        "Elevate your outerwear game with our yellow jacket, a versatile piece that adds a pop of color and contemporary flair to your ensemble. From brisk days to chilly nights, this jacket effortlessly combines style and warmth for a standout look.",
      image: "yellow/yellowJacket3.png",
      price: 35.99,
      quantity: 80,
    },
    {
      name: "Sweatpants",
      category: categories[1]._id,
      description:
        "Upgrade your loungewear with our yellow sweatpants, offering both comfort and style in one package. Crafted with a relaxed fit and vibrant color, these sweatpants are perfect for staying cozy while making a bold statement.",
      image: "yellow/yellowPants1.png",
      price: 19.99,
      quantity: 1000,
    },
    {
      name: "Trousers",
      category: categories[1]._id,
      description:
        "Elevate your wardrobe with our yellow trousers, a sophisticated choice that adds a burst of color to any occasion. With a tailored fit and eye-catching hue, these trousers seamlessly combine elegance and boldness for a standout look.",
      image: "yellow/yellowPants2.png",
      price: 27.99,
      quantity: 100,
    },
    {
      name: "Cargo Pants",
      category: categories[1]._id,
      description:
        "Discover functionality and style with our yellow cargo pants, a versatile addition to your wardrobe that effortlessly combines utility and fashion. With ample pocket space and a vibrant color, these pants offer both practicality and a bold statement for your everyday outfits.",
      image: "yellow/yellowPants3.png",
      price: 29.99,
      quantity: 600,
    },
    {
      name: "Shirt",
      category: categories[2]._id,
      description:
        "Upgrade your essentials with our classic orange shirt, a versatile wardrobe staple that effortlessly complements any style. With its timeless design and comfortable fit, this shirt is the perfect canvas for creating countless fashionable looks.",
      image: "orange/orangeShirt1.png",
      price: 7.99,
      quantity: 1000,
    },
    {
      name: "Crop Top",
      category: categories[2]._id,
      description:
        "Elevate your casual wardrobe with our essential orange crop top, a versatile piece that adds a pop of color and modern flair to your outfits. Designed for comfort and style, this crop top is perfect for embracing the latest trends with confidence.",
      image: "orange/orangeShirt2.png",
      price: 9.99,
      quantity: 100,
    },
    {
      name: "Button-Up Shirt",
      category: categories[2]._id,
      description:
        "Revitalize your everyday style with our basic orange button-up shirt, a versatile wardrobe essential that seamlessly transitions from casual to smart. Crafted for comfort and timeless appeal, this shirt effortlessly adds a pop of color and sophistication to any ensemble.",
      image: "orange/orangeShirt3.png",
      price: 19.99,
      quantity: 600,
    },
    {
      name: "Sneakers",
      category: categories[1]._id,
      description:
        "Step up your footwear game with our vibrant yellow sneakers, a perfect blend of style and comfort for any occasion. Whether youre hitting the streets or looking to make a fashion statement, these sneakers are the perfect choice to add a pop of color to your look.",
      image: "yellow/yellowShoe1.png",
      price: 29.99,
      quantity: 1000,
    },
    {
      name: "Slip On Sneakers",
      category: categories[1]._id,
      description:
        "Effortlessly combine comfort and style with our yellow slip-on sneakers, the perfect addition to your casual footwear collection. With their vibrant color and convenient design, these sneakers are an ideal choice for on-the-go fashion and comfort.",
      image: "yellow/yellowShoe2.png",
      price: 15.99,
      quantity: 100,
    },
    {
      name: "Heels",
      category: categories[1]._id,
      description:
        "Elevate your elegance with our yellow heels, a striking choice that adds a pop of color and sophistication to any outfit. Designed for both comfort and style, these heels are a must-have for making a statement at any occasion.",
      image: "yellow/yellowShoe3.png",
      price: 29.99,
      quantity: 600,
    },
    {
      name: "Sunglasses",
      description:
        "Add a touch of warmth to your style with our orange sunglasses, a chic accessory that perfectly complements sunny days and fashionable looks. These sunglasses provide both UV protection and a pop of color, making them an essential addition to your eyewear collection.",
      image: "orange/orangeAccs1.png",
      category: categories[2]._id,
      price: 12.99,
      quantity: 500,
    },
    {
      name: "Chiffon Scarf",
      description:
        "Enhance your ensemble with our vibrant orange chiffon scarf, a lightweight and elegant accessory that adds a burst of color and flair to any outfit. Crafted from delicate chiffon, this scarf drapes gracefully and lends a touch of sophistication to your look.",
      image: "orange/orangeAccs2.png",
      category: categories[2]._id,
      price: 17.99,
      quantity: 500,
    },
    {
      name: "Gloves",
      category: categories[2]._id,
      description:
        "Elevate your formal attire with our luxurious orange satin gloves, a timeless accessory that exudes elegance and style. Crafted with a smooth finish and comfortable fit, these gloves add a touch of sophistication to any special occasion.",
      image: "orange/orangeAccs3.png",
      price: 17.99,
      quantity: 20,
    },
    {
      name: "Puffer Jacket",
      category: categories[2]._id,
      description:
        "Stay cozy and stylish with our orange puffer jacket, a must-have outerwear piece that combines warmth and fashion effortlessly. Whether youre braving the cold or making a statement, this jackets vibrant color and practical design ensure youre ready for any adventure.",
      image: "orange/orangeJacket1.png",
      price: 39.99,
      quantity: 30,
    },
    {
      name: "Cropped Jacket",
      category: categories[2]._id,
      description:
        "Elevate your style with our orange cropped jacket, a versatile piece that adds a bold and modern touch to your wardrobe. With its vibrant color and flattering silhouette, this jacket is perfect for effortlessly layering over your favorite outfits.",
      image: "orange/orangeJacket2.png",
      price: 29.99,
      quantity: 100,
    },
    {
      name: "Jacket",
      category: categories[2]._id,
      description:
        "Refine your look with our orange blazer, a sophisticated statement piece that seamlessly fuses bold color and professional elegance. From boardroom meetings to stylish outings, this blazer effortlessly enhances your ensemble with a touch of vibrant flair.",
      image: "orange/orangeJacket3.png",
      price: 35.99,
      quantity: 80,
    },
    {
      name: "Trousers",
      category: categories[2]._id,
      description:
        "Elevate your workwear with our orange work trousers, a vibrant addition that adds a contemporary twist to your professional attire. Designed for both style and comfort, these trousers are the perfect choice to showcase your confidence and fashion-forward approach in the workplace.",
      image: "orange/orangePants1.png",
      price: 35.99,
      quantity: 30,
    },
    {
      name: "Cargo Pants",
      category: categories[2]._id,
      description:
        "Discover the perfect blend of style and functionality with our orange cargo pants, designed to elevate your casual wardrobe with a pop of color. These pants combine a trendy silhouette with ample pocket space, making them an essential choice for both fashion and practicality.",
      image: "orange/orangePants2.png",
      price: 39.99,
      quantity: 30,
    },
    {
      name: "Pants",
      category: categories[2]._id,
      description:
        "Add a burst of color to your wardrobe with our orange pants, a versatile and stylish choice for any occasion. Crafted for both comfort and flair, these pants effortlessly elevate your look and showcase your individuality.",
      image: "orange/orangePants3.png",
      price: 29.99,
      quantity: 30,
    },
    {
      name: "Long Sleeve Crop Top",
      category: categories[1]._id,
      description:
        "Add a vibrant twist to your look with our yellow long sleeve crop top, a trendy piece that combines style and comfort seamlessly. Perfect for layering or showing off a bit of skin, this crop top is a playful addition to your fashion collection.",
      image: "yellow/yellowShirt1.png",
      price: 9.99,
      quantity: 1000,
    },
    {
      name: "Long Sleeve Top",
      category: categories[1]._id,
      description:
        "Elevate your casual wardrobe with our yellow long sleeve top, a must-have staple that brings a bright and cheerful touch to your everyday style. Designed for comfort and versatility, this top effortlessly transitions from cozy days in to chic outings.",
      image: "yellow/yellowShirt2.png",
      price: 15.99,
      quantity: 100,
    },
    {
      name: "Muscle Tank",
      category: categories[1]._id,
      description:
        "Showcase your boldness and confidence with our yellow muscle tank, a statement piece that adds a burst of color to your activewear. Designed for both comfort and style, this tank is perfect for workouts or casual outings, keeping you cool and fashionable all day long.",
      image: "yellow/yellowShirt3.png",
      price: 9.99,
      quantity: 600,
    },
    {
      name: "Heels",
      description:
        "Step into the spotlight with our vibrant orange heels, a bold and stylish choice that adds a touch of elegance to your look. Designed for both comfort and fashion-forward flair, these heels are the perfect complement to any special occasion.",
      image: "orange/orangeShoe1.png",
      category: categories[2]._id,
      price: 24.99,
      quantity: 500,
    },
    {
      name: "Sneakers",
      description:
        "Elevate your street style with our orange sneakers, a fusion of comfort and trendiness that effortlessly brightens up your outfit. Whether youre running errands or meeting friends, these sneakers provide a pop of color and a modern edge to your everyday adventures.",
      image: "orange/orangeShoe2.png",
      category: categories[2]._id,
      price: 29.99,
      quantity: 500,
    },
    {
      name: "Slip-On Slides",
      category: categories[2]._id,
      description:
        " Indulge in comfort without sacrificing style with our orange slippers, a cozy choice that adds a playful touch to your relaxation routine. Crafted with a plush interior and eye-catching color, these slippers are perfect for lounging at home or adding a pop of fun to your downtime.",
      image: "orange/orangeShoe3.png",
      price: 19.99,
      quantity: 20,
    },
  ]);

  console.log("products seeded");

  await User.deleteMany();

  await User.create({
    firstName: "Pamela",
    lastName: "Washington",
    email: "pamela@testmail.com",
    password: "password12345",
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id],
      },
    ],
  });

  await User.create({
    firstName: "Elijah",
    lastName: "Holt",
    email: "eholt@testmail.com",
    password: "password12345",
  });

  console.log("users seeded");

  process.exit();
});
