import React from 'react'

function NewsLettersubcribe() {
  return (
		<div className=" NewsLettersubcribe container">
			<div className="rowx sub_width">
				<section className="col50 newsletter_text">
					<h2> Don't miss the new updates</h2>
					<p>Subscribe to my newsletter and get the latest update from me</p>
				</section>
				<section className="col50 newsletter_btn">
					<div className="absolute_btn">
						<button className="newsletter">
							<a href="/mailChimp"> Subscribe Now</a>
						</button>
					</div>
				</section>
			</div>
		</div>
	);
}

export default NewsLettersubcribe