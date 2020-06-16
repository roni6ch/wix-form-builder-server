import * as mongoose from 'mongoose';
export declare const FormsSchema: mongoose.Schema<any>;
export interface IForms extends mongoose.Document {
    id: string;
    title: string;
    dynamicInputs: IDynamicInput[];
    submissions: [ISubmissions[]];
}
export interface IDynamicInput {
    label: string;
    name: string;
    type: string;
}
export interface ISubmissions {
    name: string;
    value: string;
}
