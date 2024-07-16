let firstName = "Bob"
let lastName = "Baker"

switch(true){
    case firstName === "Alice" || lastName === "Baker":
        console.log(`Hello ${firstName} ${lastName}`)
        break

    case firstName === "Bob":
        console.log("What's up Bob?")
        break

    default:
        console.log("Invalid name!")
}