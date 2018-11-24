Blockly.defineBlocksWithJsonArray([
  {
    "type": "shape",
    "message0": "%1 %2 parameters %3",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "shapeType",
        "options": [
          [
            "Segment",
            "\'segment\'"
          ],
          [
            "Circle",
            "\'circle\'"
          ],
          [
            "Rectangle",
            "\'rectangle\'"
          ],
          [
            "Polygon",
            "\'polygon\'"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "parameters",
        "check": [
          "Array",
          "String",
          "Number",
        ]
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 20,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "forward",
    "message0": "forward %1",
    "args0": [
      {
        "type": "input_value",
        "name": "steps",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 330,
    "tooltip": "pointer move forward",
    "helpUrl": ""
  },
  {
    "type": "backward",
    "message0": "backward %1",
    "args0": [
      {
        "type": "input_value",
        "name": "steps",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 330,
    "tooltip": "pointer move backward",
    "helpUrl": ""
  },
  {
    "type": "rotate",
    "message0": "rotate %1",
    "args0": [
      {
        "type": "field_angle",
        "name": "angle",
        "angle": 90
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 180,
    "tooltip": "rotate the pen by certain degrees",
    "helpUrl": ""
  },
  {
    "type": "pencolour",
    "message0": "pencolour %1",
    "args0": [
      {
        "type": "input_value",
        "name": "colour",
        "check": [
          "Colour",
          "Number",
          "Array"
        ]
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 180,
    "tooltip": "change pen colour",
    "helpUrl": ""
  },
  {
    "type": "colour",
    "message0": "colour  r %1 %2 g %3 %4 b %5",
    "args0": [
      {
        "type": "field_number",
        "name": "red",
        "value": 255,
        "min": 0,
        "max": 255,
        "precision": 1
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "green",
        "value": 255,
        "min": 0,
        "max": 255,
        "precision": 1
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "blue",
        "value": 255,
        "min": 0,
        "max": 255,
        "precision": 1
      }
    ],
    "inputsInline": true,
    "output": "Array",
    "colour": 315,
    "tooltip": "return a number array with rgb values",
    "helpUrl": ""
  }
]);