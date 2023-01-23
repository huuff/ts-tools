// TODO: Maybe some examples in the docs?

/**
 * Gives a well-typed array of all keys in an object
 * @param obj the input object
 * @returns typed array of all of its keys
 */
export function keys<T>(obj: T): (keyof T)[] {
    const result: (keyof T)[] = [];
    for (const key in obj) {
        result.push(key);
    }

    return result;
}

/**
 * Gives a string with its first letter capitalized, typed as `Capitalize`
 * @param input the input string/literal
 * @returns the input with its first letter capitalized
 */
export function capitalize<T extends string>(input: T): Capitalize<T> {
    return input.charAt(0).toUpperCase() + input.substring(1, input.length) as Capitalize<T>;
}

/**
 * Type assertion that the input is not null or undefined. Useful for well-typed `filter`s that remove
 * nullables
 * @param value 
 * @returns assertion whether the type is non-null/non-undefined
 */
export function isNotNullable<Type>(value: Type | null | undefined): value is Type {
    return value !== null && value !== undefined;
}


// TODO: Add a version without a default that enforces that all keys are present?
type Branches<T extends string | number | symbol, R> = {
    [k in T]?: R;
} & {
    default: R;
}

/**
 * Like a `switch` statement, but with an object. And it can be used as an expression (p.e. in TSX)
 * @param input the input value (i.e. the value on `switch (value)`)
 * @param branches all branches of the comparison (i.e. the `case`s), including a "default" one
 * @returns the right side of the matching branch, or the right side of the default.
 */
function switchExpr<T extends string | number | symbol | undefined, R >(
    input: T,
    branches: Branches<NonNullable<T>, R>
): R {
    if (!input) {
        return branches.default;
    } else {
        return branches[input] || branches.default;
    }
}

export { switchExpr };
