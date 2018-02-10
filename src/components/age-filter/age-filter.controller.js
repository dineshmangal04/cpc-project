export default class AgefilterController {
	constructor($log, ApiService) {
		'ngInject';

		this.$log = $log;
    this.ApiService = ApiService;
    this.ageFilterList = {};
	}

	$onInit = () => {
	
		this.getFilterList();
	};

	getFilterList() {
		let self = this;
		this.ApiService.get('/data/ageFilter.json').then((res) => {
			this.ageFilterList = res.data.data;	
			console.log(this)
    })
  }

  getFilterCount(ageInfo) { 
    
    let ageFilterCount = 0;
    this.userList.map((data) => {
      if(data['age'] >= ageInfo['minAge'] && data['age'] <= ageInfo['maxAge']) {
        ageFilterCount++;
      }
    });
    return ageFilterCount;
  }
  
  onUpdate($event, ageInfo) {
    if(angular.element($event.currentTarget).hasClass('filteractive')) {
      return;
    } else {
      angular.element($event.currentTarget).addClass('filteractive');
      this.onUpdateFilter(ageInfo);
    }
    
  }

}
