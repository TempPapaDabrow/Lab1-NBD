printjson( db.people.findOne({ $and: [{"nationality" : "China"}, {"sex" : "Female"}] }) )
