import "./MainSection.component.css";
import Images from "../../utils/importImages";

const MainSection = () => {
    return (
        <section className="main">
            <h1 className="main-text">
                I AM A <span className="image-text"><img src={Images.mainSection1} alt="Visual" /></span> FREELANCE
                <br />
                DESIGNER <span className="image-text"><img src={Images.mainSection2} alt="Visual" /></span> FROM
                <br />
                SAN FRANCISCO
            </h1>
            
            <div className="subtext-container">
                <div className="subtext-logo">
                    <img src={Images.mainSectionLogo1} alt="Logo 1" />
                    <img src={Images.mainSectionLogo2} alt="Logo 2" />
                    <img src={Images.mainSectionLogo3} alt="Logo 3" />
                </div>
                <p className="main-subtext">
                    Welcome to my portfolio. Here, artistry meets functionality.
                    Dive into a curated showcase of distinctive branding and
                    web designs, each crafted to captivate and inspire.
                </p>
            </div>
        </section>
    );
};

export default MainSection;
