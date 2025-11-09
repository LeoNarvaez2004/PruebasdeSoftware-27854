const request = require('supertest');
const app = require('../src/app'); 

describe('User API - CRUD Operations', () => {
    let userId;

    // Prueba que GET devuelve una lista vacía inicialmente
    test('GET /api/users should return an empty list initially', async () => {
        const response = await request(app).get('/api/users');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual([]);
    });

    // Prueba que POST crea un nuevo usuario correctamente
    test('POST /api/users should create a new user', async () => {
        const newUser = { name: 'Leo', email: 'leo@example.com' };
        const response = await request(app).post('/api/users').send(newUser);
        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('id');
        expect(response.body.name).toBe('Leo');
        expect(response.body.email).toBe('leo@example.com');
        
        // Guardar el ID para las siguientes pruebas
        userId = response.body.id;
    });
    // Prueba GET de un usuario específico por ID
    test('GET /api/users/:id should return a user by ID', async () => {
        const response = await request(app).get(`/api/users/${userId}`);
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('id', userId);
        expect(response.body.name).toBe('Leo');
        expect(response.body.email).toBe('leo@example.com');
    });

    // Prueba que el ENDPOINT rechaza las peticiones inválidas
    test('POST /api/users should fail if data is incomplete', async () => {
        const res = await request(app).post('/api/users').send({ name: 'Vinicius' });
        expect(res.statusCode).toBe(400);
        expect(res.body).toHaveProperty('message', 'Name and email are required');
    });

    // Prueba de flujo completo: POST y luego verificar GET /users
    test('GET /api/users should return all users after creation', async () => {
        // Crear un segundo usuario
        const newUser2 = { name: 'Cristiano', email: 'cr7@example.com' };
        await request(app).post('/api/users').send(newUser2);

        // Verificar que GET /users devuelve todos los usuarios
        const response = await request(app).get('/api/users');
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
        expect(response.body.length).toBeGreaterThanOrEqual(2); // Al menos 2 usuarios
        
        // Verificar que contiene el primer usuario creado
        const leoUser = response.body.find(u => u.name === 'Leo');
        expect(leoUser).toBeDefined();
        expect(leoUser.email).toBe('leo@example.com');
        
        // Verificar que contiene el segundo usuario
        const cr7User = response.body.find(u => u.name === 'Cristiano');
        expect(cr7User).toBeDefined();
        expect(cr7User.email).toBe('cr7@example.com');
    });

    // Prueba GET de un usuario que no existe
    test('GET /api/users/:id should return 404 if user not found', async () => {
        const response = await request(app).get('/api/users/999999');
        expect(response.statusCode).toBe(404);
        expect(response.body).toHaveProperty('message', 'User not found');
    });

    // Prueba de endpoint no válido (404)
    test('GET /api/invalid should return 404 for non-existent route', async () => {
        const response = await request(app).get('/api/invalid');
        expect(response.statusCode).toBe(404);
        expect(response.body).toHaveProperty('message', 'Route not found');
    });
});