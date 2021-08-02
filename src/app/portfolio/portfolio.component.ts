import {Component, OnInit, TemplateRef} from '@angular/core';

interface Project {
  routerLink?: string;
  href?: string;
  image: string;
  description: string;
  theme: 'dark' | 'light';
  archived?: number;
}

@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  projects: Project[] = [
    {
      href: 'http://girid.pereborstudio.com/home.html',
      image: 'assets/images/bucket/girid.jpg',
      description: 'portfolio.girid',
      theme: 'dark',
    },
    {
      archived: 2020,
      href: 'https://smp-tender.pereborstudio.com',
      image: 'assets/images/bucket/smp-tender.jpg',
      description: 'portfolio.smpTender',
      theme: 'light',
    },
    {
      href: 'http://unwritten.pereborstudio.com',
      image: 'assets/images/bucket/from-unwritten.jpg',
      description: 'portfolio.unwritten',
      theme: 'dark',
    },
    {
      href: 'https://дача-интернет.рф',
      image: 'assets/images/bucket/dacha-internet.jpg',
      description: 'portfolio.dachaInternet',
      theme: 'light',
    },
    {
      image: 'assets/images/bucket/spender.jpg',
      description: 'portfolio.spender',
      theme: 'light',
    },
    {
      archived: 2016,
      routerLink: '/projects/peopleinbusiness',
      image: 'assets/images/bucket/people-in-business.jpg',
      description: 'portfolio.peopleInBusiness',
      theme: 'dark',
    },
    {
      href: 'https://career-studio.com.ua',
      image: 'assets/images/bucket/career-studio.jpg',
      description: 'portfolio.careerStudio',
      theme: 'light',
    },
    {
      href: 'https://www.facebook.com/xmasbeard/',
      image: 'assets/images/bucket/xmas-beard.jpg',
      description: 'portfolio.xmasBeard',
      theme: 'light',
      archived: 2017,
    },
    {
      archived: 2016,
      routerLink: '/projects/fmg',
      image: 'assets/images/bucket/food-market-group.jpg',
      description: 'portfolio.fmg',
      theme: 'light',
    },
    {
      archived: 2019,
      href: 'http://remont-far.pereborstudio.com',
      image: 'assets/images/bucket/remont-far.jpg',
      description: 'portfolio.lampRepair',
      theme: 'light',
    },
    {
      archived: 2016,
      routerLink: '/projects/justprivat',
      image: 'assets/images/bucket/justprivat.jpg',
      description: 'portfolio.justprivat',
      theme: 'light',
    },
    {
      archived: 2018,
      image: 'assets/images/bucket/feedthedevs.jpg',
      description: 'portfolio.feedthedevs',
      theme: 'dark',
    },
    {
      href: '/',
      image: 'assets/images/bucket/perebor.jpg',
      description: 'portfolio.perebor',
      theme: 'dark',
    },
    {
      archived: 2014,
      routerLink: '/projects/whoshoe',
      image: 'assets/images/bucket/whoshoe.jpg',
      description: 'portfolio.whoshoe',
      theme: 'light',
    },
  ];

  constructor() { }

  public ngOnInit() {
    window.scrollTo(0, 0);
  }
}
