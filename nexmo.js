const Nexmo = require('nexmo');
const app = require('express')()

const nexmo = new Nexmo({
    apiKey: '27e1cf5c',
    apiSecret: 'TNV3NuXqg3y6zsaA',
    applicationId: '3ac3ccd3-31af-465b-907a-ee2f77c4dac8',
    // privateKey: process.env.PRIVATE_KEY,
    // privateKey: './private.key',
});

const ncco = [{
    action: 'talk',
    voiceName: 'Kimberly',
    // text: "<speak>'Hey everyone!! <break time='0.1s' />\n My name is Salli and I am Nadavs personal assistant. I am 100% sure he will be a great Zell teammate. Besides being a coffee addict, he is a great person!! After all, he has created me!'</speak>",
    text: "<speak> <prosody volume='x-loud'> <break time='1s'/> 'Aha? Hi! My name is <break strength='strong'/> What? <break strength='strong'/> My name is <break strength='strong'/> <prosody pitch='high'> Who?  </prosody> <break strength='strong'/> my name is <break strength='strong'/> <prosody rate='fast'> chicky chicky </prosody> Slim Shady'</prosody>  </speak>",
    // text: 'Hey Bro! \n My name is Salli and I am Nadavs personal assistant. He sends you love and kisses, and specifically asked me to say to you: fuck you and goodbye',
}, ];




app.get('/', (req, res) => {

    nexmo.calls.create({
            to: [{
                type: 'phone',
                // Myself
                number: '972544506779'
                // Alro
                // number: '972544693993'
                // Tzachi
                // number: '972525745643'
                //Zilka
                // number: '972546335070'
            }],
            from: {
                type: 'phone',
                number: '972544506779'
            },
            ncco,
        },
        (err, result) => {
            console.log(err || result);
        },
    );
})

app.listen(3000, function () {
    console.log("Server running on port 3000");
})