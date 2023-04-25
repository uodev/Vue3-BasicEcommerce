# Vue3 Basic E-commerce

Vue3 bilgimi test etmek için yapmış olduğum bir proje

## Paketler

| Client                   | Server               |
| :----------------------- | :------------------- |
| `axios`                  | `bcrypt`             |
| `pinia`                  | `body-parser`        |
| `vue`                    | `cloudinary`         |
| `vue3-router`            | `cors`               |
| `vue3-carousel`          | `mongoose`           |
| `vue3-styled-components` | `jsonwebtoken`       |
|                          | `express`            |
|                          | `express-fileupload` |
|                          | `dotenv`             |

## Yükleme

Server gerekliliklerini yüklemek için

```bash
  cd ./server
  npm install or
  pnpm install
```

Client gerekliliklerini yüklemek için

```bash
  cd ./client
  npm install or
  pnpm install
```

## Düzenleme

```
server klasörü içindeki infrastructure > config > .env
```

| Parametre               | Tip      |
| :---------------------- | :------- |
| `JWT_SECRET`            | `string` |
| `PORT`                  | `number` |
| `DATABASE_URL`          | `string` |
| `CLOUDINARY_API_SECRET` | `string` |
| `CLOUDINARY_API_KEY`    | `string` |
| `CLOUDINARY_CLOUD_NAME` | `string` |

## Çalıştırma

Server'i çalıştırmak için

```bash
  cd ./server
  npm start or
  pnpm start
```

Client'i çalıştırmak için

```bash
  cd ./client
  npm run dev or
  pnpm dev
```

# API Kullanımı

## Products

#### Tüm öğeleri getir

```http
  GET /api/products/
```

#### Yeni öğe ekler

```http
  POST /api/products/
```

| Parametre  | Tip      | Açıklama                              |
| :--------- | :------- | :------------------------------------ |
| `name`     | `string` | **Gerekli**. Ürün Adı.                |
| `desc`     | `string` | **Gerekli**. Ürün Açıklaması.         |
| `price`    | `number` | Ürün Fiyatı. Default değeri 0         |
| `category` | `string` | **Gerekli**. Ürünün kategori bilgisi. |
| `image`    | `string` | **Gerekli**. Ürün resmi.              |

## Categories

#### Tüm kategorileri getir

```http
  GET /api/categories/
```

#### Yeni öğe ekler

```http
  POST /api/categories/
```

| Parametre | Tip      | Açıklama                     |
| :-------- | :------- | :--------------------------- |
| `name`    | `string` | **Gerekli**. Kategori Adı.   |
| `image`   | `string` | **Gerekli**. Kategori resmi. |

## Resimler
<img src="https://i.hizliresim.com/ppoewwv.png" alt="herosection" width="900" height="600"/>
<img src="https://i.hizliresim.com/rpqydao.png" alt="anasayfa" width="900" height="600"/>
<img src="https://i.hizliresim.com/9rtjajm.png" alt="ürünler" width="900" height="600"/>
<img src="https://i.hizliresim.com/e6gcjo7.png" alt="ürünekle" width="900" height="600"/>
