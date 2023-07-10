import { g, auth, config } from '@grafbase/sdk'

// doctor,nurse,management
// @ts-ignore
const User = g.model('User',{
  name: g.string().length({min:2,max:20}),
  email: g.string().unique(),
  avatarUrl: g.url(),
  description: g.string().optional(),
  githubUrl: g.url().optional(),
  linkedInUrl: g.url().optional(),
  patient:g.relation(()=>Patient).list().optional(),
}).auth((rules)=>{rules.public().read()})

// @ts-ignore
const Patient = g.model('Patient',{
  name: g.string().length({min:3,max:20}),
  email: g.string().optional(),
  image:g.url(),
  status:g.string().optional(),
  category: g.string().search(),
  createdBy: g.relation(()=>User),
}).auth((rules)=>{
  rules.public().read(),
  rules.private().create().delete().update()
})

const jwt = auth.JWT({
  issuer:'grafbase',
  secret: g.env('NEXTAUTH_SECRET')
})

export default config({
  schema: g,
  auth:{
    providers:[jwt],
    rules:(rules)=> rules.private()
  }
})
