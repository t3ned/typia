import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectPropertyNullable } from "../../../../structures/ObjectPropertyNullable";

export const test_json_application_swagger_standard_ObjectPropertyNullable =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "ObjectPropertyNullable",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ObjectPropertyNullable",
      },
    ],
    components: {
      schemas: {
        ObjectPropertyNullable: {
          type: "array",
          items: {
            oneOf: [
              {
                type: "array",
                items: {
                  $ref: "#/components/schemas/ObjectPropertyNullable.IPointerboolean",
                },
              },
              {
                type: "array",
                items: {
                  $ref: "#/components/schemas/ObjectPropertyNullable.IPointernumber",
                },
              },
              {
                type: "array",
                items: {
                  $ref: "#/components/schemas/ObjectPropertyNullable.IPointerstring",
                },
              },
              {
                type: "array",
                items: {
                  $ref: "#/components/schemas/ObjectPropertyNullable.IPointerObjectPropertyNullable.IMember",
                },
              },
            ],
          },
          minItems: 4,
          maxItems: 4,
          "x-typia-tuple": {
            type: "array",
            items: [
              {
                type: "array",
                items: {
                  $ref: "#/components/schemas/ObjectPropertyNullable.IPointerboolean",
                },
                "x-typia-rest": false,
                "x-typia-required": true,
                "x-typia-optional": false,
              },
              {
                type: "array",
                items: {
                  $ref: "#/components/schemas/ObjectPropertyNullable.IPointernumber",
                },
                "x-typia-rest": false,
                "x-typia-required": true,
                "x-typia-optional": false,
              },
              {
                type: "array",
                items: {
                  $ref: "#/components/schemas/ObjectPropertyNullable.IPointerstring",
                },
                "x-typia-rest": false,
                "x-typia-required": true,
                "x-typia-optional": false,
              },
              {
                type: "array",
                items: {
                  $ref: "#/components/schemas/ObjectPropertyNullable.IPointerObjectPropertyNullable.IMember",
                },
                "x-typia-rest": false,
                "x-typia-required": true,
                "x-typia-optional": false,
              },
            ],
            minItems: 4,
            maxItems: 4,
          },
        },
        "ObjectPropertyNullable.IPointerboolean": {
          type: "object",
          properties: {
            value: {
              type: "boolean",
              nullable: true,
            },
          },
          nullable: false,
          required: ["value"],
        },
        "ObjectPropertyNullable.IPointernumber": {
          type: "object",
          properties: {
            value: {
              type: "number",
              nullable: true,
            },
          },
          nullable: false,
          required: ["value"],
        },
        "ObjectPropertyNullable.IPointerstring": {
          type: "object",
          properties: {
            value: {
              type: "string",
              nullable: true,
            },
          },
          nullable: false,
          required: ["value"],
        },
        "ObjectPropertyNullable.IPointerObjectPropertyNullable.IMember": {
          type: "object",
          properties: {
            value: {
              $ref: "#/components/schemas/ObjectPropertyNullable.IMember.Nullable",
            },
          },
          nullable: false,
          required: ["value"],
        },
        "ObjectPropertyNullable.IMember.Nullable": {
          type: "object",
          properties: {
            id: {
              type: "string",
            },
            name: {
              type: "string",
              nullable: true,
            },
            grade: {
              type: "number",
            },
            serial: {
              type: "number",
              nullable: true,
            },
            activated: {
              type: "boolean",
              nullable: true,
            },
          },
          nullable: true,
          required: ["id", "name", "activated"],
        },
      },
    },
    purpose: "swagger",
    surplus: false,
  });
