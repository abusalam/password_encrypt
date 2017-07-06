This module encrypts the user password on user form submission. 
It prevents the propagation of plain password over internet on
user form submission.

Dependencies:
----------------
1. OpenSSL extension.
2. CryptoJS library.
3. AES JSON formatter for CryptoJS.

Installation:
----------------
1. Download CryptoJS library from
https://code.google.com/archive/p/crypto-js/downloads and move aes.js to
sites/all/libraries/CryptoJs.
2. Download AES JSON formatter js for CryptoJS from
https://github.com/brainfoolong/cryptojs-aes-php/blob/master/aes-json-format.js
and copy to sites/all/libraries/CryptoJs.
3. Install and Enable Password Encrypt module.

Configuration:
---------------
1. Go to admin/config/people/password-encrypt and change the passkey for
encryption/decryption.
