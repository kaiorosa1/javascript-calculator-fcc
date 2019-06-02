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
      oprator: "",
      result: 0 };

    this.changeDisplay = this.changeDisplay.bind(this);
    this.setPreValue = this.setPreValue.bind(this);
    this.setOperator = this.setOperator.bind(this);
    this.setResult = this.setResult.bind(this);
  }

  changeDisplay(newText) {
    this.setState({
      text: newText });

  }

  setPreValue(val) {
    this.setState({
      preValue: val });

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
        setPreValue: this.setPreValue,
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
  }

  clearDisplay() {
    this.props.setPreValue(0);
    this.props.setOperator("");
    this.props.changeDisplay("0");
  }

  setOperation(e) {
    this.props.setPreValue(Number(this.props.text));
    this.props.setOperator(e.target.id);

    let result = this.props.getStateResult;
    // Verify operation

    switch (e.target.id) {
      case "add":
        result += Number(this.props.text);
        break;
      case "subtract":
        result -= Number(this.props.text);
        break;
      case "divide":
        result /= Number(this.props.text);
        break;
      case "multiply":

        result *= Number(this.props.text);
        break;}


    this.props.setResult(result);
    this.props.changeDisplay(" ");
  }

  getResult() {
    let result = this.props.getStateResult;
    // Verify operation
    switch (this.props.getOperator) {
      case "add":
        result += Number(this.props.text);
        break;
      case "subtract":
        result -= Number(this.props.text);
        break;
      case "divide":
        result /= Number(this.props.text);
        break;
      case "multiply":
        result *= Number(this.props.text);
        break;}


    this.props.setResult(result);
    this.props.changeDisplay(this.props.getStateResult);
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


      React.createElement("div", { id: "multiply", onClick: this.setOperation }, "X"),


      React.createElement("div", { id: "divide", onClick: this.setOperation }, "/"),


      React.createElement("div", { id: "add", onClick: this.setOperation }, "+"),


      React.createElement("div", { id: "subtract", onClick: this.setOperation }, "-"),


      React.createElement("div", null, "Ans"),
      React.createElement("div", { id: "equals", onClick: this.getResult }, "="))));





  }}



ReactDOM.render(React.createElement(App, null), document.getElementById("app"));