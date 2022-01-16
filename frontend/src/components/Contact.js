import React, { Component } from 'react';
import ContactForm from './ContactForm';
import axios from 'axios';

import './Contact.scss'
import { BsHouseDoor, BsMailbox } from 'react-icons/bs'

const data = {
    heading: "Contact Us",
    headingText: "Send us a message about how we can help you!",
}

const iconList = [
  {
    icon: <BsHouseDoor/>,
    text: "Stanford, CA",
  },
  {
    icon: <BsMailbox/>,
    text: "contact@flashforward.ai",
  },
]

export class Contact extends Component {
    state = {
      data: {},
      iconList: []
    }
    componentDidMount(){
      this.setState({
        data: data,
        iconList: iconList,
      })
    }
    render() {
      return (
        <section id="contact" className="contact-area bg-gray ptb_100">
          <div className="container">
            <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-6">
              {/* Section Heading */}
              <div className="section-heading text-center">
              <h2 className="text-capitalize">{this.state.data.heading}</h2>
              <p className="d-none d-sm-block mt-4">{this.state.data.headingText}</p>
              </div>
            </div>
            </div>
            <div className="row justify-content-between">
            <div className="col-12 col-md-5">
              {/* Contact Us */}
              <div className="contact-us">
              <p className="mb-3">{this.state.data.content}</p>
                <ul>
                  {this.state.iconList.map((item, idx) => {
                    return(
                      <li key={`ci_${idx}`} className="py-2 media">
                        <div className="social-icon mr-3">
                          {item.icon}
                        </div>
                        <span className="media-body align-self-center">{item.text}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6 pt-4 pt-md-0">
              <ContactForm />
            </div>
            </div>
          </div>
        </section>
      );
    }
}
