const skills = [
  {text: 'JavaScript', done: 'yes', _id: 125223},
  {text: 'HTTML', done: 'yes', _id: 127904},
  {text: 'CSS', done: 'yes', _id: 139608},
  {text: 'Java', done: 'in progress', _id: 139600},
  {text: 'Express', done: 'in progress', _id: 139601},
  {text: 'Node.js', done: 'in progress', _id: 139602},
  {text: 'Mongoose', done: 'in progress', _id: 139603},
  {text: 'Git', done: 'yes', _id: 139604},
  {text: 'GitHub', done: 'yes', _id: 139605},
]

const find = (conditions, callback) => {
  // see if this works, if not, execute the code in the catch block
  try {
    // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    // If the object is empty, return all the todos
    if (Object.keys(conditions).length === 0) return callback(null, skills)
	// deal with errors
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

export { 
	find
}