import React, { Component } from 'react';
import { GlobalStyle } from './BasicStyles/GlobalStyle';
import { Layout } from './Layout/Layout';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  //створюємо метод для додавання контактів в стейт
  addContact = (name, number) => {
    const { contacts } = this.state;
    const contact = {
      id: nanoid(),
      name,
      number,
    };
  };

  render() {
    return (
      <Layout>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        {/* <Filter ... /> */}
        {/* <ContactList ... /> */}

        <GlobalStyle />
      </Layout>
    );
  }
}
