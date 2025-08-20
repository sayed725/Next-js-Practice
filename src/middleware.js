import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';



const isProtectedRoute = createRouteMatcher([

  '/dashboard(.*)',
  '/forum(.*)',
 
])

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

  if(isProtectedRoute(req)) await auth.protect();




  // if (!isPublicRoute(req)) {
  //   await auth.protect()
  // }
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};