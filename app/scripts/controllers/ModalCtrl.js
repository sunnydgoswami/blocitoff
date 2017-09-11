(function() {
     function ModalCtrl(Task, $uibModalInstance) {

         this.dismiss = function() {
           $uibModalInstance.dismiss('cancel');
         };


         this.submit = function () {
             Task.add(this.newTask);
             this.newTask = '';
             $uibModalInstance.close();
         };

     }

     angular
         .module('blocitOff')
         .controller('ModalCtrl', ['Task', '$uibModalInstance', ModalCtrl]);
})();
