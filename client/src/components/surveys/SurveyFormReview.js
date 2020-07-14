import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import * as actions from "../../actions";
import formFields from "./formFields";

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
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
        className="yellow darken-3 btn-flat white-text"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        className="green right btn-flat white-text"
        onClick={() => submitSurvey(formValues, history)}
      >
        Send Survey
        <i className="right material-icons">email</i>
      </button>
    </div>
  );
};

export function mapStateToProps({ form }) {
  return {
    formValues: form.surveyForm.values,
  };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
