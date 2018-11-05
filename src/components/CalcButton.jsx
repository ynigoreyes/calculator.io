import React from 'react'
import Button from '@material-ui/core/Button'

const CalcButton = (props) => {
  const { id, symbol, handleChangeSymbol } = props
  return (
    <Button
      style={{ margin: '5px' }}
      onClick={handleChangeSymbol(symbol)}
      variant='fab'
      id={id}
      color='primary'>
      {symbol}
    </Button>
  )
}

export default CalcButton
