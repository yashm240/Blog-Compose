import { SlideImages } from "../Carouselimages/CarouselText";
import LuggageIcon from "@mui/icons-material/Luggage";
import SnowboardingIcon from "@mui/icons-material/Snowboarding";
import PublicIcon from "@mui/icons-material/Public";

export const Homebody = () => {
  return (
    <>
      <div className="carousel">
        <SlideImages />
      </div>
      <br />
      <div style={{ margin: "auto", width: "80vw" }}>
        <div className="Heading">
          <LuggageIcon
            fontSize="large"
            style={{ color: "black", display: "inline-block" }}
          />
          <h1 style={{ display: "inline-block" }}>Ghummakad</h1>
        </div>
        <br />
        <p className="ghummakadbody">
          At Ghummakad we strive to create a welcoming, friendly environment for
          people to discuss their travel plans and share their adventures.
          <br />
          If you would like to be a part of our travel community, then please
          join us. We'd love you welcome you! Membership is free <br />
          <br />
          Our objective is to enrich the travelling experience by offering
          numerous services, content and products that have significant
          perceived and added value for travellers worldwide. To travel means to
          meet other people, experience their cultures and to make, but also to
          keep good friends. By bringing more people together - albeit before,
          during or after travelling - Ghummakad will create more understanding
          for different cultures and countries and ultimately a better world for
          everyone to travel in."
          <br />
          <br />
          <br />
        </p>

        <div className="Heading">
          <SnowboardingIcon
            fontSize="large"
            style={{ color: "black", display: "inline-block" }}
          />
          <h3 style={{ display: "inline-block" }}>Our Goals</h3>
        </div>

        <br />
        <br />

        <p className="ghummakadbody">
          "The goal of Ghummakad is to create an international meeting point for
          travellers worldwide, whether they are planning their travels,
          currently travelling or have returned from their travels and want to
          stay in touch with (or find) those travel friends they met while
          travelling in the past."
          <br />
          <br />
          <br />
        </p>

        <div className="Heading">
          <PublicIcon
            fontSize="large"
            style={{ color: "black", display: "inline-block" }}
          />
          <h3 style={{ display: "inline-block" }}>How we Started?</h3>
        </div>
        <br />
        <br />

        <p className="ghummakadbody">
          We first discussed the idea for Ghummakad in a MSN Messenger session
          in the middle of 2002, while Samuel was living in the Netherlands and
          Peter was living in Australia. What started as a mere discussion
          turned into serious planning: just three months later we launched
          Ghummakad. Amazed, we found our humble little website turning into a
          rapidly growing travel community, getting great reviews and attracting
          thousands of new members.
          <br />
          What was our plan when we started? Good question, looking back now, we
          didn't really have one. We just had an idea and felt it was a good
          one. We were travellers who had travelled, met people, lost contact
          with those same people and who wanted a site where you could track
          down old travel mates. It was a simple idea, but it grew into much
          more than a "find lost travel friends" site. It became a Travel
          Community with several complementing services designed to assist
          travellers at all stages of their trip.
          <br />
          A few months after launching the site, we finally sat down and drafted
          our Goals and Objectives and they have been the same ever since. We
          realised our main focus was on people and the experience of
          travelling. This has never changed, and Ghummakad today is about the
          same things it has always been about: people, and the experiences,
          memories, emotions and feelings which are created whilst travelling.
          We continue to try and create a structure in which members can share
          these with each other.
          <br />
          So, that's us, how we started out and how we have continued since
          those days. What the future brings, we don't know....but we hope it
          has something to do with travelling!
        </p>
      </div>
    </>
  );
};
