import React from 'react'
import './landing.scss'
import Button from '@mui/material/Button';
import HeroBanner from '../components/HeroBanner'
import tw from '../assets/teamwork 1.png'
import pc from '../assets/parental-control.png'
import oj from '../assets/online-journal.png'
import frame from '../assets/Aboutus.svg'
import planning from '../assets/planning.svg'
import developing from '../assets/developing.svg'
import launching from '../assets/launching.svg'
import itservice from '../assets/itservice.svg'
import Marketing from '../assets/Marketing.svg'
import yellow from '../assets/yellow.png'
import red from '../assets/red.png'
import edu from '../assets/edu.svg'
import { IconContext } from "react-icons";
import { FaBeer } from "react-icons/fa"
import { BiShoppingBag, BiSolidBusiness, BiSolidBank, BiBuildings } from 'react-icons/bi'
import { MdOutlineLocalHospital, MdShoppingCart } from 'react-icons/md'
import { PiGameController } from 'react-icons/pi'
import { IoMdSchool } from 'react-icons/io'
import react from '../assets/react.svg'
import mongo from '../assets/mongo.svg'
import flutter from '../assets/flutter.svg'
import angular from '../assets/angular.svg'
import android from '../assets/android.svg'
import Footer from '../components/Footer';
import arrow1 from '../assets/arrow1.png'
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Carousel from '../components/Carousel';


AOS.init({
    offset: 150, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom',
});

const Landing = () => {

    const navigate = useNavigate();



    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            //   behavior: 'smooth', // Optional: Adds smooth scrolling animation
            behavior: 'instant'
        });
    };


    const scrollToId = (targetId) => {
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth', // Optional: Adds smooth scrolling animation
                block: 'start', // Scrolls to the top of the element
            });
        }
    };







    return (
        <>

            <HeroBanner></HeroBanner>

            <div className="galary">
                <div className="sec">
                    <img src={tw} alt="" className="gp" />
                    <div className="r2"> 25+</div>
                    <div className="r3">Happy Client</div>
                </div>
                <div className="sec">
                    <img src={pc} alt="" className="gp" />
                    <div className="r2"> 20+</div>
                    <div className="r3">Professional Team</div>
                </div>
                <div className="sec">
                    <img src={oj} alt="" className="gp" />
                    <div className="r2"> 50+</div>
                    <div className="r3">Successful Projects</div>
                </div>

            </div>

            <div className="about">
                <div className="aleft" data-aos="fade-up">
                    <img className='aleftimg' src={frame} alt="" />
                </div>
                <div className="aright" data-aos="fade-up" data-aos-delay="300">
                    <div className="ahead">About KessiTech</div>
                    <div className="acon">Welcome to KessiTech! We are dedicated to helping businesses unlock their digital potential and achieve sustainable growth through innovative technology solutions. With a focus on delivering value, we offer a comprehensive range of services designed to address your unique business needs. Partner with us to navigate the digital landscape and drive your success.</div>
                    <Button onClick={() => { navigate("/aboutus"); scrollToTop() }} className='herobtn' variant="contained">Read More</Button>
                </div>
            </div>

            <div className="work" >
                <div className="whead">How We Work</div>
                <div className="wname">Our Process</div>
                <div className="wcon" data-aos="fade-up"
                //  style={{ backgroundImage: `url(${arrow1})` }}
                >
                    <div className="wsec">

                        <img data-aos-delay="200" data-aos-duration="700" data-aos="flip-left" className='wsecimg' src={planning} alt="" />
                        <div className="ssecname r3">Planning</div>
                    </div>
                    <div className="wsec">
                        <img data-aos-delay="200" data-aos-duration="700" data-aos="flip-left" className='wsecimg' src={developing} alt="" />
                        <div className="ssecname r3">Developing</div>
                    </div>
                    <div className="wsec">
                        <img data-aos-delay="200" data-aos-duration="700" data-aos="flip-left" className='wsecimg' src={launching} alt="" />
                        <div className="ssecname r3">Launching</div>
                    </div>
                </div>
            </div>

            <div className="offer" id='offer'>
                <div className="whead ">What We Offer</div>
                <div className="wname ">Our Service</div>
                <div className="otop" style={{ backgroundImage: `url(${yellow})` }}>
                    <img className='offerimg' data-aos="fade-up" src={itservice} alt="" />
                    <div className="ocon oconit" data-aos="fade-up" data-aos-delay="300">
                        <div className="ahead">IT Services</div>
                        <div className="acon">We rely on the latest and greatest in programming languages, specializing in HTML5,
                            CSS, Javascript, Liquid, PHP, Solidity, Asp.net, and Python. Some of our favorite frameworks include angular js, express js, bootstrap, jwt, .Net MVC, .Net Core, Django,
                            and WordPress.</div>
                        <Button className='herobtn' onClick={() => { navigate("/itservice"); scrollToTop() }} variant="contained">learn More</Button>
                    </div>
                </div>
                <div className="obottom" data-aos="fade-up" style={{ backgroundImage: `url(${red})` }}>
                    <div className="ocon oconaie oconmar" data-aos="fade-up" data-aos-delay="300">
                        <div className="ahead">Marketing Services</div>
                        <div className="acon aconall">We rely on the latest and greatest in programming languages, specializing in HTML5,
                            CSS, Javascript, Liquid, PHP, Solidity, Asp.net, and Python. Some of our favorite frameworks include angular js, express js, bootstrap, jwt, .Net MVC, .Net Core, Django,
                            and WordPress.</div>
                        <Button className='herobtn' onClick={() => { navigate("/marketing"); scrollToTop() }} variant="contained">learn More</Button>
                    </div>
                    <img className='offerimg' data-aos="fade-up" src={Marketing} alt="" />
                </div>
            </div>


            <IconContext.Provider value={{ className: "global-class-name" }}>
                <div className="serve">
                    <div className="whead ">Industries We Serve</div>
                    <div className="wname ">Best ever services</div>
                    <div className="scon " data-aos="fade-up" data-aos-once="true">
                        <div className="sconsec" data-aos-offset="120" data-aos="zoom-in" >
                            <div className="ssecimgbox" data-aos-once="true" data-aos="flip-left" data-aos-delay="300">
                                {/* <img className='global-class-name' src={edu} alt="" /> */}
                                    <IoMdSchool />
                            </div>
                            <div className="ssecname r3">Education</div>
                        </div>
                        <div className="sconsec" data-aos-offset="120" data-aos="zoom-in">
                            <div className="ssecimgbox" data-aos-once="true" data-aos="flip-left" data-aos-delay="300">
                                <BiShoppingBag />
                            </div>
                            <div className="ssecname r3">Shopping</div>
                        </div>
                        <div className="sconsec" data-aos-offset="120" data-aos="zoom-in">
                            <div className="ssecimgbox" data-aos-once="true" data-aos="flip-left" data-aos-delay="300">
                                <BiSolidBusiness />
                            </div>
                            <div className="ssecname r3">Business</div>
                        </div>
                        <div className="sconsec" data-aos-offset="120" data-aos="zoom-in">
                            <div className="ssecimgbox" data-aos-once="true" data-aos="flip-left" data-aos-delay="300">
                                <BiSolidBank />
                            </div>
                            <div className="ssecname r3">Banking</div>
                        </div>
                        <div className="sconsec" data-aos-offset="120" data-aos="zoom-in">
                            <div className="ssecimgbox" data-aos-once="true" data-aos="flip-left" data-aos-delay="300">
                                <BiBuildings />
                            </div>
                            <div className="ssecname r3">Real Estate</div>
                        </div>
                        <div className="sconsec" data-aos-offset="120" data-aos="zoom-in">
                            <div className="ssecimgbox" data-aos-once="true" data-aos="flip-left" data-aos-delay="300">
                                <MdOutlineLocalHospital />
                            </div>
                            <div className="ssecname r3">Health & Fitness</div>
                        </div>
                        <div className="sconsec" data-aos-offset="120" data-aos="zoom-in">
                            <div className="ssecimgbox" data-aos-once="true" data-aos="flip-left" data-aos-delay="300">
                                <PiGameController />
                            </div>
                            <div className="ssecname r3">Games</div>
                        </div>
                        <div className="sconsec" data-aos-offset="120" data-aos="zoom-in">
                            <div className="ssecimgbox" data-aos-once="true" data-aos="flip-left" data-aos-delay="300">
                                <MdShoppingCart />
                            </div>
                            <div className="ssecname r3">Marketplace</div>
                        </div>

                    </div>
                </div>
            </IconContext.Provider>



            <div className="wwork">
                <div className="whead">Technologies We Work</div>
                <div className="wname">Our Expertise</div>
                <div className="workcon" data-aos="fade-up">
                    <Carousel></Carousel>
                    {/* <div className="worksec">
                        <img data-aos="flip-left" data-aos-delay="300" data-aos-duration="700" src={angular} alt="" className="gp" />
                        <div className="r3"> Angular</div>
                    </div>
                    <div className="worksec">
                        <img data-aos="flip-left" data-aos-delay="300" data-aos-duration="700" src={react} alt="" className="gp" />
                        <div className="r3">React </div>
                    </div>
                    <div className="worksec">
                        <img data-aos="flip-left" data-aos-delay="300" data-aos-duration="700" src={android} alt="" className="gp" />
                        <div className="r3">Android</div>
                    </div>
                    <div className="worksec">
                        <img data-aos="flip-left" data-aos-delay="300" data-aos-duration="700" src={flutter} alt="" className="gp" />
                        <div className="r3"> Flutter</div>
                    </div>
                    <div className="worksec">
                        <img data-aos="flip-left" data-aos-delay="300" data-aos-duration="700" src={mongo} alt="" className="gp" />
                        <div className="r3">Mongo </div>
                    </div> */}

                </div>

            </div>
            {/* <Footer></Footer> */}

        </>
    )
}

export default Landing
