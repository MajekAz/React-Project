import React from 'react';






const Card = (props) => {

return (
<div>
  <img className="card-image"src = {props.imgUrl} alt=""/>
     <h2>{props.name}</h2>
    <p>{props.price}</p>
  
    </div>

    );
}


export default Card;