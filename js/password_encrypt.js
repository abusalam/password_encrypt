(function ($) {
  'use strict';
	// This function is strict.
  Drupal.behaviors.password_encrypt = {
    attach: function (context, settings) {
      var passkey = Drupal.settings.password_encrypt.password_encrypt_passkey;
      var cipher;
      var pass;
      var cpass;

      $('#user-login, #user-login-form').submit(function (event) {
        pass = $('#edit-pass').val();
        if (pass !== '') {
          cipher = CryptoJS.AES.encrypt(JSON.stringify(pass), passkey, {format: CryptoJSAesJson}).toString();
          $('#edit-pass').val(cipher);
        }
      });

      $('#user-register-form, #user-profile-form').submit(function (event) {
        pass = $('#edit-pass-pass1').val();
        cpass = $('#edit-pass-pass2').val();

        if (pass !== cpass) {
          $('span.error').append("<div>Password doesn't match. Please enter correct password.<div>");
          $('#edit-pass-pass2').addClass('error').focus();
          return false;
        }

        if (pass !== '') {
          cipher = CryptoJS.AES.encrypt(JSON.stringify(pass), passkey, {format: CryptoJSAesJson}).toString();
          $('#edit-pass-pass1').val(cipher);
          $('#edit-pass-pass2').val(cipher);
        }
      });
    }
  };
})(jQuery);
