import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/nav";
import NewColection from "../components/newColection";
import Row from "../components/row";
import Filter from "../components/filter";
import { useRouter } from "next/router";
import Link from "next/link";

export const getServerSideProps = async (context) => {
	const { page } = context.query;
	const fetchData = async (url, options) => {
		const res = await fetch(url, {
			headers: { Accept: "application/json" },
			...options,
		});
		const data = await res.json();

		return data;
	};
	const baseURL = context.req.headers.host;
	const collections = await fetchData(
		`http://${baseURL}/api/collections?page=${page}`,
		{ Method: "GET" }
	);
	const collectionCount = await fetchData(
		`http://${baseURL}/api/collections/count`,
		{ Method: "GET" }
	);

	if (!collections) {
		return {
			notFound: true,
		};
	}
	return {
		props: { collections: collections, collectionCount: collectionCount },
	};
};

export default function Home({ collections, collectionCount }) {
	const router = useRouter();
	const { page } = router.query;
	const pageNumber = Number.parseInt(page);
	// const bears = [
	// 	{
	// 		name: "Cool bear",
	// 		profile_url: "/cool1.png",
	// 		followers_count: 1830499,
	// 		following_count: 12493,
	// 		description: "I like to hang out with my friends."
	// 	},
	// 	{
	// 		name: "Happy bear",
	// 		profile_url: "/happy1.png",
	// 		followers_count: 363,
	// 		following_count: 247,
	// 		description: "I love banana's!"
	// 	},
	// 	{
	// 		name: "Relaxed bear",
	// 		profile_url: "/relaxed1.png",
	// 		followers_count: 10487,
	// 		following_count: 1243,
	// 		description: "Don't worry it will all be good!"
	// 	},
	// 	{
	// 		name: "Smart bear",
	// 		profile_url: "/smart1.png",
	// 		followers_count: 4213,
	// 		following_count: 12,
	// 		description: "I am not just an image."
	// 	},
	// 	{
	// 		name: "ETH bear",
	// 		profile_url: "/ethBoy.png",
	// 		followers_count: 34762,
	// 		following_count: 261,
	// 		description: "I like gas fees"
	// 	},
	// ];
	return (
		<>
			<Filter collectionCount={collectionCount}>test</Filter>


			<Row
				title="Trending collections"
				page={pageNumber ? pageNumber : 1}
				totalPages={Math.ceil(collectionCount / 60)}
			>
				{collections &&
					collections.map((collection) => {
						return <NewColection collection={collection} />;
					})}
			</Row>
		</>
	);
}
