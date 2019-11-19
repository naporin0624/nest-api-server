export interface CompanyEncode {
  name: string;
  companyId: number;
  filters: string[];
  groups: Group[];
  createdAt: Date;
  updatedAt: Date;
}

interface Group {
  name: string;
  id: number;
  // index of filters array
  filterIndex: number;
  existingNum: number;
}
