import Carousel from 'react-bootstrap/Carousel';
import devops from "../../Assets/devops.jpg";
import java from "../../Assets/java.jpg";
import react from "../../Assets/react.jpg";
import './Slider.css';

function Slider() {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img src={devops} alt="devops" className="d-block w-100" />
                    <Carousel.Caption>
                        <a href="/" className="sliderBtn">Learn More</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={java} alt="java" className="d-block w-100" />
                    <Carousel.Caption>
                        <a href="/" className="sliderBtn">Learn More</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={react} alt="react" className="d-block w-100" />
                    <Carousel.Caption>
                        <a href="/" className="sliderBtn">Learn More</a>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Slider;
