//Core
import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom'

//Components
import Field from '../field/field';
import Notification from '../notification/notification';
import Loader from '../../loader/loader';

//CSS
import classes from './quoteForm.css';

//Constants
import { API_KEY } from '../../../constants/reservationForm/reservationForm';
import * as Constants from '../../../constants/reservationForm/reservationForm';

class QuoteForm extends Component {
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
    firstName: {
      attributes: {
        type: 'text',
        placeholder: ''
      },
      elementType: 'input',
      label: 'First Name:',
      options: [],
      touched: false,
      value: '',
      validation: {
        required: true
      },
      valid: false
    },
    middleName: {
      attributes: {
        type: 'text',
        placeholder: ''
      },
      elementType: 'input',
      label: 'Middle Name:',
      options: [],
      touched: false,
      value: '',
      validation: {
        required: false
      },
      valid: false
    },
    lastName: {
      attributes: {
        type: 'text',
        placeholder: ''
      },
      elementType: 'input',
      label: 'Last Name:',
      options: [],
      touched: false,
      value: '',
      validation: {
        required: true
      },
      valid: false
    },
    suffix: {
      attributes: {},
      elementType: 'select',
      label: 'Suffix:',
      options: Constants.SUFFIXES,
      touched: false,
      value: '',
      validation: {
        required: false
      },
      valid: false
    },
    numOfAdults: {
      attributes: {
        type: 'text',
        placeholder: ''
      },
      elementType: 'input',
      label: 'Number Of Adult Passengers:',
      options: [],
      touched: false,
      value: '',
      validation: {
        required: true
      },
      valid: false
    },
    child1: { 
      value: '',
      validation: {
        required: false
      } 
    },
    child2: { 
      value: '',
      validation: {
        required: false
      }  
    },
    child3: { 
      value: '',
      validation: {
        required: false
      }  
    },
    child4: { 
      value: '', 
      validation: {
        required: false
      } 
    },
    child5: { 
      value: '', 
      validation: {
        required: false
      } 
    },
    child6: { 
      value: '', 
      validation: {
        required: false
      } 
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
    phone: {
      attributes: {
        type: 'text',
        placeholder: ''
      },
      elementType: 'input',
      label: 'Phone:',
      options: [],
      touched: false,
      value: '',
      validation: {
        required: true,
        phone: true
      },
      valid: false
    },
    trafficSource: {
      attributes: {},
      elementType: 'select',
      label: 'How Did You First Hear About Us?',
      options: Constants.TRAFFIC_SOURCES,
      touched: false,
      value: '',
      validation: {
        required: false
      },
      valid: false
    },
    departureDate: {
      attributes: {
        type: 'text',
        placeholder: 'MM/DD/YYYY'
      },
      elementType: 'input',
      label: 'Desired Departure Date:',
      options: [],
      touched: false,
      value: '',
      validation: {
        required: false
      },
      valid: false
    },
    nights: {
      attributes: {
        type: 'text',
        placeholder: ''
      },
      elementType: 'input',
      label: 'Nights:',
      options: [],
      touched: false,
      value: '',
      validation: {
        required: false
      },
      valid: false
    },
    dateFlexiblity: {
      attributes: {},
      elementType: 'select',
      label: 'Are Dates Flexible?',
      options: Constants.YES_NO,
      touched: false,
      value: '',
      validation: {
        required: false
      },
      valid: false
    },
    departureCity: {
      attributes: {
        type: 'text',
        placeholder: ''
      },
      elementType: 'input',
      label: 'Departure City:',
      options: [],
      touched: false,
      value: '',
      validation: {
        required: false
      },
      valid: false
    },
    destination: {
      attributes: {
        type: 'text',
        placeholder: ''
      },
      elementType: 'input',
      label: 'Destination:',
      options: [],
      touched: false,
      value: '',
      validation: {
        required: false
      },
      valid: false
    },
    vacationType: {
      attributes: {},
      elementType: 'select',
      label: 'Vacation Type:',
      options: Constants.ENCODED_VACATION_TYPES,
      touched: false,
      value: '',
      validation: {
        required: true
      },
      valid: false
    },
    budget: {
      attributes: {
        type: 'text',
        placeholder: ''
      },
      elementType: 'input',
      label: 'Estimated Budget ($):',
      options: [],
      touched: false,
      value: '',
      validation: {
        required: false
      },
      valid: false
    },
    resortType: {
      attributes: {},
      elementType: 'select',
      label: 'Resort Type:',
      options: Constants.RESORT_TYPES,
      touched: false,
      value: '',
      validation: {
        required: false
      },
      valid: false
    },
    roomType: {
      attributes: {
        type: 'text',
        placeholder: ''
      },
      elementType: 'input',
      label: 'Room / Cabin Type:',
      options: [],
      touched: false,
      value: '',
      validation: {
        required: false
      },
      valid: false
    },
    importantInfo: {
      attributes: {
        cols: '30',
        rows: '10'
      },
      elementType: 'textarea',
      label: 'Are there any other things that are important to you that were not listed?',
      options: [],
      touched: false,
      value: '',
      validation: {
        required: false
      },
      valid: false
    },
    otherInfo: {
      attributes: {
        cols: '30',
        rows: '10'
      },
      elementType: 'textarea',
      label: 'Is there any other information that you would like to provide that will help us better plan your trip?',
      options: [],
      touched: false,
      value: '',
      validation: {
        required: false
      },
      valid: false
    },
    uploadSuccess: false,
    uploadFailure: false,
    invalidFields: [],
    loading: false
  }

  componentDidMount() {
    const getLead = `https://vacationcrm.com/travelmvc/api/Service/GetLead?ApiKey=${API_KEY}`;
    axios.get(getLead)
    .then(res => {
      console.log(res)
    })
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

        if(validation.phone && isValid) {
          if(value.length < 10) {
            isValid = false;
          }
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
    if(this.state.firstName.valid === false) {
      invalidFields.push(this.state.firstName.label)
    }
    if(this.state.lastName.valid === false) {
      invalidFields.push(this.state.lastName.label)
    }
    if(this.state.numOfAdults.valid === false) {
      invalidFields.push(this.state.numOfAdults.label)
    }
    if(this.state.email.valid === false) {
      invalidFields.push(this.state.email.label)
    }
    if(this.state.phone.valid === false) {
      invalidFields.push(this.state.phone.label)
    }
    if(this.state.vacationType.valid === false) {
      invalidFields.push(this.state.vacationType.label)
    }
    return invalidFields;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const invalidFields = this.validateForm();
    this.setState({...this.state, invalidFields: invalidFields});

    if(invalidFields.length === 0) {
      this.setState({...this.state, loading: true, invalidFields: invalidFields});
      const lead = {
        ApiKey: API_KEY,
        AdultCnt: this.state.numOfAdults.value,
        Budget: this.state.budget.value,
        ChildAge1: this.state.child1.value,
        ChildAge2: this.state.child2.value,
        ChildAge3: this.state.child3.value,
        ChildAge4: this.state.child4.value,
        ChildAge5: this.state.child5.value,
        ChildAge6: this.state.child6.value,
        DepCity: this.state.departureCity.value,
        DepCountry: 'US',
        DepartureDate: this.state.departureDate.value,
        Destination: this.state.destination.value,
        IsFlexible: this.state.dateFlexiblity.value,
        Nights: this.state.nights.value,
        OtherQuestion: this.state.otherInfo.value,
        PrimaryAgent: this.state.primaryAgent.value,
        ReferredBy: '',
        ResortType: this.state.resortType.value,
        RoomType: this.state.roomType.value,
        SpecialRequest: this.state.importantInfo.value,
        VacationType: this.state.vacationType.value,
        Passengers: [
          {
            Email: this.state.email.value,
            FirstName: this.state.firstName.value,
            LastName: this.state.lastName.value,
            MiddleName: this.state.middleName.value,
            Phone1: this.state.phone.value,
            PrimaryPass: 'Y',
            Suffix: this.state.suffix.value
          }
        ]
      }
      // console.log(lead)
      const postLeadURL = `https://vacationcrm.com/travelmvc/api/Service/PostLead?ApiKey=${API_KEY}`;
      axios.post(postLeadURL, lead)
      .then(res => {
        console.log(res.data);
        console.log('Upload Successful');
        this.setState({...this.state, uploadSuccess: true, loading: false});
        setTimeout(() => {
          this.props.history.push('/');
        }, 2000);
      })
      .catch(err => {
        console.log(err);
        axios.post('https://tonsoffuntravel-e3b94.firebaseio.com/errors.json', {data: err, firstName: lead.firstName, lastName: lead.lastName, email: lead.email, agent: lead.PrimaryAgent})
        .then(res => {
          console.log('Error logged to firebase')
        })
        .catch(err => {
          console.log(err)
        })
        this.setState({...this.state, uploadFailure: true, loading: false});
      });
    }
    
    
  };

  render() {
    let notification = null;
    if(this.state.uploadSuccess === true) {
      notification = (
        <Notification success text="Your data has been uploaded successfully"/>
      );
    } else if (this.state.uploadFailure === true) {
      notification = (
        <Notification text="Your data failed to upload"/>
      );
    }

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

    let loader = null;
    if(this.state.loading === true) {
      loader = <Loader/>
    }

    return (
      <div className={classes.quoteForm}>
        <div className={classes.banner}>
            <h1>Contact Information</h1>
        </div>
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
            label={this.state.firstName.label}
            elementType={this.state.firstName.elementType} 
            attributes={this.state.firstName.attributes}
            options={this.state.firstName.options}
            touched={this.state.firstName.touched}
            value={this.state.firstName.value}
            changed={(event) => this.handleChange(event, 'firstName')}
            valid={this.state.firstName.valid}
            required={this.state.firstName.validation.required}/>
          <Field
            label={this.state.middleName.label}
            elementType={this.state.middleName.elementType} 
            attributes={this.state.middleName.attributes}
            options={this.state.middleName.options}
            touched={this.state.middleName.touched}
            value={this.state.middleName.value}
            changed={(event) => this.handleChange(event, 'middleName')}
            valid={this.state.middleName.valid}
            required={this.state.middleName.validation.required}/>
          <Field
            label={this.state.lastName.label}
            elementType={this.state.lastName.elementType} 
            attributes={this.state.lastName.attributes}
            options={this.state.lastName.options}
            touched={this.state.lastName.touched}
            value={this.state.lastName.value}
            changed={(event) => this.handleChange(event, 'lastName')}
            valid={this.state.lastName.valid}
            required={this.state.lastName.validation.required}/>
          <Field
            label={this.state.suffix.label}
            elementType={this.state.suffix.elementType} 
            attributes={this.state.suffix.attributes}
            options={this.state.suffix.options}
            touched={this.state.suffix.touched}
            value={this.state.suffix.value}
            changed={(event) => this.handleChange(event, 'suffix')}
            valid={this.state.suffix.valid}
            required={this.state.suffix.validation.required}/>
          <Field
            label={this.state.numOfAdults.label}
            elementType={this.state.numOfAdults.elementType} 
            attributes={this.state.numOfAdults.attributes}
            options={this.state.numOfAdults.options}
            touched={this.state.numOfAdults.touched}
            value={this.state.numOfAdults.value}
            changed={(event) => this.handleChange(event, 'numOfAdults')}
            valid={this.state.numOfAdults.valid}
            required={this.state.numOfAdults.validation.required}/>
            <div className={classes.children}>
              <label>Child Age(s) (21 And Under):</label>
              <div>
                <input type="text" value={this.state.child1.value} className={classes.childInput} onChange={(event) => this.handleChange(event, 'child1')}/>
                <input type="text" value={this.state.child2.value} className={classes.childInput} onChange={(event) => this.handleChange(event, 'child2')}/>
                <input type="text" value={this.state.child3.value} className={classes.childInput} onChange={(event) => this.handleChange(event, 'child3')}/>
                <input type="text" value={this.state.child4.value} className={classes.childInput} onChange={(event) => this.handleChange(event, 'child4')}/>
                <input type="text" value={this.state.child5.value} className={classes.childInput} onChange={(event) => this.handleChange(event, 'child5')}/>
                <input type="text" value={this.state.child6.value} className={classes.childInput} onChange={(event) => this.handleChange(event, 'child6')}/>
              </div>
            </div>
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
            label={this.state.phone.label}
            elementType={this.state.phone.elementType} 
            attributes={this.state.phone.attributes}
            options={this.state.phone.options}
            touched={this.state.phone.touched}
            value={this.state.phone.value}
            changed={(event) => this.handleChange(event, 'phone')}
            valid={this.state.phone.valid}
            required={this.state.phone.validation.required}/>
          <Field
            label={this.state.trafficSource.label}
            elementType={this.state.trafficSource.elementType} 
            attributes={this.state.trafficSource.attributes}
            options={this.state.trafficSource.options}
            touched={this.state.trafficSource.touched}
            value={this.state.trafficSource.value}
            changed={(event) => this.handleChange(event, 'trafficSource')}
            valid={this.state.trafficSource.valid}
            required={this.state.trafficSource.validation.required}/> 
        </div>
        <div className={classes.banner}>
            <h1>Trip Information</h1>
        </div>
        <div className={classes.skinny}>
          <Field
            label={this.state.departureDate.label}
            elementType={this.state.departureDate.elementType} 
            attributes={this.state.departureDate.attributes}
            options={this.state.departureDate.options}
            touched={this.state.departureDate.touched}
            value={this.state.departureDate.value}
            changed={(event) => this.handleChange(event, 'departureDate')}
            valid={this.state.departureDate.valid}
            required={this.state.departureDate.validation.required}/>
          <Field
            label={this.state.nights.label}
            elementType={this.state.nights.elementType} 
            attributes={this.state.nights.attributes}
            options={this.state.nights.options}
            touched={this.state.nights.touched}
            value={this.state.nights.value}
            changed={(event) => this.handleChange(event, 'nights')}
            valid={this.state.nights.valid}
            required={this.state.nights.validation.required}/>
          <Field
            label={this.state.dateFlexiblity.label}
            elementType={this.state.dateFlexiblity.elementType} 
            attributes={this.state.dateFlexiblity.attributes}
            options={this.state.dateFlexiblity.options}
            touched={this.state.dateFlexiblity.touched}
            value={this.state.dateFlexiblity.value}
            changed={(event) => this.handleChange(event, 'dateFlexiblity')}
            valid={this.state.dateFlexiblity.valid}
            required={this.state.dateFlexiblity.validation.required}/>
          <Field
            label={this.state.departureCity.label}
            elementType={this.state.departureCity.elementType} 
            attributes={this.state.departureCity.attributes}
            options={this.state.departureCity.options}
            touched={this.state.departureCity.touched}
            value={this.state.departureCity.value}
            changed={(event) => this.handleChange(event, 'departureCity')}
            valid={this.state.departureCity.valid}
            required={this.state.departureCity.validation.required}/>
          <Field
            label={this.state.destination.label}
            elementType={this.state.destination.elementType} 
            attributes={this.state.destination.attributes}
            options={this.state.destination.options}
            touched={this.state.destination.touched}
            value={this.state.destination.value}
            changed={(event) => this.handleChange(event, 'destination')}
            valid={this.state.destination.valid}
            required={this.state.destination.validation.required}/>

          <Field
            label={this.state.vacationType.label}
            elementType={this.state.vacationType.elementType} 
            attributes={this.state.vacationType.attributes}
            options={this.state.vacationType.options}
            touched={this.state.vacationType.touched}
            value={this.state.vacationType.value}
            changed={(event) => this.handleChange(event, 'vacationType')}
            valid={this.state.vacationType.valid}
            required={this.state.vacationType.validation.required}/>
          {/* <div className={classes.children}>
            <label style={{fontWeight: 'bold'}}>{this.state.vacationType.label}</label>
            <select value={this.state.vacationType.value} onChange={(event) => this.handleChange(event, 'vacationType')} required>
              <option value=''>Select</option>
              <optgroup label="Featured Trips">
                <option value="f - rose parade">Rose Parade</option>
                <option value="f - hawaii cruise">Hawaii Cruise</option>
                <option value="f - riviera maya">Riviera Maya</option>
                <option value="f - oberammergau">Oberammergau</option>
              </optgroup>
              <optgroup label="Group Trips">
                <option value="g - paris">Paris</option>
                <option value="g - nashville">Nashville</option>
                <option value="g - beach palace">Beach Palace</option>
              </optgroup>
              <optgroup>
                {this.state.vacationType.options.map((option, index) => {
                  if(index > 0) { 
                    return (
                      <option key={option.value} value={option.value}>{option.name}</option>
                    )
                  }
                })}
              </optgroup>
            </select>
          </div> */}
          <Field
            label={this.state.budget.label}
            elementType={this.state.budget.elementType} 
            attributes={this.state.budget.attributes}
            options={this.state.budget.options}
            touched={this.state.budget.touched}
            value={this.state.budget.value}
            changed={(event) => this.handleChange(event, 'budget')}
            valid={this.state.budget.valid}
            required={this.state.budget.validation.required}/>
          <Field
            label={this.state.resortType.label}
            elementType={this.state.resortType.elementType} 
            attributes={this.state.resortType.attributes}
            options={this.state.resortType.options}
            touched={this.state.resortType.touched}
            value={this.state.resortType.value}
            changed={(event) => this.handleChange(event, 'resortType')}
            valid={this.state.resortType.valid}
            required={this.state.resortType.validation.required}/>
          <Field
            label={this.state.roomType.label}
            elementType={this.state.roomType.elementType} 
            attributes={this.state.roomType.attributes}
            options={this.state.roomType.options}
            touched={this.state.roomType.touched}
            value={this.state.roomType.value}
            changed={(event) => this.handleChange(event, 'roomType')}
            valid={this.state.roomType.valid}
            required={this.state.roomType.validation.required}/>
          <Field
            label={this.state.importantInfo.label}
            elementType={this.state.importantInfo.elementType} 
            attributes={this.state.importantInfo.attributes}
            options={this.state.importantInfo.options}
            touched={this.state.importantInfo.touched}
            value={this.state.importantInfo.value}
            changed={(event) => this.handleChange(event, 'importantInfo')}
            valid={this.state.importantInfo.valid}
            required={this.state.importantInfo.validation.required}/>
          <Field
            label={this.state.otherInfo.label}
            elementType={this.state.otherInfo.elementType} 
            attributes={this.state.otherInfo.attributes}
            options={this.state.otherInfo.options}
            touched={this.state.otherInfo.touched}
            value={this.state.otherInfo.value}
            changed={(event) => this.handleChange(event, 'otherInfo')}
            valid={this.state.otherInfo.valid}
            required={this.state.otherInfo.validation.required}/>
        </div>
        <hr/>
        {loader}
        {notification}
        {invalidNotification}
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}

export default withRouter(QuoteForm);