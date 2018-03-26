/* @flow */
import ValueObject from '~/domain/ValueObject'

const props = (def: any): CustomerVolumeInfoSchema => {
  return {
    firstName: '',
    lastName: '',
    ...def
  }
}

const CustomerVolumeInfo = (def?: any) =>
  class extends ValueObject(props(def)) {
    constructor(args: CustomerVolumeInfoSchema) {
      super()
      return this.withMutations(m =>
        m.set('firstName', args.firstName).set('lastName', args.lastName)
      )
    }
    /**********************
     * Getter
     **********************/
    getFirstName(): string {
      return this.get('firstName')
    }
    getLastName(): string {
      return this.get('lastName')
    }
    getFullName(): string {
      return `${this.getFirstName()} ${this.getFullName()}`
    }
  }

export default CustomerVolumeInfo
