
export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    categoryID: number;
    imageUrl: string;
    promotionId: number;
    brandId: number;
    quantity: number;
    createdAt:number;
    updatedAt: number;
    brand:{
      id: number;
      name: string;
      description: string;
      createdAt:number;
    updatedAt: number;
    products: {
      string:string;
    }
    }
  }
  
  
  // "brand": {
  //   "id": 0,
  //   "name": "string",
  //   "description": "string",
  //   "createdAt": "2023-05-09T08:04:47.108Z",
  //   "updatedAt": "2023-05-09T08:04:47.108Z",
  //   "products": [
  //     "string"
  //   ]
  // },
    // "createdAt": "2023-05-08T08:24:46.956Z",
    // "updatedAt": "2023-05-08T08:24:46.956Z",
    // "brand": {
    //   "id": 0,
    //   "name": "string",
    //   "description": "string",
    //   "createdAt": "2023-05-08T08:24:46.956Z",
    //   "updatedAt": "2023-05-08T08:24:46.956Z",
    //   "products": [
    //     "string"
    //   ]