import React from 'react';

const form = ({submit,change}) => {
    
    return (
        <form onSubmit={submit}>
            <div>
            <label htmlFor="firstname">Firstname: </label>
            <input 
            type="text"
             name="firstname" 
             required 
             onChange={change}/>
            </div>
            <div>
            <label htmlFor="lastname">Lastname: </label>
            <input 
            type="text"
            name="lastname" 
            required
            onChange={change}/>
            </div>
            <div>
            <label htmlFor="phone">Phone number: </label>
            <input 
            type="phone" 
            name="phonenumber" 
            required
            onChange={
                change}/>
            </div>
            <div>
            <label htmlFor="message">Message:</label>
            <textarea 
            name="message" 
            id="message" 
            required 
            onChange={
                change}
            ></textarea>
            </div>
            <div>
            <label htmlFor="role" className="role">Role:</label>
            <select 
            name="role" 
            id="role" 
            onChange={change}
            required>
                <option value="">Choose a role</option>
                <option value="Teacher">Teacher</option>
                <option value="Student" >Student</option>
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