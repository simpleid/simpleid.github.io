---
layout: docs
doctree: SimpleID 1 Documentation
title: Installing SimpleID
date: 2009-05-15 21:20:18
permalink: /docs/1/installing/
redirect_from: /documentation/getting-started/installing-simpleid/
eleventyNavigation:
    key: 1/Installing SimpleID
    title: Installing SimpleID
    parent: 1/Getting started
    order: 2
---

## 1. Download SimpleID

You can obtain the latest SimpleID release from the [SimpleID web site](http://simpleid.sourceforge.net/). The files are in .tar.gz format and can be extracted using most compression tools.

This will create a new directory `simpleid` containing all SimpleID files and directories.

## 2. Move the directories to the web server {#directories}

You should move the following four directories to the web server.  (The other directories are for developers only and can be safely ignored.)

### `cache`

This is the **cache directory**, which stores temporary data.  For security purposes, this directory should be moved to a place which is writeable by the web server, but not under the document root or public HTML directory (and thus accessible to user agents).

This directory must be readable and writeable by the web server.

### `identities`

This is the **identities directory**, which stores identity data.  For security purposes, this directory should be moved to a place which is readable by the web server, but not under the document root or public HTML directory (and thus accessible to user agents).

This directory must be readable by the web server.  The directory should *not* be writeable by the web server.

### `store`

This is the **store directory**, which stores user settings and other data.  For security purposes, this directory should be moved to a place which is writeable by the web server, but not under the document root or public HTML directory (and thus accessible to user agents).

This directory must be readable and writeable by the web server.

### `www`

This is the web directory.  This must be moved below the document root so that it is accessible by users.  Once this is done, the directory can be renamed to anything you like.

The URL to this directory becomes the URL of the SimpleID server (or, more precisely the OpenID provider endpoint URL).

## 3. Set up configuration options {#config}

Make a copy of the file `config.php.dist` in the web directory and rename it `config.php`.

Open the file with a text editor and edit the configuration options.  The file is formatted as a plain PHP file.

The file contains comments explaining what each configuration option does.
