import React from 'react';
import './Form.css';


export default class Form extends React.Component {
      constructor(props) {
        super(props);
        this.state = {sex: 'female', firstName: '', lastname: '', email: '', phone: ''};
        this.onChangeInput = this.onChangeInput.bind(this);
      }
      onChangeInput(event) {
        this.setState({sex: event.target.valuesex, firstName: event.target.valuefirstName, lastname: event.target.valuelastName, email: event.target.valueemail, phone: event.target.valuephone});
      }
      render() {
        return (
          <form>
          <div>
            <label>First Name: <input name="firstName"  type="text"
                                 valuefirstName={this.state.firstName} onChange={this.onChangeInput}/></label>
            <label> Last Name: <input name="lastName"  type="text"
                                 valuelastName={this.state.lastName} onChange={this.onChangeInput}/></label>
            <label> Email: <input name="email"  type="email"
                                 valueemail={this.state.email} onChange={this.onChangeInput}/></label>
            <label> Phone: <input name="phone"  type="tel"
                                 valuephone={this.state.phone} onChange={this.onChangeInput}/></label>
            <label> Sex: <select name="sex"  value={this.state.sex} onChange={this.onChangeInput}>
                <option valuesex="male">Male</option>
                <option valuesex="female">Female</option>
              </select>
            </label>
            </div>
          </form>
        )
      }
    }
