import { Navbar } from "./components/Navbar";
import { Banner } from "./components/Banner";
import { Header } from "./components/Header";
import { DoubleText } from "./components/DoubleText";
import { ProgressBar } from "./components/ProgressBar";
import { About } from "./components/About";

const doubleTexts = [
	{
		first: "$89,914",
		second: "of $100,000 backed",
		withLine: true,
	},
	{
		first: "5,007",
		second: "total backers",
		withLine: true,
	},
	{
		first: "56",
		second: "days left",
		withLine: false,
	},
];

function App() {
	return (
		<>
			<Navbar />
			<Banner />

			<main className="container relative -top-20 space-y-8">
				<Header />

				<div className="bg-white flex flex-col md:flex-row md:flex-wrap items-center border border-slate-100 rounded-lg text-center md:text-left py-12 space-y-6 md:space-y-0">
					{doubleTexts.map((doubleText, index) => (
						<DoubleText
							key={index}
							text1={doubleText.first}
							text2={doubleText.second}
							withLine={doubleText.withLine}
						/>
					))}

					<ProgressBar />
				</div>

				<About />
			</main>
		</>
	);
}

export default App;
