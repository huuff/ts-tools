export function keys<T>(obj: T): (keyof T)[] {
    const result: (keyof T)[] = [];
    for (const key in obj) {
        result.push(key);
    }

    return result;
}

export function capitalize<T extends string>(input: T): Capitalize<T> {
    return input.charAt(0).toUpperCase() + input.substring(1, input.length) as Capitalize<T>;
}

export function isNotNullable<Type>(value: Type | null | undefined): value is Type {
    return value !== null && value !== undefined;
}