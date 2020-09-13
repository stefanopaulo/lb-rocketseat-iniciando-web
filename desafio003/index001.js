const users = [
    { name: 'Carlos', technologies: ['HTML', 'CSS'] },
    { name: 'Jasmine', technologies: ['JavaScript', 'CSS'] },
    { name: 'Tuane', technologies: ['HTML', 'Node.js'] }
];


function checkCss(user) {
    return user.technologies.indexOf('CSS');
}

for (let u of users) {
    const userWorksCss = checkCss(u);

    if (userWorksCss !== -1) console.log(`O programador ${u.name} trabalha com CSS`);
}
