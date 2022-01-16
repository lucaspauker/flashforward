import React, { Component } from 'react';
import axios from 'axios';

import { BsCheckCircle, BsLinkedin, BsTwitter } from 'react-icons/bs'

const data = {
  heading: "Our Team",
  headingText: "We are Stanford data nerds with experience in cybersecurity looking to improve vulnerability patching operations. We have spoken to hundreds of IT security professionals from organizations ranging from Department of Defense Agencies to universities to Fortune 500s. We have eclectic backgrounds for sure....ranging from starting a funky necktie company to building tech to address the opioid epidemic.",
}

const teamIcons = [
  {
    icon: <BsLinkedin/>,
  },
  {
    icon: <BsTwitter/>,
  }
]

const teamData = [
  {
    image: "/static/frontend/img/lucas_headshot.jpg",
    title: "Lucas Pauker",
    teamPost: "Co-Founder",
    links: ["https://www.linkedin.com/in/lucas-pauker-7b4571150/", "https://twitter.com/lucas_pauker"],
  },
  {
    image: "/static/frontend/img/shreyas_headshot.jpg",
    title: "Shreyas Parab",
    teamPost: "Co-Founder",
    links: ["https://www.linkedin.com/in/sparab18/", "https://twitter.com/sparab18"],
  }
]

export class Team extends Component {
  state = {
    data: {},
    teamData: [],
    teamIcons: []
  }
  componentDidMount(){
    this.setState({
      teamData: teamData,
      teamIcons: teamIcons,
      data: data
    })
  }
  render() {
    return (
      <section id="team" className="section team-area team-style-two overflow-hidden ptb_100">
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
          <div className="row justify-content-center">
            {this.state.teamData.map((item, idx) => {
              return(
                <div key={`t_${idx}`} className="col-12 col-sm-6 col-md-4 col-lg-3">
                  {/* Single Team */}
                  <div className="single-team text-center radius-100 overflow-hidden m-2 m-lg-0">
                  {/* Team Thumb */}
                  <div className="team-thumb radius-100 d-inline-block position-relative overflow-hidden">
                    <img src={item.image} alt="" />
                    {/* Team Overlay */}
                    <div className="team-overlay radius-100">
                    <h4 className="team-name text-white">{item.title}</h4>
                    <h5 className="team-post text-white mt-2 mb-3">{item.teamPost}</h5>
                    {/* Team Icons */}
                    <div className="team-icons">
                      {this.state.teamIcons.map((iconItem, idx) => {
                        return(
                          <a key={`ti_${idx}`} className="p-2" href={item.links[idx]}>{iconItem.icon}</a>
                        );
                      })}
                    </div>
                    </div>
                  </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

