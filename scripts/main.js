// console.log("hello this is sooim!")

const event_buttons = document.getElementsByName ("event-button")
const text = document.querySelector("#text")
const photo = document.querySelector("#photo")

const event_paragraphs = {
    "errands": "On their second day in SF, Sooim, Sophie, and Maren proudly strode through the Financial District streets with hecka Target bags in arm, which were filled with many household essentials that their landlord Beatrice so kindly failed to provide them. The first hill workout of many for these queens.",
    "firstday": "Ring Ring! January 3 marked out first day of 15th grade! The girls were stuntin with their fits, as they got to know what would become their workspace for the next three months. We were fed scrumscious burritos by JP.",
    "laundry": "You didn't think SF would only be fun and games did ya? Sophie and Sooim braved those notorious Nob Hill hills to dump their dirty clothes off at to Leroy's Laundromat. While their clothes were washing, they stopped by Trader Joe's to stock up on groceries for the week.",
    "doloresparkgals": "It's Sooim, Sophie, and Maren at Dolores Park! Look at that beautiful sky! There was a man playing La Vie en Rose on his guitar, which really set the mood as the sun set. This is Sooim's favorite view of the city!",
    "berkeley": "Oh what a sunny day! Charlie, Sophie, Sooim, and Maren hiked it up to the University of California Berkeley to explore the campus. It was during this visit that they realized they could've chosen to spend their college years at a place as beautiful as Berkeley, yet they all chose to go to school in Evanston, IL (Oh how wonderful :/).",
}

function change_event(event) {
    text.innerHTML = event_paragraphs[event]
    photo.src = event + ".jpg"
}


event_buttons.forEach(button => {
    button.addEventListener("change", event => {
        change_event(button.value)
    })
})