using { com.sd.org as my } from '../db/schema';

@path: 'service/org' // Entry point for oData service
service EmpService { // Service name
    entity Employees as projection on my.Employees; // oData entity - Employees
    entity Teams as projection on my.Teams; // oData entity - Employees

    // @readonly
    // @(restrict: [
    //     {grant: 'READ', to: 'Watcher'}
    // ])
    entity Managers as projection on my.Managers 
        excluding { createdBy, modifiedBy, createdAt, modifiedAt }; // oData entity - Managers
}