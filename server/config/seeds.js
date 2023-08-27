const db = require("./connection");
const { User, Product, Category } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([

    { name: 'Red' },
    { name: 'Yellow' },
    { name: 'Orange' },
    { name: 'Green' },
    { name: 'Blue' },
    { name: 'Purple' },
    { name: 'Pink'},
    { name: 'White' },
    { name: 'Black' }

  ]);

  // const article = Article.insertMany([
  //   { article: 'Pants'},
  //   { article: 'Shirts'},
  // ])

  console.log("categories seeded");

  await Product.deleteMany();

  const products = await Product.insertMany([
    //Red//
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

        'Elevate your eyewear game with these charming heart-shaped sunglasses. The perfect blend of retro and playful, these sunglasses offer UV protection while making a bold fashion statement.',
      image: 'red/redAccs2.png',

      category: categories[0]._id,
      price: 17.99,
      quantity: 500,
    },
    {
      name: "Hand Watch",
      category: categories[0]._id,
      description:

        'Exude confidence and style with our striking red hand watch. Its sleek design, combined with precision timekeeping, adds a bold and sophisticated touch to any ensemble.',
      image: 'red/redAccs3.png',

      price: 39.99,
      quantity: 20,
    },
    {
      name: "Zip-Up Hoodie",
      category: categories[0]._id,
      description:

        'Wrap yourself in warmth and urban style with our red zip-up jacket hoodie. Whether you are hitting the streets or lounging at home, its comfortable fit and vibrant color make it a versatile must-have for your wardrobe.',
      image: 'red/redJacket1.png',

      price: 23.99,
      quantity: 50,
    },
    {
      name: "Cropped Red Denim Jacket",
      category: categories[0]._id,
      description:

        'Elevate your fashion game with our cropped red buttoned denim jacket. This chic and versatile piece adds a pop of color to any outfit, making it a statement staple for every trendsetters closet.',
      image: 'red/redJacket2.png',

      price: 29.99,
      quantity: 20,
    },
    {
      name: "Collared Jacket",
      category: categories[0]._id,
      description:

        'Make a bold statement with our red bomber jacket. Its classic design combined with a vibrant hue creates the perfect fusion of style and attitude, ensuring you stand out wherever you go.',
      image: 'red/redJacket3.png',

      price: 35.99,
      quantity: 30,
    },
    {
      name: "Cargo Pants",
      category: categories[0]._id,
      description:

        'With their bold color and functional design, these pants effortlessly combine fashion and practicality for a versatile addition to your wardrobe.',
      image: 'red/redPants1.png',

      price: 15.99,
      quantity: 30,
    },
    {
      name: "Trousers",
      category: categories[0]._id,
      description:

        'These impeccably tailored trousers blend a vibrant color with a polished design, ensuring you exude confidence and style in any office setting.',
      image: 'red/redPants2.png',

      price: 39.99,
      quantity: 30,
    },
    {
      name: "Pants",
      category: categories[0]._id,

      description: 'Refine your workwear with our red work pants, combining sharp tailoring with a touch of boldness. Designed for both comfort and professionalism, these pants effortlessly enhance your office ensemble while making a statement.',
      image: 'red/redPants3.png',

      price: 39.99,
      quantity: 30,
    },
    {
      name: "Button-Up",
      category: categories[0]._id,
      description:

        'A versatile piece that seamlessly transitions from casual to smart. Crafted with attention to detail and a modern fit, this shirt offers both style and comfort for any occasion.',
      image: 'red/redShirt1.png',

      price: 25.99,
      quantity: 100,
    },
    {
      name: "Crop Top",
      category: categories[0]._id,
      description:

        'A vibrant essential that pairs effortlessly with high-waisted bottoms for a chic, trendy look. Designed to accentuate your style, this crop top is perfect for adding a bold pop of color to your outfits.',
      image: 'red/redshirt2.png',

      price: 9.99,
      quantity: 100,
    },
    {
      name: "Basic Shirt",
      category: categories[0]._id,
      description:
        'Discover everyday comfort with our Gildan basic shirt, an essential addition to your wardrobe that combines quality and simplicity. Crafted for a relaxed fit and lasting softness, this shirt is perfect for effortless style and lasting comfort.',
      image: 'red/redShirt3.png',

      price: 5.99,
      quantity: 600,
    },
    {
      name: "Sneakers",
      description:

        'Step up your footwear game with our red sneakers. These sneakers blend classic design with a contemporary twist, offering comfort and flair for a trendy and timeless look.',
      image: 'red/redShoe1.png',

      category: categories[0]._id,
      price: 14.99,
      quantity: 500,
    },
    {
      name: "Heels",
      description:
        'Elevate your elegance with our red heels, a striking choice that adds a pop of color and sophistication to any outfit. Designed for both comfort and style, these heels are a must-have for making a statement at any occasion.',
      image: 'red/redShoe2.png',

      category: categories[0]._id,
      price: 19.99,
      quantity: 500,
    },
    {
      name: "Sneakers",
      category: categories[0]._id,
      description:

        'Add a bold touch to your footwear collection with our vibrant red shoes, designed to blend fashion-forward style with all-day comfort. Whether you are strolling through the city or hitting the dance floor, these shoes are the perfect choice for making a striking impression.',
      image: 'red/redShoe3.png',

      price: 19.99,
      quantity: 20,
    },

    //Yellow//
    {
      name: "Heart-Shaped Sunglasses",
      category: categories[1]._id,
      description:

        'Spread love and style with our yellow heart-shaped sunglasses, a playful accessory that adds a cheerful twist to your look. These sunglasses not only shield your eyes but also radiate positivity and charm wherever you go.',
      image: 'yellow/yellowAccs1.png',

      price: 17.99,
      quantity: 50,
    },
    {
      name: "Mesh Gloves",
      category: categories[1]._id,
      description:

        'Elevate your fashion game with our yellow mesh hand gloves, a unique accessory that adds a touch of edgy flair to your ensemble. These gloves blend style and functionality, making them a statement piece for any daring fashionista.',
      image: 'yellow/yellowAccs2.png',

      price: 14.99,
      quantity: 100,
    },
    {
      name: "Sweatbands",
      category: categories[1]._id,
      description:

        'Enhance your workout or sporty look with our vibrant yellow sweatbands, designed for both style and performance. These sweatbands keep you comfortable while adding a pop of color to your active lifestyle.',
      image: 'yellow/yellowAccs3.png',

      price: 9.99,
      quantity: 30,
    },
    {
      name: "Denim Jacket",
      category: categories[1]._id,
      description:
        'Unleash your individuality with our yellow denim jacket, a striking piece that redefines classic style with a bold twist of color. Crafted for both fashion and comfort, this jacket is a must-have for those who dare to stand out from the crowd.',
      image: 'yellow/yellowJacket1.png',

      price: 19.99,
      quantity: 30,
    },
    {
      name: "Raincoat",
      category: categories[1]._id,
      description:

        'Brighten up rainy days with our yellow raincoat, a cheerful and waterproof essential that keeps you dry while making a fashion statement. Combining practicality with style, this raincoat is the perfect companion for embracing the wet weather in confidence.',
      image: 'yellow/yellowJacket2.png',

      price: 29.99,
      quantity: 100,
    },
    {
      name: "Jacket",
      category: categories[1]._id,
      description: 'Elevate your outerwear game with our yellow jacket, a versatile piece that adds a pop of color and contemporary flair to your ensemble. From brisk days to chilly nights, this jacket effortlessly combines style and warmth for a standout look.',
      image: 'yellow/yellowJacket3.png',

      price: 35.99,
      quantity: 80,
    },
    {
      name: "Sweatpants",
      category: categories[1]._id,
      description:

        'Upgrade your loungewear with our yellow sweatpants, offering both comfort and style in one package. Crafted with a relaxed fit and vibrant color, these sweatpants are perfect for staying cozy while making a bold statement.',
      image: 'yellow/yellowPants1.png',

      price: 19.99,
      quantity: 1000,
    },
    {
      name: "Trousers",
      category: categories[1]._id,
      description:

        'Elevate your wardrobe with our yellow trousers, a sophisticated choice that adds a burst of color to any occasion. With a tailored fit and eye-catching hue, these trousers seamlessly combine elegance and boldness for a standout look.',
      image: 'yellow/yellowPants2.png',

      price: 27.99,
      quantity: 100,
    },
    {
      name: "Cargo Pants",
      category: categories[1]._id,
      description:

        'Discover functionality and style with our yellow cargo pants, a versatile addition to your wardrobe that effortlessly combines utility and fashion. With ample pocket space and a vibrant color, these pants offer both practicality and a bold statement for your everyday outfits.',
      image: 'yellow/yellowPants3.png',

      price: 29.99,
      quantity: 600,
    },
    {

      name: 'Long Sleeve Crop Top',
      category: categories[1]._id,
      description:
        'Add a vibrant twist to your look with our yellow long sleeve crop top, a trendy piece that combines style and comfort seamlessly. Perfect for layering or showing off a bit of skin, this crop top is a playful addition to your fashion collection.',
      image: 'yellow/yellowShirt1.png',
      price: 9.99,
      quantity: 1000
    },
    {
      name: 'Long Sleeve Top',
      category: categories[1]._id,
      description:
        'Elevate your casual wardrobe with our yellow long sleeve top, a must-have staple that brings a bright and cheerful touch to your everyday style. Designed for comfort and versatility, this top effortlessly transitions from cozy days in to chic outings.',
      image: 'yellow/yellowShirt2.png',
      price: 15.99,
      quantity: 100
    },
    {
      name: 'Muscle Tank',
      category: categories[1]._id,
      description:
        'Showcase your boldness and confidence with our yellow muscle tank, a statement piece that adds a burst of color to your activewear. Designed for both comfort and style, this tank is perfect for workouts or casual outings, keeping you cool and fashionable all day long.',
      image: 'yellow/yellowShirt3.png',
      price: 9.99,
      quantity: 600

    },
    {
      name: "Sneakers",
      category: categories[1]._id,
      description:

        'Step up your footwear game with our vibrant yellow sneakers, a perfect blend of style and comfort for any occasion. Whether youre hitting the streets or looking to make a fashion statement, these sneakers are the perfect choice to add a pop of color to your look.',
      image: 'yellow/yellowShoe1.png',

      price: 29.99,
      quantity: 1000,
    },
    {
      name: "Slip On Sneakers",
      category: categories[1]._id,
      description:

        'Effortlessly combine comfort and style with our yellow slip-on sneakers, the perfect addition to your casual footwear collection. With their vibrant color and convenient design, these sneakers are an ideal choice for on-the-go fashion and comfort.',
      image: 'yellow/yellowShoe2.png',

      price: 15.99,
      quantity: 100,
    },
    {
      name: "Heels",
      category: categories[1]._id,
      description:

        'Elevate your elegance with our yellow heels, a striking choice that adds a pop of color and sophistication to any outfit. Designed for both comfort and style, these heels are a must-have for making a statement at any occasion.',
      image: 'yellow/yellowShoe3.png',

      price: 29.99,
      quantity: 600,
    },

    //Orange//
    {
      name: "Sunglasses",
      description:

        'Add a touch of warmth to your style with our orange sunglasses, a chic accessory that perfectly complements sunny days and fashionable looks. These sunglasses provide both UV protection and a pop of color, making them an essential addition to your eyewear collection.',
      image: 'orange/orangeAccs1.png',

      category: categories[2]._id,
      price: 12.99,
      quantity: 500,
    },
    {
      name: "Chiffon Scarf",
      description:

        'Enhance your ensemble with our vibrant orange chiffon scarf, a lightweight and elegant accessory that adds a burst of color and flair to any outfit. Crafted from delicate chiffon, this scarf drapes gracefully and lends a touch of sophistication to your look.',
      image: 'orange/orangeAccs2.png',

      category: categories[2]._id,
      price: 17.99,
      quantity: 500,
    },
    {
      name: "Gloves",
      category: categories[2]._id,
      description:

        'Elevate your formal attire with our luxurious orange satin gloves, a timeless accessory that exudes elegance and style. Crafted with a smooth finish and comfortable fit, these gloves add a touch of sophistication to any special occasion.',
      image: 'orange/orangeAccs3.png',

      price: 17.99,
      quantity: 20,
    },
    {
      name: "Puffer Jacket",
      category: categories[2]._id,
      description:

        'Stay cozy and stylish with our orange puffer jacket, a must-have outerwear piece that combines warmth and fashion effortlessly. Whether youre braving the cold or making a statement, this jackets vibrant color and practical design ensure youre ready for any adventure.',
      image: 'orange/orangeJacket1.png',

      price: 39.99,
      quantity: 30,
    },
    {
      name: "Cropped Jacket",
      category: categories[2]._id,
      description:

        'Elevate your style with our orange cropped jacket, a versatile piece that adds a bold and modern touch to your wardrobe. With its vibrant color and flattering silhouette, this jacket is perfect for effortlessly layering over your favorite outfits.',
      image: 'orange/orangeJacket2.png',

      price: 29.99,
      quantity: 100,
    },
    {
      name: "Jacket",
      category: categories[2]._id,

      description: 'Refine your look with our orange blazer, a sophisticated statement piece that seamlessly fuses bold color and professional elegance. From boardroom meetings to stylish outings, this blazer effortlessly enhances your ensemble with a touch of vibrant flair.',
      image: 'orange/orangeJacket3.png',

      price: 35.99,
      quantity: 80,
    },
    {
      name: "Trousers",
      category: categories[2]._id,
      description:

        'Elevate your workwear with our orange work trousers, a vibrant addition that adds a contemporary twist to your professional attire. Designed for both style and comfort, these trousers are the perfect choice to showcase your confidence and fashion-forward approach in the workplace.',
      image: 'orange/orangePants1.png',

      price: 35.99,
      quantity: 30,
    },
    {
      name: "Cargo Pants",
      category: categories[2]._id,
      description:

        'Discover the perfect blend of style and functionality with our orange cargo pants, designed to elevate your casual wardrobe with a pop of color. These pants combine a trendy silhouette with ample pocket space, making them an essential choice for both fashion and practicality.',
      image: 'orange/orangePants2.png',

      price: 39.99,
      quantity: 30,
    },
    {
      name: "Pants",
      category: categories[2]._id,

      description: 'Add a burst of color to your wardrobe with our orange pants, a versatile and stylish choice for any occasion. Crafted for both comfort and flair, these pants effortlessly elevate your look and showcase your individuality.',
      image: 'orange/orangePants3.png',

      price: 29.99,
      quantity: 30,
    },
    {

      name: 'Shirt',
      category: categories[2]._id,
      description:
        'Upgrade your essentials with our classic orange shirt, a versatile wardrobe staple that effortlessly complements any style. With its timeless design and comfortable fit, this shirt is the perfect canvas for creating countless fashionable looks.',
      image: 'orange/orangeShirt1.png',
      price: 7.99,
      quantity: 1000
    },
    {
      name: 'Crop Top',
      category: categories[2]._id,
      description:
        'Elevate your casual wardrobe with our essential orange crop top, a versatile piece that adds a pop of color and modern flair to your outfits. Designed for comfort and style, this crop top is perfect for embracing the latest trends with confidence.',
      image: 'orange/orangeShirt2.png',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Button-Up Shirt',
      category: categories[2]._id,
      description:
        'Revitalize your everyday style with our basic orange button-up shirt, a versatile wardrobe essential that seamlessly transitions from casual to smart. Crafted for comfort and timeless appeal, this shirt effortlessly adds a pop of color and sophistication to any ensemble.',
      image: 'orange/orangeShirt3.png',
      price: 19.99,
      quantity: 600

    },
    {
      name: "Heels",
      description:

        'Step into the spotlight with our vibrant orange heels, a bold and stylish choice that adds a touch of elegance to your look. Designed for both comfort and fashion-forward flair, these heels are the perfect complement to any special occasion.',
      image: 'orange/orangeShoe1.png',

      category: categories[2]._id,
      price: 24.99,
      quantity: 500,
    },
    {
      name: "Sneakers",
      description:

        'Elevate your street style with our orange sneakers, a fusion of comfort and trendiness that effortlessly brightens up your outfit. Whether youre running errands or meeting friends, these sneakers provide a pop of color and a modern edge to your everyday adventures.',
      image: 'orange/orangeShoe2.png',

      category: categories[2]._id,
      price: 29.99,
      quantity: 500,
    },
    {
      name: "Slip-On Slides",
      category: categories[2]._id,
      description:
        ' Indulge in comfort without sacrificing style with our orange slippers, a cozy choice that adds a playful touch to your relaxation routine. Crafted with a plush interior and eye-catching color, these slippers are perfect for lounging at home or adding a pop of fun to your downtime.',
      image: 'orange/orangeShoe3.png',
      price: 19.99,
      quantity: 20
    },

    //Green//
    {
      name: 'Sunglasses',
      description:
        'Add a touch of warmth to your style with our green heart-shaped sunglasses, a chic accessory that perfectly complements sunny days and fashionable looks. These sunglasses provide both UV protection and a pop of color, making them an essential addition to your eyewear collection.',
      image: 'green/greenAccs1.png',
      category: categories[3]._id,
      price: 14.99,
      quantity: 500
    },
    {
      name: 'Mesh Gloves',
      description:
        'Elevate your fashion game with our green mesh hand gloves, a unique accessory that adds a touch of edgy flair to your ensemble. These gloves blend style and functionality, making them a statement piece for any daring fashionista.',
      image: 'green/greenAccs2.png',
      category: categories[3]._id,
      price: 17.99,
      quantity: 500
    },
    {
      name: 'Earrings',
      category: categories[3]._id,
      description:
        'Add a touch of whimsy to your accessories collection with our green heart-shaped earrings, a charming adornment that radiates love and style. These earrings are the perfect blend of playful elegance, making them an ideal choice for both casual and special occasions.',
      image: 'green/greenAccs3.png',
      price: 15.99,
      quantity: 20
    }, {
      name: 'Jacket',
      category: categories[3]._id,
      description:
        'Elevate your outerwear game with our green jacket, a versatile piece that brings a refreshing touch of color to your wardrobe. Designed for both style and comfort, this jacket effortlessly complements your everyday and casual looks.',
      image: 'green/greenJacket1.png',
      price: 25.99,
      quantity: 30
    },
    {
      name: 'Hoodie',
      category: categories[3]._id,
      description:
        'Stay cozy and stylish with our green zipper hoodie, a must-have addition for your casual attire. Whether youre lounging at home or heading out, this hoodie offers both comfort and a vibrant pop of color to keep you looking effortlessly cool.',
      image: 'green/greenJacket2.png',
      price: 24.99,
      quantity: 100
    },
    {
      name: 'Jacket',
      category: categories[3]._id,
      description: 'Make a statement with our green denim jacket, a modern twist on a classic favorite that adds an edgy touch to your ensemble. Crafted with attention to detail and a bold hue, this jacket is perfect for those who dare to stand out while staying on-trend.',
      image: 'green/greenJacket3.png',
      price: 27.99,
      quantity: 80
    },
    {
      name: 'Joggers',
      category: categories[3]._id,
      description:
        'Embrace comfort and style with our green sweatpants, a versatile essential that effortlessly blends loungewear and street fashion. With a relaxed fit and eye-catching color, these sweatpants are perfect for both lazy days and active outings.',
      image: 'green/greenPants1.png',
      price: 25.99,
      quantity: 30
    },
    {
      name: 'Trousers',
      category: categories[3]._id,
      description:
        'Elevate your formal and casual looks with our green trousers, a chic and sophisticated addition to your wardrobe. The rich green hue and tailored design make these trousers a perfect choice for adding a touch of elegance to any occasion.',
      image: 'green/greenPants2.png',
      price: 29.99,
      quantity: 30
    },
    {
      name: 'Pants',
      category: categories[3]._id,
      description: 'Discover the perfect balance of fashion and comfort with our green pants, a versatile piece that transitions effortlessly from day to night. Crafted with attention to detail and a flattering fit, these pants offer a stylish canvas for endless outfit possibilities.',
      image: 'green/greenPants3.png',
      price: 29.99,
      quantity: 30
    },
    {
      name: 'Shirt',
      category: categories[3]._id,
      description:
        'Revitalize your wardrobe with our classic green shirt, a versatile staple that brings a fresh burst of color to your style. Crafted for both comfort and timeless appeal, this shirt effortlessly complements casual and smart outfits alike.',
      image: 'green/greenShirt1.png',
      price: 7.99,
      quantity: 1000
    },
    {
      name: 'Long Sleeve Top',
      category: categories[3]._id,
      description:
        'Embrace cozy sophistication with our green long-sleeve shirt, a wardrobe essential that seamlessly combines warmth and style. Whether youre layering for the season or looking for an elegant standalone piece, this shirt is perfect for showcasing your fashion sense with ease.',
      image: 'green/greenShirt2.png',
      price: 19.99,
      quantity: 100
    },
    {
      name: 'T-Shirt',
      category: categories[3]._id,
      description:
        'Add a sporty edge to your look with our green baseball tee, a casual and trendy choice that blends comfort and style effortlessly. Featuring a distinctive design and vibrant hue, this tee is a great addition to your everyday attire for a laid-back yet fashionable vibe.',
      image: 'green/greenShirt3.png',
      price: 19.99,
      quantity: 600
    },
    {
      name: 'Sneakers',
      description:
        'Step into style with our green shoes, a versatile choice that adds a touch of fresh color to your footwear collection. Crafted for both fashion and comfort, these shoes are perfect for expressing your individuality with every step.',
      image: 'green/greenShoe1.png',
      category: categories[3]._id,
      price: 24.99,
      quantity: 500
    },
    {
      name: 'Sneakers',
      description:
        'Elevate your casual look with our green sneakers, a perfect blend of comfort and trendiness that effortlessly adds a pop of color to your ensemble. Whether youre running errands or meeting friends, these sneakers offer both style and comfort for your on-the-go lifestyle.',
      image: 'green/greenShoe2.png',
      category: categories[3]._id,
      price: 35.99,
      quantity: 500
    },
    {
      name: 'Heels',
      category: categories[3]._id,
      description:
        'Make a statement with our green heels, a chic and vibrant choice that adds a touch of sophistication to any outfit. Designed to combine elegance and comfort, these heels are perfect for stepping out with confidence at formal events and special occasions.',
      image: 'green/greenShoe3.png',
      price: 29.99,
      quantity: 20
    },

    //Blue//
    {
      name: 'Hat',
      description:
        'Channel your inner adventurer with our blue cowboy hat, a bold accessory that adds a Western flair to your style. Whether you are hitting the festival scene or looking for a unique statement piece, this hat is a versatile addition that is sure to turn heads.',
      image: 'blue/blueAccs1.png',
      category: categories[4]._id,
      price: 14.99,
      quantity: 500
    },
    {
      name: 'Sunglasses',
      description:
        'Elevate your eyewear game with our blue sunglasses featuring chains, a fusion of bold fashion and practicality that adds an edgy touch to your look. These sunglasses not only shield your eyes from the sun but also make a fashion statement with their unique chain detailing.',
      image: 'blue/blueAccs2.png',
      category: categories[4]._id,
      price: 17.99,
      quantity: 500
    },
    {
      name: 'Socks',
      category: categories[4]._id,
      description:
        'Add a splash of color to your sock drawer with our blue socks, a playful yet functional accessory that adds a pop of vibrancy to your outfit. Crafted for comfort and style, these socks are perfect for showcasing your personality even in the smallest details.',
      image: 'blue/blueAccs3.png',
      price: 9.99,
      quantity: 20
    },
    {
      name: 'Jacket',
      category: categories[4]._id,
      description:
        'Elevate your street style with our blue bomber jacket, a versatile piece that seamlessly combines urban edge with a touch of sophistication. Crafted for both comfort and fashion-forward flair, this jacket is perfect for completing your everyday look.',
      image: 'blue/blueJacket1.png',
      price: 35.99,
      quantity: 30
    },
    {
      name: 'Hoodie',
      category: categories[4]._id,
      description:
        'Update your casual wardrobe with our blue basic hoodie, a timeless and comfortable essential that effortlessly blends style and comfort. Whether youre lounging at home or heading out for a relaxed outing, this hoodie is the perfect choice for adding a pop of color to your outfit.',
      image: 'blue/blueJacket2.png',
      price: 24.99,
      quantity: 100
    },
    {
      name: 'Cropped Hoodie',
      category: categories[4]._id,
      description: 'Embrace a trendy silhouette with our blue cropped hoodie, a playful and stylish addition that is perfect for layering or making a statement on its own. With its vibrant color and contemporary design, this hoodie adds a touch of casual chic to your outfit rotation.',
      image: 'blue/blueJacket3.png',
      price: 24.99,
      quantity: 80
    },
    {
      name: 'Joggers',
      category: categories[4]._id,
      description:
        'Stay comfortable and stylish with our blue sweatpants, a versatile choice that effortlessly bridges leisure and fashion. Crafted with a relaxed fit and vibrant blue hue, these sweatpants are perfect for both lounging around and running errands in style.',
      image: 'blue/bluePants1.png',
      price: 25.99,
      quantity: 30
    },
    {
      name: 'Slacks',
      category: categories[4]._id,
      description:
        'Elevate your professional attire with our blue slacks, a refined addition that combines a classic silhouette with a modern color twist. Whether for the office or a formal event, these slacks provide a polished look while adding a fresh pop of color to your ensemble.',
      image: 'blue/bluePants2.png',
      price: 29.99,
      quantity: 30
    },
    {
      name: 'Pants',
      category: categories[4]._id,
      description: 'Add an adventurous touch to your outfit with our blue pants, a trendy and functional choice that blends style and utility effortlessly. With their vibrant color and versatile design, these pants are perfect for showcasing your unique fashion sense in any casual setting.',
      image: 'blue/bluePants3.png',
      price: 29.99,
      quantity: 30
    },
    {
      name: 'Polo Shirt',
      category: categories[4]._id,
      description:
        'Elevate your casual attire with our blue polo shirt, a versatile staple that exudes both comfort and sophistication. Crafted for a timeless fit and finished in a rich blue hue, this shirt effortlessly transitions from leisure to semi-formal occasions.',
      image: 'blue/blueShirt1.png',
      price: 27.99,
      quantity: 1000
    },
    {
      name: 'Long Sleeve Shirt',
      category: categories[4]._id,
      description:
        'Embrace cozy elegance with our blue long-sleeve shirt, a wardrobe essential that seamlessly combines comfort and style. Whether layered under a blazer or worn on its own, this shirt is perfect for showcasing your fashion sense with a touch of relaxed refinement.',
      image: 'blue/blueShirt2.png',
      price: 25.99,
      quantity: 100
    },
    {
      name: 'Blouse',
      category: categories[4]._id,
      description:
        'Update your wardrobe with our blue blouse, a chic and versatile choice that adds a touch of effortless elegance to your look. Designed with attention to detail and a flattering silhouette, this blouse is perfect for enhancing your style whether paired with jeans or a skirt.',
      image: 'blue/blueShirt3.png',
      price: 27.99,
      quantity: 600
    },
    {
      name: 'Sneakers',
      description:
        'Step up your footwear game with our blue sneakers, a perfect blend of comfort and style for any occasion. Whether youre hitting the streets or looking to make a fashion statement, these sneakers are the perfect choice to add a pop of color to your look.',
      image: 'blue/blueShoe1.png',
      category: categories[4]._id,
      price: 24.99,
      quantity: 500
    },
    {
      name: 'Sneakers',
      description:
        'Embrace comfort without compromising style with our blue flats, a versatile choice that effortlessly adds a touch of elegance to your ensemble. Crafted with attention to detail and a vibrant blue shade, these flats are perfect for both casual outings and more formal events.',
      image: 'blue/blueShoe2.png',
      category: categories[4]._id,
      price: 25.99,
      quantity: 500
    },
    {
      name: 'Heels',
      category: categories[4]._id,
      description:
        'Make a statement with our blue heels, a sophisticated choice that adds a pop of color and allure to any outfit. Designed for both comfort and style, these heels are a must-have for stepping out with confidence at special occasions and gatherings.',
      image: 'blue/blueShoe3.png',
      price: 29.99,
      quantity: 20
    },

    //Purple//
    {
      name: 'Butterfly Clips',
      description:
        'Elevate your hair game with our purple butterfly hair clips, a whimsical accessory that adds a touch of charm and playfulness to your hairstyle. Crafted with attention to detail and vibrant purple hues, these clips are perfect for both everyday wear and special occasions.',
      image: 'purple/purpleAccs1.png',
      category: categories[5]._id,
      price: 14.99,
      quantity: 500
    },
    {
      name: 'Sunglasses',
      description:
        'Add a burst of color to your eyewear collection with our purple sunglasses, a stylish and functional accessory that adds flair to your sunny days. Designed for both UV protection and fashion-forward style, these sunglasses are perfect for standing out while shielding your eyes from the sun.',
      image: 'purple/purpleAccs2.png',
      category: categories[5]._id,
      price: 17.99,
      quantity: 500
    },
    {
      name: 'Headband',
      category: categories[5]._id,
      description:
        'Accentuate your look with our purple headband, a versatile accessory that effortlessly adds a pop of color and elegance to your ensemble. Whether you are styling your hair for a casual day out or a special event, this headband offers comfort and style in one chic package.',
      image: 'purple/purpleAccs3.png',
      price: 9.99,
      quantity: 20
    },
    {
      name: 'Zip-Up Jacket',
      category: categories[5]._id,
      description:
        'Stay cozy and stylish with our purple hoodie, a must-have addition to your casual wardrobe that effortlessly blends comfort and fashion. Crafted with a relaxed fit and vibrant purple hue, this hoodie is perfect for embracing a laid-back yet trendy look.',
      image: 'purple/purpleJacket1.png',
      price: 25.99,
      quantity: 30
    },
    {
      name: 'Blazer',
      category: categories[5]._id,
      description:
        'Elevate your formal attire with our purple blazer, a chic and sophisticated choice that adds a pop of color and elegance to any ensemble. Designed for both style and confidence, this blazer effortlessly transitions from office meetings to evening gatherings.',
      image: 'purple/purpleJacket2.png',
      price: 34.99,
      quantity: 100
    },
    {
      name: 'Jacket',
      category: categories[5]._id,
      description:
        'Embrace warmth and style with our purple fleece jacket, a versatile outerwear piece that combines cozy comfort with a vibrant pop of color. Whether youre tackling outdoor adventures or simply need an extra layer of warmth, this jacket is the perfect companion for chilly days.',
      image: 'purple/purpleJacket3.png',
      price: 29.99,
      quantity: 80
    },
    {
      name: 'Pants',
      category: categories[5]._id,
      description:
        'Elevate your wardrobe with our purple pants, a versatile and stylish choice that effortlessly adds a pop of color to your look. Designed for both comfort and fashion, these pants are perfect for expressing your individuality with confidence.',
      image: 'purple/purplePants1.png',
      price: 29.99,
      quantity: 30
    },
    {
      name: 'Pants',
      category: categories[5]._id,
      description:
        'Update your denim collection with our purple jeans, a contemporary twist on a classic favorite that adds a vibrant touch to your casual style. Crafted with attention to detail and a flattering fit, these jeans are a statement piece for those who love to stand out.',
      image: 'purple/purplePants2.png',
      price: 29.99,
      quantity: 30
    },
    {
      name: 'Pants',
      category: categories[5]._id,
      description: 'Add a touch of pattern to your ensemble with our purple checkered pants, a trendy and unique choice that blends style and personality effortlessly. With their eye-catching design and rich purple hues, these pants are perfect for creating a fashion-forward look thats all your own.',
      image: 'purple/purplePants3.png',
      price: 29.99,
      quantity: 30
    },
    {
      name: 'Long-Sleeve Collared Shirt',
      category: categories[5]._id,
      description:
        'Elevate your formal and casual looks with our purple long sleeve button-down shirt, a versatile piece that combines timeless style with a pop of color. Crafted for comfort and a polished appearance, this shirt is perfect for adding a touch of sophistication to any occasion.',
      image: 'purple/purpleShirt1.png',
      price: 27.99,
      quantity: 1000
    },
    {
      name: 'Shirt',
      category: categories[5]._id,
      description:
        'Add a touch of vibrancy to your wardrobe with our purple shirt, a classic and versatile choice that effortlessly complements your style. Whether paired with jeans for a casual outing or dressed up for a night out, this shirt is a must-have for expressing your individuality.',
      image: 'purple/purpleShirt2.png',
      price: 15.99,
      quantity: 100
    },
    {
      name: 'Shirt',
      category: categories[5]._id,
      description:
        'Elevate your everyday style with our purple shirt, a comfortable and fashionable choice that effortlessly blends versatility and flair. Crafted with a modern fit and attention to detail, this shirt is perfect for expressing your unique personality while staying on-trend.',
      image: 'purple/purpleShirt3.png',
      price: 15.99,
      quantity: 600
    },
    {
      name: 'Sneakers',
      description:
        'Step up your footwear game with our purple sneakers, a perfect blend of comfort and style for any occasion. Whether youre hitting the streets or looking to make a fashion statement, these sneakers are the perfect choice to add a pop of color to your look.',
      image: 'purple/purpleShoe1.png',
      category: categories[5]._id,
      price: 44.99,
      quantity: 500
    },
    {
      name: 'Sneakers',
      description:
        'Elevate your athletic performance with our purple track shoes, a combination of speed, comfort, and vibrant style. Designed for both training sessions and competition, these track shoes provide the support you need while making a bold statement on the track.',
      image: 'purple/purpleShoe2.png',
      category: categories[5]._id,
      price: 45.99,
      quantity: 500
    },
    {
      name: 'Sneakers',
      category: categories[5]._id,
      description:
        'Make a bold fashion statement with our purple sneakers, a versatile choice that effortlessly adds a pop of color and personality to your outfit. Crafted with attention to detail and a comfortable fit, these sneakers are perfect for expressing your individuality while staying comfortable all day long.',
      image: 'purple/purpleShoe3.png',
      price: 49.99,
      quantity: 20
    },

    //Pink//
    {
      name: 'Sunglasses',
      description:
        'Spread love and style with our pink heart-shape sunglasses, a playful accessory that adds a cheerful twist to your look. These sunglasses not only protect your eyes but also radiate positivity and charm, making them an ideal choice for sunny days.',
      image: 'pink/pinkAccs1.png',
      category: categories[6]._id,
      price: 14.99,
      quantity: 500
    },
    {
      name: 'Cowboy Hat',
      description:
        'Channel your inner adventurer with our pink cowboy hat, a charming accessory that adds a touch of whimsy and flair to your outfit. Crafted with attention to detail and a vibrant pink hue, this hat is perfect for embracing a Western-inspired look or adding a playful element to any ensemble.',
      image: 'pink/pinkAccs2.png',
      category: categories[6]._id,
      price: 19.99,
      quantity: 500
    },
    {
      name: 'Watch',
      category: categories[6]._id,
      description:
        'Elevate your wrist game with our pink watch, a chic and functional accessory that adds a touch of elegance to your everyday style. Whether youre dressing up or down, this watch seamlessly blends fashion and practicality for a timeless addition to your accessories collection.',
      image: 'pink/pinkAccs3.png',
      price: 39.99,
      quantity: 20
    },
    {
      name: 'Jacket',
      category: categories[6]._id,
      description:
        'Add a splash of color to your outerwear collection with our pink denim jacket, a stylish piece that effortlessly combines classic design with a vibrant twist. Crafted for both fashion and comfort, this jacket is perfect for making a statement in any season.',
      image: 'pink/pinkJacket1.png',
      price: 35.99,
      quantity: 30
    },
    {
      name: 'Jacket',
      category: categories[6]._id,
      description:
        'Elevate your casual look with our pink denim jacket, a versatile and on-trend addition that adds a pop of color to your ensemble. Whether layered over a dress or paired with jeans, this jacket is a must-have for showcasing your individual style with ease.',
      image: 'pink/pinkJacket2.png',
      price: 37.99,
      quantity: 100
    },
    {
      name: 'Zip-Up Jacket',
      category: categories[6]._id,
      description:
        'Stay cozy and fashionable with our pink zippered hoodie, a comfortable essential that seamlessly blends warmth and style. Whether youre lounging at home or stepping out for a relaxed outing, this hoodie offers both comfort and a vibrant touch to your outfit.',
      image: 'pink/pinkJacket3.png',
      price: 29.99,
      quantity: 80
    },
    {
      name: 'Pants',
      category: categories[6]._id,
      description:
        'Embrace a touch of whimsy with our pink pants adorned with hearts, a playful and fashionable choice that adds charm to your everyday style. Crafted with attention to detail and a comfortable fit, these pants are perfect for expressing your individuality with flair.',
      image: 'pink/pinkPants1.png',
      price: 29.99,
      quantity: 30
    },
    {
      name: 'Pants',
      category: categories[6]._id,
      description:
        'Elevate your athleisure game with our pink joggers, a perfect blend of comfort and trendiness for your casual looks. With their relaxed fit and a splash of color, these joggers are the ideal choice for both lounging and stepping out in style.',
      image: 'pink/pinkPants2.png',
      price: 29.99,
      quantity: 30
    },
    {
      name: 'Pants',
      category: categories[6]._id,
      description: 'Stay cozy and stylish with our pink sweatpants, a wardrobe essential that effortlessly combines comfort and flair. Crafted with a relaxed fit and vibrant pink hue, these sweatpants are perfect for embracing a relaxed yet fashionable look.',
      image: 'pink/pinkPants3.png',
      price: 29.99,
      quantity: 30
    },
    {
      name: 'Long-Sleeve Shirt',
      category: categories[6]._id,
      description:
        'Embrace versatility and comfort with our pink long sleeve top, a must-have addition to your casual wardrobe that seamlessly transitions from day to night. Crafted with a flattering fit and a soft touch, this top is perfect for adding a pop of color to your everyday ensembles.',
      image: 'pink/pinkShirt1.png',
      price: 22.99,
      quantity: 1000
    },
    {
      name: 'Blouse',
      category: categories[6]._id,
      description:
        'Elevate your ensemble with our pink blouse, a chic and sophisticated choice that effortlessly blends style and elegance. Whether paired with skirts for a formal occasion or jeans for a more relaxed look, this blouse adds a touch of femininity and charm to your outfit.',
      image: 'pink/pinkShirt2.png',
      price: 25.99,
      quantity: 100
    },
    {
      name: 'Shirt',
      category: categories[6]._id,
      description:
        'Add a burst of color to your wardrobe with our pink shirt, a classic and versatile piece that exudes both style and comfort. With its modern fit and attention to detail, this shirt is perfect for expressing your personality while staying on-trend.',
      image: 'pink/pinkShirt3.png',
      price: 15.99,
      quantity: 600
    },
    {
      name: 'Sneakers',
      description:
        'Step into style with our pink sneakers, a perfect blend of comfort and trendiness for any occasion. Whether youre hitting the streets or looking to make a fashion statement, these sneakers are the ideal choice to add a pop of color to your look.',
      image: 'pink/pinkShoe1.png',
      category: categories[6]._id,
      price: 44.99,
      quantity: 500
    },
    {
      name: 'Heels',
      description:
        'Elevate your elegance with our pink heels, a sophisticated choice that adds a touch of glamour and femininity to any outfit. Designed for both comfort and style, these heels are a must-have for making a statement at formal events and special occasions.',
      image: 'pink/pinkShoe2.png',
      category: categories[6]._id,
      price: 45.99,
      quantity: 500
    },
    {
      name: 'Sneakers',
      category: categories[6]._id,
      description:
        'Make a bold fashion statement with our pink sneakers, a versatile choice that effortlessly adds a vibrant touch to your ensemble. Crafted with attention to detail and a comfortable fit, these sneakers are perfect for expressing your individuality while staying comfortable all day long.',
      image: 'pink/pinkShoe3.png',
      price: 49.99,
      quantity: 20
    },

    //White//
    {
      name: 'Beanie',
      description:
        'Stay cozy and stylish with our white beanie, a versatile accessory that adds warmth and a touch of urban flair to your look. Crafted with attention to detail and a comfortable fit, this beanie is perfect for braving chilly days with a dose of fashion.',
      image: 'white/whiteAccs1.png',
      category: categories[7]._id,
      price: 12.99,
      quantity: 500
    },
    {
      name: 'Sunglasses',
      description:
        'Elevate your eyewear game with our white sunglasses, a chic and timeless accessory that adds a touch of sophistication to your sunny days. Designed for both UV protection and style, these sunglasses effortlessly complement your ensemble while shielding your eyes from the sun.',
      image: 'white/whiteAccs2.png',
      category: categories[7]._id,
      price: 19.99,
      quantity: 500
    },
    {
      name: 'Hair Clips',
      category: categories[7]._id,
      description:
        'Accentuate your hair with our white hair clips, a delicate and stylish choice that adds a touch of elegance to your hairstyle. Whether youre styling your locks for a special event or adding a subtle charm to your everyday look, these hair clips are the perfect finishing touch.',
      image: 'white/whiteAccs3.png',
      price: 16.99,
      quantity: 20
    },
    {
      name: 'Hoodie',
      category: categories[7]._id,
      description:
        'Stay cozy and effortlessly stylish with our white hoodie, a classic essential that combines comfort and versatility in one. Crafted with a relaxed fit and timeless design, this hoodie is perfect for layering or wearing on its own for a casual and chic look.',
      image: 'white/whiteJacket1.png',
      price: 25.99,
      quantity: 30
    },
    {
      name: 'Jacket',
      category: categories[7]._id,
      description:
        'Elevate your outerwear game with our white bomber jacket, a contemporary staple that blends urban edge with a touch of sophistication. Whether paired with jeans or a dress, this jacket is perfect for making a fashion-forward statement while keeping you warm and stylish.',
      image: 'white/whiteJacket2.png',
      price: 37.99,
      quantity: 100
    },
    {
      name: 'Jacket',
      category: categories[7]._id,
      description:
        'Add a versatile piece to your wardrobe with our white jacket, a must-have addition that effortlessly complements a variety of looks. Designed for both comfort and style, this jacket is perfect for layering over any ensemble for a polished finish.',
      image: 'white/whiteJacket3.png',
      price: 29.99,
      quantity: 80
    },
    {
      name: 'Pants',
      category: categories[7]._id,
      description:
        'Elevate your outfit with our white pants, a versatile and stylish choice that effortlessly adds a touch of sophistication to any ensemble. Crafted for both comfort and fashion, these pants are perfect for expressing your individuality with confidence.',
      image: 'white/whitePants1.png',
      price: 29.99,
      quantity: 30
    },
    {
      name: 'Cargo Pants',
      category: categories[7]._id,
      description:
        'Discover the perfect blend of style and functionality with our white cargo pants, designed to enhance your casual wardrobe with a touch of utility and flair. These pants combine a trendy silhouette with ample pocket space, making them an essential choice for both fashion and practicality.',
      image: 'white/whitePants2.png',
      price: 29.99,
      quantity: 30
    },
    {
      name: 'Joggers',
      category: categories[7]._id,
      description: 'Stay comfortably stylish with our white joggers, a perfect fusion of comfort and trendiness for your everyday looks. With their relaxed fit and clean white hue, these joggers are ideal for embracing a laid-back yet fashionable aesthetic.',
      image: 'white/whitePants3.png',
      price: 29.99,
      quantity: 30
    },
    {
      name: 'Shirt',
      category: categories[7]._id,
      description:
        'Add a touch of timeless elegance to your wardrobe with our white shirt, a versatile essential that effortlessly complements any style. Crafted with attention to detail and a comfortable fit, this shirt is perfect for creating countless fashionable looks.',
      image: 'white/whiteShirt1.png',
      price: 19.99,
      quantity: 1000
    },
    {
      name: 'Shirt',
      category: categories[7]._id,
      description:
        'Elevate your ensemble with our white shirt, a classic and versatile choice that exudes both style and comfort. Whether paired with jeans for a casual outing or dressed up for a formal event, this shirt is a must-have for expressing your individuality.',
      image: 'white/whiteShirt2.png',
      price: 19.99,
      quantity: 100
    },
    {
      name: 'Shirt',
      category: categories[7]._id,
      description:
        'Enhance your wardrobe with our white v-neck shirt, a chic and flattering option that seamlessly transitions from day to night. Crafted with a modern fit and attention to detail, this shirt is perfect for showcasing your personality while staying on-trend.',
      image: 'white/whiteShirt3.png',
      price: 19.99,
      quantity: 600
    },
    {
      name: 'Sneakers',
      description:
        'Step into style with our white sneakers, a perfect blend of comfort and trendiness for any occasion. Whether youre strolling the city streets or heading out with friends, these sneakers offer a versatile and timeless choice to complete your look.',
      image: 'white/whiteShoe1.png',
      category: categories[7]._id,
      price: 34.99,
      quantity: 500
    },
    {
      name: 'Sneakers',
      description:
        'Elevate your footwear game with our white sneakers, a classic and essential choice that effortlessly complements a range of outfits. Crafted with attention to detail and comfort, these sneakers are designed to keep you stylish on the go.',
      image: 'white/whiteShoe2.png',
      category: categories[7]._id,
      price: 45.99,
      quantity: 500
    },
    {
      name: 'Heels',
      category: categories[7]._id,
      description:
        'Embrace elegance with our white heels, a sophisticated choice that adds a touch of glamour and versatility to any outfit. From formal events to nights out, these heels are designed to elevate your style while providing comfort and confidence with every step.',
      image: 'white/whiteShoe3.png',
      price: 37.99,
      quantity: 20
    },

    //Black//
    {
      name: 'Sunglasses',
      description:
        'Elevate your eyewear game with our black sunglasses, a timeless accessory that adds an aura of sophistication to your look. Crafted with attention to both style and UV protection, these sunglasses are the perfect blend of fashion and functionality.',
      image: 'black/blackAccs1.png',
      category: categories[8]._id,
      price: 18.99,
      quantity: 500
    },
    {
      name: 'Gloves',
      description:
        'Keep your hands cozy and stylish with our black gloves, a versatile accessory that adds a touch of elegance to your winter ensemble. Crafted for comfort and warmth, these gloves are designed to complete your cold-weather look with flair.',
      image: 'black/blackAccs2.png',
      category: categories[8]._id,
      price: 15.99,
      quantity: 500
    },
    {
      name: 'Beanie',
      category: categories[8]._id,
      description:
        'Stay warm and fashionable with our black beanie, a cozy accessory that adds an urban edge to your winter style. Crafted with attention to both comfort and design, this beanie is the perfect choice for braving the cold in style.',
      image: 'black/blackAccs3.png',
      price: 16.99,
      quantity: 20
    },
    {
      name: 'Hoodie',
      category: categories[8]._id,
      description:
        'Stay comfortably stylish with our black zippered hoodie, a versatile essential that seamlessly blends warmth and fashion. Whether youre lounging at home or stepping out for a relaxed outing, this hoodie offers both comfort and a touch of urban flair.',
      image: 'black/blackJacket1.png',
      price: 25.99,
      quantity: 30
    },
    {
      name: 'Jacket',
      category: categories[8]._id,
      description:
        'Elevate your outerwear game with our black bomber jacket, a classic and edgy choice that adds a touch of urban sophistication to your ensemble. Whether paired with jeans or a dress, this jacket is perfect for making a fashion statement while keeping you warm and stylish.',
      image: 'black/blackJacket2.png',
      price: 37.99,
      quantity: 100
    },
    {
      name: 'Jacket',
      category: categories[8]._id,
      description:
        'Embrace a touch of elegance with our black collared jacket, a versatile piece that effortlessly transitions from formal to casual occasions. Crafted with attention to detail and a flattering silhouette, this jacket is perfect for adding a polished touch to your outfit.',
      image: 'black/blackJacket3.png',
      price: 29.99,
      quantity: 80
    },
    {
      name: 'Cargo Pants',
      category: categories[8]._id,
      description:
        'Elevate your casual attire with our black cargo pants, a versatile and functional choice that adds an edge to your style. Designed for both comfort and practicality, these pants are perfect for expressing your individuality while staying on-trend.',
      image: 'black/blackPants1.png',
      price: 29.99,
      quantity: 30
    },
    {
      name: 'Pants',
      category: categories[8]._id,
      description:
        'Update your denim collection with our black jeans, a timeless and versatile staple that seamlessly complements a variety of looks. Crafted with attention to both fit and style, these jeans are a must-have addition for expressing your personality.',
      image: 'black/blackPants2.png',
      price: 29.99,
      quantity: 30
    },
    {
      name: 'Sweatpants',
      category: categories[8]._id,
      description: 'Stay cozy and effortlessly stylish with our black sweatpants, a comfortable essential that seamlessly blends comfort and fashion. Crafted with a relaxed fit and attention to detail, these sweatpants are perfect for embracing a laid-back yet trendy look.',
      image: 'black/blackPants3.png',
      price: 29.99,
      quantity: 30
    },
    {
      name: 'Shirt',
      category: categories[8]._id,
      description:
        'Add a touch of sophistication to your wardrobe with our black shirt, a versatile and classic choice that effortlessly complements various outfits. Crafted with attention to detail and a comfortable fit, this shirt is perfect for creating timeless ensembles.',
      image: 'black/blackShirt1.png',
      price: 19.99,
      quantity: 1000
    },
    {
      name: 'Long-Sleeve Shirt',
      category: categories[8]._id,
      description:
        'Embrace cozy elegance with our black long-sleeve shirt, a wardrobe essential that seamlessly combines comfort and style. Whether worn alone or layered under jackets, this shirt is perfect for showcasing your fashion sense with a touch of refinement.',
      image: 'black/blackShirt2.png',
      price: 19.99,
      quantity: 100
    },
    {
      name: 'Blouse',
      category: categories[8]._id,
      description:
        'Elevate your ensemble with our black blouse, a chic and versatile choice that adds a touch of effortless elegance to your look. Designed with attention to detail and a flattering silhouette, this blouse is perfect for enhancing your style whether paired with jeans or a skirt.',
      image: 'black/blackShirt3.png',
      price: 19.99,
      quantity: 600
    },
    {
      name: 'Sneakers',
      description:
        'Step up your footwear game with our black sneakers, a perfect blend of comfort and style for any occasion. Whether youre hitting the streets or looking to make a fashion statement, these sneakers offer a versatile and timeless choice to complete your look.',
      image: 'black/blackShoe1.png',
      category: categories[8]._id,
      price: 38.99,
      quantity: 500
    },
    {
      name: 'Sneakers',
      description:
        'Elevate your casual look with our black sneakers, a classic and essential choice that effortlessly complements a variety of outfits. Crafted with attention to detail and comfort, these sneakers are designed to keep you stylish on the go.',
      image: 'black/blackShoe2.png',
      category: categories[8]._id,
      price: 32.99,
      quantity: 500
    },
    {
      name: 'Shoes',
      category: categories[8]._id,
      description:
        'Add a versatile staple to your shoe collection with our black shoes, a must-have choice that seamlessly transitions from casual to formal occasions. Crafted for both comfort and style, these shoes are designed to elevate your ensemble while providing all-day comfort.',
      image: 'black/blackShoe3.png',
      price: 37.99,
      quantity: 20
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
