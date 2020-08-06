def dict():
    employee = {}
    employee["name"] = "karthik"
    employee["id"] = 23
    address = {"street": "geru", "no": "24"}
    employee["address"] = address
    employee[1000] = 100
    emplist = [employee]

    print (employee)
    print ("id: " + str(employee["id"]))
    print (employee.get("name"))
    print (employee.viewkeys())
    print (employee.viewitems())

    return emplist


empl = dict()
for items in empl[0].viewitems():
    print (items)
# del empl[0][100] # deletes key 100

if empl[0].has_key(100):
   print ('has 1000')


