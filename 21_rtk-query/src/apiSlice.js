import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  tagTypes: ["Tasks"],
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => "/tasks",
      transformResponse: (tasks) => tasks.reverse(),
      providesTags: ["Tasks"],
    }),

    addTask: builder.mutation({
      query: (task) => ({
        url: "/tasks",
        method: "POST",
        body: task,
      }),
      invalidatesTags: ["Tasks"],
      async onQueryStarted(task, { dispatch, queryFullfilled }) {
        const patchResult = dispatch(
          api.util.updateQueryData("getTasks", undefined, (draft) => {
            draft.unshift({ id: crypto.randomUUID(), ...task });
          })
        );

        try {
          await queryFullfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),

    updateTask: builder.mutation({
      query: ({ id, ...updatedTask }) => ({
        url: `/tasks/${id}`,
        method: "PATCH",
        body: updatedTask,
      }),
      invalidatesTags: ["Tasks"],
      async onQueryStarted(
        { id, ...updatedTask },
        { dispatch, queryFullfilled }
      ) {
        const patchResult = dispatch(
          api.util.updateQueryData("getTasks", undefined, (tasksList) => {
            const tasksIndex = tasksList.findIndex((el) => el.id === id);
            tasksList[tasksIndex] = {
              ...tasksList[tasksIndex],
              ...updatedTask,
            };
          })
        );

        try {
          await queryFullfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),

    deleteTask: builder.mutation({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Tasks"],
      async onQueryStarted(id, { dispatch, queryFullfilled }) {
        const patchResult = dispatch(
          api.util.updateQueryData("getTasks", undefined, (tasksList) => {
            const tasksIndex = tasksList.findIndex((el) => el.id === id);
            tasksList.splice(tasksIndex, 1);
          })
        );

        try {
          await queryFullfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
  }),
});

export const {
  useGetTasksQuery,
  useAddTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = api;
