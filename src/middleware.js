import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher([
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/',
  '/posts',
  '/users(.*)',
  '/parellel-data',
  '/db-post',
  '/api/posts',
  '/api/post',
  '/db-post/(.*)',
  '/db-post/(.*)/edit',
  '/api/posts/(.*)',
  '/api/posts/(.*)/edit',
  
]);

export default clerkMiddleware(async (auth, req) => {
  // if (!isPublicRoute(req)) {
  //   await auth.protect()
  // }
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};