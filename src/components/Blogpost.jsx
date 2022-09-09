import React, { useState, useEffect } from "react";
//sanity
import sanityClient from "../client";
import { Link } from "react-router-dom";
// import post from "../../solablog/schemas/post";
import imageUrlBuilder from "@sanity/image-url";
import BlogAuthor from "./BlogAuthor";
import Popular from "./popular";
function Blogpost() {
	const builder = imageUrlBuilder(sanityClient);

	function urlFor(source) {
		return builder.image(source);
	}
	const [postData, setPostData] = useState(null);
	// grab all data == post
	useEffect(() => {
		sanityClient
			//* means all data
			.fetch(
				`*[_type == "post"]{
            title,
			subTitle,
            slug,
			publishedAt,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`
			) //then get all data fetched and == to setPostData
			.then((data) => setPostData(data));
		// .catch(console.error)
	}, []);

	return (
		<div className="container">
			<section className="blog">
				<h1>
					{" "}
					A collection of posts about Dogged Tenacity and{" "}
					<span> developing a great mindset.</span>{" "}
				</h1>

				<p className="blog-p">
					{" "}
					Dogged tenacity is a positive mindset that helps you overcome any
					obstacle that stands in your way. It's about believing in yourself and
					never giving up on your goals no matter what happens around you.
				</p>
				<div className="">
					<Popular />
					<div className="postData rowx">
						{postData &&
							postData.map((post, index) => (
								<article className=" post-mg">
									{/* /Map over postData/ */}

									<Link
										to={"/post/" + post.slug.current}
										key={post.slug.current}
									>
										<span
											className="mainImage"
											data-aos="fade-down"
											data-aos-easing="linear"
											data-aos-duration="1500"
										>
											{/* src={urlFor(food.foodImage).width(200).url()} */}
											<img
												src={urlFor(post.mainImage).width(200).url()}
												alt=""
											/>
											<div className="text-mg">
												<span>
													<h3 className="post-Title"> {post.title} </h3>
												</span>
												<p className="post_subtitle">
													{post.subTitle} <span>read more.....</span>{" "}
												</p>
												<div>
													<div>
														<BlogAuthor />
													</div>
													{/* <p> {post.publishedAt} </p> */}
													<p className="date">
														Published at :{" "}
														{new Date(post.publishedAt).toLocaleDateString()}
													</p>
												</div>{" "}
											</div>
										</span>
									</Link>
								</article>
							))}
					</div>
				</div>
			</section>
		</div>
	);
}

export default Blogpost;
