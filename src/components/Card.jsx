import { Button } from "./Button";

/** @type {import("react").FC<{title: string, price: string, description: string, limit: number}>} */
export const Card = ({ title, price, description, limit }) => (
	<div className="border border-slate-200 rounded-md p-4 md:px-10">
		<div className={`space-y-6 ${!limit && "opacity-40"}`}>
			<div className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:justify-between text-sm md:text-lg md:py-4">
				<p className="font-bold">{title}</p>
				<p className="font-medium text-moderate-cyan md:text-base">
					{price}
				</p>
			</div>

			<p className="text-dark-gray text-sm md:text-base leading-6">
				{description}
			</p>

			<div className="space-y-6 md:space-y-0 md:flex md:justify-between">
				<div className="flex items-center space-x-2">
					<p className="font-bold text-3xl">{limit}</p>
					<p className="text-dark-gray">left</p>
				</div>
				<Button
					text={limit ? "Select Reward" : "Out of stock"}
					size="sm"
					disabled={limit === 0}
				/>
			</div>
		</div>
	</div>
);
