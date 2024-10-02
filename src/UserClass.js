export class UserClass {
  constructor(name, phone, email, password, avatar, favorites) {
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.password = password;
    this.avatar = avatar;
    this.favorites = favorites;
    this.logado = false;
    
    console.log("Criando usuário");
  }

  static SaveUser(user){
    localStorage.setItem("user", JSON.stringify(user));
  }
}