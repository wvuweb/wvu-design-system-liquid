WVU Design System
==================

**Description:** WVU Design System.

**Developers name(s):** Adam Glenn

**Github repository URL:** [https://github.com/wvuweb/wvu-design-system](https://github.com/wvuweb/wvu-design-system)

**Documentation website URL:** [https://designsystem.sandbox.wvu.edu](https://designsystem.sandbox.wvu.edu)

**Dependencies necessary to work with this theme:** Sass.



## WVU Design System & Gulp

**Requirements**
* [NodeJS](https://nodejs.org)

You will need to install Node ^8.9.4.

  1. Download and install NodeJS from https://nodejs.org/en if you haven't already.
  1. Install Gulp globally by entering `npm install -g gulp` in your terminal.
  1. Navigate to your project's directory via terminal (something like `cd ~/Sites/cleanslate_themes/MY-SITE`)
  1. Install node modules by typing `npm ci`
  1. Run Gulp by typing `gulp`.

**Note:** the `gulpfile.js` in its base form will only compile your Sass.

## WVU Design System and CleanSlate

If you are building a theme for [CleanSlate](https://cleanslatecms.wvu.edu/), you can use partials to include [components](https://designsystem.sandbox.wvu.edu/components). These are stored in a global theme called WVU Design System Components. Make sure to reference the this theme if you want to use a global partial. For example, to include a [Hero component](https://designsystem.sandbox.wvu.edu/components/hero), you would use the partial ```<r:partial name="components/wvu-hero" theme="University Relations: WVU Design System" />```. If you don’t want to use a global partial, you can create your own. For more about how to build themes in CleanSlate, check out [https://cleanslatecms.wvu.edu](https://cleanslatecms.wvu.edu).

### Testing for CleanSlate

If you are building a theme for [CleanSlate](https://cleanslatecms.wvu.edu/), test your themes locally using [Hammer VM](https://bitbucket.org/wvudigital/hammer-vm/src/master/).
