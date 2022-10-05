import React from "react";
import Image from "../static/images/SAMpng.png";

export default function BlogAbout() {
	return (
		<div>
			<section className="container">
				<div className="rowx about">
					<section
						className="about-img col40"
						data-aos="fade-right"
						data-aos-offset="300"
						data-aos-easing="ease-in-sine"
						data-aos-duration="2000"
					>
						{" "}
						<img src={Image} alt="" srcset="" />{" "}
					</section>
					<section className="col60">
						<header
							className=" about-header"
							data-aos="zoom-in"
							data-aos-duration="2000"
						>
							I'm Your Guy
						</header>
						<p className="about_p" data-aos="fade-up" data-aos-duration="3000">
							Kayode Samuel Olakunle "Samwonders" is a business enthusiast who
							is keen on leading a balanced life with the pursuit of Finance,
							Faith, Family, Fitness and Freedom. He holds a B.Agric in
							Agricultural Economics from the prestigious Federal University of
							Agriculture,Abeokuta. He has served in several leadership capacity
							across different organisations and is also on a number of board of
							directors.
							<br />
							Samwonders is a firm believer in the reality that people can live
							well balanced lives with no part suffering or lacking because of
							the pursuit of another. Shalom means Peace, a deeper meaning is
							"Nothing Missing, Nothing Lacking and Nothing Broken". People
							deserve to lead Peaceful lives, as someone who has been through
							life defining challenges and now has a life philosophy of "Dogged
							Tenacity" , he has thought it best to share this philosophy with
							the world and help people live a life of peace even in a world of
							chaos.
						</p>
					</section>
				</div>
			</section>
		</div>
	);
}
