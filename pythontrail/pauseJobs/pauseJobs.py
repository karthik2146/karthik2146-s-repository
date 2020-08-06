import requests
import json
import sys


class ExtractService:
    baseUrl = 'http://10.247.8.81:8086/extract-studio-services/'
    jobsUrl = 'svc/extracts/jobsandrequests'

    def __init__(self):
        print ('initilize extractservice')

    def getAllJobs(self, user):
        headers = {'Content-Type': 'application/x-www-form-urlencoded', 'SM_USER': user}
        robj = requests.get(ExtractService.baseUrl + ExtractService.jobsUrl, headers=headers)
        return robj.json()


class VisionService:
    baseUrl = 'http://10.247.8.28:8117/jobSchedulerExternal/'
    changeStatusUrl = 'active/default/70/{0}/{1}'

    def __init__(self):
        print ('initilize vision service')

    def changeStatus(self, jobId, status):
        url = VisionService.baseUrl + VisionService.changeStatusUrl.format(jobId, status)
        robj = requests.put(url)
        status = robj.json()['status'] == 200
        if not status:
            print robj.json()
        return status


extractService = ExtractService()
visionService = VisionService()


def mainMethod():
    print('main method')
    #jobsObj = extractService.getAllJobs('karthik.subramaniam@nielsen.com')
    jobsObj = extractService.getAllJobs('kurtis.schmidt@nielsen.com')
    success = 0
    failure = 0
    print jobsObj.length
    for job in jobsObj['data']:
        if 'childAssetId' in job:
            jobId = job['childAssetId']
            jobname = 'EXTRACT_JOB_' + jobId + '_UAT_Kurtis'
            print jobname
            if visionService.changeStatus(jobname, 'false'):
                print 'successfully changed status'
                success += 1
            else:
                failure += 1
    print 'success: {}, failure: {}'.format(success, failure)


mainMethod()
