import React from "react";
import useContactstore from "../store/Contactstore";

function Contactitem ({id ,first_name,last_name,emailaddress ,phonenumber ,complete}){
const deleteContact =useContactstore((state) => state.deleteContact);
    return(
        <div className="contact-item">
            <h3 className={complete ? 'Contact-first_name complete' : 'Contact-first_name'}>
                {first_name}
            </h3>
            <h3 className={complete ? 'Contact-last_name complete' : 'Contact-last_name'}>
                {last_name}
            </h3>
            <h3 className={complete ? 'Contact-phonenumber complete' : 'Contact-phonenumber'}>
                {phonenumber}

            </h3>
            <h3 className={complete ? 'Contact-emailaddress complete' : 'Contact-emailaddress'}>
                {emailaddress}
            </h3>
            <div className="contact-item-controls">
                <button onClick={() => deleteContact(id)}>Delete Contact</button>
                <button>
                    {complete ? 'Unblock Contact' : 'Block Contact'} 
                </button>
            </div>


        </div>
    );
}

export default Contactitem;