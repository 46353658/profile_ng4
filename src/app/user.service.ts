import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private userInfo = {
    name: "Arshad",
    jobTitle: "[Job Title here]",
    aboutMe: `I'm a software engineer (BSc Computing) who has primarily worked in the fintech industry for big names such as First National Bank,
    Hollard and Sanlam. I've developed in a broad array of tech, from mainframe systems that calculate interest and repayment schedules
    to Angular on the contact center front end.
    I've worked in COBOL, Progress 4GL, Java, JavaScript and TypeScript and have filled both development and analyst roles.
    I'm currently employed by Entelect and am based at Standard Bank doing some devOps and Java on the service layer for the App and Web platforms.`,
    profilePicture: "http://i0.wp.com/cdn.techgyd.com/save-whatsapp-profile-picture-image3.jpg?resize=337%2C337",
    location: "[Your location here]",
    email: "[Your email here]",
    devpostAccount: "",
    facebookAccount: "",
    githubAccount: "[Your GitHub account here]",
    googleAccount: "",
    linkedinAccount: "",
    twitterAccount: "",
    otherAccount: ""
  };

  getUserInfo() {
    return this.userInfo;
  }

}
