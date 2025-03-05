import './CarouselCard.component.css'
import Images from "../../utils/importImages";
const CarouselCard = ({ testimonial }) => {
    return (
        <div className="carousel-card">
            <div className="card-left">
                <img src={testimonial.image} alt={testimonial.name} className="profile-img" />
                <div>
                    <h3 className="name">{testimonial.name}</h3>
                    <p className="company">{testimonial.company}</p>
                </div>
            </div>
            <div className="card-right">
                <img src={Images.quote} alt="Quote" className="quote-bg" />
                <p className="quote-text">{testimonial.quote}</p>
            </div>
        </div>
    );
};

export default CarouselCard;
