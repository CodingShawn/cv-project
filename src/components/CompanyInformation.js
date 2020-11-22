const { default: IndividualField } = require("./IndividualField");

const CompanyInformation = (props) => {
  const {
    editCompany,
    editPosition,
    editMainTasks,
    editDateStarted,
    editDateTill,
  } = props;

  return (
    <fieldset>
      <IndividualField
        field="Company Name"
        type="text"
        editField={editCompany}
        value={props.company}
      />
      <IndividualField
        field="Position Title"
        type="text"
        editField={editPosition}
        value={props.position}
      />
      <IndividualField
        field="Main Tasks"
        type="textarea"
        editField={editMainTasks}
        value={props.mainTasks}
      />
      <div className="form-row justify-content-between">
        <div className="col-auto">
          <IndividualField
            field="Date Started"
            type="date"
            editField={editDateStarted}
            value={props.dateStarted}
          />
        </div>
        <div className="col-auto">
          <IndividualField
            field="Date Till"
            type="date"
            editField={editDateTill}
            value={props.dateTill}
          />
        </div>
      </div>
    </fieldset>
  );
};

export default CompanyInformation;
