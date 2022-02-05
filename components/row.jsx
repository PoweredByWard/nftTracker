import Pagination from "./pagination";

export default function Row({ title, page, totalPages, children }) {
	return (
		<div className="p-5">
			<a href="" className="">
				<h2 className="text-white text-3xl pl-2">{title}</h2>
			</a>
			<div className="whitespace-nowrap flex flex-wrap py-3 gap-5">
				{children}
			</div>
			<Pagination page={page} totalPages={totalPages} />
		</div>
	);
}
