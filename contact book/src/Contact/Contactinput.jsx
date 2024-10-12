import { useState } from "react";
import useContactstore from "../store/Contactstore";
const Contactinput = () =>{
    const [ContactFirstname, setContactFirstname] = useState("") ;
    const [ContactLastname, setContactLastname] = useState("") ;
    const [ContactPhonenumber, setContactPhonenumber] = useState("") ;
    const [ContactEmailaddress, setEmailaddress] = useState("") ;
    const addContact = useContactstore((state) => state.addContact);

    function handleAddContact(e){
        e.preventDefault()
          const newContact={
            id:Math.trunc(Math.random()* 10000000),
          first_name: ContactFirstname,
          last_name: ContactLastname,
          phone_number:ContactPhonenumber,
          emailaddress:ContactEmailaddress,
          complete:false   
        }
        addContact(newContact);
        setContactFirstname("");
        setContactLastname("");
        setContactPhonenumber("");
        setEmailaddress("");
    }
    return(
        <form className="contactinput">
            <input className="firstname" type="text"
            placeholder="first name"
            value={ContactFirstname}
            onChange={(e) => setContactFirstname(e.target.value)}
            // className="todo text input"
            
            />

            <input className="lastname" type="text"
            placeholder="last name"
            value={ContactLastname}
            onChange={(e) => setContactLastname(e.target.value)}
            // className="todo text input"
            
            />

            <input className="phone" type="number"
            placeholder="phone number"
            value={ContactPhonenumber}
            onChange={(e) => setContactPhonenumber(e.target.value)}
            // className="todo text input"
            
            />

            
             <input className="email" type="text"
            placeholder="email address"
            value={ContactEmailaddress}
            onChange={(e) => setEmailaddress(e.target.value)}
            // className="todo text input"
            
            />
            {/* <textarea placeholder="enter todo description"></textarea>
            <textarea placeholder="enter body here"></textarea> */}
            <button className="addcontact" onClick={handleAddContact}>
                Add contact
            </button>
        </form>
    );
};


export default Contactinput;