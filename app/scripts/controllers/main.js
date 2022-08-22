'use strict';

angular.module('gswApp')
  .controller('MainController', MainController)
  function MainController ($scope, apiService) {
    const self = $scope;
    
    self.sendMessage = async () => {
      try {
        await apiService.sendMessage(self.messageForm)
        window.swal(
          'Sucesso!',
          'Mensagem enviada com sucesso!',
          'success',
        );
        self.messageForm = {};
        self.getMessages();
      } catch(error) {
        console.log(error)
      }
    };

    self.getMessages = async () => {
      try {
        const response = await apiService.getMessages()
        self.messages = response.data;
        self.$digest();
      } catch(error) {
        console.log(error)
      }
    };
  };
