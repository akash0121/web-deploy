const fs = require("fs");
const model = require("../model/product");
const Product = model.Product;
const mongoose = require('mongoose')

// Read 

exports.createProduct = async (req, res) => {

  const product = new Product(req.body);
  try {
    const sp = await product.save();
    console.log('Saved Product:', sp);
    res.status(201).json(sp);
  } catch (error) {
    res.status(400).json(error)
    console.error('Error:', error);
  }

};

exports.getAllProduct = async (req, res) => {
  const products = await Product.find({});
  res.json(products);
};

exports.getProduct = async (req, res) => {
  const id = req.params.id;
  console.log({id})
  const product = await Product.findById(id);
  res.json(product);
};

exports.replaceProduct = async (req, res) => {
  const id = req.params.id;
  try{
  const doc = await Product.findOneAndReplace({_id:id},req.body,{new:true});
  res.status(201).json(doc);
}
catch(err){
  console.log(err);
  res.status(201).json(err);
  }
};

exports.updateProduct = async (req, res) => {
  const id = req.params.id;
  try{
  const doc = await Product.findOneAndUpdate({_id:id},req.body,{new:true});
  res.status(201).json(doc);
}
catch(err){
  console.log(err);
  res.status(201).json(err);
  }
};

exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  try{
  const doc = await Product.findOneAndDelete({_id:id},req.body,{new:true});
  res.status(201).json(doc);
}
catch(err){
  console.log(err);
  res.status(201).json(err);
  }
};
