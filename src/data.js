function goTo(page) {
  window.location = page;
}

const data = {
  home: {
    header: 'Introduction',
    text: 'Hello! I\'m Gavin Liu, a graduate student at Stanford University pursuing an MS degree in Aeronautics and Astronautics.',
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
