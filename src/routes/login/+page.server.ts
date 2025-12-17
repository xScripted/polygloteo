// src/routes/login/+page.server.ts
import { redirect } from '@sveltejs/kit'

export const load = ({ locals }) => {
  if (locals.user) {
    throw redirect(303, '/app')
  }
}
