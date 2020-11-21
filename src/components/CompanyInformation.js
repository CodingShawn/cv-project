const { default: IndividualField } = require("./IndividualField")

const CompanyInformation = (props) => {
    const {editCompany, editPosition, editMainTasks, editDateStarted, editDateTill} = props

    return(
        <fieldset>
            <IndividualField field="Company Name" type="text" editField={editCompany}/>
            <IndividualField field="Position Title" type="text" editField={editPosition}/>
            <IndividualField field="Main Tasks" type="textarea" editField={editMainTasks}/>
            <IndividualField field="Date Started" type="date" editField={editDateStarted}/>
            <IndividualField field="Date Till" type="date" editField={editDateTill}/>
        </fieldset>
    )
}

export default CompanyInformation