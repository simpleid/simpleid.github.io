---
layout: docs
title: Managing your SimpleID profile
date: 2011-07-21 21:16:07
permalink: /docs/1/profile
---

You can manage your SimpleID profile by going directly to your SimpleID server's URL.

If you have logged into an OpenID-enabled web site using SimpleID during your browser's session, you will be taken directly to the dashboard.  Alternatively, you can [log into SimpleID directly](/docs/1/login) from this URL.

## My Profile

The **My Profile** page contains some basic information about your identity, as specified in your [identity file](/docs/1/identity-files).

It contains a facility to generate the code required to [claim your identifier](/docs/1/identity-claim).

If you have [extensions](/docs/1/extensions) installed, your extension may also provide additional information on your profile on this page.

## My Sites

The **My Sites** tab contains a list of all the sites you have logged in using SimpleID.  For each site, SimpleID stores two types of data:

* some technical information about the site itself (e.g. what OpenID features the site supports), and
* your preferences on whether your identity information should be sent automatically to the site when you log in, without prompting for your permission.

### Removing a site

To remove a site from the list:

1. Click the checkbox in the **Remove** column corresponding to the site's URL.
2. Click the **Submit** button.

### Changing identity information preferences

To change your preference on  whether your identity information should be sent automatically to the site:

1. Switch the checkbox in the **Automatic** column corresponding to the site's URL on or off as required.
2. Click the **Submit** button.