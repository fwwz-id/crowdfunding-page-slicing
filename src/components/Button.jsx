/** @type {import("react").FC<{text: string, size: "sm" | "lg", disabled: boolean}>}*/
export const Button = ({ text, size, disabled = false}) => (
	<button
		className={`bg-moderate-cyan text-white ${
			size === "sm" ? "px-8 py-4 text-sm" : "px-12 py-4"
		} rounded-full hover:bg-dark-cyan duration-100 font-bold disabled:bg-dark-gray`}
		disabled={disabled}>
		{text}
	</button>
);
