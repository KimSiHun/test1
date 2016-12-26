define(function (require){

  // load the css ourselves
  require('plugins/test1/test1.less');

  // load the controller and used by the template
  require('plugins/test1/test1_controller');

  // register the provider with the visType registry
  require('ui/registry/vis_types').register(MetricVisProvider);

  function MetricVisProvider(Private)
  {
    var TemplateVisType = Private(require('ui/template_vis_type/template_vis_type'));
    var Schemas = Private(require('ui/vis/schemas'));

    // return visType -> object, which kibana will use to display and cofigure new
    // Vis object of this type
    return new TemplateVisType({
      name: 'test1',
      title: 'test1',
      description: 'kibana_test_plugin',
      icon: 'fa-thumbs-up',
      template: require('plugins/test1/test1.html'), //load template
      params:
      {
          // set params default
          defaults:
          {
            titleTest: null,
            fontSize: 60,
            width: 50,
            redThreshold: 20,
            greenThreshold: 80,
            invertScale: null
          },
          // load edit file
          editor: require('plugins/test1/test1_params.html');
      },
      schemas: new Schemas([
        {
          group: 'metrics',
          name: 'metric',
          title: 'Metric',
          min: 1,
          max 1,
          defaults:
          [
            {
              schema: 'metric', type: 'count'
            }
          ]
        },
        {
          group: 'buckets',
          name: 'segment',
          title: 'X-Axis',
          min: 0,
          max: 1,
          aggFilter: ['terms']
        }
      ])
    });
  }
  // export the provider so that the visType can be required with Private()
  return MetricVisProvider;
});
