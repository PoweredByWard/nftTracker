import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
	const { page } = req.query;
	let pageNumber = Number.parseInt(page);
	if (!pageNumber) {
		pageNumber = 1;
	}
	try {
		const collections = await prisma.twitterAccount.findMany({
			where: { collection: true },
			orderBy: {
				followers_count: "desc",
			},
			take: 60,
			skip: (pageNumber - 1) * 60,
		});
		const count = await prisma.twitterAccount.count();
		await prisma.$disconnect();
		res.status(200).json(collections);
	} catch (err) {
		await prisma.$disconnect();
		res.status(500).json([]);
	}
}
