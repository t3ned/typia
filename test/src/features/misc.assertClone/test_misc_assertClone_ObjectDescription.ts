import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_misc_assertClone_ObjectDescription = _test_misc_assertClone(
  "ObjectDescription",
)<ObjectDescription>(ObjectDescription)((input) =>
  typia.misc.assertClone<ObjectDescription>(input),
);
