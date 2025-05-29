const http = require("http");
const { json } = require("stream/consumers");

const port = 3000;
const hostname = "localhost";

let menData = [
  {
    "id": 1,
    "name": "Men's Denim Jacket",
    "price": 59.99,
    "category": "Jackets",
    "brand": "Levi's"
  },
  {
    "id": 2,
    "name": "Men's Running Shoes",
    "price": 89.99,
    "category": "Footwear",
    "brand": "Nike"
  },
  {
    "id": 3,
    "name": "Men's Slim Fit Jeans",
    "price": 49.99,
    "category": "Bottomwear",
    "brand": "Wrangler"
  },
  {
    "id": 4,
    "name": "Men's Casual Shirt",
    "price": 29.99,
    "category": "Shirts",
    "brand": "H&M"
  },
  {
    "id": 5,
    "name": "Men's Digital Watch",
    "price": 120.00,
    "category": "Accessories",
    "brand": "Casio"
  },
  {
    "id": 6,
    "name": "Men's Leather Wallet",
    "price": 19.99,
    "category": "Accessories",
    "brand": "Fossil"
  },
  {
    "id": 7,
    "name": "Men's Hoodie",
    "price": 39.99,
    "category": "Winterwear",
    "brand": "Adidas"
  },
  {
    "id": 8,
    "name": "Men's Chinos",
    "price": 34.99,
    "category": "Bottomwear",
    "brand": "Zara"
  },
  {
    "id": 9,
    "name": "Men's Polo T-shirt",
    "price": 24.99,
    "category": "T-Shirts",
    "brand": "U.S. Polo"
  },
  {
    "id": 10,
    "name": "Men's Sunglasses",
    "price": 49.99,
    "category": "Accessories",
    "brand": "Ray-Ban"
  }
]

let womenData = [
  {
    "id": 1,
    "name": "Women's Floral Dress",
    "price": 45.99,
    "category": "Dresses",
    "brand": "Zara"
  },
  {
    "id": 2,
    "name": "Women's Running Shoes",
    "price": 79.99,
    "category": "Footwear",
    "brand": "Nike"
  },
  {
    "id": 3,
    "name": "Women's Skinny Jeans",
    "price": 39.99,
    "category": "Bottomwear",
    "brand": "H&M"
  },
  {
    "id": 4,
    "name": "Women's Handbag",
    "price": 59.99,
    "category": "Accessories",
    "brand": "Michael Kors"
  },
  {
    "id": 5,
    "name": "Women's Woolen Scarf",
    "price": 19.99,
    "category": "Winterwear",
    "brand": "Uniqlo"
  },
  {
    "id": 6,
    "name": "Women's Sunglasses",
    "price": 49.99,
    "category": "Accessories",
    "brand": "Ray-Ban"
  },
  {
    "id": 7,
    "name": "Women's Hoodie",
    "price": 34.99,
    "category": "Tops",
    "brand": "Adidas"
  },
  {
    "id": 8,
    "name": "Women's High Heels",
    "price": 89.99,
    "category": "Footwear",
    "brand": "Aldo"
  },
  {
    "id": 9,
    "name": "Women's Ethnic Kurti",
    "price": 29.99,
    "category": "Ethnic",
    "brand": "Biba"
  },
  {
    "id": 10,
    "name": "Women's Smart Watch",
    "price": 149.99,
    "category": "Gadgets",
    "brand": "Fitbit"
  }
]


const server = http.createServer((req, res) => {
     if (req.url == "/") {
          res.writeHead(200, {"Content-Type" : "text/plain"});
          res.write("Welcome to men and Women dummy data");
          res.end();
      } else if(req.url == "/men") {
          res.writeHead(200, {"Content-Type" : "text/plain"});
          res.write(JSON.stringify(menData));
          res.end();
      } else if(req.url == "/women") {
          res.writeHead(200, {"Content-Type" : "text/plain"});
          res.write(JSON.stringify(womenData));
          res.end();
      } else if(req.url == "/other") {
          res.writeHead(400, {"Content-Type" : "text/plain"});
          res.write("Page not found");
          res.end();
      }
});

server.listen(port, () => {
     console.log(`server is Running on ${hostname}: ${port}`);
});