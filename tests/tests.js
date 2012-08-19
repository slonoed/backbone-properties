var User = Backbone.Model.extend({
	defaults: {
		name: 'noname',
		age: 20,
		phone: '555-55-55',
		city: 'Tokyo'
	},

	initialize: function() {
		this.createProperty('name');

		this.createProperty([
			'age',
		    'phone',
		    'city'
		]);
	}
});



describe("Main: ", function() {
	var albert = new User({name:'Albert'});

	it("model has .createProperty", function() {
		expect(albert.createProperty).toBeDefined();
	});

	it("use get: model.property()", function() {
		expect(albert.name()).toBe('Albert');
	});

	it("use set: model.property(value)", function() {
		albert.name('Ivan');
		expect(albert.get('name')).toBe('Ivan');
	});

	it("use set + options: model.property(value, options)", function() {
		var changed = false;
		albert.bind('change:name', function() {
			changed = true;
		});
		albert.name('Tomas', {silent: true});
		expect(changed).toBe(false);
	});


	it("thorow on coincident", function() {
		var foo = function() {
			albert.createProperty('initialize')
		};
		expect(foo).toThrow();
	});
});