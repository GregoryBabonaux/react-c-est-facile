import React from 'react';
import { withFormsy } from 'formsy-react';
import {Form} from 'semantic-ui-react'

import './MyInput.css'

class MyInput extends React.Component {
  changeValue = (event) => {
    this.props.setValue(event.currentTarget.value);
  }

  render() {
    const errorMessage = this.props.getErrorMessage();
    let inErrorClassName = (!this.props.isValid() && !this.props.isPristine()) ? 'inputError' : ''

    return (
      <div>
        <Form.Input 
          fluid 
          label={this.props.label} 
          onChange={this.changeValue} 
          placeholder={this.props.placeholder} 
          value={this.props.getValue() || ''}
          className={inErrorClassName}
          type={this.props.type}
        />
        <span className="inputError">{errorMessage}</span>
      </div>
    );
  }
}

export default withFormsy(MyInput);