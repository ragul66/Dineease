const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt"); // Assuming you use bcrypt for hashing passwords
const jwt = require("jsonwebtoken"); // Assuming you use JWT for authentication
require("dotenv").config();
//modules import
const { GetLogin, AddProduct } = require("./module/TaskModule.js");

const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());

const JWT_SECRET =
  "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTcxNjMxNTE3MiwiaWF0IjoxNzE2MzE1MTcyfQ.Y-F8oKh5cVVtncvCUgluiRaooOjDW4TWQKfFBcQsZiQ";

app.use(cors());
app.use(bodyParser.json());

//register
app.post("/register", async (req, res) => {
  try {
    const { name, password, crt_pass, gmail } = req.body;

    // Check if a user with the provided email already exists
    const existingUser = await GetLogin.findOne({ gmail });
    if (existingUser) {
      return res
        .status(409)
        .json({ error: "User with this email already exists" }); // 409 Conflict
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new instance of the GetLogin model
    const newRegister = new GetLogin({
      name,
      password: hashedPassword,
      crt_pass,
      gmail,
    });

    // Save the new register document to the database
    const register = await newRegister.save();

    return res.status(201).json(register); // 201 Created
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

// Login route
app.post("/login", async (req, res) => {
  try {
    const { gmail, password } = req.body;

    const user = await GetLogin.findOne({ gmail });
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const token = jwt.sign({ id: user._id, gmail: user.gmail }, JWT_SECRET, {
      expiresIn: "1h",
    });

    return res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

//add a product
app.post("/addproduct", async (req, res) => {
  try {
    const { product_id, product_name, product_price } = req.body;

    const newproduct = new AddProduct({
      product_id,
      product_name,
      product_price,
    });

    const add = await newproduct.save();
    return res.status(201).json(add);
  } catch (error) {
    console.error("Error adding product:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

//get product details
app.get("/getproduct", async (req, res) => {
  try {
    const getproducts = await AddProduct.find({});
    return res.status(200).json(getproducts);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

const startServer = async () => {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Successfully connected to MongoDB");

    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1); // Exit the process with failure code
  }
};

startServer();
