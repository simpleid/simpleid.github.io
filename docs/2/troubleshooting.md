---
layout: docs
doctree: SimpleID 2 Documentation
title: How to troubleshoot
permalink: /docs/2/troubleshooting/
eleventyNavigation:
    key: 2/troubleshooting
    title: How to troubleshoot
    parent: 2/_troubleshooting
    order: 10
---

OpenID issues are painfully difficult to diagnose.  This is because a lot of the process occurs behind the scenes, and that a lot of relying parties and OpenID providers (including SimpleID) do not implement the specification properly.

## How to troubleshoot

Here are some tips on troubleshooting.

- **Test whether you can log into SimpleID itself.**  Try to [log into](/docs/2/login) and out of SimpleID itself.  If you can't, this means that there is something wrong with your SimpleID installation, or your identity file.  You may wish to review the [Getting Started Guide](/docs/2/).

- **Try logging into another web site using SimpleID.** Some web sites, even some very well-known ones, do not implement the OpenID specification fully.  This means that SimpleID will report warnings or errors when logging into these web sites.

    Try to log into different web sites to see if the problem is confined to just one particular web site.

- **Enable logging.**  You can temporarily [enable logging](#logging) so that you or the developers can see what is going on. *Note that sensitive security information may be written into the log file. Only enable logging when performing troubleshooting, and disable it when you are done.*

- **See if other users are experiencing the same problems.**  The [knowledge base](https://github.com/simpleid/simpleid/issues?q=label%3Aknowledgebase) contains commonly encountered problems and their solutions.  Searching through [SimpleID's bug/support database](https://github.com/simpleid/simpleid/issues?utf8=%E2%9C%93&q=) may reveal useful information.

If all else fails, you may consider [raising a ticket](https://github.com/simpleid/simpleid/wiki/Reporting-bugs).

## Logging    {#logging}

SimpleID enables a log file to be written as it processes OpenID requests.  The log file, when produced, contains information on what is happening behind the scenes in an OpenID authentication session, which may provide useful information for troubleshooting purposes.

<div class="warning">

Note that sensitive security information may be written into the log file.  Only enable logging when performing troubleshooting, and disable it when you are done.

</div>

To enable logging, open <code>config.php</code>, and edit the <code>log_file</code> and <code>log_level</code> options.

To disable logging, set <code>log_file</code> to an empty string.

Note that these configuration options may not exist in your copy of the <code>config.php</code> file, if you have upgraded from a previous version of SimpleID.  You can safely copy these configuration options from the latest <code>config.php.dist</code> file into your <code>config.php</code> file.