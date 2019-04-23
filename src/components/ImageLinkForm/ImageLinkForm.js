import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onDetectSubmit }) => (
  <div>
    <p className="f3">{"This will detect the faces in your images."}</p>
    <div className="center">
      <div className=" form center pa4 br3 shadow-5">
        <input
          placeholder="Enter a link to a picture"
          className="f4 pa2 w-70 center"
          type="text"
          onChange={onInputChange}
        />
        <button
          className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
          onClick={onDetectSubmit}
        >
          Detect
        </button>
      </div>
    </div>
  </div>
);

export default ImageLinkForm;
