---
layout: docs
title: Passkeys
permalink: /docs/2/passkeys/
eleventyNavigation:
    key: 2/passkeys
    title: Passkeys
    parent: 2/_using-simpleid
    order: 25
---

Passkeys allow you to log in without a password by using your biometrics or another mechanism.  Passkeys can be saved to supported devices, such as a personal computer, a phone or a hardware security key.

You can save a passkey to this device or another device, such as a phone or hardware security key.

## What you need

Passkeys are supported in the following devices:

* laptops and personal computers with recent versions of Windows and macOS, when used with a supported web browser
* phones running recent versions of iOS or Android
* hardware security keys such as Yubikey

## How to enable

1. Passkey is implemented in [an authentication scheme module](/docs/2/auth-schemes).  For this is
   `SimpleID\Auth\WebAuthnAuthSchemeModule`.  To enable this module, open the `config.php` file and add the appropriate module names under `modules`.

   > [!NOTE]
   >
   > Enabling WebAuthnAuthSchemeModule also enables support for [login verification](/docs/2/login-verification) using hardware security keys.

2. To save a passkey, [log in to SimpleID](/docs/2/login) normally.

3. From the **My Profile** page, go to the **Passkeys and security keys** box, then click **Add**.

4. Enter a user-friendly name for the key, then click **Add passkey**.

5. Follow the instructions on your device.

Once a passkey is saved, you can log in by clicking on **Log in with a passkey** in the login page.

## How to remove

You can remove existing passkeys from your profile page.

1. [Log in to SimpleID](/docs/2/login)
2. From the **My Profile** page, go to the **Passkeys and security keys** box, then click **Delete**.

