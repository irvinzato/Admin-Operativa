export interface PagesCashDifference {
  currentPage: number;
  resultsInPage: number;
  totalPages: number;
  totalResults: number;
  results: CashDifference[];
}

export interface CashDifference {
  internalId: number;
  date: string;
  brandId?: number;
  brandName: string;
  branchId?: number;
  branchName: string;
  routeId?: number;
  routeName: string;
  groupId?: number;
  groupName: string;
  gapToPicking: number;
  gapToGive: number;
  gapToCommission: number;
  operationCaptureId?: number;
  operationCapturaCode: string;
  detailOperation?: CapturingOperationsPNC[];
}

export interface CapturingOperationsPNC {
  property: string;
  statusProperty: number;
  operationCase: string;
  groupId: number;
  groupName: string;
  pickingRouteTotal: number;
  commissionLDGTotal: number;
  giveRouteTotal: number;
  gapRouteTotal: number;
  recoveryRouteTotal: number;
  pickingPanacreditTotal: number;
  commissionPanacreditTotalLDG: number;
  givePanacreditTotal: number;
  gapPanacreditTotal: number;
  recoveryPanacreditTotal: number;
}