/**
 * This class responds to anyone that types !bot talk and chooses one of the phrases below to respond with at random.
 *
 */
module.exports = {
    name: 'talk', // The name of the command
    description: 'Random phrases', // The description of the command (for help text)
    args: false, // Specified that this command doesn't need any data other than the command
    usage: '', // Help text to explain how to use the command (if it had any arguments)
    execute(message, args) {

        // List of phrases to respond with
        var phrases = [
          'Hello, How are you?',
          'I am now talking to you!',
          'Bob the builder!',
          'Peppa Pig *Snort*',
          'Never gonna give you up, Never gonna let you down.'
        ];

        message.reply(phrases[Math.floor(Math.random()*phrases.length)]); // Replies to the user with a random phrase
    },
};
