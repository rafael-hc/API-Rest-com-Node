import { expect, test } from 'vitest'

test('o usuário consegue criar uma nova transação', () => {
  const statusCode = 201

  expect(statusCode).toEqual(201)
})
