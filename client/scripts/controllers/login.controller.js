import { _ } from 'meteor/underscore';
import { Accounts } from 'meteor/accounts-base';
import { Controller } from 'angular-ecmascript/module-helpers';

export default class LoginCtrl extends Controller {
    constructor() {
        super(...arguments);
        //init
        this.username='John';
        test2=function(){
            console.log(Meteor.user());
        }
    }

    //Meteor.loginWithPassword('john','aaaaaaaa')
    //Meteor.loginWithPassword(user, password, [callback])
    //Meteor.logout()
    test(){
        this.$state.go('tab.chats');
        return
        //console.log(this);
        //this.$ionicPopup.alert({
        //    title: 'Error',
        //    template: 'abc'
        //});
    }
  login() {
      let ctrl=this
      Accounts.createUser({
          username:this.username,
          password:this.password
      }, function(err){
          if(!err){
                ctrl.$state.go('tab.chats');
              ctrl.$ionicPopup.alert({
                  title: 'Account created',
                  template: '<div>Username:'+ctrl.username+'</div>',
                  cssClass: 'text-center'
              });
          }else{
              ctrl.$ionicPopup.alert({
                  title: 'Error',
                  template: err.reason,
                  cssClass: 'text-center'
              });
              console.log(err);
          }
      });
      return
    if (_.isEmpty(this.phone)) return;

    const confirmPopup = this.$ionicPopup.confirm({
      title: 'Number confirmation',
      template: '<div>' + this.phone + '</div><div>Is your phone number above correct?</div>',
      cssClass: 'text-center',
      okText: 'Yes',
      okType: 'button-positive button-clear',
      cancelText: 'edit',
      cancelType: 'button-dark button-clear'
    });

    confirmPopup.then((res) => {
      if (!res) return;

      this.$ionicLoading.show({
        template: 'Sending verification code...'
      });

      Accounts.requestPhoneVerification(this.phone, (err) => {
        this.$ionicLoading.hide();
        if (err) return this.handleError(err);
        this.$state.go('confirmation', { phone: this.phone });
      });
    });
  }

  handleError(err) {
    this.$log.error('Login error ', err);

    this.$ionicPopup.alert({
      title: err.reason || 'Login failed',
      template: 'Please try again',
      okType: 'button-positive button-clear'
    });
  }
}

LoginCtrl.$inject = ['$state', '$ionicLoading', '$ionicPopup', '$log'];