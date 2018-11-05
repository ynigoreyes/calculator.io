import React from 'react'
import Chip from '@material-ui/core/Chip'

class Screen extends React.PureComponent {
  render() {
    const { handleClear, firstNumber, secondNumber, operation, calculate } = this.props
    let message = 'Welcome to Calculator.io'

    if (secondNumber) {
      message = `${firstNumber.toString()} ${operation} ${secondNumber.toString()}`
    } else if (operation) {
      message = `${firstNumber.toString()} ${operation}`
    } else if (firstNumber) {
      message = firstNumber.toString()
    }

    if (secondNumber) calculate()

    return (
      <Chip
        label={message}
        color='primary'
        onDelete={handleClear()}
        id='display-screen'
      />
    )
  }
}

export default Screen
