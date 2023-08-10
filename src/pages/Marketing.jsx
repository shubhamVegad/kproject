import React from 'react'
import SubHeroBanner from '../Components/SubHeroBanner'
import MarketServices from '../assets/Marketing.svg'
import OddPage from '../Components/OddPage'
import Even from '../components/Even'
import Social from '../assets/MarketingServices/SocialManage.svg'
import SEO from '../assets/MarketingServices/SEO.svg'
import ContentMarketing from '../assets/MarketingServices/ContentMarketing.svg'
import PPC from '../assets/MarketingServices/PPCAds.svg'
import EMarketing from '../assets/MarketingServices/EmailMarketing.svg'
import BrandDesign from '../assets/MarketingServices/DesignProcess.svg'
import AIServices from '../assets/MarketingServices/AIServices.svg'


function Marketing() {
  return (
    <div>
      <SubHeroBanner BannerName = "Marketing Services" BannerContent = "Social Media is not a media. The key is to listen, engage & build relationships." BannerImg= {MarketServices}/>
      <OddPage Heading="Social Media Management" Img={Social} Content="We offer Social Media Management services designed to amplify your brand's presence across popular social media platforms. From Facebook and Instagram to Twitter and LinkedIn, we curate engaging content that resonates with your audience. We develop data-driven strategies to build brand loyalty, increase followers, and drive conversions. By closely monitoring trends and leveraging advanced analytics, we ensure your social media campaigns deliver real, measurable results." />
      <Even heading="Search Engine Optimization (SEO)" img={SEO} content="Enhance your website's organic search visibility with our cutting-edge SEO techniques. Through in-depth keyword research, on-page optimization, and backlink building, we help your website rank higher on search engine results pages (SERPs). By optimizing your website's content and structure, we enhance user experience and increase organic traffic. Our goal is to elevate your online authority, making you a go-to resource in your industry." />
      <OddPage Heading="Content Marketing" Img={ContentMarketing} Content="Captivating content lies at the heart of successful digital marketing. We focus on crafting compelling stories that resonate with your target audience. Whether it's blog posts, articles, infographics, or videos, we create valuable, shareable content that establishes your brand's authority and fosters long-term relationships with customers." />
      <Even heading="Pay-Per-Click (PPC) Advertising" img={PPC} content="Drive instant traffic and maximize conversions with our result-oriented PPC Advertising campaigns. We carefully select relevant keywords, create eye-catching ad copies, and optimize landing pages to ensure the highest return on investment (ROI). With continuous monitoring and optimization, we deliver cost-effective PPC campaigns that boost your online visibility and drive revenue growth." />
      <OddPage Heading="Email Marketing" Img={EMarketing} Content="Stay connected with your audience and nurture leads through our personalized Email Marketing campaigns. We create engaging email sequences, targeted newsletters, and promotional offers that resonate with subscribers. By analyzing open rates and click-through rates, we refine our strategies to ensure your messages reach the right people at the right time, driving customer engagement and retention." />
      <Even heading="Branding & Design" img={BrandDesign} content="Your brand's identity is its unique fingerprint in the digital landscape. We offer comprehensive Branding & Design services to help you establish a memorable brand image. From logo design and brand guidelines to visual assets, we craft a cohesive brand identity that conveys your values and resonates with your target audience." />
      <OddPage Heading="AI Integration & Consulting Services" Img={AIServices} Content="Embrace the future of marketing with our AI Integration & Consulting Services. We'll analyze your business needs and explore ways to leverage AI technology in your marketing strategies. From AI-generated graphics for personalized content to AI-powered analytics for data-driven decision-making, we'll help you harness the power of AI to gain a competitive edge in the digital landscape." />
    </div>
  )
}

export default Marketing
