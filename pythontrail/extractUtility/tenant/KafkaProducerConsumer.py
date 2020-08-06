import json
import threading
import time
from json import dumps
from kafka import KafkaConsumer, KafkaProducer
import logging

cafile='trustore.pem'
certfile='client-tenant.pem'
keyfile='client-tenant.key'
class Producer(threading.Thread):
    daemon = True
    def run(self):
        producer = KafkaProducer(bootstrap_servers='10.247.9.115:9093,10.247.9.114:9093,10.247.9.116:9093',
                                 value_serializer=lambda v: json.dumps(v).encode('utf-8'), security_protocol='SSL',
                                 ssl_cafile=cafile,
                                 ssl_certfile=certfile,
                                 ssl_keyfile=keyfile)
        while True:
            producer.send('OpsConsole-Central-Topic',
        {
            "eventIdentifier": {
                "type": "test",
                "producer": "OnDemand"
            },
            "eventParameters": {
                "parameter": "1",
                "parameter2": "2",
                "fds": ["1","2"]
            }
        })
            time.sleep(1)

class Consumer(threading.Thread):
    daemon = True
    def run(self):
        consumer = KafkaConsumer(bootstrap_servers='10.247.9.115:9093,10.247.9.114:9093,10.247.9.116:9093',
                                 auto_offset_reset='earliest',
                                 value_deserializer=lambda m: json.loads(m.decode('utf-8')), security_protocol='SSL',
                                 ssl_cafile=cafile,
                                 ssl_certfile=certfile,
                                 ssl_keyfile=keyfile)
        consumer.subscribe(['OpsConsole-Central-Topic'])
        for message in consumer:
            print (message)

def main():
    threads = [
        Producer(),
        Consumer()
    ]
    for t in threads:
        t.start()
    time.sleep(10)

if __name__ == "__main__":
    logging.basicConfig(
        format='%(asctime)s.%(msecs)s:%(name)s:%(thread)d:' +
               '%(levelname)s:%(process)d:%(message)s',
        level=logging.INFO
    )
    main()