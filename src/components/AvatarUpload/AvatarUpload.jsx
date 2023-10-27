/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/currentUserContext";
import imgProfile from "../../images/profile-icons/profile-icon-header.svg";

import {
  BASIC_ERROR,
  IMAGE_VALIDATION_ERROR,
  AVATAR_UPLOAD_SUCCESS,
} from "../../utils/constants";

import { editUserAvatar } from "../../utils/Api";

import "./AvatarUpload.scss";

function AvatarUpload() {
  const { currentUser, setСurrentUser, showMessage } =
    useContext(CurrentUserContext);

  const handleEditAvatar = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/jpeg, image/png";
    fileInput.addEventListener("change", async (event) => {
      const selectedFile = event.target.files[0];
      if (selectedFile) {
        if (
          selectedFile.size <= 1024 * 1024 &&
          (selectedFile.type === "image/jpeg" ||
            selectedFile.type === "image/png")
        ) {
          const reader = new FileReader();
          reader.onload = async (e) => {
            const base64Image = e.target.result;
            editUserAvatar({ image: base64Image })
              .then((res) => {
                setСurrentUser({ ...currentUser, image: res.image });
                showMessage(AVATAR_UPLOAD_SUCCESS, "info");
              })
              .catch(() => {
                showMessage(BASIC_ERROR);
              });
          };
          reader.readAsDataURL(selectedFile);
        } else {
          showMessage(IMAGE_VALIDATION_ERROR);
        }
      }
    });
    fileInput.click();
  };

  return (
    <div className="avatar">
      <img
        src={currentUser.image ?? imgProfile}
        alt="User Avatar"
        className="avatar__image"
      />

      <button
        className="avatar__button"
        type="button"
        onClick={handleEditAvatar}
      >
        <span className="avatar__icon">✎</span>
      </button>
    </div>
  );
}

export default AvatarUpload;
