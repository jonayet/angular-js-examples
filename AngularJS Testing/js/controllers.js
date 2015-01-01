var nameSpace = angular.module("StudentApp", ['ngDialog']);
nameSpace.controller("StudentManagerController", function($scope, $rootScope) {
    /*
     $http.get('js/data.json').success (function(data){
     $scope.guitarVariable = data;
     });
     */

    $rootScope.Students = [
        {
            "ID": "1145",
            "name": "Miraj Ahmed",
            "description": "Extra ordinary UI designer."
        },
        {
            "ID": "4282",
            "name": "Anisur Reza Ch",
            "description": "Excellent UX designer."
        },
        {
            "ID": "8035",
            "name": "Montasir Mamun",
            "description": "Very good TeamLeader. :)"
        },
        {
            "ID": "3145",
            "name": "Mr. Rony",
            "description": "Very Good programmer"
        },
        {
            "ID": "5684",
            "name": "Mr. Rizvi",
            "description": "jolly minded very good programmer"
        }
    ]
});

nameSpace.controller('ShowDetailsController', function ($scope, $rootScope, ngDialog) {
    $rootScope.jsonData = '{"foo": "bar"}';
    $rootScope.message = 'Hello!';
    $rootScope.theme = 'ngdialog-theme-plain';



    $scope.open = function (Id) {

        var students = $rootScope.Students;
        var id, name, description;
        for (var i = 0; i < students.length; i++) {
            if(students[i].ID == Id)
            {
                id = students[i].ID;
                name = students[i].name;
                description = students[i].description;
            }
        }

        ngDialog.open({
            template: 'StudentInfoDialog',
            controller: 'ShowDetailsController',
            data: {id: id, name: name, description : description }
        });
    };

    $scope.close = function () {
        ngDialog.close();
    };
});



// Example of how to set default values for all dialogs
nameSpace.config(['ngDialogProvider', function (ngDialogProvider) {
    ngDialogProvider.setDefaults({
        className: 'ngdialog-theme-default',
        plain: false,
        showClose: true,
        closeByDocument: true,
        closeByEscape: true,
        appendTo: false
    });
}]);


