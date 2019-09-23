// When buttons are clicked, run functions for each array
$(document).ready(function() {
    $('#threeButton').click(getThree) 
    $('#presentButton').click(getPresent)
    $('#pastButton').click(function() {getRandom(pastPrompts)})
    $('#futureButton').click(function() {getRandom(futurePrompts)})
    $('#youButton').click(function() {getRandom(youPrompts)})
    $('#surpriseButton').click(function() {getRandom(surprisePrompts)})

    // declare variable called prev
    let prev;

    //function to generate a random index within each array
    function getRandom(option) {
        let randomIndex = Math.floor(Math.random() * option.length)
        while (prev === randomIndex) {
            randomIndex = Math.floor(Math.random() * option.length)
        }
        // access array item based on generated random index from function
        var random = option[randomIndex]
        $('.textbox').html(random) 
        prev = randomIndex
        
    }
    
    //function for the Present button
    function getPresent () {
        
        //create arrays with full months and days of the week
        var monthNames = [ "January", "February", "March", 'April', "May", "June", "July", "August", "September", "October", "November", "December"
        ]
        var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

        let randomPresentIndex = Math.floor(Math.random() * presentPrompts.length)
        while (prev === randomPresentIndex) {
            randomPresentIndex = Math.floor(Math.random() * presentPrompts.length)
        }
    
        var randomSurprise = presentPrompts[randomPresentIndex]
        //define variables to get today's month, date, year
        var today = new Date()
        var dy = dayNames[today.getDay()]
        var dt = today.getDate()
        var mm = monthNames[today.getMonth()]
        var yy = today.getFullYear()

        todayDate = "Today is " + dy + ", " + mm + " " + dt + ', ' + yy + '.';
        $('.textbox').html(todayDate + '<br />' + randomSurprise)
        prev = randomPresentIndex
    }

    /* function for the 3 Things button*/
    function getThree() {

        let randomThreeIndex = Math.floor(Math.random() * threePrompts.length)
        while (prev === randomThreeIndex) {
            randomThreeIndex = Math.floor(Math.random() * threePrompts.length)
        }
        var randomThree = threePrompts[randomThreeIndex]
        $('.textbox').html("3 " + randomThree)
        prev = randomThreeIndex
    }

    // define arrays with each of the prompt items
    var pastPrompts = [
        "What are the turning points in your life - what would be different now if you had made a different choice in the past.",
        "What is your favorite summer childhood memory?",
        "Describe your favorite hideaway.",
        "What was your most beloved toy?",
        "Write about your first job.",
        "Did you have your own bedroom growing up or did you share with someone else? Describe your room.",
        "Describe a family tradition that you grew up with.",
        "What was your favorite food as a kid? Do you still enjoy it now?",
        "What's the best book you read this year?",
        "What did you want to be when you grew up?",
        "What was the first car that you drove?",
        "Describe a game or activity you played as a kid.",
        "What is the most memorable place you visited in the last year?",
        "What did you really love to do that you don't do anymore. Explain why you stopped and if you'd start again.",
        "If you could go back to a different period in your life, what age or time period would you go back to and why?",
        "What's one lesson you learned in the past five years? How did you learn this lesson?",
        "Describe a difficult experience you had in the past. How did you overcome it?"
    ]

    var futurePrompts = [
        "Where do you want to be in 5 years?",
        "Where do you want to be in 20 years?",
        "What qualities do you want in a romantic partner?",
        "Where would you like to retire?",
        "What home improvements would you like to make?",
        "What is one thing you have been procrastinating. Why?",
        "Make a bucket list.",
        "Write down three activities you can start doing to improve your life.",
        "Describe the places you wish to see or vacations you plan to take.",
        "What is your dream career?",
        "What is the next thing you want to learn?",
        "If you knew that in one year you would die suddenly, would you change anything about the way you are now living? Why?",
    ]

    var youPrompts = [
        "Given the chance of anyone in the world, whom would you want as a dinner guest?",
        "Would you like to be famous? In what way?",
        "What song best sums you up?",
        "What would constitute a perfect day for you?",
        "For what in your life do you feel most grateful?",
        "Is there something that you’ve dreamed of doing for a long time? Why haven’t you done it?",
        "What do you value most in a friendship?",
        "Some of the things that make me happy are...",
        "Describe your first crush.",
        "If you could change anything about the way you were raised, what would it be?",
        "How do you deal with anger?",
        "I wish others knew this about me...",
        "If you could wake up tomorrow having gained any one quality or ability, what would it be?",
        "What makes you unique?",
        "When did you feel truly independent for the first time?",
        "What character traits do you need to work on?",
        "What are you really good at?",
        "Which of your five senses would you say is your strongest?",
        "How do you indulge yourself?",
        "What is your most terrible memory?",
        "How do you think others see you when they meet you for the first time?",
        "What is your favorite holiday?",
    ]

    var surprisePrompts = [
        "If you were able to live to the age of 90 and retain either the mind or body of a 30-year-old for the last 60 years of your life, which would you want?",
        "If a crystal ball could tell you the truth about yourself, your life, the future or anything else, what would you want to know?",
        "Marvel or DC Comics?",
        "If you had to choose, would you rather shrink to the size of an acorn or grow to the size of an elephant",
        "If you had to be an animal for a day, what would you pick and why?",
        "Which Harry Potter character do you most resonate with?",
        "How would you feel about being completely alone for 100 days?",
        "How do you feel about your relationship with your mother?",
        "If you were to die today with no opportunity to communicate with anyone, what would you most regret not having told someone? Why haven’t you told them yet?",
        "If you could meet any fictional character, who would it be?",
        "How old were you when you learned Santa isn't real. How did you find out and how did you react?",
        "You discover you are in your own version of The Truman Show. What would you do?",
        "Before making a telephone call, do you ever rehearse what you are going to say? Why?",
        "What famous world festivals would you like to attend?",
        "You have a chance to be one of the first people to live on Mars. Would you take it?",
        "How often do you recycle? If you don't, why not?"
    ]

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

    var presentPrompts = [
        "Who made you feel happy today?",
        "What is the funniest thing that happened to you today?",
        "What did you enjoy the most in the last 24 hours?",
        "What was your favorite meal in the last 24 hours?",
        "What is something you learned today?",
        "What is one thing you would like to accomplish today?",
        "What is the dominant emotion in your life right now?",
        "What have you read recently on the news that caught your attention?",
        "What are you most excited about for the upcoming weekend?", 
        "What is going on in the outside world - political, social, spiritual - that affects how you think about the issue?",
        "What is the most important issue you're dealing with in your life right now?",
        "What did you do today that you're most proud of?",
        "Who are you spending most of your time with?",
        "You are taking a stay-cation today. What would you do?",
        "An old friend re-enters your life today. What would you do with them?"
    ]


})