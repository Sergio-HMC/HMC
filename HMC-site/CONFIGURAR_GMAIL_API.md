# Activación del formulario — Gmail API

El formulario y el endpoint `/api/contact` están implementados. **No enviarán correos hasta completar la autorización de Google y configurar cuatro variables en Vercel.** El mensaje de éxito solo aparece si Gmail API confirma el envío.

## 1. Google Cloud (cuenta Google Workspace)
1. En https://console.cloud.google.com crea un proyecto para HMC.
2. En APIs y servicios → Biblioteca, activa **Gmail API**.
3. En Google Auth Platform → Branding/Audience, configura una aplicación **Internal** si la cuenta y el proyecto pertenecen a la misma organización Google Workspace (no usar External en modo Testing para producción: sus refresh tokens pueden caducar a los 7 días).
4. En Clients, crea un cliente OAuth 2.0 (tipo **Web application**) y configura el redirect URI autorizado que vayas a utilizar para obtener el token. Si usas OAuth Playground, añade `https://developers.google.com/oauthplayground` y activa **Use your own OAuth credentials** en el engranaje.
5. En OAuth Playground (https://developers.google.com/oauthplayground), usa el Client ID/Secret de tu proyecto; autoriza el alcance mínimo `https://www.googleapis.com/auth/gmail.send` con la cuenta que enviará los correos, y canjea el código por tokens. Guarda **refresh_token** de forma privada. El remitente debe ser esa cuenta o un alias autorizado de Gmail.
6. Si Google Workspace restringe aplicaciones OAuth, autoriza este cliente en la consola de administración de Workspace.

## 2. Vercel
En el proyecto `hmc` → Settings → Environment Variables, agrega (para Production):
- `GOOGLE_CLIENT_ID`: identificador OAuth del proyecto.
- `GOOGLE_CLIENT_SECRET`: secreto OAuth.
- `GOOGLE_REFRESH_TOKEN`: refresh token obtenido con gmail.send.
- `GOOGLE_SENDER_EMAIL`: dirección de la cuenta Gmail autorizada (idealmente `contacto@homemarketconsulting.com` si es un buzón real; si es alias, utilizar la cuenta real y configurar el alias de envío en Gmail).

**No copies estos valores en GitHub, capturas ni conversaciones.** Tras guardarlos, ejecuta Redeploy en Vercel.

## 3. Prueba
Completa el formulario publicado con un correo tuyo y comprueba que llega a `contacto@homemarketconsulting.com`, que el botón muestra la confirmación y que Reply-To responde al visitante. Si no está configurado, el formulario muestra un error (nunca un falso éxito).

## Notas de mantenimiento y seguridad
- Gmail API no tiene un coste adicional por solicitud normal, pero está sujeto a cuotas de Google Workspace/API y a sus políticas.
- Un refresh token puede ser revocado por el usuario o por políticas de Google; puede requerir reautorizar. No hay mantenimiento garantizado cero.
- Se incluye campo antispam oculto y validación en servidor. **Para una web pública se recomienda protección adicional con rate limiting o CAPTCHA/Turnstile** si aparece spam o abuso; no se ha implementado un limitador persistente.
- No modificar registros MX, SPF, DKIM o DMARC para este método.
