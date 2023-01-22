import { IMG_CDN_URL } from "../constants";
// const RestaurantCard = ({
//     cloudinaryImageId,
//     name,
//     cuisines,
//     area,
//     lastMileTravelString,
//     costForTwoString,
//     avgRating,
//   }) => {
//     console.log("name",name,avgRating)
//     return (
//       <div className="card">
//         card
//         <img
//           src={
//             "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
//             cloudinaryImageId
//           }
//         />
//         <h3>{name}</h3>
//         <h5>{cuisines.join(", ")}</h5>
//         <h5>{area}</h5>
//         <span>
//         <h5><i class="fa-solid fa-star"></i>{avgRating}</h5>
//           <h5>{lastMileTravelString}</h5>
//           <h5>{costForTwoString}</h5>
//         </span>
//       </div>
//     );
//   };

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  area,
  costForTwo,
  avgrating,
}) => {
  return (
    <>
      
        <section className="container">
          <div className="itemdetail">
            <div>
              <img
                className="food_img"
                src={
                    IMG_CDN_URL+cloudinaryImageId
                }
                alt="image"
              />
            </div>
            <div className="details">
              <table>
                <tr>
                  <td>
                    <p>
                      <strong>{name}</strong>
                    </p>
                    <p>
                      <strong>Price</strong> : Rs {costForTwo}
                    </p>
                    <p>
                      <strong>City</strong> : {area}{" "}
                    </p>
                  </td>
                  <td>
                    <p className="">
                      <strong>Rating :</strong>
                      <span
                        style={{
                          background: "green",
                          color: "#fff",
                          padding: "2px 8px",
                          borderRadius: "5px",
                        }}
                      >
                        {avgrating}★
                      </span>
                    </p>
                    <p className="">
                      <strong>Delivery Time :</strong> <span>{} min</span>
                    </p>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </section>
    </>
  );
};

export default RestaurantCard;
