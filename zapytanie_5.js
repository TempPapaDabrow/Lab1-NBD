printjson( db.people.find( {"birth_date" : { $gte : new Date("2000-01-01T00:00:00Z").toISOString() }}, { _id : 0 , "first_name" : 1 , "last_name" : 1, "location.city" : 1 }).toArray() )

