import React from 'react';
import { withFormsy } from 'formsy-react';
import {Form} from 'semantic-ui-react'
import PropTypes from 'prop-types';
import './MyInput.css'

class MyInput extends React.Component {
  changeValue = (event) => {
    this.props.setValue(event.currentTarget.value);
  }

  render() {
    const errorMessage = this.props.getErrorMessage();
    let inErrorClassName = (!this.props.isValid() && !this.props.isPristine()) ? 'inputError' : ''

    if(this.props.error){
      throw new Error('C est tout pété');
    }

    return (
      <div>
        <Form.Input 
          name={this.props.name}
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

MyInput.propTypes = {
  setValue: PropTypes.func.isRequired,
  getErrorMessage: PropTypes.func.isRequired,
  isValid: PropTypes.func.isRequired,
  isPristine: PropTypes.func.isRequired,
  getValue: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
  
}

export default withFormsy(MyInput);