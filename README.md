backbone-properties
==================

This simple plugin implement property functionality to Backbone.Model

Usage:
``` javascript
// you can use initial option properties...
var User = Backbone.Model.extend({
  properties: [
      'age',
      'phone',
      'city'
    ];
});

// ... or use createProperty method
var albert = new User({
  name: 'Albert',
  age: 20,
  phone: '555-55-55',
  city: 'Tokyo'
});
albert.createProperty('name'); // array of strings allows too

albert.name(); // return 'Albert'

albert.name('Ivan');
albert.name(); // return 'Ivan'

// you can use standart model.set options
albert.age(30, {silent: true}); // didnt raise change event
```
To prevent ovveriding model field, exception will be throw
``` javascript
albert.createProperty('get'); // throw error!
``` 