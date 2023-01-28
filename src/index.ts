import _ from "lodash";

const letters = ["a", "b", "c"];

const consoleLog = (value: string): void => {
  console.log(value);
};

_.forEach(letters, consoleLog);
