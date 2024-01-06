export interface EntitlementResponse {
    
  data: [
    {
      id: number;
      employee: {
        empNumber: number;
        lastName: string;
        firstName: string;
        middleName: string;
        employeeId:string;
        terminationId: null;
      };
      entitlement: number;
      daysUsed: number;
      leaveType: {
        id: number;
        name: string;
        deleted: boolean;
      };
      fromDate: string;
      toDate: string;
      creditedDate: string;
      entitlementType: {
        id: number;
        name: string;
      };
      deleted: boolean;
      deletable: boolean;
    }
  ];
  meta: {
    total: number;
    sum: number;
    fromDate: string;
    toDate: string;
    empNumber: number;
  };
  rels: [];
  
}

