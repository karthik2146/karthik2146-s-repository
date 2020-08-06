import re
import os
class DefArgs:
    def mymethod(self, arg1, arg2=None, arg3=None):
        if arg2 is None:
            arg2 = 'd'
        if arg3 is None:
            arg3 = 'k'

        print(arg1 + " " + arg2 + " " + arg3)


args = DefArgs()
args.mymethod("s", "r", "t")
args.mymethod("s")

str = 'com.nielsen.gps.aw.common.dfintrfc.exception.DataFactoryException: ' \
      'Not able to resolve the FilterValues for the filter ' \
      'objectRefId : null with the dataitem: 30000008, dataItem Label:Period-to-Date, prompt: null'

m = re.search('Not able to resolve the FilterValues for the filter objectRefId : null with the (.+)$',str)
if m:
    found = m.group(1)

print found

print os.path.dirname(__file__)
configpath = os.path.join(os.path.dirname(__file__),'karthik')
print configpath

a = False
if not a:
    print a

def __init__(self, **context):
    config_path = Variable.get('devstudio_extract_config', default_var='config/devstudio_extract_config.yml')
    config_full_path = os.path.join(os.path.dirname(__file__), config_path)
    app_config = yaml.safe_load(open(config_full_path, 'r'))
    self.config = app_config

