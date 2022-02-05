import { motion } from "framer-motion";

import Number from "./number";
const Slider = function ({ title, value }) {
	return (
		<div>
			<div className="mt-3 text-white flex justify-between text-sm">
				<span className="text-gray-400 font-semibold">{title}</span>
				<span>{value}</span>
			</div>
			<div className="h-1 w-full bg-black mt-1.5 rounded-full">
				<motion.div
					className="h-1 rounded-full"
					animate={{
						width: `${value}%`,
					}}
					transition={{ delay: 0.5 }}
					transition={{ duration: 0.8 }}
					initial={{ width: 0 }}
					style={{
						backgroundColor: `rgb(${510 - 5.1 * value},${5.1 * value},0)`,
					}}
				></motion.div>
			</div>
		</div>
	);
};

export default function NewColection({ collection }) {
	return (
		<article className="w-72 mx-auto bg-gray-800 rounded-2xl pb-6  cursor-pointer hover:shadow-2xl">
			<div className="w-full mx-auto h-28 flex justify-center items-stretch overflow-hidden">
				{collection.banner_url && (
					<img
						src={collection.banner_url}
						className="rounded-t-2xl object-cover flex-grow"
						alt="profile picture"
					/>
				)}
				{!collection.banner_url && (
					<div
						className="w-full h-full rounded-t-2xl"
						style={{
							backgroundColor: `rgb(
								${Math.random() * 100 + 155},
								${Math.random() * 100 + 155},
								${Math.random() * 100 + 155}
							)`,
						}}
					></div>
				)}
			</div>
			<div className=" -mt-14 flex flex-col justify-between h-80">
				<div className="px-8">
					<div className=" w-24 h-24 relative shadow-xl mx-auto rounded-full border-2 border-gray-400 bg-gray-400 flex justify-center items-stretch overflow-hidden">
						{collection.profle_url != "" && (
							<img
								src={collection.profile_url.replace("normal", "200x200")}
								className="rounded-full grow object-cover"
								alt="profile picture"
							/>
						)}
						{!collection.profile_url && (
							<img
								src={`https://storage.googleapis.com/opensea-static/opensea-profile/${Math.round(
									Math.random() * 31 + 1
								)}.png`}
								className="rounded-full grow object-cover"
								alt="profile picture"
							/>
						)}
					</div>
					<div className="mt-1">
						<h2 className="text-white font-bold text-lg tracking-wide text-center whitespace-pre-wrap line-clamp-2">
							<div className="flex items-center justify-center w-full">
								{collection.name}
								{collection.verified && (
									<svg
										fill="white"
										viewBox="0 0 24 24"
										aria-label="Verified account"
										className="h-4 w-4 mt-1 ml-1"
									>
										<g>
											<path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
										</g>
									</svg>
								)}
							</div>
						</h2>
					</div>
					<div className="flex w-full justify-around">
						<p className=" text-white text-sm flex gap-1 items-center">
							<span className="text-gray-400 font-semibold">Followers:</span>{" "}
							<span>
								<Number value={collection.followers_count} />
							</span>
						</p>
						<p className=" text-white text-sm flex gap-1 items-center">
							<span className="text-gray-400 font-semibold">Following:</span>{" "}
							<span>
								<Number value={collection.following_count} />
							</span>
						</p>
					</div>
				</div>
				<p className="mt-1 mx-4 line-clamp-2 text-gray-300 text-xs whitespace-pre-wrap text-center">
					{collection.description}
				</p>
				<div className="px-8">
					{/* <p className="mt-1 text-white text-sm flex gap-1 items-center">
						<span className="text-gray-400 font-semibold">Floor price:</span>{" "}
						<span>{collection.floor_price}</span>
						<img src="./eth.png" className="h-4" />
					</p>
					<p className="mt-1 text-white text-sm flex gap-1 items-center">
						<span className="text-gray-400 font-semibold">Average price:</span>{" "}
						<span>{collection.average_price.toFixed(6)}</span>
						<img src="./eth.png" className="h-4" />
					</p> */}
					<h3 className="text-white font-bold text-md tracking-wide text-center whitespace-pre-wrap line-clamp-3">
						Rarety:
					</h3>
					<Slider
						title="Background:"
						value={(collection.name.length * 33) % 100}
					/>
					<Slider title="Skin:" value={collection.followers_count % 100} />
					<Slider
						title="Outfit:"
						value={collection.following_count % 100}
					/>
				</div>
			</div>
		</article>
	);
}
