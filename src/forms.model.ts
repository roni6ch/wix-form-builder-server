import * as mongoose from 'mongoose';
const autoincrement = require('simple-mongoose-autoincrement');

export const FormsSchema = new mongoose.Schema(
  {
    id: { type: String },
    title: { type: String, required: true },
    dynamicInputs: { type: Array, required: true },
    submissions: { type: [Array], required: true },
  },
  { collection: 'forms' },
);
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
FormsSchema.plugin(autoincrement, { field: 'id' });
