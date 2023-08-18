import React from 'react'
import SubHeroBanner from '../Components/SubHeroBanner'
import ITSerImg from '../assets/itservice.svg'
import OddPage from '../Components/OddPage'
import Even from '../components/Even'
import CAP from '../assets/ITServices/CAP.svg'
import Cloud from '../assets/ITServices/cloudhostin.svg'
import CRMERP from '../assets/ITServices/CRMERP.svg'
import ProDev from '../assets/ITServices/ProDev.svg'
import PSD from '../assets/ITServices/PSD.svg'
import UiUx from '../assets/ITServices/UiUx.svg'


function ITServices() {
  return (
    <div>
      <SubHeroBanner BannerName="IT Services" BannerContent="We help you take your business to the digital sphere." BannerImg={ITSerImg} />
      <OddPage Heading="Product Strategy and Design" Img={PSD} Content="Our product strategy and design services guide you through every stage of the product development lifecycle. We help you define a clear product vision, outline a roadmap, and prioritize features based on user value and market viability. Our experienced team of strategists and designers collaborate closely to ensure that the product aligns with user needs, business goals, and emerging industry trends. The result is a well-defined product strategy and a captivating design that resonates with your target audience." />
      <Even heading="Product Development" img={ProDev} content="Accelerate your product's journey from concept to launch with our streamlined product development approach. We combine agile methodologies, rapid prototyping, and continuous iteration to drive efficiency and reduce time-to-market. With a keen focus on customer feedback and data-driven decision-making, we ensure your product evolves in sync with market demands, delivering value and staying ahead of the competition." />
      <OddPage Heading="UI/UX Design" Img={UiUx} Content="Transform your ideas into stunning digital experiences with our UI/UX design expertise. Our team leverages a data-driven approach, incorporating user research, usability testing, and industry trends to create impactful designs. By focusing on intuitive navigation, seamless interactions, and visually appealing aesthetics, we ensure your users have a memorable and engaging experience that keeps them coming back for more." />
      <Even heading="Consulting, Architecture and Planning" img={CAP} content="Our consultants leverage their deep industry knowledge and technical proficiency to guide you in making informed decisions about architecture, technology selection, and project planning. From conceptualization and requirements gathering to creating roadmaps and implementation strategies, we provide a solid framework for your projects, ensuring alignment with your business vision and maximizing ROI." />
      <OddPage Heading="CRM ERP solutions" Img={CRMERP} Content="Enhance your business efficiency and agility with our comprehensive CRM ERP solutions. We leverage industry-leading CRM and ERP platforms to provide seamless integration, data synchronization, and process automation. Our team works closely with you to tailor the solution to your unique business requirements, ensuring a smooth implementation and minimal disruption. With a centralized view of customer information, streamlined sales cycles, and optimized resource allocation, our CRM ERP solutions empower you to build stronger customer relationships and achieve operational excellence." />
      <Even heading="Cloud Migration & Application Modernization" img={Cloud} content="Seamlessly transition your applications to the cloud and unlock the full potential of cloud computing with our expert cloud migration and application modernization services. Our team of cloud specialists assesses your existing applications, devises a tailored migration strategy, and executes a smooth transition to the cloud. By leveraging scalable infrastructure, automation, and cloud-native technologies, we ensure improved performance, cost optimization, and enhanced agility for your business." />
    </div>
  )
}

export default ITServices
