import './FooterSection.component.css';
import Images from "../../utils/importImages";
import { Link } from "react-router-dom";

const FooterSection = () => {
    return (
        <footer className="footer">
            <div className="marquee">
                <div className="marquee-content">
                    <span className="hollow-text">FLOW</span>
                    <img src={Images.star} alt="star" className="star" />
                    <span className="hollow-text">FIGMA</span>
                    <img src={Images.star} alt="star" className="star" />
                    <span className="hollow-text">DESIGNER</span>
                    <img src={Images.star} alt="star" className="star" />
                    <span className="hollow-text">DEVELOPER</span>
                    <img src={Images.star} alt="star" className="star" />
                </div>
            </div>

            <div className='main-footer-section'>
                <div className="contact-section">
                    <h2 className="lets-talk">LET’S TALK!</h2>
                    <a href="mailto:rehanurraihan@gmail.com" className="email">
                        rehanurraihan@gmail.com ↗
                    </a>
                </div>

                <div className="footer-bottom">
                    <p>© Rehan Raihan - 2023</p>
                    <div className="social-links">
                        <Link to="/">Dribbble</Link>
                        <Link to="/">Behance</Link>
                        <Link to="/">Twitter</Link>
                        <Link to="/">Instagram</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;
