import json
import threading
import time
from kafka import KafkaConsumer, KafkaProducer
import logging

topicName = 'OpsConsole-Central-Topic'
cafile = 'trustore.pem'
certfile = 'client-tenant.pem'
keyfile = 'client-tenant.key'
brokers = '10.247.9.115:9093,10.247.9.114:9093,10.247.9.116:9093'
#brokers = '10.247.9.191:9093,10.247.9.192:9093,10.247.9.193:9093'


class Producer(threading.Thread):
    daemon = True

    def run(self):
        producer = KafkaProducer(bootstrap_servers=brokers,
                                 value_serializer=lambda v: json.dumps(v).encode('utf-8'), security_protocol='SSL',
                                 ssl_cafile=cafile,
                                 ssl_certfile=certfile,
                                 ssl_keyfile=keyfile)
        while True:
            producer.send(topicName,
                          {
                              "eventIdentifier": {
                                  "type": "DATASET_REFRESH_COMPLETED",
                                  "producer": "ONDEMAND"
                              },
                              "eventParameters": {
                                  "DATASET_NAME": "CSCOKE436PI_UAT"
                              }
                          })
            time.sleep(100)


class Consumer(threading.Thread):
    daemon = True

    def run(self):
        consumer = KafkaConsumer(bootstrap_servers=brokers,
                                 auto_offset_reset='earliest',
                                 value_deserializer=lambda m: json.loads(m.decode('utf-8')), security_protocol='SSL',
                                 ssl_cafile=cafile,
                                 ssl_certfile=certfile,
                                 ssl_keyfile=keyfile)
        consumer.subscribe([topicName])
        for message in consumer:
            print (message)


def main():
    threads = [
        Producer(),
        Consumer()
    ]
    for t in threads:
        t.start()
    time.sleep(10000)


if __name__ == "__main__":
    logging.basicConfig(
        format='%(asctime)s.%(msecs)s:%(name)s:%(thread)d:' +
               '%(levelname)s:%(process)d:%(message)s',
        level=logging.INFO
    )
    main()