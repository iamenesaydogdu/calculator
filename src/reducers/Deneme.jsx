import { useReducer } from "react";
import { initialState, reducer } from "../reducers/reducerCalculator";
import "./Calculator.css";


/*
const Calculator = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(0);

  const handleNumber1Change = (e) => {
    setNumber1(Number(e.target.value));
  };

  const handleNumber2Change = (e) => {
    setNumber2(Number(e.target.value));
  };

  const handleAddition = () => {
    setResult(number1 + number2);
  };
*/

const Deneme =()=>{
    const [state,dispatch] = useReducer(reducer,initalState);

    const handleNumber1Change = (e) => {
        dispatch({ type: "SET_NUMBER1", payload: Number(e.target.value) });
      };

      const handleNumber2Change = (e)=>{
        dispatch({type:"SET_NUMBER2", payload:Number(e.target.value)});
      }

      const handleAddition =()=>{
        dispatch({type:"SET_RESULT", payload: state.number1 + state.number2 })
      }













// ilk kurmam gerekn sey statelerim olicak .. 

const initalState ={
    number1:0,
    number2:0,
    result:0
}

//ikinci kurmam gereken ise reducer fonksiyonu olmasi gerekmnedktedir .. 




const reducer = (state,action)=>{
switch(action.type){
case "SETNUMBER_1":
    return {...state,number1:action,payload}
case "SETNUMBER_2":
    return{...state,number2:action.payload}
case "SET_RESULT":
    return{...state,result:action.payload}
}}


return (
    <div className="calculator-container">
      <h1>useReducer</h1>
      <div className="form-container">
        <div className="form-group">
          <label className="form-label" htmlFor="number1">
            Number1
          </label>
          <input
            className="form-input"
            type="number"
            id="number1"
            onChange={handleNumber1Change}
            value={state.number1}
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="number2">
            Number2
          </label>
          <input
            className="form-input"
            type="number"
            id="number2"
            onChange={handleNumber2Change}
            value={state.number2}
          />
        </div>
        <button className="form-button" onClick={handleAddition}>
          Add
        </button>
        <div className="form-group">
          <label className="form-label" htmlFor="result">
            Result
          </label>
          <input
            className="form-input"
            type="number"
            id="result"
            value={state.result}
            readOnly
          />
        </div>
      </div>
    </div>
  );
}

export default CalculatorUseReducer;
