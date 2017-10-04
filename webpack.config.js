//const webpack=require('webpack');
var config={
	entry:'./main.js',
	output:{
		path:'./',
		filename:'index.js'
	},
	devServer:{
		inline:true,
		port:6812
	},
	module:{
		loaders:[
			{
				test:/\.jsx?$/,
				exclude:/node_modules/,
				loader:'babel',
				query:{
					presets:['es2015','react']
				}
			}
		],
		resolve:{
			extensions:['.js','.jsx']
		}
	}
}

module.exports=config;