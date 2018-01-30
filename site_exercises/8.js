const account = {
  username: "marijn",
  _password: "xyzzy",
  get password(){
    return this._password;
  }
}

account.password = "s3cret" // (*much* more secure)

console.log(account.password)