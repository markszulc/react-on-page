console.log("Booking component loaded");

import React from 'react';
import ReactDOM from 'react-dom';


const el = document.getElementById('booking-app');
const message=el.getAttribute('data-param');

const element = (
      <div>
        <h1>Hello, {message} world!</h1>
      </div>
);
  
ReactDOM.render(
    element,el
);
    