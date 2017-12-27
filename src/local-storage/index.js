import ls from 'local-storage'

export const key = 'ToDoApp'

export const getToDos = (key) => {
  const dataJSON = ls(key) || `[]`
  return JSON.parse(dataJSON)
}

export const saveToDos = (key, data) => {
  const dataJSON = JSON.stringify(data)
  ls(key, dataJSON)
}
