import React from 'react';



const CloseHandler=()=>{
    window.location.reload();
}
const Popup = (props) => {
    
    return (
        <div className="overlay">
      <div className="popup">
        <h1>Your note</h1>
        <div>
        <p>Firstname:<span>{props.first}</span>
        </p>
        <p>Lastname:<span>{props.last}</span>
        </p>
        <p> Phone:<span>{props.phone}</span>
        </p>
        <p> Message:<span>{props.message}</span>
        </p>
        <p> Role:<span>{props.role}</span>
        </p>
        <button onClick={CloseHandler}>Yes,I am sure</button>
        <button className="secondary">Nope,don't wan't to post it</button>
        </div>
      </div>
      </div>
    );
    }

export default Popup;