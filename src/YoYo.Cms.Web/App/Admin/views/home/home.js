﻿(function() {
    var controllerId = 'app.views.home';
    yoyocmsModule.controller(controllerId, [
        '$scope', function($scope) {
            var vm = this;
            //Home logic...
            vm.oo = "啦啦啦";


            $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
                setTimeout(function () {
                 
                }, 0);
            });

        }
    ]);
})();