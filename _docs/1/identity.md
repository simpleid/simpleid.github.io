---
layout: docs
title: Setting up an identity
date: 2009-05-15 21:29:37
permalink: /docs/1/identity/
redirect_from: /documentation/getting-started/setting-identity/
---

## What is an identity?

An identity represents a user which has been set up in SimpleID, which can then be used to log into other web sites using the OpenID Authentication Protocol.

Each SimpleID installation must contain at least one identity.  SimpleID supports multiple identities, so you can use a single SimpleID installation to host multiple users.

An identity consists of, at a minimum:

- A **user name**, with which you use to log into SimpleID
- A **password**, with which you use to log into SimpleID
- An **identifier** (also known as a claimed identifier or a user-supplied identifier), which is the thing you use when attempting to log into a web site using OpenID

(Strictly speaking, the user-supplied identifier and the claimed identifier are different things.  The user-supplied identifier is the actual identifier used when logging into a web site.  The web site derives the claimed identifier from the user-supplied identifier, if possible, and then sends it to SimpleID for processing.  The web site can also obtain the claimed identifier by having SimpleID ask the user for it.)

## How to set up a new identity

Setting up an identity involves the following three steps.

1. Decide on your user name, password and identity URL.  See the [requirements for an identity](/docs/1/identity-requirements) for more details.

2. Tell SimpleID about that identity by creating an [identity file](/docs/1/identity-files).

3. [Claim your identifier](/docs/1/identity-claim).