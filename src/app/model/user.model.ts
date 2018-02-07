export class User {
  id: number;
  userName: string;
  userPwd: string;
  phone: number;
  email: string;
  question: string;
  answer: string;

  constructor(id: number, userName: string, userPwd: string, phone: number, email: string, question: string, answer: string) {
    this.id = id;
    this.userName = userName;
    this.userPwd = userPwd;
    this.phone = phone;
    this.email = email;
    this.question = question;
    this.answer = answer;
  }
}
