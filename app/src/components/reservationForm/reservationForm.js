//Core
import React, { Component } from 'react';
import axios from 'axios';

//Components
import Field from '../field/field';
import FieldGroup from '../fieldGroup/fieldGroup';
import Notification from '../notification/notification';

//CSS
import classes from './reservationForm.css';

//Constants
import { API_KEY, TERMS_ONE, TERMS_TWO } from '../../constants/reservationForm/reservationForm';
import * as Config from '../../config/index';

class ReservationForm extends Component {
  state = {
    formConfig: {
      headerConfig: Config.Header,
      domPassenger1Config: Config.DomesticPassenger,
      domPassenger2Config: Config.DomesticPassenger,
      domPassenger3Config: Config.DomesticPassenger,
      domPassenger4Config: Config.DomesticPassenger,
      domPassenger5Config: Config.DomesticPassenger,
      domPassenger6Config: Config.DomesticPassenger,
      domPassenger7Config: Config.DomesticPassenger,
      domPassenger8Config: Config.DomesticPassenger,
      domPassenger9Config: Config.DomesticPassenger,
      domPassenger10Config: Config.DomesticPassenger,
      intlPassenger1Config: Config.InternationalPassenger,
      intlPassenger2Config: Config.InternationalPassenger,
      intlPassenger3Config: Config.InternationalPassenger,
      intlPassenger4Config: Config.InternationalPassenger,
      intlPassenger5Config: Config.InternationalPassenger,
      intlPassenger6Config: Config.InternationalPassenger,
      intlPassenger7Config: Config.InternationalPassenger,
      intlPassenger8Config: Config.InternationalPassenger,
      intlPassenger9Config: Config.InternationalPassenger,
      intlPassenger10Config: Config.InternationalPassenger,
      contactConfig: Config.Contact,
      tripTypeConfig: Config.TripType,
      resortConfig: Config.Resort,
      cruiseConfig: Config.Cruise,
      tripInfoConfig: Config.TripInfo,
      paymentTypeConfig: Config.PaymentType,
      paymentInfoConfig: Config.PaymentInfo,
      paymentAmountConfig: Config.PaymentAmount,
      billingInfoConfig: Config.BillingInfo,
      additionalInfoConfig: Config.AdditionalInfo
    },
    uploadSuccess: false,
    uploadFailure: false,
    formIsValid: false
  }

  componentDidMount() {
    let agentsArray = [{value: 'null', name: 'Select'}];
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
    let form = {...this.state.formConfig};
    let header = {...form.headerConfig};
    let agentElement = {...header['primaryAgent']};
    agentElement.options = array;
    header['primaryAgent'] = agentElement;
    this.setState({...this.state, formConfig: {...form, headerConfig: header}});
  };

  handleChange = (event, section, id) => {
    let formState = {...this.state.formConfig};
    let sectionState = {...formState[section]};
    let formElement = {...sectionState[id]};
    if(formElement.touched === false) {
      formElement.touched = true;
    }
    
    formElement.value = event.target.value;
    formElement.valid = this.ValidateField(formElement.value, formElement.validation);
    const formValidity = this.ValidateForm();    
    sectionState[id] = formElement;
    formState[section] = sectionState;
    this.setState({...this.state, formConfig: formState, formIsValid: formValidity});
  };

  formatDate = (date) => {
    const dateArray = date.split('-');
    let formattedArray = [];
    formattedArray.push(dateArray[1]);
    formattedArray.push(dateArray[2]);
    formattedArray.push(dateArray[0]);
    return formattedArray.join('/');
  };

  ValidateField = (value, validation) => {
    let isValid = true;
    if(validation.required === false) {
      return isValid;
    } else {
        if(validation.zip) {
          if(value.trim().length < 5  && isValid) {
            isValid = false;
          }

          if(value.trim().length > 10 && isValid) {
            isValid = false;
          }
        }
        if(validation.email && isValid) {
          const re =  new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/); // eslint-disable-line
          isValid = re.test(value);
        }
        if(value.trim() === '' && isValid) {
          isValid = false;
        }
        return isValid;
    }
  };

  ValidateForm = () => {
    let isValid = true;
    let objectToValidate = {
      primaryAgent: this.state.formConfig.headerConfig.primaryAgent.value,
      passengerCountry: this.state.formConfig.contactConfig.country.value,
      passengerStreet: this.state.formConfig.contactConfig.street.value,
      passengerCity: this.state.formConfig.contactConfig.city.value,
      passengerState: this.state.formConfig.contactConfig.state.value,
      passengerZip: this.state.formConfig.contactConfig.zip.value,
      passengerPhone: this.state.formConfig.contactConfig.phone1.value,
      passengerEmail: this.state.formConfig.contactConfig.email1.value,
      departureDate: this.formatDate(this.state.formConfig.tripInfoConfig.departureDate.value),
      returnDate: this.formatDate(this.state.formConfig.tripInfoConfig.returnDate.value),
      insurance: this.state.formConfig.tripInfoConfig.insurance.value,
      electronicSignature: this.state.formConfig.additionalInfoConfig.signature.value
    };

    if(this.state.formConfig.headerConfig.travelType.value === 'Domestic') {
      objectToValidate = {
        ...objectToValidate, 
        passengerFirstName: this.state.formConfig.domPassenger1Config.firstName.value,
        passengerLastName: this.state.formConfig.domPassenger1Config.lastName.value,
        passengerDOB: this.formatDate(this.state.formConfig.domPassenger1Config.dob.value),
        passengerGender: this.state.formConfig.domPassenger1Config.gender.value
      };
    } else if(this.state.formConfig.headerConfig.travelType.value === 'International') {
      objectToValidate = {
        ...objectToValidate, 
        passengerFirstName: this.state.formConfig.intlPassenger1Config.firstName.value,
        passengerLastName: this.state.formConfig.intlPassenger1Config.lastName.value,
        passengerDOB: this.formatDate(this.state.formConfig.intlPassenger1Config.dob.value),
        passengerGender: this.state.formConfig.intlPassenger1Config.gender.value
      };
    }
    
    if(this.state.formConfig.tripTypeConfig.tripType.value === 'Lodging') {
      objectToValidate = {...objectToValidate, roomType: this.state.formConfig.resortConfig.roomType.value};
    } else if(this.state.formConfig.tripTypeConfig.tripType.value === 'Cruise') {
      objectToValidate = {...objectToValidate, roomType: this.state.formConfig.cruiseConfig.roomType.value};
    }

    for(const key in objectToValidate) {
      if(objectToValidate[key] === '' || objectToValidate[key] === '//') {
        isValid = false;
      }
    }
    return isValid;
  }

  CheckForNullValue = (value) => {
    if(value === '' || value === '//') {
      return null;
    } else {
      return value;
    }
  };

  CreatePassengers = () => {
    let passengers = [];
    for(let i = 1; i <= this.state.formConfig.headerConfig.numOfPassengers.value; i++) {
      let passenger = {};

      let passengerConfig = '';
      if(this.state.formConfig.headerConfig.travelType.value === 'Domestic') {
        passengerConfig = `domPassenger${i}Config`;
        passenger = {
          ...passenger, 
          PassportExp: null,
          PassportNum: null,
          PassportState: null
        };
      } else if(this.state.formConfig.headerConfig.travelType.value === 'International') {
        passengerConfig = `intlPassenger${i}Config`;
        passenger = {
          ...passenger, 
          PassportExp: this.CheckForNullValue(this.formatDate(this.state.formConfig[passengerConfig].passportExp.value)),
          PassportNum: this.CheckForNullValue(this.state.formConfig[passengerConfig].passportNum.value),
          PassportState: this.CheckForNullValue(this.state.formConfig[passengerConfig].passportState.value)
        };
      }

      passenger = {
        ...passenger, 
        Anniversary: null,
        DOB: this.formatDate(this.state.formConfig[passengerConfig].dob.value),
        DepartureAirport: this.CheckForNullValue(this.state.formConfig.tripInfoConfig.departureAirport.value),
        FirstName: this.state.formConfig[passengerConfig].firstName.value,
        FreqAirline: null,
        FreqNumber: null,
        Gender: this.state.formConfig[passengerConfig].gender.value,
        LastName: this.state.formConfig[passengerConfig].lastName.value,
        MiddleName: this.CheckForNullValue(this.state.formConfig[passengerConfig].middleName.value),
        ReferredBy: null,
        SeatingPref: null,
        Suffix: this.CheckForNullValue(this.state.formConfig[passengerConfig].suffix.value),
        TravelerNumber: null
      };
      
      if(i === 1) {
        passenger = {
          ...passenger, 
          City: this.state.formConfig.contactConfig.city.value,
          Country: this.state.formConfig.contactConfig.country.value,
          Email: this.state.formConfig.contactConfig.email1.value,
          Email2: this.CheckForNullValue(this.state.formConfig.contactConfig.email2.value),
          Phone1: this.state.formConfig.contactConfig.phone1.value,
          Phone2: this.CheckForNullValue(this.state.formConfig.contactConfig.phone2.value),
          PrimaryPass: 'Y',
          State: this.state.formConfig.contactConfig.state.value,
          Street: this.state.formConfig.contactConfig.street.value,
          Zip: this.state.formConfig.contactConfig.zip.value
        };
      } else {
        passenger = {
          ...passenger, 
          City: null,
          Country: null,
          Email: null,
          Email2: null,
          Phone1: null,
          Phone2: null,
          PrimaryPass: 'N',
          State: null,
          Street: null,
          Zip: null
        };
      }
      passengers.push(passenger);
    }
    return passengers;
  };

  CreatePayments = () => {
    let payments = [];
    if(this.state.formConfig.paymentTypeConfig.paymentType.value === '') {
      return payments;
    }

    let payment = {};    
    let amount = '';
    if(this.state.formConfig.paymentInfoConfig.ccAmount.value === 'Other') {
      amount = this.state.formConfig.paymentAmountConfig.amount.value;
    } else {
      amount = this.state.formConfig.paymentInfoConfig.ccAmount.value;
    }

    if(this.state.formConfig.paymentInfoConfig.billingAddress.value === 'No') {
      payment = {
        ...payment,
        CCAddress: this.state.formConfig.billingInfoConfig.billingAddress1.value,
        CCAddress2: this.CheckForNullValue(this.state.formConfig.billingInfoConfig.billingAddress2.value),
        CCCity: this.state.formConfig.billingInfoConfig.billingCity.value,
        CCCountry: this.state.formConfig.billingInfoConfig.billingCountry.value,
        CCState: this.state.formConfig.billingInfoConfig.billingState.value,
        CCZip: this.state.formConfig.billingInfoConfig.billingZip.value
      };
    } else {
      payment = {
        ...payment,
        CCAddress: this.state.formConfig.contactConfig.street.value,
        CCAddress2: null,
        CCCity: this.state.formConfig.contactConfig.city.value,
        CCCountry: this.state.formConfig.contactConfig.country.value,
        CCState: this.state.formConfig.contactConfig.state.value,
        CCZip: this.state.formConfig.contactConfig.zip.value
      };
    }

    payment = {
      ...payment,
      CCName: this.state.formConfig.paymentInfoConfig.ccName.value,
      CCV: this.state.formConfig.paymentInfoConfig.ccv.value,
      CreditCardNum: this.state.formConfig.paymentInfoConfig.ccNumber.value,
      ExpirationMonth: this.state.formConfig.paymentInfoConfig.ccExpirationMonth.value,
      ExpirationYear: this.state.formConfig.paymentInfoConfig.ccExpirationYear.value,
      PaymentDescription: this.CheckForNullValue(amount),
      PaymentType: this.state.formConfig.paymentTypeConfig.paymentType.value,
      pdf_id: null,
      udf_pmt1: null,
      udf_pmt2: null,
      udf_pmt3: null
    };

    payments.push(payment);
    return payments;
  };

  handleSubmit = (event) => {
    event.preventDefault();    
    let resortConfig = null;
    if(this.state.formConfig.tripTypeConfig.tripType.value === 'Lodging') {
      resortConfig = 'resortConfig';
    } else if(this.state.formConfig.tripTypeConfig.tripType.value === 'Cruise') {
      resortConfig = 'cruiseConfig';
    }
    let reminderText = '';
    if(this.state.formConfig.headerConfig.travelType.value === 'International') {
      for(let i = 1; i <= this.state.formConfig.headerConfig.numOfPassengers.value; i++) {
        const passenger = `intlPassenger${i}Config`;
        if(this.state.formConfig[passenger].passportNum.value === '') {
          reminderText = "New Web Reservation Request - Passports Not Collected";
        }
      }
    }
    const signature = `Electronic Signature: ${this.state.formConfig.additionalInfoConfig.signature.value}`;
    const reservation = {
      Airfare: this.CheckForNullValue(this.state.formConfig.tripInfoConfig.airfare.value),
      ApiKey: API_KEY,
      Bedding: this.CheckForNullValue(this.state.formConfig.tripInfoConfig.beddingType.value),
      CustomField1: signature,
      CustomField2: null,
      CustomField3: null,
      CustomField4: null,
      CustomField5: null,
      CustomField6: null,
      CustomField7: null,
      CustomField8: null,
      CustomField9: null,
      CustomField10: null,
      DepartureDate: this.formatDate(this.state.formConfig.tripInfoConfig.departureDate.value),
      DepartureLocation: this.CheckForNullValue(this.state.formConfig.tripInfoConfig.departureAirport.value),
      DestinationLocation: this.CheckForNullValue(this.state.formConfig.tripInfoConfig.destinationAirport.value),
      Insurance: this.state.formConfig.tripInfoConfig.insurance.value,
      Military: this.CheckForNullValue(this.state.formConfig.tripInfoConfig.military.value),
      OtherQuestion: this.CheckForNullValue(this.state.formConfig.additionalInfoConfig.questions.value),
      Passengers: this.CreatePassengers(),
      Payments: this.CreatePayments(),
      PrimaryAgent: this.state.formConfig.headerConfig.primaryAgent.value,
      ReminderText: this.CheckForNullValue(reminderText),
      Resort: this.CheckForNullValue(this.state.formConfig[resortConfig].resort.value),
      ReturnDate: this.formatDate(this.state.formConfig.tripInfoConfig.returnDate.value),
      RoomType: this.state.formConfig[resortConfig].roomType.value,
      SpecialRequest: this.CheckForNullValue(this.state.formConfig.additionalInfoConfig.requests.value),
      VacationType: this.CheckForNullValue(this.state.formConfig.tripInfoConfig.vacationType.value),
      pdf_id: null,
      udf_reg1: null,
      udf_reg2: null,
      udf_reg3: null,
      udf_reg4: null,
      udf_reg5: null
    };
    const postRequestURL = `https://www.vacationcrm.com/travelmvc/api/Service/PostRequest?ApiKey=${API_KEY}`;    
    axios.post(postRequestURL, reservation)
    .then(res => {
      console.log(res.data);
      console.log('Upload Successful');
      this.setState({...this.state, uploadSuccess: true});
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    })
    .catch(err => {
      console.log(err);
      this.setState({...this.state, uploadFailure: true});
    });
  };

  render() {
    let disclaimer = null;
    if(this.state.formConfig.headerConfig.travelType.value === 'Domestic') {
      disclaimer = (
        <p className={classes.disclaimer}>Passenger Name Must Match Name On State ID EXACTLY.  Passengers 
        Under 16 Years Of Age May Substitute Their Birth Certificate For A State ID.</p>
      );
    } else if(this.state.formConfig.headerConfig.travelType.value === 'International') {
      disclaimer = (
        <p className={classes.disclaimer}>Passenger Name Must Match Name On Passport EXACTLY.  Passport 
        Expiration Date Must Have 6 Months Validity Remaining After Travel Return Date.</p>
      );
    }

    let headerKeysArray = [];
    for(const key in this.state.formConfig.headerConfig) {
      headerKeysArray.push(key);
    }

    let passengers = [];
    for(let i = 1; i <= this.state.formConfig.headerConfig.numOfPassengers.value; i++) {
      let sectionID = '';
      if(this.state.formConfig.headerConfig.travelType.value === 'Domestic') {
        sectionID = `domPassenger${i}Config`;
      } else if(this.state.formConfig.headerConfig.travelType.value === 'International') {
        sectionID = `intlPassenger${i}Config`;
      }
      const section = this.state.formConfig[sectionID];
      let passengerKeysArray = [];
      for(const key in section) {
        passengerKeysArray.push(key);
      }
      let heading = null;
      if(i === 1) {
        heading = 'Primary Passenger Information'
      } else {
        heading = `Passenger ${i} Information`
      }
      let passenger = null;
      passenger = (
        <FieldGroup heading={heading} key={heading}>
          {passengerKeysArray.map(key => {
            return(
              <Field
                key={key}
                label={section[key].label}
                elementType={section[key].elementType} 
                attributes={section[key].attributes}
                options={section[key].options}
                touched={section[key].touched}
                value={section[key].value}
                changed={(event) => this.handleChange(event, sectionID, key)}
                valid={section[key].valid}
                required={section[key].validation.required}/>
            );
          })}
        </FieldGroup>
      );
      passengers.push(passenger);
    }

    let contactKeysArray = [];
    for(const key in this.state.formConfig.contactConfig) {
      contactKeysArray.push(key);
    }

    let tripTypeKeysArray = [];
    for(const key in this.state.formConfig.tripTypeConfig) {
      tripTypeKeysArray.push(key);
    }

    let lodgingTypeKeysArray = [];
    let lodgingConfig = '';
    if(this.state.formConfig.tripTypeConfig.tripType.value === 'Lodging') {
      lodgingConfig = 'resortConfig'
      for(const key in this.state.formConfig.resortConfig) {
        lodgingTypeKeysArray.push(key);
      }
    } else if(this.state.formConfig.tripTypeConfig.tripType.value === 'Cruise') {
      lodgingConfig = 'cruiseConfig'
      for(const key in this.state.formConfig.cruiseConfig) {
        lodgingTypeKeysArray.push(key);
      }
    }

    let tripInfoKeysArray = [];
    for(const key in this.state.formConfig.tripInfoConfig) {
      tripInfoKeysArray.push(key);
    }

    let paymentTypeKeysArray = [];
    for(const key in this.state.formConfig.paymentTypeConfig) {
      paymentTypeKeysArray.push(key);
    }

    let paymentInfoKeysArray = [];
    for(const key in this.state.formConfig.paymentInfoConfig) {
      paymentInfoKeysArray.push(key);
    }

    let paymentInfo = null;
    if(this.state.formConfig.paymentTypeConfig.paymentType.value !== '') {
      paymentInfo = (
        paymentInfoKeysArray.map(key => {
          return(
          <Field
            key={key}
            label={this.state.formConfig.paymentInfoConfig[key].label}
            elementType={this.state.formConfig.paymentInfoConfig[key].elementType} 
            attributes={this.state.formConfig.paymentInfoConfig[key].attributes}
            options={this.state.formConfig.paymentInfoConfig[key].options}
            touched={this.state.formConfig.paymentInfoConfig[key].touched}
            value={this.state.formConfig.paymentInfoConfig[key].value}
            changed={(event) => this.handleChange(event, 'paymentInfoConfig', key)}
            valid={this.state.formConfig.paymentInfoConfig[key].valid}
            required={this.state.formConfig.paymentInfoConfig[key].validation.required}/>
          );
        })
      );
    }

    let paymentAmountKeysArray = [];
    for(const key in this.state.formConfig.paymentAmountConfig) {
      paymentAmountKeysArray.push(key);
    }

    let paymentAmount = null;
    if(this.state.formConfig.paymentInfoConfig.ccAmount.value === 'Other') {
      paymentAmount = (
        paymentAmountKeysArray.map(key => {
          return(
          <Field
            key={key}
            label={this.state.formConfig.paymentAmountConfig[key].label}
            elementType={this.state.formConfig.paymentAmountConfig[key].elementType} 
            attributes={this.state.formConfig.paymentAmountConfig[key].attributes}
            options={this.state.formConfig.paymentAmountConfig[key].options}
            touched={this.state.formConfig.paymentAmountConfig[key].touched}
            value={this.state.formConfig.paymentAmountConfig[key].value}
            changed={(event) => this.handleChange(event, 'paymentAmountConfig', key)}
            valid={this.state.formConfig.paymentAmountConfig[key].valid}
            required={this.state.formConfig.paymentAmountConfig[key].validation.required}/>
          );
        })
      );
    }

    let billingInfoKeysArray = [];
    for(const key in this.state.formConfig.billingInfoConfig) {
      billingInfoKeysArray.push(key);
    }

    let billingInfo = null;
    if(this.state.formConfig.paymentInfoConfig.billingAddress.value === 'No') {
      billingInfo = (
        billingInfoKeysArray.map(key => {
          return(
          <Field
            key={key}
            label={this.state.formConfig.billingInfoConfig[key].label}
            elementType={this.state.formConfig.billingInfoConfig[key].elementType} 
            attributes={this.state.formConfig.billingInfoConfig[key].attributes}
            options={this.state.formConfig.billingInfoConfig[key].options}
            touched={this.state.formConfig.billingInfoConfig[key].touched}
            value={this.state.formConfig.billingInfoConfig[key].value}
            changed={(event) => this.handleChange(event, 'billingInfoConfig', key)}
            valid={this.state.formConfig.billingInfoConfig[key].valid}
            required={this.state.formConfig.billingInfoConfig[key].validation.required}/>
          );
        })
      );
    }

    let additionalInfoKeysArray = [];
    for(const key in this.state.formConfig.additionalInfoConfig) {
      additionalInfoKeysArray.push(key);
    }

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
    
    return (
      <div className={classes.reservationForm}>
        <section>
          <div className={classes.banner}>
            <h1>Step 1: Passenger Information</h1>
          </div>
          <p style={{textAlign: 'center', fontSize:'1.3rem'}}>Fields in <span style={{fontWeight: 'bold'}}>Bold</span> are required.</p>
          <div className={classes.skinny}>
            {headerKeysArray.map(key => {
              return(
              <Field
                key={key}
                label={this.state.formConfig.headerConfig[key].label}
                elementType={this.state.formConfig.headerConfig[key].elementType} 
                attributes={this.state.formConfig.headerConfig[key].attributes}
                options={this.state.formConfig.headerConfig[key].options}
                touched={this.state.formConfig.headerConfig[key].touched}
                value={this.state.formConfig.headerConfig[key].value}
                changed={(event) => this.handleChange(event, 'headerConfig', key)}
                valid={this.state.formConfig.headerConfig[key].valid}
                required={this.state.formConfig.headerConfig[key].validation.required}/>
              );
            })}
          </div>
          <hr/>
          {disclaimer}
          <div className={classes.skinny}>
            {passengers}
          </div>
        </section>
        <section>
          <div className={classes.banner}>
            <h1>Step 2: Contact Information</h1>
          </div>
          <div className={classes.skinny}>
            {contactKeysArray.map(key => {
              return(
                <Field
                  key={key}
                  label={this.state.formConfig.contactConfig[key].label}
                  elementType={this.state.formConfig.contactConfig[key].elementType} 
                  attributes={this.state.formConfig.contactConfig[key].attributes}
                  options={this.state.formConfig.contactConfig[key].options}
                  touched={this.state.formConfig.contactConfig[key].touched}
                  value={this.state.formConfig.contactConfig[key].value}
                  changed={(event) => this.handleChange(event, 'contactConfig', key)}
                  valid={this.state.formConfig.contactConfig[key].valid}
                  required={this.state.formConfig.contactConfig[key].validation.required}/>
              );
            })}
          </div>
        </section>
        <section>
          <div className={classes.banner}>
            <h1>Step 3: Trip Information</h1>
          </div>
          <div className={classes.skinny}>
            {tripTypeKeysArray.map(key => {
              return(
                <Field
                  key={key}
                  label={this.state.formConfig.tripTypeConfig[key].label}
                  elementType={this.state.formConfig.tripTypeConfig[key].elementType} 
                  attributes={this.state.formConfig.tripTypeConfig[key].attributes}
                  options={this.state.formConfig.tripTypeConfig[key].options}
                  touched={this.state.formConfig.tripTypeConfig[key].touched}
                  value={this.state.formConfig.tripTypeConfig[key].value}
                  changed={(event) => this.handleChange(event, 'tripTypeConfig', key)}
                  valid={this.state.formConfig.tripTypeConfig[key].valid}
                  required={this.state.formConfig.tripTypeConfig[key].validation.required}/>
              );
            })}
            {lodgingTypeKeysArray.map(key => {
              const section = this.state.formConfig[lodgingConfig];
              return(
                <Field
                  key={key}
                  label={section[key].label}
                  elementType={section[key].elementType} 
                  attributes={section[key].attributes}
                  options={section[key].options}
                  touched={section[key].touched}
                  value={section[key].value}
                  changed={(event) => this.handleChange(event, lodgingConfig, key)}
                  valid={section[key].valid}
                  required={section[key].validation.required}/>
              );
            })}
            {tripInfoKeysArray.map(key => {
              return(
                <Field
                  key={key}
                  label={this.state.formConfig.tripInfoConfig[key].label}
                  elementType={this.state.formConfig.tripInfoConfig[key].elementType} 
                  attributes={this.state.formConfig.tripInfoConfig[key].attributes}
                  options={this.state.formConfig.tripInfoConfig[key].options}
                  touched={this.state.formConfig.tripInfoConfig[key].touched}
                  value={this.state.formConfig.tripInfoConfig[key].value}
                  changed={(event) => this.handleChange(event, 'tripInfoConfig', key)}
                  valid={this.state.formConfig.tripInfoConfig[key].valid}
                  required={this.state.formConfig.tripInfoConfig[key].validation.required}/>
              );
            })}
          </div>
          <p className={classes.disclaimer}> 
            We Recommend Adding Travel Insurance At Time Of Deposit To Recieve Maximum Benefits.  Cancel 
            For Any Reason Coverage Typically Must Be Purchased Within 14 Days Of Deposit, Policies May Vary.
          </p>
        </section>
        <section>
          <div className={classes.banner}>
            <h1>Step 4: Payment Information(optional)</h1>
          </div>
          <div className={classes.skinny}>
            {paymentTypeKeysArray.map(key => {
              return(
                <Field
                  key={key}
                  label={this.state.formConfig.paymentTypeConfig[key].label}
                  elementType={this.state.formConfig.paymentTypeConfig[key].elementType} 
                  attributes={this.state.formConfig.paymentTypeConfig[key].attributes}
                  options={this.state.formConfig.paymentTypeConfig[key].options}
                  touched={this.state.formConfig.paymentTypeConfig[key].touched}
                  value={this.state.formConfig.paymentTypeConfig[key].value}
                  changed={(event) => this.handleChange(event, 'paymentTypeConfig', key)}
                  valid={this.state.formConfig.paymentTypeConfig[key].valid}
                  required={this.state.formConfig.paymentTypeConfig[key].validation.required}/>
              );
            })}
            {paymentInfo}
            {paymentAmount}
            {billingInfo}
          </div>
        </section>
        <section>
          <div className={classes.banner}>
            <h1>Step 5: Additional Information</h1>
          </div>
          <div className={classes.skinny}>
            {additionalInfoKeysArray.map(key => {
              return(
                <Field
                  key={key}
                  label={this.state.formConfig.additionalInfoConfig[key].label}
                  elementType={this.state.formConfig.additionalInfoConfig[key].elementType} 
                  attributes={this.state.formConfig.additionalInfoConfig[key].attributes}
                  options={this.state.formConfig.additionalInfoConfig[key].options}
                  touched={this.state.formConfig.additionalInfoConfig[key].touched}
                  value={this.state.formConfig.additionalInfoConfig[key].value}
                  changed={(event) => this.handleChange(event, 'additionalInfoConfig', key)}
                  valid={this.state.formConfig.additionalInfoConfig[key].valid}
                  required={this.state.formConfig.additionalInfoConfig[key].validation.required}/>
              );
            })}
          </div>
        </section>
        <p style={{margin: '10px'}}>{TERMS_ONE}</p>
        <br/>
        <p style={{margin: '10px'}}>{TERMS_TWO}</p>
        <hr/>
        {notification}
        <button onClick={this.handleSubmit} disabled={!this.state.formIsValid}>Submit</button>
      </div>
    );
  }
}

export default ReservationForm;