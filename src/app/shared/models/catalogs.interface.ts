export interface Routes {
  routeId: number;
  routeName: string;
}

export interface Brands {
  brandId: number;
  brandName: string;
}
  
export interface Branches {
  branchId: number;
  branchName: string;
  brandId: number;
}
  