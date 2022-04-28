import React, { useState } from "react"
import Block from "./Block"

export default function Data() {
	return (
		<div className="block space-between ">
			<div className="flex justify-around  my-24 mx-20">
				<Block
					heading=" Self Defense Tutorials"
					content="Here at Veerangana, we believe that every woman must possess knowledge of self defense and be sufficiently trained in martial arts. Hence, Veerangna makes it their mission to spread awareness about self defence , along with very detailed tutorials on the same, thus allowing women to increase their chances of coming out unharmed in such a case."
				/>

				<Block
					heading="Donate For A Cause"
					content="We recognize how many women, more so in rural areas, fear to stand up for their rights and against violence merely because they fear that they will be caught in a financial crunch in the worst of circumstances. And this is why we provide financial aid to such individuals so that more and more women can finally stand up to injustice and create a safe environment."
				/>

				<Block
					heading="Job Options"
					content="Independence is something that is valued by one and all equally and therefore, we provide many job opportunities to the unemployed women so that they can stand up on their own feet and become independent financially so as to not hesitate in emergency situations because of financial crunches."
				/>
			</div>
			<div className="flex justify-around my-24 mx-20">
				<Block
					heading="Contact with authorities"
					content="Veerangana is constantly updated about the latest news and achievements regarding the safety and empowerment and thus strives to make the audience informed about the same. This ensures that women can find all the essential help they need in one place and not have to work a lot in order to find the necessary information they need, thus reducing their stress."
				/>

				<Block
					heading="Share Story Anonymously"
					content="We also provide opportunities for women to narrate their tales of wit and bravery so as to become an inspiration for billions and gazillions of women out there, who might be facing a similar crisis in their lives. Moreover, we also provide an option of anonymity to reassure all the women that their identity is protected in case they face discomfort in revealing their identity."
				/>

				<Block
					heading="Connect with others"
					content="Networking is one of the biggest plus points in today’s society and helps to connect people from one corner of the world to the other.Similarly, Veerangna holds meeting and sessions such as video calls so as to increase positivity and optimism in each other’s lives and provide a chance to connect with others and form precious bonds."
				/>
			</div>
		</div>
	)
}
