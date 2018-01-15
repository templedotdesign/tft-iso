import * as Constants from '../../constants/reservationForm/reservationForm';

export default {
  tripType: {
    attributes: {},
    elementType: 'select',
    label: 'Lodging or Cruise?',
    options: Constants.LODGING_CRUISE,
    touched: false,
    value: '',
    validation: {
      required: true
    },
    valid: false
  }
}