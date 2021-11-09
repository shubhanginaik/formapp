import React from 'react';


const View = (props) =>{
    
    
        return (
            <>
            <div className="notepad">
            <h2>This is your input</h2>
            <div className="view">
                <p><strong>FirstName:</strong>{props.first}</p>
                <p><strong>LastName:</strong>{props.last}</p>
                <p><strong>Phone no:</strong>{props.phone}</p>
                <p><strong>Role:</strong>{props.role}</p>
                <p><strong>Message:</strong>{props.message}</p>
                </div>
            </div>
            </>
        );
}

export default View;