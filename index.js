
module.exports = function(kibana)
{
  return new kibana.Plugin({
    uiExports:{
      visTypes: ['plugins/test1/test1']
    }
  });
}
