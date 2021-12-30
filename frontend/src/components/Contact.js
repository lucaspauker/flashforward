import React from 'react';
import './Contact.scss';
import axios from 'axios';

export class Contact extends React.Component {
  render() {
    return (
      <div className='contact' id='contact'>
        <ContactForm/>
      </div>
    );
  }
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      isFilled: false,
    }
  }

  onNameChange(event) {
    this.setState({name: event.target.value})
  }

  onEmailChange(event) {
    this.setState({email: event.target.value})
  }

  onMessageChange(event) {
    this.setState({message: event.target.value})
  }

  resetForm(){
    this.setState({name: '', email: '', message: '', isFilled: true})
  }

  handleSubmit(e) {
    e.preventDefault();

    axios({
      method: 'POST',
      url:'api/contact/',
      data:  {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message,
      }
      }).then((response)=>{
        if (response.data.status === 'success') {
          this.resetForm()
        } else if(response.data.status === 'fail') {
        }
      })
  }

  render () {
    if (this.state.isFilled) {
      return(
        <h3>Thanks for filling out the form! We will be in touch soon.</h3>
      );
    }
    else {
      return(
        <>
          <h3>Contact us!</h3>
          <form id='contact-form' onSubmit={this.handleSubmit.bind(this)} method='POST'>
              <div className='form-group'>
                  <label htmlFor='name'>Name</label>
                  <input type='text' className='form-control' id='name' value={this.state.name} onChange={this.onNameChange.bind(this)} />

              </div>
              <div className='form-group'>
                  <label htmlFor='email'>Email address</label>
                  <input type='text' className='form-control' id='email' value={this.state.email} onChange={this.onEmailChange.bind(this)} />
              </div>
              <div className='form-group'>
                  <label htmlFor='message'>Message</label>
                  <textarea className='form-control' rows='5' id='message' value={this.state.message} onChange={this.onMessageChange.bind(this)} />

              </div>
              <button type='submit' className='btn btn-primary'>Submit</button>
          </form>
        </>
      );
    }

  }
}
