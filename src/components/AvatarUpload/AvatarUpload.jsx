import { useContext, useState } from "react";
import { CurrentUserContext } from "../../contexts/currentUserContext";
import imgProfile from "../../images/profile-icons/profile-icon-header.svg";

import "./AvatarUpload.scss";

function AvatarUpload() {
  const { currentUser } = useContext(CurrentUserContext);
  const [newAvatar, setnewAvatar] = useState(null);

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
          setnewAvatar(selectedFile);
        } else {
          console.log("с файлам что-то не то");
        }
      }
    });
    fileInput.click();
  };

  return (
    <div className="avatar">
      <img
        src={
          (newAvatar && URL.createObjectURL(newAvatar)) ||
          currentUser.avatar ||
          imgProfile
        }
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
