import React from "react";
import ContactItem from "./ContactItem";
function ContactList({contacts}){
    return (
        <div className="contact-list">
            {
                contacts.map((contact, index) => (<ContactItem key={index} {...contact} />))
            }
        </div>
    )
}

export default ContactList;