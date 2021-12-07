import React from 'react';



const CloseHandler=()=>{
    window.location.reload();
}
const Popup = ({firstname,lastname,phonenumber,message,role}) => {
    
    return (
        <div className="overlay">
      <div className="popup">
        <h1>Your note</h1>
        <div>
        <p>Firstname:<span>{firstname}</span>
        </p>
        <p>Lastname:<span>{lastname}</span>
        </p>
        <p> Phonenumber:<span>{phonenumber}</span>
        </p>
        <p> Message:<span>{message}</span>
        </p>
        <p> Role:<span>{role}</span>
        </p>
        <button onClick={CloseHandler}>Yes,I am sure</button>
        <button className="secondary">Nope,don't wan't to post it</button>
        </div>
      </div>
      </div>
    );
    }

export default Popup;