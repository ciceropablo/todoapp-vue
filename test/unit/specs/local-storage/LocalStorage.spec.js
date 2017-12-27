import * as ls from '@/local-storage'

describe('local-storage', () => {
  const toDos = [
    {
      id: '0123456789123',
      slug: 'toDo-0123456789123',
      description: 'foo',
      done: false
    }
  ]

  it('`_toDos` deve ser igual a `toDos`', () => {
    ls.saveToDos(ls.key, toDos)
    const _toDos = ls.getToDos(ls.key)
    expect(_toDos).toEqual(toDos)
  })
})
