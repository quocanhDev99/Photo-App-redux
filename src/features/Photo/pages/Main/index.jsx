import React from "react";
import PropTypes from "prop-types";
import Banner from "../../../../components/Banner";
import PhotoList from "../../components/PhotoList";
import { Container } from "reactstrap";
import Images from "../../../../constants/image";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removePhoto } from "../../photoSlice";
MainPage.propTypes = {};

function MainPage(props) {
  const photos = useSelector(state => state.photos);
  // console.log("List of photos", photos);
  const history = useHistory();
  const dispatch = useDispatch();

  const handlePhotoEditClick = photo => {
    console.log("Edit: ", photo);
    const editPhotoUrl = `/photos/${photo.id}`;
    history.push(editPhotoUrl);
  };

  const handlePhotoRemoveClick = photo => {
    console.log("Remove: ", photo);
    const removePhotoId = photo.id;
    const action = removePhoto(removePhotoId);
    dispatch(action);
  };

  return (
    <div className="photo-main">
      <Banner title="Your awesome photos" backgroundUrl={Images.bg_2} />
      <Container className="text-center">
        <Link to="/photos/add">Add new photo</Link>
      </Container>

      <PhotoList
        photoList={photos}
        onPhotoEditClick={handlePhotoEditClick}
        onPhotoRemoveClick={handlePhotoRemoveClick}
      />
    </div>
  );
}

export default MainPage;
