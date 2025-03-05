import "./ExpertiseSection.component.css";
import Images from "../../utils/importImages";

const ExpertiseSection = () => {
    return (
        <section className="expertise">
            <div className="expertise-header">
                <img src={Images.star} alt="Star Icon" className="star-icon" />
                <h2>Expertise</h2>
            </div>
            <div className="expertise-grid">
                <div className="expertise-item">
                    <h3>▪ Branding</h3>
                    <p>
                        I create efficient, adaptable, and engaging websites. No predefined patterns. 
                        No sluggish, complex code. Webflow forms the foundation of my web development 
                        approach. I employ it to provide safe, top-notch bespoke websites.
                    </p>
                </div>
                <div className="expertise-item">
                    <h3>▪ UI Design</h3>
                    <p>
                        I create efficient, adaptable, and engaging websites. No predefined patterns. 
                        No sluggish, complex code. Webflow forms the foundation of my web development 
                        approach. I employ it to provide safe, top-notch bespoke websites.
                    </p>
                </div>
                <div className="expertise-item">
                    <h3>▪ UX Design</h3>
                    <p>
                        I comprehend and resolve digital product issues using a user-focused methodology. 
                        Investigation, compassion, and visual conveyance are a few techniques I apply to 
                        captivate and involve your users while fulfilling your business requirements.
                    </p>
                </div>
                <div className="expertise-item">
                    <h3>▪ Development</h3>
                    <p>
                        I create user-friendly, adaptive, engaging websites. No cookie-cutters. No cumbersome, 
                        complex coding. Webflow forms the foundation of my web development approach, 
                        I employ it to produce safe, top-notch personalized websites.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ExpertiseSection;
