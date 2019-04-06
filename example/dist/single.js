"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const _core_1 = require("curie-server/dist/@core");
const curie_server_1 = require("curie-server");
(() => __awaiter(this, void 0, void 0, function* () {
    yield _core_1.initApp(new curie_server_1.Server({
        port: 8000
    }));
    let Db = class Db extends curie_server_1.PostDBridge {
    };
    Db = __decorate([
        _core_1.database("postgres://postgres:postgres@127.0.0.1:5432/postgres")
    ], Db);
    let IndexListener = class IndexListener extends curie_server_1.Listener {
        onGET(req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                yield this.render(res, "index");
                return [null, false];
            });
        }
    };
    IndexListener = __decorate([
        _core_1.hookup("/")
    ], IndexListener);
    let Logger = class Logger extends curie_server_1.Middleware {
        intercept(req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                curie_server_1.c_log(curie_server_1.withTime(`[LOGGER]> ${req.method}: ${req.url || ""}`));
                return [null, true];
            });
        }
    };
    Logger = __decorate([
        _core_1.use()
    ], Logger);
}))();
//# sourceMappingURL=single.js.map