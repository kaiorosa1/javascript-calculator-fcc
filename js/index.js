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
    this.state = {
      text: " ",
      preValue: 0,
      oprator: "" };

    this.changeDisplay = this.changeDisplay.bind(this);
    this.setPreValue = this.setPreValue.bind(this);
  }
  changeDisplay(newText) {
    this.setState({
      text: newText });

  }
  // think of a better name for this function
  setPreValue(val, op) {
    this.setState({
      preValue: val,
      operator: op });

  }
  render() {
    return (
      React.createElement("div", { id: "calculator" },
      React.createElement(Display, { text: this.state.text }),
      React.createElement(CalculatorPad, {
        text: this.state.text,
        changeDisplay: this.changeDisplay,
        setPreValue: this.setPreValue,
        getValue: this.state.preValue })));



  }}


class Display extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      React.createElement("div", null,
      React.createElement("h2", { id: "display" }, this.props.text)));


  }}


class CalculatorPad extends React.Component {
  constructor(props) {
    super(props);
    this.sendToDisplay = this.sendToDisplay.bind(this);
    this.clearDisplay = this.clearDisplay.bind(this);
    this.setOperation = this.setOperation.bind(this);
    this.getResult = this.getResult.bind(this);
  }
  sendToDisplay(e) {
    const displayText = this.props.text;
    const dataValue = document.
    getElementById(e.target.id).
    getAttribute("data-value");
    let displayedData;

    displayedData = displayText.concat(dataValue);
    this.props.changeDisplay(displayedData);
  }
  clearDisplay() {
    this.props.changeDisplay("0");
  }

  setOperation(e) {

    this.props.setPreValue(Number(this.props.text), e.target.id);
    this.props.changeDisplay(" ");

  }

  getResult() {
    // Verify operation

    // Addition
    let result = Number(this.props.text) + Number(this.props.getValue);

    this.props.changeDisplay(result);

  }
  render() {
    return (
      React.createElement("div", { id: "pad" },
      React.createElement("div", { id: "numbers" },
      React.createElement("div", { id: "zero", onClick: this.sendToDisplay, "data-value": "0" }, "0"),


      React.createElement("div", { id: "one", onClick: this.sendToDisplay, "data-value": "1" }, "1"),


      React.createElement("div", { id: "two", onClick: this.sendToDisplay, "data-value": "2" }, "2"),


      React.createElement("div", { id: "three", onClick: this.sendToDisplay, "data-value": "3" }, "3"),


      React.createElement("div", { id: "four", onClick: this.sendToDisplay, "data-value": "4" }, "4"),


      React.createElement("div", { id: "five", onClick: this.sendToDisplay, "data-value": "5" }, "5"),


      React.createElement("div", { id: "six", onClick: this.sendToDisplay, "data-value": "6" }, "6"),


      React.createElement("div", { id: "seven", onClick: this.sendToDisplay, "data-value": "7" }, "7"),


      React.createElement("div", { id: "eight", onClick: this.sendToDisplay, "data-value": "8" }, "8"),


      React.createElement("div", { id: "nine", onClick: this.sendToDisplay, "data-value": "9" }, "9")),



      React.createElement("div", { id: "functionality" },
      React.createElement("div", { id: "decimal" }, "."),
      React.createElement("div", { id: "clear", onClick: this.clearDisplay }, "AC"),


      React.createElement("div", { id: "multiply" }, "X"),
      React.createElement("div", { id: "divide" }, "/"),
      React.createElement("div", { id: "add", onClick: this.setOperation }, "+"),


      React.createElement("div", { id: "subtract" }, "-"),
      React.createElement("div", null, "Ans"),
      React.createElement("div", { id: "equals", onClick: this.getResult }, "="))));



  }}


ReactDOM.render(React.createElement(App, null), document.getElementById("app"));