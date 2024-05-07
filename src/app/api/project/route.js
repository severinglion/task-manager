import {db} from '@/model/db/db';

export async function GET () {
  try {
    const listing = await this.db('projects')
      .select()
      .limit(100);
    console.log('listing', listing)
    return new Response(JSON.stringify(listing))
  } catch (e) {
    console.error('Database error', {cause: e});
  }
}

// Create a new project
export async function POST (formData) {
  
}