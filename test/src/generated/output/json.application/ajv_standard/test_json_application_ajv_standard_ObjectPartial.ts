import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectPartial } from "../../../../structures/ObjectPartial";

export const test_json_application_ajv_standard_ObjectPartial =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ObjectPartial",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/PartialObjectPartial.IBase",
      },
    ],
    components: {
      schemas: {
        "PartialObjectPartial.IBase": {
          $id: "#/components/schemas/PartialObjectPartial.IBase",
          type: "object",
          properties: {
            boolean: {
              type: "boolean",
            },
            number: {
              type: "number",
            },
            string: {
              type: "string",
            },
            array: {
              type: "array",
              items: {
                type: "number",
              },
            },
            object: {
              oneOf: [
                {
                  type: "null",
                },
                {
                  $ref: "#/components/schemas/ObjectPartial.IBase",
                },
              ],
            },
          },
          description: "Make all properties in T optional",
        },
        "ObjectPartial.IBase": {
          $id: "#/components/schemas/ObjectPartial.IBase",
          type: "object",
          properties: {
            boolean: {
              type: "boolean",
            },
            number: {
              type: "number",
            },
            string: {
              type: "string",
            },
            array: {
              type: "array",
              items: {
                type: "number",
              },
            },
            object: {
              oneOf: [
                {
                  type: "null",
                },
                {
                  $ref: "#/components/schemas/ObjectPartial.IBase",
                },
              ],
            },
          },
          required: ["boolean", "number", "string", "array", "object"],
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
