import { apiSlice } from "./apiSlice"

export const recipesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRecipes: builder.query({
      query: () => '/recipes',
      transformResponse: res => res.sort((a, b) => b.id - a.id),
      providesTags: ['Recipes']
    }),
    addRecipe: builder.mutation({
      query: (recipe) => ({
        url: '/recipes',
        method: 'POST',
        body: recipe
      }),
      invalidatesTags: ['Recipes']
    }),
    updateRecipe: builder.mutation({
      query: (recipe) => ({
        url: `/recipes/${recipe.id}`,
        method: 'PATCH',
        body: recipe
      }),
      invalidatesTags: ['Recipes']
    }),
    deleteRecipe: builder.mutation({
      query: ({ id }) => ({
        url: `/recipes/${id}`,
        method: 'DELETE',
        body: id
      }),
      invalidatesTags: ['Recipes']
    }),
  })
})

export const {
  useGetRecipesQuery,
  useAddRecipeMutation,
  useUpdateRecipeMutation,
  useDeleteRecipeMutation
} = recipesApiSlice
