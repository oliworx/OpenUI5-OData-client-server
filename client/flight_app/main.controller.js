sap.ui.controller("flight_app.main", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf flight_app.main
*/
	onInit: function() {
		serviceUrl = "http://localhost:3000/odata/";
		var oModel = new sap.ui.model.odata.v2.ODataModel(serviceUrl);
		oModel.setUseBatch(false);
		this.getView().setModel(oModel);
	},

	createPopup : function(){
		alert('Funktion ist noch nicht verfügbar');
	}

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf flight_app.main
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf flight_app.main
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf flight_app.main
*/
//	onExit: function() {
//
//	}

});
