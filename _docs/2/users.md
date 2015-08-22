---
layout: docs
doctree: doctree2
title: Setting up users
permalink: /docs/2/users/
---

## What is a user?

A user is someone whose identity information is available via SimpleID.  Typically users will be able
to log into other web sites or applications through an identity protocol supported by SimpleID.

Each SimpleID installation must contain at least one user.  A single SimpleID installation is able to host
multiple users.

## What information does SimpleID store with a user?

At a minimum, the following information is stored with a user:

- A **user name** unique to the SimpleID installation.  SimpleID stores user information using the user name
  as the file name.  As a result, a user name must be able to be used as a valid file name under your
  server's operating system.

  While file name rules vary between operating systems, generally user names consisting of alphanumeric characters
  would be acceptable.

- **Credentials**, which can be used to authenticate the user.  By default, password based credentials are used,
  although other kinds of credentials can be supported through the use of [authentication scheme modules](/docs/2/auth-schemes).

- For each identity protocol, some way of linking the user's identity to the SimpleID server.  Normally this involves a
  protocol-specific **identifier** of some kind.  For example, for OpenID, this is the identity URI.

## How to create a new user

Under the default SimpleID settings, creating a new user involves the following steps.

1. Decide on the user name.  As noted above, this must be able to be used as a valid file name.

2. Decide on the password.  Choosing a good password is very important, as it protects your identity from
   unauthorised access.  [Wikipedia](http://en.wikipedia.org/wiki/Password) contains information on how to
   choose a secure password.  You may wish to use the [Diceware method](http://en.wikipedia.org/wiki/Diceware)
   to generate your password.

3. You will need to encrypt your password using PBKDF2.  [Lots of software](https://google.com/search?q=pbkdf2)
   are available on the internet to help you do this, although you will need to reformat the output to the
   format expected by SimpleID as documented in the sample user file.

4. Tell SimpleID about that identity by creating a user file.  An **user file** (previously an identity file)
   is a YAML-formatted file containing information about a particular SimpleID user.  They are stored in the
   [identities directory](/docs/2/installing/#directories) and are named <code>username.user.yaml</code>,
   where <var>username</var> is the name of the SimpleID user.

   An example user file is <code>example.user.yaml.dist</code> in the identities directory.  Make a copy of
   this file and rename it <code>username.user.yaml</code>, where <var>username</var> is the user name with
   which you want to log into SimpleID.

5. Link the identifier with SimpleID.  Instructions are set out for each identity protcol.  See, for example
   [OpenID](/docs/2/openid/#claiming) and [OpenID Connect](/docs/2/openid-connect/#webfinger).