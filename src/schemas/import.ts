import * as z from "zod"

export const importSchema = z.object({
    url: z.url()
})

export const bulkImportSchema = z.object({
    url: z.url(),
    search: z.string()
})

export const bulkImportFields = [
  {
    name: 'url',
    label: 'URL',
    placeholder: 'https://tanstack.com/start/latest',
  },
  {
    name: 'search',
    label: 'Filter (Optional)',
    placeholder: 'e.g. Blog, docs, tutorial',
  },
] as const