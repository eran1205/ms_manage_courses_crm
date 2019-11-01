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
 * @implements {ITopicModelService}
 */
const TopicService = {
    /**
     * @returns {Promise < ITopicModel[] >}
     * @memberof TopicService
     */
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield model_1.default.find({}).populate('area', 'name');
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    },
    /**
     * @param {string} id
     * @returns {Promise < ITopicModel >}
     * @memberof TopicService
     */
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const validate = validation_1.default.getTopic({
                    id
                });
                if (validate.error) {
                    throw new Error(validate.error.message);
                }
                return yield model_1.default.findOne({ _id: id }).populate('area', 'name');
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    },
    /**
     * @param {ITopicModel} topic
     * @returns {Promise < ITopicModel >}
     * @memberof TopicService
     */
    insert(body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const validate = validation_1.default.createTopic(body);
                if (validate.error) {
                    throw new Error(validate.error.message);
                }
                const topic = yield model_1.default.create(body);
                return topic;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    },
    /**
     * @param {string} id
     * @returns {Promise < ITopicModel >}
     * @memberof TopicService
     */
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const validate = validation_1.default.removeTopic({
                    id
                });
                if (validate.error) {
                    throw new Error(validate.error.message);
                }
                const topic = yield model_1.default.findOneAndDelete({ _id: id });
                return topic;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
};
exports.default = TopicService;
//# sourceMappingURL=service.js.map