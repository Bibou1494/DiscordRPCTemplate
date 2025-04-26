const dotenv = require('dotenv');
dotenv.config();

const DiscordRPC = require('discord-rpc');
const ID = process.env.ID2;
const RPC = new DiscordRPC.Client({ transport: 'ipc' });

DiscordRPC.register(ID)

async function activity() {
  if (!RPC) return;
  
  RPC.setActivity({
    details: 'Watching Free Guilds Tag',
    // state: 'Watching free guilds tag',
    // largeImageKey: 'https://cdn.discordapp.com/avatars/1202607585136476185/7ac534b57f0ff1fa70c16b18929447a8.png?size=4096',
    // largeImageText: 'Profile picture',
    // smallImageKey: 'https://images-ext-1.discordapp.net/external/0uX7g_GQ1404PeglPEpoOHql6MZHbVgZUxK_RCvWW3A/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/1202607585136476185/7ac534b57f0ff1fa70c16b18929447a8.png',
    // smallImageText: 'SMALL IMAGE TEXT',
    instance: false,
    startTimestamp: Date.now(),
    buttons: [
      {
        label: `Guild`,
        url: `https://discord.gg/wacfypztwu`
      }
    ]
  })
}

RPC.on('ready', async () => {
  console.log("RPC Presence up");
  activity();

  setInterval(() => {
    activity();

  }, 100000000)
})

RPC.login({clientId: ID});