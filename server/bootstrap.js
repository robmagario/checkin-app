import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

Meteor.startup(function() {
    //console.log(Meteor.users.find().fetch());
  if (Meteor.users.find().count() != 0) return;

  //Accounts.createUserWithPhone({
  //  phone: '+972501234567',
  //  profile: {
  //    name: 'My friend 4'
  //  }
  //});
  //
  //Accounts.createUserWithPhone({
  //  phone: '+972501234568',
  //  profile: {
  //    name: 'My friend 2'
  //  }
  //});
  //
  //Accounts.createUserWithPhone({
  //  phone: '+972501234569',
  //  profile: {
  //    name: 'My friend 3'
  //  }
  //});
});