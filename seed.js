// This file is used to intiallize models with dummy Entry(document)
const mongoose = require('mongoose')
const Product=require('./models/Product')

const products=[
    {
        name:'Iphone',
        img:'https://images.unsplash.com/photo-1616410011236-7a42121dd981?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aXBob25lfGVufDB8fDB8fHww',
        price:130000,
        desc:'very costly aukad se bahar'
    },
    {
        name:'MackBook',
        img:'https://images.unsplash.com/photo-1504353888070-4ee702492320?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxNTg0MjYxfHxlbnwwfHx8fHw%3D',
        price:250000,
        desc:'very very costly aukad se bahut bahar'
    },
    {
        name:'Iwatch',
        img:'https://images.unsplash.com/photo-1558126319-c9feecbf57ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aXdhdGNofGVufDB8fDB8fHww',
        price:50000,
        desc:'ye sasta h lelo'
    },
    {
        name:'IPad Pro',
        img:'https://images.unsplash.com/photo-1587033411391-5d9e51cce126?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aXBhZCUyMHByb3xlbnwwfHwwfHx8MA%3D%3D',
        price:250000,
        desc:'very very costly aukad se bahut bahar'
    },
    {
        name:'earpode',
        img:'https://media.istockphoto.com/id/1254998855/photo/airpod-with-black-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=1Wzz7CKrZHSh4Gyk-U9OHC62en4kPzaSGazQb33zkSg=',
        price:25000,
        desc:'in budget'
    }
]
async function seedDB(){
    await Product.insertMany(products); //IT Returns a promise that is either it resolve or reject and to remove chaining we use async await.
    console.log('data seeded successfully')
}

module.exports=seedDB;