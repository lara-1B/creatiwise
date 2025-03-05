import { useState } from "react";
import './carouselSection.component.css';
import CarouselCard from "../CarouselCard/CarouselCard.component";
import Images from "../../utils/importImages";

const testimonials = [
    {
        id: 1,
        name: "Floyd Miles",
        company: "eBay",
        image: Images.frame,
        quote: "Synergy’s resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy’s resume builder is fantastic. It helped me create a professional resume that stood out to employers."
    },
    {
        id: 2,
        name: "Floyd Floyd",
        company: "Google",
        image: Images.frame,
        quote: "This tool is amazing! It made job applications so much easier and professional. Highly recommended!"
    },
    {
        id: 3,
        name: "Miles Miles",
        company: "Amazon",
        image: Images.frame,
        quote: "A game-changer in resume building. It streamlined my entire job search process with ease."
    }
];

const CarouselSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="carousel-container">
        <div className="carousel-header">
        <img src={Images.star} alt="Star Icon" className="star-icon" />
        <h2>What they say</h2>
        </div>
            <CarouselCard testimonial={testimonials[currentIndex]} />
            <div className="carousel-buttons">
                <button onClick={prevSlide} className="carousel-btn">←</button>
                <button onClick={nextSlide} className="carousel-btn">→</button>
            </div>
        </div>
    );
};

export default CarouselSection;
