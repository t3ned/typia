import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ToJsonTuple } from "../../../../structures/ToJsonTuple";

export const test_json_application_ajv_standard_ToJsonTuple =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ToJsonTuple",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ToJsonTuple",
      },
    ],
    components: {
      schemas: {
        ToJsonTuple: {
          $id: "#/components/schemas/ToJsonTuple",
          type: "array",
          items: [
            {
              type: "string",
              "x-typia-rest": false,
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            {
              type: "number",
              "x-typia-rest": false,
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            {
              type: "boolean",
              "x-typia-rest": false,
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            {
              $ref: "#/components/schemas/ToJsonTuple.IObject",
              "x-typia-rest": false,
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          ],
          minItems: 4,
          maxItems: 4,
        },
        "ToJsonTuple.IObject": {
          $id: "#/components/schemas/ToJsonTuple.IObject",
          $ref: "#/components/schemas/ToJsonTuple.IHobby",
        },
        "ToJsonTuple.IHobby": {
          $id: "#/components/schemas/ToJsonTuple.IHobby",
          type: "object",
          properties: {
            code: {
              type: "string",
            },
            name: {
              type: "string",
            },
          },
          required: ["code", "name"],
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
