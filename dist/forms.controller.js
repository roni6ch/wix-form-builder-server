"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormsController = void 0;
const common_1 = require("@nestjs/common");
const forms_service_1 = require("./forms.service");
let FormsController = class FormsController {
    constructor(fs) {
        this.fs = fs;
        this.validateParams = params => {
            for (const key in params) {
                const isValid = typeof key !== 'undefined' &&
                    key !== null &&
                    typeof params[key] !== 'undefined' &&
                    params[key] !== null &&
                    params[key] !== '';
                if (!isValid)
                    return false;
            }
            return true;
        };
    }
    async getFormList() {
        return await this.fs.getFormList();
    }
    async addFormList(form) {
        if (this.validateParams(form))
            return await this.fs.addFormList(form);
    }
    async formByID(params) {
        if (this.validateParams(params))
            return await this.fs.formByID(params.formID);
    }
    async submitForm(form) {
        if (this.validateParams(form))
            return await this.fs.submitForm(form);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FormsController.prototype, "getFormList", null);
__decorate([
    common_1.Put(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FormsController.prototype, "addFormList", null);
__decorate([
    common_1.Get('/formByID'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FormsController.prototype, "formByID", null);
__decorate([
    common_1.Put('/submitForm'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FormsController.prototype, "submitForm", null);
FormsController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [forms_service_1.FormsService])
], FormsController);
exports.FormsController = FormsController;
//# sourceMappingURL=forms.controller.js.map