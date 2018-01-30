const teamName = "tooling"
const people = [{name: "Jennie", role: "senior"},
                {name: "Ronald", role: "junior"},
                {name: "Martin", role: "senior"},
                {name: "Anneli", role: "junior"}]

let message = `There are ${people.length} on the ${teamName} team.
Their names are ${people[0].name}, ${people[1].name}, ${people[2].name}, ${people[3].name}.
${people.filter((p) => p.role == "senior").length} of them have a senior role.`

console.log(message)
