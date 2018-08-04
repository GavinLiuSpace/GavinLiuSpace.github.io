function goTo(page) {
  window.location = page;
}

const data = {
  home: {
    header: 'Gavin Liu',
    text: 'Hello. I\'m Gavin Liu, a graduate student at Standford University pursuing an MS-PhD degree in Aerospace.',
  },
  about: {
    items: [
      {
        header: 'Resume',
        icon: 'description',
        func: () => goTo('resume.pdf'),
      },
      {
        header: 'LinkedIn',
        icon: 'account_box',
        func: () => goTo('https://www.linkedin.com/in/gavinliu06/'),
      },
    ],
  },
  contact: {
    items: [
      {
        header: 'gavinliu06@gmail.com',
        icon: 'mail',
        func: () => goTo('mailto:gavinliu06@gmail.com'),
      },
    ],
  },
};

export default data;
