export interface ApproveLeaveResponse {
  data: {
    id: number;
    leaveType: {
      id: number;
      name: string;
      deleted: boolean;
    };
    dateApplied: string;
  };
  meta: [];
  rels: [];
  
}
