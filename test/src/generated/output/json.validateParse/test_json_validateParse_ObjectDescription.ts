import typia from "typia";

import { _test_json_validateParse } from "../../../internal/_test_json_validateParse";
import { ObjectDescription } from "../../../structures/ObjectDescription";

export const test_json_validateParse_ObjectDescription =
  _test_json_validateParse("ObjectDescription")<ObjectDescription>(
    ObjectDescription,
  )((input) =>
    ((input: string): typia.IValidation<typia.Primitive<ObjectDescription>> => {
      const validate = (input: any): typia.IValidation<ObjectDescription> => {
        const errors = [] as any[];
        const __is = (input: any): input is ObjectDescription => {
          const $io0 = (input: any): boolean =>
            "string" === typeof input.id &&
            /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
              input.id,
            ) &&
            "boolean" === typeof input.deprecated &&
            "string" === typeof input.title &&
            Array.isArray(input.descriptions) &&
            input.descriptions.every((elem: any) => "string" === typeof elem) &&
            "number" === typeof input.newLine &&
            Number.isFinite(input.newLine);
          return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input)) {
          const $report = (typia.json.validateParse as any).report(errors);
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ObjectDescription => {
            const $vo0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                ("string" === typeof input.id &&
                  (/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                    input.id,
                  ) ||
                    $report(_exceptionable, {
                      path: _path + ".id",
                      expected: 'string & Format<"uuid">',
                      value: input.id,
                    }))) ||
                  $report(_exceptionable, {
                    path: _path + ".id",
                    expected: '(string & Format<"uuid">)',
                    value: input.id,
                  }),
                "boolean" === typeof input.deprecated ||
                  $report(_exceptionable, {
                    path: _path + ".deprecated",
                    expected: "boolean",
                    value: input.deprecated,
                  }),
                "string" === typeof input.title ||
                  $report(_exceptionable, {
                    path: _path + ".title",
                    expected: "string",
                    value: input.title,
                  }),
                ((Array.isArray(input.descriptions) ||
                  $report(_exceptionable, {
                    path: _path + ".descriptions",
                    expected: "Array<string>",
                    value: input.descriptions,
                  })) &&
                  input.descriptions
                    .map(
                      (elem: any, _index1: number) =>
                        "string" === typeof elem ||
                        $report(_exceptionable, {
                          path: _path + ".descriptions[" + _index1 + "]",
                          expected: "string",
                          value: elem,
                        }),
                    )
                    .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + ".descriptions",
                    expected: "Array<string>",
                    value: input.descriptions,
                  }),
                ("number" === typeof input.newLine &&
                  Number.isFinite(input.newLine)) ||
                  $report(_exceptionable, {
                    path: _path + ".newLine",
                    expected: "number",
                    value: input.newLine,
                  }),
              ].every((flag: boolean) => flag);
            return (
              ((("object" === typeof input && null !== input) ||
                $report(true, {
                  path: _path + "",
                  expected: "ObjectDescription",
                  value: input,
                })) &&
                $vo0(input, _path + "", true)) ||
              $report(true, {
                path: _path + "",
                expected: "ObjectDescription",
                value: input,
              })
            );
          })(input, "$input", true);
        }
        const success = 0 === errors.length;
        return {
          success,
          errors,
          data: success ? input : undefined,
        } as any;
      };
      const output = JSON.parse(input);
      return validate(output) as any;
    })(input),
  );
