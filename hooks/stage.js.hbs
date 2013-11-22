var exec = require('child_process').exec;
// https://npmjs.org/package/execSync
// Executes shell commands synchronously
var sh = require('execSync').run;
var branchName = require('execSync').exec('git branch | grep \'*\' | sed \'s/* //\'').stdout;

// Don't run on rebase
if (branchName !== '(no branch)') {
    exec('git diff --cached --quiet', function (err, stdout, stderr) {
        /*jshint unused: false*/
        'use strict';

        // only run if there are staged changes
        // i.e. what you would be committing if you ran "git commit" without "-a" option.
        if (err) {
            // stash unstaged changes - only test what's being committed
            sh('git stash --keep-index --quiet');

            exec('grunt {{task}}', function (err, stdout, stderr) {

                console.log(stdout);

                // restore stashed changes
                sh('git stash pop --quiet');

                var exitCode = 0;
                if (err) {
                    console.log(stderr);
                    exitCode = -1;
                }
                process.exit(exitCode);
            });
        }
    });
}
