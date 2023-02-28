import { HandlerContext } from "$fresh/server.ts";

type RouteHandler = (_req: Request, _ctx: HandlerContext) => Response;
type HTTPMethods = "GET" | "DELETE";

const headers = {
  headers: { "Content-Type": "application/json" },
};
const routes: Record<HTTPMethods, RouteHandler> = {
  GET: (_req: Request, _ctx: HandlerContext) => {
    return new Response(JSON.stringify({}), headers);
  },

  DELETE: (_req: Request, _ctx: HandlerContext) => {
    const id = _req;
    console.log({ id });
    return new Response(JSON.stringify({}));
  },
};

export const handler = (_req: Request, _ctx: HandlerContext): Response => {
  console.log(_req);
  const routeHandler = routes[_req.method as HTTPMethods];
  return routeHandler(_req, _ctx);
};
