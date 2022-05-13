/* 

const Cymatic = {
  engine : window.CymaticXid,
  sdk    : null
}

Cymatic.init = function(options={}){
  return new Promise(function(resolve, reject){
    Cymatic.engine.v2.init(options, function(error, sdk){
      if(error){ return reject(error); }
      Cymatic.sdk = sdk;
      return resolve(sdk);
    });
  });
};

Cymatic.getSdk = async function(){
  return Cymatic.sdk || await Cymatic.init();
};

export default Cymatic;

 */