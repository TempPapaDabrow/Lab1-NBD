printjson(db.people.remove( { "height" : { $gt : "190"}}))

> db.people.remove( { "height" : { $gt : "190"}})
WriteResult({ "nRemoved" : 123 })

