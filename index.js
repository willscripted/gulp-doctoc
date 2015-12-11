'use strict';

var through  = require('through2'),
    doctoc   = require('doctoc/lib/transform'),
    gutil    = require('gulp-util');

module.exports = function(opts){
  if(opts == null){opts = {};}
  var title = opts.title || "",
      notitle = opts.notitle || false,
      depth = opts.depth || 4,
      mode = opts.mode || null;

  var addToc = function (file){
    var mdWithToc = doctoc(file.contents.toString('utf8'), mode, depth, title, notitle).data;
    mdWithToc = mdWithToc || file.contents.toString();
    file.contents = new Buffer(mdWithToc, 'utf8');
    return file;
  };

  return through.obj(function(file, enc, cb){
    if(file.isNull()) {
      this.push(file);
      return cb();
    }
    if(file.isStream()) {
      this.emit('error', new gutil.PluginError('gulp-doctoc', 'Streaming not supported'));
      return cb();
    }
    try {
      this.push(addToc(file));
    } catch (e) {
      console.log(e);
      this.emit('error', new gutil.PluginError('gulp-doctoc', 'Error adding table of contents', e));
    }
    return cb();
  });

};
