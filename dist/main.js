"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const port = process.env.PORT || 4000;
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.enableCors();
    await app.listen(port);
    console.log(`database in ${process.env.MONGODB_URI}`);
    console.log('el servidor esta correindo en el puerto ' + port);
}
bootstrap();
//# sourceMappingURL=main.js.map