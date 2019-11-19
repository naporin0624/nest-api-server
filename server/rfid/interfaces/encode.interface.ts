export interface NumalabTagEncode {
    companies: CompanyEncode[];
  }
  
  interface CompanyEncode {
    name: string;
    bit: number;
    filters: string[];
    groups: Group[];
    createdAt: Date;
    updatedAt: Date;
  }
  
  interface Group {
    name: string;
    bit: number;
    filterId: number;   /// index of filters array 
    existingNum: number;
  }