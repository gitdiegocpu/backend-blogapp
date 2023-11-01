import express from 'express';
import cors from 'cors';
import { MongoClient } from 'mongodb';
export const MONGO_URI = "mongodb+srv://gadifer54:HHntRKAx0pEOJiQy@myfirstcluster.dgdhoux.mongodb.net/?retryWrites=true&w=majority"



const client= new MongoClient(MONGO_URI)
const db = client.db('blogapp-c12')
const BlogPosts = db.collection ('blog-post')

client.connect()
console.log('Connected to Mongo')


app.get('/', async (req, res) => {
const allPosts = await BlogPosts.find().toArray()
console.log('allPosts ->', allPosts)
res.json('here are someblog posts, not yet')
})

app.listen('8080', () => console.log('Api listening on port 8080'))