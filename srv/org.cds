using { com.sd.org as my } from '../db/schema';

@path: 'service/org' // Entry point for oData service
service EmpService { // Service name
    entity Employees as projection on my.Employees; // oData entity - Employees
    entity Managers as projection on my.Managers; // oData entity - Managers
}