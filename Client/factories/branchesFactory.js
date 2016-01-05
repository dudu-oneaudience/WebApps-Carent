/**
 * Created by Michael on 1/4/2016.
 */
carentApp.factory('branchService', ['$http', function($http) {

    return {
        // call to get all branches
        get : function() {
            return $http.get('/api/branches');
        },


        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new car
        upsert : function(branchData) {
            return $http.post('/api/branches', branchData);
        },

        // call to DELETE a car
        delete : function(id) {
            return $http.delete('/api/branches/' + id);
        },
    }

}]);