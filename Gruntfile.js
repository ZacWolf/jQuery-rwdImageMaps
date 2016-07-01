module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		config: {
			banner:	'/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
					' *\n'+
					' * Allows image maps to be used in a responsive design by recalculating the area coordinates to match the actual image size on load and window.resize\n'+
					' *\n'+
					' * Copyright (c) 2016 <%= pkg.author.name %> \<<%= pkg.author.email %>\> [<%= pkg.author.url %>]\n'+
					' * <%= pkg.repository.url %>\n'+
					' * Licensed under <%= pkg.license %>\n'+
					' \n'+
					' * Original Copyright (c) 2013 Matt Stow <matt@mattsnow.com> [http://www.mattsnow.com]\n'+
					' * https://github.com/stowball/jQuery-rwdImageMaps\n'+
					' * Licensed under MIT\n'+
					' */'
			},
		clean: {
			min: ["*.min.js"]
		},
		'string-replace': {
			inline: {
				files: {
					'./':'./<%= pkg.name %>.js'
				},
				options: {
					replacements: [{
						pattern: /^\/\*(.|[\r\n])*?\*\//g,
						replacement: '<%= config.banner %>'
					}]
				}
			}
		},
		uglify: {
			options: {
				banner: '<%= config.banner %>',
				sourceMap: true
			},
			build: {
				src: '<%= pkg.name %>.js',
				dest: '<%= pkg.name %>.min.js'
			}
		}
	});

	// Load the plugin that provides the tasks.
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-string-replace');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	
	// Default task(s).
	grunt.registerTask('default', ['clean','string-replace','uglify']);

};