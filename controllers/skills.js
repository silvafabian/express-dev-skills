import * as skillDb from '../data/skill-db.js'


function index(req, res) {
  skillDb.find({}, function(error, skills) {
    res.render('skills/index', {
      skills: skills,
      error: error,
    })
  })
}

function show(req, res) {
  todoDb.findById(req.params.id, function(error, todo) {
    res.render('todos/show', {
      todo: todo,
      error: error
    })
  })
}

export {
  index,
  show,
}