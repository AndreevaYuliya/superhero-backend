import request from 'supertest';
import app, { server } from '../src/app';

afterAll((done) => {
	server.close(done);
});

describe('Superhero API (Batman flow)', () => {
	let heroId: number;

	it('should create Batman', async () => {
		const res = await request(app)
			.post('/api/heroes')
			.field('nickname', 'Batman')
			.field('real_name', 'Bruce Wayne');

		expect(res.status).toBe(201);
		expect(res.body.nickname).toBe('Batman');
		expect(res.body.real_name).toBe('Bruce Wayne');

		heroId = res.body.id;
	});

	it('should list superheroes including Batman', async () => {
		const res = await request(app).get('/api/heroes?limit=5&offset=0');

		expect(res.status).toBe(200);
		expect(Array.isArray(res.body.items)).toBe(true);
		expect(res.body.items.some((h: any) => h.nickname === 'Batman')).toBe(true);
	});

	it('should get Batman details', async () => {
		const res = await request(app).get(`/api/heroes/${heroId}`);

		expect(res.status).toBe(200);
		expect(res.body.nickname).toBe('Batman');
		expect(res.body.real_name).toBe('Bruce Wayne');
	});

	it('should update Batman to Dark Knight', async () => {
		const updated = {
			nickname: 'The Dark Knight',
			real_name: 'Bruce Wayne',
		};

		const res = await request(app)
			.put(`/api/heroes/${heroId}`)
			.field('nickname', updated.nickname)
			.field('real_name', updated.real_name);

		expect(res.status).toBe(200);
		expect(res.body.nickname).toBe('The Dark Knight');
	});

	it('should delete Batman', async () => {
		const res = await request(app).delete(`/api/heroes/${heroId}`);

		expect(res.status).toBe(204);
	});
});
