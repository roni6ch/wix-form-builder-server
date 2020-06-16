"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const forms_controller_1 = require("./forms.controller");
const forms_service_1 = require("./forms.service");
const constants_1 = require("./constants");
const mongoose_1 = require("@nestjs/mongoose");
const forms_model_1 = require("./forms.model");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forRoot(`mongodb+srv://${constants_1.constants.mdbUser}:${constants_1.constants.mdbPass}@cluster0-rmhe5.gcp.mongodb.net/${constants_1.constants.collection}?retryWrites=true&w=majority`, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
                useFindAndModify: false,
            }),
            mongoose_1.MongooseModule.forFeature([{ name: 'forms', schema: forms_model_1.FormsSchema }]),
        ],
        controllers: [forms_controller_1.FormsController],
        providers: [forms_service_1.FormsService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=forms.module.js.map