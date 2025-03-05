import "./WorkCard.component.css";
import { Link } from "react-router-dom";

const WorkCard = ({ image, title, description, tags, caseStudyLink }) => {
    return (
        <div className="work-card">
            <div className="work-image">
                <img src={image} alt={title} />
            </div>
            <div className="work-content">
                <div className="work-content-top">
                    <h3 className="work-title">{title}</h3>
                    <p className="work-description">{description}</p>
                    <div className="work-tags">
                        {tags.map((tag, index) => (
                            <span key={index} className="work-tag">{tag}</span>
                        ))}
                    </div>
                </div>
                <div className="work-content-bottom">
                    <Link to={caseStudyLink} className="case-study-btn">View Case Study</Link>
                </div>
            </div>
        </div>
    );
};

export default WorkCard;
