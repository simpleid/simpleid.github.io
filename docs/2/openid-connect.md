---
layout: docs
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

### User information {#userinfo}

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

## Client configuration  {#client}

Clients can be registered with SimpleID manually or through the OpenID Connect Dynamic Registration protocol (if this is enabled).

### Registering a client manually  {#client-manual}

To register a client manually, create a client file for the client using the instructions set out in [Setting up clients](/docs/2/clients/).

The OpenID Connection configuration is specified under the `oauth` and `connect` objects in the client file.  At a minimum, at least one redirect URI must be specified in `oauth.redirect_uris`.

```yaml
oauth:
    redirect_uris:
        - https://example.com/oauth/redirect
```

See `example.client.yml` in the identities directory for further details of the configuration options.

In addition to registering the client, the client itself needs to be configured to use SimpleID as the server.

### OpenID Connect Dynamic Registration  {#client-dynamic}

Alternatively, if the client is supports the [OpenID Connect Dynamic Registration](https://openid.net/specs/openid-connect-registration-1_0.html) and the `SimpleID\Protocols\Connect\ConnectClientRegistrationModule` module is enabled, then the client can register itself as part of the [discovery](#discovery) process.

## Endpoint configuration  {#endpoint}

In addition to registering the client with SimpleID, each client also needs to be configured to use SimpleID as the OpenID Connect endpoints.  This configuration may occur automatically through OpenID Connect Discovery or you may need to configure the client manually.

### OpenID Connect Discovery  {#discovery}

If the client supports [OpenID Connect Discovery](https://openid.net/specs/openid-connect-discovery-1_0.html), then it will be able to query the `/.well-known/openid-configuration` endpoint to retrieve the relevant configuration.

Clients using WebFinger should support OpenID Connect Discovery.  Alternatively, the client may allow you to specify the domain name or the OpenID Connect Discovery endpoint.

> [!NOTE]
> You need to make sure that the web server is correctly configured to point the `/.well-known/openid-configuration` to SimpleID.  See the [installation instructions](/docs/2/installing/#webserver) for further details.

### Manual configuration

To manually configure a client, specify the following endpoints, with the URL of the SimpleID installation prepended:

| Endpoint               | URI                 |
| ---------------------- | ------------------- |
| Authorisation endpoint | `/oauth/auth`       |
| Token endpoint         | `/oauth/token`      |
| UserInfo endpoint      | `/connect/userinfo` |

