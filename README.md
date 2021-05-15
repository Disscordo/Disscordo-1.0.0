This is the old version of Disscordo. (1.0)

You can invite the current, up to date, version of Disscordo by [Inviting the bot](https://discord.com/api/oauth2/authorize?client_id=824425235512164413&permissions=506973271&scope=bot) or follow the instructions below to make Disscordo your own.

To edit the bot you need Node and Atom (Another other editor will also work)

1) Go to the Discord Developer Portal (DDP) [(Click Here)](http://discord.com/developers/applications)
2) If you have already created the bot select the bot and head to step number 4. If not, click New Application and enter a name.
3) Select bot on the side menu and click Create Bot then Yes, Do it! You should then see the bot page, you can change the profile icon now or do it later. You can also change the bots name later.
4) Now click Copy Token. IT IS IMPORTANT YOU DO NOT TELL ANYONE YOUR TOKEN! IF YOU ANYONE DOES FIND YOUR TOKEN CLICK REGENERATE.
5) In the bot code, go to config.json and replace the default token with your token (The token we used isn’t our token for our real bot. We created it for an this example.) If you would like, you may also change the bot prefix.
6) In the commands folder, go to the ExampleCommand.js file and edit the Name, Description and What the bot replies with. The instructions are in the file. You may also change the Talk.js command.
7) Now go back to DDP and choose OAuth2. Scroll down to scopes and select bot. Now select the following permissions or choose Administrator. View Channels, Send Messages, Mention Everyone, Read Message History, Add Reactions, Embed Links.
8) Copy the link that it generates and choose the sever you want to add it too.
9) Now using terminal/cmd head to your project folder and use node index.js.

And now your bot will be online! You can host it your self or use a bot hosting service but DO NOT USE Heroku to host your bot as it often wipes out the database Disscordo 1.0.0 uses. 
