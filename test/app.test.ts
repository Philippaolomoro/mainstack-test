import request from "supertest";
import app from "../source/app";


describe('Basic Server Tests', () => {
  it('responds with status 200', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });

  it('responds with "Server Ready!"', async () => {
    const response = await request(app).get('/');
    expect(response.text).toEqual('Server ready!');
  });
});

