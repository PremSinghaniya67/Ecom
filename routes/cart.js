const express = require('express');
const router = express.Router();
const {isLoggedIn} = require('../middleware');
const Product = require('../models/Product');
const User = require('../models/User');

router.get('/user/cart' , isLoggedIn , async(req,res)=>{
    const user = await User.findById(req.user._id).populate('cart');
    const totalAmount = user.cart.reduce((sum , curr)=> sum+curr.price , 0) //intial value of sum=0
    const productInfo = user.cart.map((p)=>p.desc).join(',');
    res.render('cart/cart' , {user, totalAmount , productInfo }); //pass into cart.ejs
})


router.post('/user/:productId/add' , isLoggedIn , async(req,res)=>{
    let {productId} = req.params;
    let userId = req.user._id;
    let product = await Product.findById(productId);
    let user = await User.findById(userId);
    user.cart.push(product); //push is js function and not a mongodb funtion so we have to save it.
    await user.save();
    res.redirect('/user/cart'); 
})

module.exports = router;