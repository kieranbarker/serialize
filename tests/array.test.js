// Import Serialize
const { Serialize } = require('../dist/serialize.cjs');

test('Serializes all form data into an array', () => {
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

  // Serialize the form data into an array
  const arr = serialize.array();

  // Create the expected array
  const expectedArr = [
    { name: 'name', value: 'Anakin' },
    { name: 'email', value: 'anakin@skywalker.jedi' },
    { name: 'message', value: 'May The Force be with you.' }
  ];

  // Expect the arrays to be the same
  expect(arr).toEqual(expectedArr);
});