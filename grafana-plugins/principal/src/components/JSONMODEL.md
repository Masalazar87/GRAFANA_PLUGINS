{
  "annotations": {
    "list": [
      {
        "builtIn": 1,
        "datasource": "-- Grafana --",
        "enable": true,
        "hide": true,
        "iconColor": "rgba(0, 211, 255, 1)",
        "name": "Annotations & Alerts",
        "type": "dashboard"
      }
    ]
  },
  "editable": true,
  "gnetId": null,
  "graphTooltip": 0,
  "id": 27,
  "links": [],
  "panels": [
    {
      "datasource": "-- Mixed --",
      "fieldConfig": {
        "defaults": {
          "custom": {}
        },
        "overrides": []
      },
      "gridPos": {
        "h": 18,
        "w": 24,
        "x": 0,
        "y": 0
      },
      "id": 2,
      "options": {
        "seriesCountSize": "sm",
        "showSeriesCount": false,
        "text": "Default value of text input option"
      },
      "pluginVersion": "7.4.5",
      "targets": [
        {
          "alias": "ST_UMA1",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "campos": "",
          "datasource": "UMA_ELASTIC_24_10_21",
          "equipo": "",
          "index": "",
          "metrics": [
            {
              "field": "DATA.SYS_ON.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"1_UMA_1\"",
          "refId": "A",
          "timeField": "@timestamp"
        },
        {
          "alias": "AL_UMA1",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "datasource": "UMA_ELASTIC_24_10_21",
          "hide": false,
          "metrics": [
            {
              "field": "DATA.UNIT_ALARM.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"1_UMA_1\"",
          "refId": "B",
          "timeField": "@timestamp"
        },
        {
          "alias": "TS_UMA1",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "datasource": "UMA_ELASTIC_24_10_21",
          "hide": false,
          "metrics": [
            {
              "field": "DATA.ROOM_TEMP.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"1_UMA_1\"",
          "refId": "C",
          "timeField": "@timestamp"
        },
        {
          "alias": "TR_UMA1",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "datasource": "UMA_ELASTIC_24_10_21",
          "hide": false,
          "metrics": [
            {
              "field": "DATA.DELI_AIR_TEMP.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"1_UMA_1\"",
          "refId": "D",
          "timeField": "@timestamp"
        },
        {
          "alias": "ST_UMA2",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "datasource": "UMA_ELASTIC_24_10_21",
          "hide": false,
          "metrics": [
            {
              "field": "DATA.SYS_ON.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"1_UMA_2\"",
          "refId": "E",
          "timeField": "@timestamp"
        },
        {
          "alias": "ST_UMA1",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "campos": "",
          "datasource": "UMA_ELASTIC_24_10_21",
          "equipo": "",
          "index": "",
          "metrics": [
            {
              "field": "DATA.SYS_ON.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"1_UMA_1\"",
          "refId": "A",
          "timeField": "@timestamp"
        },
        {
          "alias": "AL_UMA1",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "datasource": "UMA_ELASTIC_24_10_21",
          "hide": false,
          "metrics": [
            {
              "field": "DATA.UNIT_ALARM.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"1_UMA_1\"",
          "refId": "B",
          "timeField": "@timestamp"
        },
        {
          "alias": "TS_UMA1",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "datasource": "UMA_ELASTIC_24_10_21",
          "hide": false,
          "metrics": [
            {
              "field": "DATA.ROOM_TEMP.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"1_UMA_1\"",
          "refId": "C",
          "timeField": "@timestamp"
        },
        {
          "alias": "TR_UMA1",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "datasource": "UMA_ELASTIC_24_10_21",
          "hide": false,
          "metrics": [
            {
              "field": "DATA.DELI_AIR_TEMP.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"1_UMA_1\"",
          "refId": "D",
          "timeField": "@timestamp"
        },
        {
          "alias": "ST_UMA2",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "campos": "",
          "datasource": "UMA_ELASTIC_24_10_21",
          "equipo": "",
          "index": "",
          "metrics": [
            {
              "field": "DATA.SYS_ON.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"1_UMA_2\"",
          "refId": "E",
          "timeField": "@timestamp"
        },
        {
          "alias": "AL_UMA2",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "datasource": "UMA_ELASTIC_24_10_21",
          "hide": false,
          "metrics": [
            {
              "field": "DATA.UNIT_ALARM.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"1_UMA_2\"",
          "refId": "F",
          "timeField": "@timestamp"
        },
        {
          "alias": "TS_UMA2",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "datasource": "UMA_ELASTIC_24_10_21",
          "hide": false,
          "metrics": [
            {
              "field": "DATA.ROOM_TEMP.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"1_UMA_2\"",
          "refId": "G",
          "timeField": "@timestamp"
        },
        {
          "alias": "TR_UMA2",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "datasource": "UMA_ELASTIC_24_10_21",
          "hide": false,
          "metrics": [
            {
              "field": "DATA.DELI_AIR_TEMP.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"1_UMA_2\"",
          "refId": "H",
          "timeField": "@timestamp"
        },
        {
          "alias": "ST_UMA3",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "campos": "",
          "datasource": "UMA_ELASTIC_24_10_21",
          "equipo": "",
          "index": "",
          "metrics": [
            {
              "field": "DATA.SYS_ON.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"1_UMA_3\"",
          "refId": "I",
          "timeField": "@timestamp"
        },
        {
          "alias": "AL_UMA3",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "datasource": "UMA_ELASTIC_24_10_21",
          "hide": false,
          "metrics": [
            {
              "field": "DATA.UNIT_ALARM.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"1_UMA_3\"",
          "refId": "J",
          "timeField": "@timestamp"
        },
        {
          "alias": "TS_UMA3",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "datasource": "UMA_ELASTIC_24_10_21",
          "hide": false,
          "metrics": [
            {
              "field": "DATA.ROOM_TEMP.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"1_UMA_3\"",
          "refId": "K",
          "timeField": "@timestamp"
        },
        {
          "alias": "TR_UMA3",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "datasource": "UMA_ELASTIC_24_10_21",
          "hide": false,
          "metrics": [
            {
              "field": "DATA.DELI_AIR_TEMP.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"1_UMA_3\"",
          "refId": "L",
          "timeField": "@timestamp"
        },
        {
          "alias": "ST_UMA4",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "campos": "",
          "datasource": "UMA_ELASTIC_24_10_21",
          "equipo": "",
          "index": "",
          "metrics": [
            {
              "field": "DATA.SYS_ON.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"1_UMA_4\"",
          "refId": "M",
          "timeField": "@timestamp"
        },
        {
          "alias": "AL_UMA4",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "datasource": "UMA_ELASTIC_24_10_21",
          "hide": false,
          "metrics": [
            {
              "field": "DATA.UNIT_ALARM.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"1_UMA_4\"",
          "refId": "N",
          "timeField": "@timestamp"
        },
        {
          "alias": "TS_UMA4",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "datasource": "UMA_ELASTIC_24_10_21",
          "hide": false,
          "metrics": [
            {
              "field": "DATA.ROOM_TEMP.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"1_UMA_4\"",
          "refId": "O",
          "timeField": "@timestamp"
        },
        {
          "alias": "TR_UMA4",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "datasource": "UMA_ELASTIC_24_10_21",
          "hide": false,
          "metrics": [
            {
              "field": "DATA.DELI_AIR_TEMP.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"1_UMA_4\"",
          "refId": "P",
          "timeField": "@timestamp"
        },
        {
          "alias": "ST_UMA5",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "campos": "",
          "datasource": "UMA_ELASTIC_24_10_21",
          "equipo": "",
          "index": "",
          "metrics": [
            {
              "field": "DATA.SYS_ON.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"1_UMA_5\"",
          "refId": "Q",
          "timeField": "@timestamp"
        },
        {
          "alias": "AL_UMA5",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "datasource": "UMA_ELASTIC_24_10_21",
          "hide": false,
          "metrics": [
            {
              "field": "DATA.UNIT_ALARM.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"1_UMA_5\"",
          "refId": "R",
          "timeField": "@timestamp"
        },
        {
          "alias": "TS_UMA5",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "datasource": "UMA_ELASTIC_24_10_21",
          "hide": false,
          "metrics": [
            {
              "field": "DATA.ROOM_TEMP.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"1_UMA_5\"",
          "refId": "S",
          "timeField": "@timestamp"
        },
        {
          "alias": "TR_UMA5",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "datasource": "UMA_ELASTIC_24_10_21",
          "hide": false,
          "metrics": [
            {
              "field": "DATA.DELI_AIR_TEMP.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"1_UMA_5\"",
          "refId": "T",
          "timeField": "@timestamp"
        },
        {
          "alias": "ST_UMA6",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "campos": "",
          "datasource": "UMA_ELASTIC_24_10_21",
          "equipo": "",
          "index": "",
          "metrics": [
            {
              "field": "DATA.SYS_ON.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"1_UMA_6\"",
          "refId": "U",
          "timeField": "@timestamp"
        },
        {
          "alias": "AL_UMA6",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "datasource": "UMA_ELASTIC_24_10_21",
          "hide": false,
          "metrics": [
            {
              "field": "DATA.UNIT_ALARM.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"1_UMA_6\"",
          "refId": "V",
          "timeField": "@timestamp"
        },
        {
          "alias": "TS_UMA6",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "datasource": "UMA_ELASTIC_24_10_21",
          "hide": false,
          "metrics": [
            {
              "field": "DATA.ROOM_TEMP.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"1_UMA_6\"",
          "refId": "W",
          "timeField": "@timestamp"
        },
        {
          "alias": "TR_UMA6",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "datasource": "UMA_ELASTIC_24_10_21",
          "hide": false,
          "metrics": [
            {
              "field": "DATA.DELI_AIR_TEMP.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"1_UMA_6\"",
          "refId": "X",
          "timeField": "@timestamp"
        },
        {
          "alias": "ST_UMA7",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "campos": "",
          "datasource": "UMA_ELASTIC_24_10_21",
          "equipo": "",
          "index": "",
          "metrics": [
            {
              "field": "DATA.SYS_ON.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"1_UMA_7\"",
          "refId": "Y",
          "timeField": "@timestamp"
        },
        {
          "alias": "AL_UMA7",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "datasource": "UMA_ELASTIC_24_10_21",
          "hide": false,
          "metrics": [
            {
              "field": "DATA.UNIT_ALARM.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"1_UMA_7\"",
          "refId": "Z",
          "timeField": "@timestamp"
        },
        {
          "alias": "TS_UMA7",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "datasource": "UMA_ELASTIC_24_10_21",
          "hide": false,
          "metrics": [
            {
              "field": "DATA.ROOM_TEMP.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"1_UMA_7\"",
          "refId": "A1",
          "timeField": "@timestamp"
        },
        {
          "alias": "TR_UMA7",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "datasource": "UMA_ELASTIC_24_10_21",
          "hide": false,
          "metrics": [
            {
              "field": "DATA.DELI_AIR_TEMP.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"1_UMA_7\"",
          "refId": "B1",
          "timeField": "@timestamp"
        },
        {
          "alias": "ST_UMA8",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "datasource": "UMA_ELASTIC_24_10_21",
          "hide": false,
          "metrics": [
            {
              "field": "DATA.SYS_ON.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"1_UMA_8\"",
          "refId": "C1",
          "timeField": "@timestamp"
        },
        {
          "alias": "ST_UMA7",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "campos": "",
          "datasource": "UMA_ELASTIC_24_10_21",
          "equipo": "",
          "index": "",
          "metrics": [
            {
              "field": "DATA.SYS_ON.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"1_UMA_7\"",
          "refId": "D1",
          "timeField": "@timestamp"
        },
        {
          "alias": "AL_UMA7",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "datasource": "UMA_ELASTIC_24_10_21",
          "hide": false,
          "metrics": [
            {
              "field": "DATA.UNIT_ALARM.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"1_UMA_7\"",
          "refId": "E1",
          "timeField": "@timestamp"
        },
        {
          "alias": "TS_UMA7",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "datasource": "UMA_ELASTIC_24_10_21",
          "hide": false,
          "metrics": [
            {
              "field": "DATA.ROOM_TEMP.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"1_UMA_7\"",
          "refId": "F1",
          "timeField": "@timestamp"
        },
        {
          "alias": "TR_UMA7",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "datasource": "UMA_ELASTIC_24_10_21",
          "hide": false,
          "metrics": [
            {
              "field": "DATA.DELI_AIR_TEMP.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"1_UMA_7\"",
          "refId": "G1",
          "timeField": "@timestamp"
        },
        {
          "alias": "ST_UMA8",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "campos": "",
          "datasource": "UMA_ELASTIC_24_10_21",
          "equipo": "",
          "index": "",
          "metrics": [
            {
              "field": "DATA.SYS_ON.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"1_UMA_8\"",
          "refId": "H1",
          "timeField": "@timestamp"
        },
        {
          "alias": "AL_UMA8",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "datasource": "UMA_ELASTIC_24_10_21",
          "hide": false,
          "metrics": [
            {
              "field": "DATA.UNIT_ALARM.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"1_UMA_8\"",
          "refId": "I1",
          "timeField": "@timestamp"
        },
        {
          "alias": "TS_UMA8",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "datasource": "UMA_ELASTIC_24_10_21",
          "hide": false,
          "metrics": [
            {
              "field": "DATA.ROOM_TEMP.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"1_UMA_8\"",
          "refId": "J1",
          "timeField": "@timestamp"
        },
        {
          "alias": "TR_UMA8",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "datasource": "UMA_ELASTIC_24_10_21",
          "hide": false,
          "metrics": [
            {
              "field": "DATA.DELI_AIR_TEMP.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"1_UMA_8\"",
          "refId": "K1",
          "timeField": "@timestamp"
        },
        {
          "alias": "ST_UMA9",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "campos": "",
          "datasource": "UMA_ELASTIC_24_10_21",
          "equipo": "",
          "index": "",
          "metrics": [
            {
              "field": "DATA.SYS_ON.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"1_UMA_9\"",
          "refId": "L1",
          "timeField": "@timestamp"
        },
        {
          "alias": "AL_UMA9",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "datasource": "UMA_ELASTIC_24_10_21",
          "hide": false,
          "metrics": [
            {
              "field": "DATA.UNIT_ALARM.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"1_UMA_9\"",
          "refId": "M1",
          "timeField": "@timestamp"
        },
        {
          "alias": "TS_UMA9",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "datasource": "UMA_ELASTIC_24_10_21",
          "hide": false,
          "metrics": [
            {
              "field": "DATA.ROOM_TEMP.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"1_UMA_9\"",
          "refId": "N1",
          "timeField": "@timestamp"
        },
        {
          "alias": "TR_UMA9",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "datasource": "UMA_ELASTIC_24_10_21",
          "hide": false,
          "metrics": [
            {
              "field": "DATA.DELI_AIR_TEMP.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"1_UMA_9\"",
          "refId": "O1",
          "timeField": "@timestamp"
        },
        {
          "alias": "ST_UMA10",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "campos": "",
          "datasource": "UMA_ELASTIC_24_10_21",
          "equipo": "",
          "index": "",
          "metrics": [
            {
              "field": "DATA.SYS_ON.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"1_UMA_10\"",
          "refId": "P1",
          "timeField": "@timestamp"
        },
        {
          "alias": "AL_UMA10",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "datasource": "UMA_ELASTIC_24_10_21",
          "hide": false,
          "metrics": [
            {
              "field": "DATA.UNIT_ALARM.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"1_UMA_10\"",
          "refId": "Q1",
          "timeField": "@timestamp"
        },
        {
          "alias": "TS_UMA10",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "datasource": "UMA_ELASTIC_24_10_21",
          "hide": false,
          "metrics": [
            {
              "field": "DATA.ROOM_TEMP.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"1_UMA_10\"",
          "refId": "R1",
          "timeField": "@timestamp"
        },
        {
          "alias": "TR_UMA10",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "datasource": "UMA_ELASTIC_24_10_21",
          "hide": false,
          "metrics": [
            {
              "field": "DATA.DELI_AIR_TEMP.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"1_UMA_10\"",
          "refId": "S1",
          "timeField": "@timestamp"
        },
        {
          "alias": "ST_UMA11",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "campos": "",
          "datasource": "UMA_ELASTIC_24_10_21",
          "equipo": "",
          "index": "",
          "metrics": [
            {
              "field": "DATA.SYS_ON.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"1_UMA_11\"",
          "refId": "T1",
          "timeField": "@timestamp"
        },
        {
          "alias": "AL_UMA11",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "datasource": "UMA_ELASTIC_24_10_21",
          "hide": false,
          "metrics": [
            {
              "field": "DATA.UNIT_ALARM.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"1_UMA_11\"",
          "refId": "U1",
          "timeField": "@timestamp"
        },
        {
          "alias": "TS_UMA11",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "datasource": "UMA_ELASTIC_24_10_21",
          "hide": false,
          "metrics": [
            {
              "field": "DATA.ROOM_TEMP.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"1_UMA_11\"",
          "refId": "V1",
          "timeField": "@timestamp"
        },
        {
          "alias": "TR_UMA11",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "datasource": "UMA_ELASTIC_24_10_21",
          "hide": false,
          "metrics": [
            {
              "field": "DATA.DELI_AIR_TEMP.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"1_UMA_11\"",
          "refId": "W1",
          "timeField": "@timestamp"
        },
        {
          "alias": "ST_UMA12",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "campos": "",
          "datasource": "UMA_ELASTIC_24_10_21",
          "equipo": "",
          "index": "",
          "metrics": [
            {
              "field": "DATA.SYS_ON.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"1_UMA_12\"",
          "refId": "X1",
          "timeField": "@timestamp"
        },
        {
          "alias": "AL_UMA12",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "datasource": "UMA_ELASTIC_24_10_21",
          "hide": false,
          "metrics": [
            {
              "field": "DATA.UNIT_ALARM.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"1_UMA_12\"",
          "refId": "Y1",
          "timeField": "@timestamp"
        },
        {
          "alias": "TS_UMA12",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "datasource": "UMA_ELASTIC_24_10_21",
          "hide": false,
          "metrics": [
            {
              "field": "DATA.ROOM_TEMP.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"1_UMA_12\"",
          "refId": "Z1",
          "timeField": "@timestamp"
        },
        {
          "alias": "TR_UMA12",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "datasource": "UMA_ELASTIC_24_10_21",
          "hide": false,
          "metrics": [
            {
              "field": "DATA.DELI_AIR_TEMP.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"1_UMA_12\"",
          "refId": "A2",
          "timeField": "@timestamp"
        },
        {
          "alias": "ST_UPS1_1A",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "datasource": "UPS_ELASTIC_15_09_21",
          "hide": false,
          "metrics": [
            {
              "field": "DATA.INVERTER_ON_OFF.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"UPS_1_1A\"",
          "refId": "B2",
          "timeField": "@timestamp"
        },
        {
          "alias": "ST_UPS1_2A",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "datasource": "UPS_ELASTIC_15_09_21",
          "hide": false,
          "metrics": [
            {
              "field": "DATA.INVERTER_ON_OFF.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"UPS_1_2A\"",
          "refId": "C2",
          "timeField": "@timestamp"
        },
        {
          "alias": "ST_UPS1_3A",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "datasource": "UPS_ELASTIC_15_09_21",
          "hide": false,
          "metrics": [
            {
              "field": "DATA.INVERTER_ON_OFF.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"UPS_1_3A\"",
          "refId": "D2",
          "timeField": "@timestamp"
        },
        {
          "alias": "ST_UPS1_4A",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "datasource": "UPS_ELASTIC_15_09_21",
          "hide": false,
          "metrics": [
            {
              "field": "DATA.INVERTER_ON_OFF.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"UPS_1_4A\"",
          "refId": "E2",
          "timeField": "@timestamp"
        },
        {
          "alias": "ST_UPS1_5A",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "datasource": "UPS_ELASTIC_15_09_21",
          "hide": false,
          "metrics": [
            {
              "field": "DATA.INVERTER_ON_OFF.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"UPS_1_5A\"",
          "refId": "F2",
          "timeField": "@timestamp"
        },
        {
          "alias": "ST_UPS1_6A",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "datasource": "UPS_ELASTIC_15_09_21",
          "hide": false,
          "metrics": [
            {
              "field": "DATA.INVERTER_ON_OFF.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"UPS_1_6A\"",
          "refId": "G2",
          "timeField": "@timestamp"
        },
        {
          "alias": "ST_UPS_CHI1A",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "datasource": "UPS_ELASTIC_15_09_21",
          "hide": false,
          "metrics": [
            {
              "field": "DATA.INVERTER_ON_OFF.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"UPS_CHI_1A\"",
          "refId": "H2",
          "timeField": "@timestamp"
        },
        {
          "alias": "ST_UPS2_1A",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "datasource": "UPS_ELASTIC_15_09_21",
          "hide": false,
          "metrics": [
            {
              "field": "DATA.INVERTER_ON_OFF.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"UPS_2_1A\"",
          "refId": "I2",
          "timeField": "@timestamp"
        },
        {
          "alias": "ST_UPS2_2A",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "datasource": "UPS_ELASTIC_15_09_21",
          "hide": false,
          "metrics": [
            {
              "field": "DATA.INVERTER_ON_OFF.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"UPS_2_2A\"",
          "refId": "J2",
          "timeField": "@timestamp"
        },
        {
          "alias": "ST_UPS2_3A",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "datasource": "UPS_ELASTIC_15_09_21",
          "hide": false,
          "metrics": [
            {
              "field": "DATA.INVERTER_ON_OFF.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"UPS_2_3A\"",
          "refId": "K2",
          "timeField": "@timestamp"
        },
        {
          "alias": "ST_UPS2_4A",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "datasource": "UPS_ELASTIC_15_09_21",
          "hide": false,
          "metrics": [
            {
              "field": "DATA.INVERTER_ON_OFF.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"UPS_2_4A\"",
          "refId": "L2",
          "timeField": "@timestamp"
        },
        {
          "alias": "ST_UPS2_5A",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "datasource": "UPS_ELASTIC_15_09_21",
          "hide": false,
          "metrics": [
            {
              "field": "DATA.INVERTER_ON_OFF.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"UPS_2_5A\"",
          "refId": "M2",
          "timeField": "@timestamp"
        },
        {
          "alias": "ST_UPS2_6A",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "datasource": "UPS_ELASTIC_15_09_21",
          "hide": false,
          "metrics": [
            {
              "field": "DATA.INVERTER_ON_OFF.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"UPS_2_6A\"",
          "refId": "N2",
          "timeField": "@timestamp"
        },
        {
          "alias": "ST_UPS_CHI2A",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "datasource": "UPS_ELASTIC_15_09_21",
          "hide": false,
          "metrics": [
            {
              "field": "DATA.INVERTER_ON_OFF.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "EQUIPO: \"UPS_CHI_2A\"",
          "refId": "O2",
          "timeField": "@timestamp"
        }
      ],
      "timeFrom": null,
      "timeShift": null,
      "title": "Panel Title",
      "type": "telconet-principal"
    }
  ],
  "refresh": "5s",
  "schemaVersion": 27,
  "style": "dark",
  "tags": [],
  "templating": {
    "list": []
  },
  "time": {
    "from": "now-1h",
    "to": "now"
  },
  "timepicker": {},
  "timezone": "",
  "title": "PRINCIPAL",
  "uid": "Zz1XUb5nk",
  "version": 32
}