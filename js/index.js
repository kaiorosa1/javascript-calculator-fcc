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
      currentValue: "",
      operators: [],
      result: 0 };

    this.changeDisplay = this.changeDisplay.bind(this);
    this.setCurrentValue = this.setCurrentValue.bind(this);
    this.setValues = this.setValues.bind(this);
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
      operators: op });

  }

  setValues(val) {
    this.setState({
      values: val });

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
        setValues: this.setValues,
        setOperator: this.setOperator,
        setResult: this.setResult,
        getCurrentValue: this.state.currentValue,
        getOperator: this.state.operators,
        getValues: this.state.values,
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

    let displayedData = this.props.text;
    // it only includes the dot once in every value
    if (!(this.props.getCurrentValue.includes(".") && dataValue == ".")) {
      if (displayText !== "0") {
        displayedData = displayText.concat(dataValue);
      } else
      {
        displayedData = "".concat(dataValue);
      }

      this.props.setCurrentValue(this.props.getCurrentValue.concat(dataValue));
    } else {
      this.props.setCurrentValue(displayedData);
    }


    this.props.changeDisplay(displayedData);
  }

  clearDisplay() {
    this.props.setCurrentValue("");
    this.props.setValues([]);
    this.props.setOperator([]);
    this.props.setResult(0);
    this.props.changeDisplay("0");
  }

  setOperation(e) {
    const displayText = this.props.text;
    // add values to array de values
    if (this.props.getCurrentValue != "") {
      this.props.getValues.push(this.props.getCurrentValue);
    }


    const dataValue = document.
    getElementById(e.target.id).
    getAttribute("data-value");

    this.props.getOperator.push(dataValue);
    // if there's more op than values shift it
    if (this.props.getOperator.length > this.props.getValues.length) {
      this.props.getOperator.shift();
    }

    let displayedData;
    // concatenate the operations in one string
    displayedData = displayText.concat(dataValue);
    this.props.changeDisplay(displayedData);
    this.props.setCurrentValue("");

  }

  getResult() {
    let expression = this.props.text;
    let result = Number(this.props.getCurrentValue);
    this.props.getValues.push(this.props.getCurrentValue);
    // alert(this.props.getValues);
    while (this.props.getValues.length != 1) {
      switch (this.props.getOperator[0]) {
        case "+":
          result =
          Number(this.props.getValues[0]) + Number(this.props.getValues[1]);
          break;
        case "-":
          result =
          Number(this.props.getValues[0]) - Number(this.props.getValues[1]);
          break;
        case "*":
          result =
          Number(this.props.getValues[0]) * Number(this.props.getValues[1]);
          break;
        case "/":
          result =
          Number(this.props.getValues[0]) / Number(this.props.getValues[1]);
          break;}


      // removes the previous numbers operated on
      this.props.getValues.shift();
      this.props.getValues.shift();
      // add the result in the first position of the array
      this.props.getValues.unshift(result);
      // removes the first operator
      this.props.getOperator.shift();
    }
    this.props.getValues.shift();
    this.props.setCurrentValue(result);
    this.props.changeDisplay(String(result));
  }

  render() {
    return (
      React.createElement("div", { id: "pad" },
      React.createElement("div", { id: "numbers" },
      React.createElement("button", { id: "seven", onClick: this.sendToDisplay, "data-value": "7" }, "7"),


      React.createElement("button", { id: "eight", onClick: this.sendToDisplay, "data-value": "8" }, "8"),


      React.createElement("button", { id: "nine", onClick: this.sendToDisplay, "data-value": "9" }, "9"),


      React.createElement("button", { id: "four", onClick: this.sendToDisplay, "data-value": "4" }, "4"),


      React.createElement("button", { id: "five", onClick: this.sendToDisplay, "data-value": "5" }, "5"),


      React.createElement("button", { id: "six", onClick: this.sendToDisplay, "data-value": "6" }, "6"),


      React.createElement("button", { id: "one", onClick: this.sendToDisplay, "data-value": "1" }, "1"),


      React.createElement("button", { id: "two", onClick: this.sendToDisplay, "data-value": "2" }, "2"),


      React.createElement("button", { id: "three", onClick: this.sendToDisplay, "data-value": "3" }, "3"),


      React.createElement("button", { id: "zero", onClick: this.sendToDisplay, "data-value": "0" }, "0"),


      React.createElement("button", { id: "decimal", onClick: this.sendToDisplay, "data-value": "." }, "."),


      React.createElement("button", null, "exp")),

      React.createElement("div", { id: "functionality" },
      React.createElement("button", null, "DEL"),
      React.createElement("button", { id: "clear", onClick: this.clearDisplay }, "AC"),


      React.createElement("button", { id: "multiply", onClick: this.setOperation, "data-value": "*" }, "X"),


      React.createElement("button", { id: "divide", onClick: this.setOperation, "data-value": "/" }, "/"),


      React.createElement("button", { id: "add", onClick: this.setOperation, "data-value": "+" }, "+"),


      React.createElement("button", { id: "subtract", onClick: this.setOperation, "data-value": "-" }, "-"),


      React.createElement("button", null, "Ans"),

      React.createElement("button", { id: "equals", onClick: this.getResult, "data-value": "=" }, "="))));





  }}


ReactDOM.render(React.createElement(App, null), document.getElementById("app"));