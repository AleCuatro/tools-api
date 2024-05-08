![App Screenshot](https://w.wallhaven.cc/full/85/wallhaven-856dlk.png)

# <div style="text-align: center;">ToolKit Discord</div>

#####  <div style="text-align: center;">Modulo que ayuda un poco a facilitar esas busquedas intensas de codigo obsoleto o algo en concreto.</div>

# Clases 🔥

## API
### .getInvite()
Extrae los datos de un codigo, retorna las variables importantes de la invitacion (Mas usado en sistemas de 'alianzas'):

####  .guild
- **id** retorna el id del servidor.
- **name** retorna el nombre del servidor.
- **icon** retorna la URL del icono en formato WebP
- **banner** retorna la URL del banner en formato WebP
- **splash** retorna la URL del splash en formato WebP
- **description** retorna la descripcion del servidor (En caso de tener activado la comunidad)
- **vanity_url_code** retorna el codigo de invitacion permanente en caso de tenerlo. **(DEFAULT = Null)**
- **all** retorna todos los datos en formato Array

```js
const api = new API()

(async() => {
	let data = api.getInvite('your-invite-code')
  console.log(data.guild.all) 
})
```

#### .inviter
- **id** retorna el id del usuario que hizo la invitacion.
- **username** retorna el nombre del usuario.
- **avatar** retorna el avatar del usuario en formato WebP
- **banner** retorna el banner del usuario en formato WebP
- **all** retorna todos los datos en formato Array

```js
const api = new API()

(async() => {
	let data = api.getInvite('your-invite-code')
  console.log(data.inviter.all)
})
```

#### .channel
- **id** retorna el id del canal que hizo la invitacion.
- **name** retorna el nombre del canal.
- **type** retorna el tipo de canal: (TextChannel, VoiceChannel, ForumChannel...)

```js
const api = new API()

(async() => {
	let data = api.getInvite('your-invite-code')
  console.log(data.channel.id)
})
```