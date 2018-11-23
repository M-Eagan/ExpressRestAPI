"use strict";

angular
  .module("App")
  .service("HomeService", function($http) { 
    const service = this;

  
    service.postData = (newItem) => {
      return $http({
        method: "POST",
        url: "/items",
        data: newItem 
      });
    };

    
    service.updateData = (item) => {
      return $http({
        method: "PUT",
        url: `/items/${item.id}`, 
        data: item
      });
    };

    
    service.deleteData = (id) => {
      return $http({
        method: "DELETE",
        url: `/items/${id}` 
      });
    };

    
    service.getData = () => {
      return $http({
        method: "GET",
        url: "/items"
      });
    };
  });