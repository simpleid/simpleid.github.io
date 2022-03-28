---
layout: docs
title: Upgrading to version 0.9
date: 2014-03-11 22:28:44
permalink: /docs/1/upgrading/0.9/
eleventyNavigation:
    key: 1/Upgrading to version 0.9
    title: Upgrading to version 0.9
    parent: 1/Upgrading
    order: 9
---

SimpleID version 0.9 introduced numerous changes and additional
system requirements.  A manual upgrading process is required.  If you are
upgrading from an earlier version of SimpleID, please see below for specific notes.

## System requirements

The system requirements for SimpleID have changed.  The most important
changes are:

### PHP

From version 0.9, the minimum version of PHP is 5.3.0.  PHP 4 is no
longer supported.

### HTTPS support

From version 0.9, HTTPS support is mandatory.  The evolving security
environment means that it is no longer safe to accept logins from
unencrypted connections.

If you run your own server, there are now many inexpensive certificate 
authorities from which to get certificates.  Self-signed certificates
are also acceptable (although not recommended).

If you are using a shared server from a web hosting provider, check
with them regarding SSL capabilities.  Many offer a shared SSL
certificate to the server at no extra cost.

You should also ensure that the web server software (including its SSL library) are secure and kept up-to-date.

For further information on the revised system requirements, see the [SimpleID documentation](/docs/1/system-requirements).

## Enhanced password security

Version 0.9 now supports storing passwords with hashing algorithms other than
MD5 and with a salt.  You may wish to update your [identity file](/docs/1/identity-files) to take
advantage of this new feature.

## File extensions

SimpleID PHP code files no longer use the `.inc` file extension.  Instead only
the `.php` file extension is used.  This prevents misconfigured web servers to
return SimpleID source code.

You will need to perform the following manually:

a. Rename `config.inc` to `config.php`

b. Rename any custom extensions in the extensions directory from
 `.extension.inc` to `.extension.php`

c. Delete all old `.inc` files from the SimpleID web directory.

## `upgrade.php`

You will need to run the [upgrade script](/docs/1/upgrading/#upgrade-php) to complete the upgrade.