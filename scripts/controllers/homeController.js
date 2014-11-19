"use strict";
myBookApp.controller('homeController', ['$scope','$location','ngTableParams', function($scope,$location,ngTableParams) {
	
	var feedList = [];	
	var feed = { _id:undefined, _type:undefined, _time:undefined};
	var feedCount = 0;

	Feed.protype = {
		getId: function() { return this._id;},
		getType: function() { return this._type;}
	};

	function Feed(id, type, time) {
		this._id = id;
		this._type = type;
		this._time = time;
	}

    $scope.tableParams = new ngTableParams({
        page: 1,            // show first page
        count: 10           // count per page
    }, {
        total: feedList.length, // length of data
        getData: function($defer, params) {
            $defer.resolve(feedList.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        }
    });
	
	
	 $scope.logout = function() {       
		$location.path("login");	
     };
	 
	 $scope.addPost = function() {  	
		var currentTime = new Date();	
		var createdTime = currentTime.getMonth() + 1+"/"+currentTime.getDate()+"/"+currentTime.getFullYear()+" "+convertTimeByDate(currentTime);	
        var feedObjectType ="text";
		var feedObject;
	
		if(isValidUrlText(feedValue)) {
		 feedObjectType ="url";
		}	
		feedCount++;		
		var feed = new Feed(feedCount, feedObjectType, createdTime)
		feedObject = Object.create(feed);
		feedObject.content = $scope.feedValue ;
		$scope.createFeed(feedObject);			
     };
	 
	 $scope.createFeed = function(feed) {
		feedList = feedList || [];
		feedList.push(feed);			
	};
	
	function isValidUrlText(feedValue) {
	  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
	  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
	  '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
	  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
	  '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
	  '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
	  if(!pattern.test(feedValue)) {
		return false;
	  } else {
		return true;
	  }
	}
	
	function convertTimeByDate(date) {
	  var hours = date.getHours();
	  var minutes = date.getMinutes();
	  var ampm = hours >= 12 ? 'pm' : 'am';
	  hours = hours % 12;
	  hours = hours ? hours : 12; 
	  minutes = minutes < 10 ? '0'+minutes : minutes;
	  var strTime = hours + ':' + minutes + ' ' + ampm;
	  return strTime;
	};



}]);