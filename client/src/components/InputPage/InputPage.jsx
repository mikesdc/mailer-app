import "./InputPage.scss";
import React, { useState } from "react";


const InputPage = () => {

  const [jobNumber, setJobNumber] = useState("");

  return (
    <div className="input-page">
      <div className="input-page__container">
        <h1 className="input-page__header">Chemistry Comments</h1>
        <div className="input-page__form">
          <input
            type="text"
            placeholder="Enter job number here"
            className="input-page__input-field"
          />
          <div className="input-page__button-container">
            <div className="input-page__submit-button">Submit</div>
          </div>
        </div>
        <div className="input-page__description-container">
          <h2 className="input-page__description-header">Description</h2>
          <p className="input-page__description-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            molestias omnis autem perferendis blanditiis animi atque odit vero
            mollitia, alias unde amet. Vel magnam molestias consequatur
            architecto aspernatur vero tempore. Porro labore quasi placeat modi
            libero cupiditate quibusdam delectus minima repudiandae eaque amet
            sunt, at unde iusto fugiat commodi magnam ab vel obcaecati itaque
            ipsam, pariatur quae. Amet, sed incidunt. Adipisci obcaecati ipsum
            eos, perferendis sit aspernatur minima iusto distinctio corporis.
            Temporibus voluptates a neque ducimus cum deserunt animi obcaecati
            nesciunt iure nihil delectus non distinctio, mollitia officiis?
            Sapiente, aut.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InputPage;
