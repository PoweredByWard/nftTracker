import NextAuth from "next-auth";
import TwitterProvider from "next-auth/providers/twitter";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default NextAuth({
	adapter: PrismaAdapter(prisma),
	providers: [
		TwitterProvider({
			clientId: process.env.TWITTER_CLIENT_ID,
			clientSecret: process.env.TWITTER_CLIENT_SECRET,
		}),
	],

	callbacks: {
		async signIn(user, account, profile) {
			try {
				console.log(user);
				await prisma.twitterAccount.upsert({
					create: {
						id: user.profile.id_str,
						banner_url: user.profile.profile_banner_url,
						profile_url: user.profile.profile_image_url_https,
						description: user.profile.description,
						followers_count: user.profile.followers_count,
						location: user.profile.location,
						following_count: user.profile.friends_count,
						name: user.profile.name,
						screen_name: user.profile.screen_name,
						verified: user.profile.verified,
					},
					update: {
						banner_url: user.profile.profile_banner_url,
						profile_url: user.profile.profile_image_url_https,
						description: user.profile.description,
						followers_count: user.profile.followers_count,
						location: user.profile.location,
						following_count: user.profile.friends_count,
						name: user.profile.name,
						screen_name: user.profile.screen_name,
						verified: user.profile.verified,
					},
					where: { id: user.profile.id_str },
				});
			} catch (error) {
				console.error(error);
				return false;
			}
			return true;
		},
	},
});
