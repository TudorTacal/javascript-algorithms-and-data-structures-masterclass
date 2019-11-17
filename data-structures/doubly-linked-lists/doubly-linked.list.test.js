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

  test('#pop should remove the last node when multiple nodes', () => {
    let dll = new Dll();

    dll.push('Hello');
    dll.push('World');
    let result = dll.pop();

    expect(dll.length).toEqual(1);
    expect(result).toMatchSnapshot();
    expect(dll).toMatchSnapshot();
  });

  test('#pop should remove the last node when 1 node', () => {
    let dll = new Dll();

    dll.push('Hello');
    let result = dll.pop();

    expect(dll.length).toEqual(0);
    expect(result).toMatchSnapshot();
    expect(dll).toMatchSnapshot();
  });

  test('#shift should remove the first node when 1 node', () => {
    let dll = new Dll();

    dll.push('Hello');
    let result = dll.shift();

    expect(dll.length).toEqual(0);
    expect(result).toMatchSnapshot();
    expect(dll).toMatchSnapshot();
  });

  test('#shift should remove the first node when multiple nodes', () => {
    let dll = new Dll();

    dll.push('Hello');
    dll.push('World');
    let result = dll.shift();

    expect(dll.length).toEqual(1);
    expect(result).toMatchSnapshot();
    expect(dll).toMatchSnapshot();
  });

  test('#unshift should remove the first node when multiple nodes', () => {
    let dll = new Dll();

    dll.push('Hello');
    dll.push('World');
    dll.unshift('Salut');

    expect(dll.length).toEqual(3);
    expect(dll).toMatchSnapshot();
  });

  test('#get should return the node at the specified index', () => {
    let dll = new Dll();

    dll.push('Hello');
    dll.push('Beautiful');
    dll.push('Crazy');
    dll.push('World');

    let result = dll.get(1);
    expect(result).toMatchSnapshot();
  });
});