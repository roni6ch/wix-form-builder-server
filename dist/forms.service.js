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
exports.FormsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let FormsService = class FormsService {
    constructor(db) {
        this.db = db;
    }
    async getFormList() {
        try {
            const res = await this.db.find().select({ "_id": 0, "createAt": 0, "updateAt": 0, "dynamicInputs": 0 }).exec();
            if (res)
                return res;
            else {
                console.log('error in getFormList service');
                return false;
            }
        }
        catch (error) {
            console.log('error in getFormList service', error);
            return new common_1.HttpException('ExceptionFailed', common_1.HttpStatus.EXPECTATION_FAILED);
        }
    }
    async addFormList(form) {
        const newForm = new this.db(form);
        try {
            const res = await newForm.save();
            if (res)
                return true;
            else {
                console.log('error in addFormList service');
                return false;
            }
        }
        catch (error) {
            console.log('error in addFormList service', error);
            return new common_1.HttpException('ExceptionFailed', common_1.HttpStatus.EXPECTATION_FAILED);
        }
    }
    async formByID(id) {
        try {
            const res = await this.db.findOne({ id }).select({ "_id": 0, "createAt": 0, "updateAt": 0 }).exec();
            if (res)
                return res;
            else {
                console.log('there is no ID in DB');
                return false;
            }
        }
        catch (error) {
            console.log('error in formByID service', error);
            return new common_1.HttpException('ExceptionFailed', common_1.HttpStatus.EXPECTATION_FAILED);
        }
    }
    async submitForm(form) {
        let id = form.id;
        const formData = [];
        for (let [name, value] of Object.entries(form.data)) {
            formData.push({ name, value });
        }
        try {
            let res = await this.db.findOneAndUpdate({ id }, { "$push": { "submissions": formData } }).exec();
            if (res)
                return res;
            else {
                console.log('error in submitForm service');
                return false;
            }
        }
        catch (error) {
            console.log('error in submitForm service', error);
            return new common_1.HttpException('ExceptionFailed', common_1.HttpStatus.EXPECTATION_FAILED);
        }
    }
};
FormsService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('forms')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], FormsService);
exports.FormsService = FormsService;
//# sourceMappingURL=forms.service.js.map