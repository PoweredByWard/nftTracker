import { useEffect, useRef, useState } from "react";

export default function Range({name}) {
	const [value, onChange] = useState(1);
	const buble = useRef();
	return (
		<div className="w-48 my-10">
			<label
				for="last-hour"
				class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
			>
				{name}:
			</label>
			<div className="flex justify-between items-center">
				<p className="text-white p-2">{value}</p>
				<input
					type="range"
					min="1"
					max="100"
					value={value}
					onChange={({ target: { value: radius } }) => {
						onChange(radius);
					}}
					type="range"
					id="last-hour"
					class="rounded-lg overflow-hidden appearance-none bg-gray-400 h-3 w-128 cursor-ew-resize"
				/>
			</div>
		</div>
	);
}
