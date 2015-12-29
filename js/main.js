import angular from 'angular';

import TaskController from './controllers/taskcontroller';

angular
  .module('app', [])
  .controller('TaskController', TaskController)
;
