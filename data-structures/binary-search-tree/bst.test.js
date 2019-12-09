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
    bst.insert(16);

    let result1 = bst.find(7);
    let result2 = bst.find(17);
    let result3 = bst.find(40);
    let result4 = bst.find(16);

    expect(result1).toEqual(true);
    expect(result2).toEqual(true);
    expect(result3).toEqual(false);
    expect(result4).toEqual(true);
  });

  test('#bfs should traverse then tree', () => {
    let bst = new BST();

    bst.insert(10);
    bst.insert(8);
    bst.insert(7);
    bst.insert(9);
    bst.insert(12);
    bst.insert(17);
    bst.insert(16);

    let result = bst.bfs();

    expect(result).toMatchSnapshot();
  });

  test('#dfsPre should traverse then tree in preorder', () => {
    let bst = new BST();

    bst.insert(10);
    bst.insert(8);
    bst.insert(7);
    bst.insert(9);
    bst.insert(12);
    bst.insert(17);
    bst.insert(16);
    //    10
    //   8   12
    // 7  9    17
    //       16

    let result = bst.dfsPre();

    expect(result).toMatchSnapshot();
    // 10 8 7 9 12 17 16
  });

  test('#dfsPost should traverse then tree in postorder', () => {
    let bst = new BST();

    bst.insert(10);
    bst.insert(8);
    bst.insert(7);
    bst.insert(9);
    bst.insert(12);
    bst.insert(17);
    bst.insert(16);
    //    10
    //   8   12
    // 7  9    17
    //       16

    let result = bst.dfsPost();

    expect(result).toMatchSnapshot();
    // 7 9 8 16 17 12 10
  });

  test('#dfsInOrder should traverse then tree in order', () => {
    let bst = new BST();

    bst.insert(10);
    bst.insert(8);
    bst.insert(7);
    bst.insert(9);
    bst.insert(12);
    bst.insert(17);
    bst.insert(16);
    //    10
    //   8   12
    // 7  9    17
    //       16

    let result = bst.dfsInOrder();

    expect(result).toMatchSnapshot();
    // 7 8 9 10 12 16 17
  });
});