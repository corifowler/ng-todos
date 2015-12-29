let TaskController = function($scope) {
  
  let vm = this;

  vm.editing = false;

  // empty task list

  vm.taskList = [];

  // declare functions for adding, updating, deleting tasks

  vm.addTask = addTask;
  vm.editTask = editTask;
  vm.updateTask = updateTask;
  vm.deleteTask = deleteTask;

  // functions

  function addTask (task) {
    task.done = false;
    vm.taskList.push(task);

    // clear form

    vm.task = '';
  }

  function editTask (t) {
    vm.editing = true;

    // prefill form
    vm.task = t;
  }

  function updateTask () {
    vm.editing = false;
    vm.task = '';
  }

  function deleteTask (task) {
    task.done = true;
    let allTasks = vm.taskList;
    vm.taskList = [];

    // only add unfinished tasks to list, remove finished
    angular.forEach(allTasks, function(task) {
      if (task.done === false) {
        vm.taskList.push(task);
      }

      // reset form
      vm.editing = false;
      vm.task = '';
    });
  }


};

TaskController.$inject = ['$scope'];

export default TaskController;