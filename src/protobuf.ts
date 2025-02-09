import * as Namespace from "./functional/Namespace";

import { IValidation } from "./IValidation";
import { Resolved } from "./Resolved";

/* ===========================================================
    PROTOCOL BUFFER
      - MESSAGE
      - DECODE
      - ENCODE
      - FACTORY FUNCTIONS
==============================================================
    SCHEMA
----------------------------------------------------------- */
/**
 * > You must configure the generic argument `T`.
 *
 * Protocol Buffer Message Schema.
 *
 * Creates a Protocol Buffer Message Schema from a TypeScript type. The message
 * schema would be returned as a string value, and it can be used to share with
 * other developers/languages/frameworks.
 *
 * For reference, Protocol Buffer has lots of restrictions, so that expression power
 * of Protocol Buffer is not enough strong to fully meet the TypeScript type specs.
 * In such reason, if you put a TypeScript type that is not compatible with Protocol
 * Buffer, this function would throw compilation errors.
 *
 *  - [Restrictions of Protocol Buffer](https://typia.io/docs/protobuf/message/#restrictions)
 *
 * @template T Target type
 * @returns Protocol Buffer Message Schema.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function message(): never;

/**
 * Protocol Buffer Message Schema.
 *
 * Creates a Protocol Buffer Message Schema from a TypeScript type. The message
 * schema would be returned as a string value, and it can be used to share with
 * other developers/languages/frameworks.
 *
 * For reference, Protocol Buffer has lots of restrictions, so that expression power
 * of Protocol Buffer is not enough strong to fully meet the TypeScript type specs.
 * In such reason, if you put a TypeScript type that is not compatible with Protocol
 * Buffer, this function would throw compilation errors.
 *
 * @template T Target type
 * @returns Protocol Buffer Message Schema.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function message<T>(): string;

/**
 * @internal
 */
export function message(): never {
  halt("message");
}

/* -----------------------------------------------------------
    DECODE
----------------------------------------------------------- */
/**
 * > You must configure the generic argument `T`.
 *
 * Protocol Buffer Decoder.
 *
 * `typia.protobuf.decode()` is a function decoding a binary data of Protocol Buffer
 * format to a TypeScript instance.
 *
 * For reference, as Protocol Buffer handles binary data directly, there's no way
 * when `input` binary data was not encoded from the `T` typed value. In that case,
 * unexpected behavior or internal error would be occured. Therefore, I recommend you
 * to encode binary data of Protocol Buffer from type safe encode functions like below.
 * Use {@link encode} function only when you can ensure it.
 *
 *  - {@link assertEncode}
 *  - {@link isEncode}
 *  - {@link validateEncode}
 *
 * Also, `typia` is providing type safe decoders like {@link assertDecode}, but it
 * is just for additional type validation like `number & Minimum<7>` or
 * `string & Format<"uuid">` cases, that are represented by
 * [custom tags](https://typia.io/docs/validators/tags). Thus, I repeat that,
 * you've to ensure the type safety when using decoder functions.
 *
 * @template T Expected type of decoded value
 * @param input Protobuf Buffer binary data
 * @returns Decoded value
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function decode(input: Uint8Array): never;

/**
 * Protocol Buffer Decoder.
 *
 * `typia.protobuf.decode()` is a function decoding a binary data of Protocol Buffer
 * format to a TypeScript instance.
 *
 * For reference, as Protocol Buffer handles binary data directly, there's no way
 * when `input` binary data was not encoded from the `T` typed value. In that case,
 * unexpected behavior or internal error would be occured. Therefore, I recommend you
 * to encode binary data of Protocol Buffer from type safe encode functions like below.
 * Use {@link encode} function only when you can ensure it.
 *
 *  - {@link assertEncode}
 *  - {@link isEncode}
 *  - {@link validateEncode}
 *
 * Also, `typia` is providing type safe decoders like {@link assertDecode}, but it
 * is just for additional type validation like `number & Minimum<7>` or
 * `string & Format<"uuid">` cases, that are represented by
 * [custom tags](https://typia.io/docs/validators/tags). Thus, I repeat that,
 * you've to ensure the type safety when using decoder functions.
 *
 * @template T Expected type of decoded value
 * @param input Protobuf Buffer binary data
 * @returns Decoded value
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function decode<T>(input: Uint8Array): Resolved<T>;

/**
 * @internal
 */
function decode(): never {
  halt("decode");
}
const decodePure = /** @__PURE__ */ Object.assign<typeof decode, {}>(
  decode,
  /** @__PURE__ */ Namespace.protobuf.decode("decode"),
);
export { decodePure as decode };

/**
 * > You must configure the generic argument `T`.
 *
 * Protocol Buffer Decoder wity type assertion, but not safe.
 *
 * `typia.protobuf.assertDecode()` is a combination function of {@link decode} and
 * {@link assert} function. Therefore, it decodes a binary data of Protocol Buffer to
 * a TypeScript instance, and performs type assertion process. If decoded value is
 * following the type `T`, it returns the decoded value. Otherwise, it throws
 * {@link TypeGuardError} instead.
 *
 * However, note that, this validation is not always safe. It just performs additional
 * type assertion like `number & Minimum<7>` or `string & Format<"uuid">` cases,
 * that are represented by [custom tags](https://typia.io/docs/validators/tags).
 * Therefore, when using `typia.protobuf.assertDecode<T>()` function, you have to
 * ensure the type safety by yourself.
 *
 * In such type safety reason, I recommend you to use type safe encode functions.
 *
 *  - {@link assertEncode}
 *  - {@link isEncode}
 *  - {@link validateEncode}
 *
 * @template T Expected type of decoded value
 * @param input Protobuf Buffer binary data
 * @returns Decoded value
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function assertDecode(input: Uint8Array): never;

/**
 * Protocol Buffer Decoder wity type assertion, but not safe.
 *
 * `typia.protobuf.assertDecode()` is a combination function of {@link decode} and
 * {@link assert} function. Therefore, it decodes a binary data of Protocol Buffer to
 * a TypeScript instance, and performs type assertion process. If decoded value is
 * following the type `T`, it returns the decoded value. Otherwise, it throws
 * {@link TypeGuardError} instead.
 *
 * However, note that, this validation is not always safe. It just performs additional
 * type assertion like `number & Minimum<7>` or `string & Format<"uuid">` cases,
 * that are represented by [custom tags](https://typia.io/docs/validators/tags).
 * Therefore, when using `typia.protobuf.assertDecode<T>()` function, you have to
 * ensure the type safety by yourself.
 *
 * In such type safety reason, I recommend you to use type safe encode functions.
 *
 *  - {@link assertEncode}
 *  - {@link isEncode}
 *  - {@link validateEncode}
 *
 * @template T Expected type of decoded value
 * @param input Protobuf Buffer binary data
 * @returns Decoded value
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function assertDecode<T>(input: Uint8Array): Resolved<T>;

/**
 * @internal
 */
function assertDecode(): never {
  halt("assertDecode");
}

const assertDecodePure = /** @__PURE__ */ Object.assign<
  typeof assertDecode,
  {},
  {}
>(
  assertDecode,
  /** @__PURE__ */ Namespace.assert("protobuf.assertDecode"),
  /** @__PURE__ */ Namespace.protobuf.decode("assertDecode"),
);
export { assertDecodePure as assertDecode };

/**
 * > You must configure the generic argument `T`.
 *
 * Protocol Buffer Decoder wity type checking, but not safe.
 *
 * `typia.protobuf.isDecode()` is a combination function of {@link decode} and
 * {@link is} function. Therefore, it decodes a binary data of Protocol Buffer to
 * a TypeScript instance, and performs type checking process. If decoded value is
 * following the type `T`, it returns the decoded value. Otherwise, it returns
 * `null` value instead.
 *
 * However, note that, this validation is not always safe. It just performs additional
 * type checking like `number & Minimum<7>` or `string & Format<"uuid">` cases,
 * that are represented by [custom tags](https://typia.io/docs/validators/tags).
 * Therefore, when using `typia.protobuf.isDecode<T>()` function, you have to
 * ensure the type safety by yourself.
 *
 * In such type safety reason, I recommend you to use type safe encode functions.
 *
 *  - {@link assertEncode}
 *  - {@link isEncode}
 *  - {@link validateEncode}
 *
 * @template T Expected type of decoded value
 * @param input Protobuf Buffer binary data
 * @returns Decoded value
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function isDecode(input: Uint8Array): never;

/**
 * Protocol Buffer Decoder wity type checking, but not safe.
 *
 * `typia.protobuf.isDecode()` is a combination function of {@link decode} and
 * {@link is} function. Therefore, it decodes a binary data of Protocol Buffer to
 * a TypeScript instance, and performs type checking process. If decoded value is
 * following the type `T`, it returns the decoded value. Otherwise, it returns
 * `null` value instead.
 *
 * However, note that, this validation is not always safe. It just performs additional
 * type checking like `number & Minimum<7>` or `string & Format<"uuid">` cases,
 * that are represented by [custom tags](https://typia.io/docs/validators/tags).
 * Therefore, when using `typia.protobuf.isDecode<T>()` function, you have to
 * ensure the type safety by yourself.
 *
 * In such type safety reason, I recommend you to use type safe encode functions.
 *
 *  - {@link assertEncode}
 *  - {@link isEncode}
 *  - {@link validateEncode}
 *
 * @template T Expected type of decoded value
 * @param input Protobuf Buffer binary data
 * @returns Decoded value
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function isDecode<T>(input: Uint8Array): Resolved<T> | null;

/**
 * @internal
 */
function isDecode(): never {
  halt("isDecode");
}
const isDecodePure = /** @__PURE__ */ Object.assign<typeof isDecode, {}, {}>(
  isDecode,
  /** @__PURE__ */ Namespace.is(),
  /** @__PURE__ */ Namespace.protobuf.decode("isDecode"),
);
export { isDecodePure as isDecode };

/**
 * > You must configure the generic argument `T`.
 *
 * Protocol Buffer Decoder wity type validation, but not safe.
 *
 * `typia.protobuf.validateDecode()` is a combination function of {@link decode} and
 * {@link validate} function. Therefore, it decodes a binary data of Protocol Buffer to
 * a TypeScript instance, and performs type validation process. If decoded value is
 * following the type `T`, it returns the decoded value with
 * {@link IValidation.ISuccess} typed instance. Otherwise, it returns
 * {@link IValidation.IFailure} value instead with detailed error reasons.
 *
 * However, note that, this validation is not always safe. It just performs additional
 * type validation like `number & Minimum<7>` or `string & Format<"uuid">` cases,
 * that are represented by [custom tags](https://typia.io/docs/validators/tags).
 * Therefore, when using `typia.protobuf.validateDecode<T>()` function, you have to
 * ensure the type safety by yourself.
 *
 * In such type safety reason, I recommend you to use type safe encode functions.
 *
 *  - {@link assertEncode}
 *  - {@link isEncode}
 *  - {@link validateEncode}
 *
 * @template T Expected type of decoded value
 * @param input Protobuf Buffer binary data
 * @returns Decoded value
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function validateDecode(input: Uint8Array): never;

/**
 * Protocol Buffer Decoder wity type validation, but not safe.
 *
 * `typia.protobuf.validateDecode()` is a combination function of {@link decode} and
 * {@link validate} function. Therefore, it decodes a binary data of Protocol Buffer to
 * a TypeScript instance, and performs type validation process. If decoded value is
 * following the type `T`, it returns the decoded value with
 * {@link IValidation.ISuccess} typed instance. Otherwise, it returns
 * {@link IValidation.IFailure} value instead with detailed error reasons.
 *
 * However, note that, this validation is not always safe. It just performs additional
 * type validation like `number & Minimum<7>` or `string & Format<"uuid">` cases,
 * that are represented by [custom tags](https://typia.io/docs/validators/tags).
 * Therefore, when using `typia.protobuf.validateDecode<T>()` function, you have to
 * ensure the type safety by yourself.
 *
 * In such type safety reason, I recommend you to use type safe encode functions.
 *
 *  - {@link assertEncode}
 *  - {@link isEncode}
 *  - {@link validateEncode}
 *
 * @template T Expected type of decoded value
 * @param input Protobuf Buffer binary data
 * @returns Decoded value
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function validateDecode<T>(input: Uint8Array): IValidation<Resolved<T>>;

/**
 * @internal
 */
function validateDecode(): never {
  halt("validateDecode");
}
const validateDecodePure = /** @__PURE__ */ Object.assign<
  typeof validateDecode,
  {},
  {}
>(
  validateDecode,
  /** @__PURE__ */ Namespace.validate(),
  /** @__PURE__ */ Namespace.protobuf.decode("validateDecode"),
);
export { validateDecodePure as validateDecode };

/* -----------------------------------------------------------
    ENCODE
----------------------------------------------------------- */
/**
 * Protocol Buffer Encoder.
 *
 * Converts an input value to a binary data of Protocol Buffer format.
 *
 * For reference, this `typia.protobuf.encode()` does not validate the `input` value.
 * It just believes that the `input` value is valid and converts it to a binary data
 * directly. Therefore, if you can't ensure the `input` value type, it would better to
 * call one of below functions intead.
 *
 *  - {@link assertEncode}
 *  - {@link isEncode}
 *  - {@link validateEncode}
 *
 * By the way, you know what? Expression power of Protocol Buffer is not enough strong
 * to fully meet the TypeScript type specs. In such reason, if you put a TypeScript
 * type that is not compatible with Protocol Buffer, this function would throw
 * compilation errors.
 *
 *  - [Restrictions of Protocol Buffer](https://typia.io/docs/protobuf/message/#restrictions)
 *
 * @template T Type of the value input
 * @param input A value to encode
 * @returns Encoded binary data
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function encode<T>(input: T): Uint8Array;

/**
 * @internal
 */
function encode(): never {
  halt("encode");
}
const encodePure = /** @__PURE__ */ Object.assign<typeof encode, {}>(
  encode,
  /** @__PURE__ */ Namespace.protobuf.encode("encode"),
);
export { encodePure as encode };

/**
 * Protocol Buffer Encoder with type assertion.
 *
 * `typia.protobuf.assertEncode()` is a combination function of {@link assert} and
 * {@link encode}.
 *
 * Therefore, it converts an `input` value to a binary data of
 * Protocol Buffer, with type assertion. If `input` value is not valid, it throws
 * {@link TypeGuardError}. Otherwise, there's no problem on the `input` value,
 * Protocol Buffer binary data would be returned.
 *
 * If you can trust `input` value, or want to perform other type of validation, use
 * below functions intead.
 *
 *  - {@link encode}
 *  - {@link isEncode}
 *  - {@link validateEncode}
 *
 * By the way, you know what? Expression power of Protocol Buffer is not enough strong
 * to fully meet the TypeScript type specs. In such reason, if you put a TypeScript
 * type that is not compatible with Protocol Buffer, this function would throw
 * compilation errors.
 *
 *  - [Restrictions of Protocol Buffer](https://typia.io/docs/protobuf/message/#restrictions)
 *
 * @template T Type of the value input
 * @param input A value to encode
 * @returns Encoded binary data
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function assertEncode<T>(input: T): Uint8Array;

/**
 * Protocol Buffer Encoder with type assertion.
 *
 * `typia.protobuf.assertEncode()` is a combination function of {@link assert} and
 * {@link encode}.
 *
 * Therefore, it converts an `input` value to a binary data of
 * Protocol Buffer, with type assertion. If `input` value is not valid, it throws
 * {@link TypeGuardError}. Otherwise, there's no problem on the `input` value,
 * Protocol Buffer binary data would be returned.
 *
 * If you can trust `input` value, or want to perform other type of validation, use
 * below functions intead.
 *
 *  - {@link encode}
 *  - {@link isEncode}
 *  - {@link validateEncode}
 *
 * By the way, you know what? Expression power of Protocol Buffer is not enough strong
 * to fully meet the TypeScript type specs. In such reason, if you put a TypeScript
 * type that is not compatible with Protocol Buffer, this function would throw
 * compilation errors.
 *
 *  - [Restrictions of Protocol Buffer](https://typia.io/docs/protobuf/message/#restrictions)
 *
 * @template T Type of the value input
 * @param input A value to encode
 * @returns Encoded binary data
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function assertEncode<T>(input: unknown): Uint8Array;

/**
 * @internal
 */
function assertEncode(): never {
  halt("assertEncode");
}
const assertEncodePure = /** @__PURE__ */ Object.assign<
  typeof assertEncode,
  {},
  {}
>(
  assertEncode,
  /** @__PURE__ */ Namespace.assert("protobuf.assertEncode"),
  /** @__PURE__ */ Namespace.protobuf.encode("assertEncode"),
);
export { assertEncodePure as assertEncode };

/**
 * Protocol Buffer Encoder with type checking.
 *
 * `typia.protobuf.isEncode()` is a combination function of {@link is} and
 * {@link encode}.
 *
 * Therefore, it converts an `input` value to a binary data of
 * Protocol Buffer, with type checking. If `input` value is not valid, it returns
 * `null` value. Otherwise, there's no problem on the `input` value, Protocol
 * Buffer binary data would be returned.
 *
 * If you can trust `input` value, or want to perform other type of validation, use
 * below functions intead.
 *
 *  - {@link encode}
 *  - {@link assertEncode}
 *  - {@link validateEncode}
 *
 * By the way, you know what? Expression power of Protocol Buffer is not enough strong
 * to fully meet the TypeScript type specs. In such reason, if you put a TypeScript
 * type that is not compatible with Protocol Buffer, this function would throw
 * compilation errors.
 *
 *  - [Restrictions of Protocol Buffer](https://typia.io/docs/protobuf/message/#restrictions)
 *
 * @template T Type of the value input
 * @param input A value to encode
 * @returns Encoded binary data
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function isEncode<T>(input: T): Uint8Array | null;

/**
 * Protocol Buffer Encoder with type checking.
 *
 * `typia.protobuf.isEncode()` is a combination function of {@link is} and
 * {@link encode}.
 *
 * Therefore, it converts an `input` value to a binary data of
 * Protocol Buffer, with type checking. If `input` value is not valid, it returns
 * `null` value. Otherwise, there's no problem on the `input` value, Protocol
 * Buffer binary data would be returned.
 *
 * If you can trust `input` value, or want to perform other type of validation, use
 * below functions intead.
 *
 *  - {@link encode}
 *  - {@link assertEncode}
 *  - {@link validateEncode}
 *
 * By the way, you know what? Expression power of Protocol Buffer is not enough strong
 * to fully meet the TypeScript type specs. In such reason, if you put a TypeScript
 * type that is not compatible with Protocol Buffer, this function would throw
 * compilation errors.
 *
 *  - [Restrictions of Protocol Buffer](https://typia.io/docs/protobuf/message/#restrictions)
 *
 * @template T Type of the value input
 * @param input A value to encode
 * @returns Encoded binary data
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function isEncode<T>(input: unknown): Uint8Array | null;

/**
 * @internal
 */
function isEncode(): never {
  halt("isEncode");
}
const isEncodePure = /** @__PURE__ */ Object.assign<typeof isEncode, {}, {}>(
  isEncode,
  /** @__PURE__ */ Namespace.is(),
  /** @__PURE__ */ Namespace.protobuf.encode("isEncode"),
);
export { isEncodePure as isEncode };

/**
 * Protocol Buffer Encoder with type validation.
 *
 * `typia.protobuf.validateEncode()` is a combination function of
 * {@link validation} and {@link encode}.
 *
 * Therefore, it converts an `input` value to a binary data of
 * Protocol Buffer, with type validation. If `input` value is not valid, it returns
 * {@link IValidation.IFailure} value with detailed error reasons. Otherwise, there's
 * no problem on the `input` value, Protocol Buffer binary data would be stored in
 * `data` property of the output {@link IValidation.ISuccess} instance.
 *
 * If you can trust `input` value, or want to perform other type of validation, use
 * below functions intead.
 *
 *  - {@link encode}
 *  - {@link assertEncode}
 *  - {@link isEncode}
 *
 * By the way, you know what? Expression power of Protocol Buffer is not enough strong
 * to fully meet the TypeScript type specs. In such reason, if you put a TypeScript
 * type that is not compatible with Protocol Buffer, this function would throw
 * compilation errors.
 *
 *  - [Restrictions of Protocol Buffer](https://typia.io/docs/protobuf/message/#restrictions)
 *
 * @template T Type of the value input
 * @param input A value to encode
 * @returns Encoded binary data
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function validateEncode<T>(input: T): IValidation<Uint8Array>;

/**
 * Protocol Buffer Encoder with type validation.
 *
 * `typia.protobuf.validateEncode()` is a combination function of
 * {@link validation} and {@link encode}.
 *
 * Therefore, it converts an `input` value to a binary data of
 * Protocol Buffer, with type validation. If `input` value is not valid, it returns
 * {@link IValidation.IFailure} value with detailed error reasons. Otherwise, there's
 * no problem on the `input` value, Protocol Buffer binary data would be stored in
 * `data` property of the output {@link IValidation.ISuccess} instance.
 *
 * If you can trust `input` value, or want to perform other type of validation, use
 * below functions intead.
 *
 *  - {@link encode}
 *  - {@link assertEncode}
 *  - {@link isEncode}
 *
 * By the way, you know what? Expression power of Protocol Buffer is not enough strong
 * to fully meet the TypeScript type specs. In such reason, if you put a TypeScript
 * type that is not compatible with Protocol Buffer, this function would throw
 * compilation errors.
 *
 *  - [Restrictions of Protocol Buffer](https://typia.io/docs/protobuf/message/#restrictions)
 *
 * @template T Type of the value input
 * @param input A value to encode
 * @returns Encoded binary data
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function validateEncode<T>(input: unknown): IValidation<Uint8Array>;

/**
 * @internal
 */
function validateEncode(): never {
  halt("validateEncode");
}
const validateEncodePure = /** @__PURE__ */ Object.assign<
  typeof validateEncode,
  {},
  {}
>(
  validateEncode,
  /** @__PURE__ */ Namespace.validate(),
  /** @__PURE__ */ Namespace.protobuf.encode("validateEncode"),
);
export { validateEncodePure as validateEncode };

/* -----------------------------------------------------------
    FACTORY FUNCTIONS
----------------------------------------------------------- */
/**
 * Creates a reusable {@link decode} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until you configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createDecode(): never;

/**
 * Creates a reusable {@link decode} function.
 *
 * @template T Target type
 * @returns A reusable `decode` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createDecode<T>(): (input: Uint8Array) => Resolved<T>;

/**
 * @internal
 */
function createDecode<T>(): (input: Uint8Array) => Resolved<T> {
  halt("createDecode");
}
const createDecodePure = /** @__PURE__ */ Object.assign<
  typeof createDecode,
  {}
>(createDecode, /** @__PURE__ */ Namespace.protobuf.decode("createDecode"));
export { createDecodePure as createDecode };

/**
 * Creates a reusable {@link isDecode} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until you configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createIsDecode(): never;

/**
 * Creates a reusable {@link isDecode} function.
 *
 * @template T Target type
 * @returns A reusable `isDecode` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createIsDecode<T>(): (input: Uint8Array) => Resolved<T> | null;

/**
 * @internal
 */
function createIsDecode<T>(): (input: Uint8Array) => Resolved<T> | null {
  halt("createIsDecode");
}
const createIsDecodePure = /** @__PURE__ */ Object.assign<
  typeof createIsDecode,
  {},
  {}
>(
  createIsDecode,
  /** @__PURE__ */ Namespace.is(),
  /** @__PURE__ */ Namespace.protobuf.decode("createIsDecode"),
);
export { createIsDecodePure as createIsDecode };

/**
 * Creates a reusable {@link assertDecode} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until you configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createAssertDecode(): never;

/**
 * Creates a reusable {@link assertDecode} function.
 *
 * @template T Target type
 * @returns A reusable `assertDecode` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createAssertDecode<T>(): (input: Uint8Array) => Resolved<T>;

/**
 * @internal
 */
function createAssertDecode<T>(): (input: Uint8Array) => Resolved<T> {
  halt("createAssertDecode");
}
const createAssertDecodePure = /** @__PURE__ */ Object.assign<
  typeof createAssertDecode,
  {},
  {}
>(
  createAssertDecode,
  /** @__PURE__ */ Namespace.assert("protobuf.createAssertDecode"),
  /** @__PURE__ */ Namespace.protobuf.decode("createAssertDecode"),
);
export { createAssertDecodePure as createAssertDecode };

/**
 * Creates a reusable {@link validateDecode} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until you configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createValidateDecode(): never;

/**
 * Creates a reusable {@link validateDecode} function.
 *
 * @template T Target type
 * @returns A reusable `validateDecode` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createValidateDecode<T>(): (
  input: Uint8Array,
) => IValidation<Resolved<T>>;

/**
 * @internal
 */
function createValidateDecode<T>(): (
  input: Uint8Array,
) => IValidation<Resolved<T>> {
  halt("createValidateDecode");
}
const createValidateDecodePure = /** @__PURE__ */ Object.assign<
  typeof createValidateDecode,
  {},
  {}
>(
  createValidateDecode,
  /** @__PURE__ */ Namespace.validate(),
  /** @__PURE__ */ Namespace.protobuf.decode("createValidateDecode"),
);
export { createValidateDecodePure as createValidateDecode };

/**
 * Creates a reusable {@link encode} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until you configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createEncode(): never;

/**
 * Creates a reusable {@link encode} function.
 *
 * @template T Target type
 * @returns A reusable `encode` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createEncode<T>(): (input: T) => Uint8Array;

/**
 * @internal
 */
function createEncode<T>(): (input: T) => Uint8Array {
  halt("createEncode");
}
const createEncodePure = /** @__PURE__ */ Object.assign<
  typeof createEncode,
  {}
>(createEncode, /** @__PURE__ */ Namespace.protobuf.encode("createEncode"));
export { createEncodePure as createEncode };

/**
 * Creates a reusable {@link isEncode} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until you configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createIsEncode(): never;

/**
 * Creates a reusable {@link isEncode} function.
 *
 * @template T Target type
 * @returns A reusable `isEncode` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createIsEncode<T>(): (input: T) => Uint8Array | null;

/**
 * @internal
 */
function createIsEncode<T>(): (input: T) => Uint8Array | null {
  halt("createIsEncode");
}
const createIsEncodePure = /** @__PURE__ */ Object.assign<
  typeof createIsEncode,
  {},
  {}
>(
  createIsEncode,
  /** @__PURE__ */ Namespace.is(),
  /** @__PURE__ */ Namespace.protobuf.encode("createIsEncode"),
);
export { createIsEncodePure as createIsEncode };

/**
 * Creates a reusable {@link assertEncode} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until you configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createAssertEncode(): never;

/**
 * Creates a reusable {@link assertEncode} function.
 *
 * @template T Target type
 * @returns A reusable `assertEncode` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createAssertEncode<T>(): (input: T) => Uint8Array;

/**
 * @internal
 */
function createAssertEncode<T>(): (input: T) => Uint8Array {
  halt("createAssertEncode");
}
const createAssertEncodePure = /** @__PURE__ */ Object.assign<
  typeof createAssertEncode,
  {},
  {}
>(
  createAssertEncode,
  /** @__PURE__ */ Namespace.assert("protobuf.createAssertEncode"),
  /** @__PURE__ */ Namespace.protobuf.encode("createAssertEncode"),
);
export { createAssertEncodePure as createAssertEncode };

/**
 * Creates a reusable {@link validateEncode} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until you configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createValidateEncode(): never;

/**
 * Creates a reusable {@link validateEncode} function.
 *
 * @template T Target type
 * @returns A reusable `validateEncode` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createValidateEncode<T>(): (input: T) => IValidation<Uint8Array>;

/**
 * @internal
 */
function createValidateEncode<T>(): (input: T) => IValidation<Uint8Array> {
  halt("createValidateEncode");
}
const createValidateEncodePure = /** @__PURE__ */ Object.assign<
  typeof createValidateEncode,
  {},
  {}
>(
  createValidateEncode,
  /** @__PURE__ */ Namespace.validate(),
  /** @__PURE__ */ Namespace.protobuf.encode("createValidateEncode"),
);
export { createValidateEncodePure as createValidateEncode };

/**
 * @internal
 */
function halt(name: string): never {
  throw new Error(
    `Error on typia.protobuf.${name}(): no transform has been configured. Read and follow https://typia.io/docs/setup please.`,
  );
}
