import { Line } from "./Line";

export const DoubleText = ({ text1, text2, withLine }) => (
	<div
		className={`md:px-12 ${
			withLine && "md:border-r md:border-r-slate-200"
		}`}>
		<p className="font-bold text-3xl">{text1}</p>
		<p className="text-dark-gray text-sm mt-2 mb-4">{text2}</p>
		{withLine && <Line />}
	</div>
);
