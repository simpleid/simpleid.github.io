---
layout: docs
doctree: SimpleID 2 Documentation
title: Managing your SimpleID profile
permalink: /docs/2/profile/
eleventyNavigation:
    key: 2/profile
    title: Managing your SimpleID profile
    parent: 2/_using-simpleid
    order: 30
---

You can manage your SimpleID profile by going directly to your SimpleID server's URL.

If you have logged into an application or a web site via SimpleID during your browser's
session, you will be taken directly to the dashboard.  Alternatively, you can
[log into SimpleID directly](/docs/2/login) from this URL.

## My Profile

The **My Profile** page contains some basic information about you.

Different [modules](/docs/2/modules) may also provide additional information on your profile on this page.

## My Apps

The **My Apps** tab contains a list of all the apps and web sites you have logged in using SimpleID.
For each app, SimpleID stores two types of data:

* some technical information about the app itself (e.g. what OpenID features the app supports), and
* your preferences on what information should be sent to the site when you log in.

### Removing an app

Removing an app will revoke whatever permission you have given it to access your information.  The next
time you wish to login through the app you will need to provide permission again.

To remove an app from the list, click the **Delete** button next to the name of the app.

