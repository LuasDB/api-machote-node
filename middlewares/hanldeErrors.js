const logErrors = (err, req, res, next) => {
  console.error('[LOG ERROR]:',err)
  next(err)
}

const errorHandler = (err, req, res, next) => {
  res.status(err.status || 500)
  res.json({ message: err.message })
}
export {
    logErrors,errorHandler
}
