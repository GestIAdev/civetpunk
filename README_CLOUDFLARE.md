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

5) Opcional: usa Wrangler para subir como Workers Site (requires Wrangler v2+):
   - Instalar: npm install -g wrangler
   - Autenticar: wrangler login
   - Publicar: wrangler publish --site --env production

Notas:
- Este repositorio fuerza `main` como rama única. No crear otras ramas si quieres seguir la política del proyecto.
- `docs/` está en `.gitignore` para evitar subir documentación local temporal.
