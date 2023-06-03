import React from "react";
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const Testimonial = () => {

    const settings= {
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow:2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]
    }
    return (
    <Slider {...settings}>
        <div className="testimonial py-4 px-3">
            <p>This was the perfect way to see may different places. Some we planned from the map and others we just saw the heritage sign from the road and stopped if we had time. Would love it if the road signs indicated the distance from road to sites as it would be very helpful if on a timeline. Defiantly would get this again.</p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava01} className="w-25 h-25 rounded-2" alt=""></img>
                    <div>
                        <h6 className="mb-0 mt-3">John Doe</h6>
                        <p>Customer</p>
                    </div>
                </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>We traveled the length of Britain from Dover to Hadrian's Wall over 16 days and were extremly pleased at the value the English Heritage pass. We saved over a third of the costs over eight sites including parking. Our EH guidebook is dogeared and worn and is a great souvenir of our journey. Would do it again in a heartbeat.</p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava02} className="w-25 h-25 rounded-2" alt=""></img>
                    <div>
                        <h6 className="mb-0 mt-3">John Doe</h6>
                        <p>Customer</p>
                    </div>
                </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>Our needs always covered, our questions always answered, attentive and cordial people. Great staff who always look for the best things to make us feel great and in a real vacation and fun time. Kudos for Rich (the concierge) Jerry (chef) and Nuber from the reception and trips planner office.</p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava03} className="w-25 h-25 rounded-2" alt=""></img>
                    <div>
                        <h6 className="mb-0 mt-3">Prpppp jhki</h6>
                        <p>Customer</p>
                    </div>
                </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>Going into this holiday and every holiday I take, I am research girl. I trawl through everything I can find about a hotel so naturally with the reviews so good for the hotel my expectations were high! They were definitely met though and in some cases surpassed! Here is a break down of my thoughts: Location Really conveniently located from Male, especially if you aren’t staying a particularly long time. </p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava02} className="w-25 h-25 rounded-2" alt=""></img>
                    <div>
                        <h6 className="mb-0 mt-3">Prpppp jhki</h6>
                        <p>Customer</p>
                    </div>
                </div>
        </div>
    </Slider>
    )
};

export default Testimonial;