---
layout: docs
title: Logging into SimpleID
date: 2009-07-11 18:25:28
permalink: /docs/1/login/
---

You generally don't need to log into SimpleID first before you can use it to access OpenID-enabled web sites.  When you log into these web sites, SimpleID automatically checks whether you have logged in using the identity you have supplied.  If you haven't logged into SimpleID, SimpleID will present the log in page for you to supply your login details.

You can also log into SimpleID manually by going to the URL where you have installed SimpleID.  This sends you to your SimpleID home page or dashboard, depending on the version of SimpleID you are using.

When you log in, you will be presented with the log in page.

![SimpleID login page](/assets/files/login.png)

You will notice one of the following status messages on the login page:

* **Secure login using HTTPS.**  You are connected to the SimpleID server using Transport Layer Security.  Your user name and password will be encrypted as it is sent to the SimpleID server.

* **WARNING:  Your password will be sent to SimpleID as plain text.**  You have chosen, in your configuration, to allow passwords to be sent unsecurely.  Your password will be sent to SimpleID as plain text.  Please note that an attacker may be able to detect your password if you log in using the method.

If you do not see the log in page, it may be because your server does not support HTTPS.  SimpleID will always redirect you to the encrypted version of the log in page.