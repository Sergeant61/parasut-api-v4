import { Api } from './api'
import Tags from './module/tags'
import Taxes from './module/taxes'
import ESmms from './module/e-smms'
import Accounts from './module/accounts'
import BankFees from './module/bank-fees'
import Contacts from './module/contacts'
import Products from './module/products'
import Salaries from './module/salaries'
import Webhooks from './module/webhooks'
import EInvoices from './module/e-invoice'
import Employees from './module/employees'
import EArchives from './module/e-archives'
import Categories from './module/categories'
import Warehouses from './module/warehouses'
import Transactions from './module/transactions'
import StockUpdates from './module/stock-updates'
import TrackableJobs from './module/trackable-jobs'
import PurchaseBills from './module/purchase-bills'
import SalesInvoices from './module/sales-invoices'
import StockMovements from './module/stock-movements'
import InventoryLevels from './module/inventory-levels'
import EInvoiceInBoxes from './module/e-invoice-in-boxes'
import ShipmentDocuments from './module/shipment-documents'

class ParasutApiV4 extends Api {
  tags: Tags
  eSmms: ESmms
  taxes: Taxes
  accounts: Accounts
  contacts: Contacts
  products: Products
  bankFees: BankFees
  salaries: Salaries
  webhooks: Webhooks
  eInvoices: EInvoices
  eArchives: EArchives
  employees: Employees
  categories: Categories
  warehouses: Warehouses
  stockUpdates: StockUpdates
  transactions: Transactions
  trackableJobs: TrackableJobs
  salesInvoices: SalesInvoices
  purchaseBills: PurchaseBills
  stockMovements: StockMovements
  eInvoiceInBoxes: EInvoiceInBoxes
  inventoryLevels: InventoryLevels
  shipmentDocuments: ShipmentDocuments

  constructor(options: IParasutApiV4Options) {
    const { baseUrl, firmaNo, email, password } = options || {}
    if (!firmaNo || !email || !password) {
      throw new Error('These fields: "firmaNo", "email", "password" are mandatory.')
    }
    super(options)

    this.tags = new Tags(this)
    this.eSmms = new ESmms(this)
    this.taxes = new Taxes(this)
    this.accounts = new Accounts(this)
    this.contacts = new Contacts(this)
    this.products = new Products(this)
    this.bankFees = new BankFees(this)
    this.salaries = new Salaries(this)
    this.webhooks = new Webhooks(this)
    this.eInvoices = new EInvoices(this)
    this.eArchives = new EArchives(this)
    this.employees = new Employees(this)
    this.categories = new Categories(this)
    this.warehouses = new Warehouses(this)
    this.stockUpdates = new StockUpdates(this)
    this.transactions = new Transactions(this)
    this.trackableJobs = new TrackableJobs(this)
    this.purchaseBills = new PurchaseBills(this)
    this.salesInvoices = new SalesInvoices(this)
    this.stockMovements = new StockMovements(this)
    this.eInvoiceInBoxes = new EInvoiceInBoxes(this)
    this.inventoryLevels = new InventoryLevels(this)
    this.shipmentDocuments = new ShipmentDocuments(this)
  }

  async me() {
    return this.send<IMe>('GET', 'me', {
      isV4: true,
      isAuth: true,
    })
  }
}

export default ParasutApiV4
