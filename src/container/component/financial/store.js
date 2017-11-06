import { observable, useStrict, action } from 'mobx'

class FinancialStore {
  @observable num = 100

  @action.bound
  changeNum = (num) => {
    this.num = parseFloat(Math.random().toFixed(2)) * 100
  }
}

export default FinancialStore
