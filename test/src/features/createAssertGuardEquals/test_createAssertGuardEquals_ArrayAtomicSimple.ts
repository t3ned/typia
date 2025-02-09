import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_createAssertGuardEquals_ArrayAtomicSimple =
  _test_assertGuardEquals("ArrayAtomicSimple")<ArrayAtomicSimple>(
    ArrayAtomicSimple,
  )(typia.createAssertGuardEquals<ArrayAtomicSimple>());
