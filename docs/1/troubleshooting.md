---
layout: docs
doctree: SimpleID 1 Documentation
title: How to troubleshoot
date: 2009-05-27 20:42:18
permalink: /docs/1/troubleshooting/
redirect_from: 
    - /documentation/troubleshooting/
    - /documentation/troubleshooting/how-troubleshoot/logging-simpleid/
eleventyNavigation:
    key: 1/How to troubleshoot
    title: How to troubleshoot
    parent: 1/Troubleshooting
    order: 1
---

OpenID issues are painfully difficult to diagnose.  This is because a lot of the process occurs behind the scenes, and that a lot of relying parties and OpenID providers (including SimpleID) do not implement the specification properly.

## How to troubleshoot

Here are some tips on troubleshooting.

- **Test whether you have claimed your identity URL properly.** Try testing your identity URL using the [Check your OpenID tool](http://www.openidenabled.com/resources/openid-test/checkup).

    This tool will see if your identity URL is providing the *minimum* information required for your URL is claimed.  If there are issues, please review the documentation on [how to claim your identity URL](/docs/1/identity-claim) for further information.

    Note that this tool currently only tests for OpenID 1.0.  It does not test claims of identity URLs using OpenID 2.0.

- **Test whether you can log into SimpleID itself.**  Try to [log into](/docs/1/login) and out of SimpleID itself.  If you can't, this means that there is something wrong with your SimpleID installation, or your identity file.  You may wish to review the [Getting Started Guide](/docs/1/).

- **Try logging into another web site using SimpleID.** Some web sites, even some very well-known ones, do not implement the OpenID specification fully.  This means that SimpleID will report warnings or errors when logging into these web sites.

    Try to log into different web sites to see if the problem is confined to just one particular web site.

- **Enable logging.**  You can temporarily [enable logging](#logging) so that you or the developers can see what is going on. *Note that sensitive security information may be written into the log file. Only enable logging when performing troubleshooting, and disable it when you are done.*

- **See if other users are experiencing the same problems.**  The [knowledge base](https://github.com/simpleid/simpleid/issues?q=label%3Aknowledgebase) contains commonly encountered problems and their solutions.  Searching through [SimpleID's bug/support database](https://github.com/simpleid/simpleid/issues?utf8=%E2%9C%93&q=) may reveal useful information.

If all else fails, you may consider [raising a ticket](https://github.com/simpleid/simpleid/wiki/Reporting-bugs).

## Logging    {#logging}

SimpleID 0.7 enables a log file to be written as it processes OpenID requests.  The log file, when produced, contains information on what is happening behind the scenes in an OpenID authentication session, which may provide useful information for troubleshooting purposes.

<div class="warning">

Note that sensitive security information may be written into the log file.  Only enable logging when performing troubleshooting, and disable it when you are done.

</div>

To enable logging, open <code>config.php</code>, and edit the <code>SIMPLEID_LOGFILE</code> and <code>SIMPLEID_LOGLEVEL</code> options.

To disable logging, set <code>SIMPLEID_LOGFILE</code> to an empty string.

Note that these configuration options may not exist in your copy of the <code>config.php</code> file, if you have upgraded from a previous version of SimpleID.  You can safely copy these configuration options from the latest <code>config.php.dist</code> file into your <code>config.php</code> file.