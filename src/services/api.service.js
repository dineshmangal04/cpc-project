'use strict';

export default class ApiService {

  constructor($http, $location) {
    "ngInject"
    let vm = this;
    vm.$http = $http;
    vm.baseURL = "http://" + $location.$$host  + ":3000";
    
     vm.header = {
       "Content-Type": "application/json"
     }
  }

  get(url) {
    let vm = this;
    let postUrl = vm.baseURL + url;
    return vm.$http({
      headers: vm.header,
      method: 'GET',
      url: postUrl
    });
  }

  post(url, data) {
    let vm = this;
    let postUrl = vm.baseURL + "/" + url;
    console.log(postUrl, JSON.stringify(data));
    return vm.$http({
      headers: vm.header,
      method: 'POST',
      url: postUrl,
      data: data
    });
  }
  put(url, data) {

    let vm = this;
    let postUrl = vm.baseURL + "/" + url;
    console.log(postUrl, data);
    return vm.$http({
      headers: vm.header,
      method: 'PUT',
      url: postUrl,
      data: data
    });
  }
  delete(url, data) {
    let vm = this;
    let postUrl = vm.baseURL + "/" + url;
    console.log(postUrl);
    return vm.$http({
      headers: vm.header,
      method: 'DELETE',
      url: postUrl,
      data: data
    });
  }
}













