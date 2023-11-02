import React from "react";
import { Link } from "react-router-dom";

export const BackLink = () => (
  <Link to="/profile" className="profile__back">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="profile__back-svg"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="icons">
        <path
          id="Vector"
          d="M14.2828 3.501L6.5098 11.475C6.37328 11.6151 6.29688 11.8029 6.29688 11.9985C6.29688 12.1941 6.37328 12.3819 6.5098 12.522L14.2828 20.499C14.3464 20.5643 14.4224 20.6162 14.5064 20.6517C14.5904 20.6871 14.6806 20.7054 14.7718 20.7054C14.863 20.7054 14.9532 20.6871 15.0372 20.6517C15.1212 20.6162 15.1972 20.5643 15.2608 20.499C15.3916 20.3651 15.4649 20.1852 15.4649 19.998C15.4649 19.8108 15.3916 19.631 15.2608 19.497L7.9513 11.9985L15.2608 4.5015C15.3912 4.36762 15.4641 4.18813 15.4641 4.00125C15.4641 3.81437 15.3912 3.63488 15.2608 3.501C15.1972 3.43569 15.1212 3.38377 15.0372 3.34833C14.9532 3.31288 14.863 3.29462 14.7718 3.29462C14.6806 3.29462 14.5904 3.31288 14.5064 3.34833C14.4224 3.38377 14.3464 3.43569 14.2828 3.501Z"
          fill="#122023"
        />
      </g>
    </svg>
    Назад
  </Link>
);