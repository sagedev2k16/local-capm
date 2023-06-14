namespace com.sd.org;
using { managed } from '@sap/cds/common';

entity Employees : managed { // managed - createdAt, createdBy, modifiedAt, modifiedBy
    key ID      : UUID  @(Core.Computed : true); // Primary key. Auto computed by CAP
    email       : String(100) @assert.format : '.+@abcdzxy[.]com'; // String (length = 100)
    name        : String(50) @mandatory;
    mgr         : Association to Managers; // One Employee mapped to One Manager
    level       : Integer @assert.range: [1, 6];
    level_name  : String(10);
    skills      : String;
}

entity Managers : managed {
    key ID       : UUID  @(Core.Computed : true);
    name         : String(50);
    practice     : String(20);
    role         : String(50);
    emps         : Association to many Employees on emps.mgr = $self; // One Manager mapped to multiple employees
}