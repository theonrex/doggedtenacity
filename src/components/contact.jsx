import React, { useRef, useState, useEffect } from "react";
import emailjs, { init } from "@emailjs/browser";

// import BlogNewsLetter from "./BlogNewsLetter";
// import CustomForm from "./Mail/mailchimp";
import Mail from "../static/images/news.png";
import MailchimpForm from "./Mail/CustomForm";

function Contact() {
	const form = useRef();

	const [values, setValues] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [status, setStatus] = useState("");

	const sendEmail = (e) => {
		e.preventDefault(); // prevents the page from reloading when you hit “Send”

		emailjs
			.sendForm(
				"service_v84q8ig",
				"template_c4akkls",
				form.current,
				"jrSidcm3VFov762B4"
			)
			.then(
				(response) => {
					console.log("SUCCESS!", response);
					setValues({
						name: "",
						email: "",
						message: "",
					});
					setStatus("SUCCESS");
				},
				(error) => {
					console.log("FAILED...", error);
				}
			);
	};
	// 		.then(
	// 			(result) => {
	// 				return alert(`"SUCCESS!" `, result);
	// 				setValues({
	// 					message: ''
	// 				});
	// 				setStatus('SUCCESS')
	// 			},
	// 			(error) => {
	// 				console.log("FAILED...", error);
	// 			}
	// 		);
	// };

	   useEffect(() => {
				if (status === "SUCCESS") {
					setTimeout(() => {
						setStatus("");
					}, 3000);
				}
			}, [status]);

			 const handleChange = (e) => {
					setValues((values) => ({
						...values,
						[e.target.name]: e.target.value,
					}));
				};

	// const [message, setMessage] = useState("");
	// const [error, setError] = useState(null);

	// function isValidEmail(email) {
	// 	return /\S+@\S+\.\S+/.test(email);
	// }
	// const handleChange = (event) => {
	// 	if (!isValidEmail(event.target.value)) {
	// 		setError("Email is invalid");
	// 	} else {
	// 		setError(null);
	// 	}

	// 	setMessage(event.target.value);
	// };

	return (
		<div>
			{/* <BlogNewsLetter/> */}
			<div className="rowx container contact_mg">
				<section
					className="col50 icons-social"
					data-aos="fade-right"
					data-aos-offset="300"
					data-aos-easing="ease-in-sine"
				>
					<h1>
						Contact Us <br />
					</h1>
					<h1 className="usflex">
						<span className="contact-line"> </span>
					</h1>
					<a href="/#" className="">
						<i className="fab fa-facebook-f"> FaceBook</i>
					</a>
					<a href="/#" className="">
						<i className="fab fa-google"> Gmail</i>
					</a>
					<a href="/#" className="">
						<i class="fa-solid fa-phone"> +2347063528046</i>{" "}
					</a>{" "}
					<a href="/#" className="">
						<i class="fa-brands fa-whatsapp"> +2347063528046</i>{" "}
					</a>
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
					<form ref={form} onSubmit={sendEmail}>
						<label>Name</label>
						<input
							type="text"
							placeholder="John Smith"
							name="name"
							value={values.name}
							id="name"
							onChange={handleChange}
						/>
						<label>Email</label>
						<input
							type="email"
							placeholder="example@email.com"
							name="email"
							onChange={handleChange}
							id="message"
							value={values.email}
							handleChange={handleChange}
						/>
						{/* {error && <p style={{ color: "red" }}>{error}</p>} */}

						<label>Message</label>
						<textarea
							name="message"
							value={values.message}
							onChange={handleChange}
							handleChange={handleChange}
							placeholder="Type Your Message Here"
						/>
						<input type="submit" value="Send Message" />
					</form>
				</section>
			</div>
		</div>
	);
	
}

const renderAlert = () => (
  <div className="px-4 py-3 leading-normal text-blue-700 bg-blue-100 rounded mb-5 text-center">
    <p>your message submitted successfully</p>
  </div>
)
export default Contact;
