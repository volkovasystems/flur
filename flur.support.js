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

var asea = require("asea");



var resolveFileURL = function resolveFileURL(file) {
	/*;
                                                    	@meta-configuration:
                                                    		{
                                                    			"file:required": "string"
                                                    		}
                                                    	@end-meta-configuration
                                                    */

	if (typeof file != "string") {
		throw new Error("invalid file path");
	}

	return file.replace(/\\/g, "/").
	replace(/^(\/*|.)/, "/$&").
	replace(/^\/+/, "/").
	replace(/^.+$/, function (match) {return encodeURI("file://" + match);}).
	replace(/[?#]/g, function (match) {return encodeURIComponent(match);});
};

var flur = function flur(file, synchronous) {
	/*;
                                             	@meta-configuration:
                                             		{
                                             			"file:required": "string",
                                             			"synchronous": "boolean"
                                             		}
                                             	@end-meta-configuration
                                             */



	//: @client:
	if (asea.CLIENT) {
		return resolveFileURL(file);
	}
	//: @end-client

	throw new Error("platform not supported");
};

module.exports = flur;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsdXIuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc2VhIiwicmVxdWlyZSIsInJlc29sdmVGaWxlVVJMIiwiZmlsZSIsIkVycm9yIiwicmVwbGFjZSIsIm1hdGNoIiwiZW5jb2RlVVJJIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZmx1ciIsInN5bmNocm9ub3VzIiwiQ0xJRU5UIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0RBLElBQU1BLE9BQU9DLFFBQVMsTUFBVCxDQUFiOzs7O0FBSUEsSUFBTUMsaUJBQWlCLFNBQVNBLGNBQVQsQ0FBeUJDLElBQXpCLEVBQStCO0FBQ3JEOzs7Ozs7OztBQVFBLEtBQUksT0FBT0EsSUFBUCxJQUFlLFFBQW5CLEVBQTZCO0FBQzVCLFFBQU0sSUFBSUMsS0FBSixDQUFXLG1CQUFYLENBQU47QUFDQTs7QUFFRCxRQUFPRCxLQUFLRSxPQUFMLENBQWMsS0FBZCxFQUFxQixHQUFyQjtBQUNMQSxRQURLLENBQ0ksVUFESixFQUNnQixLQURoQjtBQUVMQSxRQUZLLENBRUksTUFGSixFQUVZLEdBRlo7QUFHTEEsUUFISyxDQUdJLE1BSEosRUFHWSxVQUFFQyxLQUFGLFVBQWFDLHNCQUFzQkQsS0FBdEIsQ0FBYixFQUhaO0FBSUxELFFBSkssQ0FJSSxPQUpKLEVBSWEsVUFBRUMsS0FBRixVQUFhRSxtQkFBb0JGLEtBQXBCLENBQWIsRUFKYixDQUFQO0FBS0EsQ0FsQkQ7O0FBb0JBLElBQU1HLE9BQU8sU0FBU0EsSUFBVCxDQUFlTixJQUFmLEVBQXFCTyxXQUFyQixFQUFrQztBQUM5Qzs7Ozs7Ozs7Ozs7QUFXQTtBQUNBLEtBQUlWLEtBQUtXLE1BQVQsRUFBaUI7QUFDaEIsU0FBT1QsZUFBZ0JDLElBQWhCLENBQVA7QUFDQTtBQUNEOztBQUVBLE9BQU0sSUFBSUMsS0FBSixDQUFXLHdCQUFYLENBQU47QUFDQSxDQW5CRDs7QUFxQkFRLE9BQU9DLE9BQVAsR0FBaUJKLElBQWpCIiwiZmlsZSI6ImZsdXIuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwiZmx1clwiLFxuXHRcdFx0XCJwYXRoXCI6IFwiZmx1ci9mbHVyLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJmbHVyLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcImZsdXJcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2ZsdXIuZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJmbHVyLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0Q2hlY2sgYW5kIHRyYW5zZm9ybSBmaWxlIHBhdGggdG8gZmlsZSBVUkwuXG5cblx0XHRUaGlzIHdpbGwgbm90IHJlc29sdmUgZGlyZWN0b3J5IGxvY2F0aW9uLlxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhc2VhXCI6IFwiYXNlYVwiLFxuXHRcdFx0XCJrZXB0XCI6IFwia2VwdFwiLFxuXHRcdFx0XCJ6ZWxmXCI6IFwiemVsZlwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFzZWEgPSByZXF1aXJlKCBcImFzZWFcIiApO1xuXG5cblxuY29uc3QgcmVzb2x2ZUZpbGVVUkwgPSBmdW5jdGlvbiByZXNvbHZlRmlsZVVSTCggZmlsZSApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcImZpbGU6cmVxdWlyZWRcIjogXCJzdHJpbmdcIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0aWYoIHR5cGVvZiBmaWxlICE9IFwic3RyaW5nXCIgKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBmaWxlIHBhdGhcIiApO1xuXHR9XG5cblx0cmV0dXJuIGZpbGUucmVwbGFjZSggL1xcXFwvZywgXCIvXCIgKVxuXHRcdC5yZXBsYWNlKCAvXihcXC8qfC4pLywgXCIvJCZcIiApXG5cdFx0LnJlcGxhY2UoIC9eXFwvKy8sIFwiL1wiIClcblx0XHQucmVwbGFjZSggL14uKyQvLCAoIG1hdGNoICkgPT4gZW5jb2RlVVJJKCBgZmlsZTovLyR7IG1hdGNoIH1gICkgKVxuXHRcdC5yZXBsYWNlKCAvWz8jXS9nLCAoIG1hdGNoICkgPT4gZW5jb2RlVVJJQ29tcG9uZW50KCBtYXRjaCApICk7XG59O1xuXG5jb25zdCBmbHVyID0gZnVuY3Rpb24gZmx1ciggZmlsZSwgc3luY2hyb25vdXMgKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJmaWxlOnJlcXVpcmVkXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcdFwic3luY2hyb25vdXNcIjogXCJib29sZWFuXCJcblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdFxuXG5cdC8vOiBAY2xpZW50OlxuXHRpZiggYXNlYS5DTElFTlQgKXtcblx0XHRyZXR1cm4gcmVzb2x2ZUZpbGVVUkwoIGZpbGUgKTtcblx0fVxuXHQvLzogQGVuZC1jbGllbnRcblxuXHR0aHJvdyBuZXcgRXJyb3IoIFwicGxhdGZvcm0gbm90IHN1cHBvcnRlZFwiICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZsdXI7XG4iXX0=
//# sourceMappingURL=flur.support.js.map
