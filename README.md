# Paraşüt-Api-V4

## İçindekiler

- [Kurulum](#kurulum)
- [Giriş](#giriş)
- [Özellikler](#özellikler)
- [Kullanım Örnekleri](#kullanım-örnekleri)
- [Dokümantasyon](#dokümantasyon)
  - [Kimlik Doğrulama](#kimlik-doğrulama)
  - [Modüller](#modüller)
    - [Accounts](#accounts)
    - [Bank Fees](#bank-fees)
    - [Categories](#categories)
    - [Contacts](#contacts)
    - [E-Archives](#e-archives)
    - [E-Invoice](#e-invoice)
    - [E-Invoice In Boxes](#e-invoice-in-boxes)
    - [E-SMMS](#e-smms)
    - [Employees](#employees)
    - [Inventory Levels](#inventory-levels)
    - [Products](#products)
    - [Purchase Bills](#purchase-bills)
    - [Salaries](#salaries)
    - [Sales Invoices](#sales-invoices)
    - [Sales Offers](#sales-offers)
    - [Shipment Documents](#shipment-documents)
    - [Stock Movements](#stock-movements)
    - [Stock Updates](#stock-updates)
    - [Tags](#tags)
    - [Taxes](#taxes)
    - [Trackable Jobs](#trackable-jobs)
    - [Transactions](#transactions)
    - [Warehouses](#warehouses)
    - [Webhooks](#webhooks)
- [Hatalar ve İstekler](#hatalar-ve-istekler)
- [Destek Olmak İsteyenler](#destek-olmak-isteyenler)

## Kurulum

```
npm i parasut-api-v4
```

## Giriş

Bu npm modülün amacı https://apidocs.parasut.com/ da belirtilen api için bir sdk görevi görmektir. Resmi bir yayın <b style="color:red">değildir</b>.

## Özellikler

1. Obje şeması üzerinden istekleri gönderebilme ör: `parasutApiV4.accounts.index({ queryParams, data, pagination })`
2. Request ve Response tiplerinin tanımlanması (kısmen mevcut)
3. Authorization yönetimi otomatik yapılıyor. Token süresi dolduğunda `refreshToken` isteği yapılmakta ve istek kaldığı yerden devam etmektedir.

## Kullanım Örnekleri

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

### QueryParams, Pagination tanımlamaları

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

## Dokümantasyon

### Kimlik Doğrulama

Paket, OAuth2 tabanlı kimlik doğrulama kullanır. Token süresi dolduğunda otomatik olarak `refreshToken` isteği yapılır ve istek kaldığı yerden devam eder.

### Modüller

#### Accounts

Hesap yönetimi için kullanılan modül.

**Metodlar:**
- `index({ queryParams, pagination })` - Hesap listesini getirir
- `create({ data, queryParams })` - Yeni hesap oluşturur
- `show(id, { queryParams })` - Belirli bir hesabı getirir
- `edit(id, { data, queryParams })` - Hesabı günceller
- `delete(id, { queryParams })` - Hesabı siler
- `transactions(id, { queryParams })` - Hesabın işlemlerini getirir
- `debitTransactions(id, { data, queryParams })` - Hesaba borç işlemi ekler
- `creditTransactions(id, { data, queryParams })` - Hesaba alacak işlemi ekler

#### Bank Fees

Banka masrafları yönetimi için kullanılan modül.

**Metodlar:**
- `create({ data, queryParams })` - Yeni banka masrafı oluşturur
- `show(id, { queryParams })` - Belirli bir banka masrafını getirir
- `edit(id, { data, queryParams })` - Banka masrafını günceller
- `delete(id, { queryParams })` - Banka masrafını siler
- `archive(id, { queryParams })` - Banka masrafını arşivler
- `unarchive(id, { queryParams })` - Banka masrafını arşivden çıkarır
- `pay(id, { queryParams })` - Banka masrafını öder

#### Categories

Kategori yönetimi için kullanılan modül.

**Metodlar:**
- `index({ queryParams, pagination })` - Kategori listesini getirir
- `create({ data, queryParams })` - Yeni kategori oluşturur
- `show(id, { queryParams })` - Belirli bir kategoriyi getirir
- `edit(id, { data, queryParams })` - Kategoriyi günceller
- `delete(id, { queryParams })` - Kategoriyi siler

#### Contacts

Kişi/şirket yönetimi için kullanılan modül.

**Metodlar:**
- `index({ queryParams, pagination })` - Kişi/şirket listesini getirir
- `create({ data, queryParams })` - Yeni kişi/şirket oluşturur
- `show(id, { queryParams })` - Belirli bir kişi/şirketi getirir
- `edit(id, { data, queryParams })` - Kişi/şirketi günceller
- `delete(id, { queryParams })` - Kişi/şirketi siler
- `contactDebitTransactions(id, { data, queryParams })` - Kişi/şirkete borç işlemi ekler
- `contactCreditTransactions(id, { data, queryParams })` - Kişi/şirkete alacak işlemi ekler

#### E-Archives

E-Arşiv yönetimi için kullanılan modül.

**Metodlar:**
- `create({ data, queryParams })` - Yeni e-arşiv oluşturur
- `show(id, { queryParams })` - Belirli bir e-arşivi getirir
- `showPdf(id, { queryParams })` - E-arşivin PDF'ini getirir

#### E-Invoice

E-Fatura yönetimi için kullanılan modül.

**Metodlar:**
- `create({ data, queryParams })` - Yeni e-fatura oluşturur
- `show(id, { queryParams })` - Belirli bir e-faturayı getirir
- `showPdf(id, { queryParams })` - E-faturanın PDF'ini getirir

#### E-Invoice In Boxes

E-Fatura gelen kutusu yönetimi için kullanılan modül.

**Metodlar:**
- `index({ queryParams, pagination })` - E-fatura gelen kutusu listesini getirir

#### E-SMMS

E-SMM yönetimi için kullanılan modül.

**Metodlar:**
- `create({ data, queryParams })` - Yeni e-SMM oluşturur
- `show(id, { queryParams })` - Belirli bir e-SMM'i getirir
- `showPdf(id, { queryParams })` - E-SMM'in PDF'ini getirir

#### Employees

Çalışan yönetimi için kullanılan modül.

**Metodlar:**
- `index({ queryParams, pagination })` - Çalışan listesini getirir
- `create({ data, queryParams })` - Yeni çalışan oluşturur
- `show(id, { queryParams })` - Belirli bir çalışanı getirir
- `edit(id, { data, queryParams })` - Çalışanı günceller
- `delete(id, { queryParams })` - Çalışanı siler
- `archive(id, { queryParams })` - Çalışanı arşivler
- `unarchive(id, { queryParams })` - Çalışanı arşivden çıkarır

#### Inventory Levels

Stok seviyeleri yönetimi için kullanılan modül.

**Metodlar:**
- `index({ queryParams, pagination })` - Stok seviyeleri listesini getirir

#### Products

Ürün yönetimi için kullanılan modül.

**Metodlar:**
- `index({ queryParams, pagination })` - Ürün listesini getirir
- `create({ data, queryParams })` - Yeni ürün oluşturur
- `show(id, { queryParams })` - Belirli bir ürünü getirir
- `edit(id, { data, queryParams })` - Ürünü günceller
- `delete(id, { queryParams })` - Ürünü siler

#### Purchase Bills

Alış faturası yönetimi için kullanılan modül.

**Metodlar:**
- `index({ queryParams, pagination })` - Alış faturası listesini getirir
- `createBasicPurchaseBill({ data, queryParams })` - Basit alış faturası oluşturur
- `createDetailedPurchaseBill({ data, queryParams })` - Detaylı alış faturası oluşturur
- `show(id, { queryParams })` - Belirli bir alış faturasını getirir
- `delete(id, { queryParams })` - Alış faturasını siler
- `editBasicPurchaseBill(id, { data, queryParams })` - Basit alış faturasını günceller
- `editDetailedPurchaseBill(id, { data, queryParams })` - Detaylı alış faturasını günceller
- `pay(id, { data, queryParams })` - Alış faturasını öder
- `cancel(id, { queryParams })` - Alış faturasını iptal eder
- `recover(id, { queryParams })` - Alış faturasını geri getirir
- `archive(id, { queryParams })` - Alış faturasını arşivler
- `unarchive(id, { queryParams })` - Alış faturasını arşivden çıkarır

#### Salaries

Maaş yönetimi için kullanılan modül.

**Metodlar:**
- `index({ queryParams, pagination })` - Maaş listesini getirir
- `create({ data, queryParams })` - Yeni maaş kaydı oluşturur
- `show(id, { queryParams })` - Belirli bir maaş kaydını getirir
- `edit(id, { data, queryParams })` - Maaş kaydını günceller
- `delete(id, { queryParams })` - Maaş kaydını siler
- `archive(id, { queryParams })` - Maaş kaydını arşivler
- `unarchive(id, { queryParams })` - Maaş kaydını arşivden çıkarır
- `pay(id, { queryParams })` - Maaşı öder

#### Sales Invoices

Satış faturası yönetimi için kullanılan modül.

**Metodlar:**
- `index({ queryParams, pagination })` - Satış faturası listesini getirir
- `create({ data, queryParams })` - Yeni satış faturası oluşturur
- `show(id, { queryParams })` - Belirli bir satış faturasını getirir
- `edit(id, { data, queryParams })` - Satış faturasını günceller
- `delete(id, { queryParams })` - Satış faturasını siler
- `pay(id, { data, queryParams })` - Satış faturasını öder
- `cancel(id, { queryParams })` - Satış faturasını iptal eder
- `recover(id, { queryParams })` - Satış faturasını geri getirir
- `archive(id, { queryParams })` - Satış faturasını arşivler
- `unarchive(id, { queryParams })` - Satış faturasını arşivden çıkarır
- `convertToInvoice(id, { queryParams })` - Satış faturasını faturalaştırır
- `showPdf(id, { queryParams })` - Satış faturasının PDF'ini getirir

#### Sales Offers

Satış teklifi yönetimi için kullanılan modül.

**Metodlar:**
- `index({ queryParams, pagination })` - Satış teklifi listesini getirir
- `create({ data, queryParams })` - Yeni satış teklifi oluşturur
- `show(id, { queryParams })` - Belirli bir satış teklifini getirir
- `edit(id, { data, queryParams })` - Satış teklifini günceller
- `delete(id, { queryParams })` - Satış teklifini siler
- `showPdf(id, { queryParams })` - Satış teklifinin PDF'ini getirir
- `archive(id, { queryParams })` - Satış teklifini arşivler
- `unarchive(id, { queryParams })` - Satış teklifini arşivden çıkarır
- `details(id, { queryParams })` - Satış teklifinin detaylarını getirir
- `updateStatus(id, { data, queryParams })` - Satış teklifinin durumunu günceller
- `sendEmail(id, { data, queryParams })` - Satış teklifini e-posta ile gönderir

#### Shipment Documents

Sevk irsaliyesi yönetimi için kullanılan modül.

**Metodlar:**
- `index({ queryParams, pagination })` - Sevk irsaliyesi listesini getirir
- `create({ data, queryParams })` - Yeni sevk irsaliyesi oluşturur
- `show(id, { queryParams })` - Belirli bir sevk irsaliyesini getirir
- `edit(id, { data, queryParams })` - Sevk irsaliyesini günceller
- `delete(id, { queryParams })` - Sevk irsaliyesini siler

#### Stock Movements

Stok hareketleri yönetimi için kullanılan modül.

**Metodlar:**
- `index({ queryParams, pagination })` - Stok hareketleri listesini getirir

#### Stock Updates

Stok güncellemeleri yönetimi için kullanılan modül.

**Metodlar:**
- `create({ data, queryParams })` - Yeni stok güncellemesi oluşturur

#### Tags

Etiket yönetimi için kullanılan modül.

**Metodlar:**
- `index({ queryParams, pagination })` - Etiket listesini getirir
- `create({ data, queryParams })` - Yeni etiket oluşturur
- `show(id, { queryParams })` - Belirli bir etiketi getirir
- `edit(id, { data, queryParams })` - Etiketi günceller
- `delete(id, { queryParams })` - Etiketi siler

#### Taxes

Vergi yönetimi için kullanılan modül.

**Metodlar:**
- `index({ queryParams, pagination })` - Vergi listesini getirir
- `create({ data, queryParams })` - Yeni vergi oluşturur
- `show(id, { queryParams })` - Belirli bir vergiyi getirir
- `edit(id, { data, queryParams })` - Vergiyi günceller
- `delete(id, { queryParams })` - Vergiyi siler
- `archive(id, { queryParams })` - Vergiyi arşivler
- `unarchive(id, { queryParams })` - Vergiyi arşivden çıkarır
- `pay(id, { queryParams })` - Vergiyi öder

#### Trackable Jobs

Takip edilebilir işler yönetimi için kullanılan modül.

**Metodlar:**
- `show(id, { queryParams })` - Belirli bir takip edilebilir işi getirir

#### Transactions

İşlem yönetimi için kullanılan modül.

**Metodlar:**
- `show(id, { queryParams })` - Belirli bir işlemi getirir
- `delete(id, { queryParams })` - İşlemi siler

#### Warehouses

Depo yönetimi için kullanılan modül.

**Metodlar:**
- `index({ queryParams, pagination })` - Depo listesini getirir
- `create({ data, queryParams })` - Yeni depo oluşturur
- `show(id, { queryParams })` - Belirli bir depoyu getirir
- `edit(id, { data, queryParams })` - Depoyu günceller
- `delete(id, { queryParams })` - Depoyu siler

#### Webhooks

Webhook yönetimi için kullanılan modül.

**Metodlar:**
- `index({ queryParams, pagination })` - Webhook listesini getirir
- `create({ data, queryParams })` - Yeni webhook oluşturur
- `show(id, { queryParams })` - Belirli bir webhook'u getirir
- `edit(id, { data, queryParams })` - Webhook'u günceller
- `delete(id, { queryParams })` - Webhook'u siler

## Hatalar ve İstekler

Kullanım sırasında yaşadığınız sorunları veya isteklerinizi https://github.com/Sergeant61/parasut-api-v4/issues iş kaydı açabilir veya https://recepozen.com 'dan bildirebilirsiniz.

## Destek Olmak İsteyenler

Mevcut kod yapısına uygun her türlü pr tarafımca kabul edilecektir.