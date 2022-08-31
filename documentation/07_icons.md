# Работа с икноками

Иконки следует хранить в папке `src/icons`.
При запуске задачи `icons` файлы минифицируются, собираются и переносятся из папки `src/icons` в файл `dist/icons/sprite.svg`.
Подходите осознанно к выбору иконок, которые в последующем будут добавлены в общий спрайт. Зачастую это такие иконки, которые повторяются в пользовательском интерфейсе очень часто и в последующем также где-либо могут быть использованы (например, крестик для закрытия, стрелочка для слайдера, социальные сети и т.д.).

### Файлова структура

```text
Ladown template
├── dist
│   └── icons
│	     └── sprite.svg
└── src
    └── icons
```