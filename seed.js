const { Product } = require("./models/product");
const mongoose = require("mongoose");
const config = require("config");

const data = [
    {

        name: "Television", price: 25000,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlYGOi0JnaiQIGvVsXT_KW6HGIhodHI08E3w&usqp=CAU",
        decscription: "This is TV Description", numberInStock: 12
    },
    {
        name: "Watch",

        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUsqNgab2Opj1gpLYjdAhWbQMbS6IMKS2sDw&usqp=CAU",
        price: 5000, decscription: "This is Watch Description", numberInStock: 12
    },
    {
        name: "Refrigerator",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA2AA86HAYShymWnaiH6Gw6LpdLcSFu3ReWQ&usqp=CAU",
        price: 30000, decscription: "This is Refrigerator Description", numberInStock: 10
    },
    {
        name: "Microwave",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfYht3AA_WEWu7f03vC7J2qfBQLwFwbPONTA&usqp=CAU",
        price: 5000, decscription: "This is Microwave Description", numberInStock: 6
    },


    {
        name: "Iphone ",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREqR7nU00jWGD35ILfashD7OKG82tV7VdpuA&usqp=CAU",
        price: 30000,
        decscription: "This is Mobile Description",
        numberInStock: 12
    },
    {
        name: "Laptop",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRkrEU1L04RD70PpsmcBrpcbuigW9TO100PQ&usqp=CAU",
        price: 45000, decscription: "This is Laptop Description", numberInStock: 10
    },
    {
        name: "Desktop",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwBF2yy5TUZ6xHfwJe0pM0OWqFTITHy5xM9w&usqp=CAU",
        price: 30000, decscription: "This is Desktop Description", numberInStock: 6
    },

    {
        name: "Air Conditioner",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCPt-ElLMgdrlwpnu0zLUrCd28Y8inCpCxqA&usqp=CAU",
        price: 35000, decscription: "This is AC Description", numberInStock: 12
    },

    {

        name: "Jeans",
        imageUrl: "https://cdn.shopify.com/s/files/1/0752/6435/products/5BENONI-DENIMPANTS-PEALGREEN.jpg?v=1596339852",
        price: 600, decscription: "This is Jeans Description", numberInStock: 12
    },
    {
        name: "Shirt",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXMzNujHMh5NDnHUCd7JnTrykteZgzmq9AIA&usqp=CAU",
        price: 500, decscription: "This is Shirt Description", numberInStock: 10
    },
    {
        name: "T-Shirt",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNNmK7uZFI-AQ-f-GqtgQd_uyXxHWkJ8CeXQ&usqp=CAU",
        price: 300, decscription: "This is T-Shirt Description", numberInStock: 6
    },
    {

        name: "Shampoo",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHH3McjzCTUsFR1I93bL7-lGeM63fhk_JnfQ&usqp=CAU",
        price: 150, decscription: "This is Shampoo Description", numberInStock: 12
    },
    {
        name: "Face Wash",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTeWOWdn0-3x1dNn25KXwTz3R2PfYY3WPIBw&usqp=CAU",
        price: 70, decscription: "This is Face Wash Description", numberInStock: 10
    },
    {
        name: "Face cream",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHOUGhhQFT_NZf3AHBkrPLMthtDfYJztYPSg&usqp=CAU",
        price: 300, decscription: "This is Face Cream Description", numberInStock: 6
    },
    {
        name: "Casual Shoes",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtVEjdYNoEXRPFdLq7TBOm18jU6ceA8_urSw&usqp=CAU",
        price: 3000, decscription: "This is Shoes Description", numberInStock: 12
    },
    {
        name: "Sport Shoes",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcjXdICkovoxB8e0oX9NMJc4i1KgqLBWaCDg&usqp=CAU",
        price: 4500, decscription: "This is sport shoes Description", numberInStock: 10
    },
    

]

async function seed() {
    await mongoose.connect(config.get("db"));

    await Product.deleteMany({});
    await Product.insertMany(data);
    //await Product_type.deleteMany({});

    // for (let product_type of data) {
    //     const { _id: product_typeId } = await new Product_type({ type: product_type.type }).save();
    //     const products = product_type.product.map(product => ({
    //         ...product,
    //         product_type: { _id: product_typeId, type: product_type.type }
    //     }));
    //     await Product.insertMany(products);
    // }

    mongoose.disconnect();

    console.info("Done!");
}

seed();



