import {TfiTwitterAlt} from 'react-icons/tfi'

const member1 = require('../images/team1.svg').default
const member2 = require('../images/team2.svg').default

export const TeamData = {
    number: "04",
    title: "Meet the Team",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis nihil dignissimos assumenda . Eum, maiores!",
    Members: [
        {
            title: 'CD',
            icon: <TfiTwitterAlt size={30} />,
            link: 'https://twitter.com',
            stack: 'Designer + Front-End',
            image: member1
        },
        {
            title: 'KD',
            icon: <TfiTwitterAlt size={30} />,
            link: 'https://twitter.com',
            stack: 'Code + Development',
            image: member2
        }
    ]
  };
  