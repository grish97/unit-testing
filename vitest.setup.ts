import {server} from "./src/mock/server";

import "@testing-library/jest-dom/vitest";

beforeAll(() => server.listen());
afterEach(() =>  server.resetHandlers());
afterAll(() => server.close());
