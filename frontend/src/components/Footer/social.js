import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Column } from "./FooterStyles";

export const Social = () => {
  return (
    <div className="socialcontainer">
      <Column>
        <a href="https://www.instagram.com/" className="instagram social">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </Column>
      <Column>
        <a
          href="https://www.facebook.com/facebook/"
          className="facebook social"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
      </Column>
      <Column>
        <a href="https://www.youtube.com/" className="youtube social">
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
      </Column>
      <Column>
        <a href="https://twitter.com/?lang=en-in" className="twitter social">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
      </Column>
    </div>
  );
};