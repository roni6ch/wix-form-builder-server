import { FormsService } from './forms.service';
export declare class FormsController {
    private readonly fs;
    constructor(fs: FormsService);
    getFormList(): Promise<boolean | import("./forms.model").IForms[] | import("@nestjs/common").HttpException>;
    addFormList(form: any): Promise<boolean | import("@nestjs/common").HttpException>;
    formByID(params: any): Promise<boolean | import("./forms.model").IForms | import("@nestjs/common").HttpException>;
    submitForm(form: any): Promise<false | import("./forms.model").IForms | import("@nestjs/common").HttpException>;
    validateParams: (params: any) => boolean;
}
