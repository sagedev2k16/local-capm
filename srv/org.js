const cds = require('@sap/cds');
const { SELECT, INSERT, UPDATE, DELETE } = cds.ql;
const { Managers } = cds.entities;

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

    this.before('CREATE', 'Employees', async (req) => {
        if(req.data.mgr) {
            let q = INSERT.into(Managers).entries(
                {
                    ID: req.data.mgr.ID,
                    name: req.data.mgr.name,
                    role: req.data.mgr.role,
                    practice: req.data.mgr.practice
                }
            );

            let iv = await cds.db.run(q);
            console.log("Manager added");    
        }
    });

    this.on ('error', (err, req) => {
        if(err.code === 'ASSERT_FORMAT') {
            err.message = `Format of ${err.target} is not correct. Expected format is ${err.args[1]}`;
        } else if(err.code === 'ASSERT_RANGE') {
            err.message = `Range of ${err.target} is not correct. Expected range is [${err.args[1]}-${err.args[2]}]`;
        }
    });
}