const { default: IndividualField } = require("./IndividualField");

const EducationalInformation = (props) => {
  const { editSchool, editCourse, editGraduation } = props;

  return (
    <fieldset>
      <IndividualField
        field="School"
        type="text"
        editField={editSchool}
        value={props.school}
      />
      <IndividualField
        field="Course of Study"
        type="text"
        editField={editCourse}
        value={props.course}
      />
      <IndividualField
        field="Graduation Date"
        type="date"
        editField={editGraduation}
        value={props.graduation}
      />
    </fieldset>
  );
};

export default EducationalInformation;
