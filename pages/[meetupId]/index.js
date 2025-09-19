import { MongoClient, ObjectId } from 'mongodb';

import MeetupDetail from "../../components/meetups/MeetupDetail"

function MeetupDetailsPage(props) {
    return (
        <>
            <MeetupDetail
                image={props.meetupData.image}
                title={props.meetupData.title}
                address={props.meetupData.address}
                description={props.meetupData.description}
            />
        </>
    );
}

export async function getStaticPaths() {
    const client = await MongoClient.connect('mongodb+srv://raissa:th5SsNRSXui5WM9R@cluster0.luyf3rz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    const db = client.db('meetups');

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

    client.close();

    return {
        fallback: false,
        paths: meetups.map(meetups =>
        ({
            params:
            {
                meetupId: meetups._id.toString()
            }
        })),

    }
};

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;


    const client = await MongoClient.connect('mongodb+srv://raissa:th5SsNRSXui5WM9R@cluster0.luyf3rz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    const db = client.db('meetups');

    const meetupsCollection = db.collection('meetups');

    const selectedMeetup = await meetupsCollection.findOne({
        _id: new ObjectId(meetupId),
    });

    client.close();

    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.data?.title || null,
                address: selectedMeetup.data?.address || null,
                image: selectedMeetup.data?.image || null,
                description: selectedMeetup.data?.description || null,
            }
        }
    }
};

export default MeetupDetailsPage;