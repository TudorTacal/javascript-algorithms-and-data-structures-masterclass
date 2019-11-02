const { Node, SinglyLinkedList } = require('./singly-linked-list.js');

describe('SinglyLinkedList', () => {
  test('#push with no head', () => {
    let linkedList = new SinglyLinkedList();
    let result = {
      head: {
        val: 'Hello',
        next: null
      },
      tail: {
        val: 'Hello',
        next: null
      }
    }

    linkedList.push('Hello');

    expect(linkedList.head).toEqual(result.head);
    expect(linkedList.tail).toEqual(result.tail);
    expect(linkedList.length).toEqual(1);
  });

  test('#push with head', () => {
    let linkedList = new SinglyLinkedList();

    let result = {
      head: {
        val: 'Hello',
        next: {
          val: 'World',
          next: null,
        },
      },
      tail: {
        val: 'World',
        next: null
      },
      length: 2,
    };

    linkedList.push('Hello');
    linkedList.push('World');

    expect(linkedList.head.val).toEqual(result.head.val);
    expect(linkedList.head.next).toEqual(result.head.next);
    expect(linkedList.tail.val).toEqual(result.tail.val);
    expect(linkedList.tail.next).toEqual(result.tail.next);
    expect(linkedList.length).toEqual(result.length);
  });

  test('#pop should remove the last node and return it', () => {
    let linkedList = new SinglyLinkedList();
    let expectedResult = {
      val: 'World',
      next: null,
    };

    linkedList.push('Hello');
    linkedList.push('Beautiful');
    linkedList.push('Happy');
    linkedList.push('World');
    let result = linkedList.pop();

    expect(result.val).toEqual(expectedResult.val);
    expect(result.next).toEqual(expectedResult.next);
  });

  test('#shift should remove the first node and return it', () => {
    let linkedList = new SinglyLinkedList();
    let expectedResult = {
      val: 'Hello',
      next: {
        val: 'World',
        next: null,
      },
    };

    linkedList.push('Hello');
    linkedList.push('World');
    let result = linkedList.shift();

    expect(result).toEqual(expectedResult);
  });

  test('#unshift should add a node at the beginning and return the list', () => {
    let linkedList = new SinglyLinkedList();

    linkedList.push('Hello');
    let result = linkedList.unshift('World');

    expect(linkedList.length).toEqual(2);
    expect(linkedList).toMatchSnapshot();
  });

  test('#get should return the value at a given index', () => {
    let linkedList = new SinglyLinkedList();

    linkedList.push('Hello');
    linkedList.push('Crazy');
    linkedList.push('Beautiful');

    let result = linkedList.get(2);
    let expectedResult = {
      val: 'Beautiful',
      next: null
    };

    expect(result).toEqual(expectedResult);
  });
});