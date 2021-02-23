import React from 'react';
import './Preloader.css';

const Preloader = () => {
    
    return(

     <div class="cardcontainer">
         <img class="galleryImg"
        src={window.location.origin + '/images/Preloader.png'} 
      id="preloader" />
     
       

     </div>
     );
}


export default Preloader;