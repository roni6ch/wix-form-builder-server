"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const forms_module_1 = require("./forms.module");
async function bootstrap() {
    const port = 3000;
    const app = await core_1.NestFactory.create(forms_module_1.AppModule, { cors: true });
    await app.listen(process.env.PORT || port);
    console.clear();
    console.log(`listening on ${port} :)`);
}
bootstrap();
//# sourceMappingURL=main.js.map