import { HandlerContext } from "$fresh/server.ts";
import {advertisingModule} from "../../../features/advertising/advertising.module.ts";


type RouteHandler = (_req: Request, _ctx: HandlerContext) => Response;
type HTTPMethods = "GET" | "DELETE" | "PATCH";

const headers = {
  headers: { "Content-Type": "application/json" },
};

const status200 = {status: 200, statusText: "OK"}
const status404 = {status: 404, statusText: "Not Found"}
const status400 = {status: 400, statusText: "Bad Request"}
const routes: Record<HTTPMethods, RouteHandler> = {
  GET: (_req: Request, _ctx: HandlerContext) => {
    return new Response(JSON.stringify({}), {...headers, ...status200});
  },
  DELETE: (_req: Request, _ctx: HandlerContext) => {
    const id = _req.url.split("/").at(-1);
    if (!id) return new Response(undefined, {...headers, ...status400});

    try {
      advertisingModule.delete(id)
    } catch (e) {

    }
    return new Response(undefined, {...headers, ...status200});
  },
  PATCH: (_req: Request, _ctx: HandlerContext) => {
    return new Response(JSON.stringify({}));
  }
};

export const handler = (_req: Request, _ctx: HandlerContext): Response => {
  const routeHandler = routes[_req.method as HTTPMethods];
  return routeHandler(_req, _ctx);
};
