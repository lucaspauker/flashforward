import React, { Component } from 'react';
import axios from 'axios';

import './Why.scss'
import { BsCheckCircle } from 'react-icons/bs'

const data = {
  heading: "Why Create Custom Patching and Change Management Policies?",
}

const serviceData = [
  {
    icon: <BsCheckCircle/>,
    text: "Each user's needs are different",
    subtext: "Not every user is the same. They work at different times, have different uptime requirements, and can tolerate risk differently. In an increasingly global, remote-friendly workforce, users demand solutions that work on their schedule."
  },
  {
    icon: <BsCheckCircle/>,
    text: "Scheduling patches is a bottleneck",
    subtext: "We’ve heard from hundreds of SysAdmins that scheduling and coordinating patches slows down the time to remediate. CAB meetings run longer than they need to and maintenance window season? Let’s just say they’re not making it home for dinner..."
  },
  {
    icon: <BsCheckCircle/>,
    text: "Organizations adapt and scale, so should their IT policies",
    subtext: "Wowza...you went from 100 employees to 5000! What worked to keep the ship running has changed and as your infrastructure becomes more complex, your networks becomes larger and more diverse how you handle patches and changes needs to adapt too."
  }
]

export class Why extends Component {
  state = {
    data: {},
    serviceData: []
  }
  componentDidMount(){
    this.setState({
      serviceData: serviceData,
      data: data
    })
  }
  render() {
    return (
      <section id="why" className="section service-area overflow-hidden ptb_100">
        <div className="container">
          <div className="row justify-content-between">
          <div className="col-12 col-lg-6 order-2 order-lg-1">
            {/* Service Text */}
            <div className="service-text pt-4 pt-lg-0">
            <h2 className="text-capitalize mb-4">{this.state.data.heading}</h2>
            {/* Service List */}
            <ul className="service-list">
              {this.state.serviceData.map((item, idx) => {
                return(
                  <div key={`so_${idx}`}>
                    {/* Single Service */}
                    <li className="single-service media py-2">
                      <div className="service-icon pr-4">
                        {item.icon}
                      </div>
                      <div className="service-text media-body">
                        <h3>{item.text}</h3>
                        <p>{item.subtext}</p>
                      </div>
                    </li>
                </div>
                );
              })}
            </ul>
            </div>
          </div>
          <div className="col-12 col-lg-4 order-1 order-lg-2 d-none d-lg-block vertcenter">
            {/* Service Thumb */}
            <div className="service-thumb mx-auto">
              <svg version="1.1" viewBox="0 0 136.2 88.645" xmlns="http://www.w3.org/2000/svg" xmlnscc="http://creativecommons.org/ns#" xmlnsdc="http://purl.org/dc/elements/1.1/" xmlnsrdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
              <g transform="translate(-386.19 -82.326)">
              <path d="m422.85 143.29c10.847 1.9642 18.453 2.2175 25.596 0.54996 0.0363 0.2336-0.11057 1.8022-0.10717 2.0611 0 1.892-5.786 3.4291-12.913 3.4291-7.127 0-12.913-1.5371-12.913-3.4291-0.0518-0.74598 0.16655-2.0766 0.33727-2.611z"/>
              <g transform="matrix(-.11019 0 0 .11019 474.11 54.573)">
              <path transform="matrix(1.1614 -.024954 .029735 1.3428 -77.292 -263.17)" d="m446.49 803.86c0 13.389-44.774 24.244-100.01 24.244s-100.01-10.854-100.01-24.244c0-13.389 44.774-24.244 100.01-24.244s100.01 10.854 100.01 24.244z"/>
              <path transform="matrix(1.0187 -.057194 .059763 1.1327 -49.98 -87.624)" d="m446.49 803.86c0 13.389-44.774 24.244-100.01 24.244s-100.01-10.854-100.01-24.244c0-13.389 44.774-24.244 100.01-24.244s100.01 10.854 100.01 24.244z"/>
              </g>
              <rect transform="matrix(-1 0 .082008 .99663 0 0)" x="-428.21" y="131.52" width="11.019" height="11.517"/>
              <path d="m463.87 130.29-1.0023 0.44517-50.144 1.947-5.0643-47.973 0.83523-0.94653 5.1194 48.475 50.256-1.947z" fillRule="evenodd" stroke="#000" strokeWidth="1px"/>
              <path d="m463.55 130.28-6.578-39.601-49.873-7.9503 6.6885 49.409z" fillRule="evenodd" stroke="#000" strokeWidth=".8"/>
              <path d="m461.64 127.95-6.456-34.84-43.744-6.121 4.6753 42.296 45.525-1.3355z" fill="#fff" fillRule="evenodd"/>
              <g transform="matrix(1.1967 0 0 1.1967 -239.83 -507.99)" fill="#333" fillRule="evenodd" stroke="#000">
              <path d="m622.54 531.53c9.2563 0.26273 16.517 15.42 13.093 20.56-3.4238 5.14-23.515 5.14-26.788 0s4.1385-20.831 13.696-20.56z" strokeWidth=".83561"/>
              <path transform="matrix(.24711 0 0 .2759 510.4 439.75)" d="m496.96 320.73c0 25.731-20.859 46.59-46.59 46.59-25.731 0-46.59-20.859-46.59-46.59 0-25.731 20.859-46.59 46.59-46.59 25.731 0 46.59 20.859 46.59 46.59z" strokeWidth="3.2002"/>
              </g>
              <g transform="matrix(1.4849 0 0 1.4849 -373.29 -629.27)" fill="#333" fillRule="evenodd" stroke="#000">
              <path transform="matrix(-.22054 0 0 .24624 624.33 434.86)" d="m496.96 320.73c0 25.731-20.859 46.59-46.59 46.59-25.731 0-46.59-20.859-46.59-46.59 0-25.731 20.859-46.59 46.59-46.59 25.731 0 46.59 20.859 46.59 46.59z" strokeWidth="2.8898"/>
              <path d="m524.25 516.78c-8.261 0.23448-14.741 13.762-11.685 18.349 3.0557 4.5874 20.987 4.5874 23.908 0 2.9212-4.5874-3.6935-18.592-12.223-18.349z" strokeWidth=".67342"/>
              </g>
              <g transform="matrix(.92256 0 0 .92256 -55.286 -346.08)" fill="#333" stroke="#000">
              <path d="m567.74 535.08c-11.037-4.1149-21.671 3.4552-22.238 20.823 2.5616 1.8926 5.1999 2.5259 6.9066-1.1958 4.0127 3.1808 18.866 2.3888 23.687-0.34427 0.8889 1.2311 1.6887 5.2851 7.172 1.2995-0.42685-17.127-4.4647-30.657-15.528-20.583z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.0839"/>
              <path transform="matrix(.084186 0 0 .08857 527.74 494.03)" d="m625.71 286.65c0 102.57-83.147 185.71-185.71 185.71s-185.71-83.147-185.71-185.71c0-102.57 83.147-185.71 185.71-185.71s185.71 83.147 185.71 185.71z" fillRule="evenodd" strokeWidth="12.553"/>
              </g>
              </g>
              </svg>
            </div>
          </div>
          </div>
        </div>
      </section>
    );
  }
}

