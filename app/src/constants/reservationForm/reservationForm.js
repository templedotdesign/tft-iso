export const TRAVEL_TYPES = [
  { value: null, name: 'Select' },
  { value: 'Domestic', name: 'Domestic' },
  { value: 'International', name: 'International' }
];

export const PASSENGER_COUNT = [
  { value: 0, name: 'Select' },
  { value: 1, name: '1' },
  { value: 2, name: '2' },
  { value: 3, name: '3' },
  { value: 4, name: '4' },
  { value: 5, name: '5' },
  { value: 6, name: '6' },
  { value: 7, name: '7' },
  { value: 8, name: '8' },
  { value: 9, name: '9' },
  { value: 10, name: '10' }
];

export const SUFFIXES = [
  { value: null, name: 'Select' },
  { value: 'SR', name: 'SR.' },
  { value: 'JR', name: 'JR.' },
  { value: 'I', name: 'I' },
  { value: 'II', name: 'II' },
  { value: 'III', name: 'III' },
  { value: 'IV', name: 'IV' },
];

export const GENDER_TYPES = [
  { value: null, name: 'Select' },
  { value: 'M', name: 'Male' },
  { value: 'F', name: 'Female' }
];

export const BEDDING_TYPES = [
  { value: null, name: 'Select' },
  { value: 'King', name: 'King Bed(s)' },
  { value: 'Queen', name: 'Queen Bed(s)' },
  { value: 'Double', name: 'Double Bed(s)' }
];

export const VACATION_TYPES = [
  { value: null, name: 'Select' },
  { value: 'Adult Vacation', name: 'Adult Vacation' },
  { value: 'Agency Group', name: 'Agency Group' },
  { value: 'Amish Trip', name: 'Amish Trip' },
  { value: 'Anniversary', name: 'Anniversary' },
  { value: 'Bachelor Pary', name: 'Bachelor Party' },
  { value: 'Bachelorette Party', name: 'Bachelorette Party' },
  { value: 'Bus Transportation', name: 'Bus Transportation' },
  { value: 'Business Travel', name: 'Business Travel' },
  { value: 'Church Group', name: 'Church Group' },
  { value: 'Corporate Group', name: 'Corporate Group' },
  { value: 'Corporate Incentive', name: 'Corporate Incentive' },
  { value: 'Destination Wedding', name: 'Destination Wedding' },
  { value: 'Destination Wedding Guest', name: 'Destination Wedding Guest' },
  { value: 'Family Reunion', name: 'Family Reunion' },
  { value: 'Family Vacation', name: 'Family Vacation' },
  { value: 'Friends And Family Trip', name: 'Friends And Family Trip' },
  { value: 'Gift Certificate', name: 'Gift Certificate' },
  { value: 'Honeymoon', name: 'Honeymoon' },
  { value: 'Insurance Quoted', name: 'Insurance Quoted' },
  { value: 'Romantic Getaway', name: 'Romantic Getaway' },
  { value: 'School Trip', name: 'School Trip' },
  { value: 'Vow Renewal', name: 'Vow Renewal' },
];

export const YES_NO = [
  { value: null, name: 'Select' },
  { value: 'Yes', name: 'Yes' },
  { value: 'No', name: 'No' }
];

export const YES_NO_INSURANCE = [
  { value: null, name: 'Select' },
  { value: 'Yes', name: 'Yes' },
  { value: 'No', name: 'No' },
  { value: 'Undecided', name: 'Undecided. Contact Me.'}
];

export const YES_NO_AIRFARE = [
  { value: null, name: 'Select' },
  { value: 'Yes', name: 'Yes' },
  { value: 'No', name: 'No' },
  { value: 'Flights Already Purchased', name: 'Flights Already Purchased' }
];

export const PAYMENT_TYPES = [
  { value: null, name: 'Select' },
  { value: 'AMEX', name: 'American Express' },
  { value: 'DISCOVER', name: 'Discover' },
  { value: 'MC', name: 'Mastercard' },
  { value: 'VISA', name: 'Visa' }
];

export const PAYMENT_AMOUNTS = [
  { value: null, name: 'Select' },
  { value: 'Full', name: 'Full' },
  { value: 'Deposit', name: 'Deposit Only' },
  { value: 'Other', name: 'Other' }
];

export const LODGING_CRUISE = [
  { value: null, name: 'Select' },
  { value: 'Cruise', name: 'Cruise' },
  { value: 'Lodging', name: 'Lodging' }
];

export const ROOM_TYPES = [
  { value: null, name: 'Select' },
  { value: 'Standard', name: 'Standard' },
  { value: 'Resortview', name: 'Resort View' },
  { value: 'Oceanview', name: 'Ocean View' },
  { value: 'Oceanfront', name: 'Oceanfront' },
  { value: 'Swimup', name: 'Swim Up' },
  { value: 'Club', name: 'Club / Concierge' },
  { value: 'Butler', name: 'Butler' },
];

export const CABIN_TYPES = [
  { value: null, name: 'Select' },
  { value: 'Inside', name: 'Inside' },
  { value: 'Oceanview', name: 'Ocean View' },
  { value: 'Balcony', name: 'Balcony' },
  { value: 'Suite', name: 'Suite' }
];

export const API_KEY = '...';

export const TERMS_ONE = `By submitting this form, you certify that you are the cardholder and are authorizing 
the travel agency or its chosen Tour Operator/Supplier/Cruise Line to charge the listed amount to the credit 
card. You certify that you have verified that all information contained in the confirmation you completed is 
accurate. You also certify you have read the Terms and Conditions found here` 

export const TERMS_TWO = `You also certify you have read the appropriate Travel Protection Plan details. Cancellation penalties may apply. Insurance premium is not refundable. You 
confirm that your name as listed matches exactly to the appropriate identification that will be used for travel, 
be it a passport or driver license, understanding that if they do not match, change fees will apply to make 
the correction with the airlines.  If your travel requires a passport, you are aware that it must have 6 
months validity remaining after the return date of your trip. If it does not have the 6 months validity, the 
airline may deny boarding. You understand that a passport BOOK is required for any type of international 
travel that includes air.  It is also the client’s responsibility to check with the appropriate authorities, if 
they have any prior criminal convictions which would result in them being denied boarding or leaving the United States.
`

export const TERMS_THREE = `Completing your credit card information will generate a notification authorizing 
the agency to manually apply said payment to your reservation. If there are any issues processing the 
payment/reservation, an agent will get back to you. Please note that you may not see a charge from the travel 
agency on your credit card statement; the charge will come from our supplier and/or the airline directly. 
Payment may take 3-5 business days to fully process and be reflected on your statement.`

export const TERMS_FOUR = `You understand that any refunds associated with cancellation may be cash refunds 
or future travel credit based on the resort/vendor, the cancellation reason, and the policy of the insurance 
company.  You understand that without travel protection, all my investment is at risk.  You understand that 
your US medical insurance policy may not cover you outside the United States.`

export const TERMS_FIVE = `Completion and Electronically Signing of this form signifies acceptance of the 
terms listed here as well as the complete list on our website. Also by signing, you certify that all parties 
listed on this form  do have appropriate identification for travel.`
