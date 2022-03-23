---
layout: docs
doctree: SimpleID 1 Documentation
title: Common problems
date: 2013-05-03 20:33:12
permalink: /docs/1/common-problems/
redirect_from: /documentation/troubleshooting/login-verification-recovery/
eleventyNavigation:
    key: 1/Common problems
    title: Common problems
    parent: 1/Troubleshooting
    order: 2
---

Here are some common problems and how to fix them.

## return_to discovery failure    {#return_to}

This is so common there is a [specific page](/docs/1/return_to) for this problem.

## Login verification recovery   {#otp}

If login verification is enabled and you have lost the device that generates the verification code, you can recover your account using the following steps.

1. You will need to edit the [identity file](/docs/1/identity-files) stored on the server.  Open the identity file and add the following lines:

```ini
[otp]
    type=recovery
```

2. You will now be able to [log in](/docs/1/login) without the verification code.

3. Go to the Dashboard and click the **Disable** button to disable login verification.

4. Remember to remove the lines you have added in the identity file.