import React from "react";
import "./CollegeDetails.css";
import { Button } from "@material-ui/core";
import college_02 from "./college_02.jpg";
import college_01 from "./college_01.jpg";
import college from "./college";
function CollegeDetails({college_name,promoted,original_fees,fees_cycle,ranking,tags,amenties,rating_remarks,id}) {
  return (
    <div class="collegeDetails">
      
      <div class="flex-container">
        <div class="flex-child magenta">
          <div className="container">
            <div class="rib">
              <img
                className="college__image"
                src={college_02}
                alt="college2"
                style={{ objectFit: "cover"}}
              />
              <div class="corner-ribbon top-right sticky blue"><small class="small">{college.colleges[0].promoted ? "PROMOTED":null}</small></div>
              <div class="opac"></div>
            </div>

            <div class="bottom-left">
              <Button
                style={{
                  color: "#b2b3b3",
                  background: "white",
                  textTransform: "none",
                  borderRadius: "999px",
                  padding: "7px",
                  marginBottom: "7px",
                  fontWeight: "medium",
                  zIndex:3
                }}
              >
                {college.colleges[0].tags[0]}
              </Button>
              <Button
                style={{
                  color: "#b2b3b3",
                  background: "white",
                  textTransform: "none",
                  borderRadius: "999px",
                  padding: "7px",
                  marginBottom: "7px",
                  fontWeight: "medium",
                  marginLeft: "10px",
                  zIndex:3
                }}
              >
                {college.colleges[0].tags[1]}
              </Button>
            </div>
            <div
              class="bottom-right"
              style={{ color: "white", marginBottom: "18px",zIndex:"3" }}
            >
                {college.colleges[0].ranking}
            </div>
            <div
              class="top-righte"
              style={{
                width: "75px",
                height: "53px",
                backgroundColor: "#f5a821",
                color: "white",
                borderRadius: "5px",
                boxShadow: "5px 10px 18px #888888",
                padding: "5px",
                zIndex:3
              }}
            >
              <b>3.9</b>/5
              <br></br>
            <span>{college.colleges[0].rating_remarks}</span>
            </div>
          </div>
          <div style={{ display: "flex", marginBottom: "0px" }}>
            <h3
              style={{
                color: "black",
                marginTop: "2px",
                marginLeft: "10px",
                marginBottom: "4px",
              }}
            >
              {college.colleges[0].college_name.slice(0,35)} {id} <span style={{color:"gray"}}>&#9733; &#9733; &#9733; &#9733; &#9734;</span>
            </h3>
            <p
              style={{
                marginTop: "5px",
                marginLeft: "150px",
                color: "gray",
                fontSize: "12px",
                textDecoration: "line-through",
                marginBottom: "0px",
                paddingBottom: "0px",
              }}
            >
              &#8377;{college.colleges[0].original_fees}
            </p>
          </div>

          <div style={{ display: "flex", marginBottom: "0px" }}>
            <h6
              style={{
                color: "black",
                marginTop: "0px",
                marginLeft: "10px",
                marginBottom: "5px",
                marginRight: "0px",
              }}
            >
             {college.colleges[0].nearest_place[0]}
            </h6>

            <h6
              style={{
                color: "gray",
                marginTop: "0px",
                marginLeft: "5px",
                marginBottom: "5px",
              }}
            >
              | {college.colleges[0].nearest_place[1]}
            </h6>
            <p
              style={{
                marginTop: "0px",
                marginLeft: "207px",
            
                color: "red",
                fontWeight: "bolder",
                fontSize:"26px",
                marginBottom: "0",
                paddingTop: "0px",
              }}
            >
              &#8377;{college.colleges[0].discounted_fees}
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <p
              style={{
                marginLeft: "10px",
                marginTop: "0px",
                fontSize: "12px",
                marginBottom: "0px",
              }}
            >
              <b style={{ color: "#6dc4af" }}>93% Match :</b> <b>2.5kms</b>{" "}
              <span style={{ color: "gray" }}>
                <b>from GTB Nagar,</b>
              </span>{" "}
              <b>7 kms</b>{" "}
              <span style={{ color: "gray" }}>
                <b>from Rajiv Chowk</b>
              </span>
            </p>
            <p
              style={{
                fontSize: "12px",
                paddingTop: "0px",
                marginLeft: "130px",
                marginTop: "0px",
                color: "gray",
              }}
            >
              {college.colleges[0].fees_cycle}
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <h6
              style={{
                marginTop: "10px",
                marginLeft: "0",
                marginBottom: "10px",
                border: "2px solid #cdf5e8",
                paddingTop: "10px",
                paddingBottom: "0px",
                background: "#cdf5e8",
                width: "50%",
                paddingLeft: "10px",
                borderRadius: "0 999px 999px 0px",
              }}
            >
              Flat Rs<span style={{ color: "#55bda5" }}>2,000</span> off + upto
              Rs <span style={{ color: "#55bda5" }}>500</span> wallet! to
              avail... <span style={{ color: "#129ad3" }}>LOGIN</span>{" "}
            </h6>
            <h6 style={{ marginLeft: "140px", color: "#34b497" }}>
              Fee cancellation &middot; Free Wifi
            </h6>
          </div>
        </div>

        <div class="flex-child magenta">
          <div className="container">
            <div class="rib">
              <img
                className="college__image"
                src={college_01}
                alt="college1"
                style={{ objectFit: "cover"}}
              />
              <div class="corner-ribbon top-right sticky blue"><small class="small">{college.colleges[1].promoted ? "PROMOTED":null}</small></div>
              <div class="opac"></div>
            </div>

            <div class="bottom-left">
              <Button
                style={{
                  color: "#b2b3b3",
                  background: "white",
                  textTransform: "none",
                  borderRadius: "999px",
                  padding: "7px",
                  marginBottom: "7px",
                  fontWeight: "medium",
                  zIndex:3
                }}
              >
                {college.colleges[1].tags[0]}
              </Button>
              <Button
                style={{
                  color: "#b2b3b3",
                  background: "white",
                  textTransform: "none",
                  borderRadius: "999px",
                  padding: "7px",
                  marginBottom: "7px",
                  fontWeight: "medium",
                  marginLeft: "10px",
                  zIndex:3
                }}
              >
                {college.colleges[1].tags[1]}
              </Button>
            </div>
            <div
              class="bottom-right"
              style={{ color: "white", marginBottom: "18px",zIndex:"15"}}
            >
                {college.colleges[1].ranking}
            </div>
            <div
              class="top-righte"
              style={{
                width: "75px",
                height: "53px",
                backgroundColor: "#f5a821",
                color: "white",
                borderRadius: "5px",
                zIndex:3,
                padding: "5px",
              }}
            >
              <b>3.9</b>/5
              <br></br>
            <span>{college.colleges[1].rating_remarks}</span>
            </div>
          </div>
          <div style={{ display: "flex", marginBottom: "0px" }}>
            <h3
              style={{
                color: "black",
                marginTop: "2px",
                marginLeft: "10px",
                marginBottom: "4px",
              }}
            >
              {college.colleges[1].college_name.slice(0,35)} {id+1} <span style={{color:"gray"}}>&#9733; &#9733; &#9733; &#9733; &#9734;</span>
            </h3>
            <p
              style={{
                marginTop: "5px",
                marginLeft: "150px",
                color: "gray",
                fontSize: "12px",
                textDecoration: "line-through",
                marginBottom: "0px",
                paddingBottom: "0px",
              }}
            >
              &#8377;{college.colleges[1].original_fees}
            </p>
          </div>

          <div style={{ display: "flex", marginBottom: "0px" }}>
            <h6
              style={{
                color: "black",
                marginTop: "0px",
                marginLeft: "10px",
                marginBottom: "5px",
                marginRight: "0px",
              }}
            >
             {college.colleges[1].famous_nearest_places.slice(0,22)}
            </h6>

            <h6
              style={{
                color: "gray",
                marginTop: "0px",
                marginLeft: "10px",
                marginBottom: "5px",
              }}
            >
              | {college.colleges[1].famous_nearest_places.slice(22,)}
            </h6>
            <p
              style={{
                marginTop: "0px",
                marginLeft: "260px",
            
                color: "red",
                fontWeight: "bolder",
                fontSize:"26px",
                marginBottom: "0",
                paddingTop: "0px",
              }}
            >
              &#8377;{college.colleges[1].discounted_fees}
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <p
              style={{
                marginLeft: "10px",
                marginTop: "0px",
                fontSize: "12px",
                marginBottom: "0px",
              }}
            >
              <b style={{ color: "#6dc4af" }}>93% Match :</b> <b>2.5kms</b>{" "}
              <span style={{ color: "gray" }}>
                <b>from GTB Nagar,</b>
              </span>{" "}
              <b>7 kms</b>{" "}
              <span style={{ color: "gray" }}>
                <b>from Rajiv Chowk</b>
              </span>
            </p>
            <p
              style={{
                fontSize: "12px",
                paddingTop: "0px",
                marginLeft: "130px",
                marginTop: "0px",
                color: "gray",
              }}
            >
              {college.colleges[1].fees_cycle}
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <h6
              style={{
                marginTop: "10px",
                marginLeft: "0",
                marginBottom: "10px",
                border: "2px solid #cdf5e8",
                paddingTop: "10px",
                paddingBottom: "0px",
                background: "#cdf5e8",
                width: "50%",
                paddingLeft: "10px",
                borderRadius: "0 999px 999px 0px",
              }}
            >
              Flat Rs<span style={{ color: "#55bda5" }}>2,000</span> off + upto
              Rs <span style={{ color: "#55bda5" }}>500</span> wallet! to
              avail... <span style={{ color: "#129ad3" }}>LOGIN</span>{" "}
            </h6>
            <h6 style={{ marginLeft: "140px", color: "#34b497" }}>
              Fee cancellation &middot; Free Wifi
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollegeDetails;
