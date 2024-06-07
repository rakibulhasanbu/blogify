import { baseApi } from "../../api/baseApi";
import { tagTypes } from "../../api/tagTypesList";

const roomsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getRooms: builder.query({
      query: (filterOptions) => ({
        url: `/rooms${filterOptions ? `?${filterOptions}` : ""}`,
        method: "GET",
      }),
      providesTags: [tagTypes.blog],
    }),

    addRoom: builder.mutation({
      query: (roomData) => ({
        url: "/room",
        method: "POST",
        body: roomData,
      }),
      invalidatesTags: [tagTypes.blog],
    }),
  }),
});

export const {} = roomsApi;
