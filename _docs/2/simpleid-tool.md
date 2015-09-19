---
layout: docs
doctree: doctree2
title: "Using simpleid-tool"
permalink: "/docs/2/simpleid-tool/"
published: true
---


`simpleid-tool` is a command-line tool that performs various maintenance functions.

The tool is included in the main SimpleID distribution under the `bin` directory.  It is packaged as a PHAR file and can be run independently from the SimpleID web application.

## Encoding passwords    {#passwd}

`simpleid-tool` can be used to encode passwords in PBKDF2.  To encode a password, invoke `simpleid-tool` using the following command:

{% highlight bash %}
php simpleid-tool.phar passwd
{% endhighlight %}

You will be prompted for a password.  If successful, `simpleid-tool` will display the encrypted password (which starts with `$pbkdf2$`).


## Migrating configuration settings from SimpleID 1   {#migrate-config}

`simpleid-tool` can be used to migrate settings from a SimpleID 1 installation.  This can be invoked using the following command:

{% highlight bash %}
php simpleid-tool.phar migrate-config [config.php]
{% endhighlight %}

`[config.php]` should be replaced with the location of `config.php` in the SimpleID 1 installation.

The tool will then migrate as many settings as it can into a new SimpleID 2 configuration, which is displayed.  Note that SimpleID 2 contains additional mandatory configuration options.  Therefore you must edit the generated configuration file manually to insert these additional options.


## Migrating identity files from SimpleID 1   {#migrate-user}

`simpleid-tool` can be used to migrate identity files from a SimpleID 1 installation.  This can be invoked using the following command:

{% highlight bash %}
php simpleid-tool.phar migrate-user [example.identity]
{% endhighlight %}

`[example.identity]` should be replaced with the location of the identity file in the SimpleID 1 installation which you wish to migrate.

The tool will then migrate as much of the data in the identity file as it can into a new SimpleID 2 user file, which is displayed.

Note that in most cases, the password stored in a SimpleID 1 identity file will *not* meet the password requirements for SimpleID 2.  In these cases you will need to re-encode your password (e.g. via [simpleid-tool](#passwd)) insert it into the new user file.
