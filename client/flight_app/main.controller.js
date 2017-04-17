sap.ui.controller("flight_app.main", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf flight_app.main
*/
	onInit: function() {
		var serviceUrl = "/odata/";
		var oModel = new sap.ui.model.odata.v2.ODataModel(serviceUrl);
		oModel.setUseBatch(false);
		this.getView().setModel(oModel);
	},

	createPopup : function(){

		var cancelButton = new sap.m.Button({
			text: "Cancel",
			type: sap.m.ButtonType.Reject,
			press : function () {
				sap.ui.getCore().byId("Popup").destroy();
			}
		});

		var saveButton = new sap.m.Button({
			text: "Save",
			type: sap.m.ButtonType.Accept,
			press: function () {
				var serviceUrl = "/odata/";
				var oModel = new sap.ui.model.odata.v2.ODataModel(serviceUrl);
				oModel.setUseBatch(false);

				var oNewFlight = {
					ID: null,
					MANDT : 301,
					CARRID : sap.ui.getCore().byId("carrid").getValue(),
					CONNID : sap.ui.getCore().byId("connid").getValue(),
					FLDATE : sap.ui.getCore().byId("fldate").getDateValue(),
					PRICE : sap.ui.getCore().byId("price").getValue(),
					CURRENCY : sap.ui.getCore().byId("currency").getValue(),
					PLANETYPE : sap.ui.getCore().byId("planetype").getValue(),
					SEATSMAX : parseInt(sap.ui.getCore().byId("seatsmax").getValue()),
					SEATSOCC : parseInt(sap.ui.getCore().byId("seatsocc").getValue()),
					PAYMENTSUM : sap.ui.getCore().byId("paymentsum").getValue(),
				};

				oModel.create('/Sflights', oNewFlight, {
					success : function (oData, oResponse) {
						sap.m.MessageToast.show("Flight successfully created!")
						sap.ui.getCore().byId("Popup").destroy();
					},
					error : function (oError) {
						sap.m.MessageToast.show("Error during flight creation")
					}
				});
			}
		});

		var oDialog = new sap.m.Dialog("Popup", {
			title : "Create Flight",
			modal : true,
			contentWidth : "1em",
			buttons : [saveButton, cancelButton],
			content : [
				new sap.m.Label({text : "Airline ID"}),
				new sap.m.Input({maxLength : 20, id : "carrid", placeholder : "e.g. LH"}),

				new sap.m.Label({text : "Connection ID"}),
				new sap.m.Input({maxLength : 20, id : "connid", placeholder : "e.g. 11"}),

				new sap.m.Label({text : "Date"}),
				new sap.m.DateTimeInput({id : "fldate", placeholder : "e.g. Jul 15, 2016"}),

				new sap.m.Label({text : "Price"}),
				new sap.m.Input({maxLength : 20, id : "price", placeholder : "e.g. 111.11"}),

				new sap.m.Label({text : "Currency"}),
				new sap.m.Input({maxLength : 20, id : "currency", placeholder : "e.g. USD"}),

				new sap.m.Label({text : "Plane Type"}),
				new sap.m.Input({maxLength : 20, id : "planetype", placeholder : "e.g. 747-300"}),

				new sap.m.Label({text : "Max Seats"}),
				new sap.m.Input({maxLength : 20, id : "seatsmax", placeholder : "e.g. 300"}),

				new sap.m.Label({text : "Booked Seats"}),
				new sap.m.Input({maxLength : 20, id : "seatsocc", placeholder : "e.g. 250"}),

				new sap.m.Label({text : "Payment Sum"}),
				new sap.m.Input({maxLength : 20, id : "paymentsum", placeholder : "e.g. 1111.11"}),
			]
		});
		sap.ui.getCore().byId("Popup").open();
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
