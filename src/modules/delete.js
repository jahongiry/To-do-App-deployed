exports.deleting = (i, toDoArray) => {
  toDoArray.splice(i, 1);
  return toDoArray;
};