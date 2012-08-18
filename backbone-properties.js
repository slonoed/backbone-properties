(function(Backbone){

	Backbone.Model.prototype.createProperty = function(props) {
		if (!_.isArray(props)) {
			props = [props]
		}

		for (var i = 0; i < props.length; i++) {

			this[props[i]] = (function(prop) {
				return function() {
					if (arguments.length === 0) {
						return this.get(prop);
					}
					else if (arguments.length > 0) {
						return this.set(prop, arguments[0], arguments[1]);
					}
				};}
			)(props[i]);
		}

	};
})(Backbone);
