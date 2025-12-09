import { describe, it, expect, vi, beforeEach } from 'vitest'
import ParasutApiV4 from './parasut-api-v4'

// Mock axios
vi.mock('axios')
const axios = await import('axios')
const mockedAxios = vi.mocked(axios.default)

describe('ParasutApiV4', () => {
  const mockOptions: IParasutApiV4Options = {
    firmaNo: '123456',
    email: 'test@example.com',
    password: 'password123',
    clientId: 'client123',
    clientSecret: 'secret123',
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('constructor', () => {
    it('should create instance with valid options', () => {
      const api = new ParasutApiV4(mockOptions)
      expect(api).toBeInstanceOf(ParasutApiV4)
      expect(api.options).toEqual(mockOptions)
    })

    it('should throw error if required fields are missing', () => {
      expect(() => {
        new ParasutApiV4({
          ...mockOptions,
          firmaNo: '',
        })
      }).toThrow('These fields: "firmaNo", "email", "password" are mandatory.')
    })

    it('should initialize all modules', () => {
      const api = new ParasutApiV4(mockOptions)
      expect(api.accounts).toBeDefined()
      expect(api.contacts).toBeDefined()
      expect(api.products).toBeDefined()
      expect(api.tags).toBeDefined()
      expect(api.taxes).toBeDefined()
      expect(api.categories).toBeDefined()
      expect(api.warehouses).toBeDefined()
      expect(api.transactions).toBeDefined()
      expect(api.salesInvoices).toBeDefined()
      expect(api.purchaseBills).toBeDefined()
    })
  })

  describe('me', () => {
    it('should call send with correct parameters', async () => {
      const mockTokenResponse = {
        data: {
          access_token: 'token123',
          token_type: 'bearer' as const,
          expires_in: 7200,
          refresh_token: 'refresh123',
          created_at: new Date(),
        },
      }

      const mockMeResponse = {
        data: {
          data: {
            id: '1',
            type: 'users',
            attributes: {
              name: 'Test User',
              email: 'test@example.com',
              is_confirmed: true,
            },
            relationships: {
              user_roles: { data: [] },
              companies: { data: [] },
              profile: { data: { id: '1', type: 'profiles' } },
            },
          },
          included: [],
        },
      }

      mockedAxios.mockResolvedValueOnce(mockTokenResponse).mockResolvedValueOnce(mockMeResponse)

      const api = new ParasutApiV4(mockOptions)
      const result = await api.me()

      expect(mockedAxios).toHaveBeenCalledTimes(2)
      expect(result).toEqual(mockMeResponse)
    })
  })
})
