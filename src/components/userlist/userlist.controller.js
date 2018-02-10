export default class UserlistController {
	constructor($log, ApiService) {
		'ngInject';

		this.ApiService = ApiService;
		this.self = this;
	}

	$onInit = () => {
		this.heading = 'Citizen Age';
		this.$log.info('Activated Home View.');
		this.userlistAll = [];
		this.userlistActive = [];
		this.ageFilter = [];
		this.filteredUsers = [];
		this.activeFilter = 0;
		this.getUserList();
	};

	getUserList() {
		let self = this;
		this.ApiService.get('/data/users.json').then((res) => {
			self.userlistAll = self.userlistActive = res.data.data;	
			console.log(self.userlist);
			//this.transformData();
    })
	}

	onUpdateAgeFilter(maxAge, minAge, desc) { 
		this.ageFilter.push({maxAge: maxAge, minAge: minAge, desc: desc});
		this.userlistAll.map((data) => { 
			
      if (data['age'] >= minAge && data['age'] <= maxAge) {
        this.filteredUsers.push(data);
      }
     
		});
		this.filteredUsers.sort(function(ageData1, ageData2) {
			return ageData1['age'] - ageData2['age'];
		})
		this.ageFilter.sort(function(filterData1, filterData2) {
			return filterData1['maxAge'] - filterData2['maxAge'];
		})
		this.userlistActive = this.filteredUsers;
		console.log(this.ageFilter)
	}

	onremoveAgeFilter(index) {
		let filterInfo = this.ageFilter[index];
		this.filteredUsers = [];
		//Remove userlist belongs to this filter
		this.userlistActive.map((data) => { 
      if (data['age'] < filterInfo.minAge || data['age'] > filterInfo.maxAge) {
        this.filteredUsers.push(data);
      }
		});
		//Remove active filter from the selected filter option
		angular.element(document.getElementById(filterInfo.minAge + '-' + filterInfo.maxAge)).removeClass('filteractive');
		if(!this.filteredUsers.length) {
			this.userlistActive = this.userlistAll;
		} else {
			this.userlistActive = this.filteredUsers;
		}
		console.log(index);
		console.log(this.ageFilter)
		this.ageFilter.splice(index,1);
	}

}
