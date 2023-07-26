export class UnderConstructionError extends Error {
  constructor(message = 'Maaf halaman ini masih dalam tahap pengembangan') {
    super(message);
    this.name = 'UnderConstructionError';
  }
}
