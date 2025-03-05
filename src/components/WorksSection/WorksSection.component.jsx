import "./WorksSection.component.css";
import WorkCard from "../WorkCard/WorkCard.component";
import Images from "../../utils/importImages";
import { Link } from "react-router-dom";

const WorksSection = () => {
    const works = [
        {
            id: 1,
            image: Images.worksImage1,
            title: "Analysis Application",
            description: "With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.",
            tags: ["FIGMA", "UX"],
            caseStudyLink: "/",
        },
        {
            id: 2,
            image: Images.worksImage2,
            title: "Fortknox Application",
            description: "With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.",
            tags: ["MOBILE", "WEB"],
            caseStudyLink: "/",
        },
        {
            id: 3,
            image: Images.worksImage3,
            title: "Zenocide Application",
            description: "With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.",
            tags: ["APP", "WEB"],
            caseStudyLink: "/",
        },
        
    ];

    return (
        <section className="works-section">
            <div className="works-header">
                <div className="work-header-text">
                    <img src={Images.star} alt="Star Icon" className="star-icon" />
                    <h2>Works</h2>
                </div>
                <Link to="/" className="view-all">View All</Link>
            </div>
            <div className="works-container">
                {works.map((work) => (
                    <WorkCard
                        key={work.id}
                        image={work.image}
                        title={work.title}
                        description={work.description}
                        tags={work.tags}
                        caseStudyLink={work.caseStudyLink}
                    />
                ))}
            </div>
        </section>
    );
};

export default WorksSection;
