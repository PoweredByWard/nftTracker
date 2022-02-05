import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Navbar from "../components/nav";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
	return (
		<SessionProvider session={session}>
			<div className="flex">
				<Navbar />
				<main className=" bg-gray-900 font-medium items-center h-screen w-full overflow-x-hidden">
					<Component {...pageProps} />
				</main>
			</div>
		</SessionProvider>
	);
}

export default MyApp;
