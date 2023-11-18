import { useContext, useCallback } from "react";
import { CurrentUserContext } from "../../contexts/currentUserContext";
import { editUserAvatar } from "../../utils/Api";
import AvatarLoader from "./AvatarLoader";
import {
  BASIC_ERROR,
  IMAGE_VALIDATION_ERROR,
  AVATAR_UPLOAD_SUCCESS,
} from "../../utils/constants";
import imgProfile from "../../images/profile-icons/profile-icon-header.svg";
import "./AvatarUpload.scss";

function AvatarUpload() {
  const { currentUser, setСurrentUser, showMessage, isLoading, setIsLoading } =
    useContext(CurrentUserContext);

  const handleEditAvatar = useCallback(() => {
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
            setIsLoading(true);
            const base64Image = e.target.result;
            editUserAvatar({ image: base64Image })
              .then((res) => {
                setСurrentUser({ ...currentUser, image: res.image });
                showMessage(AVATAR_UPLOAD_SUCCESS, "info");
              })
              .catch(() => {
                showMessage(BASIC_ERROR);
              })
              .finally(() => setIsLoading(false));
          };
          reader.readAsDataURL(selectedFile);
        } else {
          showMessage(IMAGE_VALIDATION_ERROR);
        }
      }
    });
    fileInput.click();
  }, [setСurrentUser, showMessage, setIsLoading, currentUser]);

  return (
    <div className="avatar">
      {!isLoading ? (
        <>
          <img
            src={currentUser.image ?? imgProfile}
            alt="User Avatar"
            className="avatar__image"
          />
          <span className="avatar__tooltip">{IMAGE_VALIDATION_ERROR}</span>
          <button
            className="avatar__button"
            type="button"
            onClick={handleEditAvatar}
          >
            <span className="avatar__icon">✎</span>
          </button>
        </>
      ) : (
        <AvatarLoader />
      )}
    </div>
  );
}

export default AvatarUpload;
