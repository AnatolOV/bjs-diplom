/*## Выход из личного кабинета
Создайте объект класса `LogoutButton`. В свойство `action` запишите функцию, которая будет вызывать запрос де
авторизации (`logout`). В колбек запроса добавьте проверку: если запрос выполнился успешно, то обновите страницу 
(с помощью `location.reload();`).*/
let logoutButton = new LogoutButton();

logoutButton.action = function log() {
  ApiConnector.logout((response) =>
    response.success == true ? location.reload() : console.log("привет!")
  );
};

/*## Получение информации о пользователе
Выполните запрос на получение текущего пользователя (`current`), в колбеке которого проверьте ответ: если ответ 
успешный, то вызовите метод отображения данных профиля (`ProfileWidget.showProfile`) в который передавайте данные
 ответа от сервера.*/
//logoutButton.action = function req (){

//??? Не понял, запрос на получение текущего пользователя current нужно вызывать в logoutButton, или просто отдельно вызвать метод?
ApiConnector.current((response) => {
  response.success == true
    ? ProfileWidget.showProfile(response.success)
    : console.log("привет!");
});

//}
