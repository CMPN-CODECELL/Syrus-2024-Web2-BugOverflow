// import React from "react";
// import video from "../../assets/videos/navbar.mp4";
// import "../../css/heroSection.css";

// const HeroSection = () => {
//   return (
//     <div className="container21">
//       <div className="videos">
//         <video src={video} muted autoPlay loop type="video/mp4" />
//       </div>

//       <div className="overlay">
//         <h1></h1>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;



import React from "react";
import video from "../../assets/videos/navbar.mp4";
import "../../css/heroSection.css";

const HeroSection = () => {
  return (
    <div className="container21">
      <div className="videos">
        <video src={video} muted autoPlay loop type="video/mp4" />
      </div>

      <div className="overlay">
        <h1 style={{ position: "absolute", top: "50%", left: "20%", transform: "translate(-50%, -50%)", color: "white", fontSize: "40px"}}>
          Plan your next travel with <br></br><b>Travel_Planner</b>
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
