// Exclude keys from model
const exclude = (model = {}, keys = []) => {
    for (let key of keys) {
      delete model[key]
    }
    return model
}

const listExclude = ( models = [], keys = [] ) => {
  const newList = models.map( model => exclude(model, keys));
  return newList;
}

module.exports = {
     exclude,
     listExclude,
}