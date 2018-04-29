//Core
import React, { Component } from 'react';
import axios from 'axios';

//Components
import Field from '../field/field';
import Notification from '../notification/notification';
import Loader from '../../loader/loader';

//CSS
import classes from './paymentForm.css';

//Constants
import { API_KEY } from '../../../constants/reservationForm/reservationForm';
import * as Constants from '../../../constants/reservationForm/reservationForm';

class PaymentForm extends Component {
  state = {
    primaryAgent: {
      attributes: {},
      elementType: 'select',
      label: 'Who Is Your Travel Agent?',
      options: [],
      touched: false,
      value: '',
      validation: {
        required: true
      },
      valid: false
    },
    confirmation: {
      attributes: {
        type: 'text',
        placeholder: ''
      },
      elementType: 'input',
      label: 'Confirmation Number:',
      options: [],
      touched: false,
      value: '',
      validation: {
        required: false
      },
      valid: false
    },
    name: {
      attributes: {
        type: 'text',
        placeholder: ''
      },
      elementType: 'input',
      label: 'Full Name:',
      options: [],
      touched: false,
      value: '',
      validation: {
        required: true
      },
      valid: false
    },
    email: {
      attributes: {
        type: 'text',
        placeholder: ''
      },
      elementType: 'input',
      label: 'Email:',
      options: [],
      touched: false,
      value: '',
      validation: {
        required: true,
        email: true
      },
      valid: false
    },
    ccType: {
      attributes: {},
      elementType: 'select',
      label: 'Credit Card Type:',
      options: Constants.PAYMENT_TYPES,
      touched: false,
      value: '',
      validation: {
        required: true
      },
      valid: false
    },
    paymentType: {
      attributes: {},
      elementType: 'select',
      label: 'Payment Type:',
      options: Constants.PAYMENT,
      touched: false,
      value: '',
      validation: {
        required: true
      },
      valid: false
    },
    comments: {
      attributes: {},
      elementType: 'textarea',
      label: 'Additional Comments:',
      options: [],
      touched: false,
      value: '',
      validation: {
        required: false
      },
      valid: false
    },
    signature: {
      attributes: {
        type: 'text',
        placeholder: ''
      },
      elementType: 'input',
      label: 'Electronic Signature:',
      options: [],
      touched: false,
      value: '',
      validation: {
        required: true
      },
      valid: false
    },
    uploadSuccess: false,
    uploadFailure: false,
    invalidFields: [],
    loading: false
  }

  componentDidMount() {
    let agentsArray = [{value: '', name: 'Select'}];
    const getAgentsURL = `https://www.vacationcrm.com/travelmvc/api/Service/GetAgents?ApiKey=${API_KEY}`;
    axios.get(getAgentsURL)
    .then(res => {
      res.data.map(agent => {
        agentsArray.push({value: agent.Code, name: agent.FullName});
        return null;
      });
      this.configureAgentOptions(agentsArray);
    })
    .catch(err => {
      console.log(err);
    });
  }

  configureAgentOptions = (array) => {
    let agentElement = {...this.state['primaryAgent']};
    agentElement.options = array;
    
    this.setState({...this.state, primaryAgent: {...agentElement}});
  };

  handleChange = (event, id) => {
    let formElement = {...this.state[id]};
    if(formElement.touched === false) {
      formElement.touched = true;
    }
    
    formElement.value = event.target.value;

    formElement.valid = this.validateField(formElement.value, formElement.validation);

    this.setState({...this.state, [id]: formElement});
  };

  validateField = (value, validation) => {
    let isValid = true;
    if(validation.required === false) {
      return isValid;
    } else {
        if(validation.email && isValid) {
          const re =  new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/); // eslint-disable-line
          isValid = re.test(value);
        }
        if(value.trim() === '' && isValid) {
          isValid = false;
        }

        if(value === 0) {
          isValid = false;
        }

        return isValid;
    }
  };

  validateForm = () => {
    let invalidFields = [];
    if(this.state.primaryAgent.valid === false) {
      invalidFields.push(this.state.primaryAgent.label)
    }
    if(this.state.name.valid === false) {
      invalidFields.push(this.state.name.label)
    }
    if(this.state.email.valid === false) {
      invalidFields.push(this.state.email.label)
    }
    if(this.state.ccType.valid === false) {
      invalidFields.push(this.state.ccType.label)
    }
    if(this.state.paymentType.valid === false) {
      invalidFields.push(this.state.paymentType.label)
    }
    if(this.state.signature.valid === false) {
      invalidFields.push(this.state.signature.label)
    }
    return invalidFields;
  };

  checkForNullValue = (value) => {
    if(value === '') {
      return null;
    } else {
      return value;
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const invalidFields = this.validateForm();
    this.setState({...this.state, invalidFields: invalidFields});

    if(invalidFields.length === 0) {
      this.setState({...this.state, loading: true, invalidFields: invalidFields});
      const pmt = {
        ApiKey: API_KEY,
        PrimaryAgent: this.state.primaryAgent,
        ConfirmationNumber: this.state.confirmation,
        ReminderText: `New Payment Request From ${this.state.name}`,
        Comment: this.state.comments
      };
    }
    
  };

  render() {
    let invalidNotification = null;
    if(this.state.invalidFields.length > 0) {
      invalidNotification = (
        <div style={{color: 'red', textAlign: 'center'}}>
          <p>The following required fields are invalid</p>
          <ul style={{listStyleType: 'none', margin: '0 auto'}}>
            {this.state.invalidFields.map((field, index) => {
              return (
                <li key={index} style={{textAlign: 'center'}}>{field}</li>
              )
            })}
          </ul>
        </div>
      );
    }
    return (
      <div className={classes.paymentForm}>
        <p style={{textAlign: 'center', fontSize:'1.3rem'}}>Fields in <span style={{fontWeight: 'bold'}}>Bold</span> are required.</p>
        <div className={classes.skinny}>
          <Field
            label={this.state.primaryAgent.label}
            elementType={this.state.primaryAgent.elementType} 
            attributes={this.state.primaryAgent.attributes}
            options={this.state.primaryAgent.options}
            touched={this.state.primaryAgent.touched}
            value={this.state.primaryAgent.value}
            changed={(event) => this.handleChange(event, 'primaryAgent')}
            valid={this.state.primaryAgent.valid}
            required={this.state.primaryAgent.validation.required}/>
          <Field
            label={this.state.confirmation.label}
            elementType={this.state.confirmation.elementType} 
            attributes={this.state.confirmation.attributes}
            options={this.state.confirmation.options}
            touched={this.state.confirmation.touched}
            value={this.state.confirmation.value}
            changed={(event) => this.handleChange(event, 'confirmation')}
            valid={this.state.confirmation.valid}
            required={this.state.confirmation.validation.required}/>
          <Field
            label={this.state.name.label}
            elementType={this.state.name.elementType} 
            attributes={this.state.name.attributes}
            options={this.state.name.options}
            touched={this.state.name.touched}
            value={this.state.name.value}
            changed={(event) => this.handleChange(event, 'name')}
            valid={this.state.name.valid}
            required={this.state.name.validation.required}/>
          <Field
            label={this.state.email.label}
            elementType={this.state.email.elementType} 
            attributes={this.state.email.attributes}
            options={this.state.email.options}
            touched={this.state.email.touched}
            value={this.state.email.value}
            changed={(event) => this.handleChange(event, 'email')}
            valid={this.state.email.valid}
            required={this.state.email.validation.required}/>
          <Field
            label={this.state.ccType.label}
            elementType={this.state.ccType.elementType} 
            attributes={this.state.ccType.attributes}
            options={this.state.ccType.options}
            touched={this.state.ccType.touched}
            value={this.state.ccType.value}
            changed={(event) => this.handleChange(event, 'ccType')}
            valid={this.state.ccType.valid}
            required={this.state.ccType.validation.required}/>
          <Field
            label={this.state.paymentType.label}
            elementType={this.state.paymentType.elementType} 
            attributes={this.state.paymentType.attributes}
            options={this.state.paymentType.options}
            touched={this.state.paymentType.touched}
            value={this.state.paymentType.value}
            changed={(event) => this.handleChange(event, 'paymentType')}
            valid={this.state.paymentType.valid}
            required={this.state.paymentType.validation.required}/>
          <Field
            label={this.state.comments.label}
            elementType={this.state.comments.elementType} 
            attributes={this.state.comments.attributes}
            options={this.state.comments.options}
            touched={this.state.comments.touched}
            value={this.state.comments.value}
            changed={(event) => this.handleChange(event, 'comments')}
            valid={this.state.comments.valid}
            required={this.state.comments.validation.required}/>
          <Field
            label={this.state.signature.label}
            elementType={this.state.signature.elementType} 
            attributes={this.state.signature.attributes}
            options={this.state.signature.options}
            touched={this.state.signature.touched}
            value={this.state.signature.value}
            changed={(event) => this.handleChange(event, 'signature')}
            valid={this.state.signature.valid}
            required={this.state.signature.validation.required}/>
        </div>
        <hr/>
        {invalidNotification}
        <button onClick={this.handleSubmit}>Submit</button>
        {/* <button onClick={this.showState}>Show State</button> */}
      </div>
    );
  }
}

export default PaymentForm;