'use strict'

function serveApp(req, res, next) {
    // bootstrap app
    Promise.all([
        req.dao.getLanguages(),
        // hardcoding from English for now
        req.dao.getCourses('en'),
    ])
        .then(([languages, courses]) => {
            const data = {languages, courses}
            res.render('index.hbs', {LangQuiz: data})
        })
        .catch(next)
}

module.exports = serveApp
