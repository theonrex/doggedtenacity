import React from 'react'
import SamQuote from "../static/images/SAMQuote.jpg"
import Believe from "../static/images/Believe.jpg"
import Growth from "../static/images/growth.jpg"


function Gallery() {
  return (
		<div id='gallery'>
			<header className='Treading' >Gallery</header>
			<div>
				<div className=" rowx Gallery ">
					<div className="item-0 col30">
						 &nbsp;{" "}
						<img
							src={SamQuote}
							alt="SamQuote"
						/>
					</div>
					<div className="item-1 col30">
						 &nbsp;{" "}
						<img
							src={Believe}			
											alt="Believe"
						/>
					</div>
					<div className="item-2 col30">
						&nbsp;
						<img
							src={Growth}
							alt="Growth"
						/>{" "}
					</div>
				
				</div>
			</div>
		</div>
	);
}

export default Gallery