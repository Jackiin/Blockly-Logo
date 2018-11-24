/*
Blockly.JavaScript['shape'] = function(block) {
	var dropdown_shapetype = block.getFieldValue('shapeType');
	var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
	// TODO: Assemble JavaScript into code variable.
	var code = 'drawShape('+dropdown_shapetype+','+value_name+');\n';
	return code;
};
*/

Blockly.JavaScript['shape'] = function(block) {
	var dropdown_shapetype = block.getFieldValue('shapeType');
	var value_parameters = Blockly.JavaScript.valueToCode(block, 'parameters', Blockly.JavaScript.ORDER_ATOMIC);
	// TODO: Assemble JavaScript into code variable.
	var code = 'drawShape('+dropdown_shapetype+','+value_parameters+');\n';
	return code;
};

Blockly.JavaScript['forward'] = function(block) {
	var value_steps = Blockly.JavaScript.valueToCode(block, 'steps', Blockly.JavaScript.ORDER_ATOMIC);
	// TODO: Assemble JavaScript into code variable.
	var code = 'runCommand(\'forward\','+value_steps+');\n';
	return code;
};

Blockly.JavaScript['backward'] = function(block) {
	var value_steps = Blockly.JavaScript.valueToCode(block, 'steps', Blockly.JavaScript.ORDER_ATOMIC);
	// TODO: Assemble JavaScript into code variable.
	var code = 'runCommand(\'backward\','+value_steps+');\n';
	return code;
};

Blockly.JavaScript['rotate'] = function(block) {
	var angle_angle = block.getFieldValue('angle');
	// TODO: Assemble JavaScript into code variable.
	var code = 'runCommand(\'rotate\','+angle_angle+');\n';
	return code;
};

Blockly.JavaScript['pencolour'] = function(block) {
	var value_colour = Blockly.JavaScript.valueToCode(block, 'colour', Blockly.JavaScript.ORDER_ATOMIC);
	// TODO: Assemble JavaScript into code variable.
	var code = 'runCommand(\'pencolour\','+value_colour+');\n';
	return code;
};
/*
Blockly.JavaScript['colour'] = function(block) {
	var value_red = Blockly.JavaScript.valueToCode(block, 'red', Blockly.JavaScript.ORDER_ATOMIC);
	var value_green = Blockly.JavaScript.valueToCode(block, 'green', Blockly.JavaScript.ORDER_ATOMIC);
	var value_blue = Blockly.JavaScript.valueToCode(block, 'blue', Blockly.JavaScript.ORDER_ATOMIC);
	// TODO: Assemble JavaScript into code variable.
	var code = '...';
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.JavaScript.ORDER_NONE];
};
*/
Blockly.JavaScript['colour'] = function(block) {
	var number_red = block.getFieldValue('red');
	var number_green = block.getFieldValue('green');
	var number_blue = block.getFieldValue('blue');
	// TODO: Assemble JavaScript into code variable.
	var code = 'pickColor('+number_red+','+number_green+','+number_blue+')';
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };