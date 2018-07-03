module.exports = (grunt) => {

	grunt.initConfig({
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
			scripts:{
				files:[
					'**/*.js',
					'**/*.json',
					'**/*.ejs',
					'**/*.md',
					'!node_modules/**'
				],
				tasks:[
					'shell:mocha',
				]
			},

		},
		shell:{
			mocha:'mocha'
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-nodemon');

	grunt.registerTask('default',['concurrent']);
};
