describe('Main Controller', function () {
  beforeEach(angular.mock.module('gswApp'));
  let _apiService, 
      $httpBackend, 
      httpUrl;

  let sinonSandbox = sinon.sandbox.create();


  beforeEach(inject((apiService, $injector, API_URL_DEV) => {
    _apiService = apiService;
    $httpBackend = $injector.get('$httpBackend');
    httpUrl = API_URL_DEV;
  }));
  
  afterEach(() => {
    sinonSandbox.restore();
  })

  describe('main controller', () => {
    it('expect service to be defined', async () => {
      let mockResponse = {
        data: { messages: ["3_33"] }
      };

      $httpBackend.expectGET(httpUrl + '/get-messages')
        .respond(mockResponse);

      let response = _apiService.getMessages()
      expect(response).toBeDefined();
    })
    
    it('expect sendMessages to be defined', async () => {
      let mockResponse = {
        data: { message: "3_33" }
      };

      $httpBackend.expectPOST(httpUrl + '/decode-message')
        .respond(mockResponse);

      let response = _apiService.sendMessage("text")
      expect(response).toBeDefined();
    })
  })
})