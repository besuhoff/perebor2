import whoshoe from './project/whoshoe/en';
import justprivat from './project/justprivat/en';
import fmg from './project/fmg/en';
import peopleinbusiness from './project/peopleinbusiness/en';

const locale: Locale = {
  base: {
    header: ['Perebor Studio', '*'],
    archived: 'The project is archived',
    projects: 'Studio projects',
  },
  portfolio: {
    whatWeDo: 'Creating websites, e-commerce shops, promo pages, intranet apps, mobile apps, logos, corporate identities and stuff:',
    perebor: ['“', 'Perebor Studio', '”&nbsp;— the web studio site (combo! Shoemaker goes in boots!)'],
    whoshoe: ['“', 'Who Shoe?', '”&nbsp;— an e-commerce shoes shop'],
    fmg: ['“', 'Food Market Group', '”&nbsp;— online showcase for the food company'],
    feedthedevs: ['“', 'Feed the devs', '”&nbsp;— an app to rate developers’ contributions to Github projects (idea and prototype by ', 'Stepan Suvorov', ')'],
    justprivat: ['“', 'Justprivat', '”&nbsp;— information website for a law firm'],
    lampRepair: ['“', 'Lamp Repair', '”&nbsp;— a landing page for a car repair shop'],
    xmasBeard: ['“', 'Xmas Beard', '”&nbsp;— an Android Christmas game. We designed a logo and an interface for the game'],
    careerStudio: ['Landing page and a blog for the “', 'Career studio', '”, where trainers help discover your talents and raise a successful career'],
    peopleInBusiness: ['A website for “', 'People in Business', '”, who help companies set up communication and business process, involving employees’ resources at full capacity'],
    spender: ['“', 'Spender', '”&nbsp;— funds management made easy! Google authentication required'],
    dachaInternet: ['“', 'Dacha Internet', '”&nbsp;— landing for the company that provides installation of network equipment for country houses'],
    unwritten: ['“', 'From unwritten', '”&nbsp;— Sergiy’s collection of remarks for his yet unwritten book'],
    rabbit: 'We also have a bunny:',
    dropUsALine: 'Drop us a line!',
    contact: {
      ania: 'Ania Pereverzieva, the picturesmith — ',
      serg: 'Sergiy Pereverziev, the text evangelist — ',
    },
    ref: 'Perebor stands for “Generate” in Russian. Solvable problems can always be solved by the “Generate and test” method as a simplest. Perebor Studio will create the right tool for you, even if it will require to generate and test a lot of options.'
  },
  project: {
    releaseYear: 'Release year',
    task: 'Goal',
    backToList: 'Back to the project list',

    whoshoe,
    justprivat,
    fmg,
    peopleinbusiness,
  }
};

export default locale;
