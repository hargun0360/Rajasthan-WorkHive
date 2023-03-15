import { IncidentModal } from "classes/incidentsModal";

export const getConvertedIncident = (obj) => {

    if(getValidatedData(obj, 'object', true)){

        let id=getValidatedData(obj.id,'number');
        let incidentName=getValidatedData(obj.incidentName);
        let incidentType=getValidatedData(obj.incidentType);
        let incidentStatus=getValidatedData(obj.incidentStatus);
        let problem=getValidatedData(obj.problem);
        let project=getValidatedData(obj.project);
        let assignedToEmail=getValidatedData(obj.assignedToEmail);
        let actualEndDate=getValidatedData(obj.actualEndDate);
        let expectedEndDate=getValidatedData(obj.expectedEndDate);
        let active=getValidatedData(obj.active,'boolean');
        let createdDate=getValidatedData(obj.createdDate);
        return new IncidentModal(id,incidentName,incidentType,incidentStatus,problem,project,assignedToEmail,actualEndDate,expectedEndDate,active,createdDate)
    }

    return new IncidentModal();
}