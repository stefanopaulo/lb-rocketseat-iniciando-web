const programmer = {
    name: 'Gustavo',
    age: 45,
    technologies: [
        { name: 'C++', specialty: 'Desktop' },
        { name: 'Python', specialty: 'Data Science' },
        { name: 'JavaScript', specialty: 'Web/Mobile' }
    ]
};

console.log(`O usuário ${programmer.name} tem ${programmer.age} e trabalha com ${programmer.technologies[2].name} com especialidade em ${programmer.technologies[2].specialty}`);
