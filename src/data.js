function goTo(page) {
  window.location = page;
}

const data = {
  home: {
    header: 'Introduction',
    text: [
      'Hello! I\'m Gavin Liu, a graduate student at Stanford University pursuing an MS degree in Aeronautics and Astronautics.',
      'I am a mechanical engineering BSE graduate passionate about space and immensely interested in launch vehicles; I aspire to reduce launch costs to enable easier access to space. I aim to complete a PhD to best prepare myself for impactful research in the space industry.',
    ],
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
      {
        header: 'Google Scholar',
        icon: 'book',
        func: () => goTo('https://scholar.google.com/citations?user=AlU1oucAAAAJ&hl=en'),
      },
    ],
  },
  contact: {
    items: [
      {
        header: 'gavin.liu@stanford.edu',
        icon: 'mail',
        func: () => goTo('mailto:gavin.liu@stanford.edu'),
      },
    ],
  },
};

export default data;
