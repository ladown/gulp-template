# Работа с изображениями

Изображения следует хранить в папке `src/img`.
При запуске задачи `imageCompress` файлы из папки `src/img` копируются в `dist/img`.
После добавления картинки в папку `src/img`, она сжимается, а так же дублируется в формат `.webp`, при условии что основная задача сборки - `gulp` запущена. Одновременно с этим автоматически заменяются пути в коде в зависимости от поддержки браузером. Если картинку указали в html, то вариант

```text
<img class="test" src="/img/image.jpg" alt="">
```

примет вид

```text
<picture>
	<source type="image/webp" srcset="/img/image.webp">
	<img class="test" src="/img/image.jpg" alt="" />
</picture>
```

В случае с css, это будет выглядеть так:

```text
.block{
	background: url('/img/image.jpg') center no-repeat;
}
```

преобразует в

```text
.webp .block{
	background: url('/img/image.webp') center no-repeat;
}
.no-webp .block{
	background: url('/img/image.jpg') center no-repeat;
}
```

При загрузке, элементу html, посредством js добавляется класс "webp" или "no-webp" взависимости от поддержки.

Векторные файлы, которые не являются иконками, так же могут быть загружены в эту папку. Например это `svg` файл логотипа, он перенесется в папку `dist`, без генерации `webp` формата.

### Файлова структура

```text
Ladown template
├── dist
│   └── img
└── src
    └── img
```
