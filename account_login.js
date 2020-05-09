function accountLogin(emails, password) {
  // 建立使用者資料
  const users = [
    {
      firstName: 'Tony',
      email: 'tony@stark.com',
      password: 'iamironman'
    },
    {
      firstName: 'Steve',
      email: 'captain@hotmail.com',
      password: 'icandothisallday'
    },
    {
      firstName: 'Peter',
      email: 'peter@parker.com',
      password: 'enajyram'
    },
    {
      firstName: 'Natasha',
      email: 'natasha@gamil.com',
      password: '*parol#@$!'
    },
    {
      firstName: 'Nick',
      email: 'nick@shield.com',
      password: 'password'
    }
  ]

  //比對輸入的資料
  const userLogin = users.find(e => {
    return e.email === emails
  })

  if (userLogin === undefined) {
    return 'You are not allow to enter.'
  }
  else if (userLogin.email === emails && userLogin.password === password) {
    return userLogin
  }
  else {
    return 'Password error'
  }

}
module.exports = accountLogin