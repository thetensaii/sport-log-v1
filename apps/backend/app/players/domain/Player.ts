type Gender = "man" | "woman";

type SocialNetwork = {
  type: string;
  link: string;
};

type ConstructorProps = {
  id?: string;
  email: string;
  firstname: string;
  lastname: string;
  birthDate: Date;
  gender: Gender;
  phoneNumber: string;
  height: number;
  division?: string;
  proballersProfileLink?: string;
  proResumeLink?: string;
  sportResumeLink?: string;
  presentationVideoLink?: string;
  highlightsVideoLink?: string;
  currentClub?: string;
  currentCoachName?: string;
  positions: string[];
  socialNetworks?: SocialNetwork[];
};

export class Player {
  id?: string;
  email: string;
  firstname: string;
  lastname: string;
  birthDate: Date;
  gender: Gender;
  phoneNumber: string;
  height: number;
  positions: string[];
  division?: string;
  proballersProfileLink?: string;
  proResumeLink?: string;
  sportResumeLink?: string;
  presentationVideoLink?: string;
  highlightsVideoLink?: string;
  currentClub?: string;
  currentCoachName?: string;
  socialNetworks?: SocialNetwork[];

  constructor(props: ConstructorProps) {
    this.id = props.id;
    this.email = props.email;
    this.firstname = props.firstname;
    this.lastname = props.lastname;
    this.birthDate = props.birthDate;
    this.gender = props.gender;
    this.phoneNumber = props.phoneNumber;
    this.height = props.height;
    this.division = props.division;
    this.proballersProfileLink = props.proballersProfileLink;
    this.proResumeLink = props.proResumeLink;
    this.sportResumeLink = props.sportResumeLink;
    this.presentationVideoLink = props.presentationVideoLink;
    this.highlightsVideoLink = props.highlightsVideoLink;
    this.currentClub = props.currentClub;
    this.currentCoachName = props.currentCoachName;
    this.positions = props.positions;
    this.socialNetworks = props.socialNetworks;
  }
}
