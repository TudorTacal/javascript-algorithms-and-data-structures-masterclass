const { MaxHeap } = require('./max-heap');

describe('maxHeap', () => {
  test('#insert should insert a value in the correct place', () => {
    let maxHeap = new MaxHeap();

    maxHeap.insert(41);
    maxHeap.insert(39);
    maxHeap.insert(33);
    maxHeap.insert(18);
    maxHeap.insert(27);
    maxHeap.insert(12);
    maxHeap.insert(55);



    //        55
    //    39      41
    // 18   27 12   33

    expect(maxHeap).toMatchSnapshot();
  });
});