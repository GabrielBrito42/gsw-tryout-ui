describe('Main Controller', function () {
  beforeEach(angular.mock.module('gswApp'));
  let apiServiceSinonStub, scopeMock
  let sinonSandbox = sinon.sandbox.create();


  beforeEach(inject(function ($controller, $rootScope, apiService) {
    scopeMock = $rootScope.$new();
    $controller('MainController', {
      $scope: scopeMock,
    });
    apiServiceSinonStub = apiService;
  }));
  
  afterEach(() => {
    sinonSandbox.restore();
  })

  describe('main controller', () => {
    it('should messages be defined when the component loads', async () => {
      let sendMessageStub = sinonSandbox
        .stub(apiServiceSinonStub, 'sendMessage')
        .returns({data: 'messagem enviada'});
      
      let getMessagesStub = sinonSandbox
        .stub(apiServiceSinonStub, 'getMessages')
        .returns({data: 'mensagem'});

      await scopeMock.sendMessage();

      sinon.assert.callCount(sendMessageStub, 1);
      sinon.assert.callCount(getMessagesStub, 1);
      expect(scopeMock.messageForm).toBeDefined();
      expect(scopeMock.messages).toMatch('mensagem');
    })

    it('should messges be defined when the getMessages been called component loads', async () => {
      let getMessagesStub = sinonSandbox.stub(apiServiceSinonStub, 'getMessages')
                              .returns({data: 'message'});

      await scopeMock.getMessages();
      sinon.assert.callCount(getMessagesStub, 1);
      expect(scopeMock.messages).toMatch('message');
    })
  })
})