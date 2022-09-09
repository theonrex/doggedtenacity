import React from 'react';
import { useForm } from "react-hook-form";
import '../static/css/form.css'

function BlogNewsLetter() {
     const {
				register,
				formState: { errors },
				handleSubmit,
			} = useForm();

			const onSubmit = (data) => console.log(data);
  return (
		<div className="container">
			<section className="rowx">
				<div className="col50">
					<img src="https://img.icons8.com/external-flaticons-flat-flat-icons/100/000000/external-newsletter-press-and-media-flaticons-flat-flat-icons.png" />
				</div>
				<div className="Join_us">
					<h1>Join us</h1>
					<p>Subscribe our newsletter and stay up to date about us</p>
				</div>
			</section>
			<div>
				<form onSubmit={handleSubmit(onSubmit)}>
				
				
					<input
						{...register("mail", { required: "Email Address is required" })}
					/>
					<p className='error'>{errors.mail?.message}</p>

					<input type="submit" />
				</form>
			</div>
		</div>
	);
}

export default BlogNewsLetter