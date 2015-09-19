---
layout: docs
doctree: doctree2
title: Migrating from SimpleID 1.x
permalink: /docs/2/migrating/
---

SimpleID version 2.0 is an almost complete rewrite of SimpleID.  The format of the
configuration and identity files have changed between the two versions.  Therefore
existing configuration and identity files from the previous version of SimpleID
will need to be converted to the new version.

While [simpleid-tool](/docs/2/simpleid-tool/) can be used to assist in this process, as a result
of more stringent security requirements, manual intervention will still need to
be required.

## Migrating configuration settings

In SimpleID 1, configuration settings are stored as a set of `define` statements
in `config.php`.  In SimpleID 2, configuration settings are stored in the
`$config` array in `config.php` created by parsing the YAML settings in that
file.

You can use [simpleid-tool](/docs/2/simpleid-tool/#migrate-config) to help with
this process, but you will still need to edit the new configuration
file manually to include all the new required options.


## Migrating users

In SimpleID 1, identity files are stored as Windows INI files.  From SimpleID 2,
user files are stored as YAML files.

There are a large number of differences between the format between the 2 versions,
including the following:

- [new password requirements](#password)
- moving OpenID related identity information from the root of the identity file
  to the `openid` object of the user file
- the use of the `userinfo` object as the preferred approach of storing
  user registration information

You can use [simpleid-tool](/docs/2/simpleid-tool/#migrate-user) to help with
this process, but you will still need to edit the new user
file manually .


## Passwords    {#password}

SimpleID 2 substantially increased password security requirements.  
In particular, the only encoding accepted for passwords is PBKDF2.  Password 
encoding methods from previous versions of SimpleID (e.g. MD5, SHA1 and
their salted versions) are no longer acceptable.

This means that
all passwords from SimpleID 1 will need to be re-encrypted to SimpleID 2 standards.

## Additional protocol requirements

The OpenID Connect protocol contains additional setup requirements.  These
include:

- [generating RSA keys](/docs/2/installing/#keys) used to sign ID tokens;
- [setting up WebFinger](/docs/2/installing/#webfinger).

