# Начало работы

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
	host: '31.31.196.104',
	user: 'u0760560_egor',
	password: 'cC8mP1hQ1zxE3b',
	parallel: 10,
	log,
};
```
