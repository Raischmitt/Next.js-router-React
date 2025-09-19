import { MongoClient } from 'mongodb';

import MeetupList from "../components/meetups/MeetupList";

function HomePage(props) {
    return (
        <>

            <MeetupList meetups={props.meetups} />

        </>
    )
}

// export async function getStaticProps(context) {
//     const req = context.req;
//     const res = context.res;
//     return {
//         props: DUMMU_MEETUPS,
//     };

// };

export async function getStaticProps() {
    const client = await MongoClient.connect('mongodb+srv://raissa:th5SsNRSXui5WM9R@cluster0.luyf3rz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    const db = client.db('meetups');

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find().toArray();

    client.close();

    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.data.title,
                address: meetup.data.address,
                image: meetup.data.image,
                id: meetup._id.toString(),
            })),

        },
        revalidate: 10
    }
};

export default HomePage;