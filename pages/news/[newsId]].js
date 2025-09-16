import { useRouter } from 'next/router';

function DetailsPage() {
    const router = useRouter();

    const newsId = router.query.newsId;

    return (
        <>
            <h1>DetailsPage</h1>
        </>
    )
}

export default DetailsPage;