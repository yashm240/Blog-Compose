import { CarouselItem } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

export const SlideImages = () => {
  return (
    <div className="carousel">
      <Carousel controls={false} indicators={false}>
        <CarouselItem interval={2000} style={{ width: "80vw", height: "60vh" }}>
          <img
            className="d-block w-100"
            src={require("../../static images/190314020828-bali-asia-travel-restricted.jpg")}
            alt="First slide"
            style={{ width: "100%", height: "100%", objectFit: "fill" }}
          />
        </CarouselItem>
        <CarouselItem interval={2000} style={{ width: "80vw", height: "60vh" }}>
          <img
            className="d-block w-100"
            src={require("../../static images/australia-beautiful-places-sydney-harbour.jpg")}
            alt="Second slide"
            style={{ width: "100%", height: "100%", objectFit: "fill" }}
          />
        </CarouselItem>
        <CarouselItem interval={2000} style={{ width: "80vw", height: "60vh" }}>
          <img
            className="d-block w-100"
            src={require("../../static images/most-beautiful-landscapes-in-europe-hallstatt-copyright-canadastock-european-best-destinations.jpg")}
            alt="Third slide"
            style={{ width: "100%", height: "100%", objectFit: "fill" }}
          />
        </CarouselItem>
      </Carousel>
    </div>
  );
};
