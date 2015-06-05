module.exports = function(grunt) {
	'use strict';

  // Project configuration.
  grunt.initConfig({
  	pkg: grunt.file.readJSON('package.json'),
  		jshint: {
  			all: ['public/js/**/*.js','!public/js/angular/*.js']

  		},
		browserify: {
		  dist: {
		    files: {
		    	'public/dist/app.js': ['public/js/app.js']
		    }
		  }
		},
		watch: {
		  scripts: {
		    files: ['public/js/**/*.js'],
		    tasks: ['browserify','jshint']
		  },
		},
  	});

	// Load the plugin that provides the task.
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	// Default task(s).
	grunt.registerTask('run', ['watch', 'browserify','jshint']);

};
