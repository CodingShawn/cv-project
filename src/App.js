import { Component } from 'react';
import GeneralInformation from './components/GeneralInformation'

class App extends Component {
  constructor() {
    super()

    this.state = {
      name: "",
      email: "",
      phone: ""
    }

    this.editName = this.editName.bind(this)
    this.editEmail = this.editEmail.bind(this)
    this.editPhone = this.editPhone.bind(this)
  }

  editName = (e) => {
    this.setState( {
      name: e.target.value
    })
  }

  editEmail = (e) => {
    this.setState( {
      email: e.target.value
    })
  }

  editPhone = (e) => {
    this.setState( {
      phone: e.target.value
    })
    console.log(this.state)
  }

  render() {

    return (
      <div className="App">
        <GeneralInformation editName={this.editName} editEmail={this.editEmail} editPhone={this.editPhone}/>
      </div>
    )
  }
}

export default App;
