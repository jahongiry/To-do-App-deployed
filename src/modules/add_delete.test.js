const {addFunction} = require('./add.js');
const {deleting} = require('./delete.js');


describe('deleting', () => {
  it('Should delete object array', () => {
    const i = 0
    let toDoArray = [{description: 'test1', completed: false, index: 0}]
    const result = [];
    expect(deleting(i, toDoArray)).toEqual(result);
  })
  it('Should add object array', () => {
    let arr = [];
    const objTemplate = {
      description: 'test1',
      completed: false,
      index: 0,
    };
    const result = [{description: 'test1', completed: false, index: 0}];
    expect(addFunction(arr, objTemplate)).toEqual(result);
  })
})