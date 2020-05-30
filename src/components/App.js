import { Switch, Route } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import Home from './Home';
import ContactForm from './ContactForm';
import ContactDetail from './ContactDetail';
// import Header from './Header';
import JaneImage from '../images/jane_eyre.jpg'
import RochesterImage from '../images/mr_rochester.jpg'
import BerthaImage from '../images/mrs_rochester.jpg'

class App extends React.Component {
  constructor () {
    super()

    this.state = {

      //to hold all data for contact list and details
      contacts: [

        // default contacts to display
        {
          id: 123,
          name: "Jane Eyre",
          email: "lonelyorphan@lowoodschool.edu",
          phone: "12865559830",
          image: JaneImage
        },

        {
          id: 456,
          name: "Edward Rochester",
          email: "sirmoody@thornfield.com",
          phone: "16765552548",
          image: RochesterImage
        },

        {
          id: 789,
          name: "Bertha Mason",
          email: "crazywife@theattic.net",
          phone: "12375559372",
          image: BerthaImage
        }
      ]
    }

    //bind addContact to App component
    this.addContact = this.addContact.bind(this);
  }
  
  // create new contact with input from contact form
  addContact = (newContact) => {
    console.log('adding contact')
       
    this.setState({ contacts: this.state.contacts.concat([newContact]) });
    
  }

  render() {
    return (
      <div>
        {/* <Header /> */}

        {/* to direct which component to display based on url entered */}
        <Switch>
          
          {/* navigate to home from either path // pass contacts to render in list on home page*/}
          <Route exact path={[ '/', '/contacts' ]} render={() => (
              <Home contacts={ this.state.contacts } />   
            )} /> 

          {/* pass function to add new contacts to app state through contact form */}
          <Route path='/contacts/new' render={(routerProps) => (
            <ContactForm addNew={ this.addContact } history={routerProps.history} />
          )} />

          {/* navigate to contact details by matching number in url path to contact id */}
          <Route path='/contacts/:id' render={(routerProps) => (
      <ContactDetail contactId={parseInt(routerProps.match.params.id, 10)} contacts={this.state.contacts} />
    )}/>

        </Switch>
      </div>
    )
  }
}



export default App
