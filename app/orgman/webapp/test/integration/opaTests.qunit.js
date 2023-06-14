sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/sg/org/orgman/test/integration/FirstJourney',
		'com/sg/org/orgman/test/integration/pages/EmployeesList',
		'com/sg/org/orgman/test/integration/pages/EmployeesObjectPage'
    ],
    function(JourneyRunner, opaJourney, EmployeesList, EmployeesObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/sg/org/orgman') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheEmployeesList: EmployeesList,
					onTheEmployeesObjectPage: EmployeesObjectPage
                }
            },
            opaJourney.run
        );
    }
);