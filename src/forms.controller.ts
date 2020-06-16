import { Controller, Get, Body, Query, Put } from '@nestjs/common';
import { FormsService } from './forms.service';

@Controller()
export class FormsController {
  constructor(private readonly fs: FormsService) {}
  @Get()
  async getFormList() {
    return await this.fs.getFormList();
  }

  @Put()
  async addFormList(@Body() form) {
    if (this.validateParams(form)) return await this.fs.addFormList(form);
  }

  @Get('/formByID')
  async formByID(@Query() params) {
    if (this.validateParams(params))
      return await this.fs.formByID(params.formID);
  }

  @Put('/submitForm')
  async submitForm(@Body() form) {
    if (this.validateParams(form)) return await this.fs.submitForm(form);
  }

  validateParams = params => {
    for (const key in params) {
      const isValid =
        typeof key !== 'undefined' &&
        key !== null &&
        typeof params[key] !== 'undefined' &&
        params[key] !== null &&
        params[key] !== '';
      if (!isValid) return false;
    }
    return true;
  };
}
