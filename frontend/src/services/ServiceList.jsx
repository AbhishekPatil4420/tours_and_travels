import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const serviceData = [
    {
    imgUrl: weatherImg,
    title:"Calculate weather",
    desc: "When you travel alone, you get the opportunity to meet yourself.",
    },
    {
        imgUrl: guideImg,
        title:"Best Tour Guide",
        desc: "The world is a book, and those who do not travel read only one page.",
    },
    {
       imgUrl: customizationImg,
       title:"Customization",
       desc: "A good traveler has no fixed plans and is not intent on arriving.",
    },
]

const ServiceList = () => {
    return <>
    {
        serviceData.map((item,index) =>
        <Col lg="3" key={index}>
            <ServiceCard item={item}></ServiceCard>
            </Col>
        )
    }
    </>
};
export default ServiceList;