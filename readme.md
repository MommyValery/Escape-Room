Escape room.
Время затраченное на разработку проекта: 16ч15м

Откройте [http://localhost:3000](http://localhost:3000) чтобы просмотреть его в браузере.

{
  "id": 1,
  "title": "Склеп",
  "description": "Средневековое кладбище таит в себе много страшных тайн. Местные жители говорят, что в склепе похоронен граф вампир, который по ночам выходит на охоту, чтобы испить человеческой крови. Через час солнце опустится за горизонт, успеете ли вы убить вампира и выбраться из склепа?",
  "previewImg": "img/preview-sklep.jpg",
  "coverImg": "img/cover-sklep.jpg",
  "type": "horror",
  "level": "hard",
  "peopleCount": [2, 5],
  "duration": 120
}


#### OrderPost

```json
{
  "name": "Jon Vek",
  "peopleCount": 1,
  "phone": "7000000000",
  "isLegal": true
}
```

### Список роутов:

- **GET** /quests — получить список квестов.

- **GET** http://localhost:3001/quests/1 — получить квест c идентификатором `id`.

- **POST** http://localhost:3001/orders — отправить новый заказ.
