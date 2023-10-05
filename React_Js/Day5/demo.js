
import React,{useState,createContext, useContext } from "react";

const MyContext = React.createContext({
  username: "",
  setUsername: () => {}
});

export const MyContextProvider = props => {
  const [username, setUsername] = React.useState("smita Sawarkar");

  return (
    <div>
    <MyContext.Provider value={{ username, setUsername }}>
      {props.children}
    </MyContext.Provider>
    </div>
  );
};

export const MyComponent = () => {
  const myContext = React.useContext(MyContext);

  return (
    <div>
      <h3>{myContext.username}</h3>
    </div>
  )
}