---
layout: docs
title: Upgrading
permalink: /docs/2/upgrading/
---

SimpleID is currently in heavy development, with the software changing rapidly.

Newer versions often include improvements to the security of SimpleID software, and so it is very important to upgrade SimpleID when a new version is released.

## Information on Upgrades

You can find information on upgrading in three locations -- be sure to read all of it carefully before you upgrade:

1. The <code>UPGRADE.txt</code> file packaged with the SimpleID installation.
2. The [news page](/news) announcing the release of your version.
3. This page.


## How to Upgrade  {#how}

### Important Notes

- **Warning: As with any software upgrade it is critical for you to have a current, tested backup of your site.**

- You cannot skip versions when upgrading.  For example, in order to upgrade from version 0.4 to version 0.6, you must first upgrade from version 0.4 to version 0.5, then version 0.5 to version 0.6.


### Upgrade Instructions

To upgrade your installation of SimpleID, follow the following steps.

1. Backup your existing installation. Note that your SimpleID installation resides in [multiple directories](/docs/2/installing), so remember to back up all of them.

2. Download and uncompress the new SimpleID installation package, and carefully review the information and instructions available in <code>UPGRADE.txt</code>

3. Upload the new files to the appropriate locations of your server.

4. Some versions may require you to modify your <code>config.php</code> file.  Review <code>UPGRADE.txt</code> and the sections below to see if this is required.

    The new SimpleID installation package will not overwrite your <code>config.php</code> file.  Instead, it will have a new version of <code>config.php.dist</code> file.  You may have a look at the new <code>config.php.dist</code> to see if there are any additional configuration options which you may put in your <code>config.php</code> file.  In most cases, the defaults will be sensible.

5. Some versions may require you to [run the upgrade script](#upgrade).  Review <code>UPGRADE.txt</code> and the sections below to see if this is required.

## Running the upgrade script    {#upgrade}

More recent versions of SimpleID requires you to run upgrade.php script to update some of the data it stores.

To run upgrade.php:

1. Check whether you have a user who is an administrator.  A user is an administrator if the user's [identity file](/docs/2/identity-files/) contains the line <code>administrator=1</code>.

    The default identity files supplied with older versions of SimpleID do not have this line, so this may need to be added in manually.

2. [Log into SimpleID](/docs/2/login) as the administrator.

    If you are able to log in, go to step 4.  Otherwise go to step 3.

3. If for some reason you cannot log in, you will need to edit upgrade.php manually in order to run the script.

    Open upgrade/index.php using a text editor.  Change the line <code>$upgrade_access_check = TRUE;</code> to <code>$upgrade_access_check = FALSE;</code>

4. Go to upgrade/index.php using your web browser.  upgrade.php is located in the same directory as your SimpleID URL.  So if you access SimpleID at <code>http://example.com/simpleid/</code>, then the upgrade script is located at <code>http://example.com/simpleid/upgrade/</code>.

5. Follow the instructions.

6. After you complete the upgrade, be sure to *change* the upgrade.php file *back to its original state* if you have edited it in step 3. Otherwise, anyone would be able to run the upgrade.php file on your site.
