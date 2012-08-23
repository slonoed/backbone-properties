// 0.1
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
    var OriginalModel = Backbone.Model;
    Backbone.Model = function (attributes, options) {
                OriginalModel.apply(this, arguments);
                if (_.isArray(this.properties)) {
                    this.createProperty(this.properties);
                }
    };
    _.extend(Backbone.Model, OriginalModel);
    Backbone.Model.prototype = OriginalModel.prototype;
})(Backbone);
