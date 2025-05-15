/* tslint:disable */
/* eslint-disable */
export function handle_file_upload(file: File, algorithm: CompressionAlgorithm): void;
export function greet(name: string): void;
export enum CompressionAlgorithm {
  Gzip = 0,
  Zstd = 1,
  Snappy = 2,
  Lz4 = 3,
}
