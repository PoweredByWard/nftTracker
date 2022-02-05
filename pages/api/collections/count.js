import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
	try {
		const count = await prisma.twitterAccount.count({
			where: {
				collection: true,
			},
		});
		await prisma.$disconnect();
		res.status(200).json(count);
	} catch (err) {
		await prisma.$disconnect();
		res.status(500).json(0);
	}
}
