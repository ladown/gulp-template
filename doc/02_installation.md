# Начало работы

Открыть командную строку в папке со своим проектом

Ввести:

```sh
npm install yarn
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
