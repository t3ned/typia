import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { DynamicUndefined } from "../../../structures/DynamicUndefined";

export const test_json_application_swagger_standard_DynamicUndefined =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "DynamicUndefined",
  })(typia.json.application<[DynamicUndefined], "swagger", false>());
