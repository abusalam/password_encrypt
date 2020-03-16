(function ($, Drupal, drupalSettings) {
  'use strict';
	// This function is strict.
  Drupal.behaviors.password_encrypt = {
    attach: function (context, settings) {
      var passkey = drupalSettings.password_encrypt.passkey;
      var cipher;
      var pass;
      var cpass;
      var current_pass;

      $('#user-login, #user-login-form').submit(function (event) {
        pass = $('#edit-pass').val();
        if (pass !== '') {
          cipher = CryptoJS.AES.encrypt(pass, passkey);
          $('#edit-pass').val(cipher);
        }
      });

      $('#user-register-form, #user-form').submit(function (event) {
        current_pass = $('#edit-current-pass').val();
        pass = $('#edit-pass-pass1').val();
        cpass = $('#edit-pass-pass2').val();

        if (pass !== cpass) {
          $('span.error').append("<div>Password doesn't match. Please enter correct password.<div>");
          $('#edit-pass-pass2').addClass('error').focus();
          return false;
        }

        if (current_pass !== '') {
          cipher = CryptoJS.AES.encrypt(current_pass, passkey).toString();
          $('#edit-current-pass').val(cipher);
        }

        if (pass !== '') {
          cipher = CryptoJS.AES.encrypt(pass, passkey);
          $('#edit-pass-pass1').val(cipher);
          $('#edit-pass-pass2').val(cipher);
        }

      });
    }
  };
})(jQuery, Drupal, drupalSettings);
