import { keys, capitalize, isNotNullable, switchExpr } from "./typesafe";

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

    describe("isNotNullable", () => {
        test("filters non-nullables", () => {
            // ARRANGE
            const input = ["v1", null, "v2", undefined, "v3"];

            // ACT
            const output = input.filter(isNotNullable);

            // ASSERT
            expect(output).toEqual(["v1", "v2", "v3"]);
        });
    });

    describe("switchExpr", () => {
        test("returns appropriate branch", () => {
            // ARRANGE
            const input: 1 | 2 | 3 = 2;

            // ACT
            const output = switchExpr<1 | 2 | 3, string>(input, {
                1: "output1",
                2: "output2",
                default: "output3",
            })

            // ASSERT
            expect(output).toBe("output2")
        });
    });
});