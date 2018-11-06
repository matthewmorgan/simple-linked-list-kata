const { List, Element } = require('./simple-linked-list');


describe('business class can', () => {
  test('return an instance of the class', () => {
    const element = new Element();
    expect(element.constructor.name).toEqual('Element');
  });

  xtest('skip a test marked with "xtest" instead of "test"', () => {
    expect(null).toEqual(null);
  });
});
