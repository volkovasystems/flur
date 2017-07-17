"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"package": "flur",
			"path": "flur/flur.js",
			"file": "flur.js",
			"module": "flur",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/flur.git",
			"test": "flur-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Check and transform file path to file URL.

		This will not resolve directory location.
	@end-module-documentation

	@include:
		{
			"asea": "asea",
			"kept": "kept",
			"zelf": "zelf"
		}
	@end-include
*/

const asea = require( "asea" );

//: @server:
const kept = require( "kept" );
const zelf = require( "zelf" );
//: @end-server

const resolveFileURL = function resolveFileURL( file ){
	/*;
		@meta-configuration:
			{
				"file:required": "string"
			}
		@end-meta-configuration
	*/

	if( typeof file != "string" ){
		throw new Error( "invalid file path" );
	}

	return file.replace( /\\/g, "/" )
		.replace( /^(\/*|.)/, "/$&" )
		.replace( /^\/+/, "/" )
		.replace( /^.+$/, ( match ) => encodeURI( `file://${ match }` ) )
		.replace( /[?#]/g, ( match ) => encodeURIComponent( match ) );
};

const flur = function flur( file, synchronous ){
	/*;
		@meta-configuration:
			{
				"file:required": "string",
				"synchronous": "boolean"
			}
		@end-meta-configuration
	*/

	//: @server:
	if( asea.SERVER ){
		if( synchronous === true ){
			if( kept( file, true ) ){
				return resolveFileURL( file );

			}else{
				throw new Error( "file does not exists" );
			}

		}else{
			let catcher = kept.bind( zelf( this ) )( file )
				.then( function done( error, exist ){
					if( exist ){
						return catcher.pass( null, resolveFileURL( file ) );

					}else{
						return catcher.pass( new Error( "file does not exists" ), "" );
					}
				} );

			return catcher;
		}
	}
	//: @end-server

	//: @client:
	if( asea.CLIENT ){
		return resolveFileURL( file );
	}
	//: @end-client

	throw new Error( "platform not supported" );
};

module.exports = flur;
