namespace com.sd.org;
using { managed } from '@sap/cds/common';

entity Employees : managed { // managed - createdAt, createdBy, modifiedAt, modifiedBy
    key ID      : UUID  @(Core.Computed : true); // Primary key. Auto computed by CAP
    email       : String(100) @assert.format : '.+@abcdzxy[.]com'; // String (length = 100)
    name        : String(100) @mandatory;
    level       : Integer @assert.range: [1, 6];
    level_name  : String(100);
    skills      : String;
    team        : Association to Teams;
    mgr         : Association to Managers; // One Employee mapped to One Manager
}

entity Managers : managed {
    key ID       : UUID  @(Core.Computed : true);
    name         : String(100);
    practice     : String(100);
    role         : String(100);
    emps         : Association to many Employees on emps.mgr = $self; // One Manager mapped to multiple employees
}

entity Teams : managed {
    key ID       : UUID   @(Core.Computed: true);
    name         : String(100);
    Emps         : Composition of many Employees on Emps.team = $self;
}