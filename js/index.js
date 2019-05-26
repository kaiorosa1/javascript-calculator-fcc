class App extends React.Component {
  render() {
    return (
      React.createElement("div", null,
      React.createElement("h1", null, "JavaScript Calculator"),
      React.createElement(Calculator, null)));


  }}


class Calculator extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      React.createElement("div", { id: "calculator" },
      React.createElement(Display, null),
      React.createElement(CalculatorPad, null)));


  }}


class Display extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      React.createElement("div", null,
      React.createElement("h2", { id: "display" }, "Display Component")));


  }}


class CalculatorPad extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      React.createElement("div", { id: "pad" },
      React.createElement("h2", null, "Pad Component"),
      React.createElement("div", { id: "numbers" },
      React.createElement("div", { id: "zero" }, "0"),
      React.createElement("div", { id: "one" }, "1"),
      React.createElement("div", { id: "two" }, "2"),
      React.createElement("div", { id: "three" }, "3"),
      React.createElement("div", { id: "four" }, "4"),
      React.createElement("div", { id: "five" }, "5"),
      React.createElement("div", { id: "six" }, "6"),
      React.createElement("div", { id: "seven" }, "7"),
      React.createElement("div", { id: "eight" }, "8"),
      React.createElement("div", { id: "nine" }, "9")),

      React.createElement("div", { id: "functionality" },
      React.createElement("div", { id: "decimal" }, "."),
      React.createElement("div", { id: "clear" }, "AC"),
      React.createElement("div", { id: "multiply" }, "X"),
      React.createElement("div", { id: "divide" }, "/"),
      React.createElement("div", { id: "add" }, "+"),
      React.createElement("div", { id: "subtract" }, "-"),
      React.createElement("div", null, "Ans"),
      React.createElement("div", { id: "equals" }, "="))));



  }}


ReactDOM.render(React.createElement(App, null), document.getElementById("app"));