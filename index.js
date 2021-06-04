//Import PrismaClient constructor from the @prisma/client node module
const {PrismaClient} = require('@prisma/client')

//Instantiate PrismaClient
const prisma = new PrismaClient()

//Define an async function called main to send queries to the database
async function main() {//nested query creates a new User record together with new Post and Profile records
    // await prisma.user.create({
    //     data: {
    //         name: 'Alice',
    //         email: 'alice@prisma.io',
    //         posts: {
    //             create: {title: 'Hello World'},
    //         },
    //         profile: {
    //             create: {bio: 'I like tutles'},
    //         },
    //     },
    // })

// const allUsers = await prisma.user.findMany({
//     include: {
//         posts: true,
//         profile: true,
//     },
// })
// console.dir(allUsers, {depth: null})
// }

//publish the Post created by using an update query
//async function main() {
    const post = await prisma.post.update({
        where: {id: 1},
        data: {published: true},
    })
    console.log(post)
}

//Call the main function
main()
.catch(e => {
    throw e
})
//Close the database connections when the script terminates
.finally(async() => {
    await prisma.$disconnect()
})
