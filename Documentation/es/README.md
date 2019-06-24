<div align="center">
  <h1>
    Advertising Detector Plug-in  
  </h1>
  <p>
    <strong>Este desarrollo se llevo a cabo sobre <a href="https://github.com/EmailThis/extension-boilerplate">extension-boilerplate</a> </strong>
  </p>
  <img src="./Documentation/images/plugin.png" alt="advertising detector plugin">
</div>

## Features  
  + Se pueden configurar las cuentas de donde saldrá la publicidad a relevar.  
  + Se puede configurar un backend donde se manda la información relevada.
  + Se puede buildear para Chrome, Mozilla y Opera.
  + Más features [aquí](https://github.com/EmailThis/extension-boilerplate#features)  

## Instalación  
  + Clonar el repositorio  ```git clone https://github.com/cambalab/advertising-detector-plugin ```  
  + Ejecutar ```npm install```  
  + Ejecutar ```npm run build```

## Compilar para distintos Navegadores  
  + Navegadores Chrome y Opera
    - Para Google Chrome, ejectuar ```npm run chrome-build```   
    - Para Opera, ejecutar ```npm run opera-build```  
  + Navegador Mozilla Firefox
    - Ejecutar ```npm run firefox-build```  

  Se creará en el directorio ```advertising-detector-plugin/build/``` una carpeta por navegador con la versión compilada.  
  + Para cargar la extensión en Google Chrome y Opera, abrir el navegador y en escribir la dirección ```chrome://extensions``` elegir *"Modo Desarrollador"* hacer clic en *"Cargar Extensión sin empaquetar"* y cargar desde el file system ```advertising-detector-plugin/build/chrome``` o ```advertising-detector-plugin/build/opera```  
  + Para cargar la extensión en Mozilla Firefox, abrir el navegador y escribir en la dirección ```about:debugging``` hacer clic en *"Cargar Complemento Temporario"* y desde el file system cargar el directorio ```advertising-detector-plugin/build/firefox```

## Empaquetado  
  + Ejecutar ```npm run chrome-dist``` , ```npm run firefox-dist``` o ```npm run opera-dist``` y se creará un archivo **.zip** en ```advertising-detector-plugin/dist``` para el navegador elegido, listo para subirla a la AppStore.

## Configuración    
  + En el archivo `advertising-detector-plugin/src/config.js` se configuran en un array, las cuentas de Facebook de las que se van a querer monitorear su publicidad  

  ```javascript
  "accounts": [
    {
      "name": "Account Name", // for example: Facebook
      "page_id": "Page id", // for example: 185150934832623
      "page_name": "Url page" // for example: https://www.facebook.com/enespanol/
    }
  ],
  ```  

  + Para configurar las ciudades, agregarlas en *locations*  

  ```javascript
  "locations": [
    "Select an option",
    "City one",
    "City two",
    "City three",
    "City four",
    "City five",
    "City six",
    "City seven",
    "City eight",
    "City nine",
    "City ten"
  ],
  ```  

  + Dirección del Backend a donde va a mandar la información relevada  

  ```javascript
  "adUri": "API Backend URL", // Backend url
  ```  

  + Configurar los selectores con el cual se define una *Publicidad* en Facebook  

  ```javascript
  "fbAds": {
    "mainContainerQuerySelector": "[id^='topnews_main_stream_'",
    "profileIdContainerQuerySelector": "a[title='Perfil']",
    "targetAdWord": "Publicidad",
    "postQuerySelector": "hyperfeed_story_id_",
    "postSubtitleQuerySelector": "[id^='fe_edsubtitle']",
    "postIdQuerySelector": "[name=ft_ent_identifier]"
  }
  ```
