module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
  	pkg: grunt.file.readJSON('package.json'),
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
		    tasks: ['browserify']
		  },
		},
  	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task(s).
	grunt.registerTask('run', ['watch', 'browserify']);

};
