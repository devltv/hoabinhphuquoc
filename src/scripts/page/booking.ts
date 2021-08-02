declare var $ : any;

function dateTimePickerStep(){
  $('#receiveFormStep').datetimepicker({
    timepicker:false,
    format: 'd/m/Y',
  });
  $('#payFormStep').datetimepicker({
    timepicker:false,
    format: 'd/m/Y',
  });
}

function bookingStep(){

}

export const booking = function (){
  dateTimePickerStep();
}