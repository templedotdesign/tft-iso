export default {
  country: {
    attributes: {
      type: 'text',
      placeholder: ''
    },
    elementType: 'input',
    label: 'Your Country:',
    options: [],
    touched: false,
    value: 'USA',
    validation: {
      required: false
    },
    valid: false
  },
  street: {
    attributes: {
      type: 'text',
      placeholder: ''
    },
    elementType: 'input',
    label: 'Street Address:',
    options: [],
    touched: false,
    value: '',
    validation: {
      required: true
    },
    valid: false
  },
  city: {
    attributes: {
      type: 'text',
      placeholder: ''
    },
    elementType: 'input',
    label: 'City:',
    options: [],
    touched: false,
    value: '',
    validation: {
      required: true
    },
    valid: false
  },
  state: {
    attributes: {
      type: 'text',
      placeholder: ''
    },
    elementType: 'input',
    label: 'State:',
    options: [],
    touched: false,
    value: '',
    validation: {
      required: true
    },
    valid: false
  },
  zip: {
    attributes: {
      type: 'text',
      placeholder: ''
    },
    elementType: 'input',
    label: 'Zip Code:',
    options: [],
    touched: false,
    value: '',
    validation: {
      required: true,
      zip: true
    },
    valid: false
  },
  email1: {
    attributes: {
      type: 'email',
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
  email2: {
    attributes: {
      type: 'email',
      placeholder: ''
    },
    elementType: 'input',
    label: 'Email 2:',
    options: [],
    touched: false,
    value: '',
    validation: {
      required: false
    },
    valid: false
  },
  phone1: {
    attributes: {
      type: 'text',
      placeholder: ''
    },
    elementType: 'input',
    label: 'Home Phone:',
    options: [],
    touched: false,
    value: '',
    validation: {
      required: false
    },
    valid: false
  },
  phone2: {
    attributes: {
      type: 'text',
      placeholder: ''
    },
    elementType: 'input',
    label: 'Cell Phone:',
    options: [],
    touched: false,
    value: '',
    validation: {
      required: false
    },
    valid: false
  }
}