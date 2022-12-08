
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

let manageMoney = new MoneyManager();

 manageMoney.addMoneyCallback = function f({ currency, amount }) {
   ApiConnector.addMoney({ currency, amount }, (callback) => {
     if (callback.success == true) {
       ProfileWidget.showProfile(callback.data);
       console.log(callback.data)
       manageMoney.setMessage(callback.success, console.error("Успешно"));//Также выведите сообщение об успехе или 
       //ошибку (причину неудачного действия) пополнении баланса в окне 
      //отображения сообщения (setMessage). -??? что передавать в аргументы setMessage(isSuccess, message)?
      
     }
   });
 };










