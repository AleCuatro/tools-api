
class API {
    constructor() {
    }

    async checkInviteUrl(content) {
        const urlToDetect = /(discord\.gg|discord\.com\/invite)\/([\w-]+)/;
        const match = await content.match(urlToDetect);
        return {
            detect: match,
            code: match[2]
        }
    }

    async getInvite(invite_code) {
        const respond = await fetch(`https://discord.com/api/v10/invites/${invite_code}`)
        const data = await respond.json()
        return {
            guild: {
                id: data.guild.id,
                name: data.guild.name,
                splashUrl: `https://cdn.discordapp.com/splashes/${data.guild.id}/${data.guild.splash}.webp`,
                banner: `https://cdn.discordapp.com/banners/${data.guild.id}/${data.guild.banner}.webp`,
                icon: `https://cdn.discordapp.com/icons/${data.guild.id}/${data.guild.icon}.webp`,
                description: data.guild.description,
                vanity_url_code: data.guild.vanity_url_code,
                nsfw: data.guild.nsfw,
                all: data.guild
            },
            inviter: {
                id: data.inviter.id,
                name: data.inviter.name,
                username: data.inviter.username,
                avatar: `https://cdn.discordapp.com/avatars/${data.inviter.id}/${data.inviter.avatar}.webp`,
                banner: `https://cdn.discordapp.com/banners/${data.inviter.id}/${data.inviter.banner}.webp`,
                all: data.inviter
            },
            channel: {
                name: data.channel.name,
                id: data.channel.id,
                type: data.channel.type
            }
        }
    }
}

module.exports = API