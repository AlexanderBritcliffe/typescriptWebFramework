import { User } from './models/User';

const user = new User({ name: "new record" id: 1 });

const on = user.on;

user.on('change', () => {

});

//this retunrs on function from the events class
//when we refrence user.on we are getting back a reference to on method on eventing class
