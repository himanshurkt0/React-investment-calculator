import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";
import { useState } from "react"

function App() {

  const [userInput,setUserInput] = useState({
    initialInvestment : 10000,
    annualInvestment : 1200,
    expectedReturn : 6,
    duration : 10,
});

function handleInput(inputId, newValue){
    setUserInput(prevInput => {
        return {
            ...prevInput,
            [inputId] : +newValue
        };

    });
}

const isInputValid = userInput.duration > 0;

  return (
    <>
      <Header />
      <UserInput userInput = {userInput} onChange = {handleInput} />
      {!isInputValid && (
        <p className="center">Please enter duration greater than 0.</p>
      )}
      {isInputValid && <Results input={userInput} />}
    </>

  )
}

export default App
