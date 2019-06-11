# adc-plugin-publicidad | PubliElectoral

Proyecto para [ADC](https://adc.org.ar/)

PubliElectoral es una extensión (o plugin) desarrollada por la Asociación por los Derechos Civiles (ADC) y la Cooperativa Tecnológica Cambá de la Argentina. Se descarga y se instala en el navegador de internet (de computadora o escritorio). Cuando el usuario navega por una página de Facebook, va detectando las publicidades que se le muestran según su perfil y las almacena en una base de datos, para que luego el equipo de la ADC las analice.

La extensión releva avisos publicitarios de candidatos en campaña. Lo hace a través de cuentas reales de personas como vos, que cooperan con nosotros descargándose la extensión. Nuestro objetivo es reunir esa información y analizarla para entender si desde los partidos políticos y desde las redes sociales el sistema de anuncios electorales está funcionando de manera transparente.

PubliElectoral no almacena información personal de los usuarios de ningún tipo. Lo que archivamos es información de los avisos a analizar. La misma se encontrará alojada en servidores de Alemania, protegidos por el recientemente actualizado Reglamento General de Datos de la Unión Europea (RGPD).

## Requerimientos
```
node v10
```

## Generar zip para distribuir el plugin

Desde la raíz del proyecto ejecutar:

### Firefox

```
npm install
npm run firefox-dist
```

### Chrome

```
npm install
npm run chrome-dist
```

El script para generar el zip es el archivo ***gulpfile.babel.js*** que se encuentra en la raíz del proyecto.
El zip se genera en la carpeta ***dist***.
El código fuente está en la carpeta ***src***
