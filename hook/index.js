async function preInit(inputObj) {

}

async function postInit(inputObj) {
    console.log(`\n     _____                          _       
    |_   _|                        | |      
      | | ___  _ __ _ __   __ _  __| | ___  
      | |/ _ \\| '__| '_ \\ / _\` |/ _\` |/ _ \\ 
      | | (_) | |  | | | | (_| | (_| | (_) |
      \\_/\\___/|_|  |_| |_|\\__,_|\\__,_|\\___/                          
                                        `)
    console.log(`\n    Welcome to the start-tornado application
     This application requires to open these services: 
         FC : https://fc.console.aliyun.com/
         ACR: https://cr.console.aliyun.com/
     This application can help you quickly deploy the Tornado project:
         Full yaml configuration : https://github.com/devsapp/tornado#%E5%AE%8C%E6%95%B4yaml
         Tornado development docs: https://www.tornadoweb.org/en/stable/
     This application homepage: https://github.com/devsapp/start-tornado\n`)
}

module.exports = {
    postInit,
    preInit
}
