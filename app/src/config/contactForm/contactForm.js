export default {
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
      required: false
    },
    valid: true
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
      required: false
    },
    valid: true
  },
  email: {
    attributes: {
      type: 'email',
      placeholder: ''
    },
    elementType: 'input',
    label: 'Your Email:',
    options: [],
    touched: false,
    value: '',
    validation: {
      required: false
    },
    valid: true
  },
  comments: {
    attributes: {
      cols: '50',
      rows: '10'
    },
    elementType: 'textarea',
    label: 'How May We Help You?',
    options: [],
    touched: false,
    value: '',
    validation: {
      required: false
    },
    valid: true
  },
}