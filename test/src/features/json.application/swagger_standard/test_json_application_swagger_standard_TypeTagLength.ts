import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TypeTagLength } from "../../../structures/TypeTagLength";

export const test_json_application_swagger_standard_TypeTagLength =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "TypeTagLength",
  })(typia.json.application<[TypeTagLength], "swagger", false>());
