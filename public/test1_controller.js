define(function (require){
  var module = require('ui/modules').get('kibana/test1', [kibana]);

  module.controller('Test1Controller', function($scope, Private){

    // kibana plugin have common var
    var tabifyAggResponse = Private(require('ui/agg_response/tabify/tabify'));
    var metrics = $scope.metrics = [];
    var title = null;

    $scope.processTableGroups function(tableGroups){
      tableGroups.tables.forEach(funtion(table){
        table.columns.forEach(function(column,i){
          var fieldFormatter = table.aggConfig(column).fieldFormatter();
          metrics[0] = {label: column.title, value: table.rows[0][i]};
        });
      });
    };

    $scope.$watch('esResponse', function(resp){
      if (resp) {
        metrics.length = 0;
        $scope.processTableGroups(tabifyAggResponse($scope.vis, resp));
        title = (!$scope.vis.params.titleTest) ? $scope.metrics[0].label : $scope.vis.params.titleTest;
        $scope.title = title;
      }
    });

  });
});
