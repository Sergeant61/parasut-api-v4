import { describe, it, expect, vi, beforeEach } from 'vitest'
import ParasutApiV4 from '../parasut-api-v4'
import Accounts from './accounts'

// Mock the parent class
vi.mock('../parasut-api-v4')

describe('Accounts', () => {
  let accounts: Accounts
  let mockParasut: any

  beforeEach(() => {
    vi.clearAllMocks()
    mockParasut = {
      options: {
        firmaNo: '123456',
      },
      send: vi.fn(),
    }
    accounts = new Accounts(mockParasut as unknown as ParasutApiV4)
  })

  describe('index', () => {
    it('should call send with correct parameters', async () => {
      const mockResponse = {
        data: {
          data: [],
          meta: { current_page: 1, total_pages: 1, total_count: 0 },
        },
      }
      mockParasut.send.mockResolvedValue(mockResponse)

      const result = await accounts.index({
        queryParams: { sort: '-balance' },
        pagination: { size: 10, limit: 1 },
      })

      expect(mockParasut.send).toHaveBeenCalledWith(
        'GET',
        '123456/accounts',
        expect.objectContaining({
          isV4: true,
          isAuth: true,
          params: { sort: '-balance' },
          pagination: { size: 10, limit: 1 },
        })
      )
      expect(result).toEqual(mockResponse)
    })
  })

  describe('create', () => {
    it('should call send with account data', async () => {
      const mockResponse = {
        data: {
          data: {
            id: '1',
            type: 'accounts',
            attributes: { name: 'Test Account' },
          },
        },
      }
      mockParasut.send.mockResolvedValue(mockResponse)

      const accountData = {
        data: {
          type: 'accounts' as const,
          attributes: {
            name: 'Test Account',
            currency: 'TRY',
          },
        },
      }

      const result = await accounts.create({
        data: accountData,
        queryParams: {},
      })

      expect(mockParasut.send).toHaveBeenCalledWith(
        'POST',
        '123456/accounts',
        expect.objectContaining({
          isV4: true,
          isAuth: true,
          data: accountData,
        })
      )
      expect(result).toEqual(mockResponse)
    })
  })

  describe('show', () => {
    it('should call send with account id', async () => {
      const mockResponse = {
        data: {
          data: {
            id: '1',
            type: 'accounts',
            attributes: { name: 'Test Account' },
          },
        },
      }
      mockParasut.send.mockResolvedValue(mockResponse)

      const result = await accounts.show('1', {
        queryParams: {},
      })

      expect(mockParasut.send).toHaveBeenCalledWith(
        'GET',
        '123456/accounts/1',
        expect.objectContaining({
          isV4: true,
          isAuth: true,
        })
      )
      expect(result).toEqual(mockResponse)
    })
  })

  describe('edit', () => {
    it('should call send with account data and id', async () => {
      const mockResponse = {
        data: {
          data: {
            id: '1',
            type: 'accounts',
            attributes: { name: 'Updated Account' },
          },
        },
      }
      mockParasut.send.mockResolvedValue(mockResponse)

      const accountData = {
        data: {
          type: 'accounts' as const,
          attributes: {
            name: 'Updated Account',
          },
        },
      }

      const result = await accounts.edit('1', {
        data: accountData,
        queryParams: {},
      })

      expect(mockParasut.send).toHaveBeenCalledWith(
        'PUT',
        '123456/accounts/1',
        expect.objectContaining({
          isV4: true,
          isAuth: true,
          data: accountData,
        })
      )
      expect(result).toEqual(mockResponse)
    })
  })

  describe('delete', () => {
    it('should call send with DELETE method', async () => {
      const mockResponse = { data: undefined }
      mockParasut.send.mockResolvedValue(mockResponse)

      const result = await accounts.delete('1', {
        queryParams: {},
      })

      expect(mockParasut.send).toHaveBeenCalledWith(
        'DELETE',
        '123456/accounts/1',
        expect.objectContaining({
          isV4: true,
          isAuth: true,
        })
      )
      expect(result).toEqual(mockResponse)
    })
  })
})
