"use strict";

/*;
	@test-license:
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
	@end-test-license

	@test-configuration:
		{
			"package": "flur",
			"path": "flur/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/flur.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should",
			"flur": "flur"
		}
	@end-include
*/

const assert = require( "should" );

//: @server:
const child = require( "child_process" );
const flur = require( "./flur.js" );
const fs = require( "fs" );
const path = require( "path" );
//: @end-server

//: @client:
const flur = require( "./flur.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge

describe( "flur", ( ) => {
	//: @server:
	let directory = __dirname;
	let file = path.resolve( directory, "sample.txt" );
	describe( `\`flur( '${ file }', true )\``, ( ) => {
		beforeEach( ( ) => {
			child.execSync( `touch ${ file }` );
		} );

		it( `should return 'file://${ directory }/sample.txt'`, ( ) => {
			assert.equal( flur( file, true ), `file://${ directory }/sample.txt` );
		} );

		afterEach( ( ) => {
			fs.unlinkSync( file );
		} );
	} );
	//: @end-server

	//: @client:
	describe( "`flur( 'sample.txt' )`", ( ) => {
		it( "should return 'file:///sample.txt'", ( ) => {
			assert.equal( flur( "sample.txt" ), "file:///sample.txt" );
		} );
	} );
	//: @end-client

	//: @bridge:
	let directory = __dirname;
	let testBridge = path.resolve( directory, "bridge.html" );
	let bridgeURL = `file://${ testBridge }`;
	describe( "`flur( 'sample.txt' )`", ( ) => {
		it( "should return 'file:///sample.txt'", ( ) => {
			let result = browser.url( bridgeURL ).execute( ( ) => flur( "sample.txt" ) );

			assert.equal( result.value, "file:///sample.txt" );
		} );
	} );
	//: @end-bridge
} );
