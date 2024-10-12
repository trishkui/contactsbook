import React from "react";
import useContactstore from "../store/Contactstore";
import Contactitem from "./Contactitem";



function Contactlist() {
 const Contacts = useContactstore((state) => state.Contacts);
//  console.log(Contacts);



    return(
        <section className="contact-list-container">
            {
                Contacts.map((Contact) =>(<Contactitem 
                    key={Contact.id}
                    id={Contact.id}
                    first_name={Contact.first_name} 
                    last_name={Contact.last_name} phonenumber={Contact.phonenumber} emailaddress={Contact.emailaddress} />))
            }

        </section>
    )
}


export default Contactlist;