import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
  recipes: Array<Recipe>;
  activity: Array<Activity>;
};

export type Activity = {
  __typename?: 'Activity';
  content: Scalars['String'];
};

export type Recipe = {
  __typename?: 'Recipe';
  id: Scalars['ID'];
  name: Scalars['String'];
  image: Scalars['String'];
  video?: Maybe<Scalars['String']>;
  ingredients: Array<RecipeIngredient>;
  difficulty: Difficulty;
  servings: Scalars['Int'];
  /** in minutes */
  duration: Scalars['Int'];
  steps: Array<RecipeStep>;
  comments: Array<RecipeComment>;
  categories: Array<Scalars['String']>;
  chef: User;
};

export type RecipeComment = {
  __typename?: 'RecipeComment';
  id: Scalars['ID'];
  user: User;
  content: Scalars['String'];
};

export type RecipeIngredient = {
  __typename?: 'RecipeIngredient';
  quantity: Scalars['String'];
  name: Scalars['String'];
};

export type RecipeStep = {
  __typename?: 'RecipeStep';
  id: Scalars['ID'];
  content: Scalars['String'];
};

export enum Difficulty {
  Easy = 'EASY',
  Medium = 'MEDIUM',
  Hard = 'HARD'
}

export type Category = {
  __typename?: 'Category';
  id: Scalars['ID'];
  label: Scalars['String'];
};

export type Ingredient = {
  __typename?: 'Ingredient';
  id: Scalars['ID'];
  label: Scalars['String'];
};

export type DeleteRecipeResponse = {
  __typename?: 'DeleteRecipeResponse';
  success: Scalars['Boolean'];
  errorCode: Scalars['String'];
};

export type CommentCreate = {
  recipeId: Scalars['ID'];
  content: Scalars['String'];
};

export type RecipeUpdate = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  video?: Maybe<Scalars['String']>;
  ingredients?: Maybe<Array<RecipeIngredient>>;
  difficulty?: Maybe<Difficulty>;
  servings?: Maybe<Scalars['Int']>;
  /** in minutes */
  duration?: Maybe<Scalars['Int']>;
  steps?: Maybe<Array<RecipeStep>>;
  comments?: Maybe<Array<RecipeComment>>;
  categories?: Maybe<Array<Scalars['String']>>;
  chef?: Maybe<User>;
};

export type Query = {
  __typename?: 'Query';
  recipes?: Maybe<Array<Maybe<Recipe>>>;
  recipe?: Maybe<Recipe>;
  comments: Array<RecipeComment>;
  categories: Array<Category>;
  ingredients: Array<Ingredient>;
};


export type QueryRecipeArgs = {
  recipeId: Scalars['String'];
};


export type QueryCategoriesArgs = {
  searchTerm: Scalars['String'];
};


export type QueryIngredientsArgs = {
  searchTerm: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createRecipe: Recipe;
  createRecipeStep: RecipeStep;
  updateRecipe: Recipe;
  uploadImage: Scalars['String'];
  uploadVideo: Scalars['String'];
  deleteRecipe: DeleteRecipeResponse;
  createUser: User;
  addComment: RecipeComment;
};


export type MutationUpdateRecipeArgs = {
  input: RecipeUpdate;
};


export type MutationUploadImageArgs = {
  filename: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationUploadVideoArgs = {
  filename: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationDeleteRecipeArgs = {
  recipeId: Scalars['ID'];
};


export type MutationCreateUserArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
  email: Scalars['String'];
};


export type MutationAddCommentArgs = {
  input: CommentCreate;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  User: ResolverTypeWrapper<User>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Activity: ResolverTypeWrapper<Activity>;
  Recipe: ResolverTypeWrapper<Recipe>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  RecipeComment: ResolverTypeWrapper<RecipeComment>;
  RecipeIngredient: ResolverTypeWrapper<RecipeIngredient>;
  RecipeStep: ResolverTypeWrapper<RecipeStep>;
  Difficulty: Difficulty;
  Category: ResolverTypeWrapper<Category>;
  Ingredient: ResolverTypeWrapper<Ingredient>;
  DeleteRecipeResponse: ResolverTypeWrapper<DeleteRecipeResponse>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CommentCreate: CommentCreate;
  RecipeUpdate: RecipeUpdate;
  Query: ResolverTypeWrapper<{}>;
  Mutation: ResolverTypeWrapper<{}>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  User: User;
  ID: Scalars['ID'];
  String: Scalars['String'];
  Activity: Activity;
  Recipe: Recipe;
  Int: Scalars['Int'];
  RecipeComment: RecipeComment;
  RecipeIngredient: RecipeIngredient;
  RecipeStep: RecipeStep;
  Category: Category;
  Ingredient: Ingredient;
  DeleteRecipeResponse: DeleteRecipeResponse;
  Boolean: Scalars['Boolean'];
  CommentCreate: CommentCreate;
  RecipeUpdate: RecipeUpdate;
  Query: {};
  Mutation: {};
}>;

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  recipes?: Resolver<Array<ResolversTypes['Recipe']>, ParentType, ContextType>;
  activity?: Resolver<Array<ResolversTypes['Activity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ActivityResolvers<ContextType = any, ParentType extends ResolversParentTypes['Activity'] = ResolversParentTypes['Activity']> = ResolversObject<{
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RecipeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Recipe'] = ResolversParentTypes['Recipe']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  video?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ingredients?: Resolver<Array<ResolversTypes['RecipeIngredient']>, ParentType, ContextType>;
  difficulty?: Resolver<ResolversTypes['Difficulty'], ParentType, ContextType>;
  servings?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  duration?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  steps?: Resolver<Array<ResolversTypes['RecipeStep']>, ParentType, ContextType>;
  comments?: Resolver<Array<ResolversTypes['RecipeComment']>, ParentType, ContextType>;
  categories?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  chef?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RecipeCommentResolvers<ContextType = any, ParentType extends ResolversParentTypes['RecipeComment'] = ResolversParentTypes['RecipeComment']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RecipeIngredientResolvers<ContextType = any, ParentType extends ResolversParentTypes['RecipeIngredient'] = ResolversParentTypes['RecipeIngredient']> = ResolversObject<{
  quantity?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RecipeStepResolvers<ContextType = any, ParentType extends ResolversParentTypes['RecipeStep'] = ResolversParentTypes['RecipeStep']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IngredientResolvers<ContextType = any, ParentType extends ResolversParentTypes['Ingredient'] = ResolversParentTypes['Ingredient']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DeleteRecipeResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteRecipeResponse'] = ResolversParentTypes['DeleteRecipeResponse']> = ResolversObject<{
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  errorCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  recipes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Recipe']>>>, ParentType, ContextType>;
  recipe?: Resolver<Maybe<ResolversTypes['Recipe']>, ParentType, ContextType, RequireFields<QueryRecipeArgs, 'recipeId'>>;
  comments?: Resolver<Array<ResolversTypes['RecipeComment']>, ParentType, ContextType>;
  categories?: Resolver<Array<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<QueryCategoriesArgs, 'searchTerm'>>;
  ingredients?: Resolver<Array<ResolversTypes['Ingredient']>, ParentType, ContextType, RequireFields<QueryIngredientsArgs, 'searchTerm'>>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createRecipe?: Resolver<ResolversTypes['Recipe'], ParentType, ContextType>;
  createRecipeStep?: Resolver<ResolversTypes['RecipeStep'], ParentType, ContextType>;
  updateRecipe?: Resolver<ResolversTypes['Recipe'], ParentType, ContextType, RequireFields<MutationUpdateRecipeArgs, 'input'>>;
  uploadImage?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationUploadImageArgs, 'filename' | 'id'>>;
  uploadVideo?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationUploadVideoArgs, 'filename' | 'id'>>;
  deleteRecipe?: Resolver<ResolversTypes['DeleteRecipeResponse'], ParentType, ContextType, RequireFields<MutationDeleteRecipeArgs, 'recipeId'>>;
  createUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'id' | 'name' | 'email'>>;
  addComment?: Resolver<ResolversTypes['RecipeComment'], ParentType, ContextType, RequireFields<MutationAddCommentArgs, 'input'>>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  User?: UserResolvers<ContextType>;
  Activity?: ActivityResolvers<ContextType>;
  Recipe?: RecipeResolvers<ContextType>;
  RecipeComment?: RecipeCommentResolvers<ContextType>;
  RecipeIngredient?: RecipeIngredientResolvers<ContextType>;
  RecipeStep?: RecipeStepResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  Ingredient?: IngredientResolvers<ContextType>;
  DeleteRecipeResponse?: DeleteRecipeResponseResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
