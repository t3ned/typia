import * as Namespace from "./functional/Namespace";

import { Atomic } from "./typings/Atomic";

import { IValidation } from "./IValidation";
import { Resolved } from "./Resolved";

/* ===========================================================
    HTTP
      - FORM-DATA
      - QUERY
      - HEADERS
      - PARAMETER
      - FACTORY FUNCTIONS
==============================================================
    FORM-DATA
----------------------------------------------------------- */
/**
 * > You must configure the generic argument `T`.
 *
 * Form data decoder.
 *
 * `typia.http.formData()` is a function decoding `FormData` instance, with
 * automatic type casting to the expected type. When roperty type be defined
 * as `boolean` or `Blob` type, `typia.http.formData()` will cast the value to
 * the expected type when decoding.
 *
 * By the way, as `FormData` is not enough to express complex data structures,
 * `typia.http.formData()` function has some limitations. If target type `T` is
 * not following those restrictions, compilation errors would be occured.
 *
 * 1. Type `T` must be an object type
 * 2. Do not allow dynamic property
 * 3. Only `boolean`, `bigint`, `number`, `string`, `Blob`, `File` or their array types are allowed
 * 4. By the way, union type never be not allowed
 *
 * Also, `typia.http.formData()` function does not perform validation about the
 * decoded value. Therefore, if you can't sure that input data is following the
 * `T` type, it would better to call one of below functions intead.
 *
 * - {@link assertFormData}
 * - {@link isFormData}
 * - {@link validateFormData}
 *
 * @template T Expected type of decoded value
 * @param input FormData instance
 * @returns Decoded form FormData
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function formData(): never;

/**
 * Form data decoder.
 *
 * `typia.http.formData()` is a function decoding `FormData` instance, with
 * automatic type casting to the expected type. When roperty type be defined
 * as `boolean` or `Blob` type, `typia.http.formData()` will cast the value to
 * the expected type when decoding.
 *
 * By the way, as `FormData` is not enough to express complex data structures,
 * `typia.http.formData()` function has some limitations. If target type `T` is
 * not following those restrictions, compilation errors would be occured.
 *
 * 1. Type `T` must be an object type
 * 2. Do not allow dynamic property
 * 3. Only `boolean`, `bigint`, `number`, `string`, `Blob`, `File` or their array types are allowed
 * 4. By the way, union type never be not allowed
 *
 * Also, `typia.http.formData()` function does not perform validation about the
 * decoded value. Therefore, if you can't sure that input data is following the
 * `T` type, it would better to call one of below functions intead.
 *
 * @template T Expected type of decoded value
 * @param input FormData instance
 * @returns Decoded form FormData
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function formData<T extends object>(input: FormData): Resolved<T>;

/**
 * @internal
 */
function formData(): never {
  halt("formData");
}
const formDataPure = /** @__PURE__ */ Object.assign<typeof formData, {}>(
  formData,
  /** @__PURE__ */ Namespace.http.formData(),
);
export { formDataPure as formData };

/**
 * > You must configure the generic argument `T`.
 *
 * Form data decoder with type assertion.
 *
 * `typia.http.assertFormData()` is a function decoding `FormData` instance, with
 * automatic type casting to the expected type. When roperty type be defined
 * as `boolean` or `Blob` type, `typia.http.assertFormData()` will cast the value
 * to the expected type when decoding.
 *
 * Also, after decoding, `typia.http.assertFormData()` performs type assertion to
 * the decoded value by combining with {@link assert} function. Therefore, when
 * the decoded value is not following the `T` type, {@link TypeGuardError} would
 * be thrown.
 *
 * By the way, as `FormData` is not enough to express complex data structures,
 * `typia.http.assertFormData()` function has some limitations. If target type `T`
 * is not following those restrictions, compilation errors would be occured.
 *
 * 1. Type `T` must be an object type
 * 2. Do not allow dynamic property
 * 3. Only `boolean`, `bigint`, `number`, `string`, `Blob`, `File` or their array types are allowed
 * 4. By the way, union type never be not allowed
 *
 * @template T Expected type of decoded value
 * @param input FormData instance
 * @returns Decoded form FormData
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function assertFormData(): never;

/**
 * Form data decoder with type assertion.
 *
 * `typia.http.assertFormData()` is a function decoding `FormData` instance, with
 * automatic type casting to the expected type. When roperty type be defined
 * as `boolean` or `Blob` type, `typia.http.assertFormData()` will cast the value
 * to the expected type when decoding.
 *
 * Also, after decoding, `typia.http.assertFormData()` performs type assertion to
 * the decoded value by combining with {@link assert} function. Therefore, when
 * the decoded value is not following the `T` type, {@link TypeGuardError} would
 * be thrown.
 *
 * By the way, as `FormData` is not enough to express complex data structures,
 * `typia.http.assertFormData()` function has some limitations. If target type `T`
 * is not following those restrictions, compilation errors would be occured.
 *
 * 1. Type `T` must be an object type
 * 2. Do not allow dynamic property
 * 3. Only `boolean`, `bigint`, `number`, `string`, `Blob`, `File` or their array types are allowed
 * 4. By the way, union type never be not allowed
 *
 * @template T Expected type of decoded value
 * @param input FormData instance
 * @returns Decoded form FormData
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function assertFormData<T extends object>(input: FormData): Resolved<T>;

/**
 * @internal
 */
function assertFormData(): never {
  halt("assertFormData");
}
const assertFormDataPure = /** @__PURE__ */ Object.assign<
  typeof assertFormData,
  {},
  {}
>(
  assertFormData,
  /** @__PURE__ */ Namespace.http.formData(),
  /** @__PURE__ */ Namespace.assert("http.assertFormData"),
);
export { assertFormDataPure as assertFormData };

/**
 * > You must configure the generic argument `T`.
 *
 * Form data decoder with type checking.
 *
 * `typia.http.isFormData()` is a function decoding `FormData` instance, with
 * automatic type casting to the expected type. When roperty type be defined
 * as `boolean` or `Blob` type, `typia.http.isFormData()` will cast the value
 * to the expected type when decoding.
 *
 * Also, after decoding, `typia.http.isFormData()` performs type checking to the
 * decoded value by combining with {@link is} function. Therefore, when the
 * decoded value is not following the `T` type, `null` value would be returned.
 *
 * By the way, as `FormData` is not enough to express complex data structures,
 * `typia.http.isFormData()` function has some limitations. If target type `T` is
 * not following those restrictions, compilation errors would be occured.
 *
 * 1. Type `T` must be an object type
 * 2. Do not allow dynamic property
 * 3. Only `boolean`, `bigint`, `number`, `string`, `Blob`, `File` or their array types are allowed
 * 4. By the way, union type never be not allowed
 *
 * @template T Expected type of decoded value
 * @param input FormData instance
 * @returns Decoded form FormData or `null` value
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function isFormData(): never;

/**
 * Form data decoder with type checking.
 *
 * `typia.http.isFormData()` is a function decoding `FormData` instance, with
 * automatic type casting to the expected type. When roperty type be defined
 * as `boolean` or `Blob` type, `typia.http.isFormData()` will cast the value
 * to the expected type when decoding.
 *
 * Also, after decoding, `typia.http.isFormData()` performs type checking to the
 * decoded value by combining with {@link is} function. Therefore, when the
 * decoded value is not following the `T` type, `null` value would be returned.
 *
 * By the way, as `FormData` is not enough to express complex data structures,
 * `typia.http.isFormData()` function has some limitations. If target type `T` is
 * not following those restrictions, compilation errors would be occured.
 *
 * 1. Type `T` must be an object type
 * 2. Do not allow dynamic property
 * 3. Only `boolean`, `bigint`, `number`, `string`, `Blob`, `File` or their array types are allowed
 * 4. By the way, union type never be not allowed
 *
 * @template T Expected type of decoded value
 * @param input FormData instance
 * @returns Decoded form FormData or `null` value
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function isFormData<T extends object>(input: FormData): Resolved<T> | null;

/**
 * @internal
 */
function isFormData(): never {
  halt("isFormData");
}
const isFormDataPure = /** @__PURE__ */ Object.assign<
  typeof isFormData,
  {},
  {}
>(
  isFormData,
  /** @__PURE__ */ Namespace.http.formData(),
  /** @__PURE__ */ Namespace.is(),
);
export { isFormDataPure as isFormData };

/**
 * > You must configure the generic argument `T`.
 *
 * Form data decoder with type validation.
 *
 * `typia.http.validateFormData()` is a function decoding `FormData` instance,
 * with automatic type casting to the expected type. When roperty type be defined
 * as `boolean` or `Blob` type, `typia.http.validateFormData()` will cast the
 * value to the expected type when decoding.
 *
 * Also, after decoding, `typia.http.validateFormData()` performs type validation
 * to the decoded value by combining with {@link validate} function. Therefore,
 * when the decoded value is not following the `T` type,
 * {@link IValidation.IFailure} would be returned. Otherwise,
 * x@xxxx IValidation.ISuccess} would be returned.
 *
 * By the way, as `FormData` is not enough to express complex data structures,
 * `typia.http.validateFormData()` function has some limitations. If target type
 * `T` is not following those restrictions, compilation errors would be occured.
 *
 * 1. Type `T` must be an object type
 * 2. Do not allow dynamic property
 * 3. Only `boolean`, `bigint`, `number`, `string`, `Blob`, `File` or their array types are allowed
 * 4. By the way, union type never be not allowed
 *
 * @template T Expected type of decoded value
 * @param input FormData instance
 * @returns Validation result with decoded form FormData
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function validateFormData(): never;

/**
 * Form data decoder with type validation.
 *
 * `typia.http.validateFormData()` is a function decoding `FormData` instance,
 * with automatic type casting to the expected type. When roperty type be defined
 * as `boolean` or `Blob` type, `typia.http.validateFormData()` will cast the
 * value to the expected type when decoding.
 *
 * Also, after decoding, `typia.http.validateFormData()` performs type validation
 * to the decoded value by combining with {@link validate} function. Therefore,
 * when the decoded value is not following the `T` type,
 * {@link IValidation.IFailure} would be returned. Otherwise,
 * x@xxxx IValidation.ISuccess} would be returned.
 *
 * By the way, as `FormData` is not enough to express complex data structures,
 * `typia.http.validateFormData()` function has some limitations. If target type
 * `T` is not following those restrictions, compilation errors would be occured.
 *
 * 1. Type `T` must be an object type
 * 2. Do not allow dynamic property
 * 3. Only `boolean`, `bigint`, `number`, `string`, `Blob`, `File` or their array types are allowed
 * 4. By the way, union type never be not allowed
 *
 * @template T Expected type of decoded value
 * @param input FormData instance
 * @returns Validation result with decoded form FormData
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function validateFormData<T extends object>(
  input: FormData,
): IValidation<Resolved<T>>;

/**
 * @internal
 */
function validateFormData(): never {
  halt("validateFormData");
}
const validateFormDataPure = /** @__PURE__ */ Object.assign<
  typeof validateFormData,
  {},
  {}
>(
  validateFormData,
  /** @__PURE__ */ Namespace.http.formData(),
  /** @__PURE__ */ Namespace.validate(),
);
export { validateFormDataPure as validateFormData };

/* -----------------------------------------------------------
    QUERY
----------------------------------------------------------- */
/**
 * > You must configure the generic argument `T`.
 *
 * URL query decoder.
 *
 * `typia.http.query()` is a function decoding a query string or an `URLSearchParams`
 * instance, with automatic type casting to the expected type. When property type be
 * defined as `boolean` or `number` type, `typia.http.query()` will cast the value to
 * the expected type when decoding.
 *
 * By the way, as URL query is not enough to express complex data structures,
 * `typia.http.query()` function has some limitations. If target type `T` is not
 * following those restrictions, compilation errors would be occured.
 *
 *  1. Type `T` must be an object type
 *  2. Do not allow dynamic property
 *  3. Only `boolean`, `bigint`, `number`, `string` or their array types are allowed
 *  4. By the way, union type never be not allowed
 *
 * Also, `typia.http.query()` function does not perform validation about the decoded
 * value. Therefore, if you can't sure that input data is following the `T` type,
 * it would better to call one of below functions intead.
 *
 *  - {@link assertQuery}
 *  - {@link isQuery}
 *  - {@link validateQuery}
 *
 * @template T Expected type of decoded value
 * @param input Query string or URLSearchParams instance
 * @returns Decoded query object
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function query(): never;

/**
 * URL query decoder.
 *
 * `typia.http.query()` is a function decoding a query string or an `URLSearchParams`
 * instance, with automatic type casting to the expected type. When property type be
 * defined as `boolean` or `number` type, `typia.http.query()` will cast the value to
 * the expected type when decoding.
 *
 * By the way, as URL query is not enough to express complex data structures,
 * `typia.http.query()` function has some limitations. If target type `T` is not
 * following those restrictions, compilation errors would be occured.
 *
 *  1. Type `T` must be an object type
 *  2. Do not allow dynamic property
 *  3. Only `boolean`, `bigint`, `number`, `string` or their array types are allowed
 *  4. By the way, union type never be not allowed
 *
 * Also, `typia.http.query()` function does not perform validation about the decoded
 * value. Therefore, if you can't sure that input data is following the `T` type,
 * it would better to call one of below functions intead.
 *
 *  - {@link assertQuery}
 *  - {@link isQuery}
 *  - {@link validateQuery}
 *
 * @template T Expected type of decoded value
 * @param input Query string or URLSearchParams instance
 * @returns Decoded query object
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function query<T extends object>(input: string | URLSearchParams): Resolved<T>;

/**
 * @internal
 */
function query(): never {
  halt("query");
}
const queryPure = /** @__PURE__ */ Object.assign<typeof query, {}>(
  query,
  /** @__PURE__ */ Namespace.http.query(),
);
export { queryPure as query };

/**
 * > You must configure the generic argument `T`.
 *
 * URL query decoder with type assertion.
 *
 * `typia.http.assertQuery()` is a function decoding a query string or an
 * `URLSearchParams` instance, with automatic type casting to the expected type.
 * When property type be defined as `boolean` or `number` type,
 * `typia.http.assertQuery()` will cast the value to the expected type when decoding.
 *
 * Also, after decoding, `typia.http.assertQuery()` performs type assertion to the
 * decoded value by combining with {@link assert} function. Therefore, when the
 * decoded value is not following the `T` type, {@link TypeGuardError} would be
 * thrown.
 *
 * By the way, as URL query is not enough to express complex data structures,
 * `typia.http.assertQuery()` function has some limitations. If target type `T` is
 * notfollowing those restrictions, compilation errors would be occured.
 *
 *  1. Type `T` must be an object type
 *  2. Do not allow dynamic property
 *  3. Only `boolean`, `bigint`, `number`, `string` or their array types are allowed
 *  4. By the way, union type never be not allowed
 *
 * @template T Expected type of decoded value
 * @param input Query string or URLSearchParams instance
 * @returns Decoded query object
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function assertQuery(): never;

/**
 * URL query decoder with type assertion.
 *
 * `typia.http.assertQuery()` is a function decoding a query string or an
 * `URLSearchParams` instance, with automatic type casting to the expected type.
 * When property type be defined as `boolean` or `number` type,
 * `typia.http.assertQuery()` will cast the value to the expected type when decoding.
 *
 * Also, after decoding, `typia.http.assertQuery()` performs type assertion to the
 * decoded value by combining with {@link assert} function. Therefore, when the
 * decoded value is not following the `T` type, {@link TypeGuardError} would be
 * thrown.
 *
 * By the way, as URL query is not enough to express complex data structures,
 * `typia.http.assertQuery()` function has some limitations. If target type `T` is
 * notfollowing those restrictions, compilation errors would be occured.
 *
 *  1. Type `T` must be an object type
 *  2. Do not allow dynamic property
 *  3. Only `boolean`, `bigint`, `number`, `string` or their array types are allowed
 *  4. By the way, union type never be not allowed
 *
 * @template T Expected type of decoded value
 * @param input Query string or URLSearchParams instance
 * @returns Decoded query object
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function assertQuery<T extends object>(
  input: string | URLSearchParams,
): Resolved<T>;

/**
 * @internal
 */
function assertQuery(): never {
  halt("assertQuery");
}
const assertQueryPure = /** @__PURE__ */ Object.assign<
  typeof assertQuery,
  {},
  {}
>(
  assertQuery,
  /** @__PURE__ */ Namespace.http.query(),
  /** @__PURE__ */ Namespace.assert("http.assertQuery"),
);
export { assertQueryPure as assertQuery };

/**
 * > You must configure the generic argument `T`.
 *
 * URL query decoder with type checking.
 *
 * `typia.http.isQuery()` is a function decoding a query string or an
 * `URLSearchParams` instance, with automatic type casting to the expected type.
 * When property type be defined as `boolean` or `number` type,
 * `typia.http.isQuery()` will cast the value to the expected type when decoding.
 *
 * Also, after decoding, `typia.http.isQuery()` performs type checking to the
 * decoded value by combining with {@link is} function. Therefore, when the
 * decoded value is not following the `T` type, `null` value would be returned.
 *
 * By the way, as URL query is not enough to express complex data structures,
 * `typia.http.isQuery()` function has some limitations. If target type `T` is
 * notfollowing those restrictions, compilation errors would be occured.
 *
 *  1. Type `T` must be an object type
 *  2. Do not allow dynamic property
 *  3. Only `boolean`, `bigint`, `number`, `string` or their array types are allowed
 *  4. By the way, union type never be not allowed
 *
 * @template T Expected type of decoded value
 * @param input Query string or URLSearchParams instance
 * @returns Decoded query object or `null` value
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function isQuery(): never;

/**
 * URL query decoder with type checking.
 *
 * `typia.http.isQuery()` is a function decoding a query string or an
 * `URLSearchParams` instance, with automatic type casting to the expected type.
 * When property type be defined as `boolean` or `number` type,
 * `typia.http.isQuery()` will cast the value to the expected type when decoding.
 *
 * Also, after decoding, `typia.http.isQuery()` performs type checking to the
 * decoded value by combining with {@link is} function. Therefore, when the
 * decoded value is not following the `T` type, `null` value would be returned.
 *
 * By the way, as URL query is not enough to express complex data structures,
 * `typia.http.isQuery()` function has some limitations. If target type `T` is
 * notfollowing those restrictions, compilation errors would be occured.
 *
 *  1. Type `T` must be an object type
 *  2. Do not allow dynamic property
 *  3. Only `boolean`, `bigint`, `number`, `string` or their array types are allowed
 *  4. By the way, union type never be not allowed
 *
 * @template T Expected type of decoded value
 * @param input Query string or URLSearchParams instance
 * @returns Decoded query object or `null` value
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function isQuery<T extends object>(
  input: string | URLSearchParams,
): Resolved<T> | null;

/**
 * @internal
 */
function isQuery(): never {
  halt("isQuery");
}

const isQueryPure = /** @__PURE__ */ Object.assign<typeof isQuery, {}, {}>(
  isQuery,
  /** @__PURE__ */ Namespace.http.query(),
  /** @__PURE__ */ Namespace.is(),
);
export { isQueryPure as isQuery };

/**
 * > You must configure the generic argument `T`.
 *
 * URL query decoder with type validation.
 *
 * `typia.http.validateQuery()` is a function decoding a query string or an
 * `URLSearchParams` instance, with automatic type casting to the expected type.
 * When property type be defined as `boolean` or `number` type,
 * `typia.http.validateQuery()` will cast the value to the expected type when decoding.
 *
 * Also, after decoding, `typia.http.validateQuery()` performs type validation to the
 * decoded value by combining with {@link validate} function. Therefore, when the
 * decoded value is not following the `T` type, {@link IValidation.IFailure} would
 * be returned. Otherwise, {@link IValidation.ISuccess} would be returned.
 *
 * By the way, as URL query is not enough to express complex data structures,
 * `typia.http.validateQuery()` function has some limitations. If target type `T` is
 * notfollowing those restrictions, compilation errors would be occured.
 *
 *  1. Type `T` must be an object type
 *  2. Do not allow dynamic property
 *  3. Only `boolean`, `bigint`, `number`, `string` or their array types are allowed
 *  4. By the way, union type never be not allowed
 *
 * @template T Expected type of decoded value
 * @param input Query string or URLSearchParams instance
 * @returns Validation result with decoded query object
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function validateQuery(): never;

/**
 * URL query decoder with type validation.
 *
 * `typia.http.validateQuery()` is a function decoding a query string or an
 * `URLSearchParams` instance, with automatic type casting to the expected type.
 * When property type be defined as `boolean` or `number` type,
 * `typia.http.validateQuery()` will cast the value to the expected type when decoding.
 *
 * Also, after decoding, `typia.http.validateQuery()` performs type validation to the
 * decoded value by combining with {@link validate} function. Therefore, when the
 * decoded value is not following the `T` type, {@link IValidation.IFailure} would
 * be returned. Otherwise, {@link IValidation.ISuccess} would be returned.
 *
 * By the way, as URL query is not enough to express complex data structures,
 * `typia.http.validateQuery()` function has some limitations. If target type `T` is
 * notfollowing those restrictions, compilation errors would be occured.
 *
 *  1. Type `T` must be an object type
 *  2. Do not allow dynamic property
 *  3. Only `boolean`, `bigint`, `number`, `string` or their array types are allowed
 *  4. By the way, union type never be not allowed
 *
 * @template T Expected type of decoded value
 * @param input Query string or URLSearchParams instance
 * @returns Validation result with decoded query object
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function validateQuery<T extends object>(
  input: string | URLSearchParams,
): IValidation<Resolved<T>>;

/**
 * @internal
 */
function validateQuery(): never {
  halt("validateQuery");
}
const validateQueryPure = /** @__PURE__ */ Object.assign<
  typeof validateQuery,
  {},
  {}
>(
  validateQuery,
  /** @__PURE__ */ Namespace.http.query(),
  /** @__PURE__ */ Namespace.validate(),
);
export { validateQueryPure as validateQuery };

/* -----------------------------------------------------------
    HEADERS
----------------------------------------------------------- */
/**
 * > You must configure the generic argument `T`.
 *
 * Headers decoder (for express and fastify).
 *
 * `typia.http.headers()` is a function decoding an header instance, with automatic
 * type casting to the expected type. When property type be defined as `boolean` or
 * `number` type, `typia.http.headers()` will cast the value to the expected type.
 *
 * By the way, as HTTP headers are not enough to express complex data structures,
 * `typia.http.headers()` function has some limitations. If target type `T` is not
 * following those restrictions, compilation errors would be occured.
 *
 *  1. Type `T` must be an object type
 *  2. Do not allow dynamic property
 *  3. Property key must be lower case
 *  4. Property value cannot be `null`, but `undefined` is possible
 *  5. Only `boolean`, `bigint`, `number`, `string` or their array types are allowed
 *  6. By the way, union type never be not allowed
 *  7. Property `set-cookie` must be array type
 *  8. Those properties cannot be array type
 *    - age
 *    - authorization
 *    - content-length
 *    - content-type
 *    - etag
 *    - expires
 *    - from
 *    - host
 *    - if-modified-since
 *    - if-unmodified-since
 *    - last-modified
 *    - location
 *    - max-forwards
 *    - proxy-authorization
 *    - referer
 *    - retry-after
 *    - server
 *    - user-agent
 *
 * Also, `typia.http.headers()` function does not perform validation about the decoded
 * value. Therefore, if you can't sure that input data is following the `T` type,
 * it would better to call one of below functions intead.
 *
 *  - {@link assertHeaders}
 *  - {@link isHeaders}
 *  - {@link validateHeaders}
 *
 * @template T Expected type of decoded value
 * @param input Query string or URLSearchParams instance
 * @returns Decoded headers object
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function headers(): never;

/**
 * Headers decoder (for express and fastify).
 *
 * `typia.http.headers()` is a function decoding an header instance, with automatic
 * type casting to the expected type. When property type be defined as `boolean` or
 * `number` type, `typia.http.headers()` will cast the value to the expected type.
 *
 * By the way, as HTTP headers are not enough to express complex data structures,
 * `typia.http.headers()` function has some limitations. If target type `T` is not
 * following those restrictions, compilation errors would be occured.
 *
 *  1. Type `T` must be an object type
 *  2. Do not allow dynamic property
 *  3. Property key must be lower case
 *  4. Property value cannot be `null`, but `undefined` is possible
 *  5. Only `boolean`, `bigint`, `number`, `string` or their array types are allowed
 *  6. By the way, union type never be not allowed
 *  7. Property `set-cookie` must be array type
 *  8. Those properties cannot be array type
 *    - age
 *    - authorization
 *    - content-length
 *    - content-type
 *    - etag
 *    - expires
 *    - from
 *    - host
 *    - if-modified-since
 *    - if-unmodified-since
 *    - last-modified
 *    - location
 *    - max-forwards
 *    - proxy-authorization
 *    - referer
 *    - retry-after
 *    - server
 *    - user-agent
 *
 * Also, `typia.http.headers()` function does not perform validation about the decoded
 * value. Therefore, if you can't sure that input data is following the `T` type,
 * it would better to call one of below functions intead.
 *
 *  - {@link assertHeaders}
 *  - {@link isHeaders}
 *  - {@link validateHeaders}
 *
 * @template T Expected type of decoded value
 * @param input Query string or URLSearchParams instance
 * @returns Decoded headers object
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function headers<T extends object>(
  input: Record<string, string | string[] | undefined>,
): Resolved<T>;

/**
 * @internal
 */
function headers(): never {
  halt("headers");
}

const headersPure = /** @__PURE__ */ Object.assign<typeof headers, {}>(
  headers,
  /** @__PURE__ */ Namespace.http.headers(),
);
export { headersPure as headers };

/**
 * > You must configure the generic argument `T`.
 *
 * Headers decoder with type assertion (for express and fastify).
 *
 * `typia.http.assertHeaders()` is a function decoding an header instance, with
 * automatic type casting to the expected type. When property type be defined as
 * `boolean` or `number` type, `typia.http.headers()` will cast the value to the
 * expected type.
 *
 * Also, after decoding, `typia.http.assertHeaders()` performs type assertion to the
 * decoded value by combining with {@link assert} function. Therefore, when the
 * decoded value is not following the `T` type, {@link TypeGuardError} would be
 * thrown.
 *
 * By the way, as HTTP headers are not enough to express complex data structures,
 * `typia.http.headers()` function has some limitations. If target type `T` is not
 * following those restrictions, compilation errors would be occured.
 *
 *  1. Type `T` must be an object type
 *  2. Do not allow dynamic property
 *  3. Property key must be lower case
 *  4. Property value cannot be `null`, but `undefined` is possible
 *  5. Only `boolean`, `bigint`, `number`, `string` or their array types are allowed
 *  6. By the way, union type never be not allowed
 *  7. Property `set-cookie` must be array type
 *  8. Those properties cannot be array type
 *    - age
 *    - authorization
 *    - content-length
 *    - content-type
 *    - etag
 *    - expires
 *    - from
 *    - host
 *    - if-modified-since
 *    - if-unmodified-since
 *    - last-modified
 *    - location
 *    - max-forwards
 *    - proxy-authorization
 *    - referer
 *    - retry-after
 *    - server
 *    - user-agent
 *
 * @template T Expected type of decoded value
 * @param input Query string or URLSearchParams instance
 * @returns Decoded headers object
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function assertHeaders(): never;

/**
 * Headers decoder with type assertion (for express and fastify).
 *
 * `typia.http.assertHeaders()` is a function decoding an header instance, with
 * automatic type casting to the expected type. When property type be defined as
 * `boolean` or `number` type, `typia.http.headers()` will cast the value to the
 * expected type.
 *
 * Also, after decoding, `typia.http.assertHeaders()` performs type assertion to the
 * decoded value by combining with {@link assert} function. Therefore, when the
 * decoded value is not following the `T` type, {@link TypeGuardError} would be
 * thrown.
 *
 * By the way, as HTTP headers are not enough to express complex data structures,
 * `typia.http.headers()` function has some limitations. If target type `T` is not
 * following those restrictions, compilation errors would be occured.
 *
 *  1. Type `T` must be an object type
 *  2. Do not allow dynamic property
 *  3. Property key must be lower case
 *  4. Property value cannot be `null`, but `undefined` is possible
 *  5. Only `boolean`, `bigint`, `number`, `string` or their array types are allowed
 *  6. By the way, union type never be not allowed
 *  7. Property `set-cookie` must be array type
 *  8. Those properties cannot be array type
 *    - age
 *    - authorization
 *    - content-length
 *    - content-type
 *    - etag
 *    - expires
 *    - from
 *    - host
 *    - if-modified-since
 *    - if-unmodified-since
 *    - last-modified
 *    - location
 *    - max-forwards
 *    - proxy-authorization
 *    - referer
 *    - retry-after
 *    - server
 *    - user-agent
 *
 * @template T Expected type of decoded value
 * @param input Query string or URLSearchParams instance
 * @returns Decoded headers object
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function assertHeaders<T extends object>(
  input: Record<string, string | string[] | undefined>,
): Resolved<T>;

/**
 * @internal
 */
function assertHeaders(): never {
  halt("assertHeaders");
}

const assertHeadersPure = /** @__PURE__ */ Object.assign<
  typeof assertHeaders,
  {},
  {}
>(
  assertHeaders,
  /** @__PURE__ */ Namespace.http.headers(),
  /** @__PURE__ */ Namespace.assert("http.assertHeaders"),
);
export { assertHeadersPure as assertHeaders };

/**
 * > You must configure the generic argument `T`.
 *
 * Headers decoder with type checking (for express and fastify).
 *
 * `typia.http.isHeaders()` is a function decoding an header instance, with
 * automatic type casting to the expected type. When property type be defined as
 * `boolean` or `number` type, `typia.http.headers()` will cast the value to the
 * expected type.
 *
 * Also, after decoding, `typia.http.isHeaders()` performs type checking to the
 * decoded value by combining with {@link is} function. Therefore, when the
 * decoded value is not following the `T` type, `null` value would be returned.
 *
 * By the way, as HTTP headers are not enough to express complex data structures,
 * `typia.http.headers()` function has some limitations. If target type `T` is not
 * following those restrictions, compilation errors would be occured.
 *
 *  1. Type `T` must be an object type
 *  2. Do not allow dynamic property
 *  3. Property key must be lower case
 *  4. Property value cannot be `null`, but `undefined` is possible
 *  5. Only `boolean`, `bigint`, `number`, `string` or their array types are allowed
 *  6. By the way, union type never be not allowed
 *  7. Property `set-cookie` must be array type
 *  8. Those properties cannot be array type
 *    - age
 *    - authorization
 *    - content-length
 *    - content-type
 *    - etag
 *    - expires
 *    - from
 *    - host
 *    - if-modified-since
 *    - if-unmodified-since
 *    - last-modified
 *    - location
 *    - max-forwards
 *    - proxy-authorization
 *    - referer
 *    - retry-after
 *    - server
 *    - user-agent
 *
 * @template T Expected type of decoded value
 * @param input Query string or URLSearchParams instance
 * @returns Decoded headers object or `null` value
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function isHeaders(): never;

/**
 * > You must configure the generic argument `T`.
 *
 * Headers decoder with type checking (for express and fastify).
 *
 * `typia.http.isHeaders()` is a function decoding an header instance, with
 * automatic type casting to the expected type. When property type be defined as
 * `boolean` or `number` type, `typia.http.headers()` will cast the value to the
 * expected type.
 *
 * Also, after decoding, `typia.http.isHeaders()` performs type checking to the
 * decoded value by combining with {@link is} function. Therefore, when the
 * decoded value is not following the `T` type, `null` value would be returned.
 *
 * By the way, as HTTP headers are not enough to express complex data structures,
 * `typia.http.headers()` function has some limitations. If target type `T` is not
 * following those restrictions, compilation errors would be occured.
 *
 *  1. Type `T` must be an object type
 *  2. Do not allow dynamic property
 *  3. Property key must be lower case
 *  4. Property value cannot be `null`, but `undefined` is possible
 *  5. Only `boolean`, `bigint`, `number`, `string` or their array types are allowed
 *  6. By the way, union type never be not allowed
 *  7. Property `set-cookie` must be array type
 *  8. Those properties cannot be array type
 *    - age
 *    - authorization
 *    - content-length
 *    - content-type
 *    - etag
 *    - expires
 *    - from
 *    - host
 *    - if-modified-since
 *    - if-unmodified-since
 *    - last-modified
 *    - location
 *    - max-forwards
 *    - proxy-authorization
 *    - referer
 *    - retry-after
 *    - server
 *    - user-agent
 *
 * @template T Expected type of decoded value
 * @param input Query string or URLSearchParams instance
 * @returns Decoded headers object or `null` value
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function isHeaders<T extends object>(
  input: Record<string, string | string[] | undefined>,
): Resolved<T> | null;

/**
 * @internal
 */
function isHeaders(): never {
  halt("isHeaders");
}
const isHeadersPure = /** @__PURE__ */ Object.assign<typeof isHeaders, {}, {}>(
  isHeaders,
  /** @__PURE__ */ Namespace.http.headers(),
  /** @__PURE__ */ Namespace.is(),
);
export { isHeadersPure as isHeaders };

/**
 * > You must configure the generic argument `T`.
 *
 * Headers decoder with type validation (for express and fastify).
 *
 * `typia.http.validateHeaders()` is a function decoding an header instance, with
 * automatic type casting to the expected type. When property type be defined as
 * `boolean` or `number` type, `typia.http.headers()` will cast the value to the
 * expected type.
 *
 * Also, after decoding, `typia.http.validateHeaders()` performs type assertion to the
 * decoded value by combining with {@link validate} function. Therefore, when the
 * decoded value is not following the `T` type, {@link IValidation.IError} would be
 * returned. Otherwise, {@link IValidation.ISuccess} be returned.
 *
 * By the way, as HTTP headers are not enough to express complex data structures,
 * `typia.http.headers()` function has some limitations. If target type `T` is not
 * following those restrictions, compilation errors would be occured.
 *
 *  1. Type `T` must be an object type
 *  2. Do not allow dynamic property
 *  3. Property key must be lower case
 *  4. Property value cannot be `null`, but `undefined` is possible
 *  5. Only `boolean`, `bigint`, `number`, `string` or their array types are allowed
 *  6. By the way, union type never be not allowed
 *  7. Property `set-cookie` must be array type
 *  8. Those properties cannot be array type
 *    - age
 *    - authorization
 *    - content-length
 *    - content-type
 *    - etag
 *    - expires
 *    - from
 *    - host
 *    - if-modified-since
 *    - if-unmodified-since
 *    - last-modified
 *    - location
 *    - max-forwards
 *    - proxy-authorization
 *    - referer
 *    - retry-after
 *    - server
 *    - user-agent
 *
 * @template T Expected type of decoded value
 * @param input Query string or URLSearchParams instance
 * @returns Decoded headers object
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function validateHeaders(): never;

/**
 * Headers decoder with type validation (for express and fastify).
 *
 * `typia.http.validateHeaders()` is a function decoding an header instance, with
 * automatic type casting to the expected type. When property type be defined as
 * `boolean` or `number` type, `typia.http.headers()` will cast the value to the
 * expected type.
 *
 * Also, after decoding, `typia.http.validateHeaders()` performs type assertion to the
 * decoded value by combining with {@link validate} function. Therefore, when the
 * decoded value is not following the `T` type, {@link IValidation.IError} would be
 * returned. Otherwise, {@link IValidation.ISuccess} be returned.
 *
 * By the way, as HTTP headers are not enough to express complex data structures,
 * `typia.http.headers()` function has some limitations. If target type `T` is not
 * following those restrictions, compilation errors would be occured.
 *
 *  1. Type `T` must be an object type
 *  2. Do not allow dynamic property
 *  3. Property key must be lower case
 *  4. Property value cannot be `null`, but `undefined` is possible
 *  5. Only `boolean`, `bigint`, `number`, `string` or their array types are allowed
 *  6. By the way, union type never be not allowed
 *  7. Property `set-cookie` must be array type
 *  8. Those properties cannot be array type
 *    - age
 *    - authorization
 *    - content-length
 *    - content-type
 *    - etag
 *    - expires
 *    - from
 *    - host
 *    - if-modified-since
 *    - if-unmodified-since
 *    - last-modified
 *    - location
 *    - max-forwards
 *    - proxy-authorization
 *    - referer
 *    - retry-after
 *    - server
 *    - user-agent
 *
 * @template T Expected type of decoded value
 * @param input Query string or URLSearchParams instance
 * @returns Decoded headers object
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function validateHeaders<T extends object>(
  input: Record<string, string | string[] | undefined>,
): IValidation<Resolved<T>>;

/**
 * @internal
 */
function validateHeaders(): never {
  halt("validateHeaders");
}

const validateHeadersPure = /** @__PURE__ */ Object.assign<
  typeof validateHeaders,
  {},
  {}
>(
  validateHeaders,
  /** @__PURE__ */ Namespace.http.headers(),
  /** @__PURE__ */ Namespace.validate(),
);
export { validateHeadersPure as validateHeaders };

/* -----------------------------------------------------------
    PARAMETER
----------------------------------------------------------- */
/**
 * > You must configure the generic argument `T`.
 *
 * URL path parameter decoder.
 *
 * `typia.http.parameter()` is a function decoding a path parameter, with automatic
 * type casting to the expected type. When type `T` has beeen defined as `boolean` or
 * `number` type, `typia.http.parameter()` will cast the value to the expected type.
 *
 * Also, `typia.http.parameter()` performs type assertion to the decoded value by
 * combining with {@link assert} function. Therefore, when the decoded value is not
 * following the `T` type, {@link TypeGuardError} would be thrown.
 *
 * @template T Expected type of decoded value
 * @param input Path parameter string
 * @returns Decoded path parameter value
 */
function parameter(): never;

/**
 * URL path parameter decoder.
 *
 * `typia.http.parameter()` is a function decoding a path parameter, with automatic
 * type casting to the expected type. When type `T` has beeen defined as `boolean` or
 * `number` type, `typia.http.parameter()` will cast the value to the expected type.
 *
 * Also, `typia.http.parameter()` performs type assertion to the decoded value by
 * combining with {@link assert} function. Therefore, when the decoded value is not
 * following the `T` type, {@link TypeGuardError} would be thrown.
 *
 * @template T Expected type of decoded value
 * @param input Path parameter string
 * @returns Decoded path parameter value
 */
function parameter<T extends Atomic.Type | null>(input: string): Resolved<T>;

/**
 * @internal
 */
function parameter(): never {
  halt("parameter");
}

const parameterPure = /** @__PURE__ */ Object.assign<typeof parameter, {}, {}>(
  parameter,
  /** @__PURE__ */ Namespace.http.parameter(),
  /** @__PURE__ */ Namespace.assert("http.parameter"),
);
export { parameterPure as parameter };

/* -----------------------------------------------------------
    FACTORY FUNCTIONS
----------------------------------------------------------- */
/**
 * Creates a reusable {@link formdata} function.
 *
 * @danger You must configure the generic argument `T`
 * @template T The type of the formdata object
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createFormData(): never;

/**
 * Creates a reusable {@link formdata} function.
 *
 * @template T The type of the formdata object
 * @returns A reusable `formdata` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createFormData<T extends object>(): (input: FormData) => T;

/**
 * @internal
 */
function createFormData<T>(): (input: FormData) => T {
  halt("createFormData");
}

const createFormDataPure = /** @__PURE__ */ Object.assign<
  typeof createFormData,
  {}
>(createFormData, /** @__PURE__ */ Namespace.http.formData());
export { createFormDataPure as createFormData };

/**
 * Creates a reusable {@link assertFormData} function.
 *
 * @danger You must configure the generic argument `T`
 * @template T The type of the formdata object
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createAssertFormData(): never;

/**
 * Creates a reusable {@link assertFormData} function.
 *
 * @template T The type of the formdata object
 * @returns A reusable `assertFormData` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createAssertFormData<T extends object>(): (input: FormData) => T;

/**
 * @internal
 */
function createAssertFormData<T>(): (input: FormData) => T {
  halt("createAssertFormData");
}

const createAssertFormDataPure = /** @__PURE__ */ Object.assign<
  typeof createAssertFormData,
  {},
  {}
>(
  createAssertFormData,
  /** @__PURE__ */ Namespace.http.formData(),
  /** @__PURE__ */ Namespace.assert("http.createAssertFormData"),
);
export { createAssertFormDataPure as createAssertFormData };

/**
 * Creates a reusable {@link isFormData} function.
 *
 * @danger You must configure the generic argument `T`
 * @template T The type of the formdata object
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createIsFormData(): never;

/**
 * Creates a reusable {@link isFormData} function.
 *
 * @template T The type of the formdata object
 * @returns A reusable `isFormData` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createIsFormData<T extends object>(): (input: FormData) => T | null;

/**
 * @internal
 */
function createIsFormData<T>(): (input: FormData) => T | null {
  halt("createIsFormData");
}

const createIsFormDataPure = /** @__PURE__ */ Object.assign<
  typeof createIsFormData,
  {},
  {}
>(
  createIsFormData,
  /** @__PURE__ */ Namespace.http.formData(),
  /** @__PURE__ */ Namespace.is(),
);
export { createIsFormDataPure as createIsFormData };

/**
 * Creates a reusable {@link validateFormData} function.
 *
 * @danger You must configure the generic argument `T`
 * @template T The type of the formdata object
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createValidateFormData(): never;

/**
 * Creates a reusable {@link validateFormData} function.
 *
 * @template T The type of the formdata object
 * @returns A reusable `validateFormData` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createValidateFormData<T extends object>(): (
  input: FormData,
) => IValidation<Resolved<T>>;

/**
 * @internal
 */
function createValidateFormData<T>(): (
  input: FormData,
) => IValidation<Resolved<T>> {
  halt("createValidateFormData");
}

const createValidateFormDataPure = /** @__PURE__ */ Object.assign<
  typeof createValidateFormData,
  {},
  {}
>(
  createValidateFormData,
  /** @__PURE__ */ Namespace.http.formData(),
  /** @__PURE__ */ Namespace.validate(),
);
export { createValidateFormDataPure as createValidateFormData };

/**
 * Creates a reusable {@link query} function.
 *
 * @danger You must configure the generic argument `T`
 * @template T The type of the query object
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createQuery(): never;

/**
 * Creates a reusable {@link query} function.
 *
 * @template T The type of the query object
 * @returns A reusable `query` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createQuery<T extends object>(): (
  input: string | URLSearchParams,
) => T;

/**
 * @internal
 */
function createQuery<T>(): (input: string | URLSearchParams) => T {
  halt("createQuery");
}

const createQueryPure = /** @__PURE__ */ Object.assign<typeof createQuery, {}>(
  createQuery,
  /** @__PURE__ */ Namespace.http.query(),
);
export { createQueryPure as createQuery };

/**
 * Creates a reusable {@link assertQuery} function.
 *
 * @danger You must configure the generic argument `T`
 * @template T The type of the query object
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createAssertQuery(): never;

/**
 * Creates a reusable {@link assertQuery} function.
 *
 * @template T The type of the query object
 * @returns A reusable `assertQuery` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createAssertQuery<T extends object>(): (
  input: string | URLSearchParams,
) => T;

/**
 * @internal
 */
function createAssertQuery<T>(): (input: string | URLSearchParams) => T {
  halt("createAssertQuery");
}

const createAssertQueryPure = /** @__PURE__ */ Object.assign<
  typeof createAssertQuery,
  {},
  {}
>(
  createAssertQuery,
  /** @__PURE__ */ Namespace.http.query(),
  /** @__PURE__ */ Namespace.assert("http.createAssertQuery"),
);
export { createAssertQueryPure as createAssertQuery };

/**
 * Creates a reusable {@link isQuery} function.
 *
 * @danger You must configure the generic argument `T`
 * @template T The type of the query object
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createIsQuery(): never;

/**
 * Creates a reusable {@link isQuery} function.
 *
 * @template T The type of the query object
 * @returns A reusable `isQuery` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createIsQuery<T extends object>(): (
  input: string | URLSearchParams,
) => T | null;

/**
 * @internal
 */
function createIsQuery<T>(): (input: string | URLSearchParams) => T | null {
  halt("createIsQuery");
}

const createIsQueryPure = /** @__PURE__ */ Object.assign<
  typeof createIsQuery,
  {},
  {}
>(
  createIsQuery,
  /** @__PURE__ */ Namespace.http.query(),
  /** @__PURE__ */ Namespace.is(),
);
export { createIsQueryPure as createIsQuery };

/**
 * Creates a reusable {@link validateQuery} function.
 *
 * @danger You must configure the generic argument `T`
 * @template T The type of the query object
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createValidateQuery(): never;

/**
 * Creates a reusable {@link validateQuery} function.
 *
 * @template T The type of the query object
 * @returns A reusable `validateQuery` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createValidateQuery<T extends object>(): (
  input: string | URLSearchParams,
) => IValidation<Resolved<T>>;

/**
 * @internal
 */
function createValidateQuery<T>(): (
  input: string | URLSearchParams,
) => IValidation<Resolved<T>> {
  halt("createValidateQuery");
}

const createValidateQueryPure = /** @__PURE__ */ Object.assign<
  typeof createValidateQuery,
  {},
  {}
>(
  createValidateQuery,
  /** @__PURE__ */ Namespace.http.query(),
  /** @__PURE__ */ Namespace.validate(),
);
export { createValidateQueryPure as createValidateQuery };

/**
 * Creates a reusable {@link headers} function.
 *
 * @danger You must configure the generic argument `T`
 * @template T The type of the headers object
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createHeaders(): never;

/**
 * Creates a reusable {@link headers} function.
 *
 * @template T The type of the headers object
 * @returns A reusable `headers` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createHeaders<T extends object>(): (
  input: Record<string, string | string[] | undefined>,
) => T;

/**
 * @internal
 */
function createHeaders<T>(): (
  input: Record<string, string | string[] | undefined>,
) => T {
  halt("createHeaders");
}

const createHeadersPure = /** @__PURE__ */ Object.assign<
  typeof createHeaders,
  {}
>(createHeaders, /** @__PURE__ */ Namespace.http.headers());
export { createHeadersPure as createHeaders };

/**
 * Creates a reusable {@link assertHeaders} function.
 *
 * @danger You must configure the generic argument `T`
 * @template T The type of the headers object
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createAssertHeaders(): never;

/**
 * Creates a reusable {@link assertHeaders} function.
 *
 * @template T The type of the headers object
 * @returns A reusable `assertHeaders` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createAssertHeaders<T extends object>(): (
  input: Record<string, string | string[] | undefined>,
) => T;

/**
 * @internal
 */
function createAssertHeaders<T>(): (
  input: Record<string, string | string[] | undefined>,
) => T {
  halt("createAssertHeaders");
}

const createAssertHeadersPure = /** @__PURE__ */ Object.assign<
  typeof createAssertHeaders,
  {},
  {}
>(
  createAssertHeaders,
  /** @__PURE__ */ Namespace.http.headers(),
  /** @__PURE__ */ Namespace.assert("http.createAssertHeaders"),
);
export { createAssertHeadersPure as createAssertHeaders };

/**
 * Creates a reusable {@link isHeaders} function.
 *
 * @danger You must configure the generic argument `T`
 * @template T The type of the headers object
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createIsHeaders(): never;

/**
 * Creates a reusable {@link isHeaders} function.
 *
 * @template T The type of the headers object
 * @returns A reusable `isHeaders` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createIsHeaders<T extends object>(): (
  input: Record<string, string | string[] | undefined>,
) => T | null;

/**
 * @internal
 */
function createIsHeaders<T>(): (
  input: Record<string, string | string[] | undefined>,
) => T | null {
  halt("createIsHeaders");
}

const createIsHeadersPure = /** @__PURE__ */ Object.assign<
  typeof createIsHeaders,
  {},
  {}
>(
  createIsHeaders,
  /** @__PURE__ */ Namespace.http.headers(),
  /** @__PURE__ */ Namespace.is(),
);
export { createIsHeadersPure as createIsHeaders };

/**
 * Creates a reusable {@link validateHeaders} function.
 *
 * @danger You must configure the generic argument `T`
 * @template T The type of the headers object
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createValidateHeaders(): never;

/**
 * Creates a reusable {@link validateHeaders} function.
 *
 * @template T The type of the headers object
 * @returns A reusable `validateHeaders` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createValidateHeaders<T extends object>(): (
  input: Record<string, string | string[] | undefined>,
) => IValidation<Resolved<T>>;

/**
 * @internal
 */
function createValidateHeaders<T>(): (
  input: Record<string, string | string[] | undefined>,
) => IValidation<Resolved<T>> {
  halt("createValidateHeaders");
}

const createValidateHeadersPure = /** @__PURE__ */ Object.assign<
  typeof createValidateHeaders,
  {},
  {}
>(
  createValidateHeaders,
  /** @__PURE__ */ Namespace.http.headers(),
  /** @__PURE__ */ Namespace.validate(),
);
export { createValidateHeadersPure as createValidateHeaders };

/**
 * Creates a reusable {@link parameter} function.
 *
 * @danger You must configure the generic argument `T`
 * @template T The type of the parameter value
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createParameter(): never;

/**
 * Creates a reusable {@link parameter} function.
 *
 * @template T The type of the parameter value
 * @returns A reusable `parameter` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createParameter<T extends Atomic.Type | null>(): (input: string) => T;

/**
 * @internal
 */
function createParameter<T extends Atomic.Type | null>(): (input: string) => T {
  halt("createParameter");
}

const createParameterPure = /** @__PURE__ */ Object.assign<
  typeof createParameter,
  {},
  {}
>(
  createParameter,
  /** @__PURE__ */ Namespace.http.parameter(),
  /** @__PURE__ */ Namespace.assert("http.createParameter"),
);
export { createParameterPure as createParameter };

/**
 * @internal
 */
function halt(name: string): never {
  throw new Error(
    `Error on typia.http.${name}(): no transform has been configured. Read and follow https://typia.io/docs/setup please.`,
  );
}
