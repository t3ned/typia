import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_createAssertEquals_TupleRestArray = _test_assertEquals(
  "TupleRestArray",
)<TupleRestArray>(TupleRestArray)(typia.createAssertEquals<TupleRestArray>());
