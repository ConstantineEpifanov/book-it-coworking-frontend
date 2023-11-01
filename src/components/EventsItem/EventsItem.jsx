import React, { useMemo } from "react";
import PropTypes from "prop-types";

import { formatEventDate } from "../../utils/utils";

import Button from "../UI-kit/Button/Button";

import { TagIcon } from "./icons/TagIcon";
import { UserIcon } from "./icons/UserIcon";

import "./EventsItem.scss";

export const EventsItem = ({ event }) => {
  const formattedDate = useMemo(
    () => formatEventDate(event.date),
    [event.date],
  );
  return (
    <div className="events-item">
      <div className="events-item__image-container">
        <img
          src={event.image}
          alt={event.name}
          className="events-item__image"
        />
        <span className="events-item__date">{formattedDate}</span>
      </div>
      <div className="events-item__info__container">
        <h3 className="events-item__name">{event.name}</h3>

        <div className="events-item__row">
          <TagIcon />
          {event.address}
        </div>
        <div className="events-item__row events-item__row_last">
          <UserIcon />
          Мест:
          <span className="events-item__slots">{event.meeting_quantity}</span>
        </div>
        <Button
          btnClass="button_type_transparent button_size_postmiddle"
          btnText="К событию"
          onClick={() => {
            if (event.url) {
              window.open(event.url, "_blank");
            }
          }}
        />
      </div>
    </div>
  );
};

EventsItem.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    address: PropTypes.string,
    meeting_quantity: PropTypes.number,
    url: PropTypes.string,
    date: PropTypes.string.isRequired,
  }),
};

EventsItem.defaultProps = {
  event: {
    id: undefined,
    name: undefined,
    image: undefined,
    address: undefined,
    meeting_quantity: undefined,
    url: undefined,
    date: undefined,
  },
};
