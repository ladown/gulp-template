# Структура папок и файлов

```text
Ladown template
├── src
│   ├── fonts
│   ├── icons
│   ├── img
│   │	  └── favicons
│   │       └── favicon.svg
│   ├── js
│   │   ├── clasess
│   │   ├── modules
│   │   ├── sliders
│   │   ├── app.js
│   │   ├── init.js
│   │   └── utils.js
│   ├── pug
│   │   ├── layouts
│   │   │   ├── default.pug
│   │   │   ├── footer.pug
│   │   │   ├── header.pug
│   │   │   ├── popups.pug
│   │   │   └── tooltips.pug
│   │   ├── mixins
│   │   │   ├── buttons
│   │   │   │     └── button.pug
│   │   │   ├── core
│   │   │   │     ├── bemto
│   │   │   │     ├── slider
│   │   │   │     └── icon
│   │   │   ├── items
│   │   │   ├── modules
│   │   │   ├── parts
│   │   │   ├── sections
│   │   │   │     └── section-core.pug
│   │   │   └── mixin-loader.pug
│   │   └── pages
│   │       ├── index.pug
│   │       └── page-list.pug
│   ├── scss
│   │    ├── defaults
│   │    │   ├── animation.scss
│   │    │   ├── common.scss
│   │    │   ├── content.scss
│   │    │   ├── data.scss
│   │    │   ├── fonts.scss
│   │    │   ├── functions.scss
│   │    │   ├── index.scss
│   │    │   ├── media.scss
│   │    │   ├── mixins.scss
│   │    │   ├── normalize.scss
│   │    │   └── variables.scss
│   │    ├── layouts
│   │    ├── library-mixins
│   │    │   ├── breakpoints-mixin.scss
│   │    │   ├── burger-mixin.scss
│   │    │   └── fonts-mixins.scss
│   │    ├── templates
│   │    │   ├── buttons
│   │    │   │     └── button.scss
│   │    │   ├── core
│   │    │   ├── items
│   │    │   ├── modules
│   │    │   ├── parts
│   │    │   └── sections
│   │    ├── app.scss
│   │    ├── page-list.scss
│   │    └── vendors.scss
│   ├──  static
│   │     ├── .htaccess
│   │     └── robots.txt
│   └──  video
```

## `src`

В папке `src` хранятся исходные файлы проекта.

## `src/fonts/`

Папка `src/fonts/` предназначена для хранения шрифтов.
При сборке файлы из данной папки попадают в `build/fonts/`.

## `src/icons/`

Папка `src/icons/` предназначена для хранения svg иконок.
В данную папку можно сохранять все ваши svg иконки. Они автоматически импортируются в файл App.js, но есть нюансы с HMR. Если вы добавили новую иконку, при разработке в dev режиме, то вам следует сохранить еще раз файл App.js, чтоб новые иконки подтянулись.
При сборке файлы из данной папки попадают в `build/icons/`.

## `src/img/`

Папка `img` предназначена для хранения изображений.
При сборке файлы из данной папки попадают в `build/img/`.

## `src/js/`

Папка `src/js/` предназначена для хранения скриптов.

## `src/js/classes/`

Папка `src/js/classes/` предназначена для хранения js классов.

## `src/js/modules/`

Папка `src/js/modules/` предназначена для хранения js модулей.

## `src/js/sliders/`

Папка `src/js/sliders/` предназначена для хранения js файлов, которые связаны с слайдерами.

## `src/js/app.js`

Файл `src/js/app.js` предназначен инициализации основного класса App.
При сборке данный файл попадает в `build/js/app.js`.

## `src/js/init.js`

Файл `src/js/init.js` предназначен для сборки всех модулей и классов, создание осноного класса приложения, которое экспортируется.

## `src/js/utils.js`

Файл `src/js/utils.js` предназначен общих и часто используемых функций.

## `src/pug/`

Папка `src/pug/` предназначена для хранения шаблонов.

## `src/pug/layouts/`

Папка `src/pug/layouts/` предназначена для хранения частей pug шаблонов (header, footer, ...).

## `pug/layouts/default.pug`

В файле `pug/layouts/default.pug` хранится базовый шаблон страниц сайта.

## `src/pug/mixins/`

Папка `src/pug/mixins/` предназначена для хранения Pug-миксинов.

## `src/pug/mixins/buttons/`

В папке `src/pug/mixins/buttons/` вы можете хранить миксины для разного рода кнопок.

## `src/pug/mixins/core/`

В папке `src/pug/mixins/core/` хранятся основные миксины.

## `src/pug/mixins/core/bemto/`

В файле `src/pug/mixins/core/bemto/` хранятся миксины для использования bemto.

## `src/pug/mixins/items/`

В папке `src/pug/mixins/items/` вы можете хранить элементы секций, которые где-то еще используются.

## `src/pug/mixins/modules/`

В папке `src/pug/mixins/modules/` хранятся независимые модули.

## `src/pug/mixins/parts/`

В папке `src/pug/mixins/parts/` хранятся части определенных секций.

## `src/pug/mixins/sections/`

В папке `src/pug/mixins/sections/` хранятся миксины для отдельных секций.

## `src/pug/mixins/mixin-loader.pug`

В файле `src/pug/mixins/mixin-loader.pug` подключаются все миксины.

## `src/pug/pages/`

Папка `src/pug/pages/` предназначена для хранения страниц сайта.

## `pug/pages/index.pug`

В файле `pug/pages/index.pug` пример страницы сайта.

## `pug/pages/page-list.pug`

`pug/pages/page-list.pug` хранится разметка главной страницы со списком других.

## `src/sass/`

Папка `src/sass/` предназначена для хранения стилей.

## `src/sass/defaults`

Папка `src/sass/defaults` предназначена для хранения базовых SASS стилей.

## `src/sass/defaults/animation.scss`

Файл `src/sass/defaults/animation.scss` предназначен для анимаций.

## `src/sass/defaults/common.scss`

Файл `src/sass/defaults/common.scss` предназначен для хранения базовых стилей.

## `src/sass/defaults/content.scss`

Файл `src/sass/defaults/content.scss` предназначен для хранения типографики.

## `src/sass/defaults/data.scss`

Файл `src/sass/defaults/data.scss` предназначен для полезных функций и миксинов в scss.

## `src/sass/defaults/fonts.scss`

Файл `src/sass/defaults/fonts.scss` предназначен для хранения стилей шрифтов.

## `src/sass/defaults/functions.scss`

Файл `src/sass/defaults/functions.scss` предназначен для scss функций.

## `src/sass/defaults/index.scss`

Файл `src/sass/defaults/index.scss` предназначен для подключения всех стилей в нужном порядке.

## `src/sass/defaults/media.scss`

Файл `src/sass/defaults/media.scss` предназначена для хранения медиа-классов.

## `src/sass/defaults/mixins.scss`

Файл `src/sass/defaults/mixins.scss` предназначена для хранения SASS-миксинов и функций.

## `src/sass/defaults/normalize.scss`

Файл `src/sass/defaults/normalize.scss` предназначен для нормализации стилей.

## `src/sass/defaults/variables.scss`

Файл `src/sass/defaults/variables.scss` предназначен для хранения переменных.

## `src/sass/layouts`

Папка `src/sass/layouts` предназначена для хранения БЭМ блоков.

## `src/sass/library-mixins`

Папка `src/sass/library` предназначена для хранения полезных функций для scss - breakpoints and fonts mixins.

## `src/sass/templates`

В папке `src/sass/templates` хранятся стили для компонентов из папки `src/pug/mixins/`

## `src/sass/defaults/app.scss`

Файл `src/sass/defaults/app.scss` создан для подключения всех возможных стилей в нужном порядке.

## `src/sass/defaults/page-list.scss`

Файл `src/sass/defaults/page-list.scss` предназначен для стилей показательной страницы.

## `src/sass/defaults/vendor.scss`

Файл `src/sass/defaults/vendor.scss` предназначен для хранения стилей плагинов из node_modules.

## `src/static/`

Папка `src/static/` предназначена для хранения статичных файлов (.htaccess, robots.txt, ...).
При сборке файлы из данной папки попадают в `build/`.

## `src/video/`

Папка `src/video/` предназначена для хранения видео.
При сборке файлы из данной папки попадают в `build/video/`.
