import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import { useParams } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import ReadMore from "../categories/ReadMore";
import Recent from "../categories/Recent";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
	return builder.image(source);
}
function BlogsinglePost() {
	const [singlePost, setSinglePost] = useState(null);
	const { slug } = useParams();

	


	useEffect(() => {
		sanityClient
			.fetch(
				`*[slug.current == "${slug}"]{
           title,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            },
            body,
            "name": author->name,
            "authorImage": author->image,
            "bio": author-> bio[0].children[0].text,
			                "categories": categories[]->title

    }`
			)
			.then((data) => setSinglePost(data[0]));
	}, []);

	const [author, setAuthor] = useState(null);
	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "author"]{
            name,
            image,
                    "bio": bio[0].children[0].text,


        }`
			)
			.then((data) => setAuthor(data));
	}, []);

	if (!singlePost) return <div className="loading">Loading....</div>;
// window.innerHeight


	return (
		<div className="container-xxl">
			<div className="container-xxl rowx singlePost_d">
				{" "}
				<div className="col70">
					<header className="singlePost-title"> {singlePost.title} </header>
					<div className="singlePost-img">
						{/* <img src={urlFor(singlePost.mainImage).width(200).url()} alt="" />{" "} */}
					</div>

					<article className="singlePost-body">
						<BlockContent
							blocks={singlePost.body}
							projectId="ph4hgpxb"
							dataset="production"
						/>
					</article>
					{author &&
						author.map((item, index) => (
							<div className="rowx singlePost-body">
								
								<div className="author_div">
									<div className="author_img">
										<img src={urlFor(item.image).width(200).url()} alt="" />
									</div>

									<span className="items_section">
										<h3> {item.name} </h3>
										<h4> {item.bio} </h4>
									</span>
								</div>
							</div>
						))}
				</div>
				<div className="recent_id col30">
					<Recent />
				</div>
			</div>
			{/* <ReadMore /> */}
		</div>
	);
}

export default BlogsinglePost;
