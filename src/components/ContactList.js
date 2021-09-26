import React from 'react'
import ContcatCards from './ContactCard';
import { Link } from 'react-router-dom';



const ContactList = (props) => {
    const renderContactList = props.contacts.map((contact) => {

        const getIdFromCard = (id) => {
            props.idToDelete(id)
        }

        return (
            <div >
                <ContcatCards contact={contact} idFromCard={getIdFromCard} />
            </div>
        );
    })
    return (
        <div className="ui celled list">
            <h1>Contacts List</h1>
            {renderContactList}
            <Link to="/add"><button className="ui button blue">Add</button></Link>
        </div>
    );

}
export default ContactList;
