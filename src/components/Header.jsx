import { useState } from "react";
import cx from "classnames";

import { IconBookmark } from "../assets/images/icon-bookmark";

import logoMastercraft from "../assets/images/logo-mastercraft.svg";
import { Button } from "./Button";

const buttonBokmarkStyles = {
	base: "relative -left-8 pl-10 py-3 pr-6 rounded-full font-bold hidden md:inline-block bg-gray-100",
	inactive: "text-dark-gray",
	active: "text-moderate-cyan",
};

export const Header = () => {
	const [isBookmarked, setIsBookmarked] = useState(false);

	return (
		<div className="bg-white border border-slate-100 rounded-lg">
			<div className="flex justify-center">
				<img className="relative -top-6" src={logoMastercraft} />
			</div>
			<div className="flex flex-col text-center space-y-6">
				<p className="font-bold text-xl md:text-3xl w-48 md:w-auto mx-auto">
					Mastercraft Bamboo Monitor Riser
				</p>
				<p className="text-dark-gray text-sm md:text-lg w-10/12 mx-auto">
					A beautiful & handcrafted monitor stand to reduce neck and
					eye strain.
				</p>

				<div className="flex justify-center md:justify-between space-x-2 md:space-x-0 md:!mx-auto pb-8 md:w-11/12">
					<Button text="Back this project" />
					<button
						className="flex items-center"
						onClick={() => setIsBookmarked((prev) => !prev)}>
						<IconBookmark
							className="relative z-10"
							bgFill={cx({
								"fill-black": !isBookmarked,
								"fill-moderate-cyan": isBookmarked,
							})}
							iconFill={
								cx({
									"fill-dark-gray": !isBookmarked,
									"fill-white": isBookmarked,
								})
							}
						/>
						<span
							className={cx(buttonBokmarkStyles.base, {
								[buttonBokmarkStyles.inactive]: !isBookmarked,
								[buttonBokmarkStyles.active]: isBookmarked,
							})}>
							Bookmark
						</span>
					</button>
				</div>
			</div>
		</div>
	);
};
