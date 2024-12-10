const users = [
  {
    id: 1,
    name: 'Person 1',
    email: 'p1@example.com',
  },
  {
    id: 2,
    name: 'Person 2',
    email: 'p2@example.com',
  },
  {
    id: 3,
    name: 'Person 3',
    email: 'p3@example.com',
  }
]

export async function GET() {
  return new Response(JSON.stringify(users), {
    headers: {
      'content-type': 'application/json'
    }
  });
}