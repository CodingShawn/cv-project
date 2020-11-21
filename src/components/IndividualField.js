const IndividualField = (props) => {
  const { field, type, editField } = props;

  function joinString(string) {
      let newString = string
      while (newString.indexOf(" ") !== -1) {
        let index = newString.indexOf(" ")
        newString = newString.slice(0, index) + newString.slice(index + 1)
      }
      return newString
  } 
  const concatField = joinString(field)

  return (
    <div className="form-group">
      <label htmlFor={concatField + "Input"}>{field} </label>
      <input
        type={type}
        id={concatField + "Input"}
        className="form-control"
        onChange={editField}
      />
    </div>
  );
};

export default IndividualField
