export default class Serialize {

  /**
   * Create a new Serialize instance
   * @param {HTMLFormElement} form An HTML form element
   * @returns {Serialize} A new Serialize instance
   */
  constructor (form) {
    if (!(form instanceof HTMLFormElement)) {
      throw new TypeError('Serialize expected an HTMLFormElement.');
    }

    this.data = new FormData(form);
  }

  /**
   * Serialize all form data into a query string
   * @returns {String} The serialized form data
   */
  string () {
    return new URLSearchParams(this.data).toString();
  }

  /**
   * Serialize all form data into an array
   * @returns {Array} The serialized form data
   */
  array () {
    const pairs = [];
  
    for (const [name, value] of this.data) {
      pairs.push({ name, value });
    }
  
    return pairs;
  }

  /**
   * Serialize all form data into an object
   * @returns {Object} The serialized form data
   */
  object () {
    const pairs = {};
  
    for (const [name, value] of this.data) {
      pairs[name] = value;
    }
  
    return pairs;
  }

  /**
   * Serialize all form data into a JSON string
   * @returns {String} The serialized form data
   */
  json () {
    return JSON.stringify(this.object());
  }

}