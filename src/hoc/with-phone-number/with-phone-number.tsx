import * as React from "react";
import {onSendNumber} from "../../api";


interface Props {};

interface State {
  value: string,
  buttonDisable: boolean,
}

const REG_VALID_NUMBER_PHONE = /^\+380\d{3}\d{2}\d{2}\d{2}$/;

const withPhoneNumber = (Component) => {
  class WithPhoneNumber extends React.PureComponent<Props, State> {
    constructor(props) {
      super(props);
      this.state = {
        value: ``,
        buttonDisable: true,
      };

      this.handleCallbackInput = this.handleCallbackInput.bind(this);
      this.handleButtonSubmit = this.handleButtonSubmit.bind(this);
    };

    private _disableButton(value) {
      this.setState({buttonDisable: value});
    }

    private _validateNumberPhone(numberPhone) {
      return REG_VALID_NUMBER_PHONE.test(numberPhone);
    }

    private _resetForm() {
      this.setState({
        value: ``,
        buttonDisable: true,
      });
    }

    handleCallbackInput(evt) {
      evt.preventDefault();

      const {value} = evt.target;
      const isValidNumber = this._validateNumberPhone(value);

      if (isValidNumber) {
        this._disableButton(!isValidNumber),
        this.setState({value});
      } else {
        this.setState({value});
      }
    }

    handleButtonSubmit(evt) {
      evt.preventDefault();

      const {value: numberPhone} = this.state;
      onSendNumber(numberPhone);
      this._resetForm();
    }

    render() {
      const {buttonDisable, value} = this.state;

      return (
        <Component
          onSubmit = {this.handleButtonSubmit}
          onInput = {this.handleCallbackInput}
          buttonDisable = {buttonDisable}
          inputValue = {value}
        />
      );
    }
  }
  return WithPhoneNumber;
};

export default withPhoneNumber;
