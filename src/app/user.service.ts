import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private userInfo = {
    name: "Arshad",
    jobTitle: "[Job Title here]",
    aboutMe: `I'm a software engineer (BSc Computing - UNISA), I've primarily worked in the fintech industry for First National Bank,
    Hollard and Sanlam. I've developed in a broad array of tech, from mainframe systems that calculate interest and repayment schedules
    to the contact center front end in Angular and Electron. 
    
    I've worked in various programming languages/frameworks and have experience as a System's Analyst.
    
    I'm currently employed by Entelect working on devOps and server side Java/Spring for Standard Bank's Web and Mobile platforms.`,
    profilePicture: "https://images.unsplash.com/photo-1558259167-b4116737909b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    location: "Johannesburg, South Africa",
    email: "[Your email here]",
    devpostAccount: "",
    facebookAccount: "",
    githubAccount: "https://github.com/46353658",
    googleAccount: "",
    linkedinAccount: "",
    twitterAccount: "",
    otherAccount: ""
  };

  getUserInfo() {
    return this.userInfo;
  }

}
