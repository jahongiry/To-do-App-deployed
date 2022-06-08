const { addFunction } = require('./add.js');
const { deleting } = require('./delete.js');

// Addin
describe('deleting', () => {
  // deleting the object
  it('Should delete object array', () => {
    const i = 0;
    const toDoArray = [{ description: 'test1', completed: false, index: 0 }];
    const result = [];
    expect(deleting(i, toDoArray)).toEqual(result);
  });
  // checking whether the object is an array
  it('add object to create an  array', () => {
    const arr = [];
    const objTemplate = {
      description: 'test1',
      completed: false,
      index: 0,
    };
    const result = [{ description: 'test1', completed: false, index: 0 }];
    expect(addFunction(arr, objTemplate)).toEqual(result);
  });
});
