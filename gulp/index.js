import fs from 'fs';
import gulp from 'gulp';
import { join as joinPath } from 'path';
import util from 'gulp-util';

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['build-app']);

// load all tasks in tasks directory ...
const dir = joinPath(__dirname, 'tasks');
fs.readdirSync(dir).forEach(file => {
    const task = require(joinPath(dir, file));
    try {
        task(gulp);
    } catch (err) {
        util.log(`task ${file} must export a default function`);
    }
});