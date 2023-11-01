import PropTypes from "prop-types";

const MetroIcon = ({ stroke }) => (
  <svg
    width="18"
    height="16"
    viewBox="0 0 18 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.0792 14.6668C15.0792 14.6668 16.9584 12.4335 17.1042 9.80433C17.2959 6.471 16.0542 4.446 14.4042 3.01266C13.6067 2.30397 12.6916 1.73995 11.7001 1.346L9.00007 14.6668L6.2959 1.3335C5.29632 1.71627 4.37655 2.28142 3.58341 3.00016C1.94174 4.44183 0.691739 6.4835 0.879239 9.79183C1.04591 12.4418 2.92091 14.6668 2.92091 14.6668"
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
MetroIcon.propTypes = {
  stroke: PropTypes.string.isRequired,
};

export default MetroIcon;
