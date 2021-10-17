import React from "react";
import "./profilepage.css";
import EditModal from "./EditModal";

const CertificationCard = (props) => {
  

  return (
    <>
      <div className="  px-1 summaryBox " style={{ minHeight: "15rem" }}>
        <div className=" mx-2 d-flex justify-content-between ">
          <h4>{props.title}</h4>
          {localStorage.getItem("id") === props.user._id ? <EditModal title={props.title} /> : ""}
        </div>
        <hr className=" my-2 " />
        <div className="  mt-5 d-flex justify-content-center ">
          <p>No Certifications Yet</p>
        </div>
      </div>
    </>
  );
};
export default CertificationCard;
