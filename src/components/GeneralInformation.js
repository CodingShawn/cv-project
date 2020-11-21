import React from "react";
import IndividualField from "./IndividualField";

const GeneralInformation = (props) => {
  const { editName, editEmail, editPhone } = props;

  return (
    <fieldset>
      <IndividualField field="Name" type="text" editField={editName} />
      <IndividualField field="Email" type="email" editField={editEmail} />
      <IndividualField
        field="Phone Number"
        type="number"
        editField={editPhone}
      />
    </fieldset>
  );
};

export default GeneralInformation;
