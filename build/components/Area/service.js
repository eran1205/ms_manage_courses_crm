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
 * @export
 * @implements {IAreaModelService}
 */
const AreaService = {
    /**
     * @returns {Promise < IAreaModel[] >}
     * @memberof AreaService
     */
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield model_1.default.find({}).populate('domain');
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    },
    /**
     * @param {string} id
     * @returns {Promise < IAreaModel >}
     * @memberof AreaService
     */
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const validate = validation_1.default.getArea({
                    id
                });
                if (validate.error) {
                    throw new Error(validate.error.message);
                }
                return yield model_1.default.findOne({ _id: id }).populate('domain');
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    },
    /**
     * @param {IAreaModel} area
     * @returns {Promise < IAreaModel >}
     * @memberof AreaService
     */
    insert(body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const validate = validation_1.default.createArea(body);
                if (validate.error) {
                    throw new Error(validate.error.message);
                }
                const area = yield model_1.default.create(body);
                return area;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    },
    /**
     * @param {string} name
     * @returns {Promise < IAreaModel >}
     * @memberof AreaService
     */
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const validate = validation_1.default.removeArea({
                    id
                });
                if (validate.error) {
                    throw new Error(validate.error.message);
                }
                const area = yield model_1.default.findOneAndDelete({ _id: id }).populate('domain');
                return area;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
};
exports.default = AreaService;
//# sourceMappingURL=service.js.map