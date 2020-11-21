const { default: IndividualField } = require("./IndividualField");

const EducationalInformation = (props) => {
  const { editSchool, editCourse, editGraduation } = props;

  return (
    <form>
      <IndividualField field="School" type="text" editField={editSchool} />
      <IndividualField
        field="Course of Study"
        type="text"
        editField={editCourse}
      />
      <IndividualField
        field="Graduation Date"
        type="date"
        editField={editGraduation}
      />
    </form>
  );
};

export default EducationalInformation;