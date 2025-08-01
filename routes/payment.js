const express = require('express');
const { isLoggedIn } = require('../middleware');
const router = express.Router();


router.get('/payment_gateway/payumoney', isLoggedIn, (req, res) => {
    req.flash('error' , "Payment is Under Maintence. Please checkout later !");
    res.redirect('/user/cart');
})





// const request = require('request');
// const jsSHA = require('jssha');
// const {v4:uuid} = require('uuid')
// const {isLoggedIn} = require('../middleware')

//entire code is copy paste from mayankgupta doc :https://mayankgupta1338.medium.com/node-js-express-js-payumoney-payment-integration-32d3058c714

// router.post('/payment_gateway/payumoney', isLoggedIn, (req, res) => {
//     req.body.txnid = uuid();//Here pass txnid(transaction id) and it should be different on every call
//     req.body.email = req.user.email;
//     req.body.firstname = req.user.username; //Here save all the details in pay object 
    
//     const pay = req.body;
//     // we have to hide key as secrect so we put into config-file
//     const hashString = process.env.MERCHANT_KEY //store in in different file
//                         + '|' + pay.txnid
//                         + '|' + pay.amount 
//                         + '|' + pay.productinfo 
//                         + '|' + pay.firstname 
//                         + '|' + pay.email 
//                         + '|' + '||||||||||'
//                         + process.env.MERCHANT_SALT //store in in different file
   
//     const sha = new jsSHA('SHA-512', "TEXT");
//     sha.update(hashString);
//     //Getting hashed value from sha module
//     const hash = sha.getHash("HEX");
    
//     //We have to additionally pass merchant key to API so remember to include it.
//     pay.key = process.env.MERCHANT_KEY //store in in different file;
//     pay.surl = 'http://localhost:5000/payment/success'; //if payment success go to surl(successURL) 
//     pay.furl = 'http://localhost:5000/payment/fail';  //if payment failure go to furl (failureURL)
//     pay.hash = hash;
//     //Making an HTTP/HTTPS call with request
//     request.post({
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         url: 'https://sandboxsecure.payu.in/_payment', //Testing url
//         form: pay
//     }, function (error, httpRes, body) {
//         if (error) 
//             res.send(
//                 {status: false, 
//                 message:error.toString()
//                 }
//             );

//         if (httpRes.statusCode === 200) {
//             res.send(body);
//         }

//         else if (httpRes.statusCode >= 300 && httpRes.statusCode <= 400) {
//             res.redirect(httpRes.headers.location.toString());
//         }
//     })
// });
// // if paymout is..

// // success route
// router.post('/payment/success', (req, res) => {
//     res.send(req.body);
// })
// //failure route
// router.post('/payment/fail', (req, res) => {
//     res.send(req.body);
// })



module.exports = router;