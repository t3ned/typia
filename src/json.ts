import * as Namespace from "./functional/Namespace";

import { IJsonApplication } from "./schemas/json/IJsonApplication";

import { IValidation } from "./IValidation";
import { Primitive } from "./Primitive";

/* ===========================================================
    JSON
      - SCHEMA
      - PARSE
      - STRINGIFY
      - FACTORY FUNCTIONS
==============================================================
    SCHEMA
----------------------------------------------------------- */
/**
 * > You must configure the generic argument `Types`.
 *
 * JSON Schema Application.
 *
 * Creates a JSON schema application which contains both main JSON schemas and
 * components. Note that, all of the named types are stored in the
 * {@link IJsonApplication.components} property for the `$ref` referencing.
 *
 * Also, `typia.json.application()` has two additional generic arguments.
 *
 * The 1st *Purpose* means the purpose determines the JSON schema definition spec.
 * For an example, `ajv` has an extra property "$recursiveRef"  that are not
 * exists in the standard JSON schema definition spec. Otherwise, `swagger`
 * can't identify the tuple definition.
 *
 * The next *Surplus* means whether to allow surplus properties starting with
 * `x-typia-` or not. If `true`, the surplus properties like `x-typia-jsDocTags`
 * would be registered into the JSON schema, otherwise, not.
 *
 * @template Types Tuple of target types
 * @template Purpose Purpose of the JSON schema
 * @template Surplus Allow surplus properties starting with `x-typia-` or not
 * @return JSON schema application
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function application(): never;

/**
 * JSON Schema Application.
 *
 * Creates a JSON schema application which contains both main JSON schemas and
 * components. Note that, all of the named types are stored in the
 * {@link IJsonApplication.components} property for the `$ref` referencing.
 *
 * Also, `typia.json.application()` has two additional generic arguments.
 *
 * The 1st *Purpose* means the purpose determines the JSON schema definition spec.
 * For an example, `ajv` has an extra property "$recursiveRef"  that are not
 * exists in the standard JSON schema definition spec. Otherwise, `swagger`
 * can't identify the tuple definition.
 *
 * The next *Surplus* means whether to allow surplus properties starting with
 * `x-typia-` or not. If `true`, the surplus properties like `x-typia-jsDocTags`
 * would be registered into the JSON schema, otherwise, not.
 *
 * @template Types Tuple of target types
 * @template Purpose Purpose of the JSON schema
 * @template Surplus Allow surplus properties starting with `x-typia-` or not
 * @return JSON schema application
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function application<
  Types extends unknown[],
  Purpose extends "ajv" | "swagger" = "swagger",
  Surplus extends boolean = false,
>(): IJsonApplication;

/**
 * @internal
 */
export function application(): never {
  halt("application");
}

/* -----------------------------------------------------------
    PARSE
----------------------------------------------------------- */
/**
 * > You must configure the generic argument `T`.
 *
 * Safe `JSON.parse()` function with type assertion.
 *
 * `typia.json.assertParse()` is a combination function of `JSON.parse()` and
 * {@link assert}. Therefore, it convers a JSON (JavaScript Object Notation) string
 * to a `T` typed instance with type assertion.
 *
 * In such reason, when parsed JSON string value is not matched with the type `T`, it
 * throws {@link TypeGuardError}. Otherwise, there's no problem on the parsed value,
 * the parsed value would be returned.
 *
 * @template T Expected type of parsed value
 * @param input JSON string
 * @returns Parsed value
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function assertParse(input: string): never;

/**
 * Safe `JSON.parse()` function with type assertion.
 *
 * `typia.json.assertParse()` is a combination function of `JSON.parse()` and
 * {@link assert}. Therefore, it convers a JSON (JavaScript Object Notation) string
 * to a `T` typed instance with type assertion.
 *
 * In such reason, when parsed JSON string value is not matched with the type `T`,
 * it throws {@link TypeGuardError}. Otherwise, there's no problem on the parsed
 * value, the parsed value would be returned.
 *
 * @template T Expected type of parsed value
 * @param input JSON string
 * @returns Parsed value
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function assertParse<T>(input: string): Primitive<T>;

/**
 * @internal
 */
function assertParse<T>(): Primitive<T> {
  halt("assertParse");
}
const assertParsePure = /** @__PURE__ */ Object.assign<typeof assertParse, {}>(
  assertParse,
  /** @__PURE__ */ Namespace.assert("json.assertParse"),
);
export { assertParsePure as assertParse };

/**
 * > You must configure the generic argument `T`.
 *
 * Safe `JSON.parse()` function with type checking.
 *
 * `typia.json.isParse()` is a combination function of `JSON.parse()` and {@link is}.
 * Therefore, it convers a JSON (JavaScript Object Notation) string to a `T` typed
 * instance with type checking.
 *
 * In such reason, when parsed JSON string value is not matched with the type `T`, it
 * returns `null` value. Otherwise, there's no problem on the parsed value, the parsed
 * value would be returned.
 *
 * @template T Expected type of parsed value
 * @param input JSON string
 * @returns Parsed value when exact type, otherwise `null`
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function isParse(input: string): never;

/**
 * Safe `JSON.parse()` function with type checking.
 *
 * `typia.json.isParse()` is a combination function of `JSON.parse()` and {@link is}.
 * Therefore, it convers a JSON (JavaScript Object Notation) string to a `T` typed
 * instance with type checking.
 *
 * In such reason, when parsed JSON string value is not matched with the type `T`, it
 * returns `null` value. Otherwise, there's no problem on the parsed value, the parsed
 * value would be returned.
 *
 * @template T Expected type of parsed value
 * @param input JSON string
 * @returns Parsed value when exact type, otherwise `null`
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function isParse<T>(input: string): Primitive<T> | null;

/**
 * @internal
 */
function isParse<T>(): Primitive<T> | null {
  halt("isParse");
}
const isParsePure = /** @__PURE__ */ Object.assign<typeof isParse, {}>(
  isParse,
  /** @__PURE__ */ Namespace.is(),
);
export { isParsePure as isParse };

/**
 * > You must configure the generic argument `T`.
 *
 * Safe `JSON.parse()` function with detailed type validation.
 *
 * `typia.json.validateParse()` is a combination function of `JSON.parse()` and
 * {@link validate}. Therefore, it convers a JSON (JavaScript Object Notation) string
 * to a `T` typed instance with detailed type validation.
 *
 * In such reason, when parsed JSON string value is not matched with the type `T`, it
 * returns {@link IValidation.IFailure} value with detailed error reasons. Otherwise,
 * there's no problem on the parsed value, the parsed value would be stored in `data`
 * property of the output {@link IValidation.ISuccess} instance.
 *
 * @template T Expected type of parsed value
 * @param input JSON string
 * @returns Validation result with JSON parsed value
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function validateParse(input: string): never;

/**
 * Safe `JSON.parse()` function with detailed type validation.
 *
 * `typia.json.validateParse()` is a combination function of `JSON.parse()` and
 * {@link validate}. Therefore, it convers a JSON (JavaScript Object Notation) string
 * to a `T` typed instance with detailed type validation.
 *
 * In such reason, when parsed JSON string value is not matched with the type `T`, it
 * returns {@link IValidation.IFailure} value with detailed error reasons. Otherwise,
 * there's no problem on the parsed value, the parsed value would be stored in `data`
 * property of the output {@link IValidation.ISuccess} instance.
 *
 * @template T Expected type of parsed value
 * @param input JSON string
 * @returns Validation result with JSON parsed value
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function validateParse<T>(input: string): IValidation<Primitive<T>>;

/**
 * @internal
 */
function validateParse<T>(): IValidation<Primitive<T>> {
  halt("validateParse");
}
const validateParsePure = /** @__PURE__ */ Object.assign<
  typeof validateParse,
  {}
>(validateParse, /** @__PURE__ */ Namespace.validate());
export { validateParsePure as validateParse };

/* -----------------------------------------------------------
    STRINGIFY
----------------------------------------------------------- */
/**
 * 8x faster `JSON.stringify()` function.
 *
 * Converts an input value to a JSON (JavaScript Object Notation) string, about 8x
 * faster than the native `JSON.stringify()` function. The 5x faster principle is
 * because it writes an optimized JSON conversion plan, only for the type `T`.
 *
 * For reference, this `typia.json.stringify()` does not validate the input value type.
 * It just believes that the input value is following the type `T`. Therefore, if you
 * can't ensure the input value type, it would be better to call one of below
 * functions instead.
 *
 *  - {@link assertStringify}
 *  - {@link isStringify}
 *  - {@link validateStringify}
 *
 * @template T Type of the input value
 * @param input A value to be converted
 * @return JSON string value
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function stringify<T>(input: T): string;

/**
 * @internal
 */
function stringify(): never {
  halt("stringify");
}
const stringifyPure = /** @__PURE__ */ Object.assign<typeof stringify, {}>(
  stringify,
  /** @__PURE__ */ Namespace.json.stringify("stringify"),
);
export { stringifyPure as stringify };

/**
 * 5x faster `JSON.stringify()` function with type assertion.
 *
 * `typia.json.assertStringify()` is a combination function of {@link assert} and
 * {@link stringify}. Therefore, it converts an input value to
 * JSON (JavaScript Object Notation) string, with type assertion.
 *
 * In such reason, when `input` value is not matched with the type `T`, it throws an
 * {@link TypeGuardError}. Otherwise, there's no problem on the `input` value, JSON
 * string would be returned.
 *
 * For reference, with type assertion, it is even 5x times faster than the native
 * `JSON.stringify()` function. So, just enjoy the safe and fast JSON conversion
 * with confidence.
 *
 * @template T Type of the input value
 * @param input A value to be asserted and converted
 * @return JSON string value
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function assertStringify<T>(input: T): string;

/**
 * 5x faster `JSON.stringify()` function with type assertion.
 *
 * `typia.json.assertStringify()` is a combination function of {@link assert} and
 * {@link stringify}. Therefore, it converts an input value to
 * JSON (JavaScript Object Notation) string, with type assertion.
 *
 * In such reason, when `input` value is not matched with the type `T`, it throws an
 * {@link TypeGuardError}. Otherwise, there's no problem on the `input` value, JSON
 * string would be returned.
 *
 * For reference, with type assertion, it is even 5x times faster than the native
 * `JSON.stringify()` function. So, just enjoy the safe and fast JSON conversion
 * with confidence.
 *
 * @template T Type of the input value
 * @param input A value to be asserted and converted
 * @return JSON string value
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function assertStringify<T>(input: T): unknown;

/**
 * @internal
 */
function assertStringify(): string {
  halt("assertStringify");
}
const assertStringifyPure = /** @__PURE__ */ Object.assign<
  typeof assertStringify,
  {},
  {}
>(
  assertStringify,
  /** @__PURE__ */ Namespace.assert("json.assertStringify"),
  /** @__PURE__ */ Namespace.json.stringify("assertStringify"),
);
export { assertStringifyPure as assertStringify };

/**
 * 7x faster `JSON.stringify()` function with type checking.
 *
 * `typia.json.stringify()` is a combination function of {@link is} and
 * {@link stringify}. Therefore, it converts an input value to JSON
 * (JavaScript Object Notation) string, with type checking.
 *
 * In such reason, when `input` value is not matched with the type `T`, it returns
 * `null` value. Otherwise, there's no problem on the `input` value, JSON string
 * would be returned.
 *
 * For reference, with type checking, it is even 7x times faster than the native
 * `JSON.stringify()` function. So, just enjoy the safe and fast JSON conversion
 * with confidence.
 *
 * @template T Type of the input value
 * @param input A value to be checked and converted
 * @return JSON string value when exact type, otherwise null
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function isStringify<T>(input: T): string | null;

/**
 * 7x faster `JSON.stringify()` function with type checking.
 *
 * `typia.json.isStringify()` is a combination function of {@link is} and
 * {@link stringify}. Therefore, it converts an input value to JSON
 * (JavaScript Object Notation) string, with type checking.
 *
 * In such reason, when `input` value is not matched with the type `T`, it returns
 * `null` value. Otherwise, there's no problem on the `input` value, JSON string
 * would be returned.
 *
 * For reference, with type checking, it is even 7x times faster than the native
 * `JSON.stringify()` function. So, just enjoy the safe and fast JSON conversion
 * with confidence.
 *
 * @template T Type of the input value
 * @param input A value to be checked and converted
 * @return JSON string value when exact type, otherwise null
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function isStringify<T>(input: unknown): string | null;

/**
 * @internal
 */
function isStringify(): string | null {
  halt("isStringify");
}

const isStringifyPure = /** @__PURE__ */ Object.assign<
  typeof isStringify,
  {},
  {}
>(
  isStringify,
  /** @__PURE__ */ Namespace.is(),
  /** @__PURE__ */ Namespace.json.stringify("isStringify"),
);
export { isStringifyPure as isStringify };

/**
 * 5x faster `JSON.stringify()` function with detailed type validation.
 *
 * `typia.json.validateStringify()` is a combination function of {@link validate} and
 * {@link stringify}. Therefore, it converts an input value to JSON (JavaScript Object
 * Notation) string, with detailed type validation.
 *
 * In such reason, when `input` value is not matched with the type `T`, it returns
 * {@link IValidation.IFailure} value with detailed error reasons. Otherwise,
 * there's no problem on the `input` value, JSON string would be stored in `data`
 * property of the output {@link IValidation.ISuccess} instance.
 *
 * For reference, with detailed type validation, it is even 5x times faster than the
 * native `JSON.stringify()` function. So, just enjoy the safe and fast JSON
 * conversion with confidence.
 *
 * @template T Type of the input value
 * @param input A value to be checked and converted
 * @returns Validation result with JSON string value
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function validateStringify<T>(input: T): IValidation<string>;

/**
 * 5x faster `JSON.stringify()` function with detailed type validation.
 *
 * `typia.json.validateStringify()` is a combination function of {@link validate} and
 * {@link stringify}. Therefore, it converts an input value to JSON (JavaScript Object
 * Notation) string, with detailed type validation.
 *
 * In such reason, when `input` value is not matched with the type `T`, it returns
 * {@link IValidation.IFailure} value with detailed error reasons. Otherwise,
 * there's no problem on the `input` value, JSON string would be stored in `data`
 * property of the output {@link IValidation.ISuccess} instance.
 *
 * For reference, with detailed type validation, it is even 5x times faster than the
 * native `JSON.stringify()` function. So, just enjoy the safe and fast JSON
 * conversion with confidence.
 *
 * @template T Type of the input value
 * @param input A value to be checked and converted
 * @returns Validation result with JSON string value
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function validateStringify<T>(input: unknown): IValidation<string>;

/**
 * @internal
 */
function validateStringify(): IValidation<string> {
  halt("validateStringify");
}
const validateStringifyPure = /** @__PURE__ */ Object.assign<
  typeof validateStringify,
  {},
  {}
>(
  validateStringify,
  /** @__PURE__ */ Namespace.validate(),
  /** @__PURE__ */ Namespace.json.stringify("validateStringify"),
);
export { validateStringifyPure as validateStringify };

/* -----------------------------------------------------------
    FACTORY FUNCTIONS
----------------------------------------------------------- */
/**
 * Creates a reusable {@link isParse} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until you configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createIsParse(): never;

/**
 * Creates a reusable {@link isParse} function.
 *
 * @template T Expected type of parsed value
 * @returns A reusable `isParse` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createIsParse<T>(): (input: string) => Primitive<T> | null;

/**
 * @internal
 */
function createIsParse<T>(): (input: string) => Primitive<T> | null {
  halt("createIsParse");
}
const createIsParsePure = /** @__PURE__ */ Object.assign<
  typeof createIsParse,
  {}
>(createIsParse, isParsePure);
export { createIsParsePure as createIsParse };

/**
 * Creates a reusable {@link assertParse} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until you configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createAssertParse(): never;

/**
 * Creates a reusable {@link assertParse} function.
 *
 * @template T Expected type of parsed value
 * @returns A reusable `assertParse` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createAssertParse<T>(): (input: string) => Primitive<T>;

/**
 * @internal
 */
function createAssertParse<T>(): (input: string) => Primitive<T> {
  halt("createAssertParse");
}
const createAssertParsePure = /** @__PURE__ */ Object.assign<
  typeof createAssertParse,
  {}
>(createAssertParse, assertParsePure);
export { createAssertParsePure as createAssertParse };

/**
 * Creates a reusable {@link validateParse} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until you configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createValidateParse(): never;

/**
 * Creates a reusable {@link validateParse} function.
 *
 * @template T Expected type of parsed value
 * @returns A reusable `validateParse` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createValidateParse<T>(): (input: string) => IValidation<Primitive<T>>;

/**
 * @internal
 */
function createValidateParse<T>(): (
  input: string,
) => IValidation<Primitive<T>> {
  halt("createValidateParse");
}

const createValidateParsePure = /** @__PURE__ */ Object.assign<
  typeof createValidateParse,
  {}
>(createValidateParse, validateParsePure);
export { createValidateParsePure as createValidateParse };

/**
 * Creates a reusable {@link stringify} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until you configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createStringify(): never;

/**
 * Creates a reusable {@link stringify} function.
 *
 * @template T Type of the input value
 * @returns A reusable `stringify` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createStringify<T>(): (input: T) => string;

/**
 * @internal
 */
function createStringify<T>(): (input: T) => string {
  halt("createStringify");
}

const createStringifyPure = /** @__PURE__ */ Object.assign<
  typeof createStringify,
  {}
>(createStringify, stringifyPure);
export { createStringifyPure as createStringify };

/**
 * Creates a reusable {@link assertStringify} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until you configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createAssertStringify(): never;

/**
 * Creates a reusable {@link assertStringify} function.
 *
 * @template T Type of the input value
 * @returns A reusable `assertStringify` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createAssertStringify<T>(): (input: unknown) => string;

/**
 * @internal
 */
function createAssertStringify(): (input: unknown) => string {
  halt("createAssertStringify");
}

const createAssertStringifyPure = /** @__PURE__ */ Object.assign<
  typeof createAssertStringify,
  {}
>(createAssertStringify, assertStringifyPure);
export { createAssertStringifyPure as createAssertStringify };

/**
 * Creates a reusable {@link isStringify} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until you configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createIsStringify(): never;

/**
 * Creates a reusable {@link isStringify} function.
 *
 * @template T Type of the input value
 * @returns A reusable `isStringify` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createIsStringify<T>(): (input: unknown) => string | null;

/**
 * @internal
 */
function createIsStringify(): (input: unknown) => string | null {
  halt("createIsStringify");
}

const createIsStringifyPure = /** @__PURE__ */ Object.assign<
  typeof createIsStringify,
  {}
>(createIsStringify, isStringifyPure);
export { createIsStringifyPure as createIsStringify };

/**
 * Creates a reusable {@link validateStringify} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until you configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createValidateStringify(): never;

/**
 * Creates a reusable {@link validateStringify} function.
 *
 * @template T Type of the input value
 * @returns A reusable `validateStringify` function

 * @author Jeongho Nam - https://github.com/samchon
 */
function createValidateStringify<T>(): (input: unknown) => IValidation<string>;

/**
 * @internal
 */
function createValidateStringify(): (input: unknown) => IValidation<string> {
  halt("createValidateStringify");
}

const createValidateStringifyPure = /** @__PURE__ */ Object.assign<
  typeof createValidateStringify,
  {}
>(createValidateStringify, validateStringifyPure);
export { createValidateStringifyPure as createValidateStringify };

/**
 * @internal
 */
function halt(name: string): never {
  throw new Error(
    `Error on typia.json.${name}(): no transform has been configured. Read and follow https://typia.io/docs/setup please.`,
  );
}
