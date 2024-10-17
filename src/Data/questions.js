const preguntasRespuestas = {
    easy: [
        {
            question: 'What is the capital of France?',
            options: [
                { id: 1, text: 'Paris' },
                { id: 2, text: 'London' },
                { id: 3, text: 'Madrid' },
                { id: 4, text: 'Rome' },
                { id: 5, text: 'Berlin' },
                { id: 6, text: 'Brussels' }
            ],
            correctOptionId: 1
        },
        {
            question: 'Which planet of our solar system is the biggest?',
            options: [
                { id: 1, text: 'Mars' },
                { id: 2, text: 'Jupiter' },
                { id: 3, text: 'Saturn' },
                { id: 4, text: 'Neptune' },
                { id: 5, text: 'Uranus' },
                { id: 6, text: 'Venus' }
            ],
            correctOptionId: 2
        },
        {
            question: 'What gas do we mainly breathe?',
            options: [
                { id: 1, text: 'Oxygen' },
                { id: 2, text: 'Nitrogen' },
                { id: 3, text: 'Carbon dioxide' },
                { id: 4, text: 'Hydrogen' },
                { id: 5, text: 'Helium' },
                { id: 6, text: 'Methane' }
            ],
            correctOptionId: 2
        },
        {
            question: 'On what day is Christmas celebrated?',
            options: [
                { id: 1, text: 'December 31st' },
                { id: 2, text: 'December 25th' },
                { id: 3, text: 'August 15th' },
                { id: 4, text: 'January 1st' },
                { id: 5, text: 'February 14th' },
                { id: 6, text: 'January 6th' }
            ],
            correctOptionId: 2
        },
        {
            question: 'Which is the largest ocean in the world?',
            options: [
                { id: 1, text: 'Atlantic Ocean' },
                { id: 2, text: 'Indian Ocean' },
                { id: 3, text: 'Pacific Ocean' },
                { id: 4, text: 'Arctic Ocean' },
                { id: 5, text: 'Southern Ocean' },
                { id: 6, text: 'Caribbean Sea' }
            ],
            correctOptionId: 3
        },
        {
            question: 'Which musical instrument has black and white keys?',
            options: [
                { id: 1, text: 'Guitar' },
                { id: 2, text: 'Violin' },
                { id: 3, text: 'Piano' },
                { id: 4, text: 'Trumpet' },
                { id: 5, text: 'Flute' },
                { id: 6, text: 'Drums' }
            ],
            correctOptionId: 3
        },
        {
            question: 'What is the fastest animal in the world?',
            options: [
                { id: 1, text: 'Lion' },
                { id: 2, text: 'Cheetah' },
                { id: 3, text: 'Eagle' },
                { id: 4, text: 'Shark' },
                { id: 5, text: 'Dolphin' },
                { id: 6, text: 'Elephant' }
            ],
            correctOptionId: 2
        },
        {
            question: 'Which is the lightest metal?',
            options: [
                { id: 1, text: 'Lead' },
                { id: 2, text: 'Copper' },
                { id: 3, text: 'Gold' },
                { id: 4, text: 'Lithium' },
                { id: 5, text: 'Iron' },
                { id: 6, text: 'Aluminum' }
            ],
            correctOptionId: 4
        },
        {
            question: 'Which sport is played with a ball and a bat?',
            options: [
                { id: 1, text: 'Soccer' },
                { id: 2, text: 'Tennis' },
                { id: 3, text: 'Golf' },
                { id: 4, text: 'Baseball' },
                { id: 5, text: 'Basketball' },
                { id: 6, text: 'Volleyball' }
            ],
            correctOptionId: 4
        },
        {
            question: 'What color do you get when you mix red and yellow?',
            options: [
                { id: 1, text: 'Orange' },
                { id: 2, text: 'Green' },
                { id: 3, text: 'Purple' },
                { id: 4, text: 'Blue' },
                { id: 5, text: 'White' },
                { id: 6, text: 'Black' }
            ],
            correctOptionId: 1
        }
    ],
    medium: [
        {
            question: 'In what year did man land on the moon?',
            options: [
                { id: 1, text: '1965' },
                { id: 2, text: '1969' },
                { id: 3, text: '1972' },
                { id: 4, text: '1980' },
                { id: 5, text: '1970' },
                { id: 6, text: '1975' }
            ],
            correctOptionId: 2
        },
        {
            question: 'What is the formula for water?',
            options: [
                { id: 1, text: 'CO2' },
                { id: 2, text: 'H2O' },
                { id: 3, text: 'O2' },
                { id: 4, text: 'NaCl' },
                { id: 5, text: 'CH4' },
                { id: 6, text: 'HCl' }
            ],
            correctOptionId: 2
        },
        {
            question: 'What blood type is the universal donor?',
            options: [
                { id: 1, text: 'A+' },
                { id: 2, text: 'O-' },
                { id: 3, text: 'AB+' },
                { id: 4, text: 'B-' },
                { id: 5, text: 'O+' },
                { id: 6, text: 'A-' }
            ],
            correctOptionId: 2
        },
        {
            question: 'What is the most abundant element in the universe?',
            options: [
                { id: 1, text: 'Oxygen' },
                { id: 2, text: 'Hydrogen' },
                { id: 3, text: 'Helium' },
                { id: 4, text: 'Carbon' },
                { id: 5, text: 'Nitrogen' },
                { id: 6, text: 'Lithium' }
            ],
            correctOptionId: 2
        },
        {
            question: 'What is the largest organ in the human body?',
            options: [
                { id: 1, text: 'Lungs' },
                { id: 2, text: 'Heart' },
                { id: 3, text: 'Brain' },
                { id: 4, text: 'Liver' },
                { id: 5, text: 'Skin' },
                { id: 6, text: 'Kidneys' }
            ],
            correctOptionId: 5
        },
        {
            question: 'Who painted "The Last Supper"?',
            options: [
                { id: 1, text: 'Pablo Picasso' },
                { id: 2, text: 'Vincent van Gogh' },
                { id: 3, text: 'Claude Monet' },
                { id: 4, text: 'Leonardo da Vinci' },
                { id: 5, text: 'Salvador Dalí' },
                { id: 6, text: 'Michelangelo' }
            ],
            correctOptionId: 4
        },
        {
            question: 'What programming language is used for front-end web development?',
            options: [
                { id: 1, text: 'Python' },
                { id: 2, text: 'C++' },
                { id: 3, text: 'Java' },
                { id: 4, text: 'JavaScript' },
                { id: 5, text: 'Swift' },
                { id: 6, text: 'R' }
            ],
            correctOptionId: 4
        },
        {
            question: 'Which country has the most pyramids in the world?',
            options: [
                { id: 1, text: 'Egypt' },
                { id: 2, text: 'Mexico' },
                { id: 3, text: 'Sudan' },
                { id: 4, text: 'Peru' },
                { id: 5, text: 'China' },
                { id: 6, text: 'India' }
            ],
            correctOptionId: 3
        },
        {
            question: 'What is the speed of light?',
            options: [
                { id: 1, text: '300,000 km/s' },
                { id: 2, text: '150,000 km/s' },
                { id: 3, text: '450,000 km/s' },
                { id: 4, text: '600,000 km/s' },
                { id: 5, text: '200,000 km/s' },
                { id: 6, text: '100,000 km/s' }
            ],
            correctOptionId: 1
        },
        {
            question: 'In which country is the Eiffel Tower located?',
            options: [
                { id: 1, text: 'Spain' },
                { id: 2, text: 'Italy' },
                { id: 3, text: 'France' },
                { id: 4, text: 'United Kingdom' },
                { id: 5, text: 'United States' },
                { id: 6, text: 'Germany' }
            ],
            correctOptionId: 3
        }
    ],
    hard: [
        {
            question: 'Who developed the theory of relativity?',
            options: [
                { id: 1, text: 'Isaac Newton' },
                { id: 2, text: 'Galileo Galilei' },
                { id: 3, text: 'Albert Einstein' },
                { id: 4, text: 'Nikola Tesla' },
                { id: 5, text: 'Stephen Hawking' },
                { id: 6, text: 'Max Planck' }
            ],
            correctOptionId: 3
        },
        {
            question: 'What subatomic particle has a negative charge?',
            options: [
                { id: 1, text: 'Protons' },
                { id: 2, text: 'Neutrons' },
                { id: 3, text: 'Electrons' },
                { id: 4, text: 'Photons' },
                { id: 5, text: 'Quarks' },
                { id: 6, text: 'Gluons' }
            ],
            correctOptionId: 3
        },
        {
            question: 'What is the most famous equation in physics?',
            options: [
                { id: 1, text: 'F = ma' },
                { id: 2, text: 'E = mc²' },
                { id: 3, text: 'pV = nRT' },
                { id: 4, text: 'F = Gm₁m₂/r²' },
                { id: 5, text: 'V = IR' },
                { id: 6, text: 'a² + b² = c²' }
            ],
            correctOptionId: 2
        },
        {
            question: 'Which scientist is considered the father of genetics?',
            options: [
                { id: 1, text: 'Charles Darwin' },
                { id: 2, text: 'Gregor Mendel' },
                { id: 3, text: 'Louis Pasteur' },
                { id: 4, text: 'James Watson' },
                { id: 5, text: 'Francis Crick' },
                { id: 6, text: 'Rosalind Franklin' }
            ],
            correctOptionId: 2
        },
        {
            question: 'What is the Higgs boson?',
            options: [
                { id: 1, text: 'A theoretical particle' },
                { id: 2, text: 'A gravitational wave' },
                { id: 3, text: 'An electromagnetic field' },
                { id: 4, text: 'A theory of everything' },
                { id: 5, text: 'A subatomic particle' },
                { id: 6, text: 'A scientific experiment' }
            ],
            correctOptionId: 5
        },
        {
            question: 'In which galaxy is Earth located?',
            options: [
                { id: 1, text: 'Andromeda Galaxy' },
                { id: 2, text: 'Milky Way' },
                { id: 3, text: 'Triangulum Galaxy' },
                { id: 4, text: 'Sagittarius Galaxy' },
                { id: 5, text: 'Sombrero Galaxy' },
                { id: 6, text: 'Cup Galaxy' }
            ],
            correctOptionId: 2
        },
        {
            question: 'What type of energy does a nuclear power plant use?',
            options: [
                { id: 1, text: 'Wind energy' },
                { id: 2, text: 'Solar energy' },
                { id: 3, text: 'Nuclear energy' },
                { id: 4, text: 'Hydraulic energy' },
                { id: 5, text: 'Geothermal energy' },
                { id: 6, text: 'Biomass energy' }
            ],
            correctOptionId: 3
        },
        {
            question: 'What is the most spoken language in the world?',
            options: [
                { id: 1, text: 'English' },
                { id: 2, text: 'Spanish' },
                { id: 3, text: 'Mandarin Chinese' },
                { id: 4, text: 'Arabic' },
                { id: 5, text: 'Hindi' },
                { id: 6, text: 'French' }
            ],
            correctOptionId: 3
        },
        {
            question: 'What is the largest animal in the world?',
            options: [
                { id: 1, text: 'Elephant' },
                { id: 2, text: 'Blue whale' },
                { id: 3, text: 'Giraffe' },
                { id: 4, text: 'Great white shark' },
                { id: 5, text: 'Polar bear' },
                { id: 6, text: 'Crocodile' }
            ],
            correctOptionId: 2
        },
        {
            question: 'What is the most expensive metal in the world?',
            options: [
                { id: 1, text: 'Gold' },
                { id: 2, text: 'Platinum' },
                { id: 3, text: 'Rhodium' },
                { id: 4, text: 'Palladium' },
                { id: 5, text: 'Silver' },
                { id: 6, text: 'Copper' }
            ],
            correctOptionId: 3
        }
    ]
};

export default preguntasRespuestas;
