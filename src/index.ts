import { Collection } from './models/Collection';

const collection  = new Collection('http://localhost:3000/users')

collection.on('change', () => {
  console.log(collection);

})

collection.fetch();


//this retunrs on function from the events class
//when we refrence user.on we are getting back a reference to on method on eventing class
