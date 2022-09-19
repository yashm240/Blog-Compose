import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
import { CarouselItem } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { Social } from "./social";
import LuggageIcon from "@mui/icons-material/Luggage";

export const MyFooter = () => {
  return (
    <Box style={{ padding: "30px 60px", position: "inherit" }}>
      <div className="carousel" style={{ margin: "0px auto 20px auto" }}>
        <Carousel controls={false} indicators={false}>
          <CarouselItem interval={3000}>
            <h2
              style={{
                color: "green",
                textAlign: "center",
                fontStyle: "italic",
              }}
            >
              “Travel is my therapy.”
              <br />
              -Sam Tarly
            </h2>
          </CarouselItem>
          <CarouselItem interval={3000}>
            <h2
              style={{
                color: "green",
                textAlign: "center",
                fontStyle: "italic",
              }}
            >
              “The journey of a thousand miles begins with a single step.”
              <br />
              -Michelle Green
            </h2>
          </CarouselItem>
          <CarouselItem interval={3000}>
            <h2
              style={{
                color: "green",
                textAlign: "center",
                fontStyle: "italic",
              }}
            >
              “I haven't been everywhere, but it's on my list.”
              <br />
              Surya Malik
            </h2>
          </CarouselItem>
        </Carousel>
      </div>
      <Container>
        <Row>
          <Column>
            <Heading>Continents</Heading>
            <FooterLink href="#">Europe</FooterLink>
            <FooterLink href="#">Asia</FooterLink>
            <FooterLink href="#">North-America</FooterLink>
            <FooterLink href="#">Africa</FooterLink>
          </Column>
          <Column>
            <Heading>Explore</Heading>
            <FooterLink href="#">Destinations</FooterLink>
            <FooterLink href="#">Start Here</FooterLink>
            <FooterLink href="#">Blog</FooterLink>
            <FooterLink href="#">Travel Photos</FooterLink>
          </Column>

          <Column id="Ghumakad">
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                flexWrap: "wrap",
              }}
            >
              <LuggageIcon fontSize="large" style={{ color: "white" }} />
              <Heading style={{ display: "inline-block" }}>Ghummakad</Heading>
            </div>
            <span id="Ghumakadinfo">
              Ghummakad is a place to create beautiful photography website and
              browse hundreds of hand-picked travel photos.
            </span>
          </Column>
          <Column>
            <Heading>Connect with Us!</Heading>
            <Social />
          </Column>
        </Row>
        <div>
          <h6
            style={{
              display: "inline-block",
              width: "fit-content",
              margin: "0 30%",
            }}
          >
            Copyright © 2022, Ghummakad. Be nice, don't steal.
          </h6>
        </div>
      </Container>
    </Box>
  );
};
