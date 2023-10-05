import React,{useState} from "react";

function App(){
    const [age,setAge]=useState(19)
    const [siblingNum,setSiblingNum]=useState(10)

    const handleAge=()=>{
      setAge(age+1)
    }

    const handleSiblingsNum=()=>{
      setSiblingNum(siblingNum+1)
    }

    return(
      <div>
      <p>Today I am {age} Years of Age</p>
      <p>I have {siblingNum} siblings</p>

      <div>
        <button onClick={handleAge}>
          Get older! 
        </button>
        <button onClick={handleSiblingsNum}>
            More siblings! 
        </button>
      </div>
    </div>

    )
}
export default App;