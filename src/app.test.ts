import request from 'supertest';
import app from './app';

describe('Example Test', () => {
  it('should get a welcome message', async () => {
    const res = await request(app).get('/hello');
    expect(res.status).toEqual(200);
    expect(res.text).toContain('how are you?');
  });
});
