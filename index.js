
module.exports = function(kibana)
{
  return new kibana.Plugin({
    uiExports:{
      visTypes: ['plugins/test2/test2']
    }
  });
}
