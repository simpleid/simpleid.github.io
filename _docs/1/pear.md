---
layout: docs
doctree: doctree1
title: Installing SimpleID from PEAR
date: 2013-01-21 21:17:56
permalink: /docs/1/pear/
redirect_from: /documentation/getting-started/installing-simpleid/pear/
---

There is also an *experimental* PEAR channel at `simpleid.koinic.net`.  You can install SimpleID from this PEAR channel by following the instructions below.

For more information on the SimpleID PEAR channel, see the [channel page](/pear).

## 1. Add the PEAR channel

From a shell, run the following command to add the SimpleID PEAR channel.

{% highlight bash %}
pear channel-discover simpleid.koinic.net
{% endhighlight %}

## 2. Install SimpleID using PEAR

SimpleID is currently published as beta.  Therefore you will need to specifically request PEAR to install as beta.  From a shell, run the following command.

{% highlight bash %}
pear install simpleid/SimpleID-beta
{% endhighlight %}

## 3. Configure directories {#directories}

By default, the SimpleID PEAR package installs itself into a number of different directories specified by the PEAR configuration settings.  The configuration settings are `data_dir`, `cfg_dir` and `www_dir`.  To find out what these settings are for your machine, run the following command.

{% highlight bash %}
pear config-show
{% endhighlight %}

### data_dir`/SimpleID/cache`

This is the *cache directory*, which stores temporary data.

You will need to set the permissions to this directory so that it is readable and writeable by the web server.

### data_dir`/SimpleID/identities`

This is the *identities directory*, which stores identity data.

You will need to set the permissions to this directory so that it is readable by the web server.  The directory should *not* be writeable by the web server.

### data_dir`/SimpleID/store`

This is the *store directory*, which stores user settings and other data.

You will need to set the permissions to this directory so that it is readable and writeable by the web server.

### www_dir`/SimpleID`

This is the web directory.  You will need to configure your web server so that it can reach this directory.

The URL to this directory becomes the URL of the SimpleID server (or, more precisely the OpenID provider endpoint URL).

### cfg_dir`/SimpleID`

This is the directory where the SimpleID configuration file is stored.  You will need to set up configuration options in the following step.

## 4. Set up configuration options {#config}

Make a copy of the file `config.inc.dist` in the cfg_dir`/SimpleID` directory and rename it `config.inc`.

Open the file with a text editor and edit the configuration options.  The file is formatted as a plain PHP file.

The file contains comments explaining what each configuration option does.