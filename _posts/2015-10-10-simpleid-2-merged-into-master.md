---
layout: post
title: SimpleID 2.0 codebase merged into master
date: 2015-10-10 02:00:00
tags:
- news
---

SimpleID 2, the next generation of the open source identity provider, has been
merged into the [master branch](http://sourceforge.net/p/simpleid/code/ci/master/tree/)
of the source repository.

**The SimpleID 2 codebase should be considered pre-alpha.  It is almost certain there are
bugs, including bugs which may pose potential security risks.  The code should not be
placed in production.  Otherwise use at your own risk.**

SimpleID 2 will target compliance against the latest distributed identity and discovery
protocols, including:

- [OpenID Connect](http://openid.net/connect/)
- [WebFinger](http://tools.ietf.org/html/rfc7033) based discovery

SimpleID 2 contains an almost completely rewritten codebase, and uses the
[Fat-Free Framework](http://fatfreeframework.com/) as its core web application framework.

As a result, the SimpleID 1.x codebase will no longer be maintained, apart from
critical security updates.  The codebase has been archived in the
[simpleid1 branch](http://sourceforge.net/p/simpleid/code/ci/simpleid1/tree/).