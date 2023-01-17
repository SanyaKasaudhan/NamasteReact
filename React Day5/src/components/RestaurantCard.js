// import React from "react";
// import { image_CDN } from "../constants";
// export const RestaurantCard = ({
//   cloudinaryImageId,
//   name,
//   costForTwo,
//   costForTwo,
//   avgRating,
//   deliveryTime,
// }) => {
//   return (
//     <>
//       <h1 style={{ textAlign: "center" }}>Food Villa</h1>
//       <div className="box">
//         {restaurantList.map((data) => (
//           <section className="container">
//             <div className="itemdetail">
//               <div>
//                 <img
//                   className="food_img"
//                   src={
//                     "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
//                     cloudinaryImageId
//                   }
//                   alt="image"
//                 />
//               </div>
//               <div className="details">
//                 <table>
//                   <tr>
//                     <td>
//                       <p>
//                         <strong>{name}</strong>
//                       </p>
//                       <p>
//                         <strong>Price</strong> : Rs {costForTwo}
//                       </p>
//                       <p>
//                         <strong>City</strong> : {locality}{" "}
//                       </p>
//                     </td>
//                     <td>
//                       <p className="">
//                         <strong>Rating :</strong>{" "}
//                         <span
//                           style={{
//                             background: "green",
//                             color: "#fff",
//                             padding: "2px 8px",
//                             borderRadius: "5px",
//                           }}
//                         >
//                           {avgRating}★{" "}
//                         </span>
//                       </p>
//                       <p className="">
//                         <strong>Delivery Time :</strong>{" "}
//                         <span>{deliveryTime} min</span>
//                       </p>
//                     </td>
//                   </tr>
//                 </table>
//               </div>
//             </div>
//           </section>
//         ))}
//       </div>
//     </>
//   );
// };

// export default RestaurantCard;


import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({cloudinaryImageId,name,costForTwoString,cuisines,avgRating}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="Card Image" />
      <h2>{name}</h2>
      <h3>{costForTwoString}</h3>
      <h4>{cuisines.join(", ")}</h4>
      {/* <h2>{avgRating}</h2> */}
    </div>
  );
};

export default RestaurantCard;