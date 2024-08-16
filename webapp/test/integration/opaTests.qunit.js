sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'manage/po/managepo/test/integration/FirstJourney',
		'manage/po/managepo/test/integration/pages/POsList',
		'manage/po/managepo/test/integration/pages/POsObjectPage',
		'manage/po/managepo/test/integration/pages/PurchaseOrderItemsObjectPage'
    ],
    function(JourneyRunner, opaJourney, POsList, POsObjectPage, PurchaseOrderItemsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('manage/po/managepo') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePOsList: POsList,
					onThePOsObjectPage: POsObjectPage,
					onThePurchaseOrderItemsObjectPage: PurchaseOrderItemsObjectPage
                }
            },
            opaJourney.run
        );
    }
);