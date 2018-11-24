"use strict";

angular
  .module("App")
  .config(['$qProvider', function ($qProvider) 
{
   $qProvider.errorOnUnhandledRejections(false); 
}])
  .controller("HomeController", function(HomeService) {
    const $ctrl = this;
  
    function changes(response) {
      $ctrl.items = response.data;
    }

    
    $ctrl.updateData = (item) => {
      HomeService.updateData(item).then(changes);
    };


    HomeService.getData().then(changes);
    
    
    $ctrl.deleteData = (id) => {
      HomeService.deleteData(id).then(changes);
    };
    
    
    $ctrl.postData = (newItem) => {
      HomeService.postData(newItem).then(changes);
    };
    
    
  });