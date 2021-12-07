import React from 'react';



const CloseHandler=()=>{
    window.location.reload();
}
const Popup = ({firstname,lastname,phonenumber,message,role,post}) => {
    
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
        <button onClick={post}>Yes,I am sure</button>
        <button className="secondary" onClick={CloseHandler}>Nope,don't wan't to post it</button>
        </div>
      </div>
      </div>
    );
    }

export default Popup;