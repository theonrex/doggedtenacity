import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
import { Link } from "react-router-dom";
import BlogAuthor from "../components/BlogAuthor";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}
const Popular = () => {
  const [popular, setPopular] = useState();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type in ["post", "important"]] | order(_createdAt desc)[0..1] {
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
      .then((data) => setPopular(data));
    // console.log(setRecent);
  }, []);

  return (
    <div className="popularPost_main ">
      {popular &&
        popular.map((popularPost, index) => (
          <div className="popularPost_Link col50">
            <Link
              target="_blank"
              to={"/post/" + popularPost.slug.current}
              key={popularPost.slug.current}
            >
              <div className="mainImage">
                <div className="popularPost_img">
                  <img
                    src={urlFor(popularPost.mainImage).width(200).url()}
                    alt=""
                  />
                </div>
                <article className="text-mg">
                  <span>
                    <h3 className="post-Title"> {popularPost.title} </h3>
                  </span>
                  <p className="post_subtitle">
                    {popularPost.subTitle} <span>read more.....</span>{" "}
                  </p>
                  <div>
                    <div>
                      <BlogAuthor />
                    </div>
                    {/* <p> {post.publishedAt} </p> */}
                    <p className="date">
                      Published at :{" "}
                      {new Date(popularPost.publishedAt).toLocaleDateString()}
                    </p>
                  </div>{" "}
                </article>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Popular;
