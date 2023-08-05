import React from 'react'
import './landing.scss'
import Button from '@mui/material/Button';
import HeroBanner from '../components/HeroBanner'
import tw from '../assets/teamwork 1.png'
import pc from '../assets/parental-control.png'
import oj from '../assets/online-journal.png'
import frame from '../assets/Frame.png'
import planning from '../assets/planning.png'
import developing from '../assets/developing.png'
import launching from '../assets/launching.png'
import itservice from '../assets/itservice.png'
import Marketing from '../assets/Marketing.png'
import yellow from '../assets/yellow.png'
import red from '../assets/red.png'
import edu from '../assets/edu.png'
import { IconContext } from "react-icons";
import { FaBeer } from "react-icons/fa"
import { BiShoppingBag, BiSolidBusiness, BiSolidBank, BiBuildings } from 'react-icons/bi'
import { MdOutlineLocalHospital, MdShoppingCart } from 'react-icons/md'
import { PiGameController } from 'react-icons/pi'
import react from '../assets/react.png'
import mongo from '../assets/mongo.png'
import flutter from '../assets/flutter.png'
import angular from '../assets/angular.png'
import android from '../assets/android.png'
import Footer from '../components/Footer';
import arrow1 from '../assets/arrow1.png'
import { useNavigate } from 'react-router-dom';


const Landing = () => {

    


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
                <div className="aleft">
                    <img className='aleftimg' src={frame} alt="" />
                </div>
                <div className="aright">
                    <div className="ahead">About KessiTech</div>
                    <div className="acon">Welcome to KessiTech! We are dedicated to helping businesses unlock their digital potential and achieve sustainable growth through innovative technology solutions. With a focus on delivering value, we offer a comprehensive range of services designed to address your unique business needs. Partner with us to navigate the digital landscape and drive your success.</div>
                    <Button className='herobtn' variant="contained">Read More</Button>

                </div>
            </div>

            <div className="work" >
                <div className="whead">How We Works</div>
                <div className="wname">Our Process</div>
                <div className="wcon" style={{ backgroundImage: `url(${arrow1})` }}>
                    <div className="wsec">
                        <img className='wsecimg' src={planning} alt="" />
                    </div>
                    <div className="wsec">
                        <img className='wsecimg' src={developing} alt="" />
                    </div>
                    <div className="wsec">
                        <img className='wsecimg' src={launching} alt="" />
                    </div>
                </div>
            </div>

            <div className="offer">
                <div className="whead ">What We Offer</div>
                <div className="wname ">Our Service</div>
                <div className="otop" style={{ backgroundImage: `url(${yellow})` }}>
                    <img className='offerimg' src={itservice} alt="" />
                    <div className="ocon">
                        <div className="ahead">IT Services</div>
                        <div className="acon">We rely on the latest and greatest in programming languages, specializing in HTML5,
                            CSS, Javascript, Liquid, PHP, Solidity, Asp.net, and Python. Some of our favorite frameworks include angular js, express js, bootstrap, jwt, .Net MVC, .Net Core, Django,
                            and WordPress.</div>
                        <Button className='herobtn' variant="contained">learn More</Button>
                    </div>
                </div>
                <div className="obottom" style={{ backgroundImage: `url(${red})` }}>
                    <div className="ocon oconaie">
                        <div className="ahead">Marketing Services</div>
                        <div className="acon aconall">We rely on the latest and greatest in programming languages, specializing in HTML5,
                            CSS, Javascript, Liquid, PHP, Solidity, Asp.net, and Python. Some of our favorite frameworks include angular js, express js, bootstrap, jwt, .Net MVC, .Net Core, Django,
                            and WordPress.</div>
                        <Button className='herobtn' variant="contained">learn More</Button>
                    </div>
                    <img className='offerimg' src={Marketing} alt="" />
                </div>
            </div>


            <IconContext.Provider value={{ className: "global-class-name" }}>
                <div className="serve">
                    <div className="whead ">Industries We Serve</div>
                    <div className="wname ">Best ever services</div>
                    <div className="scon ">
                        <div className="sconsec">
                            <div className="ssecimgbox">
                                <img className='global-class-name' src={edu} alt="" />
                            </div>
                            <div className="ssecname r3">Education</div>
                        </div>
                        <div className="sconsec">
                            <div className="ssecimgbox">
                                <BiShoppingBag />
                            </div>
                            <div className="ssecname r3">Shopping</div>
                        </div>
                        <div className="sconsec">
                            <div className="ssecimgbox">
                                <BiSolidBusiness />
                            </div>
                            <div className="ssecname r3">Business</div>
                        </div>
                        <div className="sconsec">
                            <div className="ssecimgbox">
                                <BiSolidBank />
                            </div>
                            <div className="ssecname r3">Banking</div>
                        </div>
                        <div className="sconsec">
                            <div className="ssecimgbox">
                                <BiBuildings />
                            </div>
                            <div className="ssecname r3">Real Estate</div>
                        </div>
                        <div className="sconsec">
                            <div className="ssecimgbox">
                                <MdOutlineLocalHospital />
                            </div>
                            <div className="ssecname r3">Health & Fitness</div>
                        </div>
                        <div className="sconsec">
                            <div className="ssecimgbox">
                                <PiGameController />
                            </div>
                            <div className="ssecname r3">Games</div>
                        </div>
                        <div className="sconsec">
                            <div className="ssecimgbox">
                                <MdShoppingCart />
                            </div>
                            <div className="ssecname r3">Marketplace</div>
                        </div>

                    </div>
                </div>
            </IconContext.Provider>



            <div className="wwork">
                <div className="whead ">Technologies We Work</div>
                <div className="wname ">Our Expertise</div>
                <div className="workcon">
                    <div className="worksec">
                        <img src={angular} alt="" className="gp" />
                        <div className="r3"> Angular</div>
                    </div>
                    <div className="worksec">
                        <img src={react} alt="" className="gp" />
                        <div className="r3">React </div>
                    </div>
                    <div className="worksec">
                        <img src={android} alt="" className="gp" />
                        <div className="r3">Android</div>
                    </div>
                    <div className="worksec">
                        <img src={flutter} alt="" className="gp" />
                        <div className="r3"> Flutter</div>
                    </div>
                    <div className="worksec">
                        <img src={mongo} alt="" className="gp" />
                        <div className="r3">Mongo </div>
                    </div>

                </div>

            </div>
            {/* <Footer></Footer> */}

        </>
    )
}

export default Landing
