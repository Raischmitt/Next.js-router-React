import { MongoClient } from 'mongodb';

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        const client = await MongoClient.connect('mongodb+srv://raissa:th5SsNRSXui5WM9R@cluster0.luyf3rz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        const db = client.db('meetups');

        const meetupsCollection = db.collection('meetups');

        const result = await meetupsCollection.insertOne({ data });

        console.log(result);

        client.close();

        res.status(201).json({ message: 'Meetup inserted!' });
    }
}

export default handler;