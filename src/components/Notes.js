import React from 'react';

const Notes = ({firstname,lastname,phonenumber,role,message}) => {
    return (
        <div>
            
            <div className="notes">
            <p>
                { firstname } { lastname } | - <em> {role}</em> |{ phonenumber } | <strong> { message } </strong>
             </p>
            </div>
        </div>

    );
};

export default Notes;