import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IForms } from './forms.model';

@Injectable()
export class FormsService {
  constructor(@InjectModel('forms') private readonly db: Model<IForms>) {}

  async getFormList(): Promise<IForms[] | HttpException | boolean> {
    try {
      const res = await this.db.find().select({  "_id": 0, "createAt": 0, "updateAt": 0, "dynamicInputs": 0}).exec();
      if (res) return res;
      else {
        console.log('error in getFormList service');
        return false;
      }
    } catch (error) {
      console.log('error in getFormList service', error);
      return new HttpException(
        'ExceptionFailed',
        HttpStatus.EXPECTATION_FAILED,
      );
    }
  }

  async addFormList(form: IForms) {
    const newForm = new this.db(form);
    try {
      const res = await newForm.save();
      if (res) return true;
      else {
        console.log('error in addFormList service');
        return false;
      }
    } catch (error) {
      console.log('error in addFormList service', error);
      return new HttpException(
        'ExceptionFailed',
        HttpStatus.EXPECTATION_FAILED,
      );
    }
  }

  async formByID(id: string): Promise<IForms | HttpException | boolean> {
    try {
      const res = await this.db.findOne({id}).select({  "_id": 0, "createAt": 0, "updateAt": 0}).exec();
      if (res) return res;
      else {
        console.log('there is no ID in DB');
        return false;
      }
    } catch (error) {
      console.log('error in formByID service', error);
      return new HttpException(
        'ExceptionFailed',
        HttpStatus.EXPECTATION_FAILED,
      );
    }
  }

  async submitForm(form) {
    let id = form.id;
    const formData = [];
    for (let [name, value] of Object.entries(form.data)) {
      formData.push({ name, value });
    }
    try {
      let res = await this.db.findOneAndUpdate({ id }, { "$push": { "submissions": formData }}).exec();

      if (res) return res;
      else {
        console.log('error in submitForm service');
        return false;
      }
    } catch (error) {
      console.log('error in submitForm service', error);
      return new HttpException(
        'ExceptionFailed',
        HttpStatus.EXPECTATION_FAILED,
      );
    }
  }
  
}
