const { Node, Dll } = require('./doubly-linked-list');

describe('dll', () => {
  test('#push should add a node at the end of the dll when 0 nodes', () => {
    let dll = new Dll();
    let expectedResult = {
      head: {
        val: 'Hello',
        next: null,
        prev: null,
      },
      tail: {
        val: 'Hello',
        next: null,
        prev: null,
      },
      length: 1,
    };

    dll.push('Hello');

    expect(dll.length).toEqual(1);
    expect(dll).toEqual(expectedResult);
    expect(dll).toMatchSnapshot();
  });

  test('#push should add a node at the end of the dll when multiple nodes', () => {
    let dll = new Dll();

    dll.push('Hello');
    dll.push('World');

    expect(dll.length).toEqual(2);
    expect(dll).toMatchSnapshot();
  });
});