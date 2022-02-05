import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

export default function Pagination({ page, totalPages }) {
	const startRange = [...Array(page - 1 > 3 ? 3 : page - 1)];
	const endRange = [...Array(totalPages - page > 3 ? 3 : totalPages - page)];
	return (
		<>
			<div className="flex items-center justify-center py-5 lg:px-0 sm:px-6 px-4">
				<div className="w-full  flex items-center justify-between border-t border-gray-800">
					<Link href={`?page=${page == 1 ? 1 : page - 1}`}>
						<div className="flex items-center pt-3 text-gray-600 hover:text-blue-500 cursor-pointer">
							<svg
								width={14}
								height={8}
								viewBox="0 0 14 8"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M1.1665 4H12.8332"
									stroke="currentColor"
									strokeWidth="1.25"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M1.1665 4L4.49984 7.33333"
									stroke="currentColor"
									strokeWidth="1.25"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M1.1665 4.00002L4.49984 0.666687"
									stroke="currentColor"
									strokeWidth="1.25"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
							<p className="text-sm ml-3 font-medium leading-none ">Previous</p>
						</div>
					</Link>
					<div className="sm:flex hidden">
						{page != 1 && (
							<p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-blue-500 border-t border-transparent hover:border-blue-400 pt-3 mr-4 px-2">
								1
							</p>
						)}
						{page > 5 && (
							<p className="text-sm font-medium leading-none select-none text-gray-600  pt-3 mr-4 px-1">
								...
							</p>
						)}
						{page == 5 && (
							<p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-blue-500 border-t border-transparent hover:border-blue-400 pt-3 mr-4 px-1">
								2
							</p>
						)}
						{page - 1 != 2 && (
							<p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-blue-500 border-t border-transparent hover:border-blue-400 pt-3 mr-4 px-1">
								{page - 2}
							</p>
						)}
						{page - 1 != 1 && (
							<p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-blue-500 border-t border-transparent hover:border-blue-400 pt-3 mr-4 px-1">
								{page - 1}
							</p>
						)}

						<p className="text-sm font-medium leading-none cursor-pointer text-blue-500 border-t border-blue-400 pt-3 mr-4 px-2">
							{page}
						</p>

						{page + 1 != totalPages && (
							<p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-blue-500 border-t border-transparent hover:border-blue-400 pt-3 mr-4 px-1">
								{page + 1}
							</p>
						)}

						{page + 2 != totalPages && (
							<p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-blue-500 border-t border-transparent hover:border-blue-400 pt-3 mr-4 px-1">
								{page + 2}
							</p>
						)}
						{page == totalPages - 5 && (
							<p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-blue-500 border-t border-transparent hover:border-blue-400 pt-3 mr-4 px-1">
								{totalPages - 1}
							</p>
						)}
						{page < totalPages - 5 && (
							<p className="text-sm font-medium leading-none select-none text-gray-600  pt-3 mr-4 px-1">
								...
							</p>
						)}
						{page == totalPages - 5 && (
							<p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-blue-500 border-t border-transparent hover:border-blue-400 pt-3 mr-4 px-1">
								{totalPages-1}
							</p>
						)}

						{page != totalPages && (
							<p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-blue-500 border-t border-transparent hover:border-blue-400 pt-3 mr-4 px-2">
								{totalPages}
							</p>
						)}
					</div>
					<Link href={`?page=${page == totalPages ? totalPages : page + 1}`}>
						<div className="flex items-center pt-3 text-gray-600 hover:text-blue-500 cursor-pointer">
							<p className="text-sm font-medium leading-none mr-3">Next</p>
							<svg
								width={14}
								height={8}
								viewBox="0 0 14 8"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M1.1665 4H12.8332"
									stroke="currentColor"
									strokeWidth="1.25"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M9.5 7.33333L12.8333 4"
									stroke="currentColor"
									strokeWidth="1.25"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M9.5 0.666687L12.8333 4.00002"
									stroke="currentColor"
									strokeWidth="1.25"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</div>
					</Link>
				</div>
			</div>
		</>
	);
}
