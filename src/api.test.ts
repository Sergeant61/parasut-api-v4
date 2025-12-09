import { describe, it, expect, vi, beforeEach } from 'vitest'
import axios from 'axios'
import { Api } from './api'

// Mock axios
vi.mock('axios')
const mockedAxios = vi.mocked(axios)

describe('Api', () => {
  let api: Api
  const mockOptions: IParasutApiV4Options = {
    firmaNo: '123456',
    email: 'test@example.com',
    password: 'password123',
    clientId: 'client123',
    clientSecret: 'secret123',
  }

  beforeEach(() => {
    vi.clearAllMocks()
    api = new Api(mockOptions)
  })

  describe('send', () => {
    it('should make a GET request without auth', async () => {
      const mockResponse = { data: { success: true } }
      mockedAxios.mockResolvedValue(mockResponse)

      const result = await api.send('GET', 'test', {
        isV4: false,
        isAuth: false,
      })

      expect(mockedAxios).toHaveBeenCalledWith(
        expect.objectContaining({
          method: 'GET',
          url: 'https://api.parasut.com/v4//test',
        })
      )
      expect(result).toEqual(mockResponse)
    })

    it('should make a POST request with auth', async () => {
      const mockTokenResponse = {
        data: {
          access_token: 'token123',
          token_type: 'bearer' as const,
          expires_in: 7200,
          refresh_token: 'refresh123',
          created_at: new Date(),
        },
      }

      const mockApiResponse = { data: { success: true } }

      mockedAxios.mockResolvedValueOnce(mockTokenResponse).mockResolvedValueOnce(mockApiResponse)

      const result = await api.send('POST', 'test', {
        isV4: true,
        isAuth: true,
        data: { test: 'data' },
      })

      expect(mockedAxios).toHaveBeenCalledTimes(2)
      expect(result).toEqual(mockApiResponse)
    })

    it('should include pagination params', async () => {
      const mockResponse = { data: { success: true } }
      mockedAxios.mockResolvedValue(mockResponse)

      await api.send('GET', 'test', {
        isV4: true,
        isAuth: false,
        pagination: { size: 10, limit: 1 },
      })

      expect(mockedAxios).toHaveBeenCalledWith(
        expect.objectContaining({
          params: expect.objectContaining({
            size: 10,
            limit: 1,
          }),
        })
      )
    })

    it('should reuse token if not expired', async () => {
      const mockTokenResponse = {
        data: {
          access_token: 'token123',
          token_type: 'bearer' as const,
          expires_in: 7200,
          refresh_token: 'refresh123',
          created_at: new Date(),
        },
      }

      const mockApiResponse = { data: { success: true } }

      mockedAxios.mockResolvedValueOnce(mockTokenResponse).mockResolvedValueOnce(mockApiResponse).mockResolvedValueOnce(mockApiResponse)

      // First call - should get token
      await api.send('GET', 'test1', {
        isV4: true,
        isAuth: true,
      })

      // Second call - should reuse token
      await api.send('GET', 'test2', {
        isV4: true,
        isAuth: true,
      })

      // Should only call token endpoint once
      expect(mockedAxios).toHaveBeenCalledTimes(3) // 1 token + 2 API calls
    })
  })
})
