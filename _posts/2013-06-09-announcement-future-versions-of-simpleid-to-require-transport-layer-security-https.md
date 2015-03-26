---
layout: post
title: ! 'Announcement: Future versions of SimpleID to require Transport Layer Security
  (HTTPS)'
created: 1370741251
categories:
- !binary |-
  YW5ub3VuY2VtZW50cw==
---
One of the current features of SimpleID is the ability for you to log in securely without using a HTTPS connection.  It does so by sending a digest of your password (generated using Javascript on your browser) to SimpleID instead of the password itself.

This feature was created at a time when SSL certificates and servers supporting HTTPS connections are not widely available, or relatively expensive.  However, since that time, both SSL certificates and web hosting services have become very cheap.

One of the limitations of the digest feature is that passwords have to be stored as simple MD5 hashes in your [identity file](/documentation/getting-started/setting-identity/identity-files).  More secure hashing algorithms and techniques (e.g. salts) are not supported.

Given the increasing sophistication of security attacks, the next major release of SimpleID will require connections using HTTPS.  This means your web server will need to be able to support these connections, and you may need to obtain an SSL certificate.
<!--break-->
The roadmap for SimpleID will then be like this:

- The current branch (0.8) is becoming stable, and will eventually end up as version 1.0
- All new features will be done on the next major release, version 2.0, and will require HTTPS connections.

I have created a [survey](https://docs.google.com/forms/d/17K46bStj1SGfJuc4Uq9Nx1LJOaMxIHvjc1nvlc0NfSs/viewform) to get a feel on the potential impact of this proposal on users.  It would be great if you could provide your feedback using this form.  The proposal will be refined based on your feedback.
