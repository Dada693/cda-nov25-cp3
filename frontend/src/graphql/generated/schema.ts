// @ts-nocheck
import { gql } from '@apollo/client';
import * as ApolloReactCommon from '@apollo/client/react';
import * as ApolloReactHooks from '@apollo/client/react';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTimeISO: { input: any; output: any; }
};

export type Article = {
  __typename?: 'Article';
  body: Scalars['String']['output'];
  category: Category;
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['Float']['output'];
  mainPictureUrl: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type Category = {
  __typename?: 'Category';
  articles?: Maybe<Array<Article>>;
  id: Scalars['Float']['output'];
  name: Scalars['String']['output'];
};

export type CreateArticleInput = {
  body: Scalars['String']['input'];
  category: ObjectId;
  mainPictureUrl: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createArticle: Article;
  deleteArticle: Scalars['Boolean']['output'];
};


export type MutationCreateArticleArgs = {
  data: CreateArticleInput;
};


export type MutationDeleteArticleArgs = {
  id: Scalars['Float']['input'];
};

export type ObjectId = {
  id: Scalars['Int']['input'];
};

export type Query = {
  __typename?: 'Query';
  article?: Maybe<Article>;
  articles: Array<Article>;
  categories: Array<Category>;
};


export type QueryArticleArgs = {
  id: Scalars['Float']['input'];
};


export type QueryArticlesArgs = {
  limit?: InputMaybe<Scalars['Float']['input']>;
  offset?: InputMaybe<Scalars['Float']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type GetArticleQueryVariables = Exact<{
  id: Scalars['Float']['input'];
}>;


export type GetArticleQuery = { __typename?: 'Query', article?: { __typename?: 'Article', id: number, title: string, body: string, mainPictureUrl: string, createdAt: any, updatedAt: any, category: { __typename?: 'Category', name: string } } | null };

export type GetLatestArticlesQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Float']['input']>;
}>;


export type GetLatestArticlesQuery = { __typename?: 'Query', articles: Array<{ __typename?: 'Article', id: number, title: string, mainPictureUrl: string }> };


export const GetArticleDocument = gql`
    query GetArticle($id: Float!) {
  article(id: $id) {
    id
    title
    body
    mainPictureUrl
    createdAt
    updatedAt
    category {
      name
    }
  }
}
    `;

/**
 * __useGetArticleQuery__
 *
 * To run a query within a React component, call `useGetArticleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetArticleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetArticleQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetArticleQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetArticleQuery, GetArticleQueryVariables> & ({ variables: GetArticleQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetArticleQuery, GetArticleQueryVariables>(GetArticleDocument, options);
      }
export function useGetArticleLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetArticleQuery, GetArticleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetArticleQuery, GetArticleQueryVariables>(GetArticleDocument, options);
        }
export function useGetArticleSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetArticleQuery, GetArticleQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetArticleQuery, GetArticleQueryVariables>(GetArticleDocument, options);
        }
export type GetArticleQueryHookResult = ReturnType<typeof useGetArticleQuery>;
export type GetArticleLazyQueryHookResult = ReturnType<typeof useGetArticleLazyQuery>;
export type GetArticleSuspenseQueryHookResult = ReturnType<typeof useGetArticleSuspenseQuery>;
export type GetArticleQueryResult = ApolloReactCommon.QueryResult<GetArticleQuery, GetArticleQueryVariables>;
export const GetLatestArticlesDocument = gql`
    query GetLatestArticles($limit: Float) {
  articles(limit: $limit) {
    id
    title
    mainPictureUrl
  }
}
    `;

/**
 * __useGetLatestArticlesQuery__
 *
 * To run a query within a React component, call `useGetLatestArticlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLatestArticlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLatestArticlesQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetLatestArticlesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetLatestArticlesQuery, GetLatestArticlesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetLatestArticlesQuery, GetLatestArticlesQueryVariables>(GetLatestArticlesDocument, options);
      }
export function useGetLatestArticlesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetLatestArticlesQuery, GetLatestArticlesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetLatestArticlesQuery, GetLatestArticlesQueryVariables>(GetLatestArticlesDocument, options);
        }
export function useGetLatestArticlesSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetLatestArticlesQuery, GetLatestArticlesQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetLatestArticlesQuery, GetLatestArticlesQueryVariables>(GetLatestArticlesDocument, options);
        }
export type GetLatestArticlesQueryHookResult = ReturnType<typeof useGetLatestArticlesQuery>;
export type GetLatestArticlesLazyQueryHookResult = ReturnType<typeof useGetLatestArticlesLazyQuery>;
export type GetLatestArticlesSuspenseQueryHookResult = ReturnType<typeof useGetLatestArticlesSuspenseQuery>;
export type GetLatestArticlesQueryResult = ApolloReactCommon.QueryResult<GetLatestArticlesQuery, GetLatestArticlesQueryVariables>;