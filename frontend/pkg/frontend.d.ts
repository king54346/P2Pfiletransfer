/* tslint:disable */
/* eslint-disable */
export function compress(data: Uint8Array, algorithm: CompressionAlgorithm): Uint8Array;
export function decompress(data: Uint8Array, algorithm: CompressionAlgorithm): Uint8Array;
export function compress_with_options(data: Uint8Array, algorithm: CompressionAlgorithm, options: CompressionOptions): Uint8Array;
export function handle_file_upload(file: File, algorithm: CompressionAlgorithm): void;
export function greet(name: string): void;
export enum CompressionAlgorithm {
  Gzip = 0,
  Zstd = 1,
  Snappy = 2,
  Lz4 = 3,
}
export class CompressionOptions {
  free(): void;
  constructor();
  static with_level(level: number): CompressionOptions;
}
