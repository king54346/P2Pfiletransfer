import { UploadedFile } from './types'

const getAsFile = (entry: any): Promise<File> =>
  new Promise((resolve, reject) => {
    entry.file((file: UploadedFile) => {
      file.entryFullPath = entry.fullPath
      resolve(file)
    }, reject)
  })

const readDirectoryEntries = (reader: any): Promise<any[]> =>
  new Promise((resolve, reject) => {
    reader.readEntries((entries) => {
      resolve(entries)
    }, reject)
  })

const scanDirectoryEntry = async (entry: any): Promise<File[]> => {
  const directoryReader = entry.createReader()
  const result: File[] = []
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const subentries = await readDirectoryEntries(directoryReader)
    if (!subentries.length) {
      return result
    }

    for (const se of subentries) {
      if (se.isDirectory) {
        const ses = await scanDirectoryEntry(se)
        result.push(...ses)
      } else {
        const file = await getAsFile(se)
        result.push(file)
      }
    }
  }
}

// Borrowed from StackOverflow
// http://stackoverflow.com/questions/15900485/correct-way-to-convert-size-in-bytes-to-kb-mb-gb-in-javascript
export const formatSize = (bytes: number): string => {
  if (bytes === 0) {
    return '0 Bytes'
  }
  const k = 1000
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return `${(bytes / Math.pow(k, i)).toPrecision(3)} ${sizes[i]}`
}

export const getFileName = (file: UploadedFile): string => {
  return file.name ?? file.entryFullPath ?? ''
}
