import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_createAssertGuardEquals_ObjectHttpConstant =
  _test_assertGuardEquals("ObjectHttpConstant")<ObjectHttpConstant>(
    ObjectHttpConstant,
  )(typia.createAssertGuardEquals<ObjectHttpConstant>());
