import { keys, capitalize } from "./typesafe";

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

    describe("capitalize", () => {
        test("correctly capitalizes", () => {
            // ARRANGE
            const input = "input";

            // ACT
            const output = capitalize(input);

            // ASSERT
            expect(output).toBe("Input");
        });
    });
});