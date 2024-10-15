import React from "react";
import useContactStore from "../store/Contactstore"; // Import the Zustand store

function Contactitem({ id, first_name, last_name, emailaddress, phonenumber, blocked }) {
    const deleteContact = useContactStore((state) => state.deleteContact); // Access deleteContact from store
    const blockContact = useContactStore((state) => state.blockContact);   // Access blockContact from store

    return (
        <div className="contact-item">
            <h3>{first_name}</h3> {/* Using first_name directly */}
            <h3>{last_name}</h3>   {/* Using last_name directly */}
            <h3>{phonenumber}</h3> {/* Using phonenumber directly */}
            <h3>{emailaddress}</h3> {/* Using emailaddress directly */}
            <div className="contact-item-controls">
                <button onClick={() => deleteContact(id)}>
                    Delete Contact
                </button>
                <button onClick={() => blockContact(id)}>
                    {blocked ? "Unblock Contact" : "Block Contact"}
                </button>
            </div>
        </div>
    );
}

export default Contactitem;
