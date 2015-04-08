'use strict';

var assert  = require('assert'),
    gutil   = require('gulp-util'),
    gdoctoc = require('../index'),
    fs      = require('fs');

it('should add TOC to the markdown', function (cb) {

  var stream = gdoctoc();

  stream.on('data', function (file) {
    assert.equal(file.relative, 'before.md');
    assert.equal(file.path, 'test/fixture/before.md');
    assert.equal(file.contents.toString(), fs.readFileSync('./test/fixture/after.md', 'utf8'));
    cb();
  });

  stream.write(new gutil.File({
    cwd: 'test',
    base: 'test/fixture',
    path: 'test/fixture/before.md',
    contents: fs.readFileSync('./test/fixture/before.md')
  }));

  stream.end();
});

it('should allow title change', function (cb) {

  var stream = gdoctoc({title: " "});

  stream.on('data', function (file) {
    assert.equal(file.relative, 'before.md');
    assert.equal(file.path, 'test/fixture/before.md');
    assert.equal(file.contents.toString(), fs.readFileSync('./test/fixture/after-w-title.md', 'utf8'));
    cb();
  });

  stream.write(new gutil.File({
    cwd: 'test',
    base: 'test/fixture',
    path: 'test/fixture/before.md',
    contents: fs.readFileSync('./test/fixture/before.md')
  }));

  stream.end();
});

it('should empty files', function (cb) {

  var stream = gdoctoc();

  stream.on('data', function (file) {
    assert.equal(file.relative, 'empty.md');
    assert.equal(file.path, 'test/fixture/empty.md');
    assert.equal(file.contents.toString(), fs.readFileSync('./test/fixture/empty.md', 'utf8'));
    cb();
  });

  stream.write(new gutil.File({
    cwd: 'test',
    base: 'test/fixture',
    path: 'test/fixture/empty.md',
    contents: fs.readFileSync('./test/fixture/empty.md')
  }));

  stream.end();
});

it('should allow depth change', function (cb) {

  var stream = gdoctoc({depth: 2});

  stream.on('data', function (file) {
    assert.equal(file.relative, 'before.md');
    assert.equal(file.path, 'test/fixture/before.md');
    assert.equal(file.contents.toString(), fs.readFileSync('./test/fixture/after-w-depth.md', 'utf8'));
    cb();
  });

  stream.write(new gutil.File({
    cwd: 'test',
    base: 'test/fixture',
    path: 'test/fixture/before.md',
    contents: fs.readFileSync('./test/fixture/before.md')
  }));

  stream.end();
});
