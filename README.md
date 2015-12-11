gulp-doctoc
==============

Inject a table of contents into your markdown files.

Install
-----------

Install with [npm](https://npmjs.org/package/gulp-doctoc)

```javascript
npm install --save-dev gulp-doctoc
```

Usage
---------

```javascript
var toc    = require('gulp-doctoc'),
    marked = require('gulp-marked');

gulp.task('markdown', function(){

  gulp.src('./**/*.md')
    .pipe(toc())
    .pipe(marked())
    .pipe(gulp.dest('./public/'));

});

```

By default, doctoc puts the TOC at the top of the file. To place it somewhere else, add:

```
<!-- START doctoc -->
<!-- END doctoc -->
```

Custom `title`, `depth`, `mode` and `notitle` options are also accepted

```
    // ...
    .pipe(toc({
      title: "Table des matières",
      depth: 3,
      mode: "bitbucket.org",
      notitle: true
    }))
    // ...
```

Thanks
-------

Thanks to [@thlorenz](https://github.com/thlorenz) for [doctoc](https://github.com/thlorenz/doctoc). He did all the hard work.

License
--------

MIT (same as [doctoc](https://github.com/thlorenz/doctoc))
