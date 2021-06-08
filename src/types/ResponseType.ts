import { Field, ObjectType } from 'type-graphql'
import { Recipe } from '../entities/Recipe'

@ObjectType()
export class ResponseType {
    @Field(() => Recipe, { nullable: true })
    recipe?: Recipe

    @Field({ nullable: true })
    error?: string

    @Field({ nullable: true })
    success?: boolean
}