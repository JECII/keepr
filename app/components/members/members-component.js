(function () {

	angular.module('members',[])
		.component('membersComponent', {
			templateUrl: 'app/components/members/members.html',
			controller: MembersController
		})


		function MembersController($firebaseArray, FBREF) {
		var mc = this;
		var db = new Firebase(FBREF +' members');
		
		mc.members= $firebaseArray(db);
		
		mc.addmember = function (member) {
			mc.members.$add(member);
			mc.newmember = null;
			
		}
		mc.removemember = function(index){
			mc.members.$remove(index);
		}
		mc.editmember = function(member){
			mc.newmember = member;
			
		}
		// this.$onInit = function () {
		// 	if (!MemberService.getAuth()) {
		// 		return $state.go('home')
		// 	}
		// 	mc.member = MemberService.getMember();
		// }

		}


} ())