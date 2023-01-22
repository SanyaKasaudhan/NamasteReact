import { IMG_CDN_URL } from "../constants";
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
