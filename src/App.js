import React, { useState } from "react";
import {
  Table,
  Card,
  CardBody,
} from "reactstrap";
import NumberFormat from 'react-number-format';
import "./App.css";

function App() {
  const [state, setState] = useState({
    number1: [],
    number2: [],
    operator: "",
    number1Aktif: true,
    number2Aktif: false,
    result: "",
    disable: false,
    swap: false,
    status: "ON"
  })

  const stateRef = React.useRef()
  stateRef.current = state

  const handleAktif = (key) => {
    if (key === "number1Aktif") {
      setState({
        ...state,
        number1Aktif: true,
        number2Aktif: false,
      })
    } else {
      setState({
        ...state,
        number1Aktif: false,
        number2Aktif: true,
      })
    }
  }

  const handleChangeNumber = async (val) => {
    if (state.number1Aktif) {
      const temp = [...state.number1, parseInt(val)]
      await setState({
        ...state,
        number1: temp,
        swap: false,
      })
      handleCalcute()
    }
    if (state.number2Aktif) {
      const temp = [...state.number2, parseInt(val)]
      await setState({
        ...state,
        number2: temp,
        swap: false,
      })
      handleCalcute()
    }
  }

  const handleOperator = async (opr) => {
    if (opr === "plus") {
      if (stateRef.current.number1.length > 0 && stateRef.current.number2.length > 0) {
        const temp = (Number(stateRef.current.number1.join(''))) + (Number(stateRef.current.number2.join('')));
        setState({
          ...state,
          result: temp,
          operator: 'plus',
          swap: false,
        })
      } else {
        setState({
          ...state,
          operator: "plus",
          swap: false,
        })
      }
    } 
    if (opr === "minus") {
      if (stateRef.current.number1.length > 0 && stateRef.current.number2.length > 0) {
        const temp = (Number(stateRef.current.number1.join(''))) - (Number(stateRef.current.number2.join('')));
        setState({
          ...state,
          result: temp,
          operator: 'minus',
          swap: false,
        })
      } else {
        setState({
          ...state,
          operator: "minus",
          swap: false,
        })
      }
    } 
    if (opr === "multi") {
      if (stateRef.current.number1.length > 0 && stateRef.current.number2.length > 0) {
        const temp = (Number(stateRef.current.number1.join(''))) * (Number(stateRef.current.number2.join('')));
        setState({
          ...state,
          result: temp,
          operator: 'multi',
          swap: false,
        })
      } else {
        setState({
          ...state,
          operator: "multi",
          swap: false,
        })
      }
    }
    if ( opr === "devision") {
      if (stateRef.current.number1.length > 0 && stateRef.current.number2.length > 0) {
        const temp = (Number(stateRef.current.number1.join(''))) / (Number(stateRef.current.number2.join('')));
        setState({
          ...state,
          result: temp,
          operator: 'devision',
          swap: false,
        })
      } else {
        setState({
          ...state,
          operator: 'devision',
          swap: false,
        })
      }
    }
    if (opr === "XOR") {
      if (stateRef.current.number1.length > 0 && stateRef.current.number2.length > 0) {
        const temp = (Number(stateRef.current.number1.join(''))) ^ (Number(stateRef.current.number2.join('')));
        setState({
          ...state,
          result: temp,
          operator: 'XOR',
          swap: false,
        })
      } else {
        setState({
          ...state,
          operator: "XOR",
          swap: false,
        })
      }
    }
    if (opr === "swap") {
      if (stateRef.current.number1.length > 0 && stateRef.current.number2.length > 0) {
        let temp = ''
        let num1 = state.number1
        let num2 = state.number2
        temp = num1
        num1 = num2
        num2 = temp
        await setState({
          ...state,
          number1: num1,
          number2: num2,
          swap: true,
        })
        handleSwap(state.operator)
      } else {
        if (stateRef.current.number1.length > 0 ) {
          let num1 = state.number1
          await setState({
            ...state,
            number1: [],
            number2: num1,
            swap: true,
          })
          handleSwap(stateRef.current.operator)
        } else {
          let num2 = state.number2
          await setState({
            ...state,
            number1: num2,
            number2: [],
            swap: true,
          })
          handleSwap(stateRef.current.operator)
        }
        
      }
    }
  }

  const handleSwap = (opr) => {
    if (state.swap && opr === "plus") {
      if (stateRef.current.number1.length > 0 && stateRef.current.number2.length > 0) {
        const temp = (Number(stateRef.current.number1.join(''))) + (Number(stateRef.current.number2.join('')));
        setState({
          ...state,
          result: temp,
          operator: 'plus'
        })
      } else {
        setState({
          ...state,
          operator: "plus",
        })
      }
    } 
    if (state.swap && opr === "minus") {
      if (stateRef.current.number1.length > 0 && stateRef.current.number2.length > 0) {
        const temp = (Number(stateRef.current.number1.join(''))) - (Number(stateRef.current.number2.join('')));
        setState({
          ...state,
          result: temp,
          operator: 'minus'
        })
      } else {
        setState({
          ...state,
          operator: "minus",
        })
      }
    } 
    if (state.swap && opr === "multi") {
      if (stateRef.current.number1.length > 0 && stateRef.current.number2.length > 0) {
        const temp = (Number(stateRef.current.number1.join(''))) * (Number(stateRef.current.number2.join('')));
        setState({
          ...state,
          result: temp,
          operator: 'multi'
        })
      } else {
        setState({
          ...state,
          operator: "multi",
        })
      }
    }
    if ( opr === "devision") {
      if (stateRef.current.number1.length > 0 && stateRef.current.number2.length > 0) {
        const temp = (Number(stateRef.current.number1.join(''))) / (Number(stateRef.current.number2.join('')));
        setState({
          ...state,
          result: temp,
          operator: 'devision'
        })
      } else {
        setState({
          ...state,
          operator: 'devision',
        })
      }
    }
    if (state.swap && opr === "XOR") {
      if (stateRef.current.number1.length > 0 && stateRef.current.number2.length > 0) {
        const temp = (Number(stateRef.current.number1.join(''))) ^ (Number(stateRef.current.number2.join('')));
        setState({
          ...state,
          result: temp,
          operator: 'XOR'
        })
      } else {
        setState({
          ...state,
          operator: "XOR",
        })
      }
    }
  }
  
  const handleCalcute = () => {
    if (stateRef.current.number1.length > 0 && stateRef.current.number2.length > 0 && stateRef.current.operator !== "" ) {
      handleOperator(stateRef.current.operator);
    }
  }

  const handleReset = () => {
    setState({
      ...state,
      number1: [],
      number2: [],
      operator: "",
      number1Aktif: true,
      number2Aktif: false,
      result: "",
      disable: false,
    })
  }

  const handlePower = () => {
    if (state.status === "ON") {
      setState({
        status: "OFF",
        number1: [],
        number2: [],
        operator: "",
        number1Aktif: true,
        number2Aktif: false,
        result: "",
        disable: false,
      })
    } else {
      setState({
        ...state,
        status: "ON"
      })
    }
  }

  const styles = {
    table: {
      thead: {
        position: "sticky",
        top: "-1px",
        fontSize: "23px",
        textAlign: "center",
        zIndex: "1",
        textTransform: "none",
        padding: "10px",
      },
      thead2: {
        position: "sticky",
        top: "-1px",
        fontSize: "23px",
        textAlign: "center",
        zIndex: "1",
        textTransform: "none",
        padding: "10px",
        width: "200px",
      },
      td: { padding: "10px", fontSize: "20px", height: "50px", cursor: "pointer"},
      tdAktif: state.number1Aktif || state.number2Aktif ? { border: "1px solid red" } : {},
      td2: { cursor: "pointer" }
    },
  };

  return (
    <div className="App">
      <div className="App-header">
          <div style={{ color: "black"}}>
            Calculator: {state.status}
          </div>
        <Card>
          <CardBody>
            <div className="contentTable">
              {state.status === "ON" ? (
                <>
                <Table bordered responsive>
                <thead>
                  <tr>
                    <th style={styles.table.thead2}>Number 1</th>
                    <th style={styles.table.thead2}>Number 2</th>
                    <th style={styles.table.thead2}>Result</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      onClick={() => handleAktif("number1Aktif")}
                      style={state.number1Aktif ? {...styles.table.td, ...styles.table.tdAktif} : {...styles.table.td, borderRight: "none"}}
                    >
                      <NumberFormat
                        displayType="text"
                        value={state.number1.join('')}
                        thousandSeparator=","
                        name="number1"
                      />
                    </td>
                    <td 
                      onClick={() => handleAktif("number2Aktif")}
                      style={ state.number2Aktif ?  {...styles.table.td, ...styles.table.tdAktif, marginLeft: "20px"} : styles.table.td }
                    >
                      <NumberFormat
                        displayType="text"
                        name="number2"
                        thousandSeparator=","
                        value={state.number2.join('')}
                      />
                    </td>
                    <td style={styles.table.td}>
                      <NumberFormat
                        displayType="text"
                        thousandSeparator=","
                        id="result"
                        name="result"
                        value={stateRef.current.result}
                      />
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Table Table bordered responsive className="mt-5">
              <tbody>
                <tr className="text-center">
                  <td 
                    onClick={() => handleOperator("plus")}
                    style={{...styles.table.td2, backgroundColor: "#b7b7b7"}}
                    
                  >+</td>
                  <td 
                    onClick={() => handleOperator("minus")}
                    style={{...styles.table.td2, backgroundColor: "#b7b7b7"}}
                  >-</td>
                  <td
                    onClick={() => handleOperator("devision")}
                    style={{...styles.table.td2, backgroundColor: "#b7b7b7"}}>/</td>
                </tr>
                <tr className="text-center">
                  <td 
                    onClick={() => handleOperator("XOR")}
                    style={{...styles.table.td2, backgroundColor: "#b7b7b7"}}>^</td>
                  <td 
                    onClick={() => handleOperator("swap")}
                    style={{...styles.table.td2, backgroundColor: "#b7b7b7"}}>SWAP</td>
                  <td 
                    onClick={() => handleOperator("multi")}
                    style={{...styles.table.td2, backgroundColor: "#b7b7b7"}}>*</td>
                </tr>
                <tr className="text-center">
                  <td 
                    onClick={() => handleChangeNumber(1)}
                    style={styles.table.td2}>1</td>
                  <td 
                    onClick={() => handleChangeNumber(2)}
                    style={styles.table.td2}>2</td>
                  <td 
                    onClick={() => handleChangeNumber(3)}
                    style={styles.table.td2}>3</td>
                </tr>
                <tr className="text-center">
                  <td 
                    onClick={() => handleChangeNumber(4)}
                    style={styles.table.td2}>4</td>
                  <td 
                    onClick={() => handleChangeNumber(5)}
                    style={styles.table.td2}>5</td>
                  <td 
                    onClick={() => handleChangeNumber(6)}
                    style={styles.table.td2}>6</td>
                </tr>
                <tr className="text-center">
                  <td 
                    onClick={() => handleChangeNumber(7)}
                    style={styles.table.td2}>7</td>
                  <td 
                    onClick={() => handleChangeNumber(8)}
                    style={styles.table.td2}>8</td>
                  <td 
                    onClick={() => handleChangeNumber(9)}
                    style={styles.table.td2}>9</td>
                </tr>
                <tr className="text-center">
                  <td 
                    onClick={() => handlePower()}
                    style={{...styles.table.td2, color: "#faa431"}}>ON/OFF</td>
                  <td 
                    onClick={() => handleChangeNumber(0)}
                    style={styles.table.td2}>0</td>
                  <td 
                    onClick={() => handleReset()}
                    style={styles.table.td2}>CLEAR</td>
                </tr>
              </tbody>
            </Table>  
                </>
              ) : (
                <>
                <Table bordered responsive>
                <thead>
                  <tr>
                    <th style={styles.table.thead2}>Number 1</th>
                    <th style={styles.table.thead2}>Number 2</th>
                    <th style={styles.table.thead2}>Result</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      
                      style={{...styles.table.td}}
                    >
                      <NumberFormat
                        displayType="text"
                        value={state.number1.join('')}
                        thousandSeparator=","
                        name="number1"
                      />
                    </td>
                    <td 
                      
                      style={ state.number2Aktif ?  {...styles.table.td, ...styles.table.tdAktif, marginLeft: "20px"} : styles.table.td }
                    >
                      <NumberFormat
                        displayType="text"
                        name="number2"
                        thousandSeparator=","
                        value={state.number2.join('')}
                      />
                    </td>
                    <td style={styles.table.td}>
                      <NumberFormat
                        displayType="text"
                        thousandSeparator=","
                        id="result"
                        name="result"
                        value={stateRef.current.result}
                      />
                    </td>
                  </tr>
                </tbody>
              </Table>
                <Table Table bordered responsive className="mt-5">
                <tbody>
                  <tr className="text-center">
                    <td 
                      
                      style={{...styles.table.td2, backgroundColor: "#b7b7b7"}}
                      
                    >+</td>
                    <td 
                      
                      style={{...styles.table.td2, backgroundColor: "#b7b7b7"}}
                    >-</td>
                    <td
                      
                      style={{...styles.table.td2, backgroundColor: "#b7b7b7"}}>/</td>
                  </tr>
                  <tr className="text-center">
                    <td 
                      
                      style={{...styles.table.td2, backgroundColor: "#b7b7b7"}}>^</td>
                    <td 
                      
                      style={{...styles.table.td2, backgroundColor: "#b7b7b7"}}>SWAP</td>
                    <td 
                      
                      style={{...styles.table.td2, backgroundColor: "#b7b7b7"}}>*</td>
                  </tr>
                  <tr className="text-center">
                    <td 
                      
                      style={styles.table.td2}>1</td>
                    <td 
                      
                      style={styles.table.td2}>2</td>
                    <td 
                      
                      style={styles.table.td2}>3</td>
                  </tr>
                  <tr className="text-center">
                    <td 
                      
                      style={styles.table.td2}>4</td>
                    <td 
                      
                      style={styles.table.td2}>5</td>
                    <td 
                      
                      style={styles.table.td2}>6</td>
                  </tr>
                  <tr className="text-center">
                    <td style={styles.table.td2}>7</td>
                    <td style={styles.table.td2}>8</td>
                    <td style={styles.table.td2}>9</td>
                  </tr>
                  <tr className="text-center">
                    <td 
                      onClick={() => handlePower()}
                      style={{...styles.table.td2, color: "#faa431"}}>ON/OFF</td>
                    <td style={styles.table.td2}>0</td>
                    <td 
                      style={styles.table.td2}>CLEAR</td>
                  </tr>
                </tbody>
                </Table>
              </>
              )}
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default App;