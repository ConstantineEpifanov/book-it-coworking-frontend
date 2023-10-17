import PropTypes from "prop-types";
import "./NotFoundError.scss";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { SectionSubtitle } from "../SectionSubtitle/SectionSubtitle";
import img from "../../images/notFoundError.svg";

export const NotFoundError = ({ titleText, subtitleText }) => (
  <div className="error-info">
    <div className="error-info__container">
      <SectionTitle titleText={titleText} titleClass="section-title_search" />
      <SectionSubtitle
        titleText={subtitleText}
        titleClass="section-subtitle_search"
      />
    </div>
    <img alt={titleText} src={img} className="error-info__img" />
  </div>
);

NotFoundError.propTypes = {
  titleText: PropTypes.string,
  subtitleText: PropTypes.string,
};

NotFoundError.defaultProps = {
  titleText: undefined,
  subtitleText: undefined,
};
