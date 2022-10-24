import TSON from "../../../src";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";
import { _test_assert_stringify } from "./_test_assert_stringify";

export const test_assert_stringify_array_recursive_union_explicit =
    _test_assert_stringify(
        "recursive union array",
        ArrayRecursiveUnionExplicit.generate,
        (input) => TSON.assertStringify(input),
        ArrayRecursiveUnionExplicit.SPOILERS,
    );
