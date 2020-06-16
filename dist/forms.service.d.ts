import { HttpException } from '@nestjs/common';
import { Model } from 'mongoose';
import { IForms } from './forms.model';
export declare class FormsService {
    private readonly db;
    constructor(db: Model<IForms>);
    getFormList(): Promise<IForms[] | HttpException | boolean>;
    addFormList(form: IForms): Promise<boolean | HttpException>;
    formByID(id: string): Promise<IForms | HttpException | boolean>;
    submitForm(form: any): Promise<false | IForms | HttpException>;
}
