import requests
import json
import sys


class DummyAPIService:
    url = "https://reqres.in/api/users?page=2"

    def __init__(self):
        print ('ins')

    def get(self, params):
        robj = requests.get(url=DummyAPIService.url, params=params)
        return robj.json()

    def dummyAPIWithError(self):
        try:
            resp = requests.get('http://www.mocky.io/v2/5ec7c0b22f0000aa3d42742a')
            # resp = requests.get('https://reqres.in/api/users?page=2')
            resp.raise_for_status()
        except:
            # print ('Error: ' + str(e))
            print(error_handling('Error occured while transform, Details: '))
            return None
        else:
            return resp.json()

    def handleErrorwitIfElse(self):
        resp = requests.get('http://www.mocky.io/v2/5ec7c0b22f0000aa3d42742a')
        if resp.ok:
            return resp.json()
        elif resp.status_code == 403:
            return "forbidden"
        else:
            return None

dummyService = DummyAPIService()


def error_handling(stm):
    return stm + 'Error: {}. {}, line: {}'.format(sys.exc_info()[0],
                                                  sys.exc_info()[1],
                                                  sys.exc_info()[2].tb_lineno)


# data = dummyService.get({'address': 'chennai'})
# print (json.dumps(data, sort_keys=True, indent=4)) #converts json to string

# errorrr
def parentmethod():
    # data = dummyService.dummyAPIWithError()
    data = dummyService.handleErrorwitIfElse()
    if data is None:
        print ('data')
    else:
        print (json.dumps(data))


parentmethod()
