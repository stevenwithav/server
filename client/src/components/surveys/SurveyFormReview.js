import React from "react";
import { connect } from "react-redux";

import formFields from "./formFields";

const SurveyFormReview = ({ onCancel, formValues }) => {
  return (
    <div>
      <h5>Please confirm your submission</h5>
      <div>
        {formFields.map(({ name, label }) => (
          <div key={name}>
            <label>{label}</label>
            <div>{formValues[name]}</div>
          </div>
        ))}
      </div>
      <button
        className="yellow darken-3 btn-flat"
        type="submit"
        onClick={onCancel}
      >
        Back
      </button>
    </div>
  );
};

export function mapStateToProps({ form }) {
  return {
    formValues: form.surveyForm.values,
  };
}

export default connect(mapStateToProps)(SurveyFormReview);
