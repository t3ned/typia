import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_protobuf_createValidateDecode_ObjectHttpUndefindable =
    _test_protobuf_validateDecode(
        "ObjectHttpUndefindable",
    )<ObjectHttpUndefindable>(ObjectHttpUndefindable)({
        validateDecode:
            typia.protobuf.createValidateDecode<ObjectHttpUndefindable>(),
        encode: typia.protobuf.createEncode<ObjectHttpUndefindable>(),
    });
