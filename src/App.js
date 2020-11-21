import { Component } from "react";
import GeneralInformation from "./components/GeneralInformation";
import EducationalInformation from "./components/EducationalInformation";

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
    };

    this.editName = this.editName.bind(this);
    this.editEmail = this.editEmail.bind(this);
    this.editPhone = this.editPhone.bind(this);
    this.editSchool = this.editSchool.bind(this);
    this.editCourse = this.editCourse.bind(this);
    this.editGraduation = this.editGraduation.bind(this);
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

  render() {
    return (
      <div className="App">
        <div className="col-6 mx-auto mt-5">
          <GeneralInformation
            editName={this.editName}
            editEmail={this.editEmail}
            editPhone={this.editPhone}
          />
          <EducationalInformation
            editSchool={this.editSchool}
            editCourse={this.editCourse}
            editGraduation={this.editGraduation}
          />
        </div>
      </div>
    );
  }
}

export default App;
