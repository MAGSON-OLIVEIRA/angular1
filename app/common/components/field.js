(function(){
    angular.module('primeiroApp').component('field',{
        bindings: {
            id: '@',
            label: '@',
            grid: '@',
            placeholder: '@',
            type: '@',
            model: '=',
        },
        controller: [
            'gridSystem',
           // function(gridSystem){
            //    this.gridClasses = gridSystem.toCssClasses(this.grid)
            //}
            function(gridSystem){
                this.$onInit = function(){
                    this.gridClasses = gridSystem.toCssClasses(this.grid)
                }
            }
        ],
        template: `
        <div class=" {{ $ctrl.gridClasses }} ">
            <div class="form-grup">
            <label for=" {{ $ctrl.id }} "  > {{ $ctrl.label }} </label>
            <input id=" {{ $ctrl.id }} " class="form-control"  placeholder=" {{ $ctrl.placeholder }} "
                    type=" {{ $ctrl.type }} " ng-model="$ctrl.model" />
            </div>
        </div>
        `
    })
})()