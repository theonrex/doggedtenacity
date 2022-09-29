import React, { useState, useEffect } from "react";
import sanityClient from "../client"
import imageUrlBuilder from "@sanity/image-url";
import { Link } from "react-router-dom";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
	return builder.image(source);
}
const Recent = () => {

    const [recent, setRecent] =  useState();

    useEffect(() => {
        sanityClient
					.fetch(
						`*[_type == "post"]  | order(_createdAt desc)[0..1] {
            title,
			subTitle,
            slug,
			publishedAt,
            tags,
            
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`
					)
					.then((data) => setRecent(data));
                    // console.log(setRecent);

    }, [])

	return (
		<div className="recentPost_main ">
			<header>Recent Post</header>
			{recent &&
				recent.map((recentPost, index) => (
					<div className="recentPost_Link">
						<Link
							target="_blank"
							to={"/post/" + recentPost.slug.current}
							key={recentPost.slug.current}
						>
							<div className="recentPost_img">
								<img
									src={urlFor(recentPost.mainImage).width(200).url()}
									alt=""
								/>
							</div>
							<p className="recentPost_post_subtitle">
								{recentPost.subTitle} <span>read more.....</span>{" "}
							</p>
						</Link>
					</div>
				))}
		</div>
	);
};

export default Recent;
