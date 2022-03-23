---
layout: docs
doctree: SimpleID 2 Documentation
title: OpenID Connect
permalink: /docs/2/openid-connect/
toc: true
eleventyNavigation:
    key: 2/openid-connect
    title: OpenID Connect
    parent: 2/_identity-protocols
    order: 10
---

## Introduction

The [OpenID Connect protocol](http://openid.net/specs/openid-connect-core-1_0.html) is the
successor to the [OpenID protocol](/docs/2/openid/) for federated identity.  It is an extension
of the OAuth protocol.

OpenID Connect requires the following:

- OAuth
- [WebFinger](/docs/2/webfinger/)

## Modules

The core OpenID Connect protocol is implemented in the `SimpleID\Protocols\Connect\ConnectModule` module.
This module is enabled by default.

The OpenID Connect module automatically enables the required OAuth modules for its operation.

Additional modules related to the OpenID protocol are set out in the table below.

| Module                                                     | Description                                           | Enabled by default? |
|------------------------------------------------------------|-------------------------------------------------------|---------------------|
| SimpleID\Protocols\Connect\ConnectClientRegistrationModule | Implements OpenID Connect dynamic client registration | No                  |
| SimpleID\Protocols\Connect\ConnectSessionModule            | Implements OpenID Connect session management          | No                  |


## User configuration

### User information

One of the objectives of the OpenID Connect protocol is to supply information about the user to
the requesting app or web site.  Therefore the protocol is only useful if you store your user
information under the `userinfo` object in the user file.  For example, you can store your
name and e-mail address as follows:

```yaml
userinfo:
    name: "Jane Citizen"
    email: "jane@example.net"
```

### WebFinger  {#webfinger}

In order for apps and web sites to discover your SimpleID installation, you will need to set
up WebFinger.  The SimpleID distribution includes a simple WebFinger server.  See the
[WebFinger](/docs/2/webfinger/) page for further information on how to set this up.

Alternatively, if you wish to run your own WebFinger server, you will need to point
the relationship `http://openid.net/specs/connect/1.0/issuer` for each user to your SimpleID server.

## Client configuration

### Registering clients with SimpleID


### Configuring clients

Clients that use WebFinger for discovery will automatically obtain the configuration information
required to connect to SimpleID.  If a client does not use WebFinger, you will need