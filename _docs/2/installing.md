---
layout: docs
doctree: doctree2
title: Installing SimpleID
permalink: /docs/2/installing/
published: true
---


<div class="note" markdown="span">If you are upgrading from SimpleID 1.0 or earlier, the [migration page](/docs/2/migrating/)
contains more information on the migration process.</div>

## 1. Download SimpleID

You can obtain the latest SimpleID release from the [SimpleID web site](http://simpleid.sourceforge.net/).
The files are in .tar.gz format and can be extracted using most compression tools.

This will create a new directory `simpleid` containing all SimpleID files and directories.

Note that the SimpleID release package does not contain the additional PHP libraries required for it to run.

## 2. Download dependencies {#dependencies}

SimpleID uses [Composer](https://getcomposer.org/) to manage its dependencies.  As these dependencies are
not included in the distribution package, you will need to download them manually using Composer.

The Composer file included with the SimpleID package is named `composer.json.dist` instead of `composer.json`.  This is because this file may be altered when you install [modules](/docs/2/modules/), which you want to keep when you upgrade to a later version of SimpleID.  You will need to rename this file back to `composer.json` when installing SimpleID for the first time.

If you have shell access to your server and have Composer installed, you can performed this step on the
server.  Otherwise, you will need to perform this step on another machine with Composer installed, before
you upload the entire package onto your server.

Enter the following commands to download the dependencies:

{% highlight bash %}
cd www
cp composer.json.dist composer.json
composer update --no-dev
{% endhighlight %}

This will download all of SimpleID's dependencies into the `www/vendor` directory.

## 3. Move the directories to the web server {#directories}

You should move the following three directories to the web server.  (The other directories are for developers only and can be safely ignored.)

### `cache`

This is the **cache directory**, which stores temporary data.  For security purposes, this directory should be moved
to a place which is writeable by the web server, but not under the document root or public HTML directory
(and thus accessible to user agents).

This directory must be readable and writeable by the web server.

### `identities`

This is the **identities directory**, which stores user and client data.  For security purposes, this directory
should be moved to a place which is readable by the web server, but not under the document root or public
HTML directory (and thus accessible to user agents).

This directory must be readable by the web server.  The directory should *not* be writeable by the web server.

### `store`

This is the **store directory**, which stores user settings and other data.  For security purposes, this
directory should be moved to a place which is writeable by the web server, but not under the document
root or public HTML directory (and thus accessible to user agents).

This directory must be readable and writeable by the web server.

### `www`

This is the web directory.  This must be moved below the document root so that it is accessible by users.  Once
this is done, the directory can be renamed to anything you like.

The URL to this directory becomes the URL of the SimpleID server.

## 4. Set up configuration options   {#config}

Make a copy of the file `config.php.dist` in the web directory and rename it `config.php`.

Open the file with a text editor and edit the configuration options.  The file is formatted
as a plain PHP file.

The file contains comments explaining what each configuration option does.

## 5. Generate a key pair for server   {#keys}

OpenID Connect requires each server to have a RSA key pair.

You can generate an RSA key pair using the following OpenSSL commands:

{% highlight bash %}
openssl genrsa -out private.pem 2048
openssl rsa -in private.pem -out public.pem -pubout
{% endhighlight %}

The private and public keys, `private.pem` and `public.pem` have to be converted into separate JSON Web Key Sets.
The easiest way of doing this is to use the `jwkstool` utility that is included with the SimpleJWT library.

{% highlight bash %}
www/vendor/bin/jwkstool.phar add -c private.json private.pem
www/vendor/bin/jwkstool.phar add -c public.json public.pem
rm private.pem
rm public.pem
{% endhighlight %}

`private.json` and `public.json` should now be moved into secure locations.  The paths to these
two files will need to be specified in `config.php` under `private_jwks_file` and `public_jwks_file`
respectively.

## 6. Set up WebFinger   {#webfinger}

OpenID Connect uses WebFinger as its discovery protocol.  This means you will need to set up
a WebFinger server.

A very simple WebFinger server is included in SimpleID.  Instructions on how to set these up
can be found under [WebFinger](/docs/2/webfinger).
