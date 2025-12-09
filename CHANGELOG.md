# Changelog

All notable changes to this project will be documented in this file.

## [0.3.0] - 2025-12-09

### Added
- **Sales Offers (Teklif) Modülü** - Yeni modül eklendi
  - `index()` - Teklif listesi
  - `create()` - Yeni teklif oluşturma
  - `show()` - Teklif detayı
  - `edit()` - Teklif güncelleme
  - `delete()` - Teklif silme
  - `showPdf()` - PDF oluşturma
  - `archive()` - Arşivleme
  - `unarchive()` - Arşivden çıkarma
  - `details()` - Detay bilgileri
  - `updateStatus()` - Durum güncelleme
  - `sendEmail()` - E-posta gönderme
- Sales Invoices modülüne `showPdf()` metodu eklendi
- Webhooks modülüne `index()` metodu eklendi

### Changed
- Sales Offers modülü için type tanımları eklendi

## [0.2.0] - 2025-12-09

### Added

- Complete type definitions for all modules (23 modules)
- Type definitions for Contacts module (QueryParams, IndexResponse, Response, TransactionRequest types)
- Type definitions for Sales Invoices module (QueryParams, IndexResponse, PaymentRequest, ActionResponse)
- Type definitions for Accounts module (AccountTransactionsResponse)
- Common action types (ActionResponse, PdfResponse) for shared operations
- Test infrastructure with Vitest
- Unit tests for Api class
- Unit tests for Accounts, Tags modules
- Error handling type definitions (ApiErrorResponse, ApiError)

### Changed

- **BREAKING**: Removed type exports/imports - all types are now global (via TypeScript's global type system)
- Replaced all `any` types with proper type definitions across all modules
- Added `data` parameter to all `edit` methods that were missing it
- Updated all module methods to use proper return types (ApiResponse<T>)
- Improved type safety across the entire codebase

### Fixed

- Fixed test file async import issue in parasut-api-v4.test.ts

## [0.1.1] - 2024-02-02

- Added data parameters for contacts
- Added type for definitions
