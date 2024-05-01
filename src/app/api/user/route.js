const users = [
  {
    id: 1,
    name: 'Kathy Schwarz',
    email: 'kathy@example.com',
  },
  {
    id: 2,
    name: 'Joshua Bunt',
    email: 'joshua@example.com',
  },
  {
    id: 3,
    name: 'Denise Muller',
    email: 'denise@example.com',
  }
]

export async function GET() {
  return new Response(JSON.stringify(users), {
    headers: {
      'content-type': 'application/json'
    }
  });
}