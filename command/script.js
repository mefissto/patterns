class AddCommand {
  constructor(valueToAdd) {
    this.valueToAdd = valueToAdd;
  }

  execute(currentValue) {
    return currentValue + this.valueToAdd;
  }

  unDo(currentValue) {
    return currentValue - this.valueToAdd;
  }
}

class SubtractCommand {
  constructor(valueToSubtract) {
    this.valueToSubtract = valueToSubtract;
  }

  execute(currentValue) {
    return currentValue - this.valueToSubtract;
  }

  unDo(currentValue) {
    return currentValue + this.valueToSubtract;
  }
}

class MultiplyCommand {
  constructor(valueToMultiply) {
    this.valueToMultiply = valueToMultiply;
  }

  execute(currentValue) {
    return currentValue * this.valueToMultiply;
  }

  unDo(currentValue) {
    return currentValue / this.valueToMultiply;
  }
}

class DivideCommand {
  constructor(valueToDivide) {
    this.valueToDivide = valueToDivide;
  }

  execute(currentValue) {
    return currentValue / this.valueToDivide;
  }

  unDo(currentValue) {
    return currentValue * this.valueToDivide;
  }
}

class Calculator {
  value = 0;
  history = [];

  executeCommand(command) {
    this.value = command.execute(this.value);
    this.history.push(command);
  }

  unDo() {
    const command = this.history.pop();
    this.value = command.unDo(this.value);
  }
}

const calculator = new Calculator();

calculator.executeCommand(new AddCommand(10));
calculator.executeCommand(new MultiplyCommand(10));
calculator.unDo();
calculator.executeCommand(new DivideCommand(5));
