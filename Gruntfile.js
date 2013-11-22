// Generated on 2013-09-06 using generator-melindrea 0.0.0
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        githooks: {
            stage: {
                options: {
                    template: 'hooks/stage.js.hbs'
                },
                'pre-commit': 'commit'
            },
            update: {
                options: {
                    template: 'hooks/update.js.hbs'
                },
                'post-merge': true,
                'post-checkout': true
            }
        }
    });

    grunt.registerTask('default', [
        'githooks'
    ]);

    grunt.registerTask('commit', []);
};
