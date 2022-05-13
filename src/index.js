import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';




  
      
      ReactDOM.render(
        <React.StrictMode>
          <App/>
        </React.StrictMode>,
        document.getElementById('root'),
        )
       

    





/* const DefenseCreds = React.memo(() => {
  console.log(`Cymatic SDK render`);
  let listItems = ["Primer elemento del array"];
  window.CymaticXid.init(function (error, sdk) {
    window.CymaticXid.config({ rtp: { timeout: 6000 } });
    console.log(error, sdk);
    if (error) {
      return console.log("Hay error");
    }
    let password = new sdk.PasswordField({
      src: document.querySelector("[type=password]"),
    });
    for (let key in password.criterias) {
      listItems.push(`${key} ${password.criterias[key].message}`);
      console.log("los mete?:", listItems);
    }

    console.log(listItems);
  });
  return listItems;
}); */



