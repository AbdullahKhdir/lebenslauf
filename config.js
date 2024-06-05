module.exports = {
  siteTitle: 'Lebenslauf',
  manifestName: 'Lebenslauf',
  manifestShortName: 'Landing',
  manifestStartUrl: '/',
  manifestBackgroundColor: '#b8b8b8',
  manifestThemeColor: '#0049bf',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/img/website-icon.png',
  pathPrefix: `/lebenslauf`,
  firstName: 'Abdullah',
  lastName: 'Khdir',
  socialLinks: [
    {
      icon: 'fa-github',
      name: 'Github',
      url: 'https://github.com/AbdullahKhdir',
    }
  ],
  getEmail: function() {
    return 'abdullahkhder77@gmail.com'
  },
  getPhone: function() {
    return '+49-1577 1191 488';
  },
  getAddress: function() {
    return 'DL, Deutschland, Nürnberg';
  },
  calculateAge: function(birthDateStr) {
    let birthDate = new Date(birthDateStr);
    let today     = new Date();
    let age       = today.getFullYear() - birthDate.getFullYear();
    let monthDiff = today.getMonth() - birthDate.getMonth();
    let dayDiff   = today.getDate() - birthDate.getDate();
  
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    return age;
  }
};
