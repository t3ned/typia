import typia from "typia";

import { _test_protobuf_assertDecode } from "../../../internal/_test_protobuf_assertDecode";
import { ObjectDescription } from "../../../structures/ObjectDescription";

export const test_protobuf_createAssertDecode_ObjectDescription =
  _test_protobuf_assertDecode("ObjectDescription")<ObjectDescription>(
    ObjectDescription,
  )({
    decode: (input) =>
      ((input: Uint8Array): typia.Resolved<ObjectDescription> => {
        const decode = (
          input: Uint8Array,
        ): typia.Resolved<ObjectDescription> => {
          const $Reader = (typia.protobuf.assertDecode as any).Reader;
          const $pdo0 = (reader: any, length: number = -1): any => {
            length = length < 0 ? reader.size() : reader.index() + length;
            const output = {
              id: "" as any,
              deprecated: undefined as any,
              title: "" as any,
              descriptions: [] as any,
              newLine: undefined as any,
            } as any;
            while (reader.index() < length) {
              const tag = reader.uint32();
              switch (tag >>> 3) {
                case 1:
                  // string;
                  output.id = reader.string();
                  break;
                case 2:
                  // bool;
                  output.deprecated = reader.bool();
                  break;
                case 3:
                  // string;
                  output.title = reader.string();
                  break;
                case 4:
                  // type: Array<string>;
                  output.descriptions.push(reader.string());
                  break;
                case 5:
                  // double;
                  output.newLine = reader.double();
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
        const assert = (input: any): ObjectDescription => {
          const __is = (input: any): input is ObjectDescription => {
            const $io0 = (input: any): boolean =>
              "string" === typeof input.id &&
              /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                input.id,
              ) &&
              "boolean" === typeof input.deprecated &&
              "string" === typeof input.title &&
              Array.isArray(input.descriptions) &&
              input.descriptions.every(
                (elem: any) => "string" === typeof elem,
              ) &&
              "number" === typeof input.newLine &&
              Number.isFinite(input.newLine);
            return "object" === typeof input && null !== input && $io0(input);
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ObjectDescription => {
              const $guard = (typia.protobuf.assertDecode as any).guard;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (("string" === typeof input.id &&
                  (/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                    input.id,
                  ) ||
                    $guard(_exceptionable, {
                      path: _path + ".id",
                      expected: 'string & Format<"uuid">',
                      value: input.id,
                    }))) ||
                  $guard(_exceptionable, {
                    path: _path + ".id",
                    expected: '(string & Format<"uuid">)',
                    value: input.id,
                  })) &&
                ("boolean" === typeof input.deprecated ||
                  $guard(_exceptionable, {
                    path: _path + ".deprecated",
                    expected: "boolean",
                    value: input.deprecated,
                  })) &&
                ("string" === typeof input.title ||
                  $guard(_exceptionable, {
                    path: _path + ".title",
                    expected: "string",
                    value: input.title,
                  })) &&
                (((Array.isArray(input.descriptions) ||
                  $guard(_exceptionable, {
                    path: _path + ".descriptions",
                    expected: "Array<string>",
                    value: input.descriptions,
                  })) &&
                  input.descriptions.every(
                    (elem: any, _index1: number) =>
                      "string" === typeof elem ||
                      $guard(_exceptionable, {
                        path: _path + ".descriptions[" + _index1 + "]",
                        expected: "string",
                        value: elem,
                      }),
                  )) ||
                  $guard(_exceptionable, {
                    path: _path + ".descriptions",
                    expected: "Array<string>",
                    value: input.descriptions,
                  })) &&
                (("number" === typeof input.newLine &&
                  Number.isFinite(input.newLine)) ||
                  $guard(_exceptionable, {
                    path: _path + ".newLine",
                    expected: "number",
                    value: input.newLine,
                  }));
              return (
                ((("object" === typeof input && null !== input) ||
                  $guard(true, {
                    path: _path + "",
                    expected: "ObjectDescription",
                    value: input,
                  })) &&
                  $ao0(input, _path + "", true)) ||
                $guard(true, {
                  path: _path + "",
                  expected: "ObjectDescription",
                  value: input,
                })
              );
            })(input, "$input", true);
          return input;
        };
        const output = decode(input);
        return assert(output) as any;
      })(input),
    encode: (input: ObjectDescription): Uint8Array => {
      const $Sizer = (typia.protobuf.createEncode as any).Sizer;
      const $Writer = (typia.protobuf.createEncode as any).Writer;
      const encoder = (writer: any): any => {
        const $peo0 = (input: any): any => {
          // property "id";
          writer.uint32(10);
          writer.string(input.id);
          // property "deprecated";
          writer.uint32(16);
          writer.bool(input.deprecated);
          // property "title";
          writer.uint32(26);
          writer.string(input.title);
          // property "descriptions";
          if (0 !== input.descriptions.length) {
            for (const elem of input.descriptions) {
              writer.uint32(34);
              writer.string(elem);
            }
          }
          // property "newLine";
          writer.uint32(41);
          writer.double(input.newLine);
        };
        //ObjectDescription;
        $peo0(input);
        return writer;
      };
      const sizer = encoder(new $Sizer());
      const writer = encoder(new $Writer(sizer));
      return writer.buffer();
    },
  });
