var keystone = require('keystone');

/**
 * Tag Model
 * ==================
 */

var Tag = new keystone.List('Tag', {
	autokey: { from: 'name', path: 'key', unique: true },
});
Tag.add({
	name: { type: String, required: true },
});
Tag.relationship({ ref: 'Entry', path: 'tag' });
Tag.register();
