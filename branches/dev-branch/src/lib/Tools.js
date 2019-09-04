var JsLibs;
if (typeof JsLibs === 'undefined') {
	JsLibs = {};
}

JsLibs.Tools = (function() {

	return {
		/**
		 * Overwrites the values of obj1's properties with obj2's and adds obj2's properties if non existent in obj1
		 * 
		 * @param obj1
		 * @param obj2
		 * @returns obj3 a new object based on obj1 and obj2
		 */
		'mergeOptions': function(obj1, obj2) {
			var obj3 = {};
			for (var attrname in obj1) { 
				obj3[attrname] = obj1[attrname]; 
			}
			for (var attrname in obj2) { 
				obj3[attrname] = obj2[attrname]; 
			}
			return obj3;
		}
	};
})()

if (typeof module !== "undefined") {
	module.exports = JsLibs.Tools;
}