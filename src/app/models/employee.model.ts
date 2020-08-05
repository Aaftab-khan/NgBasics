import { IEmployee } from '../services/IEmployee';

export class employee implements IEmployee{
code:string;
contactPreference:string;
phoneNumber:string;
email:string;
name:string;
gender:string;
isActive:boolean;
department:number;
dateOfBirth:Date;
photoPath:string;
previewPhoto:boolean = false;
password:string;
confirmPassword:string;
}