const PORT = process.env.PORT || 3000;

// Twitter library
var Twit = require('twit')

let myTweet

//Check config file is filled.
var config = require('./config.js')
if(config.consumer_key == '' ||
   config.consumer_secret == '' ||
   config.access_token == '' ||
   config.access_token_secret == ''){

	console.log("You must fill your configuration file which is located /config.js");
	return;
}

// We need to include our configuration file
var T = new Twit(require('./config.js'))

//
//  Arrays with the emojis we want to use
//

let fillerGroup = ['⤵️','🕳️','🌧️','💧','❌','🚫', ' ']
let emojiGroup1 = ['😭','😥','😫']
let emojiGroup2 = ['☹️','😢','😞']
let emojiGroup3 = ['😔','🙁','😧']
let emojiGroup4 = ['😰','😟','😩']



function postTweet() {

    myTweet = ''

    //
    //  Select the emoji randomly
    //

    let filler = fillerGroup[Math.floor(Math.random() * 7)]
    let emoji1 = emojiGroup1[Math.floor(Math.random() * 3)]
    let emoji2 = emojiGroup2[Math.floor(Math.random() * 3)]
    let emoji3 = emojiGroup3[Math.floor(Math.random() * 3)]
    let emoji4 = emojiGroup4[Math.floor(Math.random() * 3)]

    //
    //  We're going to use 9 different templates
    //

    //
    //  We choose randomly from 1 to 9
    //

    let templateChoosen = Math.floor(Math.random() * 9) + 1

    console.log(templateChoosen)

    if (templateChoosen == 1) {

        //
        // template 1
        //

        let firstLine = filler + filler + emoji1 + emoji1 + filler + filler + filler + filler + filler + '\n'
        let secondLine = emoji2 + emoji2 + '    ' + emoji2 + emoji3 + filler + filler + emoji4 + emoji4 + filler + '\n'
        let thirdLine = filler + filler + filler + filler + emoji3 + emoji3 + emoji3 + filler + filler + '\n'
        let fourthLine = filler + emoji1 + emoji2 + emoji3 + emoji4 + filler + filler + filler + filler + ' ' + '\n'
        let fifthLine = filler + filler + filler + emoji1 + emoji3 + '  ' + filler + filler + filler + filler + '\n'
        let sixthLine = emoji1 + emoji2 + emoji4 + filler + emoji2 + emoji1 + filler + filler + filler + '\n'
        let seventhLine = emoji4 + emoji4 + emoji4 + emoji4 + emoji2 + emoji4 + filler + filler + emoji1 + '\n'
        let eighthLine = filler + filler + emoji4 + emoji1 + emoji2 + filler + filler + filler + filler + '\n'
        let ninethLine = emoji2 + emoji1 + emoji1 + filler + emoji1 + '   ' + emoji1 + emoji3 + emoji4 + filler + '\n'

        myTweet = firstLine + secondLine + thirdLine + fourthLine + fifthLine + sixthLine + seventhLine + eighthLine + ninethLine


    } else if (templateChoosen == 2) {

        //
        // template 2
        //

        let firstLine = '      ' +emoji1 + emoji1 + '                                                                ' + '\n'
        let secondLine = filler + filler + '           ' + emoji2 + emoji3 + filler + '\n'
        let thirdLine = '                                                 ' + emoji3 + emoji3 + emoji3 + '\n'
        let fourthLine = '                            ' + emoji4 + filler + filler + filler + '                ' + '\n'
        let fifthLine = filler + filler + filler + emoji1 + emoji3 + '              ' + filler + filler + '\n'
        let sixthLine = '                   ' + emoji1 + emoji2 + emoji4 + '\n'

        myTweet = firstLine + secondLine + thirdLine + fourthLine + fifthLine + sixthLine

    } else if (templateChoosen == 3) {

        //
        // template 3
        //

        let firstLine = '                                                ' +emoji1 + emoji1 + '                                     ' + '\n'
        let secondLine =  '                                     ' + emoji2 + emoji3 + filler + '\n'
        let thirdLine = '                                                                 ' + filler + filler + filler + '\n'
        let fourthLine = emoji4 + filler + filler + filler + '                                                           ' + '\n'
        let fifthLine = emoji2 + emoji3 + emoji3 + emoji1 + emoji3 + '                   ' + emoji4 + emoji4 + '\n'

        myTweet = firstLine + secondLine + thirdLine + fourthLine + fifthLine 

    } else if (templateChoosen == 4) {

        //
        // template 4
        //

        let firstLine = filler + filler + emoji1 + emoji1 + emoji1 + emoji1 + emoji1 + emoji1 + emoji1 + emoji1 + emoji2 + emoji1 + emoji1 + emoji1 +  '\n'
        let secondLine = emoji2 + emoji2 + emoji2 + emoji2 + emoji2 + emoji2 + emoji2 + emoji2 + emoji4 + emoji2 + emoji2 + emoji2 + emoji2 + emoji2 + emoji2 + '\n'
        let thirdLine = filler + filler + emoji3 + emoji3 + emoji3 + emoji3 + emoji3  + emoji3 + emoji3 + emoji3 + emoji3 + emoji3 + emoji3 + '\n'
        let fourthLine = emoji4 + emoji4 + emoji4 + filler + emoji4 + emoji4 + ' ' + emoji4 + emoji4 + emoji4 + emoji4 + ' ' + emoji4 + emoji4 + '\n'
        let fifthLine = emoji1 + emoji1 + emoji1 + emoji1 + emoji1 + emoji1 + emoji1 + emoji1 + emoji2 + emoji1 + emoji3 + emoji1 + emoji2 + emoji1 + emoji3 + emoji1 + '\n'
        let sixthLine = emoji1 + emoji2 + emoji4 + emoji3 + emoji2 + emoji1 + emoji2 + emoji3 + emoji1 + emoji4 + emoji2 + emoji2 + emoji3 + emoji1 + emoji4 + emoji2 + '\n'
        let seventhLine = emoji4 + emoji4 + emoji4 + emoji4 + emoji2 + emoji4 + filler + emoji3 + filler + filler + filler + filler + emoji3 + '\n'
        let eighthLine = filler + filler + emoji4 + emoji1 + emoji2 + emoji2 + emoji2 + emoji2 + emoji2 + emoji2 + emoji2 + emoji2 + emoji2 + emoji2 + emoji2 + emoji2 + emoji2 + emoji2 + '\n'
        let ninethLine = emoji2 + emoji1 + emoji1 + emoji1 + emoji1 + emoji1 + emoji3 + emoji1 + emoji1 + emoji1 + emoji1 + emoji1 + emoji1 + emoji1 + emoji1 + emoji1 + emoji1 + '\n'

        myTweet = firstLine + secondLine + thirdLine + fourthLine + fifthLine + sixthLine + seventhLine + eighthLine + ninethLine

    } else if (templateChoosen == 5) {

        //
        // template 5
        //

        let firstLine = emoji1 + emoji3 + emoji1 + emoji1 + emoji4 + emoji1 + filler + filler +  '\n'
        let secondLine = '                                  ' + filler + filler + emoji2 + emoji2 + emoji2 + '\n'
        let thirdLine = filler + emoji3 + emoji3 + emoji1 + emoji1 + filler  + emoji3 + filler + emoji3 + filler + '\n'
        let fourthLine = emoji4 + emoji4 + emoji4 + emoji1 + '        ' + emoji4 + '        ' + emoji4 + emoji4 + '\n'
        let fifthLine = emoji1 + emoji1 + emoji1 + emoji1 + emoji1 + emoji1 + emoji1 + emoji1 + emoji2 + emoji1 + emoji3 + emoji1 + emoji2 + emoji1 + emoji3 + emoji1 + '\n'
        let sixthLine = '                     ' + emoji2 + emoji3 + emoji1 + emoji4 + emoji2 + emoji2 + emoji3 + emoji1 + '\n'
        let seventhLine = filler + emoji4 + filler + emoji4 + filler + emoji4 + filler + emoji3 + filler + emoji2 + '\n'
        let eighthLine = filler + emoji2 + emoji1 + emoji2 + emoji2 + emoji2 + emoji2 + emoji2 + emoji2 + emoji2 + emoji2 + '\n'

        myTweet = firstLine + secondLine + thirdLine + fourthLine + fifthLine + sixthLine + seventhLine + eighthLine 

    } else if (templateChoosen == 6) {

        //
        // template 6
        //

        let firstLine = '                                          ' + emoji4 + '                   ' + emoji1 + '                    ' + '\n'
        let secondLine =  '                                           ' + emoji3 + filler + '\n'
        let thirdLine = '                                                           ' + filler + filler + filler + '\n'
        let fourthLine = '                       ' + emoji4 + filler + filler + filler + '                                           ' + '\n'
        let fifthLine =  '            ' + emoji1 + '                   ' + emoji4 + '\n'

        myTweet = firstLine + secondLine + thirdLine + fourthLine + fifthLine 

    } else if (templateChoosen == 7) {

        //
        // template 7
        //

        let firstLine = '                      ' + emoji4 + '                              ' + filler + '                    ' + '\n'
        let secondLine =  '            ' + emoji3 + filler + emoji1 + emoji2 + '\n'
        let thirdLine = '                                                           ' + filler + '\n'
        let fourthLine = '                                            ' + emoji4 + filler + '                              ' + '\n'
        let fifthLine =  '            ' + emoji1 + emoji1 + emoji4 + filler + filler + '\n'

        myTweet = firstLine + secondLine + thirdLine + fourthLine + fifthLine 

    } else if (templateChoosen == 8) {

        //
        // template 8
        //

        let firstLine = '                      ' + emoji4 + '       ' + filler + emoji2 + '                  ' + '\n'
        let secondLine =  '                 ' + emoji3 + filler + '             ' + '\n'
        let thirdLine = '  ' + filler + filler + emoji1 + emoji2 + '\n'
        let fourthLine = '                                                    ' + emoji4  + '                       ' + '\n'
        let fifthLine =  '                                   ' + emoji1 + emoji1 + filler + '\n'

        myTweet = firstLine + secondLine + thirdLine + fourthLine + fifthLine 

    } else if (templateChoosen == 9) { 

        //
        // template 9
        //

        let firstLine = '                                            ' + emoji4 + '           ' + '\n'
        let secondLine =  '                ' + filler + filler + emoji1 + emoji2 + emoji1 + '\n'
        let thirdLine = '                                                           ' + filler + '\n'
        let fourthLine = '                                            ' + emoji4 + filler + '                              ' + '\n'
        let fifthLine =  '            ' + emoji1 + emoji1 + emoji4 + filler + filler + '\n'

        myTweet = firstLine + secondLine + thirdLine + fourthLine + fifthLine 

    }


    console.log(myTweet)

    
    T.post('statuses/update', { 
        status: myTweet }, 
        function(err, data, response) {
        console.log(data)
        myTweet = ''
    })

}


//
//  let's tweet now and every 6 hours
//
// 3600000 ms = 1 hour, 1 hour * 6 = 6 hours  --> 3600000 * 6
postTweet();
setInterval(postTweet, 3600000 * 1)


