---
layout: docs
title: Extensions
date: 2009-07-12 14:49:15
permalink: /docs/1/extensions/
redirect_from: 
    - /documentation/using-simpleid/extensions/
    - /documentation/using-simpleid/extensions/installing-and-uninstalling-extensions/
---

SimpleID has the ability to support "extensions".  Extensions are PHP files containing code which extends the functionality of SimpleID.  The code within extensions follow a set of conventions which allows SimpleID to call them during key parts of the OpenID authentication process.

The main purpose of SimpleID extensions is to provide a way in which to implement [OpenID extensions](http://openid.net/specs/openid-authentication-2_0.html#extensions).  However, the system is flexible enough for SimpleID extensions to function in other ways.

Extensions are named <code>name.extension.php</code>, where *name* is the name of the extension.  Each extension resides in its own directory underneath the <code>extensions</code> subdirectory of the SimpleID web directory (<code>www</code>).

If you want to write your own extensions, see the [developer web site](http://simpleid.koinic.net/trac/wiki/Extensions).

## Installing and uninstalling extensions    {#installing}

### Installing an extension

To install an extension:

1. If the extension is not included in the default SimpleID distribution:

    1. Extract the archive containing the extension into a temporary directory

    2. Move the contents of the <code>www</code> directory (including any subdirectories) into the [web directory](/documentation/getting-started/installing-simpleid).

2. To enable the extension, edit the <code>SIMPLEID_EXTENSIONS</code> configuration option in the <code>config.php</code> file and add the name of the extension.  Separate multiple extensions with commas.

<div class="note">

If the version of SimpleID you originally installed was before 0.5, the <code>SIMPLEID_EXTENSIONS</code> configuration option may not exist in your <code>config.inc</code> file.  You can add it in manually.

</div>

### Uninstalling an extension

To uninstall an extension

1.  Edit the <code>SIMPLEID_EXTENSIONS</code> configuration option in the <code>config.php</code> file and delete the name of the extension.

2. You can also delete the extension file from the [web directory](/documentation/getting-started/installing-simpleid).  This is an optional process.
