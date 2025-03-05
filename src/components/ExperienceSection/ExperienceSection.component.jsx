import "./ExperienceSection.component.css"
import Images from "../../utils/importImages";

const ExperienceSection = () => {
    const experiences = [
        { role: "Lead Product Designer", company: "Fortknox", duration: "Mar 2022 - Oct 2023" },
        { role: "Intern Designer", company: "OmniSafe", duration: "Mar 2022 - Oct 2023" },
        { role: "UI Designer", company: "Doradesign", duration: "Mar 2022 - Oct 2023" },
        { role: "Frontend Developer", company: "OpacityAuthor", duration: "Mar 2022 - Oct 2023" }
    ];

    return (
        <div className="experience-container">
            <div className="experience-header">
                <img src={Images.star} alt="Star Icon" className="star-icon" />
                <h2>Experience</h2>
            </div>
            <div className="experience-list">
                {experiences.map((exp, index) => (
                    <div key={index} className="experience-item">
                        <div className="experience-item-left">
                            <span className="experience-role">{exp.role}</span>
                        </div>
                        <div className="experience-item-right">
                            <span className="experience-company">{exp.company}</span>
                            <span className="experience-duration">{exp.duration}</span>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExperienceSection;
