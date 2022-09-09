import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Data } from "../data";


function PopularCurrent() {
    	const [localData, setLocalData] = useState(null);
  const { id } = useParams();

	const [data, setData] = useState({});
	console.log("check", data);

	useEffect(() => {
		const data = Data.find((_data) => String(_data.id) === id);
		if (data) {
			setData(data);
		}
	}, [id]);
	if (!data) return <div className="loadinf">please wait....</div>;

  return (
		<div>
			<div className="container">
				<header className="singlePost-title"> {data.title} </header>
				<div className="singlePost-img popuplar_current_img">
					<img src={data.image} alt="author" />{" "}
				</div>

				<section>
					<div className="authorImage-img">
						<img src={data.authorImg} alt="" />{" "}
					</div>
					<header className="singlePost-header">
						{" "}
						{data.author} <br /> <span>{data.bio}</span>{" "}
					</header>
					<article className="singlePost-body">{data.description}</article>
				</section>
			</div>
		</div>
	);
}

export default PopularCurrent