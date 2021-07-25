import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({
    nav: {
      items: ['обо мне', 'менторство', 'работы'],
      link: ['/about', '/consult', '#works']
    },
    intro: {
      greeting: 'привет, меня зовут Евгений',
      title: 'я фрилансер, веб-разработчик',
      sub: 'разрабатываю веб-сайты более четырех лет, за плечами большой опыт в разработке, а также в обучении верстке сайтов.',
      links: [{
        name: 'telegram',
        link: 'https://t.me/dsxxxx',
        color: '#0088cc'
      }, {
        name: 'vk',
        link: 'https://vk.com/evgeniy_vronskiy',
        color: '#4C75A3'
      }, {
        name: 'github',
        link: 'https://github.com/qxie11',
        color: '#333333'
      }]
    },
    projects: [
      {
        title: 'пользовательский сайт',
        subtitle: 'kinderheldin',
        img: '/images/backgrounds/kinderheldin.jpg',
        url: 'https://kinderheldin.de/',
      },
      {
        title: 'корпоротивный сайт',
        subtitle: 'faifly',
        img: '/images/backgrounds/faifly.jpg',
        url: 'https://faifly.com/',
      },
      {
        title: 'пользовательский сайт',
        subtitle: 'lieferando',
        img: '/images/backgrounds/lieferando.jpg',
        url: 'https://www.lieferando.de/',
      },
      {
        title: 'пользовательский сайт',
        subtitle: 'stpierre-bru',
        img: '/images/backgrounds/stpierre.jpg',
        url: 'https://www.stpierre-bru.be/',
      },
    ],
  })
}
