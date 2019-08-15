const Nexmo = require('nexmo');
const app = require('express')()
const dir = __dirname;

const nexmo = new Nexmo({
    apiKey: '27e1cf5c',
    apiSecret: 'TNV3NuXqg3y6zsaA',
    applicationId: '3ac3ccd3-31af-465b-907a-ee2f77c4dac8',
    // privateKey: process.env.PRIVATE_KEY,
    privateKey: dir + '/private.key',
});

const ncco = [{
    action: 'talk',
    voiceName: 'Joanna',
    // text: "<speak>'Hey everyone!! <break time='0.1s' />\n My name is Salli and I am Nadavs personal assistant. I am 100% sure he will be a great Zell teammate. Besides being a coffee addict, he is a great person!! After all, he has created me!'</speak>",
    text: "<speak> <prosody volume='x-loud'> <prosody rate='medium'> <break time='2s'/> Hi everyone! I have spent some time with Nadav in the last days,  and I can tell you he is eager to work with you all! I promise you, he can deliver some cool things, like creating me! <break time='0.6s' /> Enjoy the Sip!!! <break time='1s'/>  '</prosody> </prosody>  </speak>",
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

    res.sendFile(dir + '/public/index.html');
})

app.get('/keepalive', (req, res) => {
    console.log("Keeping Heroku App Alive");
})

app.listen(process.env.PORT || 3000, function () {
    console.log("Server running on port 3000");
})