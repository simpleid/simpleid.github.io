---
layout: docs
doctree: SimpleID 2 Documentation
title: Modules
permalink: /docs/2/modules/
eleventyNavigation:
    key: 2/modules
    title: Modules
    parent: 2/_using-simpleid
    order: 50
---

SimpleID 2.0 is made up of a set of components called **modules**.  Each module implements one major feature
and can be enabled and disabled separately.

Modules are similar to extensions in SimpleID 1.0.  Unlike SimpleID 1.0 extensions, which are mainly used for
extending the OpenID protocol, SimpleID 2.0 modules are used in a variety of ways.  The SimpleID distribution
contains modules for:

- different identity protocols, and separate features within each protocols
- [authentication schemes](/docs/2/auth-schemes)
- [data stores](/docs/2/stores)

Modules are implemented as PHP classes subclassed from `SimpleID\Module`.  Modules included in the SimpleID
distribution are stored in the `core` subdirectory of the web directory.  Additional modules are stored
in the `site` subdirectory of the web directory.

## Enabling and disabling modules    {#enabling}

Modules that have been installed can be enabled or disabled by editing the `config.php` file.  The `modules`
setting contains an array of modules to be enabled.  By editing this array you can select which
modules are to be enabled.

It should be noted that:

- some modules are dependent on other modules.  For example, the OpenID Connect module is dependent on the OAuth
  module (as OpenID Connect is an extension of OAuth).  Generally a module will automatically load its dependencies,
  and therefore would not be affected by the configuration in the `config.php` file.

- some modules may not be compatible with other modules.  This is particularly the case for
  [authentication scheme modules](/docs/2/auth-schemes).  You will need to be careful to enable only the modules
  you need

- some modules may extending an existing module and require it to be enabled.  For example, some
  [data store modules](/docs/2/stores) still depend on the default store module to function.

## Installing and uninstalling modules

SimpleID 2.0 modules are distributed as Composer packages, with a custom installer.  Therefore you can
install or uninstall a module using the `composer` command.

For example, to install a module called `example-vendor/simpleid-example`, use the following command:

{% highlight bash %}
composer require example-vendor/simpleid-example
{% endhighlight %}

Once the module has been installed, it can be [enabled](#enabling).
