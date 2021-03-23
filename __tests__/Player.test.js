const Potion = require('../lib/Potion')
jest.mock('../lib/Potion')
console.log(new Potion())

//node will assume player is player.js
//const { test, expect, jest } = require('@jest/globals')  <---please stop adding automatically :( this broke something while mock
const Player = require('../lib/Player')

test('creates a player object', () => {
    const player = new Player('Dave')

    expect(player.name).toBe('Dave')
    expect(player.health).toEqual(expect.any(Number))
    expect(player.strength).toEqual(expect.any(Number))
    expect(player.agility).toEqual(expect.any(Number))
    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
    )
})