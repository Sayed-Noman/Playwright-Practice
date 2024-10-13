import { test, expect } from '@playwright/test'

// Global Varibales
let userId;

test('Get Users', async ({ request }) => {
    const url = 'https://reqres.in/api/users?page=2'

    // Make Get Request
    const response = await request.get(url)

    const users = await response.json()
    console.log(`List of Users: ${JSON.stringify(users, null, 2)}`)

    // Apply Assertion
    expect(response.status()).toBe(200)
})

test('Create New Users', async ({ request }) => {
    const url = 'https://reqres.in/api/users'
    const body = {
        name: 'Sayed',
        job: 'Software QA'
    }
    const headers = {
        Accept: 'application/json'
    }
    // Make Post Request
    const response = await request.post(url, { data: body, headers: headers })

    const newUser = await response.json()
    const name = newUser.name
    const job = newUser.job
    const id = newUser.id
    const createdAt = newUser.createdAt

    userId = id

    console.log(`New User: ${JSON.stringify(newUser, null, 2)}`)
    console.log(`User Created at ${createdAt} with following Information__
            User Name: ${name}
            Job : ${job}
            User Id: ${id}
    `)

    // Apply Assertion
    expect(response.status()).toBe(201)
})

test('Update Users', async ({ request }) => {
    const url = `https://reqres.in/api/users/${userId}`
    const body = {
        name: 'Sayed',
        job: 'System Engineer'
    }
    const headers = {
        Accept: 'application/json'
    }
    // Make Post Request
    const response = await request.put(url, { data: body, headers: headers })

    const updatedUser = await response.json()
    const name = updatedUser.name
    const job = updatedUser.job
    const updatedAt = updatedUser.updatedAt

    console.log(`Updated User: ${JSON.stringify(updatedUser, null, 2)}`)
    console.log(`User Updated at ${updatedAt} with following Information__
            User Name: ${name}
            Job : ${job}
    `)

    // Apply Assertion
    expect(response.status()).toBe(200)
})

test('Delete Users', async ({ request }) => {
    const url = `https://reqres.in/api/users/${userId}`

    // Make Delete Request
    const response = await request.delete(url)
    console.log(`User Deleted with following__
        id: ${userId}
    `)

    // Apply Assertion
    expect(response.status()).toBe(204)
})