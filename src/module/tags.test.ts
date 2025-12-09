import { describe, it, expect, vi, beforeEach } from 'vitest'
import ParasutApiV4 from '../parasut-api-v4'
import Tags from './tags'

describe('Tags', () => {
  let tags: Tags
  let mockParasut: any

  beforeEach(() => {
    vi.clearAllMocks()
    mockParasut = {
      options: {
        firmaNo: '123456',
      },
      send: vi.fn(),
    }
    tags = new Tags(mockParasut as unknown as ParasutApiV4)
  })

  describe('index', () => {
    it('should call send with correct parameters', async () => {
      const mockResponse = {
        data: {
          data: [
            {
              id: '1',
              type: 'tags',
              attributes: { name: 'Tag 1' },
            },
          ],
        },
      }
      mockParasut.send.mockResolvedValue(mockResponse)

      const result = await tags.index({
        queryParams: {},
        pagination: { size: 10, limit: 1 },
      })

      expect(mockParasut.send).toHaveBeenCalledWith(
        'GET',
        '123456/tags',
        expect.objectContaining({
          isV4: true,
          isAuth: true,
          pagination: { size: 10, limit: 1 },
        })
      )
      expect(result).toEqual(mockResponse)
    })
  })

  describe('create', () => {
    it('should call send with tag data', async () => {
      const mockResponse = {
        data: {
          data: {
            id: '1',
            type: 'tags',
            attributes: { name: 'New Tag' },
          },
        },
      }
      mockParasut.send.mockResolvedValue(mockResponse)

      const tagData = {
        data: {
          type: 'tags' as const,
          attributes: {
            name: 'New Tag',
          },
        },
      }

      const result = await tags.create({
        data: tagData,
        queryParams: {},
      })

      expect(mockParasut.send).toHaveBeenCalledWith(
        'POST',
        '123456/tags',
        expect.objectContaining({
          isV4: true,
          isAuth: true,
          data: tagData,
        })
      )
      expect(result).toEqual(mockResponse)
    })
  })

  describe('edit', () => {
    it('should call send with tag data and id', async () => {
      const mockResponse = {
        data: {
          data: {
            id: '1',
            type: 'tags',
            attributes: { name: 'Updated Tag' },
          },
        },
      }
      mockParasut.send.mockResolvedValue(mockResponse)

      const tagData = {
        data: {
          type: 'tags' as const,
          attributes: {
            name: 'Updated Tag',
          },
        },
      }

      const result = await tags.edit('1', {
        data: tagData,
        queryParams: {},
      })

      expect(mockParasut.send).toHaveBeenCalledWith(
        'PUT',
        '123456/tags/1',
        expect.objectContaining({
          isV4: true,
          isAuth: true,
          data: tagData,
        })
      )
      expect(result).toEqual(mockResponse)
    })
  })

  describe('delete', () => {
    it('should call send with DELETE method', async () => {
      const mockResponse = { data: undefined }
      mockParasut.send.mockResolvedValue(mockResponse)

      const result = await tags.delete('1', {
        queryParams: {},
      })

      expect(mockParasut.send).toHaveBeenCalledWith(
        'DELETE',
        '123456/tags/1',
        expect.objectContaining({
          isV4: true,
          isAuth: true,
        })
      )
      expect(result).toEqual(mockResponse)
    })
  })
})
