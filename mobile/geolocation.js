 $ionicPlatform.ready(function() {
        $cordovaGeolocation.getCurrentPosition()

          	.then(function(position) {

            $scope.lat = position.coords.latitude;
            $scope.long = position.coords.longitude;

 			}, function() {

            alert('ERREUR POS');
            
          	});
      });