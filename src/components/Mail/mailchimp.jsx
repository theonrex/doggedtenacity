import React, { useState, useEffect } from "react";
import "./styles/form.css";
import Mail from "../../static/images/news.png";
import MailchimpForm from "./CustomForm";
function MailChimp() {

	return (
		<div>
			<div className="container rowx">
				<section className="col50 mail">
					<img src={Mail} alt="" />
				</section>
				<section
					className="col50 Subscribe "
					data-aos="fade-right"
					data-aos-offset="300"
					data-aos-easing="ease-in-sine"
				>
					<div>
						{" "}
						<h1>Subscribe to our newsletter</h1>
						<p>
							Be the first to get exclusive offers and the latest news on our
							product directly in your inbox.
						</p>
						<div className="">
							<MailchimpForm />
						</div>
					</div>
					{/* <MailChimp /> */}
				</section>
			</div>
		</div>
	);
}

export default MailChimp;
