// import Discord from 'discord.js';
// import { DEFAULT_CONFIG } from '../athena/main';
// import Logger from '../utility/athenaLogger';
// import { OptionsController } from './options';

// export class DiscordController {
//     static client: Discord.Client = new Discord.Client({
//         partials: ['GUILD_MEMBER'],
//         ws: { intents: ['GUILD_PRESENCES', 'GUILD_MEMBERS'] }
//     });

//     static whitelistRole = process.env.WHITELIST_ROLE ? process.env.WHITELIST_ROLE : null;
//     static guild: Discord.Guild;

//     static populateEndpoints() {
//         DiscordController.client.on('ready', DiscordController.ready);
//         DiscordController.client.on('guildMemberUpdate', DiscordController.userUpdate);
//         DiscordController.client.login(process.env.DISCORD_BOT);
//     }

//     static ready() {
//         Logger.info(`Discord Bot Connected Successfully`);

//         if (DEFAULT_CONFIG.WHITELIST && !DiscordController.whitelistRole) {
//             Logger.error(`.env file is missing WHITELIST_ROLE identifaction for auto-whitelist.`);
//             return;
//         }

//         DiscordController.guild = DiscordController.client.guilds.cache.get('790039623648542760');
//     }

//     static userUpdate(oldUser: Discord.GuildMember, newUser: Discord.GuildMember) {
//         const userFullName = `${newUser.user.username}#${newUser.user.discriminator}`;
//         const currentMember = DiscordController.guild.members.cache.get(newUser.user.id);
//         const hasRole = currentMember.roles.cache.find((role) => role.id === process.env.WHITELIST_ROLE);

//         if (!hasRole) {
//             const didRemove = OptionsController.removeFromWhitelist(currentMember.user.id);

//             if (didRemove) {
//                 Logger.log(`${userFullName} was removed from the whitelist.`);
//             }

//             return;
//         }

//         const didAdd = OptionsController.addToWhitelist(currentMember.user.id);
//         if (didAdd) {
//             Logger.log(`${userFullName} was added to the whitelist.`);
//         }
//     }
// }

export default function loader() {
    console.log('feature not ready');

    // if (DEFAULT_CONFIG.USE_DISCORD_BOT) {
    //     if (!process.env.DISCORD_BOT) {
    //         Logger.error(
    //             `.env is missing DISCORD_BOT secret for logging in. Don't forget to add WHITELIST_ROLE as well.`
    //         );
    //         return;
    //     }

    //     DiscordController.populateEndpoints();
    // }
}
