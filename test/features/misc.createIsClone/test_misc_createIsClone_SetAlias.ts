import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { SetAlias } from "../../structures/SetAlias";

export const test_misc_createIsClone_SetAlias = _test_misc_isClone(
    "SetAlias",
)<SetAlias>(SetAlias)(typia.misc.createIsClone<SetAlias>());
