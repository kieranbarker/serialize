// Import Serialize
const { Serialize } = require('../dist/serialize.cjs');

test('Serializes all form data into an object', () => {
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

  // Serialize the form data into an object
  const obj = serialize.object();

  // Create the expected object
  const expectedObj = {
    name: 'Anakin',
    email: 'anakin@skywalker.jedi',
    message: 'May The Force be with you.'
  };

  // Expect the objects to be the same
  expect(obj).toEqual(expectedObj);
});