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
      values: [],
      currentValue: 0,
      operator: [],
      result: 0 };

    this.changeDisplay = this.changeDisplay.bind(this);
    this.setCurrentValue = this.setCurrentValue.bind(this);
    this.setOperator = this.setOperator.bind(this);
    this.setResult = this.setResult.bind(this);
  }

  changeDisplay(newText) {
    this.setState({
      text: newText });

  }

  setCurrentValue(val) {
    this.setState({
      currentValue: val });

  }

  setOperator(op) {
    this.setState({
      operator: op });

  }

  setResult(newResult) {
    this.setState({
      result: newResult });

  }


  render() {
    return (
      React.createElement("div", { id: "calculator" },
      React.createElement(Display, { text: this.state.text }),
      React.createElement(CalculatorPad, {
        text: this.state.text,
        changeDisplay: this.changeDisplay,
        setCurrentValue: this.setCurrentValue,
        setOperator: this.setOperator,
        setResult: this.setResult,
        getValue: this.state.preValue,
        getOperator: this.state.operator,
        getStateResult: this.state.result })));



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

    if (displayText !== "0") {
      displayedData = displayText.concat(dataValue);
    } else {
      displayedData = "".concat(dataValue);
    }
    this.props.changeDisplay(displayedData);
    if (Number(displayedData)) {
      this.props.setResult(Number(displayedData));
    }
  }

  clearDisplay() {
    this.props.setCurrentValue(0);
    this.props.setOperator("");
    this.props.setResult(0);
    this.props.changeDisplay("0");
  }

  setOperation(e) {

    const displayText = this.props.text;
    const dataValue = document.getElementById(e.target.id).getAttribute("data-value");
    let displayedData;
    // concatenate the operations in one string
    displayedData = displayText.concat(dataValue);
    this.props.changeDisplay(displayedData);
  }

  getResult() {
    alert("handle the operations");
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
      React.createElement("div", { id: "decimal", onClick: this.sendToDisplay, "data-value": "." }, "."),
      React.createElement("div", { id: "clear", onClick: this.clearDisplay }, "AC"),


      React.createElement("div", { id: "multiply", onClick: this.setOperation, "data-value": "*" }, "X"),


      React.createElement("div", { id: "divide", onClick: this.setOperation, "data-value": "/" }, "/"),


      React.createElement("div", { id: "add", onClick: this.setOperation, "data-value": "+" }, "+"),


      React.createElement("div", { id: "subtract", onClick: this.setOperation, "data-value": "-" }, "-"),


      React.createElement("div", null, "Ans"),
      React.createElement("div", { id: "equals", onClick: this.getResult, "data-value": "=" }, "="))));





  }}



ReactDOM.render(React.createElement(App, null), document.getElementById("app"));