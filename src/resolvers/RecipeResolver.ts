import { ResponseType } from './../types/ResponseType'
import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import { recipeData } from './../database/recipeData'
import { Recipe } from "../entities/Recipe"
import { RecipeDataType } from '../types/RecipeDataType'

import {v4 as uuidv4} from 'uuid'

@Resolver()
export class RecipeResolver {
    @Query(() => [Recipe])
    getRecipes(): Array<Recipe> {
        return recipeData
    }

    @Mutation(() => ResponseType)
    createRecipe(@Arg("data") data : RecipeDataType): ResponseType {
        let newRecipe = { ...data, id: uuidv4()}

        if(newRecipe) {
					recipeData.push(newRecipe)

					return { 
						recipe: newRecipe,
						success: true
					}	
				}

				return {
					error: "could not create recipe",
					success: false
				}
    }

    @Mutation(() => ResponseType)
    deleteRecipe(
        @Arg("id") id: string
    ): ResponseType {
        let recipeIndex = recipeData.findIndex(recipe => recipe.id === id)

        if(recipeIndex > -1) {
            recipeData.splice(recipeIndex, 1)

            return {
							success: true
						}
        }

        return {
					success: false
				}
    }

		@Mutation(() => ResponseType)
		updateRecipe(
			@Arg("id") id: string, 
			@Arg("data") data: RecipeDataType
		): ResponseType{
			let recipeIndex = recipeData.findIndex((recipe) => recipe.id === id)

			if(recipeIndex > -1) {
				recipeData[recipeIndex] = { ...data, id }

				return {
					recipe: recipeData[recipeIndex],
					success: true
				}
			}

			return {
				success: false
			}
		}
}