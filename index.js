const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const dbConnect = require('./utils/dbConnect');
const bikesRoutes = require('./routes/v1/bikes.route');
const viewCount = require('./middleware/viewCount');
const ObjectId = require('mongodb').ObjectId;
// import rateLimit from 'express-rate-limit'



require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;


// middleware
app.use(cors());
app.use(express.json());

// app.use(viewCount);


// Apply the rate limiting middleware to all requests
// app.use(limiter);

dbConnect();

app.use("/api/v1/bikes", bikesRoutes);



async function run() {
    try {
        // await client.connect();

        // const database = client.db('bikeShop');
        // const bikesCollection = database.collection('bikes');
        // const ordersCollection = database.collection('orders');
        // const usersCollection = database.collection('users');
        // const reviewsCollection = database.collection('reviews');

        // // bikes
        // app.get('/bikes', async (req, res) => {
        //     const cursor = bikesCollection.find({});
        //     const result = await cursor.toArray();
        //     // console.log(result);
        //     res.send(result);
        // });

        // app.get('/bikes/:id', async (req, res) => {
        //     const id = req.params.id;
        //     const query = { _id: ObjectId(id) }
        //     const result = await bikesCollection.findOne(query);

        //     res.send(result);
        // });

        // app.post('/bikes', async (req, res) => {
        //     const newBike = req.body;
        //     // console.log(newBike);
        //     const addNewBike = newBike;
        //     const result = await bikesCollection.insertOne(addNewBike);
        //     console.log(result);
        //     res.json(result);
        // });

        // app.put('/bikes/:id', async (req, res) => {
        //     const id = req.params.id;
        //     const updateBike = req.body;
        //     const filter = { _id: ObjectId(id) };

        //     const options = { upsert: true };
        //     const updateDoc = {
        //         $set: {
        //             bike_name: updateBike.bike_name,
        //             image: updateBike.image,
        //             short_des: updateBike.short_des,
        //             brand: updateBike.brand,
        //             price: updateBike.price
        //         }
        //     }
        //     const result = await bikesCollection.updateOne(filter, updateDoc, options);
        //     res.json(result);
        // });

        // app.delete('/bikes/:id', async (req, res) => {
        //     const id = req.params.id;
        //     const query = { _id: ObjectId(id) };
        //     const result = await bikesCollection.deleteOne(query);
        //     console.log(result);
        //     res.json(result);
        // });


        // // orders
        // app.get('/orders/:email', async (req, res) => {
        //     const email = req.params.email;
        //     const query = { userEmail: email };

        //     const cursor = ordersCollection.find(query);
        //     const orders = await cursor.toArray();
        //     res.send(orders)
        // })

        // app.get('/orders', async (req, res) => {
        //     const cursor = ordersCollection.find({});
        //     const orders = await cursor.toArray();
        //     res.send(orders)
        // });

        // app.post('/orders', async (req, res) => {
        //     const order = req.body;
        //     const doc = order;
        //     const result = await ordersCollection.insertOne(doc);
        //     res.json(result);
        // });

        // app.put('/orders/:id', async (req, res) => {
        //     const id = req.params.id;
        //     const updateOrder = req.body;

        //     const filter = { _id: ObjectId(id) };
        //     const options = { upsert: true };

        //     const updateDoc = {
        //         $set: {
        //             serviceId: updateOrder.serviceId,
        //             orderStatus: updateOrder.orderStatus,
        //             userName: updateOrder.userName,
        //             userPhoneNumber: updateOrder.userPhoneNumber,
        //             userEmail: updateOrder.userEmail,
        //             userAddress: updateOrder.userAddress,
        //             bike_name: updateOrder.bike_name,
        //             brand: updateOrder.brand,
        //             price: updateOrder.price
        //         }
        //     }
        //     const result = await ordersCollection.updateOne(filter, updateDoc, options);

        //     res.send(result);
        // });

        // app.delete('/orders/:id', async (req, res) => {
        //     const id = req.params.id;
        //     const query = { _id: ObjectId(id) };
        //     const result = await ordersCollection.deleteOne(query);
        //     res.json(result);
        // })


        // // users
        // app.get('/users/:email', async (req, res) => {
        //     const email = req.params.email;
        //     const query = { email: email }
        //     const user = await usersCollection.findOne(query);
        //     let isAdmin = false;
        //     if (user?.role === 'admin') {
        //         isAdmin = true;
        //     }
        //     res.json({ admin: isAdmin });
        // });

        // app.post('/users', async (req, res) => {
        //     const user = req.body;
        //     const result = await usersCollection.insertOne(user);
        //     res.send(result)
        // });

        // app.put('/users', async (req, res) => {
        //     const user = req.body;
        //     const filter = { email: user.email };
        //     const options = { upsert: true };
        //     const updateDoc = { $set: user };
        //     const result = await usersCollection.updateOne(filter, updateDoc, options);
        //     res.json(result);
        // });

        // app.put('/users/admin', async (req, res) => {
        //     const user = req.body;
        //     const filter = { email: user.email };
        //     const updateDoc = { $set: { role: 'admin' } }
        //     const result = await usersCollection.updateOne(filter, updateDoc);
        //     res.json(result);
        // });



        // // reviews
        // app.get('/reviews', async (req, res) => {
        //     const cursor = reviewsCollection.find({});
        //     const reviews = await cursor.toArray();
        //     res.send(reviews);
        // })

        // app.post('/reviews', async (req, res) => {
        //     const newReview = (req.body);
        //     const result = await reviewsCollection.insertOne(newReview);
        //     console.log(result);
        //     res.json(result);
        // });

    }
    finally {
        // await client.close()
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.all("*", (req, res) => {
    res.send("NO Route Found.");
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})