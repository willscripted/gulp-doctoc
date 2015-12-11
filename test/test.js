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

  var stream = gdoctoc({title: "***Custom title Table of Contents***"});

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

it('should no title', function (cb) {

  var stream = gdoctoc({title: 'custom title', notitle: true});

  stream.on('data', function (file) {
    assert.equal(file.relative, 'before.md');
    assert.equal(file.path, 'test/fixture/before.md');
    assert.equal(file.contents.toString(), fs.readFileSync('./test/fixture/after-w-notitle.md', 'utf8'));
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

it('should allow mode change to «bitbucket.org»', function (cb) {

  var stream = gdoctoc({mode: 'bitbucket.org'});

  stream.on('data', function (file) {
    assert.equal(file.relative, 'before.md');
    assert.equal(file.path, 'test/fixture/before.md');
    assert.equal(file.contents.toString(), fs.readFileSync('./test/fixture/after-w-mode-bitbucket.md', 'utf8'));
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

it('should allow mode change to «github.com»', function (cb) {

  var stream = gdoctoc({mode: 'github.com'});

  stream.on('data', function (file) {
    assert.equal(file.relative, 'before.md');
    assert.equal(file.path, 'test/fixture/before.md');
    assert.equal(file.contents.toString(), fs.readFileSync('./test/fixture/after-w-mode-github.md', 'utf8'));
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

it('should allow mode change to «gitlab.com»', function (cb) {

  var stream = gdoctoc({mode: 'gitlab.com'});

  stream.on('data', function (file) {
    assert.equal(file.relative, 'before.md');
    assert.equal(file.path, 'test/fixture/before.md');
    assert.equal(file.contents.toString(), fs.readFileSync('./test/fixture/after-w-mode-gitlab.md', 'utf8'));
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

it('should add TOC to the markdown [Without location]', function (cb) {

  var stream = gdoctoc();

  stream.on('data', function (file) {
    assert.equal(file.relative, 'before-wo-location.md');
    assert.equal(file.path, 'test/fixture/before-wo-location.md');
    assert.equal(file.contents.toString(), fs.readFileSync('./test/fixture/after-wo-location.md', 'utf8'));
    cb();
  });

  stream.write(new gutil.File({
    cwd: 'test',
    base: 'test/fixture',
    path: 'test/fixture/before-wo-location.md',
    contents: fs.readFileSync('./test/fixture/before-wo-location.md')
  }));

  stream.end();
});

it('should allow title change [Without location]', function (cb) {

  var stream = gdoctoc({title: "***Custom title Table of Contents***"});

  stream.on('data', function (file) {
    assert.equal(file.relative, 'before-wo-location.md');
    assert.equal(file.path, 'test/fixture/before-wo-location.md');
    assert.equal(file.contents.toString(), fs.readFileSync('./test/fixture/after-wo-location-w-title.md', 'utf8'));
    cb();
  });

  stream.write(new gutil.File({
    cwd: 'test',
    base: 'test/fixture',
    path: 'test/fixture/before-wo-location.md',
    contents: fs.readFileSync('./test/fixture/before-wo-location.md')
  }));

  stream.end();
});

it('should allow depth change [Without location]', function (cb) {

  var stream = gdoctoc({depth: 2});

  stream.on('data', function (file) {
    assert.equal(file.relative, 'before-wo-location.md');
    assert.equal(file.path, 'test/fixture/before-wo-location.md');
    assert.equal(file.contents.toString(), fs.readFileSync('./test/fixture/after-wo-location-w-depth.md', 'utf8'));
    cb();
  });

  stream.write(new gutil.File({
    cwd: 'test',
    base: 'test/fixture',
    path: 'test/fixture/before-wo-location.md',
    contents: fs.readFileSync('./test/fixture/before-wo-location.md')
  }));

  stream.end();
});

it('should no title [Without location]', function (cb) {

  var stream = gdoctoc({notitle: true});

  stream.on('data', function (file) {
    assert.equal(file.relative, 'before-wo-location.md');
    assert.equal(file.path, 'test/fixture/before-wo-location.md');
    assert.equal(file.contents.toString(), fs.readFileSync('./test/fixture/after-wo-location-w-notitle.md', 'utf8'));
    cb();
  });

  stream.write(new gutil.File({
    cwd: 'test',
    base: 'test/fixture',
    path: 'test/fixture/before-wo-location.md',
    contents: fs.readFileSync('./test/fixture/before-wo-location.md')
  }));

  stream.end();
});

it('should allow mode change to «bitbucket.org» [Without location]', function (cb) {

  var stream = gdoctoc({mode: 'bitbucket.org'});

  stream.on('data', function (file) {
    assert.equal(file.relative, 'before-wo-location.md');
    assert.equal(file.path, 'test/fixture/before-wo-location.md');
    assert.equal(file.contents.toString(), fs.readFileSync('./test/fixture/after-wo-location-w-mode-bitbucket.md', 'utf8'));
    cb();
  });

  stream.write(new gutil.File({
    cwd: 'test',
    base: 'test/fixture',
    path: 'test/fixture/before-wo-location.md',
    contents: fs.readFileSync('./test/fixture/before-wo-location.md')
  }));

  stream.end();
});

it('should allow mode change to «github.com» [Without location]', function (cb) {

  var stream = gdoctoc({mode: 'github.com'});

  stream.on('data', function (file) {
    assert.equal(file.relative, 'before-wo-location.md');
    assert.equal(file.path, 'test/fixture/before-wo-location.md');
    assert.equal(file.contents.toString(), fs.readFileSync('./test/fixture/after-wo-location-w-mode-github.md', 'utf8'));
    cb();
  });

  stream.write(new gutil.File({
    cwd: 'test',
    base: 'test/fixture',
    path: 'test/fixture/before-wo-location.md',
    contents: fs.readFileSync('./test/fixture/before-wo-location.md')
  }));

  stream.end();
});

it('should allow mode change to «gitlab.com» [Without location]', function (cb) {

  var stream = gdoctoc({mode: 'gitlab.com'});

  stream.on('data', function (file) {
    assert.equal(file.relative, 'before-wo-location.md');
    assert.equal(file.path, 'test/fixture/before-wo-location.md');
    assert.equal(file.contents.toString(), fs.readFileSync('./test/fixture/after-wo-location-w-mode-gitlab.md', 'utf8'));
    cb();
  });

  stream.write(new gutil.File({
    cwd: 'test',
    base: 'test/fixture',
    path: 'test/fixture/before-wo-location.md',
    contents: fs.readFileSync('./test/fixture/before-wo-location.md')
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