import { observable, useStrict, action } from 'mobx'

useStrict(true)

class FinancialStore {
  @observable iconName = 'eye'

  @action.bound
  toggleEye = () => {
    this.iconName = this.iconName === 'eye' ? 'eye-with-line' : 'eye'
  }
}

export default FinancialStore
