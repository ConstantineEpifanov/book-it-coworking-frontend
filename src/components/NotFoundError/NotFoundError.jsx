import PropTypes from "prop-types";
import "./NotFoundError.scss";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { SectionSubtitle } from "../SectionSubtitle/SectionSubtitle";
import img from "../../images/notFoundError.svg";

export const NotFoundError = ({ titleText, subtitleText, directionRow }) => (
  <div className={`error-info ${directionRow && `error-info_row`}`}>
    <div className="error-info__container">
      <SectionTitle titleText={titleText} titleClass="section-title_search" />
      <SectionSubtitle
        titleText={subtitleText}
        titleClass="section-subtitle_search"
      />
    </div>
    <img
      alt={titleText}
      src={img}
      className={`error-info__img ${directionRow && `error-info__img_row`}`}
    />
  </div>
);

NotFoundError.propTypes = {
  titleText: PropTypes.string,
  subtitleText: PropTypes.string,
  directionRow: PropTypes.bool,
};

NotFoundError.defaultProps = {
  titleText: undefined,
  subtitleText: undefined,
  directionRow: false,
};
