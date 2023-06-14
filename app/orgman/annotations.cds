using EmpService as service from '../../srv/org';

annotate service.Employees with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'email',
            Value : email,
        },
        {
            $Type : 'UI.DataField',
            Label : 'name',
            Value : name,
        },
        {
            $Type : 'UI.DataField',
            Label : 'level',
            Value : level,
        },
        {
            $Type : 'UI.DataField',
            Label : 'level_name',
            Value : level_name,
        },
        {
            $Type : 'UI.DataField',
            Label : 'skills',
            Value : skills,
        },
    ]
);
annotate service.Employees with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'email',
                Value : email,
            },
            {
                $Type : 'UI.DataField',
                Label : 'name',
                Value : name,
            },
            {
                $Type : 'UI.DataField',
                Label : 'level',
                Value : level,
            },
            {
                $Type : 'UI.DataField',
                Label : 'level_name',
                Value : level_name,
            },
            {
                $Type : 'UI.DataField',
                Label : 'skills',
                Value : skills,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
    ]
);
