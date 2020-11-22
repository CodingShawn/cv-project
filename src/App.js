import { Component } from "react";
import GeneralInformation from "./components/GeneralInformation";
import EducationalInformation from "./components/EducationalInformation";
import CompanyInformation from "./components/CompanyInformation";
import FinalCV from "./components/FinalCV";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      phone: "",
      school: "",
      course: "",
      graduation: "",
      company: "",
      position: "",
      mainTasks: "",
      dateStarted: "",
      dateTill: "",
      showCV: false,
    };

    this.editName = this.editName.bind(this);
    this.editEmail = this.editEmail.bind(this);
    this.editPhone = this.editPhone.bind(this);
    this.editSchool = this.editSchool.bind(this);
    this.editCourse = this.editCourse.bind(this);
    this.editGraduation = this.editGraduation.bind(this);
    this.editCompany = this.editCompany.bind(this);
    this.editPosition = this.editPosition.bind(this);
    this.editMainTasks = this.editMainTasks.bind(this);
    this.editDateStarted = this.editDateStarted.bind(this);
    this.editDateTill = this.editDateTill.bind(this);
  }

  editName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  editEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  editPhone = (e) => {
    this.setState({
      phone: e.target.value,
    });
  };

  editSchool = (e) => {
    this.setState({
      school: e.target.value,
    });
  };

  editCourse = (e) => {
    this.setState({
      course: e.target.value,
    });
  };

  editGraduation = (e) => {
    this.setState({
      graduation: e.target.value,
    });
  };

  editCompany = (e) => {
    this.setState({
      company: e.target.value,
    });
  };

  editPosition = (e) => {
    this.setState({
      position: e.target.value,
    });
  };

  editMainTasks = (e) => {
    this.setState({
      mainTasks: e.target.value,
    });
  };

  editDateStarted = (e) => {
    this.setState({
      dateStarted: e.target.value,
    });
  };

  editDateTill = (e) => {
    this.setState({
      dateTill: e.target.value,
    });
  };

  toggleShowCV = () => {
    this.setState(
      {
        showCV: !this.state.showCV,
      },
      console.log(this.state.showCV)
    );
  };

  render() {
    return (
      <div className="App">
        {!this.state.showCV ? (
          <div className="col-6 mx-auto mt-5 mb-5">
            <form>
              <GeneralInformation
                editName={this.editName}
                editEmail={this.editEmail}
                editPhone={this.editPhone}
                {...this.state}
              />
              <EducationalInformation
                editSchool={this.editSchool}
                editCourse={this.editCourse}
                editGraduation={this.editGraduation}
                {...this.state}
              />
              <CompanyInformation
                editCompany={this.editCompany}
                editPosition={this.editPosition}
                editMainTasks={this.editMainTasks}
                editDateStarted={this.editDateStarted}
                editDateTill={this.editDateTill}
                {...this.state}
              />
              <button onClick={this.toggleShowCV} className="btn btn-primary">
                Submit CV
              </button>
            </form>
          </div>
        ) : (
          <div className="col-10 mx-auto mt-5">
            <FinalCV {...this.state} />
            <button onClick={this.toggleShowCV} className="btn btn-primary">
              Edit CV
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
