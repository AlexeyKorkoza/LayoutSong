(function() {
$(document).ready(function() {
  $("#modal_order").validate({
    rules: {
      firstname: "required",
      telephone: {
       required: true,
       digits: true
      },
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      firstname: "Пожалуйста введите имя",
      telephone: "Пожалуйста введите телефон",
      email: "Пожалуйста введите электронный адрес"
    },
    submitHandler: function (form) {
      form.submit();
    }
  });
});
}());