
let logoutButton = new LogoutButton();

logoutButton.action = function log() {
  ApiConnector.logout((response) =>
    response.success == true ? location.reload() : console.log("привет!")
  );
};

ApiConnector.current((response) => {
  response.success == true
    ? ProfileWidget.showProfile(response.data)
    : console.log("привет!");
});


let board = new RatesBoard();

function getCurrency () { 
    ApiConnector.getStocks(callback => {
      if (callback.success == true){
        board.clearTable();
        board.fillTable(callback.data);
       
      }
    });
}

setInterval(getCurrency, 1000);

/*Создайте объект типа MoneyManager

Реализуйте пополнение баланса:
Запишите в свойство addMoneyCallback функцию, которая будет выполнять запрос.

Внутри функции выполните запрос на пополнение баланса (addMoney).

Используйте аргумент функции свойства addMoneyCallback для передачи данных data в запрос - какие данные нужно передать? Их указать в аргументе f(?) .
После выполнения запроса выполните проверку успешности запроса.
В случае успешного запроса отобразите в профиле новые данные о пользователе из данных ответа от сервера (showProfile). - (я правильно записал?)
Также выведите сообщение об успехе или ошибку (причину неудачного действия) пополнении баланса в окне отображения сообщения (setMessage). - что передавать в аргументы setMessage(isSuccess, message)?
*/

let manageMoney = new MoneyManager();

 manageMoney.addMoneyCallback = function f (data) {  
  ApiConnector.addMoney({ currency, amount }, callback => {
      if (callback.success == true){
        ProfileWidget.showProfile(callback.data);
        MoneyManager.setMessage(isSuccess, message);
        console.log(3);
 }});
  }










