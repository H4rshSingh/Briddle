import { g, auth, config } from '@grafbase/sdk'

const User = g.model('User',{
  name: g.string().length({ min: 3, max: 20 }),
  email: g.string().unique(),
  avatarUrl: g.string(),
  description : g.string().optional(),
  githubUrl : g.url().optional(),
  linkedinUrl : g.url().optional(),
  projects: g.relation(()=> Project).list().optional(),
})

const Project = g.model('Project',{
  name: g.string().length({ min: 3, max: 20 }),
  description: g.string(),
  image: g.url(),
  liveSiteUrl: g.url(),
  githubUrl: g.url(),
  category : g.string().search(),
  createdBy: g.relation(()=>User),
});

export default config({
  schema: g
})
