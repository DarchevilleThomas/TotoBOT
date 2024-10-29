import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    baseUrl: "https://generativelanguage.googleapis.com/"
});

export const GeminiAPI = createApi({
    reducerPath: "GeminiAPI",
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        getGeminiResponse: builder.mutation({
            query: (data) => ({
                url: "/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCiymlkd5mubFTaN5xXEgx_FPgs2Tr2R10",
                method: "POST",
                body: {
                    "contents": [
                        {
                            "parts": [{ "text": data }]
                        }
                    ]
                }
            })
        })
    })
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
    useGetGeminiResponseMutation
} = GeminiAPI;