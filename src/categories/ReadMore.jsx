import React, { useState, useEffect } from "react";
import sanityClient from "../client";

const ReadMore = () => {
	const [related, setRelated] = useState();

	useEffect(() => {
		sanityClient
			.fetch(
				`*[*[_type == "post"] | slug: slug.current{
            title,
			subTitle,
            slug,
			publishedAt,
            tags,
            tags,
             categories[] -> {
          title,
          slug
  },
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`
			)
			.then((data) => setRelated(data));
		// console.log(setRelated);
	}, []);

	return (
		<div className="col30">
			<header>Read More</header>
			{related &&
				related.map((RelatedPost, index) => (
					<p className="post_subtitle">
						{RelatedPost.tags} <span>read tage.....</span>{" "}
						{RelatedPost.subTitle} <br />
						<span>read more.....</span>{" "}
					</p>
				))}
				m
		</div>
	);
};

export default ReadMore;
