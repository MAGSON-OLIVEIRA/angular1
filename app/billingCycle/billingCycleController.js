(function(){
    angular.module('primeiroApp').controller('BillingCycleController',[
        '$http', 
        'msgs',
        BillingCycleController
    ])
    function BillingCycleController($http, msgs){
        const vm = this
        const url = 'http://localhost:3003/api/billingCycles'
 

        vm.create = function() {
            $http.post(url, vm.billingCycle).then(function(response){
                vm.billingCycle = {}
                msgs.addSuccess('Operacao realizada com sucesso !!')
            }).catch(function(response){
                msgs.addError(response.data.errors)
            })
        }

    }
})()