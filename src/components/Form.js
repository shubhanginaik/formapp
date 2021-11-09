import React from 'react';

const form = (props) => {
    
    return (
        <form onSubmit={props.submit}>
            <div>
            <label htmlFor="firstname">Firstname: </label>
            <input 
            type="text"
             name="firstname" 
             required 
             onChange={props.change}/>
            </div>
            <div>
            <label htmlFor="lastname">Lastname: </label>
            <input 
            type="text"
            name="lastname" 
            required
            onChange={props.change}/>
            </div>
            <div>
            <label htmlFor="phone">Phone no: </label>
            <input 
            type="phone" 
            name="phone" 
            required
            onChange={props.change}/>
            </div>
            <div>
            <label htmlFor="message">Message:</label>
            <textarea 
            name="message" 
            id="message" 
            required 
            onChange={props.change}
            ></textarea>
            </div>
            <div>
            <label htmlFor="role" className="role">Role:</label>
            <select 
            name="role" 
            id="role" 
            onChange={props.change}>
                <option value="Teacher">Teacher</option>
                <option value="Student">Student</option>
                <option value="Other">Other</option>
            </select>
            </div>
            <div className="submit">
                <input type="submit" value="Send" className="submit"/>
            </div>
        </form>
    );
};

export default form;