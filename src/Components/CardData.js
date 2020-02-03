import React from 'react';
import Card from './Card';



         
const CardData = ({images}) => {
       return (
      <div className="card-row container card">
       {
        images.map((image)  => {
        return (
       <Card 
        key={image.id}
        imgUrl={image.imgUrl}
        name={image.name}
        price={image.price} 
        />
        
       );

     })
     }
</div>
 );
}

   export default CardData;