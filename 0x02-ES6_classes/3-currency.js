export default class Currency {
  constructor(code = '', name = '') {
    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof code !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }
}
