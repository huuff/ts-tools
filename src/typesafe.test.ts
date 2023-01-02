import { keys } from "./typesafe";

describe("typesafe", () => {
    describe("keys", () => {
        test("correctly finds keys", () => {
            // ARRANGE
            const obj = {
                key1: "val1",
                key2: "val2,"
            }

            // ACT
            const objKeys = keys(obj);

            // ASSERT
            expect(objKeys).toEqual(["key1", "key2"]);
        });
    });
});