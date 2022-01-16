import React, { Component } from 'react';
import './Benefits.scss'

import { BsClock, BsGraphDown, BsPeople } from 'react-icons/bs'

const initData = {
  heading: "How We Help",
  headingText: "We seek to improve patch scheduling and increase security coverage.",
}

const data = [
  {
    image: <BsClock/>,
    title: "Reduce Downtime",
    content: "Measure how patches impact operations to plan better and create custom operational risk metrics."
  },
  {
    image: <BsGraphDown/>,
    title: "Decrease Vulnerabilties",
    content: "When you patch smarter, your network has fewer vulnerabilities."
  },
  {
    image: <BsPeople/>,
    title: "Coordinate Faster",
    content: "Coordinating patches eats up valuable time. According to surveyed infosec professionals, 68 hours of their team’s time is spent on patch coordination."
  }
]

export class Benefits extends Component {
  state = {
    initData: {},
    data: []
  }
  componentDidMount(){
    this.setState({
      initData: initData,
      data: data
    })
  }
  render() {
    return (
      <section id="features" className="section features-area style-two overflow-hidden ptb_100">
        <div className="container">
          <div className="row">
          <div className="col-12 col-md-10 col-lg-6">
            {/* Section Heading */}
            <div className="section-heading">
            <h2>{this.state.initData.heading}</h2>
            <p className="d-none d-sm-block mt-4">{this.state.initData.headingText}</p>
            </div>
          </div>
          </div>
          <div className="row">
            {this.state.data.map((item, idx) => {
              return(
                <div key={`ffd_${idx}`} className="col-12 col-md-6 col-lg-4 my-3 res-margin">
                  {/* Image Box */}
                  <div className="image-box text-center icon-1 p-5">
                  {/* Featured Image */}
                  <div className="featured-img mb-3">
                    {item.image}
                  </div>
                  {/* Icon Text */}
                  <div className="icon-text">
                    <h3 className="mb-2">{item.title}</h3>
                    <p>{item.content}</p>
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

