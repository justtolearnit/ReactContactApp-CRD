import React from 'react'
import ContcatCards from './ContactCard';


const ContactList = (props) => {
    const renderContactList = props.contacts.map((contact) => {

        const getIdFromCard = (id) =>{
            props.idToDelete(id)
        }

        return (
            <div >
                <ContcatCards contact={contact}  idFromCard={getIdFromCard} />
            </div>
        );
    })
    return (
        <div className="ui celled list">
            {renderContactList}
        </div>
    );

}
export default ContactList;
