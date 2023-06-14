const cds = require('@sap/cds');
module.exports = function (){
    // This is an event handler
    this.after ('READ','Employees', each => {
        switch (each.level) {
            case 1:
                each.level_name = 'Associate Developer';
                break;

            case 2:
                each.level_name = 'Senior Developer';
                break;

            case 3:
                each.level_name = 'Associate Manager';
                break;

            case 4:
                each.level_name = 'Manager';
                break;

            case 5:
                each.level_name = 'Senior Manager';
                break;

            case 6:
                each.level_name = "Director";
                break;
        
            default:
                each.level_name = 'TBD';
                break;
        }
    });
}