import { useRouter } from 'next/router';
import React from 'react';

function MeetupDetailsPage() {
  const router = useRouter();
  const meetupId = router.query.meetupId;

  return (
    <div>
      <h1>Detalhes do Meetup</h1>
      <p>ID: {meetupId}</p>
    </div>
  );
}

export default MeetupDetailsPage;