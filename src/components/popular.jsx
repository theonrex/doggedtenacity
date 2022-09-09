import React, { useState, useEffect } from "react";
import "../static/css/style.css";
import { Data } from "../data";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

function Popular() {
const [localProjects, setLocalProjects] = useState(null);
let naviagte = useNavigate();
	return (
		<div>
			<header className="popular">Popular Post</header>
			<div className="postData  rowx">
				{Data.map((data, key) => {
					return (
						<div
							className="post-mg"
							onClick={() => naviagte(`/posts/${data.id}`)}
						>
							<div>
								<span className="mainImage">
									<img src={data.image} alt="author" />
									{/* <img src={(post.mainImage).width(200).url()} alt="" /> */}
									<div className="text-mg">
										<span>
											<h3 className="post-Title"> {data.title} </h3>
										</span>
										<p className="post_subtitle">
											{data.description} <span>read more.....</span>{" "}
										</p>
										<div>
											<div>
												<div className="rowx">
													<div className="author-img">
														<img src={data.authorImg} alt="author" />
													</div>

													<span className="items-section">
														<h3> {data.author} </h3>
														<h4> {data.bio} </h4>
													</span>
												</div>
											</div>
											{/* <p> {post.publishedAt} </p> */}
											<p className="date">
												Published at :{" "}
												{new Date(data.publishedAt).toLocaleDateString()}
											</p>
										</div>{" "}
									</div>
								</span>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Popular;
