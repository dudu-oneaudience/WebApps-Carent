/**
 * Created by Dudu on 18/01/2016.
 */
carentApp.controller('ordersManager', ['$scope', 'OrderService', function ($scope, OrderService) {

    var FORMAT = "DD/MM/YYYY HH:mm";

    OrderService.get().success(function (response) {
        $scope.orders = response;
        $scope.orders.forEach(function (element, index, array) {
            element.startDate = moment(element.startDate).format(FORMAT)
            element.endDate = moment(element.endDate).format(FORMAT)
        });
    });



    $scope.deleteOrder = function(id) {
        OrderService.delete(id).success(function () {
            alert('Order Deleted');
            $scope.orders = $scope.orders.filter(function (order) { return order._id !== id });
        });
    };
}]);

