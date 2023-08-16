import React from "react";
import styled, { keyframes, css } from "styled-components";
import react from '../assets/react.svg'
import mongo from '../assets/mongo.svg'
import flutter from '../assets/flutter.svg'
import angular from '../assets/angular.svg'
import android from '../assets/android.svg'
import Vue from '../assets/vue.svg'
import kotline from '../assets/kotline.svg'
import laravel from '../assets/laravel.png'
import spring from '../assets/spring.svg'
import ruby from '../assets/ruby.svg'
import './carousel.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function Carousel() {
    const row1 = [
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/7ae42bac3b34999c0db3.png",
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/b2bd91d7b87b2181ca45.png",
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6591cdc0702b32310306.png",
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3b7d9f4b073deb6a9b74.png",
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3cd767dea94a85078ca4.png",
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/a2b3c3709ffedce2a22a.png",
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/a2b3c3709ffedce2a22a.png",
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/a2b3c3709ffedce2a22a.png",
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/a2b3c3709ffedce2a22a.png",
        // <div className="worksec">
        //     <img src={angular} alt="" className="cgp" />
        //     <div className="cr3"> Angular</div>
        // </div>,


        // <img src="https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/a2b3c3709ffedce2a22a.png" alt="" className="cgp" />
    ];
    const row2 = [
        <div className="worksec">
            <img data-aos="flip-left" data-aos-duration="700" src={angular} alt="" className="cgp" />
            <div className="cr3"> Angular</div>
        </div>,
        <div className="worksec">
            <img data-aos="flip-left" data-aos-duration="700" src={react} alt="" className="cgp" />
            <div className="cr3">React </div>
        </div>,
        <div className="worksec">
            <img data-aos="flip-left" data-aos-duration="700" src={android} alt="" className="cgp" />
            <div className="cr3">Android</div>
        </div>,
        <div className="worksec">
            <img data-aos="flip-left" data-aos-duration="700" src={flutter} alt="" className="cgp" />
            <div className="cr3"> Flutter</div>
        </div>,
        <div className="worksec">
            <img data-aos="flip-left" data-aos-duration="700" src={mongo} alt="" className="cgp" />
            <div className="cr3">MongoDB</div>
        </div>,
        <div className="worksec">
            <img data-aos="flip-left" data-aos-duration="700" src={Vue} alt="" className="cgp" />
            <div className="cr3">Vue</div>
        </div>,
        <div className="worksec">
            <img data-aos="flip-left" data-aos-duration="700" src={ruby} alt="" className="cgp" />
            <div className="cr3">Ruby</div>
        </div>,
        <div className="worksec">
            <img data-aos="flip-left" data-aos-duration="700" src={spring} alt="" className="cgp" />
            <div className="cr3">Spring</div>
        </div>,
        <div className="worksec">
            <img data-aos="flip-left" data-aos-duration="700" src={kotline} alt="" className="cgp" />
            <div className="cr3">Kotline</div>
        </div>,
        <div className="worksec">
            <img data-aos="flip-left" data-aos-duration="700" src={laravel} alt="" className="cgp" />
            <div className="cr3">Laravel</div>
        </div>,
        

    ];



    return (
        <AppContainer>

            <Wrapper>

                <div className="marq">
                    <div className="marqgrp">
                        {row2.map((el) => (
                            <ImageGroup>
                                {el}
                            </ImageGroup>
                        ))}
                    </div>
                    <div className="marqgrp">
                        {row2.map((el) => (
                            <ImageGroup>
                                {el}
                            </ImageGroup>
                        ))}
                    </div>
                </div>

            </Wrapper>
        </AppContainer>
    );
}

{/* <MarqueeGroup>
    {row1.map((el) => (
        <ImageGroup>
            <Image src={el} />
        </ImageGroup>
    ))}
</MarqueeGroup> */}

export default Carousel;

const AppContainer = styled.div`
  width: 90%;
  margin-inline: auto;
  color: #000000;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;


// const Marquee = styled.div`
//   display: flex;
//   width: 1200px;
//   height: 175px;
//   overflow: hidden;
//   user-select: none;
  

//   mask-image: linear-gradient(
//     to right,
//     hsl(0 0% 0% / 0),
//     hsl(0 0% 0% / 1) 10%,
//     hsl(0 0% 0% / 1) 90%,
//     hsl(0 0% 0% / 0)
//   );
// `;

// const scrollX = keyframes`
//   from {
//     left: translateX(0);
//   }
//   to {
//     transform: translateX(-100%);
//   }
// `;

// const common = css`
//   flex-shrink: 0;
//   display: flex;
//   align-items: center;
//   justify-content: space-around;
//   white-space: nowrap;
//   width: 100%;
//   animation: ${scrollX} 30s linear infinite;
// `;

// const MarqueeGroup = styled.div`
//   ${common}
// `;


const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
  height : 100%;
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;