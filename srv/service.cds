using {my.dataModel as my} from '../db/schema';

service EscalationManagementService @(path: 'ems') {
    entity Escalations as projection on my.Escalations actions {
        action resolve();
    };

    entity Statuses    as projection on my.Statuses;
    entity Comments    as projection on my.Comments;

    event escalationCreated : {
        escalationID : type of Escalations : ID;
        createdBy    : String;
        title        : String;
    }
}
