import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

export const test_createAssertGuard_ObjectSimpleProtobufNullable =
  _test_assertGuard(
    "ObjectSimpleProtobufNullable",
  )<ObjectSimpleProtobufNullable>(ObjectSimpleProtobufNullable)(
    typia.createAssertGuard<ObjectSimpleProtobufNullable>(),
  );
