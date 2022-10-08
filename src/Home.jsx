import React from "react";
// import "./static/css/style.css";
//styles
// import "./index.css";
import "./static/css/style.css"
import "bootstrap/dist/css/bootstrap.min.css";

// import MyCrud from "./myCrud";

//images
import Goals from "./static/images/man.png"


//pages
import Popular from "./components/popular"
import Explore from "./components/Explore";
import Gallery from "./components/Gallery";
import Recent from "./categories/Recent";
import ReadMore from "./categories/ReadMore";


function App() {
	return (
		<div className="container" >
			{/* <MyCrud /> */}

			<div className="rowx landing-page">
				<div className="col50">
					<header className="Beautiful">
						Faith ~ Finance - Family - Fitness - Future
					</header>
					<h1 className="Treading">
						Inspiring You
						<br />
						<span> With Words And</span> <br /> Stories That Speak.
					</h1>
					<p className="philosophy">
						We provide relevant, topical, and encouraging articles on everything
						from Faith, Finance, Family, Fitness, Future. Our philosophy is
						Inspiring You With Words And Stories That Speak.
					</p>
				</div>
				<div className="col50  formula">
					<img src={Goals} alt="unsplash-img" />
					<p>
						"Life has no formula to stop a man who has in him the yeast to Rise"
						<br />
						<span>E.W Kenyon.</span>
					</p>
				</div>
			</div>
			<header className="popular">Popular Post</header>

			<div className="rowx"></div>

			<div>
				<Popular />
			</div>
			<div
				className="explore_bg"
			
			>
				<Explore />
			</div>
			<div
			
			>
				<Gallery />
			</div>
		</div>
	);
}

export default App;
