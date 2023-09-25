import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_protobuf_createAssertDecode_CommentTagDefault =
    _test_protobuf_assertDecode("CommentTagDefault")<CommentTagDefault>(
        CommentTagDefault,
    )({
        assertDecode: typia.protobuf.createAssertDecode<CommentTagDefault>(),
        encode: typia.protobuf.createEncode<CommentTagDefault>(),
    });
