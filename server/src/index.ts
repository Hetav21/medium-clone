import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { UserSchema } from './schemas/User'
import { user as userType } from './types/User'
import { ApiResponse } from './types/ApiResponse'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import bcrypt from "bcryptjs"
import { decode, sign, verify } from 'hono/jwt'
import signupRouter from "./routes/signup"
import signinRouter from "./routes/signin"
import blogRouter from "./routes/blog"

const app = new Hono();

app.use('/api/*', cors())

app.all('/', (c) => {
  return c.text('Hello World');  
})

app.route('/api/v1/user/signup', signupRouter);

app.route('/api/v1/user/signin', signinRouter);

app.route('/api/v1/blog', blogRouter);

export default app