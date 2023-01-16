import React from 'react'

export const Restaurants = ({restaurantList}) => {
  console.log(restaurantList);
  return (
    <>
    {/* <h1 style={{"textAlign":"center"}}>Food Villa</h1>
        <div className='box'>
       
        {
        restaurantList.map(data =>
            
        <section className='container'>
          <div className='itemdetail'>
            <div  >
              <img className='food_img' 
              src={
                "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                data.data.cloudinaryImageId
              } alt="image" />
            </div>
            <div className='details'>
              <table>
                <tr>
                  <td>
                    <p><strong>{data.data.name}</strong></p>
                    <p><strong>Price</strong> : Rs {data.data.costForTwo}</p>
                    <p><strong>City</strong> : {data.data.locality} </p>
                  </td>
                  <td >
                    <p className=''><strong>Rating :</strong> <span style={{background:"green",color:"#fff",padding:"2px 8px",borderRadius:"5px"}}>{data.data.avgRating}★	</span></p>
                    <p className=''><strong>Delivery Time :</strong> <span >{data.data.deliveryTime} min</span></p>
                   
                  </td>
                  </tr>

                

              </table>
            </div>
          </div>
        </section>
        )
}

    </div> */}
    
    </>
  )
}
