export interface IEmployee {
    code:string;
    contactPreference:string;
    phoneNumber?:string;
    email?:string;
    name:string;
    gender:string;
    isActive:boolean;
    department:number;
    dateOfBirth:Date;
    photoPath:string;
    previewPhoto?:boolean;
    password?:string;
    confirmPassword?:string;
}
