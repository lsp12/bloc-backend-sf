"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bcryptCompare = exports.bcryptPassword = void 0;
const bcrypt = require("bcrypt");
const bcryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};
exports.bcryptPassword = bcryptPassword;
const bcryptCompare = async (password, hash) => {
    return bcrypt.compare(password, hash);
};
exports.bcryptCompare = bcryptCompare;
//# sourceMappingURL=bcryptUser.js.map