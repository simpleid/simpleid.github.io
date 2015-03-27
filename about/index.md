---
layout: default
title: About SimpleID
date: 2009-05-17 13:55:16
permalink: /about
---

## What is SimpleID?

SimpleID is a simple, personal [OpenID](http://openid.net) provider written in PHP.

OpenID is a way to provide for a single digital identity across the Internet.  To get an OpenID you need to sign up to an OpenID provider, who acts as the "custodian" of your digital identity.  Every time you want to log into an OpenID-enabled web site, you will be redirected to your OpenID provider, who will then verify your identity and provide this to the web site.

While there are [quite a number of OpenID providers open to the public](http://openid.net/get/), you may still want to host your own provider because:

- you want to use the URL of your own web site without setting up complex delegation rules;
- you want finer control over your own identity configuration than provided for in other web sites; or
- you are paranoid and don't trust your information with other OpenID providers (!)

SimpleID allows you to host your own OpenID provider with minimal requirements.

## Features

- Support for **OpenID 1.1** and **2.0** standards
- Support for many other **OpenID extensions**, including the Simple Registration Extension and the Attribute Exchange Extension
- **Multiple identities** with one installation.  You can provide as many users as you want
- **Flat files only**, no database required

