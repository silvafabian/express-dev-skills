const skills = [
  {text: 'JavaScript', done: true, _id: 001},
  {text: 'HTTML', done: true, _id: 002},
  {text: 'CSS', done: true, _id: 003},
  {text: 'Java', done: false, _id: 004},
  {text: 'Express', done: false, _id: 005},
  {text: 'Node.js', done: false, _id: 006},
  {text: 'Mongoose', done: false, _id: 007},
  {text: 'Git', done: true, _id: 0010},
  {text: 'GitHub', done: true, _id: 011},
  {text: 'MongoDB', done: false, _id: 012},
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