---
layout: docs
doctree: SimpleID 2 Documentation
title: Data stores
permalink: /docs/2/stores/
eleventyNavigation:
    key: 2/stores
    title: Data stores
    parent: 2/_advanced-topics
    order: 20
---

## What is a data store?

In general, there are three different sets of data which SimpleID needs to store:

 * transient data (e.g. OpenID associations, sessions, auto-login)
 * application data (e.g. salt for form tokens)
 * user data (e.g. user names, passwords and settings)
 
Functions used to store and retrieve these data are implemented in a data store [module](/docs/2/modules/).

The default data store module, `SimpleID\Store\DefaultStoreModule`, uses the file system to store and
retrieve data.  This module uses two different sets of files to store data.  One is the set of user and
client files that are user created and stored in the identities directory.  The other set is the
various store files, which are created by SimpleID.

Instead of using the file system, there are other methods to store data, e.g. LDAP or an SQL database.