import React from "react";
import { servicesData } from "./ServicesData";
import Slider from "./Slider";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Services.css";

const Services = () => {
    return (
        <section id="services" className="services">
            <div className="container">
                <div className="services-header">
                    <h2 className="services-title">Services</h2>
                    <p className="services-subtitle">IT Training</p>
                </div>
                <div className="silder">
                    <Slider />
                </div>
                <div className="row card-container">
                    { servicesData.map((data)=> { 
                        return (
                            <div className="col-lg-3 col-md-6" key={data.id}>
                                <div className="service-item">
                                    <img src={data.image} alt="pictures" className="sevice-img" />
                                    <div className="service-info">
                                        <h3 className="course-title">{data.course}</h3>
                                        <p className="course-desc">{data.description}</p>
                                    </div>
                                        <a href="/" className="btn-learn">Learn More</a>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div >
        </section >
    )
}

export default Services;
