import React from 'react';
import stylo from '../estilos/card.module.css';


export default function Card(props) { 
  // acá va tu código
  var img= `http://openweathermap.org/img/wn/${props.img}@2x.png`       
  return (
         <div className={stylo.tarjeta}>             
              <div>  
                <button onClick={props.onClose} className={stylo.cerrar}>   
                    x 
                </button>
             </div>   

             <div>  
                 <h5 className= {stylo.texto}>  
                   {props.name} 
                 </h5>
             </div>

             <div>
               
               <span>
                  Min:
                  <br/>  
                  {props.min }°C
               </span>
               <br/>
               <span>
                  Max:
                  <br/>  
                  {props.max }°C
               </span>
             </div>


             <div>
                <img src={img} alt="icono sobre clima" />
             </div>
             <div>
                <span>
                Clima en este momento: {props.weather}
                </span>
             </div>
             <div>
                <span>
                   Nubes en el cielo: %{props.clouds}
                </span>
             </div>
         </div>)
};