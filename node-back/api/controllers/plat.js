const Plat = require('../models/plat');

exports.get_all_plat = (req, res, next) => {
        Plat
        .find()
        .select('_id nomPlat prixPlat descriptionPlat imgPlat')
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                plats: docs.map(doc => {
                    return {
                        _id: doc._id,
                        nomPlat: doc.nomPlat,
                        prixPlat: doc.prixPlat,
                        descriptionPlat: doc.descriptionPlat,
                        imgPlat: doc.imgPlat,
                        request: {
                            type: 'GET',
                            url: 'http://localhost:3001/avion/' + doc._id
                        }
                    }
                })
            };
            console.log(docs);
            res.status(200).json(response);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error : err
            })
        });
}

exports.create_plat = (req, res, next) => {
    const plat = new Plat({
        nomPlat: req.body.nomPlat,
        descriptionPlat: req.body.descriptionPlat,
        prixPlat: req.body.prixPlat,
        imgPlat: req.body.imgPlat
    });
    plat
    .save()
    .then(result => {
        console.log(result);
        res.status(200).json({
            message: "Successfully inserted!",
            createdAvion:{
                _id: result._id,
                nomPlat: result.nomPlat,
                prixPlat: result.prixPlat,
                request: {
                    type: 'POST',
                    url: 'http://localhost:3001/avion/' + result._id
            }
        }
        });
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({error: err});
    });
};

exports.get_plat_by_id = (req, res, next) => {
    const id = req.params.idPlat;
    Plat.findById(id)
    .select('_id nomPlat prixPlat descriptionPlat imgPlat')
    .exec()
    .then(doc =>{
        console.log("From database", doc);
        res.status(200).json(doc);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
};

exports.update_plat = (req, res, next) => {
    const id = req.params.idPlat;
    const updateOps = {};
    for(const ops of req.body){
        updateOps[ops.propName] = ops.value;
    }
    Plat.updateOne({_id: id}, { $set: updateOps })
    .exec()
    .then(result => {
        res.status(200).json(result);
    })
    .catch( err => {
        console.log(err);
        res.status(500).json({
            error: err
        });   
    });
}

exports.delete_avion = (req, res, next) => {
    const id = req.params.idPlat;
    Plat.remove({_id: id})
    .exec()
    .then(result => {
        res.status(200).json(result);
    })
    .catch( err => {
        console.log(err);
        res.status(500).json({
            error: err
        });   
    });
}