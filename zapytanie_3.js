printjson( db.people.find({ $and: [{"nationality" : "Germany"}, {"sex" : "Male"}] }).toArray() )
