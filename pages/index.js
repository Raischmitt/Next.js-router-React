import Link from 'next/link';

function HomePage() {
    return (
        <>
            <h1>HomePage</h1>
            <ul>
                <li>
                    <Link href="/news/nextjs-is-a-great-framework">NextJS is a great framework</Link></li>
                <li>Something else</li>
            </ul>
        </>
    )
}

export default HomePage;