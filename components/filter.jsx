import Number from "./number";
import Range from "./range";
export default function Filter({ title, children, collectionCount }) {
	return (
		<div className="border rounded-md border-gray-700 bg-gray-800 m-10 p-2">
			<h2 className="text-2xl font-thin text-white">
				Filter <Number value={collectionCount} /> collections
			</h2>
			<form>
				<div className="flex justify-around">
					<Range name="Last hour" />
					<Range name="Last day" />
					<Range name="Last week" />
				</div>
				<button class="border-2 border-transparent bg-blue-500 ml-3 py-2 px-4 font-bold uppercase text-white rounded transition-all hover:border-blue-500 hover:bg-transparent hover:text-blue-500">
					Filter
				</button>
				<button class="border-2 border-transparent bg-red-500 ml-3 py-2 px-4 font-bold uppercase text-white rounded transition-all hover:border-red-500 hover:bg-transparent hover:text-red-500">
					reset filter
				</button>
			</form>
		</div>
	);
}
