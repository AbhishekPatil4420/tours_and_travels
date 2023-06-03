
import React from "react";
import '../styles/home.css';
import{ Container, Row,Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4' 
import worldImg from '../assets/images/world.png'
import Subtitle from "../shared/Subtitle";
import experienceImg from "../assets/images/experience.png";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-Tours/FeaturedTourList";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Testimonial from "../components/Testimonial/Testimonial";
import Newsletter from "../shared/Newsletter";


const Home = () => {
    return <>
    {/* hero section start */}
    <section>
        <Container>
        <Row>
            <Col lg="6">
            <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                    <Subtitle subtitle={'Know Before You Go'}></Subtitle>
                    <img src={worldImg} alt=""></img>
                </div>
                <h1>Traveling opens the door to creating   
                    <span className="highlight"> memories</span></h1>
                <p>Travelling is crucial part of life as it changes your perception towards life helps you to re-discover
                     yourself. It is like food for thought to your brain. Travel isn’t just about fun and exhilaration. A significant amount 
                     of scientific research suggests that exploring a new place can do wonders to your emotional 
                    and mental health.</p>

            </div>
            </Col>
            <Col lg="2">
                <div className="hero__img-box">
                    <img src={heroImg} alt=""></img>
                </div>
            </Col>
            <Col lg="2">
                <div className="hero__img-box mt-4">
                    <video autoPlay autostart controls loop src={heroVideo} alt="" ></video>
                </div>
            </Col>
            <Col lg="2">
                <div className="hero__img-box mt-5">
                    <img src={heroImg02} alt=""></img>
                </div>
            </Col>
            <SearchBar/>
        </Row>
        </Container>
    </section>
    {/* hero section end */}
    <section>
        <Container>
            <Row>
                <Col lg="3">
                    <h5 className="services__subtitle">What we serve</h5>
                    <h2 className="services__title">We offer our best services</h2>
                </Col>
                <ServiceList></ServiceList>
            </Row>
        </Container>
    </section>

    {/* featured tour start */}
    <section>
        <Container>
            <Row>
                <Col lg="12" className="mb-5">
                    <Subtitle subtitle={'Explore'}></Subtitle>
                    <h2 className="featured__tour-title">Our featured tours</h2>
                </Col>
                <FeaturedTourList></FeaturedTourList>
            </Row>
        </Container>
    </section>
        {/* featured tour end */}

        {/* experience section start */}

        <section>
            <Container>
                <Row>
                    <Col lg="6">
                        <div className="experience__content">
                            <Subtitle subtitle={'Experience'}></Subtitle>
                            <h2>With our all experience <br></br> we will serve you</h2>
                            <p>The most beautiful in the world is, of course,<br /> the world itself.</p>
                                </div>

                                <div className="counter__wrapper d-flex align-items-center gap=5">
                                    <div className="counter__box">
                                        <span>12k+</span>
                                        <h6>Successfull Trip</h6>
                                    </div>
                                    <div className="counter__box">
                                        <span>2k+</span>
                                        <h6>Regular Clients</h6>
                                    </div>
                                    <div className="counter__box">
                                        <span>15</span>
                                        <h6>Years Experience</h6>
                                    </div>
                                </div>
                    </Col>
                    <Col lg="6">
                        <div className="experience__img"></div>
                        <img src={experienceImg} alt=""></img>
                    </Col>
                </Row>
            </Container>
        </section>
        {/* experience section end */}

        {/* gallery section start */}

        <section>
            <Container>
                <Row>
                    <Col lg="12">
                        <Subtitle subtitle={'Gallery'}></Subtitle>
                        <h2 className="gallery__title">Visit our customers tour gallery</h2>
                    </Col>
                    <Col lg="12">
                        <MasonryImagesGallery></MasonryImagesGallery>

                    </Col>
                </Row>
            </Container>
        </section>
        {/* gallery section end */}


    {/* testimonial section start */}

    <section>
        <Container>
            <Row>
                <Col lg="12">
                    <Subtitle subtitle={'Fans Love'}></Subtitle>
                    <h2 className="testimonial__title">What are our fans say about us</h2>
                </Col>
                <Col lg="12">
                    <Testimonial></Testimonial>
                </Col>
            </Row>
        </Container>
    </section>
    {/* testimonial section end */}
    <Newsletter></Newsletter>

    </>
};

export default Home;