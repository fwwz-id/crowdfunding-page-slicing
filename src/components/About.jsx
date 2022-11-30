import { Card } from "./Card";

/** @type {{title: string, price: string, description: string, limit: number}[]} */
const aboutCards = [
	{
		title: "Bamboo Stand",
		price: "Pledge $25 or more",
		description:
			"You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
		limit: 101,
	},
	{
		title: "Black Edition Stand",
		price: "Pledge $75 or more",
		description:
			"You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
		limit: 64,
	},
	{
		title: "Mahogany Special Edition",
		price: "Pledge $200 or more",
		description:
			"You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
		limit: 0,
	},
];

export const About = () => (
	<div className="bg-white border border-slate-100 rounded-lg">
		<div className="w-11/12 mx-auto py-8 px-2 md:w-10/12">
			<p className="font-bold text-lg md:text-xl mb-6">
				About this project
			</p>

			<div className="space-y-6 mb-6">
				<p className="text-dark-gray text-sm md:text-base leading-6 md:leading-7">
					The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
					platform that elevates your screen to a more comfortable
					viewing height. Placing your monitor at eye level has the
					potential to improve your posture and make you more
					comfortable while at work, helping you stay focused on the
					task at hand.
				</p>
				<p className="text-dark-gray text-sm md:text-base leading-7 md:leading-8">
					Featuring artisan craftsmanship, the simplicity of design
					creates extra desk space below your computer to allow
					notepads, pens, and USB sticks to be stored under the stand.
				</p>
			</div>

			<div className="space-y-6">
				{aboutCards.map((aboutCard, index) => (
					<Card
						key={index}
						title={aboutCard.title}
						price={aboutCard.price}
						description={aboutCard.description}
						limit={aboutCard.limit}
					/>
				))}
			</div>
		</div>
	</div>
);
