import { ncformUtils, ValidationRule } from '@ncform-plus/ncform-common'

const { notEmptyVal } = ncformUtils

class MaximumRule extends ValidationRule {
  constructor (props) {
    super(props)
    this.name = 'maximum'
    this.defaultErrMsg = 'maximum validate error'
  }

  validateLogic (val, ruleVal) {
    if (!notEmptyVal(ruleVal)) return true
    if (typeof val !== 'number') return true
    return val <= ruleVal
  }
}

export default MaximumRule
