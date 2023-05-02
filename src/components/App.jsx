import React from "react";
import FormHandler from './PhoneBook/PhoneBook'
import Contacts from './Contacts/Contacts'
import Section from "./Section/Section";


export class App extends React.Component {
 state = {
  contacts: [ {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
              {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
              {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
              {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},]
 }

 render() {

  return (
    <>
    <Section>
      <FormHandler/>
    </Section>
      
      <Section>
       <Contacts contacts={this.state.contacts} title={'Contacts'}/>
      </Section>
      
    </>
  )
 }
};
