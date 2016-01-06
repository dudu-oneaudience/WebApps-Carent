/**
 * Created by Dudu on 05/01/2016.
 */
carentApp.factory('OrderService', ['$http', function($http) {

    return {
        // call to get all orders
        get : function() {
            return $http.get('/api/orders');
        },


        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new car
        create : function(orderDara) {
            return $http.post('/api/orders', orderDara);
        },

        // call to DELETE a car
        delete : function(id) {
            return $http.delete('/api/orders/' + id);
        }
    }

}]);
