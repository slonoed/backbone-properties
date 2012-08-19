// https://github.com/SLonoed/backbone-properties
// tested with backbone 0.9.2

(function(Backbone){

	Backbone.Model.prototype.createProperty = function(props) {
		if (!_.isArray(props)) {
			props = [props]
		}

		for (var i = 0; i < props.length; i++) {
			var prop = props[i];

			if (!_.isUndefined(this[prop])) {
				throw 'Object allready has field ' + prop;
			}

			this[props[i]] = (function(prop) {
				return function() {
					if (arguments.length === 0) {
						return this.get(prop);
					}
					else if (arguments.length > 0) {
						return this.set(prop, arguments[0], arguments[1]);
					}
				};}
			)(prop);
		}

	};
})(Backbone);
