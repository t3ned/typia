import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { AtomicClass } from "../../../../structures/AtomicClass";

export const test_json_application_ajv_surplus_AtomicClass =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "AtomicClass",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/AtomicClass",
      },
    ],
    components: {
      schemas: {
        AtomicClass: {
          $id: "#/components/schemas/AtomicClass",
          type: "array",
          items: [
            {
              type: "boolean",
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
              type: "boolean",
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
              type: "number",
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
              type: "string",
              "x-typia-rest": false,
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            {
              type: "string",
              "x-typia-rest": false,
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            {
              type: "string",
              "x-typia-rest": false,
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          ],
          minItems: 9,
          maxItems: 9,
        },
      },
    },
    purpose: "ajv",
    surplus: true,
  });
