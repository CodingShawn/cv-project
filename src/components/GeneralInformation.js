import React from "react";
import IndividualField from "./IndividualField";

const GeneralInformation = (props) => {
  const { editName, editEmail, editPhone } = props;

  return (
    <fieldset>
      <IndividualField
        field="Name"
        type="text"
        editField={editName}
        value={props.name}
      />
      <IndividualField
        field="Email"
        type="email"
        editField={editEmail}
        value={props.email}
      />
      <IndividualField
        field="Phone Number"
        type="number"
        editField={editPhone}
        value={props.phone}
      />
    </fieldset>
  );
};

export default GeneralInformation;
