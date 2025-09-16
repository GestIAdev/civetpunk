Instrucciones rápidas para despliegue ultrarrápido en Cloudflare Pages

1) Asegúrate de que tu repo remoto apunta a `origin` y que trabajas SOLO en la rama `main`.

2) En Cloudflare Pages crea un nuevo sitio y conecta el repositorio. Selecciona la rama `main`.

3) En Settings > Build configura:
   - Framework: "None" (o "Next.js" si lo prefieres)
   - Build command: npm run export
   - Build output directory: web/out

4) Localmente puedes probar:
   - Instala dependencias: npm install --prefix web
   - Ejecuta build + export: npm run export --prefix web
   - El resultado quedará en `web/out` listo para subir a Pages o servir como static site.

5) Nota importante sobre CI en Cloudflare:
   - En Cloudflare Pages NO uses `npx wrangler deploy --assets=./build` como comando de build.
     Ese comando está pensado para publicar mediante Wrangler/Workers y espera un entry-point JS
     (`workers-site/index.js`) que no existe en este repo — por eso recibes el error
     "The entry-point file at \"workers-site/index.js\" was not found.".
   - En su lugar configura Pages para ejecutar `npm run export` y usar `web/out` como directorio
     de salida (Build command: `npm run export`, Output directory: `web/out`).

6) Si realmente quieres publicar como Workers Site con Wrangler (opcional):
   - Genera la carpeta estática en `web/out` localmente.
   - Crea el archivo `workers-site/index.js` que haga `export { default } from './static-handler'` o
     crea un pequeño worker que sirva archivos estáticos (requiere añadir `main = "workers-site/index.js"`
     a `wrangler.toml`). Esto es más complejo; para Pages estática no es necesario.

Notas:
- Este repositorio fuerza `main` como rama única. No crear otras ramas si quieres seguir la política del proyecto.
- `docs/` está en `.gitignore` para evitar subir documentación local temporal.
