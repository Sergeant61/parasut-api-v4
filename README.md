# Paraşüt-Api-V4

### Install

```
npm i parasut-api-v4
```

### Giriş

Bu npm modülün amacı https://apidocs.parasut.com/ da belirtilen api için bir sdk görevi görmektir. Resmi bir yayın <b style="color:red">değildir</b>.

### Özellikler

1. Obje şeması üzerinden istekleri gönderebilme ör: `parasutApiV4.accounts.index({ queryParams, data, pagination })`
2. Request ve Response tiplerinin tanımlanması (kısmen mevcut)
3. Authorization yönetimi otomatik yapılıyor. Token süresi dolduğunda `refreshToken` isteği yapılmakta ve istek kaldığı yerden devam etmektedir.

### Kullanım örnekleri

```ts
import ParasutApiV4 from 'parasut-api-v4'

const run = async () => {
  const parasutApiV4 = new ParasutApiV4({
    firmaNo: '101010',
    email: 'örnek_email@gmail.com',
    password: '11111111111',
    clientId: '11111111111',
    clientSecret: '11111111111',
  })

  const meResult = await parasutApiV4.me()
  console.log(meResult.data)
}

run()
```

#### QueryParams, Pagination tanımlamaları

```ts
import ParasutApiV4 from 'parasut-api-v4'

const run = async () => {
  const parasutApiV4 = new ParasutApiV4({
    firmaNo: '101010',
    email: 'örnek_email@gmail.com',
    password: '11111111111',
    clientId: '11111111111',
    clientSecret: '11111111111',
  })

  const queryParams = { // obje şeklinde tanımlanır
    sort: '-balance',
  }

  const pagination = { // obje şeklinde tanımlanır
    limit: 1,
    size: 15,
  }

  const accountIndexResult = await parasutApiV4.accounts.index({ queryParams, pagination })
  console.log(accountIndexResult.data)
}

run()
```

### Hatalar ve İstekler

Kullanım sırasında yaşadığınız sorunları veya isteklerinizi https://github.com/Sergeant61/parasut-api-v4/issues iş kaydı açabilir veya https://recepozen.com 'dan bildirebilirsiniz.

### Destek olmak isteyenler

Mevcut kod yapısına uygun her türlü pr tarafımca kabul edilecektir.