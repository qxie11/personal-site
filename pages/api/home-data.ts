import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({
    nav: {
      items: ['обо мне', 'менторство', 'работы'],
      link: ['/about', '/consult', '#works']
    },
    intro: {
      greeting: 'привет, меня зовут Евгений',
      title: 'я ментор, веб-разработчик',
      sub: 'разрабатываю веб-сайты более трех лет, за плечами большой опыт в разработке, а также в обучении верстке сайтов.',
      links: [{
        name: 'telegram',
        link: 'https://t.me/dsxxxx',
      }, {
        name: 'vk',
        link: 'https://vk.com/ponomarevevgeniy',
      }, {
        name: 'github',
        link: 'https://github.com/qxie11',
      }]
    }
  })
}
