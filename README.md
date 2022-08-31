# Оглавление

-  [Основные возможности и используемые технологии](doc/01_technologies.md)
-  [Начало работы](doc/02_installation.md)
-  [Gulp-задачи](doc/03_tasks.md)
-  [Структура папок и файлов](doc/04_structure.md)
-  [Работа с изображениями](doc/05_images.md)
-  [Работа с шаблонизатором Pug](doc/06_pug.md)

# Важная информация

В случае, если вы захотите обновить зависимости проекта, то вам следует учесть, что для корректной работы вам потребуется использовать webp-converter версии "2.2.3".

# Быстрый старт

Открыть командную строку в папке со своим проектом

Ввести:

```sh
npm install
```

или

```sh
yarn
```

Если вы хотите делать deploy сборки на сервер, то вам следует создать / открыть файл ftp.js в папке gulp/settings/ и заполнить его необходимыми данными. Пример, как должен выглядеть файл ftp.js

```javascript
export const configFTP = {
	host: '',
	user: '',
	password: '',
	parallel: 10,
};
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

2. Prodocution mode

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
