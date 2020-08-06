from random import *
import json


class Employee:
    const = "hi"  # static variable

    @staticmethod
    def staticm():
        print("i m a static method")

    def __init__(self, name):
        self.name = name
        self.id = randint(1, 100)

    def printname(self):
        print(self.name)
        print (self.id)
        print(Employee.const)

    @staticmethod
    def convertjsontopython():
        json_obj = '{"name": "Brian", "city": "Seattle"}'
        obj = json.loads(json_obj)  # string to json
        print (obj['name'])

    @staticmethod
    def convertPytonToJson():
        d = {"Name": "Luke", "Country": "Canada"}
        obj = json.dumps(d, sort_keys=True, indent=4)  # pretty printing
        print (obj)

    def obj(self):
        return {'code':'sdf'}


karthik = Employee("karthik")
ram = Employee("ram")

Employee.staticm()

karthik.printname()
ram.printname()

Employee.convertjsontopython()
Employee.convertPytonToJson()

name = karthik.obj()
if 'code' in name:
    print 'name is empty'
