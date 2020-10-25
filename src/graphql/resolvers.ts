import { executionAsyncId } from "async_hooks"
import { Difficulty, MutationResolvers } from "../generated/graphql"

const createRecipe: MutationResolvers['createRecipe'] = () => {
    // Check to make sure user is logged in
    // get user id and set it to variable
    // create a new recipe instance
    // save it to db
    // return the recipe
    return {
        id: '1234214532',
        name: '',
        image: '',
        video: '',
        ingredients: [],
        difficulty: Difficulty.Easy,
        servings: 1,
        duration: 30,
        steps: [],
        comments: [],
        categories: [],
        chef: {
            id: '3245678',
            name: 'rooiss',
            recipes: [],
            activity: [],
        }
    }
}

export const resolvers = {
    Query: {

    },
    Mutation: {
        createRecipe,
        updateRecipe: (_parent, args, _context, _info) => {
            // check if user is logged in
            // validate the arguments
            // check that the current user owns the recipe being updated
            // check that the recipe actually exists
            // get the typeorm instance of recipe
            // update necessary fields
            // save to the db
            // return the recipe

        }
    }
}