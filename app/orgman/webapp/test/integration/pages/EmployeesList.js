sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'com.sg.org.orgman',
            componentId: 'EmployeesList',
            entitySet: 'Employees'
        },
        CustomPageDefinitions
    );
});