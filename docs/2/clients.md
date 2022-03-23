---
layout: docs
doctree: SimpleID 2 Documentation
title: Setting up clients
permalink: /docs/2/clients/
eleventyNavigation:
    key: 2/clients
    title: Setting up clients
    parent: 2/_getting-started
    order: 40
---

## What is a client?

A client is an application or a web site who has permission to obtain authentication and user
information from the SimpleID installation.

Under certain identity protocols (e.g. OpenID Connect Core), clients are required to *pre-register*
with the SimpleID server before SimpleID will allow user information to be sent to them.  In other
identity protocols (e.g. OpenID or OpenID Connect with Dynamic Registration), clients can register
themselves with the server dynamically.

## What information does SimpleID store with a client?

The client information that is stored on the SimpleID server is dependent on the identity
protocol.  Typically the following types of information are stored:

- A **client ID** unique to the SimpleID installation.  As with user information, SimpleID stores
  client information using the client ID as the file name.  As a result, a client ID must be
  able to be used as a valid file name under your server's operating system.  In addition, a client
  ID must *not* begin with an underscore (`_`), as these are reserved for dynamically registered
  clients.

- Client information that is presented to the user.  This would include the human-readable name
  of the client, its logo, and links to its privacy policy or terms of service.

- Configuration information specific to the identity protocol

- Cryptographic information that is required by the identity protocol to verify the identity of
  the client and/or the data exchanged between the client and the SimpleID server.

## How to create a new client

Client information is protocol specific.  You will only need to create a new client if the
identity protocol requires a client to be created.

A client can be created using the following steps.

1. Decide on the client ID.  As noted above, this must be able to be used as a valid file name.

2. Create a client file.  A **client file** is a YAML-formatted file
   containing information about the client.  They are stored in the
   [identities directory](/docs/2/installing/#directories) and are named <code>client_id.client.yml</code>,
   where <var>client_id</var> is the client ID.  The contents of the client file depends on the
   identity protocol being used.  Normally, the identities directory will have an example
   client file for each protocol.