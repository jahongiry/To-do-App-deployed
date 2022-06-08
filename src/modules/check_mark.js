export const checkmarking = (i, checkMark, checked, taskName, toDoArray) => {
  checkMark[i].style.display = 'none';
  checked[i].style.display = 'block';
  taskName[i].style.textDecoration = 'line-through';
  taskName[i].style.color = 'grey';
  taskName[i].style.textDecorationThickness = '7%';
  if (toDoArray[i].completed === true || toDoArray[i].completed === false) {
    toDoArray[i].completed = true;
  }
  localStorage.setItem('tasks', JSON.stringify(toDoArray));
};

export const checkmarking2 = (i, checkMark, checked, taskName, toDoArray) => {
  checkMark[i].style.display = 'block';
  checked[i].style.display = 'none';
  taskName[i].style.textDecoration = 'none';
  taskName[i].style.color = 'black';
  taskName[i].style.textDecorationThickness = '7%';
  if (toDoArray[i].completed === true || toDoArray[i].completed === false) {
    toDoArray[i].completed = false;
  }
  localStorage.setItem('tasks', JSON.stringify(toDoArray));
};