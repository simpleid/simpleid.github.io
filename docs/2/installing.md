---
layout: docs
title: Installing SimpleID
permalink: /docs/2/installing/
published: true
eleventyNavigation:
    key: 2/installing
    title: Installing SimpleID
    parent: 2/_getting-started
    order: 20
---


{% panel 'note' %}
If you are upgrading from SimpleID 1.0 or earlier, the [migration page](/docs/2/migrating/)
contains more information on the migration process.
{% endpanel %}

## 1. Download SimpleID using composer

SimpleID uses [Composer](https://getcomposer.org/) for installation.  To
install SimpleID, use the following command on the web server:

```shell
composer create-project simpleid/simpleid:2.0.x-dev simpleid --no-dev
```

This will create a new directory `simpleid` containing all SimpleID files
and directories, as well as all its dependencies.

## 2. Configure directories on the web server {#directories}

You should check the configuration of the following four directories 
on the web server.

### `cache`

This is the **cache directory**, which stores temporary data.  For security
purposes, this directory should be writeable by the web server, but not
under the document root or public HTML directory (and thus accessible to
user agents).

This directory must be readable and writeable by the web server.

### `identities`

This is the **identities directory**, which stores user and client data.  For
security purposes, this directory should be readable by the web server, but
not under the document root or public HTML directory (and thus accessible
to user agents).

This directory must be readable by the web server.  The directory should
*not* be writeable by the web server.

### `store`

This is the **store directory**, which stores user settings and other data.
For security purposes, this directory should be writeable by the web server,
but not under the document root or public HTML directory (and thus
accessible to user agents).

This directory must be readable and writeable by the web server.

### `www`

This is the web directory.  This must be configured so that it is the
document root or below (e.g. via a symlink, a virtual host, or via a path
match rule in the web server configuration).

The URL to this directory becomes the URL of the SimpleID server.

## 3. Set up configuration options   {#config}

Make a copy of the file `config.php.dist` in the web directory and rename it
`config.php`.

Open the file with a text editor and edit the configuration options.  The file
is formatted as a plain PHP file.

The file contains comments explaining what each configuration option does.

## 4. Generate a key pair for server   {#keys}

OpenID Connect requires each server to have a RSA key pair.

You can generate an RSA key pair using the following OpenSSL commands:

```shell
openssl genrsa -out private.pem 2048
openssl rsa -in private.pem -out public.pem -pubout
```

The private and public keys, `private.pem` and `public.pem` have to be
converted into separate JSON Web Key Sets. The easiest way of doing this
is to use the `jwkstool` utility that is included with the SimpleJWT library.

```shell
www/vendor/bin/jwkstool add -c private.json private.pem
www/vendor/bin/jwkstool add -c public.json public.pem
rm private.pem
rm public.pem
```

`private.json` and `public.json` should now be moved into secure locations.
The paths to these two files will need to be specified in `config.php` under
`private_jwks_file` and `public_jwks_file` respectively.

## 5. Set up WebFinger   {#webfinger}

OpenID Connect uses WebFinger as its discovery protocol.  This means you
will need to set up a WebFinger server.

A very simple WebFinger server is included in SimpleID.  Instructions on
how to set these up can be found under [WebFinger](/docs/2/webfinger).
