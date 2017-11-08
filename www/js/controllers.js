var app = angular.module('app.controllers', [])

.controller('cADCELCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('loginCtrl', ['$scope', '$stateParams', '$http', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$http, $state){
$scope.login=function(){
var email = document.getElementById('inputloginemail').value;
var hash = document.getElementById('inputloginemail').value;
//var r = {email,hash};
var parametro = JSON.stringify({type:'Usuario', email:email, hash:hash});
console.log(parametro);
  $http.post("Login.php",parametro).
  success(function(data,status,headers,config)
  {
    if(data == true)
    {
      alert("OLA");
      $state.go("usuarioLogado");
    }
    else
    {
      if(data == false)
      {
        alert("Email ou senha inválidas");
      }
    }
  }).
  error(function(data,status,headers,config)
  {
    console.log("Erro na conexão");
  });   
}
}])

app.controller('cadastroUsuRioCtrl', ['$scope','$http','$stateParams','$state',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope,$http,$stateParams,$state) {
  /*$scope.$watch("myvar", function (newVal, oldVal) {
    console.log(newVal);
  });*/
  $scope.teste = function(){
  var nome = document.getElementById('inputcadastronome').value;
  var email = document.getElementById('inputcadastroemail').value;
  var cpf = document.getElementById('inputcadastrocpf').value;
  var birth = document.getElementById('inputcadastrobirth').value;
  var celular = document.getElementById('inputcadastrocelular').value;
  var endereco = document.getElementById('inputcadastroendereco').value;
  var matricula = document.getElementById('inputcadastromatricula').value;
  var corporacao = document.getElementById('inputcadastrocorporacao').value;
  var senha = document.getElementById('inputcadastrosenha').value;
  var csenha = document.getElementById('inputcadastrocsenha').value;
  var Usuario = [nome, email, cpf, birth, celular, endereco, matricula, corporacao, senha, csenha];
  console.log(Usuario);
  var parametro = JSON.stringify({type:'Usuario', cpf:cpf, nome:nome, nascimento:birth, telefone:celular, email:email, matricula:matricula,
   corporacao:corporacao, tipo:0});
  $http.post("Signup.php",parametro).
    success(function(data, status, headers, config)
    {
      $state.go("login");
    }).
    error(function(data, status, headers, config)
    {
      alert("Erro na conexão");
    })
    if(success=true)
    {
      alert('Bem vindo');
    }
    else
    {
      alert('Erro no cadastramento');
    }
  };
}]);

app.controller('cadastroAgenteCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('consultaDeAparelhosUsuRioCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

}])

.controller('recuperarSenhaCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

}])

.controller('usuarioLogadoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('agenteLogadoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('cadastroDeAparelhosCtrl', ['$scope', '$stateParams', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http) {
    $scope.teste = function(){
      var tipo = document.getElementById('inputcadastrotipo').value;
      var marca = document.getElementById('inputcadastromarca').value;
      var modelo = document.getElementById('inputcadastromodelo').value;
      var status = document.getElementById('inputcadastrostatus').value;
      var imei = document.getElementById('inputcadastroimei').value;
      var descricao = document.getElementById('inputcadastrodescricao').value;
      var nf = document.getElementById('inputcadastronf').value;
      var quadro = document.getElementById('inputcadastroquadro').value;
      var Dados = {tipo,marca,status,imei,descricao,nf,quadro};
      console.log(Dados);
      $http.post("",parametro).
    success(function(data, status, headers, config)
    {
      $state.go("login");
    }).
    error(function(data, status, headers, config)
    {
      alert("Erro na conexão");
    })
    if(success=true)
    {
      alert('Bem vindo');
    }
    else
    {
      alert('Erro no cadastramento');
    }
    }
}])

.controller('consultaDeAparelhosAgenteCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('tranferNciaDeAparelhosCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
