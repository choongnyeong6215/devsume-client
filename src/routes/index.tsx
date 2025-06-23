import Layout from "@/components/Layout";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      // randing page
      {
        index: true,
      },

      // user
      {
        path: "login",
      },
      {
        path: "join",
      },

      // resume
      {
        path: "resume",
        children: [
          {
            path: "all",
            children: [
              {
                path: "completed",
              },
              {
                path: "temporary",
              },
            ],
          },
          {
            path: ":id/completed",
          },
          {
            path: ":id/temporary",
          },
          {
            path: "new",
          },
          {
            path: "edit/:id",
          },
        ],
      },
    ],
  },
]);
