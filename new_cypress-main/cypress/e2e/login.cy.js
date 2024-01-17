describe('Автотесты на форму логина', function () {
  it('Верный логин и  верный пароль', function () {
     cy.visit('https://login.qa.studio/'); //Поситили сайт
     cy.get('#mail').type('german@dolnikov.ru'); //Ввели логин
     cy.get('#pass').type('iLoveqastudio1'); //Ввели пароль
     cy.get('#loginButton').click(); //Нажали войти
     cy.get('#messageHeader').should('be.visible'); //Проверка, что текст виден
     cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Совп. текста
     cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Крестик виден
  })

})

  it('Работа логики восстановление пароля', function () {
     cy.visit('https://login.qa.studio/'); //Поситили сайт
     cy.get('#mail').type('german@dolnikov.ru'); //Ввели логин
     cy.get('#forgotEmailButton').click(); //Клик забыли пароль
     cy.get('#forgotForm > .header').should('be.visible'); //Надпить видима
     cy.get('#forgotForm > .header').contains('Восстановите пароль'); //Совп. текста
     cy.get('#exitRestoreButton > .exitIcon').should('be.visible'); //Крестик виден
     cy.get('#mailForgot').type('german@dolnikov.ru'); //Ввели почту
     cy.get('#restoreEmailButton').click(); //Нажать по восстановить
     cy.get('#messageHeader').should('be.visible'); //Надпись видима
     cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //Совп. текста
  })

 it('Верный логин и неверный пароль', function () {
     cy.visit('https://login.qa.studio/'); //Поситили сайт
     cy.get('#mail').type('german@dolnikov.ru'); //Ввели логин
     cy.get('#loginButton').should('be.disabled'); //Кнопка войти кликабельна
     cy.get('#pass').type('iLoveqastudio5'); //Ввели пароль
     cy.get('#loginButton').should('be.enabled'); //Кнопка войти кликабельна
     cy.get('#loginButton').click(); //Нажали войти
     cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Совп. текста
     cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Крестик видимый
  })

 it('Неверный логин и верный пароль', function () {
     cy.visit('https://login.qa.studio/'); //Поситили сайт
     cy.get('#mail').type('german@dolnikov1.ru'); //Ввели логин
     cy.get('#pass').type('iLoveqastudio1'); //Ввели пароль
     cy.get('#loginButton').should('be.enabled'); //Кнопка войти кликабельна
     cy.get('#loginButton').click(); //Нажали войти
     cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Совп. текста
     cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Крестик видимый
  })

it('Неверный логин (без @) и верный пароль', function () {
     cy.visit('https://login.qa.studio/'); //Поситили сайт
     cy.get('#mail').type('german.dolnikov.ru'); //Ввели логин
     cy.get('#pass').type('iLoveqastudio1'); //Ввели пароль
     cy.get('#loginButton').should('be.enabled'); //Кнопка войти кликабельна
     cy.get('#loginButton').click(); //Нажали войти
     cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //Совп. текста
  })

it('Приведение к строчным буквам в логине с верным паролем', function () {
     cy.visit('https://login.qa.studio/'); //Поситили сайт
     cy.get('#mail').type('GerMan@Dolnikov.ru'); //Ввели логин
     cy.get('#pass').type('iLoveqastudio1'); //Ввели пароль
     cy.get('#loginButton').should('be.enabled'); //Кнопка войти кликабельна
     cy.get('#loginButton').click(); //Нажали войти
     cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Совп. текста
     cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Крестик видимый
  })