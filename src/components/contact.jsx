import React, { useRef, useState, useEffect } from "react";
import emailjs, { init } from "@emailjs/browser";
import { useForm } from "react-hook-form";

// import BlogNewsLetter from "./BlogNewsLetter";
// import CustomForm from "./Mail/mailchimp";
import Mail from "../static/images/news.png";
import MailchimpForm from "./Mail/CustomForm";

function Contact() {
	const form = useRef();
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm();

	const [status, setStatus] = useState("");
	const [failed, setFailed] = useState("");

	const onSubmit = (data) => {
		emailjs
			.sendForm(
				process.env.REACT_APP_SERVICE,
				process.env.REACT_APP_TEMPLATE,
				form.current,
				process.env.REACT_APP_EMAILJS
			)
			.then(
				(response) => {
					console.log("SUCCESS!", response);
					// setData({
					// 	register,
					// });
					setStatus("SUCCESS");
					setTimeout(() => {
						reset({
							name: "",
							email: "",
							message: "",
						});
					}, 9000);
				},
				(error) => {
					alert("FAILED...", error);
					setFailed("FAILED");
				}
			);

		console.log(onSubmit);
	};

	return (
		<div>
			{/* <BlogNewsLetter/> */}
			<div className="rowx container contact_mg">
				<section
					className="col50 icons-social"
					data-aos="fade-down"
					data-aos-easing="linear"
					data-aos-duration="1500"
				>
					<h1>
						Contact Us <br />
					</h1>
					<h1 className="usflex">
						<span className="contact-line"> </span>
					</h1>
					<a
						href="https://www.instagram.com/just_sam_wonders?r=nametag"
						className=""
					>
						<i className="fab fa-instagram">just_sam_wonders </i>
					</a>
					<a
						href="https://twitter.com/just_samwonders?t=2q9YJeomC7Sv_-6KTxaZ8Q&s=08"
						className=""
					>
						<i className="fab fa-twitter">just_samwonders</i>
					</a>
					<a
						href="mailto:tenacitydogged@gmail.com?subject=subject&cc=cc@example.com"
						className=""
					>
						<i class="fab fa-google"> Gmail </i>{" "}
					</a>{" "}
				</section>
				<section
					className="col50 contact"
					data-aos="fade-down"
					data-aos-easing="linear"
					data-aos-duration="1500"
				>
					<header>Get in Touch</header>
					<p></p>
					{status && renderAlert()}
					{failed && renderError()}
					{onSubmit}
					<form ref={form} onSubmit={handleSubmit(onSubmit)}>
						<label>Name</label>
						<input
							type="text"
							placeholder="John Smith"
							name="name"
							id="name"
							{...register("name", { required: true })}
						/>
						{errors.name && <p className="error">Input Your Name</p>}
						<label>Email</label>
						<input
							type="email"
							name="email"
							// onChange={handleChange}
							id="email"
							placeholder="Your Email"
							{...register("email", {
								required: true,
								pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
							})}
						/>
						{errors.email && <p className="error">Invalid email</p>}
						<label>Message</label>
						<textarea
							type="message"
							name="message"
							id="message"
							// onChange={handleChange}
							{...register("message", { required: true })}
							placeholder=" Your Message"
						/>
						
						{errors.message && (
							<p className="error"> Message Cannot be empty</p>
						)}
						<input type="submit"  onClick={reset} />
					</form>
				</section>
			</div>
		</div>
	);
}
const renderAlert = () => (
	<div className="px-4 py-3  submitted ">
		<p>Your Message Submitted Successfully</p>
	</div>
);
const renderError = () => (
	<div className="px-4 py-3  submitted failed">
		<p>
			{" "}
			<a href="#social-media">
				Your Message was not Submitted Successfully.{" "}
				<span>Click here to contact me via social media links</span>
			</a>{" "}
		</p>
	</div>
);
export default Contact;
