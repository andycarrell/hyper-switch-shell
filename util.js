const base = "shell:load:";

const isValid = str => new RegExp(`^${base}\\w+$`).test(str);
const getKey = str => str.split(new RegExp(`^${base}`)).pop();

module.exports = {
  isValid,
  getKey
};
