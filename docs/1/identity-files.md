---
layout: docs
title: Identity files
date: 2009-05-15 21:36:20
redirect_from: /documentation/getting-started/setting-identity/identity-files/
permalink: /docs/1/identity-files/
eleventyNavigation:
    key: 1/Identity files
    title: Identity files
    parent: 1/Your identity
    order: 2
---

## About Identity Files

An **identity file** is a text file containing information about a particular SimpleID user.

There is one identity file for each SimpleID user.  They are stored in the [identities directory](/docs/1/installing/#directories) and are named <code>username.identity</code>, where <var>username</var> is the name of the SimpleID user.

Identity files are text files formatted as Windows INI file format.  See [Wikipedia](http://en.wikipedia.org/wiki/INI_file) for more information about this file format.  If a value contains non-alphanumeric characters, you will need to surround it with quotation marks.

## Creating an Identity File

An example identity file is <code>example.identity.dist</code> in the identities directory.  Make a copy of this file and rename it <code>username.identity</code>, where <var>username</var> is the user name with which you want to log into SimpleID.

Open the file with a text editor and edit the identity file.

The file contains comments explaining what each line does.

## Contents of Identity Files

The following is an extract from the <code>example.identity.dist</code> file to provide an example of the contents of an identity file.

```ini
;
; The OpenID Identifier associated with this identity.  This is typically a
; URL, although the OpenID specifications allow the use of URIs and even XRIs.
;
; Relying parties must be able to resolve the identity to obtain the address
; of this SimpleID installation.
;
; Examples:
;    http://example.com/
;    http://example.com:8888/
;    http://example.com/myopenid
;    https://example.com:8080/myopenid
;
identity="http://example.com/"

;
; The password associated with this identity.  
;
; The password is encoded as follows:
;
;     pass="hash:algorithm:salt"
;
; There are three components to the password string.  Only the first component
; (the hash) is required, the other two are optional.
;
; 1. The hash of the password.  By default, the algorithm for hashing the
;    password is MD5.
;
;    There are various tools available which will give you the MD5 hash of any
;    given string.  If you have access to the command-line interface of PHP, you
;    can run the following command to give you the hash.
;
;    php -r "print md5('example password');"
;
;    Alternatively, you can upload the following PHP code to your web server, then
;    read off the hash with your web browser.  (This is recommended only if your
;    web server supports secure uploads (e.g. SFTP) and HTTPS, you that your
;    password is not sent over the Internet as clear text.)
;
;    <?php header('Content-Type: text/plain'); print md5('example password'); ?>
;
;    Alternatively, Wikipedia (http://en.wikipedia.org/wiki/MD5) has other resources
;    on generating this hash.
;
; 2. The algorithm used to hash the password.  If this is omitted, 'md5' is assumed.
;
;    Allowed algorithms are:
;
;    - md5
;    - sha1
;    - if the hash module is enabled, pbkdf2 and any algorithms available from that
;      module
;
; 3. Other parameters.
;
;    For md5 and sha1, this is an optional salt used to hash the password.  If
;    used, the password is appended by a colon character (:) then the salt before
;    a hash is calculated, that is:
;
;    hash(password:salt)
;
;    For pbkdf2, it is the underlying pseudorandom function, the number of
;    iterations and the salt, separated by colons.
;
; Examples (these contain the same password):
;    1a79a4d60de6718e8e5b326e338ae533                   ; MD5 hash and no salt
;    c3499c2729730a7f807efb8676a92dcb6f8a3f8f:sha1      ; SHA1 hash and no salt
;    f5e6ea5714945786623ad3932ccc757d::ideally-a-large-number-of-random-characters-to-use-as-salt                   ; MD5 hash with salt
;    9bce4e6997c6f2590717686bd62f99e33d5c6e1c:sha1:ideally-a-large-number-of-random-characters-to-use-as-salt       ; SHA1 hash with salt
;    c6e1aa5914c6e4e55fae69093afbc02e180810dcc7d3da9f863aa54f3d76e2c3:pbkdf2:sha256:100000:ideally-a-large-number-of-random-characters-to-use-as-salt ; PBKDF2
;
pass="cca6e030d81f0de52eb3f75c790ad056e57abaae:sha1:C2WG7PRM7PICMN5R"

;
; Whether this user is given administrative privileges in SimpleID.
;
; This setting has no effect in the current version of SimpleID.  However,
; more functionality may be added to SimpleID in future versions which will
; be restricted to SimpleID administrators.
;
; You should grant administrative privileges to at least one user.
;
; If you wish this user to be given administrative privileges, uncomment the
; line below.
;
administrator=1
```
