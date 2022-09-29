import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Data } from "../data";
import Recent from "../categories/Recent";


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
	if (!data) return <div className="loading">please wait....</div>;

  return (
		<div className="container popular_div rowx">
			<div className=" popuplar_current col70">
				<header className="singlePost-title"> {data.title} </header>
				<div className="singlePost-img popuplar_current_img">
					<img src={data.image} alt="author" />{" "}
				</div>

				<section className="singlePost-body">
					<article className="">{data.description}</article>
					<div className="rowx">
						<hr />
						<div className="author_div">
							<div className="author_img">
								<img src={data.authorImg} alt="" />{" "}
							</div>

							<span className="items_section">
								<h3> {data.author} </h3>
								<h4> {data.bio} </h4>
							</span>
						</div>
					</div>
				</section>
			</div>
			<div className="recent_id col30 popular_div">
				<Recent />
			</div>
		</div>
	);
}

export default PopularCurrent