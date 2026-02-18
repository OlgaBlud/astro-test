import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ cookies, redirect }) => {
  cookies.set("sanity-preview", "true", {
    path: "/",
  });

  return redirect("/");
};
