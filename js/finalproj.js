// define arrays with each of the prompt options
// assign array to an index
// when button is clicked
// 1. generate random index
// 2. change "Write about..." text and display random prompt

$(document).ready(function() {

    function getThree() {
        var threePrompts = [
            "things you can't go without everyday",
            "favorite books",
            "favorite pizza spots",
            "things you would take from your home if you need to evacuate",
            "things you'd do if you weren't so afraid",
            "favorite TV shows",
            "favorite movies",
            "favorite things to wear",
            "cities you'd like to try living in",
            "favorite board games",
            "favorite websites",
            "weekend activities you enjoy",
            "of the best Halloween candies",
            "favorite foods",
            "favorite cuisines",
            "favorite fast food restaurants",
            "desserts you'd like to eat",
            "things you like to cook",
            "things you would do if you could live a day without consequences",
            "favorite musicians/artists",
            "music genres you enjoy listening to",
            "favorite animals",
            "items you would bring to a remote island",
            "things you would buy if money were no limit",
            "wishes you would ask a genie",
            "subjects or activites you would like to be an expert in"
        ]

        var randomThree = threePrompts[Math.floor(Math.random() * threePrompts.length)]
        $('.textbox').html("3 " + randomThree)
    }

    $('#threeButton').click(getThree)

    function getPast () {
        var pastPrompts = [
            "What are the turning points in your life - what would be different now if you had made a different choice.",
            "What is your favorite summer childhood memory?",
            "Describe your favorite hideaway.",
            "What was your most beloved toy?",
            "Did you have your own bedroom growing up or did you share with someone else? Describe your room.",
            "Describe a family tradition that you grew up with.",
            "What was your favorite food as a kid? Do you still enjoy it now?",
            "What did you want to be when you grew up?",
            "Describe a game or activity you played as a kid.",
            "What is the most memorable place you visited in the last year?",
            "What did you really love to do that you don't do anymore. Explain why you stopped and if you'd start again.",
            "If you could go back to a different period in your life, what age or time period would you go back to and why?",
            "What's one lesson you learned in the past five years? How did you learn this lesson?",
            "Describe a difficult experience you had in the past. How did you overcome it?"
        ]

        var randomPast = pastPrompts[Math.floor(Math.random() * pastPrompts.length)]
        $('.textbox').html(randomPast)
    }

    $('#pastButton').click(getPast)

    function getFuture () {
        var futurePrompts = [
            "Where do you want to be in 5 years?",
            "Where do you want to be in 20 years?",
            "Where would you like to retire?",
            "What home improvements would you like to make?",
            "What is one thing you have been procrastinating. Why?",
            "Make a bucket list.",
            "Write down how you can improve your life.",
            "Describe the places you wish to see or vacations you plan to take.",
            "What is your dream career?",
            "What is the next thing you want to learn?",
            "If you knew that in one year you would die suddenly, would you change anything about the way you are now living? Why?",
        ]

        var randomFuture = futurePrompts[Math.floor(Math.random() * futurePrompts.length)]
        $('.textbox').html(randomFuture)
    }

    $('#futureButton').click(getFuture)

    function getYou() {
        var youPrompts = [
            "Given the chance of anyone in the world, whom would you want as a dinner guest?",
            "Would you like to be famous? In what way?",
            "What would constitute a perfect day for you?",
            "For what in your life do you feel most grateful?",
            "Is there something that you’ve dreamed of doing for a long time? Why haven’t you done it?",
            "What do you value most in a friendship?",
            "Some of the things that make me happy are...",
            "Write about your first crush.",
            "If you could change anything about the way you were raised, what would it be?",
            "How do you deal with anger?",
            "I wish others knew this about me...",
            "If you could wake up tomorrow having gained any one quality or ability, what would it be?",
            "What makes you unique?",
            "When did you feel truly independent for the first time?",
            "What character traits do you need to work on?",
            "What are you really good at?",
            "How do you indulge yourself?",
            "What is your most terrible memory?",
            "How do you think others see you when they meet you for the first time?"
        ]
        var randomYou = youPrompts[Math.floor(Math.random() * youPrompts.length)]
        $('.textbox').html(randomYou)
    }

    $('#youButton').click(getYou)

    function getSurprise() {
        var surprisePrompts = [
            "If you were able to live to the age of 90 and retain either the mind or body of a 30-year-old for the last 60 years of your life, which would you want?",
            "If a crystal ball could tell you the truth about yourself, your life, the future or anything else, what would you want to know?",
            "Marvel or DC Comics?",
            "What's the best book you read this year?",
            "How do you feel about your relationship with your mother?",
            "What, if anything, is too serious to be joked about?",
            "If you were to die this evening with no opportunity to communicate with anyone, what would you most regret not having told someone? Why haven’t you told them yet?",
            "If you could meet any fictional character, who would it be?",
            "What song best sums you up?",
            "Which of your five senses would you say is your strongest?",
            "How old were you when you learned Santa isn't real. How did you find our and how did you react?",
            "Write about your first job.",
            "You discover you are on in your own version of The Truman Show. What would you do?",
            "Before making a telephone call, do you ever rehearse what you are going to say? Why?",
            "What qualities do you want in a romantic partner?",
            "What famous world festivals would you like to attend?",
            "What is your favorite holiday?",
            "What have you read recently on the news that caught your attention?",
            "You have a chance to be one of the first people to live on Mars. Would you take it?"
        ]

        var randomSurprise = surprisePrompts[Math.floor(Math.random() * surprisePrompts.length)]
        $('.textbox').html(randomSurprise)
    }

    $('#surpriseButton').click(getSurprise)


    function refreshPage() {
        window.location.reload()
    }

    $('.feather').click(refreshPage)

    function getPresent () {
        var presentPrompts = [
            "Who made you feel happy today?",
            "What is the funniest thing that happened to you today?",
            "What did you enjoy the most in the last 24 hours?",
            "What was your favorite meal in the last 24 hours?",
            "What is something you learned today?",
            "What is one thing you would like to accomplish today?",
            "What is the dominant emotion in your life right now?",
            "What are you most excited about for the upcoming weekend?", 
            "What is going on in the outside world - political, social, spiritual - that affects how you think about the issue?",
            "What is the most important issue you're dealing with in your life right now?",
            "I feel most energized when...",
            "Who are you spending most of your time with?",
            "You are taking a stay-cation today. What would you do?",
            "An old friend re-enters your life today. What would you do with them?"
        ]

        var randomPresent = presentPrompts[Math.floor(Math.random() * presentPrompts.length)]

        const monthNames = [ "January", "February", "March", 'April', "May", "June", "July", "August", "September", "October", "November", "December"
        ]

        var today = new Date();
        var dd = today.getDate();
        var mm = monthNames[today.getMonth()];
        var yy = today.getFullYear();

        today = "Today is " + mm + " " + dd + ', ' + yy + '.';
        $('.textbox').html(today + '<br />' + randomPresent)
    }

    $('#presentButton').click(getPresent)

})


