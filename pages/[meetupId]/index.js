import MeetupDetail from "../components/meetups/MeetupDetail"

function MeetupDetailsPage() {
    return (
        <>
            <MeetupDetail
                image="https://storage.caosplanejado.com/uploads/2019/05/ruinas.png"
                title="first meetup"
                address="some street 5, some city"
                description="this is a first meetup"
            />
        </>
    );
}

export default MeetupDetailsPage;