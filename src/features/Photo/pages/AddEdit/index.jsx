import React from "react";
import PropTypes from "prop-types";
import Banner from "../../../../components/Banner";
import { Container } from "reactstrap";
import Images from "../../../../constants/image";
import PhotoForm from "../../../../components/PhotoForm";
import "./AddEdit.scss";
import { useDispatch } from "react-redux";
import { addPhoto, updatePhoto } from "../../photoSlice";
import { useHistory, useParams } from "react-router";
import { useSelector } from "react-redux";

AddEditPage.propTypes = {};

function AddEditPage(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { photoId } = useParams();
  const isAddMode = !photoId;

  const editPhoto = useSelector(state => {
    const foundPhoto = state.photos.find(x => x.id === +photoId);
    console.log({ photos: state.photos, photoId, foundPhoto });
    return foundPhoto;
  });

  console.log({ photoId, editPhoto });

  const initialValues = isAddMode
    ? { title: "", categoryId: null, photo: "" }
    : editPhoto;

  const handleSubmit = values => {
    return new Promise(reslove => {
      console.log("Form submit: ", values);

      setTimeout(() => {
        if (isAddMode) {
          const action = addPhoto(values);
          console.log({ action });
          dispatch(action);
        } else {
          // Do some thing here
          const action = updatePhoto(values);
          dispatch(action);
        }
        history.push("/photos");
        reslove(true);
        return;
      }, 2000);
    });
  };
  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo" />
      <div className="photo-edit_form">
        <PhotoForm
          initialValues={initialValues}
          onSubmit={handleSubmit}
          isAddMode={isAddMode}
        />
      </div>
    </div>
  );
}

export default AddEditPage;
