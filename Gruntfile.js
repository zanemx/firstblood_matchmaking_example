module.exports = (grunt) => {

	grunt.initConfig({
		jshint:{
			options:{
				reporter: require('jshint-stylish'),
				esversion: 6
			},
			all:[
				'**/*.js',
				'!node_modules/**',
				'!doc/**'
			]
		},
		concurrent:{
			dev:{
				tasks:['nodemon:dev','watch'],
				options:{
					logConcurrentOutput:true
				}
			}
		},
		nodemon:{
			dev:{
				script:'app.js'
			}
		},
		watch:{
			options:{
				atBegin:true
			},
			scripts:{
				files:[
					'**/*.js',
					'**/*.json',
					'**/*.ejs',
					'**/*.md',
					'!node_modules/**'
				],
				tasks:[
					'jshint',
					'shell:mocha'
				]
			}
		},
		shell:{
			mocha:'mocha'
		},
		// jsdoc:{
		// 	dist : {
	    //         src: ['app.js'],
	    //         options: {
	    //             destination: 'doc'
	    //         }
	    //     }
		// }
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-nodemon');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	// grunt.loadNpmTasks('grunt-jsdoc');

	grunt.registerTask('default',['concurrent']);
};
