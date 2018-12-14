    // Call onDeviceReady when Cordova is loaded.
    //
    // At this point, the document has loaded but cordova-2.4.0.js has not.
    // When Cordova is loaded and talking with the native device,
    // it will call the event `deviceready`.
    //
	
    // Wait for Cordova to load
    // 
    document.addEventListener("deviceready", onDeviceReady, false);
    
    // Cordova is loaded and it is now safe to make calls Cordova methods
    //
    function onDeviceReady() {
		document.addEventListener("offline", onOffline, false);
		//document.addEventListener('online',onOnline,false);
		//checkConnection();
    }
	
	function checkConnection() {
		var networkState = navigator.connection.type;
	
		var states = {};
		states[Connection.UNKNOWN]  = 'Unknown connection';
		states[Connection.ETHERNET] = 'Ethernet connection';
		states[Connection.WIFI]     = 'WiFi connection';
		states[Connection.CELL_2G]  = 'Cell 2G connection';
		states[Connection.CELL_3G]  = 'Cell 3G connection';
		states[Connection.CELL_4G]  = 'Cell 4G connection';
		states[Connection.CELL]     = 'Cell generic connection';
		states[Connection.NONE]     = 'No network connection';
	
		alert('Connection type: ' + states[networkState]);
		//window.location = "login.html";
	}
	
	function onOnline() {
		alert("Now you're connected");
	}
   
    function onOffline() {
		alert("Please check your internet connection");
		window.location = "conexion.html";
    }

