(function () {

  'use strict';

  var fs = require('jsdoc/fs');
  var path = require('jsdoc/path');
  var taffy = require('taffydb').taffy;
  var handle = require('jsdoc/util/error').handle;
  var template = env.opts.template;
  var outdir = env.opts.destination;
  var swig = require('swig');

  function publish (data, opts) {
    var tree = buildTree(data);

    //var htmlPage = swig.compileFile(template + '/templates/html.swig');
    //var html = htmlPage(page);
    //fs.writeFileSync(outdir + 'index.html', html, 'utf8');

    fs.writeFileSync(outdir + 'tree.json', JSON.stringify(tree, null, 2));
  }

  function buildTree (data) {
    var root = {}, docs;
    data({undocumented: true}).remove();
    docs = data().get();
    return docs;
    graft(root, docs);
    return root;
  }


  function graft (parentNode, childNodes, parentLongname, parentName) {
    childNodes
      .filter(function (element) {
        return (element.memberof === parentLongname);
      })
      .forEach(function (element, index) {
        var i,
          len;

        if (element.kind === 'namespace') {
          if (!parentNode.namespaces) {
            parentNode.namespaces = [];
          }

          var thisNamespace = {
            'name': element.name,
            'description': element.description || '',
            'access': element.access || '',
            'virtual': !!element.virtual
          };

          parentNode.namespaces.push(thisNamespace);

          graft(thisNamespace, childNodes, element.longname, element.name);
        }
        else if (element.kind === 'mixin') {
          if (!parentNode.mixins) {
            parentNode.mixins = [];
          }

          var thisMixin = {
            'name': element.name,
            'description': element.description || '',
            'access': element.access || '',
            'virtual': !!element.virtual
          };

          parentNode.mixins.push(thisMixin);

          graft(thisMixin, childNodes, element.longname, element.name);
        }
        else if (element.kind === 'function') {
          if (!parentNode.functions) {
            parentNode.functions = [];
          }

          var thisFunction = {
            'name': element.name,
            'access': element.access || '',
            'virtual': !!element.virtual,
            'description': element.description || '',
            'parameters': [ ],
            'examples': []
          };

          parentNode.functions.push(thisFunction);

          if (element.returns) {
            thisFunction.returns = {
              'type': element.returns[0].type ? (element.returns[0].type.names.length === 1 ? element.returns[0].type.names[0] : element.returns[0].type.names) : '',
              'description': element.returns[0].description || ''
            };
          }

          if (element.examples) {
            for (i = 0, len = element.examples.length; i < len; i++) {
              thisFunction.examples.push(element.examples[i]);
            }
          }

          if (element.params) {
            for (i = 0, len = element.params.length; i < len; i++) {
              thisFunction.parameters.push({
                'name': element.params[i].name,
                'type': element.params[i].type ? (element.params[i].type.names.length === 1 ? element.params[i].type.names[0] : element.params[i].type.names) : '',
                'description': element.params[i].description || '',
                'default': element.params[i].defaultvalue || '',
                'optional': typeof element.params[i].optional === 'boolean' ? element.params[i].optional : '',
                'nullable': typeof element.params[i].nullable === 'boolean' ? element.params[i].nullable : ''
              });
            }
          }
        }
        else if (element.kind === 'member') {
          if (!parentNode.properties) {
            parentNode.properties = [];
          }
          parentNode.properties.push({
            'name': element.name,
            'access': element.access || '',
            'virtual': !!element.virtual,
            'description': element.description || '',
            'type': element.type ? (element.type.length === 1 ? element.type[0] : element.type) : ''
          });
        }

        else if (element.kind === 'event') {
          if (!parentNode.events) {
            parentNode.events = [];
          }

          var thisEvent = {
            'name': element.name,
            'access': element.access || '',
            'virtual': !!element.virtual,
            'description': element.description || '',
            'parameters': [],
            'examples': []
          };

          parentNode.events.push(thisEvent);

          if (element.returns) {
            thisEvent.returns = {
              'type': element.returns.type ? (element.returns.type.names.length === 1 ? element.returns.type.names[0] : element.returns.type.names) : '',
              'description': element.returns.description || ''
            };
          }

          if (element.examples) {
            for (i = 0, len = element.examples.length; i < len; i++) {
              thisEvent.examples.push(element.examples[i]);
            }
          }

          if (element.params) {
            for (i = 0, len = element.params.length; i < len; i++) {
              thisEvent.parameters.push({
                'name': element.params[i].name,
                'type': element.params[i].type ? (element.params[i].type.names.length === 1 ? element.params[i].type.names[0] : element.params[i].type.names) : '',
                'description': element.params[i].description || '',
                'default': element.params[i].defaultvalue || '',
                'optional': typeof element.params[i].optional === 'boolean' ? element.params[i].optional : '',
                'nullable': typeof element.params[i].nullable === 'boolean' ? element.params[i].nullable : ''
              });
            }
          }
        }
        else if (element.kind === 'class') {
          if (!parentNode.classes) {
            parentNode.classes = [];
          }

          var thisClass = {
            'name': element.name,
            'description': element.classdesc || '',
            'extends': element.augments || [],
            'access': element.access || '',
            'virtual': !!element.virtual,
            'fires': element.fires || '',
            'constructor': {
              'name': element.name,
              'description': element.description || '',
              'parameters': [
              ],
              'examples': []
            }
          };

          parentNode.classes.push(thisClass);

          if (element.examples) {
            for (i = 0, len = element.examples.length; i < len; i++) {
              thisClass.constructor.examples.push(element.examples[i]);
            }
          }

          if (element.params) {
            for (i = 0, len = element.params.length; i < len; i++) {
              thisClass.constructor.parameters.push({
                'name': element.params[i].name,
                'type': element.params[i].type ? (element.params[i].type.names.length === 1 ? element.params[i].type.names[0] : element.params[i].type.names) : '',
                'description': element.params[i].description || '',
                'default': element.params[i].defaultvalue || '',
                'optional': typeof element.params[i].optional === 'boolean' ? element.params[i].optional : '',
                'nullable': typeof element.params[i].nullable === 'boolean' ? element.params[i].nullable : ''
              });
            }
          }

          graft(thisClass, childNodes, element.longname, element.name);
        }
      });
  }


  exports.publish = publish;
}());
