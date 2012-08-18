backbone-properties
==================

This simple plugin implement property functionality to Backbone.Model

Usage:
``` javascript
var User = Backbone.Model.extend({
  initialize: function() {
    // create one property
    this.createProperty('name');
    
    // or use array to create several
    this.createProperty([
      'age',
      'phone',
      'city'
    ]);
  }
});

var albert = new User({
  name: 'Albert',
  age: 20,
  phone: '555-55-55',
  city: 'Tokyo'
});


albert.name(); // return 'Albert'

albert.name('Ivan');
albert.name(); // return 'Ivan'

// you can use standart model.set options
albert.age({silent: true}); // didnt raise change event
```

