import ageFilterComponent from './age-filter.component';

const ageFilterModule = angular.module('app.age-filter', []);

// loading components, services, directives, specific to this module.
ageFilterModule.component('ageFilter', ageFilterComponent);

// export this module
export default ageFilterModule;
