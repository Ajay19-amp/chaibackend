require('dotenv').config()

const express = require('express')

const app = express()
const port = 4000
const githubData ={
    "login": "Ajay19-amp",
    "id": 132136871,
    "node_id": "U_kgDOB-A_pw",
    "avatar_url": "https://avatars.githubusercontent.com/u/132136871?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Ajay19-amp",
    "html_url": "https://github.com/Ajay19-amp",
    "followers_url": "https://api.github.com/users/Ajay19-amp/followers",
    "following_url": "https://api.github.com/users/Ajay19-amp/following{/other_user}",
    "gists_url": "https://api.github.com/users/Ajay19-amp/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Ajay19-amp/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Ajay19-amp/subscriptions",
    "organizations_url": "https://api.github.com/users/Ajay19-amp/orgs",
    "repos_url": "https://api.github.com/users/Ajay19-amp/repos",
    "events_url": "https://api.github.com/users/Ajay19-amp/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Ajay19-amp/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 1,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2023-04-29T10:28:32Z",
    "updated_at": "2024-11-04T06:50:34Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('ajaykumar19uk@gmail.com')
})
app.get('/login',(req,res)=>{
    res.send('please login on twitter link')
})
app.get('/youtube',(rqe,res)=>{
    res.send('<h2> chai deploy</h2>')
})
app.get('/github',(req,res)=>{
    res.json(githubData)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})