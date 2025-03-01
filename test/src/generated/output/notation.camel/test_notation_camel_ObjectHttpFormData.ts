import typia from "typia";

import { _test_notation_validateGeneral } from "../../../internal/_test_notation_validateGeneral";
import { ObjectHttpFormData } from "../../../structures/ObjectHttpFormData";

export const test_notation_validateCamel_ObjectHttpFormData =
  _test_notation_validateGeneral("ObjectHttpFormData")<ObjectHttpFormData>(
    ObjectHttpFormData,
  )<typia.CamelCase<ObjectHttpFormData>>({
    convert: (input) =>
      ((input: any): typia.IValidation<typia.CamelCase<ObjectHttpFormData>> => {
        const validate = (
          input: any,
        ): typia.IValidation<ObjectHttpFormData> => {
          const errors = [] as any[];
          const __is = (input: any): input is ObjectHttpFormData => {
            const $io0 = (input: any): boolean =>
              "string" === typeof input.id &&
              /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                input.id,
              ) &&
              "number" === typeof input.number &&
              Number.isFinite(input.number) &&
              Array.isArray(input.integers) &&
              input.integers.every(
                (elem: any) =>
                  "number" === typeof elem &&
                  Math.floor(elem) === elem &&
                  -2147483648 <= elem &&
                  elem <= 2147483647,
              ) &&
              input.blob instanceof Blob &&
              Array.isArray(input.blobs) &&
              input.blobs.every((elem: any) => elem instanceof Blob) &&
              input.file instanceof File &&
              Array.isArray(input.files) &&
              input.files.every((elem: any) => elem instanceof File);
            return "object" === typeof input && null !== input && $io0(input);
          };
          if (false === __is(input)) {
            const $report = (typia.notations.validateCamel as any).report(
              errors,
            );
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ObjectHttpFormData => {
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
                  ("number" === typeof input.number &&
                    Number.isFinite(input.number)) ||
                    $report(_exceptionable, {
                      path: _path + ".number",
                      expected: "number",
                      value: input.number,
                    }),
                  ((Array.isArray(input.integers) ||
                    $report(_exceptionable, {
                      path: _path + ".integers",
                      expected: 'Array<number & Type<"int32">>',
                      value: input.integers,
                    })) &&
                    input.integers
                      .map(
                        (elem: any, _index1: number) =>
                          ("number" === typeof elem &&
                            ((Math.floor(elem) === elem &&
                              -2147483648 <= elem &&
                              elem <= 2147483647) ||
                              $report(_exceptionable, {
                                path: _path + ".integers[" + _index1 + "]",
                                expected: 'number & Type<"int32">',
                                value: elem,
                              }))) ||
                          $report(_exceptionable, {
                            path: _path + ".integers[" + _index1 + "]",
                            expected: '(number & Type<"int32">)',
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                    $report(_exceptionable, {
                      path: _path + ".integers",
                      expected: 'Array<number & Type<"int32">>',
                      value: input.integers,
                    }),
                  input.blob instanceof Blob ||
                    $report(_exceptionable, {
                      path: _path + ".blob",
                      expected: "Blob",
                      value: input.blob,
                    }),
                  ((Array.isArray(input.blobs) ||
                    $report(_exceptionable, {
                      path: _path + ".blobs",
                      expected: "Array<Blob>",
                      value: input.blobs,
                    })) &&
                    input.blobs
                      .map(
                        (elem: any, _index2: number) =>
                          elem instanceof Blob ||
                          $report(_exceptionable, {
                            path: _path + ".blobs[" + _index2 + "]",
                            expected: "Blob",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                    $report(_exceptionable, {
                      path: _path + ".blobs",
                      expected: "Array<Blob>",
                      value: input.blobs,
                    }),
                  input.file instanceof File ||
                    $report(_exceptionable, {
                      path: _path + ".file",
                      expected: "File",
                      value: input.file,
                    }),
                  ((Array.isArray(input.files) ||
                    $report(_exceptionable, {
                      path: _path + ".files",
                      expected: "Array<File>",
                      value: input.files,
                    })) &&
                    input.files
                      .map(
                        (elem: any, _index3: number) =>
                          elem instanceof File ||
                          $report(_exceptionable, {
                            path: _path + ".files[" + _index3 + "]",
                            expected: "File",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                    $report(_exceptionable, {
                      path: _path + ".files",
                      expected: "Array<File>",
                      value: input.files,
                    }),
                ].every((flag: boolean) => flag);
              return (
                ((("object" === typeof input && null !== input) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ObjectHttpFormData",
                    value: input,
                  })) &&
                  $vo0(input, _path + "", true)) ||
                $report(true, {
                  path: _path + "",
                  expected: "ObjectHttpFormData",
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
        const general = (
          input: ObjectHttpFormData,
        ): typia.CamelCase<ObjectHttpFormData> => {
          const $cp0 = (input: any) => input.map((elem: any) => elem as any);
          const $cp1 = (input: any) =>
            input.map((elem: any) =>
              elem instanceof Blob ? elem : (elem as any),
            );
          const $cp2 = (input: any) =>
            input.map((elem: any) =>
              elem instanceof File ? elem : (elem as any),
            );
          const $co0 = (input: any): any => ({
            id: input.id as any,
            number: input.number as any,
            integers: Array.isArray(input.integers)
              ? $cp0(input.integers)
              : (input.integers as any),
            blob: input.blob instanceof Blob ? input.blob : (input.blob as any),
            blobs: Array.isArray(input.blobs)
              ? $cp1(input.blobs)
              : (input.blobs as any),
            file: input.file instanceof File ? input.file : (input.file as any),
            files: Array.isArray(input.files)
              ? $cp2(input.files)
              : (input.files as any),
          });
          return "object" === typeof input && null !== input
            ? $co0(input)
            : (input as any);
        };
        const output = validate(input) as any;
        if (output.success) output.data = general(input);
        return output;
      })(input),
    assert: (input: any): typia.CamelCase<ObjectHttpFormData> => {
      const __is = (
        input: any,
      ): input is typia.CamelCase<ObjectHttpFormData> => {
        const $io0 = (input: any): boolean =>
          "string" === typeof input.id &&
          /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
            input.id,
          ) &&
          "number" === typeof input.number &&
          Number.isFinite(input.number) &&
          Array.isArray(input.integers) &&
          input.integers.every(
            (elem: any) =>
              "number" === typeof elem &&
              Math.floor(elem) === elem &&
              -2147483648 <= elem &&
              elem <= 2147483647,
          ) &&
          input.blob instanceof Blob &&
          Array.isArray(input.blobs) &&
          input.blobs.every((elem: any) => elem instanceof Blob) &&
          input.file instanceof File &&
          Array.isArray(input.files) &&
          input.files.every((elem: any) => elem instanceof File);
        return "object" === typeof input && null !== input && $io0(input);
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is typia.CamelCase<ObjectHttpFormData> => {
          const $guard = (typia.createAssert as any).guard;
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
            (("number" === typeof input.number &&
              Number.isFinite(input.number)) ||
              $guard(_exceptionable, {
                path: _path + ".number",
                expected: "number",
                value: input.number,
              })) &&
            (((Array.isArray(input.integers) ||
              $guard(_exceptionable, {
                path: _path + ".integers",
                expected: 'Array<number & Type<"int32">>',
                value: input.integers,
              })) &&
              input.integers.every(
                (elem: any, _index1: number) =>
                  ("number" === typeof elem &&
                    ((Math.floor(elem) === elem &&
                      -2147483648 <= elem &&
                      elem <= 2147483647) ||
                      $guard(_exceptionable, {
                        path: _path + ".integers[" + _index1 + "]",
                        expected: 'number & Type<"int32">',
                        value: elem,
                      }))) ||
                  $guard(_exceptionable, {
                    path: _path + ".integers[" + _index1 + "]",
                    expected: '(number & Type<"int32">)',
                    value: elem,
                  }),
              )) ||
              $guard(_exceptionable, {
                path: _path + ".integers",
                expected: 'Array<number & Type<"int32">>',
                value: input.integers,
              })) &&
            (input.blob instanceof Blob ||
              $guard(_exceptionable, {
                path: _path + ".blob",
                expected: "Blob",
                value: input.blob,
              })) &&
            (((Array.isArray(input.blobs) ||
              $guard(_exceptionable, {
                path: _path + ".blobs",
                expected: "Array<Blob>",
                value: input.blobs,
              })) &&
              input.blobs.every(
                (elem: any, _index2: number) =>
                  elem instanceof Blob ||
                  $guard(_exceptionable, {
                    path: _path + ".blobs[" + _index2 + "]",
                    expected: "Blob",
                    value: elem,
                  }),
              )) ||
              $guard(_exceptionable, {
                path: _path + ".blobs",
                expected: "Array<Blob>",
                value: input.blobs,
              })) &&
            (input.file instanceof File ||
              $guard(_exceptionable, {
                path: _path + ".file",
                expected: "File",
                value: input.file,
              })) &&
            (((Array.isArray(input.files) ||
              $guard(_exceptionable, {
                path: _path + ".files",
                expected: "Array<File>",
                value: input.files,
              })) &&
              input.files.every(
                (elem: any, _index3: number) =>
                  elem instanceof File ||
                  $guard(_exceptionable, {
                    path: _path + ".files[" + _index3 + "]",
                    expected: "File",
                    value: elem,
                  }),
              )) ||
              $guard(_exceptionable, {
                path: _path + ".files",
                expected: "Array<File>",
                value: input.files,
              }));
          return (
            ((("object" === typeof input && null !== input) ||
              $guard(true, {
                path: _path + "",
                expected: "ObjectHttpFormData",
                value: input,
              })) &&
              $ao0(input, _path + "", true)) ||
            $guard(true, {
              path: _path + "",
              expected: "ObjectHttpFormData",
              value: input,
            })
          );
        })(input, "$input", true);
      return input;
    },
  });
