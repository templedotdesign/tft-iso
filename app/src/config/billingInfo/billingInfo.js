export default {
  billingCountry: {
    attributes: {
      type: 'text',
      placeholder: ''
    },
    elementType: 'input',
    label: 'Billing Country:',
    options: [],
    touched: false,
    value: 'USA',
    validation: {
      required: true
    },
    valid: false
  },
  billingAddress1: {
    attributes: {
      type: 'text',
      placeholder: ''
    },
    elementType: 'input',
    label: 'Billing Address:',
    options: [],
    touched: false,
    value: '',
    validation: {
      required: true
    },
    valid: false
  },
  billingAddress2: {
    attributes: {
      type: 'text',
      placeholder: ''
    },
    elementType: 'input',
    label: 'Suite / Apt. #:',
    options: [],
    touched: false,
    value: '',
    validation: {
      required: false
    },
    valid: false
  },
  billingCity: {
    attributes: {
      type: 'text',
      placeholder: ''
    },
    elementType: 'input',
    label: 'Billing City:',
    options: [],
    touched: false,
    value: '',
    validation: {
      required: true
    },
    valid: false
  },
  billingState: {
    attributes: {
      type: 'text',
      placeholder: ''
    },
    elementType: 'input',
    label: 'Billing State:',
    options: [],
    touched: false,
    value: '',
    validation: {
      required: true
    },
    valid: false
  },
  billingZip: {
    attributes: {
      type: 'text',
      placeholder: ''
    },
    elementType: 'input',
    label: 'Billing Zip Code:',
    options: [],
    touched: false,
    value: '',
    validation: {
      required: true,
      zip: true
    },
    valid: false
  },
}