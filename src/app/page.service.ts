import { Injectable } from '@angular/core';

@Injectable()
export class PageService {
  private pageInfo = {
    backgroundImage: "https://images.unsplash.com/photo-1464802686167-b939a6910659?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1333&q=80",
    showHeader: true,
    showProfile: true,
    profileBackgroundColor: "white",
    showExperiences: true,
    experiencesBackgroundColor: "rgb(252, 243, 207)",
    showAbilities: true,
    abilitiesBackgroundColor: "white",
    showProjects: true,
    projectsBackgroundColor: "rgb(252, 243, 207)",
    showAwards: false,
    awardsBackgroundColor: "white",
    showContact: true,
    contactBackgroundColor: "rgb(66, 73, 73)",
    resumeTitle: "Software Engineer",
    projectLink: "https://github.com/Wrinth/personal_profile_angular4"
  };

  getPageInfo() {
    return this.pageInfo;
  }

}
