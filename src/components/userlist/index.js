import userlistComponent from './userlist.component';

const userlistModule = angular.module('app.userlist', []);

// loading components, services, directives, specific to this module.
userlistModule.component('userlist', userlistComponent);

// export this module
export default userlistModule;
