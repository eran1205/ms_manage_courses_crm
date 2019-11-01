"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
const validation_1 = require("./validation");
/**
 * @export;
 * @implements {IDomainModelService}
 */
const DomainService = {
    /**
     * @returns {Promise < IDomainModel[] >}
     * @memberof DomainService
     */
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield model_1.default.find({});
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    },
    /**
     * @param {string} name
     * @returns {Promise < IDomainModel >}
     * @memberof DomainService
     */
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const validate = validation_1.default.getDomain({
                    id
                });
                if (validate.error) {
                    throw new Error(validate.error.message);
                }
                return yield model_1.default.findOne({
                    _id: id
                });
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    },
    /**
     * @param {IDomainModel} domain
     * @returns {Promise < IDomainModel >}
     * @memberof DomainService
     */
    insert(body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const validate = validation_1.default.createDomain(body);
                if (validate.error) {
                    throw new Error(validate.error.message);
                }
                const domain = yield model_1.default.create(body);
                return domain;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    },
    /**
     * @param {string} id
     * @returns {Promise < IDomainModel >}
     * @memberof DomainService
     */
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const validate = validation_1.default.removeDomain({ id });
                if (validate.error) {
                    throw new Error(validate.error.message);
                }
                const domain = yield model_1.default.findOneAndRemove({
                    _id: id
                });
                return domain;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
};
exports.default = DomainService;
//# sourceMappingURL=service.js.map