import React from 'react';
import Card from './Card';
import stylo from '../estilos/cards.module.css'
export default function Cards({cities, onClose}) {


  // acá va tu código
  // tip, podés usar un map

  return <div className= {stylo.cartas}>
            {cities.map(ciudad=>( 
              <Card key={ciudad.id}
                   name= {ciudad.name}
                   min = {ciudad.min}
                   max= {ciudad.max}
                   img= {ciudad.img}
                   weather= {ciudad.weather}
                   clouds= {ciudad.clouds}
                   onClose= {()=> onClose(ciudad.id) }
                   />
            ))}
         </div> 
};