var Backbone     = require('./backbone');
var Marionette   = require('backbone.marionette');
var OriginalView = Marionette.CollectionView;
var _            = require('underscore');

var View = OriginalView.extend({
  _createElement: function(tagName) {
    return Backbone.ctx.document.createElement(tagName);
  },

  _createBuffer: function() {
    var elBuffer = Backbone.ctx.document.createDocumentFragment();
    _.each(this._bufferedChildren, function(b) {
      elBuffer.appendChild(b.el);
    });
    return elBuffer;
  },
});

module.exports = View;
