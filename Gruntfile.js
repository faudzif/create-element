// This shows a full config file!
module.exports = function (grunt) {
    grunt.initConfig({
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'dist/*.js',
                        '*.html'
                    ]
                },
                options: {
                    server: './'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.registerTask('default', ['browserSync']);
};