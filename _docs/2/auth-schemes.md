---
layout: docs
doctree: doctree2
title: Authentication schemes
permalink: /docs/2/auth-schemes/
---

{% include doc_toc.md %}

## What is an authentication scheme?

An ***authentication scheme*** is a [module](/docs/2/modules/) that implements a way for a user to
authenticate itself to SimpleID.  In particular, an authentication scheme checks credentials presented
by the user against some data store containing user information, and determines whether the credentials
match those stored in the data store.

The following authentication schemes are enabled by default:

- A password-based authentication scheme (`SimpleID\Auth\PasswordAuthSchemeModule`)
- A cookie-based "remember me" authentication scheme (`SimpleID\Auth\RememberMeAuthSchemeModule`) 

For additional [login verification](/docs/2/login-verification/), the OTP authentication scheme
(`SimpleID\Auth\OTPAuthSchemeModule`) can be enabled on top of the default modules.

The extensibility of SimpleID means an entirely different set of authentication schemes can
be implemented.  One such scheme is the [CertAuthSchemeModule](#certauth) distributed with
SimpleID.

## CertAuthSchemeModule   {#certauth}

CertAuthSchemeModule can be enabled to support logging in using client SSL certificates instead
of using a user name and password.

Instead of being prompted to enter a user name and password, your browser will ask you to
select a certificate stored on your computer.  SimpleID will then match the certificate against
information stored in your user file and log you in.

**Note that this is for advanced users only.  It requires a large number of highly technical steps to set up.**

Much of this information is taken from [Using SSL Client Certificates with PHP](http://cweiske.de/tagebuch/ssl-client-certificates.htm).


### What you need

You will need the following:

- SimpleID 2.0 or later
- Apache version 2.3 or later, with `mod_ssl` installed, and access to the server's Apache configuration file `httpd.conf` (not merely `.htaccess`)
- Your personal certificate issued by a certificate authority recognised by the web server

### Setting up

#### Configure your web server

You will need to configure your web server to request a certificate from your browser and verify it when you go to your SimpleID installation.

Add the following directives to the virtual host within the server configuration:

{% highlight apache %}
SSLVerifyClient optional
SSLVerifyDepth 1
SSLOptions +StdEnvVars
SSLCACertificateFile /path/to/your/trusted/ca/certificates
SSLOCSPEnable on
{% endhighlight %}

#### Enable the `CertAuthSchemeModule` module

Enable the `CertAuthSchemeModule` module by including `SimpleID\Auth\CertAuthSchemeModule` in
the `$config['modules']` array in the `config.php` file.

To avoid conflicts with other authentication scheme modules, it is recommended that you
disable `SimpleID\Auth\PasswordAuthSchemeModule` and `SimpleID\Auth\RememberMeAuthSchemeModule`
by removing them from the `$config['modules']` array.

See [enabling and disabling modules](/docs/2/modules/#enabling) for further details.

#### Add certificate details to your user file

Your certificate is identified using two parameters:

- the certificate's serial number
- the distinguished name of the certificate's issuer

You can find out these two values using OpenSSL by running the following commands (replacing the file name of the certificate as required):

{% highlight bash %}
openssl x509 -noout -serial -in certificate.crt
openssl x509 -noout -issuer -in certificate.crt
{% endhighlight %}

These two values are then combined and placed in the `cert` section of your user file as follows:

{% highlight yaml %}
- cert:
    certs: 
        - "02A97C;/C=Example/O=Example CA/OU=Example CA Certificate Signing/CN=Example Client CA"
{% endhighlight %}
