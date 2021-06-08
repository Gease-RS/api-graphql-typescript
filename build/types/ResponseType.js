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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseType = void 0;
const type_graphql_1 = require("type-graphql");
const Recipe_1 = require("../entities/Recipe");
let ResponseType = class ResponseType {
};
__decorate([
    type_graphql_1.Field(() => Recipe_1.Recipe, { nullable: true }),
    __metadata("design:type", Recipe_1.Recipe)
], ResponseType.prototype, "recipe", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], ResponseType.prototype, "error", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", Boolean)
], ResponseType.prototype, "success", void 0);
ResponseType = __decorate([
    type_graphql_1.ObjectType()
], ResponseType);
exports.ResponseType = ResponseType;
