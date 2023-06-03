
import React, { useRef, useState } from "react";
import '../styles/tour-details.css';
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
import tourData from '../assets/data/tours';
import calculateAvgRating from "../utils/avgRating";
import avatar from "../assets/images/avatar.jpg";
import Booking from "../components/Booking/Booking";
import Newsletter from "../shared/Newsletter";

const TourDetails = () => {
   const {id} = useParams()
   const reviewMsgRef = useRef('')
   const [tourRating, setTourRating] = useState(null)

   const tour = tourData.find(tour => tour.id === id)

   const {photo, title, desc, price, address, reviews, city, distance, maxGroupSize} = tour;
   const {totalRating, avgRating} = calculateAvgRating(reviews);

   const options = { day: "numeric", month:"long", year: "numeric"};

   const submitHandler = e => {
    e.preventDefault()
    const reviewText = reviewMsgRef.current.value
    alert (`${reviewText}, ${tourRating}`)
   }

   return (
    <>
    <section>
        <Container>
            <Row>
                <Col lg="8">
                    <div className="tour__content">
                        <img src={photo} alt=""></img>
                        <div className="tour__info">
                            <h2>{title}</h2>
                            <div className="d-flex align-items-center gap-5">
                                <span className="tour-rating d-flex align-item-center gap-1">
                                    <i class="ri-star-s-fill" style={{color : "var (--secondary-color)"}}></i>
                                    {avgRating === 0 ? null : avgRating}
                                    {totalRating === 0 ? ("Not Rated") : (
                                        <span>({reviews.length})</span>
                                    )}
                                    </span>
                                    <span>
                                        <i class="ri-map-pin-fill">{address}</i>
                                    </span>
                             </div>
                             <div className="tour__extra-details">
                                <span><i class="ri-map-pin-2-line"></i>{city}</span>
                                <span><i class="ri-money-dollar-circle-line"></i>${price} / per person</span>
                                <span><i class="ri-map-pin-time-line"></i>${distance} k/m</span>
                                <span><i class="ri-group-line"> {maxGroupSize} people</i></span>
                             </div>
            </div>
            <h5>Description</h5>
            <p>{desc}</p>

                    </div>
                    <div class="tour__review mt-4">
                        <h4>Review ({reviews?.length} reviews)</h4>
                        <form onSubmit={submitHandler}>
                            <div className="d-flex align-item-center gap-3 mb-4 rating__group">
                                <span onClick={()=> setTourRating(1)}>1<i class="ri-star-s-fill"></i></span>
                                <span onClick={()=> setTourRating(2)}>2<i class="ri-star-s-fill"></i></span>
                                <span onClick={()=> setTourRating(3)}>3<i class="ri-star-s-fill"></i></span>
                                <span onClick={()=> setTourRating(4)}>4<i class="ri-star-s-fill"></i></span>
                                <span onClick={()=> setTourRating(5)}>5<i class="ri-star-s-fill"></i></span>
                            </div>
                            <div className="review__input">
                                <input type="text" ref={reviewMsgRef} placeholder="share your thoughts" required></input>
                                <button className="btn primary__btn text-white" type="submit">Submit</button>
                            </div>
                        </form>
                        <ListGroup className="user__reviews">
                            {
                                reviews ?.map(reviews => (
                                    <div className="review__item">
                                        <img src={avatar} alt=""></img>
                                        <div className="w-100">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div>
                                                    <h5>Bill charles</h5>
                                                    <p>
                                                        {new Date("6-05-2021").toLocaleDateString("en-us")}
                                                    </p>
                                                </div>
                                                <span className="d-flex align-items-center">
                                                    5 <i class="ri-star-s-fill"></i>
                                                </span>
                                            </div>
                                            <h6>Amazing Tour</h6>

                                        </div>
                                    </div>

                                ))
                            }
                        </ListGroup>
                    </div>
                    
                </Col>
                <Col lg="4">
                    <Booking tour={tour} avgRating={avgRating}></Booking>

                </Col>

            </Row>
        </Container>
    </section>
    <Newsletter></Newsletter>
    </>
    
   )};
export default TourDetails;
