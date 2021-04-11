import Blockly from 'blockly'
 //boy block
 function boyblock(){
 Blockly.Blocks['bgenderblock_type'] = {
  init: function() {
    this.appendStatementInput("Boy Alien")
        .setCheck(null)
        .appendField("Boy Alien");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['bgenderblock_type'] = function(block) {
  var statements_boy_alien = Blockly.JavaScript.statementToCode(block, 'Boy Alien');
  // TODO: Assemble JavaScript into code variable.
  var code = document.getElementById('Aliengen').innerHTML = '<img width="100" height="100" src="shrek.jpg">';
  return code;
};

  function runCode() {
    window.LoopTrap = 1000;
      Blockly.JavaScript.INFINITE_LOOP_TRAP =
          'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';
      var code = Blockly.JavaScript.workspaceToCode(workspace);
      Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
      try {
        eval(code);
      } catch (e) {
      }
    }
 }
