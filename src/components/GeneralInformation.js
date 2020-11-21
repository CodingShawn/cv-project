import React from "react";

const GeneralInformation = (props) => {
  const { editName, editEmail, editPhone } = props;

  return (
    <div className="col-6 mx-auto mt-5">
      <form>
        <div className="form-group">
          <label htmlFor="nameInput">Name: </label>
          <input
            type="text"
            id="nameInput"
            className="form-control"
            onChange={editName}
          />
        </div>
        <div className="form-group">
          <label htmlFor="emailInput">Email: </label>
          <input
            type="email"
            id="emailInput"
            className="form-control"
            onChange={editEmail}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneInput">Phone Number: </label>
          <input
            type="number"
            id="phoneInput"
            className="form-control"
            onChange={editPhone}
            maxLength="8"
            minLength="8"
          />
        </div>
      </form>
    </div>
  );
};

export default GeneralInformation;
