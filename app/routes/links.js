import Ember from 'ember';

let links = [
	{id : 1, name: "link_1"},
	{id : 2, name: "link_2"},
	{id : 3, name: "link_3"}];
	
export default Ember.Route.extend({
	model() {
		return links;
	}
});
