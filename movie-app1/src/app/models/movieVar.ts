export interface MovieVar {
    id:number;
    title:string;
    year:string;
    imageUrl?:string;
    description?:string;
    price?:number; // Price in INR
    isPurchased?:boolean; // Track if user has purchased this movie
}