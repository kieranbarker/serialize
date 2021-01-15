// Import Serialize
const { Serialize } = require('../dist/serialize.cjs');

test('Serializes all form data into a query string', () => {
  // Set the HTML body
  document.body.innerHTML = `
    <form>
      <p>
        <label for="name">Name</label>
        <input id="name" type="text" name="name" value="Anakin">
      </p>
      <p>
        <label for="email">Email</label>
        <input id="email" type="email" name="email" value="anakin@skywalker.jedi">
      </p>
      <p>
        <label for="message">Message</label>
        <textarea id="message" name="message">May The Force be with you.</textarea>
      </p>
      <p>
        <button type="submit">Submit</button>
      </p>
    </form>
  `;

  // Create a new Serialize instance
  const serialize = new Serialize(document.forms[0]);

  // Serialize the form data into a query string
  const queryString = serialize.string();

  // Create the expected string
  const expectedString = 'name=Anakin&email=anakin%40skywalker.jedi&message=May+The+Force+be+with+you.';

  // Expect the strings to be the same
  expect(queryString).toEqual(expectedString);
});