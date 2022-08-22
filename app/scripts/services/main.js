'use strict';

angular.module('gswApp')
  .service('apiService',apiService)
    function apiService($http, API_URL) {
      let apiFunctions = {};

      apiFunctions.sendMessage = (messageForm) => {
        return $http({
          method: 'POST',
          url: API_URL + '/decode-message',
          data: {
            text: messageForm.text,
            sendNumber: messageForm.sendNumber,
            receiverNumber: messageForm.receiverNumber,
          }
        })
      };

      apiFunctions.getMessages = async () => {
        return $http({
          method: 'GET',
          url: API_URL + '/get-messages'
        });
      };

      return apiFunctions;
  };
