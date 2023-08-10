import React from 'react'
import './about.scss'
import SubHeroBanner from '../components/SubHeroBanner'
import aboutus from '../assets/Aboutus.svg'
import rocket from '../assets/rocket.svg'
import OddPage from '../components/OddPage'
import core1 from '../assets/core1.svg'
import core2 from '../assets/core2.svg'
import core3 from '../assets/core3.svg'
import core4 from '../assets/core4.svg'
import core5 from '../assets/core5.svg'
import apart from '../assets/apart.svg'
import apartweb from '../assets/apartweb.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init()

const About = () => {
    return (
        <div className='aboutus'>
            <SubHeroBanner BannerName="About Us" BannerContent="We are a team of Enthusiasts!" BannerImg={aboutus} />
            
            <OddPage Heading="Our Mission" Img={rocket} Content="From the moment our company was founded, we have helped our clients find exceptional solutions for their businesses. We aim to help businesses with our IT Services and cutting edge technologies to meet their needs and grow." />
    
            <div className="corevalue ">
                <div className="whead">Our Core Values</div>
                <div className="corecon  ">
                    <div className="coreconsec " data-aos="flip-left" data-aos-delay="200">
                        <div className="coreimgbox ">
                            <img className="coreimgboximg" src={core1} alt="" />
                        </div>
                        <div className="ssecname r3 ">Customer-Centric</div>
                        <div className="coreseccon ">Your success is our priority. We listen to your needs and exceed your expectations.</div>
                    </div>
                    <div className="coreconsec " data-aos="flip-left" data-aos-delay="200">
                        <div className="coreimgbox">
                            <img className="coreimgboximg" src={core2} alt="" />
                        </div>
                        <div className="ssecname r3">Innovation</div>
                        <div className="coreseccon ">We embrace challenges and leverage the latest technologies to keep you ahead in the market.</div>
                    </div>
                    <div className="coreconsec " data-aos="flip-left" data-aos-delay="200">
                        <div className="coreimgbox">
                            <img className="coreimgboximg" src={core3} alt="" />
                        </div>
                        <div className="ssecname r3 ">Integrity</div>
                        <div className="coreseccon">Honesty, transparency, and ethical practices are at the heart of our operations.</div>
                    </div>
                    <div className="coreconsec " data-aos="flip-left" data-aos-delay="200">
                        <div className="coreimgbox">
                            <img className="coreimgboximg" src={core4} alt="" />
                        </div>
                        <div className="ssecname r3 ">Teamwork</div>
                        <div className="coreseccon ">Our collaborative approach maximizes our skills to deliver exceptional results.</div>
                    </div>
                    <div className="coreconsec " data-aos="flip-left" data-aos-delay="200">
                        <div className="coreimgbox ">
                            <img className="coreimgboximg" src={core5} alt="" />
                        </div>
                        <div className="ssecname r3 ">Continuous Learning</div>
                        <div className="coreseccon ">We continuously enhance our knowledge to provide the most relevant solutions.</div>
                    </div>
                </div>
            </div>

            <div className="apart ">
                <div className="whead ">What Sets Us Apart</div>
                <div className="apartcon " style={{ backgroundImage: `url(${apartweb})` }} >

                    <div className="apartsec atopleft" data-aos-offset="200" data-aos="fade-up" data-aos-delay="400">
                        <div className="r3">Comprehensive Service Portfolio</div>
                        <div className="apartseccon">IT consulting, s/w development, cloud solutions, cybersecurity, and more, all under one roof.</div>
                    </div>
                    <div className="apartsec ">
                        <div className="r3"></div>
                        <div className="apartseccon"></div>
                    </div>
                    <div className="apartsec atopright" data-aos-offset="200" data-aos="fade-up" data-aos-delay="600">
                        <div className="r3">Dedicated Support</div>
                        <div className="apartseccon">Ongoing support and maintenance to keep your systems running smoothly.</div>
                    </div>
                    <div className="apartsec abottomleft"  data-aos="fade-up" >
                        <div className="r3">Customized Solutions</div>
                        <div className="apartseccon">Tailor-made solutions for your specific requirements.</div>
                    </div>
                    <div className="apartsec ">
                        <div className="r3"></div>
                        <div className="apartseccon"></div>
                    </div>
                    <div className="apartsec abottomright" data-aos="fade-up" data-aos-delay="800">
                        <div className="r3">Proven Track Record</div>
                        <div className="apartseccon">Successful projects across various industries.</div>
                    </div>
                </div>


                <div className="apartmobile ">
                    <div className="ambox ">
                    <div className="apartsec ">
                        <div className="r3">Customized Solutions</div>
                        <div className="apartseccon">Tailor-made solutions for your specific requirements.</div>
                    </div>
                    <div className="apartsec ">
                        <div className="r3">Proven Track Record</div>
                        <div className="apartseccon">Successful projects across various industries.</div>
                    </div>
                    <div className="apartsec ">
                        <div className="r3">Comprehensive Service Portfolio</div>
                        <div className="apartseccon">IT consulting, s/w development, cloud solutions, cybersecurity, and more, all under one roof.</div>
                    </div>
                    <div className="apartsec ">
                        <div className="r3">Dedicated Support</div>
                        <div className="apartseccon">Ongoing support and maintenance to keep your systems running smoothly.</div>
                    </div>

                    </div>
                    <img className='amimmg' src={apart} alt="" />
                </div>
            </div>


        </div>
    )
}

export default About
