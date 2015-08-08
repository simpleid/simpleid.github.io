---
layout: docs
doctree: doctree2
title: Common problems
permalink: /docs/2/common-problems/
---

Here are some common problems and how to fix them.

## return_to discovery failure    {#return_to}

This is so common there is a [specific page](/docs/1/return_to) for this problem.

## Login verification recovery   {#otp}

If login verification is enabled and you have lost the device that generates the verification code, you can recover your account using the following steps.

1. You will need to edit your user file stored on the server.  Open the identity file and add the `otp` section as follows:

    {% highlight json %}
{
    "otp": {
        "type": "recovery"
    }
}
    {% endhighlight %}

2. You will now be able to [log into SimpleID](/docs/2/login) without the verification code.

3. Go to the Dashboard and click the **Disable** button to disable login verification.

4. Remember to remove the lines you have added in the identity file.