import typia from "typia";

import { _test_misc_assertPrune } from "../../../internal/_test_misc_assertPrune";
import { CommentTagFormat } from "../../../structures/CommentTagFormat";

export const test_misc_assertPrune_CommentTagFormat = _test_misc_assertPrune(
  "CommentTagFormat",
)<CommentTagFormat>(CommentTagFormat)((input) =>
  ((input: any): CommentTagFormat => {
    const assert = (input: any): CommentTagFormat => {
      const __is = (input: any): input is CommentTagFormat => {
        const $io0 = (input: any): boolean =>
          "string" === typeof input.byte &&
          /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm.test(
            input.byte,
          ) &&
          "string" === typeof input.password &&
          true &&
          "string" === typeof input.regex &&
          (() => {
            try {
              new RegExp(input.regex);
              return true;
            } catch {
              return false;
            }
          })() &&
          "string" === typeof input.uuid &&
          /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
            input.uuid,
          ) &&
          "string" === typeof input.email &&
          /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(
            input.email,
          ) &&
          "string" === typeof input.hostname &&
          /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i.test(
            input.hostname,
          ) &&
          "string" === typeof input.idnEmail &&
          /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
            input.idnEmail,
          ) &&
          "string" === typeof input.idnHostname &&
          /^([a-z0-9\u00a1-\uffff0-9]+(-[a-z0-9\u00a1-\uffff0-9]+)*\.)+[a-z\u00a1-\uffff]{2,}$/i.test(
            input.idnHostname,
          ) &&
          "string" === typeof input.iri &&
          /^[A-Za-z][\d+-.A-Za-z]*:[^\u0000-\u0020"<>\\^`{|}]*$/u.test(
            input.iri,
          ) &&
          "string" === typeof input.iriReference &&
          /^[A-Za-z][\d+-.A-Za-z]*:[^\u0000-\u0020"<>\\^`{|}]*$/u.test(
            input.iriReference,
          ) &&
          "string" === typeof input.ipv4 &&
          /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/.test(
            input.ipv4,
          ) &&
          "string" === typeof input.ipv6 &&
          /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:)))$/i.test(
            input.ipv6,
          ) &&
          "string" === typeof input.uri &&
          /\/|:/.test(input.uri) &&
          /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i.test(
            input.uri,
          ) &&
          "string" === typeof input.uriReference &&
          /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i.test(
            input.uriReference,
          ) &&
          "string" === typeof input.uriTemplate &&
          /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i.test(
            input.uriTemplate,
          ) &&
          "string" === typeof input.url &&
          /^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu.test(
            input.url,
          ) &&
          "string" === typeof input.datetime &&
          !isNaN(new Date(input.datetime).getTime()) &&
          "string" === typeof input.date &&
          /^(\d{4})-(\d{2})-(\d{2})$/.test(input.date) &&
          "string" === typeof input.time &&
          /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i.test(
            input.time,
          ) &&
          "string" === typeof input.duration &&
          /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/.test(
            input.duration,
          ) &&
          "string" === typeof input.jsonPointer &&
          /^(?:\/(?:[^~/]|~0|~1)*)*$/.test(input.jsonPointer) &&
          "string" === typeof input.relativeJsonPointer &&
          /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/.test(
            input.relativeJsonPointer,
          );
        return "object" === typeof input && null !== input && $io0(input);
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is CommentTagFormat => {
          const $guard = (typia.misc.assertPrune as any).guard;
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            (("string" === typeof input.byte &&
              (/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm.test(
                input.byte,
              ) ||
                $guard(_exceptionable, {
                  path: _path + ".byte",
                  expected: 'string & Format<"byte">',
                  value: input.byte,
                }))) ||
              $guard(_exceptionable, {
                path: _path + ".byte",
                expected: '(string & Format<"byte">)',
                value: input.byte,
              })) &&
            (("string" === typeof input.password &&
              (true ||
                $guard(_exceptionable, {
                  path: _path + ".password",
                  expected: 'string & Format<"password">',
                  value: input.password,
                }))) ||
              $guard(_exceptionable, {
                path: _path + ".password",
                expected: '(string & Format<"password">)',
                value: input.password,
              })) &&
            (("string" === typeof input.regex &&
              ((() => {
                try {
                  new RegExp(input.regex);
                  return true;
                } catch {
                  return false;
                }
              })() ||
                $guard(_exceptionable, {
                  path: _path + ".regex",
                  expected: 'string & Format<"regex">',
                  value: input.regex,
                }))) ||
              $guard(_exceptionable, {
                path: _path + ".regex",
                expected: '(string & Format<"regex">)',
                value: input.regex,
              })) &&
            (("string" === typeof input.uuid &&
              (/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                input.uuid,
              ) ||
                $guard(_exceptionable, {
                  path: _path + ".uuid",
                  expected: 'string & Format<"uuid">',
                  value: input.uuid,
                }))) ||
              $guard(_exceptionable, {
                path: _path + ".uuid",
                expected: '(string & Format<"uuid">)',
                value: input.uuid,
              })) &&
            (("string" === typeof input.email &&
              (/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(
                input.email,
              ) ||
                $guard(_exceptionable, {
                  path: _path + ".email",
                  expected: 'string & Format<"email">',
                  value: input.email,
                }))) ||
              $guard(_exceptionable, {
                path: _path + ".email",
                expected: '(string & Format<"email">)',
                value: input.email,
              })) &&
            (("string" === typeof input.hostname &&
              (/^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i.test(
                input.hostname,
              ) ||
                $guard(_exceptionable, {
                  path: _path + ".hostname",
                  expected: 'string & Format<"hostname">',
                  value: input.hostname,
                }))) ||
              $guard(_exceptionable, {
                path: _path + ".hostname",
                expected: '(string & Format<"hostname">)',
                value: input.hostname,
              })) &&
            (("string" === typeof input.idnEmail &&
              (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
                input.idnEmail,
              ) ||
                $guard(_exceptionable, {
                  path: _path + ".idnEmail",
                  expected: 'string & Format<"idn-email">',
                  value: input.idnEmail,
                }))) ||
              $guard(_exceptionable, {
                path: _path + ".idnEmail",
                expected: '(string & Format<"idn-email">)',
                value: input.idnEmail,
              })) &&
            (("string" === typeof input.idnHostname &&
              (/^([a-z0-9\u00a1-\uffff0-9]+(-[a-z0-9\u00a1-\uffff0-9]+)*\.)+[a-z\u00a1-\uffff]{2,}$/i.test(
                input.idnHostname,
              ) ||
                $guard(_exceptionable, {
                  path: _path + ".idnHostname",
                  expected: 'string & Format<"idn-hostname">',
                  value: input.idnHostname,
                }))) ||
              $guard(_exceptionable, {
                path: _path + ".idnHostname",
                expected: '(string & Format<"idn-hostname">)',
                value: input.idnHostname,
              })) &&
            (("string" === typeof input.iri &&
              (/^[A-Za-z][\d+-.A-Za-z]*:[^\u0000-\u0020"<>\\^`{|}]*$/u.test(
                input.iri,
              ) ||
                $guard(_exceptionable, {
                  path: _path + ".iri",
                  expected: 'string & Format<"iri">',
                  value: input.iri,
                }))) ||
              $guard(_exceptionable, {
                path: _path + ".iri",
                expected: '(string & Format<"iri">)',
                value: input.iri,
              })) &&
            (("string" === typeof input.iriReference &&
              (/^[A-Za-z][\d+-.A-Za-z]*:[^\u0000-\u0020"<>\\^`{|}]*$/u.test(
                input.iriReference,
              ) ||
                $guard(_exceptionable, {
                  path: _path + ".iriReference",
                  expected: 'string & Format<"iri-reference">',
                  value: input.iriReference,
                }))) ||
              $guard(_exceptionable, {
                path: _path + ".iriReference",
                expected: '(string & Format<"iri-reference">)',
                value: input.iriReference,
              })) &&
            (("string" === typeof input.ipv4 &&
              (/^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/.test(
                input.ipv4,
              ) ||
                $guard(_exceptionable, {
                  path: _path + ".ipv4",
                  expected: 'string & Format<"ipv4">',
                  value: input.ipv4,
                }))) ||
              $guard(_exceptionable, {
                path: _path + ".ipv4",
                expected: '(string & Format<"ipv4">)',
                value: input.ipv4,
              })) &&
            (("string" === typeof input.ipv6 &&
              (/^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:)))$/i.test(
                input.ipv6,
              ) ||
                $guard(_exceptionable, {
                  path: _path + ".ipv6",
                  expected: 'string & Format<"ipv6">',
                  value: input.ipv6,
                }))) ||
              $guard(_exceptionable, {
                path: _path + ".ipv6",
                expected: '(string & Format<"ipv6">)',
                value: input.ipv6,
              })) &&
            (("string" === typeof input.uri &&
              ((/\/|:/.test(input.uri) &&
                /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i.test(
                  input.uri,
                )) ||
                $guard(_exceptionable, {
                  path: _path + ".uri",
                  expected: 'string & Format<"uri">',
                  value: input.uri,
                }))) ||
              $guard(_exceptionable, {
                path: _path + ".uri",
                expected: '(string & Format<"uri">)',
                value: input.uri,
              })) &&
            (("string" === typeof input.uriReference &&
              (/^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i.test(
                input.uriReference,
              ) ||
                $guard(_exceptionable, {
                  path: _path + ".uriReference",
                  expected: 'string & Format<"uri-reference">',
                  value: input.uriReference,
                }))) ||
              $guard(_exceptionable, {
                path: _path + ".uriReference",
                expected: '(string & Format<"uri-reference">)',
                value: input.uriReference,
              })) &&
            (("string" === typeof input.uriTemplate &&
              (/^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i.test(
                input.uriTemplate,
              ) ||
                $guard(_exceptionable, {
                  path: _path + ".uriTemplate",
                  expected: 'string & Format<"uri-template">',
                  value: input.uriTemplate,
                }))) ||
              $guard(_exceptionable, {
                path: _path + ".uriTemplate",
                expected: '(string & Format<"uri-template">)',
                value: input.uriTemplate,
              })) &&
            (("string" === typeof input.url &&
              (/^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu.test(
                input.url,
              ) ||
                $guard(_exceptionable, {
                  path: _path + ".url",
                  expected: 'string & Format<"url">',
                  value: input.url,
                }))) ||
              $guard(_exceptionable, {
                path: _path + ".url",
                expected: '(string & Format<"url">)',
                value: input.url,
              })) &&
            (("string" === typeof input.datetime &&
              (!isNaN(new Date(input.datetime).getTime()) ||
                $guard(_exceptionable, {
                  path: _path + ".datetime",
                  expected: 'string & Format<"date-time">',
                  value: input.datetime,
                }))) ||
              $guard(_exceptionable, {
                path: _path + ".datetime",
                expected: '(string & Format<"date-time">)',
                value: input.datetime,
              })) &&
            (("string" === typeof input.date &&
              (/^(\d{4})-(\d{2})-(\d{2})$/.test(input.date) ||
                $guard(_exceptionable, {
                  path: _path + ".date",
                  expected: 'string & Format<"date">',
                  value: input.date,
                }))) ||
              $guard(_exceptionable, {
                path: _path + ".date",
                expected: '(string & Format<"date">)',
                value: input.date,
              })) &&
            (("string" === typeof input.time &&
              (/^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i.test(
                input.time,
              ) ||
                $guard(_exceptionable, {
                  path: _path + ".time",
                  expected: 'string & Format<"time">',
                  value: input.time,
                }))) ||
              $guard(_exceptionable, {
                path: _path + ".time",
                expected: '(string & Format<"time">)',
                value: input.time,
              })) &&
            (("string" === typeof input.duration &&
              (/^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/.test(
                input.duration,
              ) ||
                $guard(_exceptionable, {
                  path: _path + ".duration",
                  expected: 'string & Format<"duration">',
                  value: input.duration,
                }))) ||
              $guard(_exceptionable, {
                path: _path + ".duration",
                expected: '(string & Format<"duration">)',
                value: input.duration,
              })) &&
            (("string" === typeof input.jsonPointer &&
              (/^(?:\/(?:[^~/]|~0|~1)*)*$/.test(input.jsonPointer) ||
                $guard(_exceptionable, {
                  path: _path + ".jsonPointer",
                  expected: 'string & Format<"json-pointer">',
                  value: input.jsonPointer,
                }))) ||
              $guard(_exceptionable, {
                path: _path + ".jsonPointer",
                expected: '(string & Format<"json-pointer">)',
                value: input.jsonPointer,
              })) &&
            (("string" === typeof input.relativeJsonPointer &&
              (/^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/.test(
                input.relativeJsonPointer,
              ) ||
                $guard(_exceptionable, {
                  path: _path + ".relativeJsonPointer",
                  expected: 'string & Format<"relative-json-pointer">',
                  value: input.relativeJsonPointer,
                }))) ||
              $guard(_exceptionable, {
                path: _path + ".relativeJsonPointer",
                expected: '(string & Format<"relative-json-pointer">)',
                value: input.relativeJsonPointer,
              }));
          return (
            ((("object" === typeof input && null !== input) ||
              $guard(true, {
                path: _path + "",
                expected: "CommentTagFormat",
                value: input,
              })) &&
              $ao0(input, _path + "", true)) ||
            $guard(true, {
              path: _path + "",
              expected: "CommentTagFormat",
              value: input,
            })
          );
        })(input, "$input", true);
      return input;
    };
    const prune = (input: CommentTagFormat): void => {
      const $po0 = (input: any): any => {
        for (const key of Object.keys(input)) {
          if (
            "byte" === key ||
            "password" === key ||
            "regex" === key ||
            "uuid" === key ||
            "email" === key ||
            "hostname" === key ||
            "idnEmail" === key ||
            "idnHostname" === key ||
            "iri" === key ||
            "iriReference" === key ||
            "ipv4" === key ||
            "ipv6" === key ||
            "uri" === key ||
            "uriReference" === key ||
            "uriTemplate" === key ||
            "url" === key ||
            "datetime" === key ||
            "date" === key ||
            "time" === key ||
            "duration" === key ||
            "jsonPointer" === key ||
            "relativeJsonPointer" === key
          )
            continue;
          delete input[key];
        }
      };
      if ("object" === typeof input && null !== input) $po0(input);
    };
    assert(input);
    prune(input);
    return input;
  })(input),
);
