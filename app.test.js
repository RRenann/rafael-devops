const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
  it('deve retornar a mensagem "Olá Mundo DevOps"', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Olá Mundo DevOps');
  });
});
