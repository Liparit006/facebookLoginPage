import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  React.createElement("div",{id:"loginDiv"},
    React.createElement("div",{},
      React.createElement("h3",{}, "Login to Facebook"),
      React.createElement("input",{placeholder:"Email address or phone number", type:"text"}),
      React.createElement("input",{placeholder:"Password",type:"password"}),
      React.createElement("button",{id: "btn1"},"Login"),
      React.createElement("p", {id: "p1"}, "Forgot your account?"),
      React.createElement("button",{id: "btn2"},"Create a new account"),
    )
  )
)
