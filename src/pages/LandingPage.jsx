import Navbar from "../components/Navbar/Navbar.component";
import MainSection from "../components/MainSection/MainSection.component"
import ExpertiseSection from "../components/ExpertiseSection/ExpertiseSection.component";
import WorksSection from "../components/WorksSection/WorksSection.component";
import ExperienceSection from "../components/ExperienceSection/ExperienceSection.component";
import BlogSection from "../components/BlogSection/BlogSection.component";
import CarouselSection from "../components/CarouselSection/CarouselSection.component";
import FaqSection from "../components/FaqSection/FaqSection.component";
import FooterSection from "../components/FooterSection/FooterSection.component";
const LandingPage =()=>{
    return(
        <div>
            <Navbar/>
            <MainSection/>
            <ExpertiseSection/>
            <WorksSection/>
            <ExperienceSection/>
            <BlogSection/>
            <CarouselSection/>
            <FaqSection/>
            <FooterSection/>
        </div>
    )
}

export default LandingPage;