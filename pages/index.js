import MeetupList from "../components/meetups/MeetupList";

const DUMMU_MEETUPS = [
    {
        id: 'm1',
        title: 'A first meetup',
        image: 'https://storage.caosplanejado.com/uploads/2019/05/ruinas.png',
        address: 'some address 5, 12345 some city',
        description: 'this is a first meetup',
    },

    {
        id: 'm2',
        title: 'A first meetup',
        image: 'https://storage.caosplanejado.com/uploads/2019/05/ruinas.png',
        address: 'some address 10, 12345 some city',
        description: 'this is a second meetup',
    }
]



function HomePage() {
    return (
        <>

            <MeetupList meetups={DUMMU_MEETUPS} />

        </>
    )
}

export default HomePage;