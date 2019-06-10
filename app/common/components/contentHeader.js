angular.module('primeiroApp').component('contentHeader',{
    bindings: {
        name: '@',
        small: '@',
    },
    template: `
    <selection class="content-header">
        <h1>{{$ctrl.name}}<small>{{$ctrl.small}}</small></h1>
    </selection>
    `
})