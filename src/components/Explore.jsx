import React from 'react'
import FaithImg from '../static/images/Faith-Website.jpg'
import FinanceImg from '../static/images/money-2724241_640.jpg'
import Familyimg from '../static/images/family.jpg'
import FitnessImg from '../static/images/fitness.jpg'
import Future from '../static/images/future.jpg'

function Explore() {
  return (
		<div>
			<div className="rowx">
				<div className="col50 bible">
					<img
						src={FaithImg}
						alt="Faith"
					/>
				</div>
				<div className="col50 explore-mg">
					<h1 className="Treading Insightful">
					Faith
					</h1>
					<p className="philosophy">
					Faith is the substance or assurance of things we hope for, but have not yet received. Faith (confidence, belief, trust) is also our evidence of that which is not seen—the invisible spiritual things. Faith comes before a prayer is answered or before an individual has received what he or she has requested from God. If we have received what we asked for, then faith is not needed.
					</p>
				
				</div>
			</div>
			<div className="rowx Finance">
			<div className="col50 explore-mg Finance_text">
					<h1 className="Treading Insightful">
					Finance
					</h1>
					<p className="philosophy">
						We focus on how to grow in relationship with The Father, Son and
						Holy Spirit. We provide relevant, topical, and encouraging articles
						on everything from Living a holy life to parenting, spiritual
						warfare to healing. Our philosophy is when we know Christ
						intimately.
					</p>
				
				</div>
				<div className="col50 bible Finance_img">
					<img
						src={FinanceImg}
						alt="Finance"
					/>
				</div>
			
			</div>
			<div className="rowx">
				<div className="col50 bible">
					<img
						src={Familyimg}
						alt="Family"
					/>
				</div>
				<div className="col50 explore-mg">
					<h1 className="Treading Insightful">
					Family
					</h1>
					<p className="philosophy">
						We focus on how to grow in relationship with The Father, Son and
						Holy Spirit. We provide relevant, topical, and encouraging articles
						on everything from Living a holy life to parenting, spiritual
						warfare to healing. Our philosophy is when we know Christ
						intimately.
					</p>
				
				</div>
			</div>
			<div className="rowx Fittness">
		
				<div className="col50 explore-mg Fittness_text">
					<h1 className="Treading Insightful">
					Fitness
					</h1>
					<p className="philosophy">
						We focus on how to grow in relationship with The Father, Son and
						Holy Spirit. We provide relevant, topical, and encouraging articles
						on everything from Living a holy life to parenting, spiritual
						warfare to healing. Our philosophy is when we know Christ
						intimately.
					</p>
				
				</div>
				<div className="col50 bible Fittness_img">
					<img
						src={FitnessImg}
						alt="Fittness"
					/>
				</div>
			</div>
			<div className="rowx">
				<div className="col50 bible">
					<img
						src={Future}
						alt="un"
					/>
				</div>
				<div className="col50 explore-mg">
					<h1 className="Treading Insightful">
					Future
					</h1>
					<p className="philosophy">
						We focus on how to grow in relationship with The Father, Son and
						Holy Spirit. We provide relevant, topical, and encouraging articles
						on everything from Living a holy life to parenting, spiritual
						warfare to healing. Our philosophy is when we know Christ
						intimately.
					</p>
				
				</div>
			</div>

		
		</div>
	);
}

export default Explore