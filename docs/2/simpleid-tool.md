---
layout: docs
doctree: SimpleID 2 Documentation
title: "Using simpleid-tool"
permalink: "/docs/2/simpleid-tool/"
eleventyNavigation:
    key: 2/simpleid-tool
    title: Using simpleid-tool
    parent: 2/_using-simpleid
    order: 40
---


`simpleid-tool` is a command-line tool that performs various maintenance functions.

## Installing     {#installing}

The tool can be installed using Composer:

```shell
composer require simpleid/simpleid-tool:dev-master
```

## Encoding passwords    {#passwd}

`simpleid-tool` can be used to encode passwords in PBKDF2.  To encode a password, invoke `simpleid-tool` using the following command:

```shell
php simpleid-tool.phar passwd
```

You will be prompted for a password.  If successful, `simpleid-tool` will display the encrypted password (which starts with `$pbkdf2$`).


## Migrating configuration settings from SimpleID 1   {#migrate-config}

`simpleid-tool` can be used to migrate settings from a SimpleID 1 installation.  This can be invoked using the following command:

```shell
php simpleid-tool.phar migrate-config [config.php]
```

`[config.php]` should be replaced with the location of `config.php` in the SimpleID 1 installation.

The tool will then migrate as many settings as it can into a new SimpleID 2 configuration, which is displayed.  Note that SimpleID 2 contains additional mandatory configuration options.  Therefore you must edit the generated configuration file manually to insert these additional options.


## Migrating identity files from SimpleID 1   {#migrate-user}

`simpleid-tool` can be used to migrate identity files from a SimpleID 1 installation.  This can be invoked using the following command:

```shell
php simpleid-tool.phar migrate-user [example.identity]
```

`[example.identity]` should be replaced with the location of the identity file in the SimpleID 1 installation which you wish to migrate.

The tool will then migrate as much of the data in the identity file as it can into a new SimpleID 2 user file, which is displayed.

Note that in most cases, the password stored in a SimpleID 1 identity file will *not* meet the password requirements for SimpleID 2.  In these cases you will need to re-encode your password (e.g. via [simpleid-tool](#passwd)) insert it into the new user file.
