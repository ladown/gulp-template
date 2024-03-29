# Оглавление

-   [Основные возможности и используемые технологии](documentation/01_technologies.md)
-   [Начало работы](documentation/02_installation.md)
-   [Gulp-задачи](documentation/03_tasks.md)
-   [Структура папок и файлов](documentation/04_structure.md)
-   [Работа с изображениями](documentation/05_images.md)
-   [Работа с шаблонизатором Pug](documentation/06_pug.md)
-   [Работа с иконками](documentation/07_icons.md)

# Важная информация

В случае, если вы захотите обновить зависимости проекта, то вам следует учесть, что для корректной работы вам потребуется использовать webp-converter версии "2.2.3".

# Быстрый старт

Чтобы начать разработку на данном шаблоне, вам нужно скачать данный шаблон. После чего откройте командную строку c данным шаблоном.

Для начала нужно установить все необходимые зависимости проекта. Введите одну из используемых вами команд:

```sh
npm install
```

или

```sh
yarn
```

Теперь мы можем запускать проект слудеющими командами в командной строки:

1. Development mode

```sh
npm start
```

или

```sh
yarn start
```

2. Production mode

```sh
npm build
```

или

```sh
yarn build
```

3. Zip mode

```sh
npm zip
```

или

```sh
yarn zip
```

4. Deploy mode

```sh
npm deploy
```

или

```sh
yarn deploy
```

Перед тем, как вы будете делаать выгрузку вашего приложения на хостинг, убедитесь что в папке gulp/settings создан файл ftp.js, которого нет по умолчанию. Ниже приведен пример, как должен выглядеть файл ftp.js

```javascript
import log from 'fancy-log';

export const configFTP = {
	host: '',
	user: '',
	password: '',
	parallel: 10,
	log,
};
```
