/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 2707.0, "series": [{"data": [[0.0, 2.0], [0.1, 2.0], [0.2, 2.0], [0.3, 3.0], [0.4, 3.0], [0.5, 3.0], [0.6, 3.0], [0.7, 4.0], [0.8, 4.0], [0.9, 4.0], [1.0, 5.0], [1.1, 5.0], [1.2, 5.0], [1.3, 6.0], [1.4, 6.0], [1.5, 6.0], [1.6, 6.0], [1.7, 6.0], [1.8, 7.0], [1.9, 7.0], [2.0, 7.0], [2.1, 8.0], [2.2, 8.0], [2.3, 8.0], [2.4, 9.0], [2.5, 9.0], [2.6, 9.0], [2.7, 10.0], [2.8, 11.0], [2.9, 11.0], [3.0, 12.0], [3.1, 13.0], [3.2, 13.0], [3.3, 13.0], [3.4, 14.0], [3.5, 14.0], [3.6, 14.0], [3.7, 14.0], [3.8, 14.0], [3.9, 14.0], [4.0, 15.0], [4.1, 15.0], [4.2, 15.0], [4.3, 16.0], [4.4, 16.0], [4.5, 17.0], [4.6, 17.0], [4.7, 18.0], [4.8, 18.0], [4.9, 18.0], [5.0, 19.0], [5.1, 19.0], [5.2, 20.0], [5.3, 20.0], [5.4, 21.0], [5.5, 21.0], [5.6, 21.0], [5.7, 23.0], [5.8, 23.0], [5.9, 24.0], [6.0, 30.0], [6.1, 31.0], [6.2, 32.0], [6.3, 34.0], [6.4, 35.0], [6.5, 35.0], [6.6, 38.0], [6.7, 39.0], [6.8, 40.0], [6.9, 42.0], [7.0, 42.0], [7.1, 43.0], [7.2, 43.0], [7.3, 44.0], [7.4, 44.0], [7.5, 47.0], [7.6, 49.0], [7.7, 50.0], [7.8, 51.0], [7.9, 54.0], [8.0, 55.0], [8.1, 57.0], [8.2, 58.0], [8.3, 58.0], [8.4, 58.0], [8.5, 62.0], [8.6, 65.0], [8.7, 65.0], [8.8, 69.0], [8.9, 69.0], [9.0, 69.0], [9.1, 70.0], [9.2, 71.0], [9.3, 76.0], [9.4, 77.0], [9.5, 78.0], [9.6, 81.0], [9.7, 82.0], [9.8, 83.0], [9.9, 84.0], [10.0, 84.0], [10.1, 92.0], [10.2, 95.0], [10.3, 102.0], [10.4, 106.0], [10.5, 108.0], [10.6, 109.0], [10.7, 110.0], [10.8, 117.0], [10.9, 120.0], [11.0, 122.0], [11.1, 134.0], [11.2, 138.0], [11.3, 139.0], [11.4, 142.0], [11.5, 153.0], [11.6, 164.0], [11.7, 165.0], [11.8, 165.0], [11.9, 168.0], [12.0, 174.0], [12.1, 177.0], [12.2, 178.0], [12.3, 181.0], [12.4, 207.0], [12.5, 221.0], [12.6, 223.0], [12.7, 230.0], [12.8, 230.0], [12.9, 231.0], [13.0, 232.0], [13.1, 239.0], [13.2, 242.0], [13.3, 245.0], [13.4, 247.0], [13.5, 251.0], [13.6, 252.0], [13.7, 257.0], [13.8, 259.0], [13.9, 261.0], [14.0, 265.0], [14.1, 272.0], [14.2, 276.0], [14.3, 286.0], [14.4, 287.0], [14.5, 288.0], [14.6, 305.0], [14.7, 306.0], [14.8, 310.0], [14.9, 315.0], [15.0, 316.0], [15.1, 317.0], [15.2, 319.0], [15.3, 330.0], [15.4, 333.0], [15.5, 340.0], [15.6, 340.0], [15.7, 348.0], [15.8, 349.0], [15.9, 355.0], [16.0, 366.0], [16.1, 369.0], [16.2, 372.0], [16.3, 376.0], [16.4, 378.0], [16.5, 382.0], [16.6, 388.0], [16.7, 388.0], [16.8, 401.0], [16.9, 402.0], [17.0, 403.0], [17.1, 403.0], [17.2, 407.0], [17.3, 412.0], [17.4, 415.0], [17.5, 415.0], [17.6, 417.0], [17.7, 422.0], [17.8, 424.0], [17.9, 425.0], [18.0, 426.0], [18.1, 430.0], [18.2, 433.0], [18.3, 446.0], [18.4, 450.0], [18.5, 450.0], [18.6, 452.0], [18.7, 463.0], [18.8, 466.0], [18.9, 472.0], [19.0, 478.0], [19.1, 484.0], [19.2, 484.0], [19.3, 485.0], [19.4, 485.0], [19.5, 487.0], [19.6, 489.0], [19.7, 490.0], [19.8, 491.0], [19.9, 492.0], [20.0, 494.0], [20.1, 495.0], [20.2, 498.0], [20.3, 503.0], [20.4, 504.0], [20.5, 509.0], [20.6, 514.0], [20.7, 521.0], [20.8, 525.0], [20.9, 526.0], [21.0, 526.0], [21.1, 528.0], [21.2, 530.0], [21.3, 531.0], [21.4, 535.0], [21.5, 538.0], [21.6, 543.0], [21.7, 546.0], [21.8, 546.0], [21.9, 556.0], [22.0, 557.0], [22.1, 557.0], [22.2, 558.0], [22.3, 559.0], [22.4, 559.0], [22.5, 562.0], [22.6, 575.0], [22.7, 576.0], [22.8, 577.0], [22.9, 580.0], [23.0, 582.0], [23.1, 583.0], [23.2, 589.0], [23.3, 592.0], [23.4, 603.0], [23.5, 605.0], [23.6, 607.0], [23.7, 612.0], [23.8, 615.0], [23.9, 617.0], [24.0, 621.0], [24.1, 624.0], [24.2, 625.0], [24.3, 626.0], [24.4, 628.0], [24.5, 630.0], [24.6, 640.0], [24.7, 641.0], [24.8, 645.0], [24.9, 646.0], [25.0, 647.0], [25.1, 650.0], [25.2, 650.0], [25.3, 658.0], [25.4, 663.0], [25.5, 663.0], [25.6, 666.0], [25.7, 666.0], [25.8, 667.0], [25.9, 667.0], [26.0, 670.0], [26.1, 672.0], [26.2, 672.0], [26.3, 673.0], [26.4, 677.0], [26.5, 678.0], [26.6, 679.0], [26.7, 683.0], [26.8, 684.0], [26.9, 685.0], [27.0, 685.0], [27.1, 687.0], [27.2, 689.0], [27.3, 689.0], [27.4, 695.0], [27.5, 696.0], [27.6, 699.0], [27.7, 707.0], [27.8, 708.0], [27.9, 711.0], [28.0, 711.0], [28.1, 713.0], [28.2, 713.0], [28.3, 716.0], [28.4, 718.0], [28.5, 722.0], [28.6, 722.0], [28.7, 729.0], [28.8, 731.0], [28.9, 732.0], [29.0, 733.0], [29.1, 733.0], [29.2, 733.0], [29.3, 734.0], [29.4, 736.0], [29.5, 736.0], [29.6, 743.0], [29.7, 743.0], [29.8, 745.0], [29.9, 748.0], [30.0, 748.0], [30.1, 748.0], [30.2, 748.0], [30.3, 749.0], [30.4, 756.0], [30.5, 757.0], [30.6, 766.0], [30.7, 767.0], [30.8, 769.0], [30.9, 778.0], [31.0, 779.0], [31.1, 780.0], [31.2, 780.0], [31.3, 780.0], [31.4, 781.0], [31.5, 782.0], [31.6, 782.0], [31.7, 783.0], [31.8, 784.0], [31.9, 788.0], [32.0, 789.0], [32.1, 790.0], [32.2, 792.0], [32.3, 793.0], [32.4, 794.0], [32.5, 797.0], [32.6, 799.0], [32.7, 800.0], [32.8, 803.0], [32.9, 805.0], [33.0, 807.0], [33.1, 811.0], [33.2, 812.0], [33.3, 813.0], [33.4, 813.0], [33.5, 814.0], [33.6, 815.0], [33.7, 818.0], [33.8, 819.0], [33.9, 820.0], [34.0, 823.0], [34.1, 824.0], [34.2, 825.0], [34.3, 828.0], [34.4, 828.0], [34.5, 828.0], [34.6, 829.0], [34.7, 839.0], [34.8, 840.0], [34.9, 848.0], [35.0, 848.0], [35.1, 849.0], [35.2, 850.0], [35.3, 855.0], [35.4, 855.0], [35.5, 856.0], [35.6, 857.0], [35.7, 857.0], [35.8, 858.0], [35.9, 859.0], [36.0, 860.0], [36.1, 863.0], [36.2, 865.0], [36.3, 865.0], [36.4, 870.0], [36.5, 873.0], [36.6, 874.0], [36.7, 877.0], [36.8, 880.0], [36.9, 885.0], [37.0, 890.0], [37.1, 891.0], [37.2, 892.0], [37.3, 899.0], [37.4, 902.0], [37.5, 906.0], [37.6, 907.0], [37.7, 908.0], [37.8, 909.0], [37.9, 910.0], [38.0, 917.0], [38.1, 917.0], [38.2, 918.0], [38.3, 924.0], [38.4, 924.0], [38.5, 926.0], [38.6, 928.0], [38.7, 934.0], [38.8, 939.0], [38.9, 940.0], [39.0, 943.0], [39.1, 948.0], [39.2, 948.0], [39.3, 949.0], [39.4, 952.0], [39.5, 952.0], [39.6, 952.0], [39.7, 954.0], [39.8, 957.0], [39.9, 957.0], [40.0, 959.0], [40.1, 959.0], [40.2, 963.0], [40.3, 974.0], [40.4, 974.0], [40.5, 976.0], [40.6, 980.0], [40.7, 981.0], [40.8, 982.0], [40.9, 983.0], [41.0, 986.0], [41.1, 987.0], [41.2, 989.0], [41.3, 991.0], [41.4, 995.0], [41.5, 997.0], [41.6, 998.0], [41.7, 1010.0], [41.8, 1011.0], [41.9, 1011.0], [42.0, 1016.0], [42.1, 1016.0], [42.2, 1017.0], [42.3, 1018.0], [42.4, 1018.0], [42.5, 1023.0], [42.6, 1029.0], [42.7, 1036.0], [42.8, 1038.0], [42.9, 1040.0], [43.0, 1041.0], [43.1, 1044.0], [43.2, 1047.0], [43.3, 1051.0], [43.4, 1052.0], [43.5, 1052.0], [43.6, 1053.0], [43.7, 1053.0], [43.8, 1056.0], [43.9, 1057.0], [44.0, 1057.0], [44.1, 1058.0], [44.2, 1059.0], [44.3, 1060.0], [44.4, 1067.0], [44.5, 1068.0], [44.6, 1069.0], [44.7, 1072.0], [44.8, 1076.0], [44.9, 1078.0], [45.0, 1082.0], [45.1, 1083.0], [45.2, 1087.0], [45.3, 1092.0], [45.4, 1094.0], [45.5, 1094.0], [45.6, 1100.0], [45.7, 1104.0], [45.8, 1105.0], [45.9, 1109.0], [46.0, 1115.0], [46.1, 1117.0], [46.2, 1120.0], [46.3, 1120.0], [46.4, 1123.0], [46.5, 1125.0], [46.6, 1125.0], [46.7, 1131.0], [46.8, 1133.0], [46.9, 1136.0], [47.0, 1136.0], [47.1, 1136.0], [47.2, 1138.0], [47.3, 1139.0], [47.4, 1140.0], [47.5, 1142.0], [47.6, 1148.0], [47.7, 1148.0], [47.8, 1149.0], [47.9, 1155.0], [48.0, 1157.0], [48.1, 1162.0], [48.2, 1163.0], [48.3, 1165.0], [48.4, 1166.0], [48.5, 1166.0], [48.6, 1167.0], [48.7, 1167.0], [48.8, 1168.0], [48.9, 1170.0], [49.0, 1171.0], [49.1, 1171.0], [49.2, 1171.0], [49.3, 1171.0], [49.4, 1174.0], [49.5, 1175.0], [49.6, 1175.0], [49.7, 1176.0], [49.8, 1176.0], [49.9, 1176.0], [50.0, 1178.0], [50.1, 1179.0], [50.2, 1181.0], [50.3, 1181.0], [50.4, 1182.0], [50.5, 1184.0], [50.6, 1185.0], [50.7, 1192.0], [50.8, 1194.0], [50.9, 1198.0], [51.0, 1199.0], [51.1, 1199.0], [51.2, 1201.0], [51.3, 1214.0], [51.4, 1215.0], [51.5, 1224.0], [51.6, 1225.0], [51.7, 1226.0], [51.8, 1227.0], [51.9, 1228.0], [52.0, 1228.0], [52.1, 1233.0], [52.2, 1236.0], [52.3, 1236.0], [52.4, 1240.0], [52.5, 1240.0], [52.6, 1242.0], [52.7, 1247.0], [52.8, 1248.0], [52.9, 1251.0], [53.0, 1251.0], [53.1, 1252.0], [53.2, 1253.0], [53.3, 1254.0], [53.4, 1254.0], [53.5, 1254.0], [53.6, 1256.0], [53.7, 1256.0], [53.8, 1258.0], [53.9, 1259.0], [54.0, 1259.0], [54.1, 1263.0], [54.2, 1264.0], [54.3, 1265.0], [54.4, 1267.0], [54.5, 1268.0], [54.6, 1271.0], [54.7, 1272.0], [54.8, 1272.0], [54.9, 1276.0], [55.0, 1278.0], [55.1, 1279.0], [55.2, 1279.0], [55.3, 1281.0], [55.4, 1282.0], [55.5, 1282.0], [55.6, 1283.0], [55.7, 1286.0], [55.8, 1286.0], [55.9, 1288.0], [56.0, 1290.0], [56.1, 1293.0], [56.2, 1299.0], [56.3, 1299.0], [56.4, 1300.0], [56.5, 1302.0], [56.6, 1304.0], [56.7, 1305.0], [56.8, 1305.0], [56.9, 1306.0], [57.0, 1307.0], [57.1, 1308.0], [57.2, 1309.0], [57.3, 1311.0], [57.4, 1311.0], [57.5, 1312.0], [57.6, 1312.0], [57.7, 1313.0], [57.8, 1314.0], [57.9, 1316.0], [58.0, 1318.0], [58.1, 1318.0], [58.2, 1324.0], [58.3, 1325.0], [58.4, 1329.0], [58.5, 1330.0], [58.6, 1331.0], [58.7, 1333.0], [58.8, 1334.0], [58.9, 1335.0], [59.0, 1337.0], [59.1, 1338.0], [59.2, 1341.0], [59.3, 1345.0], [59.4, 1348.0], [59.5, 1350.0], [59.6, 1350.0], [59.7, 1352.0], [59.8, 1353.0], [59.9, 1357.0], [60.0, 1359.0], [60.1, 1359.0], [60.2, 1360.0], [60.3, 1365.0], [60.4, 1367.0], [60.5, 1369.0], [60.6, 1370.0], [60.7, 1370.0], [60.8, 1371.0], [60.9, 1372.0], [61.0, 1373.0], [61.1, 1375.0], [61.2, 1375.0], [61.3, 1378.0], [61.4, 1383.0], [61.5, 1385.0], [61.6, 1386.0], [61.7, 1386.0], [61.8, 1388.0], [61.9, 1388.0], [62.0, 1390.0], [62.1, 1394.0], [62.2, 1397.0], [62.3, 1399.0], [62.4, 1399.0], [62.5, 1400.0], [62.6, 1401.0], [62.7, 1402.0], [62.8, 1404.0], [62.9, 1407.0], [63.0, 1407.0], [63.1, 1410.0], [63.2, 1410.0], [63.3, 1411.0], [63.4, 1414.0], [63.5, 1415.0], [63.6, 1416.0], [63.7, 1418.0], [63.8, 1419.0], [63.9, 1423.0], [64.0, 1426.0], [64.1, 1427.0], [64.2, 1428.0], [64.3, 1428.0], [64.4, 1429.0], [64.5, 1432.0], [64.6, 1433.0], [64.7, 1433.0], [64.8, 1434.0], [64.9, 1434.0], [65.0, 1434.0], [65.1, 1434.0], [65.2, 1438.0], [65.3, 1440.0], [65.4, 1441.0], [65.5, 1441.0], [65.6, 1442.0], [65.7, 1444.0], [65.8, 1445.0], [65.9, 1445.0], [66.0, 1448.0], [66.1, 1450.0], [66.2, 1450.0], [66.3, 1451.0], [66.4, 1452.0], [66.5, 1454.0], [66.6, 1457.0], [66.7, 1457.0], [66.8, 1459.0], [66.9, 1461.0], [67.0, 1461.0], [67.1, 1462.0], [67.2, 1462.0], [67.3, 1463.0], [67.4, 1463.0], [67.5, 1464.0], [67.6, 1467.0], [67.7, 1472.0], [67.8, 1474.0], [67.9, 1475.0], [68.0, 1475.0], [68.1, 1477.0], [68.2, 1477.0], [68.3, 1478.0], [68.4, 1478.0], [68.5, 1479.0], [68.6, 1479.0], [68.7, 1480.0], [68.8, 1484.0], [68.9, 1489.0], [69.0, 1489.0], [69.1, 1490.0], [69.2, 1492.0], [69.3, 1495.0], [69.4, 1498.0], [69.5, 1502.0], [69.6, 1502.0], [69.7, 1504.0], [69.8, 1506.0], [69.9, 1508.0], [70.0, 1509.0], [70.1, 1510.0], [70.2, 1513.0], [70.3, 1514.0], [70.4, 1514.0], [70.5, 1514.0], [70.6, 1515.0], [70.7, 1515.0], [70.8, 1528.0], [70.9, 1529.0], [71.0, 1529.0], [71.1, 1529.0], [71.2, 1538.0], [71.3, 1539.0], [71.4, 1542.0], [71.5, 1543.0], [71.6, 1543.0], [71.7, 1545.0], [71.8, 1545.0], [71.9, 1545.0], [72.0, 1546.0], [72.1, 1552.0], [72.2, 1552.0], [72.3, 1552.0], [72.4, 1555.0], [72.5, 1555.0], [72.6, 1558.0], [72.7, 1559.0], [72.8, 1560.0], [72.9, 1562.0], [73.0, 1565.0], [73.1, 1566.0], [73.2, 1568.0], [73.3, 1569.0], [73.4, 1570.0], [73.5, 1570.0], [73.6, 1573.0], [73.7, 1575.0], [73.8, 1576.0], [73.9, 1578.0], [74.0, 1580.0], [74.1, 1581.0], [74.2, 1582.0], [74.3, 1583.0], [74.4, 1583.0], [74.5, 1588.0], [74.6, 1589.0], [74.7, 1589.0], [74.8, 1592.0], [74.9, 1592.0], [75.0, 1592.0], [75.1, 1597.0], [75.2, 1598.0], [75.3, 1605.0], [75.4, 1610.0], [75.5, 1610.0], [75.6, 1611.0], [75.7, 1611.0], [75.8, 1611.0], [75.9, 1612.0], [76.0, 1614.0], [76.1, 1617.0], [76.2, 1617.0], [76.3, 1618.0], [76.4, 1621.0], [76.5, 1623.0], [76.6, 1623.0], [76.7, 1624.0], [76.8, 1629.0], [76.9, 1629.0], [77.0, 1630.0], [77.1, 1632.0], [77.2, 1634.0], [77.3, 1636.0], [77.4, 1637.0], [77.5, 1637.0], [77.6, 1638.0], [77.7, 1638.0], [77.8, 1639.0], [77.9, 1640.0], [78.0, 1641.0], [78.1, 1642.0], [78.2, 1643.0], [78.3, 1643.0], [78.4, 1644.0], [78.5, 1645.0], [78.6, 1646.0], [78.7, 1648.0], [78.8, 1651.0], [78.9, 1652.0], [79.0, 1653.0], [79.1, 1654.0], [79.2, 1657.0], [79.3, 1662.0], [79.4, 1666.0], [79.5, 1666.0], [79.6, 1668.0], [79.7, 1668.0], [79.8, 1669.0], [79.9, 1671.0], [80.0, 1671.0], [80.1, 1671.0], [80.2, 1672.0], [80.3, 1673.0], [80.4, 1673.0], [80.5, 1675.0], [80.6, 1675.0], [80.7, 1676.0], [80.8, 1678.0], [80.9, 1680.0], [81.0, 1681.0], [81.1, 1681.0], [81.2, 1682.0], [81.3, 1686.0], [81.4, 1689.0], [81.5, 1690.0], [81.6, 1690.0], [81.7, 1694.0], [81.8, 1696.0], [81.9, 1697.0], [82.0, 1699.0], [82.1, 1700.0], [82.2, 1707.0], [82.3, 1708.0], [82.4, 1713.0], [82.5, 1714.0], [82.6, 1715.0], [82.7, 1721.0], [82.8, 1721.0], [82.9, 1723.0], [83.0, 1723.0], [83.1, 1725.0], [83.2, 1726.0], [83.3, 1728.0], [83.4, 1728.0], [83.5, 1729.0], [83.6, 1738.0], [83.7, 1739.0], [83.8, 1741.0], [83.9, 1744.0], [84.0, 1744.0], [84.1, 1745.0], [84.2, 1745.0], [84.3, 1745.0], [84.4, 1745.0], [84.5, 1746.0], [84.6, 1747.0], [84.7, 1749.0], [84.8, 1751.0], [84.9, 1751.0], [85.0, 1752.0], [85.1, 1754.0], [85.2, 1755.0], [85.3, 1757.0], [85.4, 1757.0], [85.5, 1761.0], [85.6, 1762.0], [85.7, 1767.0], [85.8, 1772.0], [85.9, 1773.0], [86.0, 1775.0], [86.1, 1775.0], [86.2, 1775.0], [86.3, 1776.0], [86.4, 1777.0], [86.5, 1780.0], [86.6, 1783.0], [86.7, 1786.0], [86.8, 1787.0], [86.9, 1788.0], [87.0, 1788.0], [87.1, 1791.0], [87.2, 1792.0], [87.3, 1794.0], [87.4, 1794.0], [87.5, 1794.0], [87.6, 1796.0], [87.7, 1797.0], [87.8, 1799.0], [87.9, 1801.0], [88.0, 1803.0], [88.1, 1808.0], [88.2, 1809.0], [88.3, 1811.0], [88.4, 1812.0], [88.5, 1813.0], [88.6, 1815.0], [88.7, 1817.0], [88.8, 1819.0], [88.9, 1823.0], [89.0, 1824.0], [89.1, 1824.0], [89.2, 1825.0], [89.3, 1829.0], [89.4, 1829.0], [89.5, 1835.0], [89.6, 1836.0], [89.7, 1836.0], [89.8, 1837.0], [89.9, 1839.0], [90.0, 1841.0], [90.1, 1843.0], [90.2, 1848.0], [90.3, 1850.0], [90.4, 1851.0], [90.5, 1854.0], [90.6, 1856.0], [90.7, 1864.0], [90.8, 1867.0], [90.9, 1868.0], [91.0, 1879.0], [91.1, 1879.0], [91.2, 1881.0], [91.3, 1882.0], [91.4, 1883.0], [91.5, 1894.0], [91.6, 1900.0], [91.7, 1901.0], [91.8, 1907.0], [91.9, 1918.0], [92.0, 1919.0], [92.1, 1923.0], [92.2, 1926.0], [92.3, 1928.0], [92.4, 1933.0], [92.5, 1936.0], [92.6, 1939.0], [92.7, 1940.0], [92.8, 1943.0], [92.9, 1944.0], [93.0, 1947.0], [93.1, 1951.0], [93.2, 1952.0], [93.3, 1953.0], [93.4, 1959.0], [93.5, 1960.0], [93.6, 1964.0], [93.7, 1965.0], [93.8, 1970.0], [93.9, 1985.0], [94.0, 1991.0], [94.1, 1992.0], [94.2, 1992.0], [94.3, 2001.0], [94.4, 2003.0], [94.5, 2004.0], [94.6, 2004.0], [94.7, 2007.0], [94.8, 2009.0], [94.9, 2013.0], [95.0, 2028.0], [95.1, 2033.0], [95.2, 2035.0], [95.3, 2041.0], [95.4, 2041.0], [95.5, 2043.0], [95.6, 2046.0], [95.7, 2051.0], [95.8, 2058.0], [95.9, 2076.0], [96.0, 2076.0], [96.1, 2079.0], [96.2, 2081.0], [96.3, 2084.0], [96.4, 2086.0], [96.5, 2091.0], [96.6, 2093.0], [96.7, 2095.0], [96.8, 2103.0], [96.9, 2107.0], [97.0, 2115.0], [97.1, 2120.0], [97.2, 2124.0], [97.3, 2130.0], [97.4, 2136.0], [97.5, 2136.0], [97.6, 2136.0], [97.7, 2141.0], [97.8, 2150.0], [97.9, 2155.0], [98.0, 2156.0], [98.1, 2182.0], [98.2, 2193.0], [98.3, 2196.0], [98.4, 2199.0], [98.5, 2209.0], [98.6, 2220.0], [98.7, 2223.0], [98.8, 2225.0], [98.9, 2233.0], [99.0, 2240.0], [99.1, 2271.0], [99.2, 2274.0], [99.3, 2276.0], [99.4, 2281.0], [99.5, 2284.0], [99.6, 2296.0], [99.7, 2328.0], [99.8, 2519.0], [99.9, 2707.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 103.0, "series": [{"data": [[0.0, 103.0], [600.0, 43.0], [700.0, 50.0], [800.0, 47.0], [900.0, 43.0], [1000.0, 39.0], [1100.0, 56.0], [1200.0, 52.0], [1300.0, 61.0], [1400.0, 70.0], [1500.0, 58.0], [100.0, 21.0], [1600.0, 68.0], [1700.0, 59.0], [1800.0, 37.0], [1900.0, 27.0], [2000.0, 25.0], [2100.0, 17.0], [2200.0, 12.0], [2300.0, 1.0], [2500.0, 1.0], [2700.0, 1.0], [200.0, 22.0], [300.0, 22.0], [400.0, 34.0], [500.0, 31.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2700.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 202.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 492.0, "series": [{"data": [[0.0, 202.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 492.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 306.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 73.49700000000001, "minX": 1.70665068E12, "maxY": 73.49700000000001, "series": [{"data": [[1.70665068E12, 73.49700000000001]], "isOverall": false, "label": "100 Users 10 Requests", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70665068E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 39.0, "minX": 1.0, "maxY": 1666.7142857142858, "series": [{"data": [[2.0, 58.0], [3.0, 51.0], [4.0, 39.0], [5.0, 80.66666666666667], [6.0, 268.5], [7.0, 74.5], [8.0, 345.5], [9.0, 263.33333333333337], [10.0, 167.75], [11.0, 220.0], [12.0, 102.5], [13.0, 147.0], [14.0, 273.66666666666663], [15.0, 286.0], [16.0, 270.5], [17.0, 215.75], [18.0, 347.33333333333337], [19.0, 256.3333333333333], [20.0, 303.0], [21.0, 319.0], [22.0, 255.5], [23.0, 405.0], [24.0, 268.5], [25.0, 375.85714285714283], [26.0, 289.0], [27.0, 673.0], [28.0, 457.6], [29.0, 304.25], [30.0, 492.0], [31.0, 649.4444444444445], [32.0, 521.8], [33.0, 857.0], [35.0, 629.2222222222223], [34.0, 677.0], [36.0, 543.5], [37.0, 529.6666666666666], [38.0, 590.5], [39.0, 623.0], [40.0, 579.7142857142858], [41.0, 663.0], [43.0, 746.0], [42.0, 907.0], [44.0, 574.5714285714287], [45.0, 722.0], [46.0, 687.0], [47.0, 911.3333333333335], [48.0, 645.0], [49.0, 909.5], [50.0, 961.9999999999999], [51.0, 754.6], [52.0, 984.7777777777778], [53.0, 1078.4444444444443], [54.0, 896.9], [55.0, 823.0], [56.0, 1028.0], [57.0, 816.3333333333334], [58.0, 965.25], [59.0, 695.5714285714286], [60.0, 1262.5], [61.0, 1107.4], [62.0, 1079.4444444444443], [63.0, 967.5], [64.0, 842.0], [66.0, 1093.6000000000001], [67.0, 1426.0], [65.0, 1182.0], [68.0, 1187.3333333333333], [69.0, 1186.875], [70.0, 1143.5], [71.0, 1295.888888888889], [72.0, 1242.6363636363637], [73.0, 1153.125], [74.0, 1287.1794871794868], [75.0, 1491.7857142857142], [76.0, 1253.111111111111], [77.0, 1331.0], [78.0, 1235.857142857143], [79.0, 1155.0000000000002], [80.0, 1298.0], [81.0, 1306.1249999999998], [82.0, 1487.1176470588234], [83.0, 1338.0], [84.0, 1512.3333333333333], [85.0, 1380.1304347826087], [86.0, 1562.2222222222222], [87.0, 1614.2], [88.0, 1585.3636363636363], [89.0, 1522.0384615384617], [90.0, 1396.6249999999998], [91.0, 1536.8679245283024], [92.0, 1547.9032258064517], [93.0, 1666.7142857142858], [94.0, 1580.5], [95.0, 1635.0], [97.0, 1119.8285714285712], [98.0, 1300.8082191780825], [99.0, 785.1818181818182], [96.0, 1349.2407407407404], [100.0, 800.7311827956989], [1.0, 55.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[73.49700000000001, 1101.2210000000007]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 2766.6666666666665, "minX": 1.70665068E12, "maxY": 446008.73333333334, "series": [{"data": [[1.70665068E12, 446008.73333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.70665068E12, 2766.6666666666665]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70665068E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 1101.2210000000007, "minX": 1.70665068E12, "maxY": 1101.2210000000007, "series": [{"data": [[1.70665068E12, 1101.2210000000007]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70665068E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 1101.1170000000009, "minX": 1.70665068E12, "maxY": 1101.1170000000009, "series": [{"data": [[1.70665068E12, 1101.1170000000009]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70665068E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.08500000000000021, "minX": 1.70665068E12, "maxY": 0.08500000000000021, "series": [{"data": [[1.70665068E12, 0.08500000000000021]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70665068E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 2.0, "minX": 1.70665068E12, "maxY": 2707.0, "series": [{"data": [[1.70665068E12, 2707.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.70665068E12, 2.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.70665068E12, 1840.8]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.70665068E12, 2239.9300000000003]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.70665068E12, 1178.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.70665068E12, 2027.249999999999]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70665068E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 69.5, "minX": 4.0, "maxY": 1668.0, "series": [{"data": [[41.0, 142.0], [43.0, 782.0], [42.0, 1102.5], [45.0, 498.0], [55.0, 1402.0], [56.0, 1179.0], [59.0, 1552.0], [58.0, 1469.0], [60.0, 1668.0], [62.0, 486.0], [4.0, 69.5], [66.0, 1582.0], [67.0, 987.0], [70.0, 1284.5], [74.0, 1521.5], [88.0, 1314.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 88.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 67.5, "minX": 4.0, "maxY": 1668.0, "series": [{"data": [[41.0, 142.0], [43.0, 782.0], [42.0, 1102.0], [45.0, 498.0], [55.0, 1401.0], [56.0, 1179.0], [59.0, 1552.0], [58.0, 1469.0], [60.0, 1668.0], [62.0, 486.0], [4.0, 67.5], [66.0, 1582.0], [67.0, 987.0], [70.0, 1284.5], [74.0, 1521.5], [88.0, 1314.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 88.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 16.666666666666668, "minX": 1.70665068E12, "maxY": 16.666666666666668, "series": [{"data": [[1.70665068E12, 16.666666666666668]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70665068E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 16.666666666666668, "minX": 1.70665068E12, "maxY": 16.666666666666668, "series": [{"data": [[1.70665068E12, 16.666666666666668]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70665068E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 16.666666666666668, "minX": 1.70665068E12, "maxY": 16.666666666666668, "series": [{"data": [[1.70665068E12, 16.666666666666668]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70665068E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 16.666666666666668, "minX": 1.70665068E12, "maxY": 16.666666666666668, "series": [{"data": [[1.70665068E12, 16.666666666666668]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70665068E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

