import React from 'react'
import Card from '@material-ui/core/Card'
import CalcButton from './CalcButton.jsx'
import Screen from './Screen.jsx'
import Grid from '@material-ui/core/Grid'
import Chip from '@material-ui/core/Chip'

import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
})

class AnswerScreen extends React.PureComponent {
  render() {
    return (
      <Grid item xs={12}>
        <Chip
          label={this.props.answer}
          color='secondary'
          id='answer-screen'
        />
      </Grid>
    )
  }
}

class Calculator extends React.Component {
  state  = {
    firstNumber: null,
    secondNumber: null,
    operation: null,
    answer: null
  }

  calculate = () => {
    const { firstNumber, secondNumber, operation } = this.state
    this.setState({
      ...this.state,
      // eslint-disable-next-line
      answer: eval(`${firstNumber} ${operation} ${secondNumber}`)
    })
  }

  handleChangeSymbol = (operation) => (event) => {
    if (this.state.firstNumber) {
      this.setState({
        ...this.state,
        operation,
      })
    }
  }

  handleChangeNumber = (number) => (event) => {
    if ((number === '0' && !this.state.firstNumber) || (number === '0' && !this.state.secondNumber)) {
      return
    } else if (this.state.operation) {
      this.setState((prevState) => {
        const newSecond = prevState.secondNumber ?
          prevState.secondNumber + number : number
        return ({
          ...prevState,
          secondNumber: newSecond,
        })
      })
    } else if (!this.state.operation) {
      this.setState((prevState) => {
        const newFirst = prevState.firstNumber ?
          prevState.firstNumber + number : number
        return ({
          firstNumber: newFirst,
          secondNumber: null,
          answer: null,
          operation: null,
        })
      })
    }
  }

  handleClear = () => (event) => {
    this.setState({
      ...this.state,
      firstNumber: null,
      secondNumber: null,
      operation: null,
      answer: null,
    })
  }

  render() {
    const { answer, firstNumber, secondNumber, operation } = this.state
    return (
      <Card>
        <Grid style={{ textAlign: 'center' }} container spacing={24}>
          <Grid item xs={12}>
            <Screen
              handleClear={this.handleClear}
              firstNumber={firstNumber}
              secondNumber={secondNumber}
              operation={operation}
              calculate={this.calculate}
            />
          </Grid>
          <Grid item xs={12}>
            {
              ['1', '2', '3'].map((val, i) => {
                return (
                  <CalcButton
                    key={`number-${val}`}
                    id={`number-${val}`}
                    symbol={val}
                    handleChangeSymbol={this.handleChangeNumber}>
                  </CalcButton>
                )
              })
            }
            <CalcButton
              symbol={'+'}
              id={'add'}
              handleChangeSymbol={this.handleChangeSymbol}>
            </CalcButton>
          </Grid>
          <Grid item xs={12}>
            {
              ['4', '5', '6'].map((val, i) => {
                return (
                  <CalcButton
                    key={`number-${val}`}
                    id={`number-${val}`}
                    symbol={val}
                    handleChangeSymbol={this.handleChangeNumber}>
                  </CalcButton>
                )
              })
            }
            <CalcButton
              symbol={'-'}
              id={'sub'}
              handleChangeSymbol={this.handleChangeSymbol}>
            </CalcButton>
          </Grid>
          <Grid item xs={12}>
            {
              ['7', '8', '9'].map((val, i) => {
                return (
                  <CalcButton
                    key={`number-${val}`}
                    id={`number-${val}`}
                    symbol={val}
                    handleChangeSymbol={this.handleChangeNumber}>
                  </CalcButton>
                )
              })
            }
            <CalcButton
              id={'multi'}
              symbol={'*'}
              handleChangeSymbol={this.handleChangeSymbol}>
            </CalcButton>
          </Grid>
          <Grid item xs={12}>
            <CalcButton
              symbol={''}
              handleChangeSymbol={() => null}>
            </CalcButton>
            <CalcButton
              symbol={'0'}
              id={'number-0'}
              handleChangeSymbol={this.handleChangeNumber}>
            </CalcButton>
            <CalcButton
              symbol={''}
              handleChangeSymbol={() => null}>
            </CalcButton>
            <CalcButton
              id={'div'}
              symbol={'/'}
              handleChangeSymbol={this.handleChangeSymbol}>
            </CalcButton>
          </Grid>
          {
            answer ? <AnswerScreen answer={answer}/> : null
          }
        </Grid>
      </Card>
    )
  }
}

export default withStyles(styles)(Calculator)
