import './App.css';
import AddContacts from './components/AddContacts';
import Header from './components/Header';
import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import ContactList from './components/ContactList';
import { useState, useEffect } from 'react';
import { uuid } from 'uuidv4';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {

  const LOCAL_STORAGE_KEY = "ContactsKey"
  const [contacts, setContacts] = useState([""]);

  const addContactsHandler = (contact) => {
    setContacts([...contacts, { id: uuid(), ...contact }])

  }

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts])

  const deleteHandler = (id) => {
    const contactListAfterDelete = contacts.filter((contact) => {
      return contact.id !== id
    });
    setContacts(contactListAfterDelete);
  }


  return (
    <div className="ui container">

      <Router>
        <Switch>
          <Route path="/" render={(props)=><ContactList {...props} contacts={contacts} idToDelete={deleteHandler} />} exact/>
          <Route path="/add" render={(props)=><AddContacts {...props} addContactsHandler={addContactsHandler} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
