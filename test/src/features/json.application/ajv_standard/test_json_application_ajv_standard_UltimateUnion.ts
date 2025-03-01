import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { UltimateUnion } from "../../../structures/UltimateUnion";

export const test_json_application_ajv_standard_UltimateUnion =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "UltimateUnion",
  })(typia.json.application<[UltimateUnion], "ajv", false>());
