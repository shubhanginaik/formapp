import React from 'react';


const View = ({firstname,lastname,phonenumber,role,message}) =>{
    
    
        return (
            <>
            <div className="view">
            <h2>This is your input</h2>
            <div className="notepad">
                <p><strong>FirstName:</strong>{firstname}</p>
                <p><strong>LastName:</strong>{lastname}</p>
                <p><strong>Phonenumber:</strong>{phonenumber}</p>
                <p><strong>Role:</strong>{role}</p>
                <p><strong>Message:</strong>{message}</p>
                </div>
            </div>
            </>
        );
}

export default View;