import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_createAssertGuard_ObjectDescription = _test_assertGuard(
  "ObjectDescription",
)<ObjectDescription>(ObjectDescription)(
  typia.createAssertGuard<ObjectDescription>(),
);
