import typia from "typia";

import { _test_protobuf_isDecode } from "../../../internal/_test_protobuf_isDecode";
import { ObjectPartialAndRequired } from "../../../structures/ObjectPartialAndRequired";

export const test_protobuf_createIsDecode_ObjectPartialAndRequired =
  _test_protobuf_isDecode("ObjectPartialAndRequired")<ObjectPartialAndRequired>(
    ObjectPartialAndRequired,
  )({
    decode: (
      input: Uint8Array,
    ): typia.Resolved<ObjectPartialAndRequired> | null => {
      const is = (input: any): input is ObjectPartialAndRequired => {
        const $io0 = (input: any): boolean =>
          (undefined === input.string || "string" === typeof input.string) &&
          (undefined === input.number ||
            ("number" === typeof input.number &&
              Number.isFinite(input.number))) &&
          (undefined === input.boolean || "boolean" === typeof input.boolean) &&
          (null === input.object ||
            ("object" === typeof input.object &&
              null !== input.object &&
              $io0(input.object))) &&
          Array.isArray(input.array) &&
          input.array.every(
            (elem: any) => "number" === typeof elem && Number.isFinite(elem),
          );
        return "object" === typeof input && null !== input && $io0(input);
      };
      const decode = (
        input: Uint8Array,
      ): typia.Resolved<ObjectPartialAndRequired> => {
        const $Reader = (typia.protobuf.createIsDecode as any).Reader;
        const $pdo0 = (reader: any, length: number = -1): any => {
          length = length < 0 ? reader.size() : reader.index() + length;
          const output = {
            object: null as any,
            array: [] as any,
          } as any;
          while (reader.index() < length) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                // string;
                output.string = reader.string();
                break;
              case 2:
                // double;
                output.number = reader.double();
                break;
              case 3:
                // bool;
                output.boolean = reader.bool();
                break;
              case 4:
                // ObjectPartialAndRequired;
                output.object = $pdo0(reader, reader.uint32());
                break;
              case 5:
                // type: Array<number>;
                if (2 === (tag & 7)) {
                  const piece = reader.uint32() + reader.index();
                  while (reader.index() < piece)
                    output.array.push(reader.double());
                } else output.array.push(reader.double());
                break;
              default:
                reader.skipType(tag & 7);
                break;
            }
          }
          return output;
        };
        const reader = new $Reader(input);
        return $pdo0(reader);
      };
      const output = decode(input);
      if (!is(output)) return null;
      return output;
    },
    encode: (input: ObjectPartialAndRequired): Uint8Array => {
      const $Sizer = (typia.protobuf.createEncode as any).Sizer;
      const $Writer = (typia.protobuf.createEncode as any).Writer;
      const encoder = (writer: any): any => {
        const $peo0 = (input: any): any => {
          // property "string";
          if (undefined !== input.string) {
            writer.uint32(10);
            writer.string(input.string);
          }
          // property "number";
          if (undefined !== input.number) {
            writer.uint32(17);
            writer.double(input.number);
          }
          // property "boolean";
          if (undefined !== input.boolean) {
            writer.uint32(24);
            writer.bool(input.boolean);
          }
          // property "object";
          if (null !== input.object) {
            // 4 -> ObjectPartialAndRequired;
            writer.uint32(34);
            writer.fork();
            $peo0(input.object);
            writer.ldelim();
          }
          // property "array";
          if (0 !== input.array.length) {
            writer.uint32(42);
            writer.fork();
            for (const elem of input.array) {
              writer.double(elem);
            }
            writer.ldelim();
          }
        };
        const $io0 = (input: any): boolean =>
          (undefined === input.string || "string" === typeof input.string) &&
          (undefined === input.number || "number" === typeof input.number) &&
          (undefined === input.boolean || "boolean" === typeof input.boolean) &&
          (null === input.object ||
            ("object" === typeof input.object &&
              null !== input.object &&
              $io0(input.object))) &&
          Array.isArray(input.array) &&
          input.array.every((elem: any) => "number" === typeof elem);
        //ObjectPartialAndRequired;
        $peo0(input);
        return writer;
      };
      const sizer = encoder(new $Sizer());
      const writer = encoder(new $Writer(sizer));
      return writer.buffer();
    },
  });
