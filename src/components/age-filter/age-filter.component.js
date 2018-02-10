import AgeFilterTemplate from './age-filter.html';
import AgeFilterController from './age-filter.controller';

export default {
	template: AgeFilterTemplate,
  controller: AgeFilterController,
  bindings: {
    "onUpdateFilter": "&",
    "userList": "<"
  },
  controllerAs: "agefilterCtrl"
};
