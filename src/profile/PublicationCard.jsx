import React from "react";
import "./profilepage.css";
import Edit from "./Edit";

const PublicationCard = (props) => {
  return (
    <>
      <div className=" my-2 py-2 px-1 profileColumn " style={{ minHeight: "15rem" }}>
        <div className=" mx-2 d-flex justify-content-between ">
          <h4>{props.title}</h4>
          <div className=" mx-1 d-flex gap-2 ">
            {localStorage.getItem("id") === props.user._id ? <Edit title="Add" /> : ""}
            {localStorage.getItem("id") === props.user._id ? <Edit title="Edit" /> : ""}
          </div>{" "}
        </div>
        <hr className=" my-2 " />
        <div>
          <div className="  mt-5 d-flex justify-content-center ">
            <p>No Publications Yet</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default PublicationCard;
