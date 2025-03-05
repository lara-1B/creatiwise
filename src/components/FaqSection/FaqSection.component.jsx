import { useState } from "react";
import './FaqSection.component.css'
import Images from "../../utils/importImages";

const faqs = [
    {
        question: "What is your design process?",
        answer: "My design process typically involves four key phases: research, design, prototype, and test. In the research phase, I gather insights about the user and their needs. In the design phase, I create wireframes and visual designs that meet those needs. In the prototype phase, I create interactive models of the design for testing. In the test phase, I collect feedback from users to refine the design."
    },
    {
        question: "What tools and software do you use for UX design?",
        answer: "I use a variety of tools including Figma, Adobe XD, Sketch, and InVision for wireframing, prototyping, and testing designs."
    },
    {
        question: "How do you measure the success of your UX designs?",
        answer: "I measure success based on user feedback, usability testing results, conversion rates, and how well the design meets business and user goals."
    }
];

const FaqSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-container">
            <div className="faq-text">
                <img src={Images.star} alt="Star Icon" className="star-icon" />
                <h2>FAQs</h2>
            </div>
            {faqs.map((faq, index) => (
                <div
                    key={index}
                    className={`faq-item ${activeIndex === index ? "active" : ""}`}
                    onClick={() => toggleFAQ(index)}
                >
                    <h3 className="faq-question">{faq.question}</h3>
                    <p className="faq-answer">{faq.answer}</p>
                </div>
            ))}
        </div>
    );
};

export default FaqSection;
