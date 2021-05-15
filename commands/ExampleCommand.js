module.exports = {
    name: 'Name of command here (If you called the name Hello, the user would enter !Bot Hello)',
    description: 'Enter command description here (Shows in #Help command)',
    execute(message) {
        let str = 'Enter what you would like the bot to reply with here.';
        message.channel.send(str);
    },
};
