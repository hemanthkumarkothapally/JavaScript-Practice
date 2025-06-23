let input=
[
{ "team": { "members": [{ "email": "a@x.com" }] } },
{ "team": { "members": [{ "email": "c@y.com" }] } }
];
console.log(input.map(item=> {return item.team.members[0].email}))
console.log(input.map(item=> {return item.team.members.flatMap(items=>items.email)}))