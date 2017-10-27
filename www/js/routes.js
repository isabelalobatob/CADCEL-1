angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('cADCEL', {
    url: '/page1',
    templateUrl: 'templates/cADCEL.html',
    controller: 'cADCELCtrl'
  })

  .state('login', {
    url: '/page2',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('cadastroUsuRio', {
    url: '/page3',
    templateUrl: 'templates/cadastroUsuRio.html',
    controller: 'cadastroUsuRioCtrl'
  })

  .state('cadastroAgente', {
    url: '/page5',
    templateUrl: 'templates/cadastroAgente.html',
    controller: 'cadastroAgenteCtrl'
  })

  .state('consultaDeAparelhosUsuRio', {
    url: '/page4',
    templateUrl: 'templates/consultaDeAparelhosUsuRio.html',
    controller: 'consultaDeAparelhosUsuRioCtrl'
  })

  .state('recuperarSenha', {
    url: '/page6',
    templateUrl: 'templates/recuperarSenha.html',
    controller: 'recuperarSenhaCtrl'
  })

  .state('usuarioLogado', {
    url: '/page7',
    templateUrl: 'templates/usuarioLogado.html',
    controller: 'usuarioLogadoCtrl'
  })

  .state('agenteLogado', {
    url: '/page9',
    templateUrl: 'templates/agenteLogado.html',
    controller: 'agenteLogadoCtrl'
  })

  .state('cadastroDeAparelhos', {
    url: '/page10',
    templateUrl: 'templates/cadastroDeAparelhos.html',
    controller: 'cadastroDeAparelhosCtrl'
  })

  .state('consultaDeAparelhosAgente', {
    url: '/page11',
    templateUrl: 'templates/consultaDeAparelhosAgente.html',
    controller: 'consultaDeAparelhosAgenteCtrl'
  })

  .state('tranferNciaDeAparelhos', {
    url: '/page12',
    templateUrl: 'templates/tranferNciaDeAparelhos.html',
    controller: 'tranferNciaDeAparelhosCtrl'
  })

$urlRouterProvider.otherwise('/page1')


});