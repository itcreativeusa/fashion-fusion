const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Red' },
    { name: 'Yellow' },
    { name: 'Orange' },
    { name: 'Green' },
    { name: 'Blue' },
    { name: 'Purple' },
    { name: 'White'},
    { name: 'Black'}
  ]);

  // const article = Article.insertMany([
  //   { article: 'Pants'},
  //   { article: 'Shirts'},
  // ])

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Suspender Belt',
      description:
        'Add a pop of color and vintage flair to your outfit with these vibrant red suspenders. Whether you are dressing up or adding a quirky touch to your everyday look, these adjustable suspenders provide both style and functionality.',
      image: 'redAccs1.png',
      category: categories[0]._id,
      price: 12.99,
      quantity: 500
    },
    {
      name: 'Heart Sunglasses',
      description:
        'Elevate your eyewear game with these charming heart-shaped sunglasses. The perfect blend of retro and playful, these sunglasses offer UV protection while making a bold fashion statement.',
      image: 'redAccs2.png',
      category: categories[0]._id,
      price: 17.99,
      quantity: 500
    },
    {
      name: 'Hand Watch',
      category: categories[0]._id,
      description:
        'Exude confidence and style with our striking red hand watch. Its sleek design, combined with precision timekeeping, adds a bold and sophisticated touch to any ensemble.',
      image: 'redAccs3.png',
      price: 39.99,
      quantity: 20
    },
    {
      name: 'Zip-Up Hoodie',
      category: categories[0]._id,
      description:
        'Wrap yourself in warmth and urban style with our red zip-up jacket hoodie. Whether you are hitting the streets or lounging at home, its comfortable fit and vibrant color make it a versatile must-have for your wardrobe.',
      image: 'redJacket1.png',
      price: 23.99,
      quantity: 50
    },
    {
      name: 'Cropped Red Denim Jacket',
      category: categories[0]._id,
      description:
        'Elevate your fashion game with our cropped red buttoned denim jacket. This chic and versatile piece adds a pop of color to any outfit, making it a statement staple for every trendsetters closet.',
      image: 'redJacket2.png',
      price: 29.99,
      quantity: 20
    },
    {
      name: 'Collared Jacket',
      category: categories[0]._id,
      description:
        'Make a bold statement with our red bomber jacket. Its classic design combined with a vibrant hue creates the perfect fusion of style and attitude, ensuring you stand out wherever you go.',
      image: 'redJacket3.png',
      price: 35.99,
      quantity: 30
    },
    {
      name: 'Cargo Pants',
      category: categories[0]._id,
      description:
        'With their bold color and functional design, these pants effortlessly combine fashion and practicality for a versatile addition to your wardrobe.',
      image: 'redPants1.png',
      price: 15.99,
      quantity: 30
    },
    {
      name: 'Trousers',
      category: categories[0]._id,
      description:
        'These impeccably tailored trousers blend a vibrant color with a polished design, ensuring you exude confidence and style in any office setting.',
      image: 'redPants2.png',
      price: 39.99,
      quantity: 30
    },
    {
      name: 'Pants',
      category: categories[0]._id,
      description: 'Refine your workwear with our red work pants, combining sharp tailoring with a touch of boldness. Designed for both comfort and professionalism, these pants effortlessly enhance your office ensemble while making a statement.',
      image: 'redPants3.png',
      price: 39.99,
      quantity: 30
    },
    {
      name: 'Button-Up',
      category: categories[0]._id,
      description:
        'A versatile piece that seamlessly transitions from casual to smart. Crafted with attention to detail and a modern fit, this shirt offers both style and comfort for any occasion.',
      image: 'redShirt1.png',
      price: 25.99,
      quantity: 100
    },
    {
      name: 'Crop Top',
      category: categories[0]._id,
      description:
        'A vibrant essential that pairs effortlessly with high-waisted bottoms for a chic, trendy look. Designed to accentuate your style, this crop top is perfect for adding a bold pop of color to your outfits.',
      image: 'redshirt2.png',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Basic Shirt',
      category: categories[0]._id,
      description:
        'Discover everyday comfort with our Gildan basic shirt, an essential addition to your wardrobe that combines quality and simplicity. Crafted for a relaxed fit and lasting softness, this shirt is perfect for effortless style and lasting comfort.',
      image: 'redShirt3.png',
      price: 5.99,
      quantity: 600
    },
    {
      name: 'Sneakers',
      description:
        'Step up your footwear game with our red sneakers. These sneakers blend classic design with a contemporary twist, offering comfort and flair for a trendy and timeless look.',
      image: 'redShoe1.png',
      category: categories[0]._id,
      price: 14.99,
      quantity: 500
    },
    {
      name: 'Heels',
      description:
        'Elevate your elegance with our red heels, a striking choice that adds a pop of color and sophistication to any outfit. Designed for both comfort and style, these heels are a must-have for making a statement at any occasion.',
      image: 'redShoe2.png',
      category: categories[0]._id,
      price: 19.99,
      quantity: 500
    },
    {
      name: 'Sneakers',
      category: categories[0]._id,
      description:
        'Add a bold touch to your footwear collection with our vibrant red shoes, designed to blend fashion-forward style with all-day comfort. Whether you are strolling through the city or hitting the dance floor, these shoes are the perfect choice for making a striking impression.',
      image: 'redShoe3.png',
      price: 19.99,
      quantity: 20
    },
    {
      name: 'Heart-Shaped Sunglasses',
      category: categories[1]._id,
      description:
        'Spread love and style with our yellow heart-shaped sunglasses, a playful accessory that adds a cheerful twist to your look. These sunglasses not only shield your eyes but also radiate positivity and charm wherever you go.',
      image: 'yellowAccs1.png',
      price: 17.99,
      quantity: 50
    },
    {
      name: 'Mesh Gloves',
      category: categories[1]._id,
      description:
        'Elevate your fashion game with our yellow mesh hand gloves, a unique accessory that adds a touch of edgy flair to your ensemble. These gloves blend style and functionality, making them a statement piece for any daring fashionista.',
      image: 'yellowAccs2.png',
      price: 14.99,
      quantity: 100
    },
    {
      name: 'Sweatbands',
      category: categories[1]._id,
      description:
        'Enhance your workout or sporty look with our vibrant yellow sweatbands, designed for both style and performance. These sweatbands keep you comfortable while adding a pop of color to your active lifestyle.',
      image: 'yellowAccs3.png',
      price: 9.99,
      quantity: 30
    },
    {
      name: 'Denim Jacket',
      category: categories[1]._id,
      description:
        'Unleash your individuality with our yellow denim jacket, a striking piece that redefines classic style with a bold twist of color. Crafted for both fashion and comfort, this jacket is a must-have for those who dare to stand out from the crowd.',
      image: 'yellowJacket1.png',
      price: 19.99,
      quantity: 30
    },
    {
      name: 'Raincoat',
      category: categories[1]._id,
      description:
        'Brighten up rainy days with our yellow raincoat, a cheerful and waterproof essential that keeps you dry while making a fashion statement. Combining practicality with style, this raincoat is the perfect companion for embracing the wet weather in confidence.',
      image: 'yellowJacket2.png',
      price: 29.99,
      quantity: 100
    },
    {
      name: 'Jacket',
      category: categories[1]._id,
      description: 'Elevate your outerwear game with our yellow jacket, a versatile piece that adds a pop of color and contemporary flair to your ensemble. From brisk days to chilly nights, this jacket effortlessly combines style and warmth for a standout look.',
      image: 'yellowJacket3.png',
      price: 35.99,
      quantity: 80
    },
    {
      name: 'Sweatpants',
      category: categories[1]._id,
      description:
        'Upgrade your loungewear with our yellow sweatpants, offering both comfort and style in one package. Crafted with a relaxed fit and vibrant color, these sweatpants are perfect for staying cozy while making a bold statement.',
      image: 'yellowPants1.png',
      price: 19.99,
      quantity: 1000
    },
    {
      name: 'Trousers',
      category: categories[1]._id,
      description:
        'Elevate your wardrobe with our yellow trousers, a sophisticated choice that adds a burst of color to any occasion. With a tailored fit and eye-catching hue, these trousers seamlessly combine elegance and boldness for a standout look.',
      image: 'yellowPants2.png',
      price: 27.99,
      quantity: 100
    },
    {
      name: 'Cargo Pants',
      category: categories[1]._id,
      description:
        'Discover functionality and style with our yellow cargo pants, a versatile addition to your wardrobe that effortlessly combines utility and fashion. With ample pocket space and a vibrant color, these pants offer both practicality and a bold statement for your everyday outfits.',
      image: 'yellowPants3.png',
      price: 29.99,
      quantity: 600
    },
        {
      name: 'Long Sleeve Crop Top',
      category: categories[1]._id,
      description:
        'Add a vibrant twist to your look with our yellow long sleeve crop top, a trendy piece that combines style and comfort seamlessly. Perfect for layering or showing off a bit of skin, this crop top is a playful addition to your fashion collection.',
      image: 'yellowShirt1.png',
      price: 9.99,
      quantity: 1000
    },
    {
      name: 'Long Sleeve Top',
      category: categories[1]._id,
      description:
        'Elevate your casual wardrobe with our yellow long sleeve top, a must-have staple that brings a bright and cheerful touch to your everyday style. Designed for comfort and versatility, this top effortlessly transitions from cozy days in to chic outings.',
      image: 'yellowShirt2.png',
      price: 15.99,
      quantity: 100
    },
    {
      name: 'Muscle Tank',
      category: categories[1]._id,
      description:
        'Showcase your boldness and confidence with our yellow muscle tank, a statement piece that adds a burst of color to your activewear. Designed for both comfort and style, this tank is perfect for workouts or casual outings, keeping you cool and fashionable all day long.',
      image: 'yellowShirt3.png',
      price: 9.99,
      quantity: 600
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
