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
exports.RecipeResolver = void 0;
const ResponseType_1 = require("./../types/ResponseType");
const type_graphql_1 = require("type-graphql");
const recipeData_1 = require("./../database/recipeData");
const Recipe_1 = require("../entities/Recipe");
const RecipeDataType_1 = require("../types/RecipeDataType");
const uuid_1 = require("uuid");
let RecipeResolver = class RecipeResolver {
    getRecipes() {
        return recipeData_1.recipeData;
    }
    createRecipe(data) {
        let newRecipe = { ...data, id: uuid_1.v4() };
        if (newRecipe) {
            recipeData_1.recipeData.push(newRecipe);
            return {
                recipe: newRecipe,
                success: true
            };
        }
        return {
            error: "could not create recipe",
            success: false
        };
    }
    deleteRecipe(id) {
        let recipeIndex = recipeData_1.recipeData.findIndex(recipe => recipe.id === id);
        if (recipeIndex > -1) {
            recipeData_1.recipeData.splice(recipeIndex, 1);
            return {
                success: true
            };
        }
        return {
            success: false
        };
    }
    updateRecipe(id, data) {
        let recipeIndex = recipeData_1.recipeData.findIndex((recipe) => recipe.id === id);
        if (recipeIndex > -1) {
            recipeData_1.recipeData[recipeIndex] = { ...data, id };
            return {
                recipe: recipeData_1.recipeData[recipeIndex],
                success: true
            };
        }
        return {
            success: false
        };
    }
};
__decorate([
    type_graphql_1.Query(() => [Recipe_1.Recipe]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], RecipeResolver.prototype, "getRecipes", null);
__decorate([
    type_graphql_1.Mutation(() => ResponseType_1.ResponseType),
    __param(0, type_graphql_1.Arg("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RecipeDataType_1.RecipeDataType]),
    __metadata("design:returntype", ResponseType_1.ResponseType)
], RecipeResolver.prototype, "createRecipe", null);
__decorate([
    type_graphql_1.Mutation(() => ResponseType_1.ResponseType),
    __param(0, type_graphql_1.Arg("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", ResponseType_1.ResponseType)
], RecipeResolver.prototype, "deleteRecipe", null);
__decorate([
    type_graphql_1.Mutation(() => ResponseType_1.ResponseType),
    __param(0, type_graphql_1.Arg("id")),
    __param(1, type_graphql_1.Arg("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, RecipeDataType_1.RecipeDataType]),
    __metadata("design:returntype", ResponseType_1.ResponseType)
], RecipeResolver.prototype, "updateRecipe", null);
RecipeResolver = __decorate([
    type_graphql_1.Resolver()
], RecipeResolver);
exports.RecipeResolver = RecipeResolver;
