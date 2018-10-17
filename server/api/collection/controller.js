let Collection = require('./model');

/**
 * Controller for Collection model
 */
class CollectionController {  
  /**
   * Find all Collection avaibles
   */
  allCollections(){
    return Collection.findAll();
  }

  /**
   * Create a new Collection    
   * @param {Number} id the id of the Collection 
   * @param {String} season the season of the Collection
   * @param {String} year the year of the Collection
   */
  createCollection(id, season,year){
    Collection.create({ id: id, season: season, year: year}).then(function(created_collection){
      console.log(created_colletion);
    })
  }

  /**
   * Find a Collection with a specific id
   * @param {Number} id the id of the collection to find
   */
  findCollectionById(id){
    Collection.findById(id).then(function(collection){
      console.log(collection);
    });
  }

}

module.exports = CollectionController;