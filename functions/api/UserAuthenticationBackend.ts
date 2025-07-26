export async function UserAuthenticationBackendHandler(req: Request): Promise<Response> {
  try {
    const { method } = req;
    if (method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405, headers: { 'Content-Type': 'application/json' } });
    }

    const contentType = req.headers.get('Content-Type');
    if (contentType !== 'application/json') {
      return new Response(JSON.stringify({ error: 'Unsupported Media Type' }), { status: 415, headers: { 'Content-Type': 'application/json' } });
    }

    const body = await req.json();
    const { username, password } = body;

    if (typeof username !== 'string' || typeof password !== 'string') {
      return new Response(JSON.stringify({ error: 'Invalid input' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }

    // Placeholder for authentication logic
    const isAuthenticated = authenticateUser(username, password);

    if (!isAuthenticated) {
      return new Response(JSON.stringify({ error: 'Invalid credentials' }), { status: 401, headers: { 'Content-Type': 'application/json' } });
    }

    return new Response(JSON.stringify({ message: 'Authentication successful' }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal Server Error', details: error.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}

function authenticateUser(username: string, password: string): boolean {
  // Placeholder: replace with actual authentication logic
  return username === 'test' && password === 'password';
}