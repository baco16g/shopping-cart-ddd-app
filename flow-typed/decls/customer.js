declare type CustomerSchema = {
  customerId: string,
  email: string,
  volumeInfo: null,
  paymentInfo: null
}

declare type CustomerPaymentInfoSchema = {
  contractName: string,
  cardNumber: string,
  expiryMonth: string,
  expiryYear: string
}

declare type CustomerVolumeInfoSchema = {
  firstName: string,
  lastName: string
}

/* eslint-disable */
declare class CustomerModel extends Entity {
  /* eslint-disable */
  getCustomerID: () => string,
  getEmail: () => string,
  getVolumeInfo: () => CustomerVolumeInfo[],
  getPaymentInfo: () => CustomerPaymentInfo,
  exist: () => boolean,
  setCustomer: CustomerSchema => CustomerModel
}

/* eslint-disable */
declare class CustomerViewModel extends CustomerModel {
  /* eslint-disable */
  getFullName: () => string,
  getExpiry: () => string
}

/* eslint-disable */
declare class CustomerPaymentInfo extends ValueObject {
  /* eslint-disable */
  getContractName: () => string,
  getCardNumber: () => string,
  getExpiryMonth: () => string,
  getExpiryYear: () => string
}

/* eslint-disable */
declare class CustomerPaymentInfo extends ValueObject {
  /* eslint-disable */
  getFirstName: () => string,
  getLastName: () => string,
  getFullName: () => string
}

