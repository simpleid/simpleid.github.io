---
layout: docs
title: Logging into OpenID-enabled web sites
date: 2009-07-11 18:09:39
permalink: /docs/1/openid/
eleventyNavigation:
    key: 1/Logging into OpenID-enabled web sites
    title: Logging into OpenID-enabled web sites
    parent: 1/Using SimpleID
    order: 1
---

To log in into an OpenID-enabled site:

1. You should see an OpenID log in box on your site, which should look like the following.

    ![OpenID login box](/assets/files/openid-login-box.png)

2. Type your [identifier URL](/docs/1/identity) and submit the form.  The site will now contact your SimpleID server to establish a secure connection.  Depending on the speed of your web server, this may take about half a minute.

3. If you have not logged into SimpleID, SimpleID will [ask you to do so](/docs/1/login).

4. When you log into an OpenID-enabled site for the first time, you will be presented with a page that is similar to the following.

    ![Site login page](/assets/files/rp.png)

    The page will vary depending the extensions you have installed.

5. To continue logging in to the site, click **OK**.  The site will then become one of your trusted sites.

    If you select the **Automatically send my information to this site for any future requests** check box, this page won't appear again the next time you log in to this site.

{% panel 'note' %}
Some sites require you to log into SimpleID *before* logging into the site.
{% endpanel %}

{% panel 'warning' %}
You can only log in to each SimpleID installation as one user (and so one OpenID identifier) at any one time.
{% endpanel %}