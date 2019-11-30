const { BST } = require('./bst');

describe('BinarySearchTree', () => {
  test('#insert should insert a node when 0 nodes', () => {
    let bst = new BST();

    bst.insert(1);

    expect(bst).toMatchSnapshot();
  });

  test('#insert should insert a node when multiple nodes', () => {
    let bst = new BST();

    bst.insert(10);
    bst.insert(8);
    bst.insert(7);
    bst.insert(9);
    bst.insert(12);
    bst.insert(17);

    expect(bst).toMatchSnapshot();
  });

  test('#find should find a node when multiple nodes', () => {
    let bst = new BST();

    bst.insert(10);
    bst.insert(8);
    bst.insert(7);
    bst.insert(9);
    bst.insert(12);
    bst.insert(17);

    let result1 = bst.find(7);
    let result2 = bst.find(17);
    let result3 = bst.find(40);

    expect(result1).toEqual(true);
    expect(result2).toEqual(true);
    expect(result3).toEqual(false);
  });
});