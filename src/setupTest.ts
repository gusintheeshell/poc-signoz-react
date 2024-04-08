import { beforeAll, afterAll, afterEach } from "vitest";
import { server } from "@/config/msw/server";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
