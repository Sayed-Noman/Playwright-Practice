import { test, expect } from '@playwright/test'

let page;
// All Hooks
test.beforeAll(async ({ browser }) => {
    console.log(`beforeAll___________________`)
})

test.afterAll(async ({ browser }) => {
    console.log(`afterAll___________________`)
})

// Each Hooks
test.beforeEach(async ({ browser }) => {
    console.log(`beforeEach_________________`)
})
test.afterEach(async ({ browser }) => {
    console.log(`afterEach__________________`)
})


// Group : 1
test.describe('Group: Sanity', async () => {
    test('Tescase 1', async () => {
        console.log(`Group: Sanity, Testcase: 1`)
    })

    test('Tescase 2', async () => {
        console.log(`Group: Sanity, Testcase: 2`)
    })

    test('Tescase 3', async () => {
        console.log(`Group: Sanity, Testcase: 3`)
    })
})

// Group 2
test.describe('Group: Integration', async () => {
    test('Tescase 1', async () => {
        console.log(`Group: Integration, Testcase: 1`)
    })

    test('Tescase 2', async () => {
        console.log(`Group: Integration, Testcase: 2`)
    })

    test('Tescase 3', async () => {
        console.log(`Group: Integration, Testcase: 3`)
    })
})

// Group 3
test.describe('Group: End-to-End', async () => {
    test('Tescase 1', async () => {
        console.log(`Group: End-to-End, Testcase: 1`)
    })

    test('Tescase 2', async () => {
        console.log(`Group: End-to-End, Testcase: 2`)
    })

    test('Tescase 3', async () => {
        console.log(`Group: End-to-End, Testcase: 3`)
    })
})

// Group 4
test.describe.skip('Group: Security', async () => {
    test('Tescase 1', async () => {
        console.log(`Group: Security, Testcase: 1`)
    })

    test('Tescase 2', async () => {
        console.log(`Group: Security, Testcase: 2`)
    })

    test('Tescase 3', async () => {
        console.log(`Group: Security, Testcase: 3`)
    })
})
