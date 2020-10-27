import { generateHelloWorld } from "./app";

test("generateHelloWorldがHelloWorldを返す", () => {
  const actual = generateHelloWorld();
  expect(actual).toBe("hello world.");
});
