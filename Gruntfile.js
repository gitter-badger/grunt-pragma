'use strict';

module.exports = function (grunt) {
	grunt.initConfig({
		jshint: {
			all: [
				'Gruntfile.js',
				'tasks/*.js',
				'lib/*.js',
				'<%= nodeunit.tests %>'
			],
			options: {
				jshintrc: '.jshintrc'
			}
		},

		clean: [
			'.tmp'
		],

		pragma: {
			options: {
				world: function (params) {
					return params.join('');
				},
				hello: function () {
					return 'HELLO';
				}
			},
			convert: {
				expand: true,
				cwd: 'examples',
				dest: '.tmp',
				src: [
					'**/*.txt'
				]
			}
		},

		nodeunit: {
			tests: [ 'tests/*.js' ]
		},

		watch: {
			files: [
				'lib/**/*',
				'tests/**/*',
				'tasks/**/*',
				'examples/**/*'
			],
			tasks: [
				'test'
			]
		}
	});

	grunt.registerTask('default', [
		'test',
		'watch'
	]);

	grunt.registerTask('test', [
		'jshint',
		'clean',
		'pragma',
		'nodeunit'
	]);

	grunt.loadTasks('tasks');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');
	grunt.loadNpmTasks('grunt-contrib-watch');
};
