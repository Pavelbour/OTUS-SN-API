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
        data: {"result": {"minY": 33.0, "minX": 0.0, "maxY": 2812.0, "series": [{"data": [[0.0, 33.0], [0.1, 34.0], [0.2, 38.0], [0.3, 38.0], [0.4, 50.0], [0.5, 52.0], [0.6, 53.0], [0.7, 58.0], [0.8, 66.0], [0.9, 67.0], [1.0, 81.0], [1.1, 81.0], [1.2, 88.0], [1.3, 88.0], [1.4, 88.0], [1.5, 93.0], [1.6, 95.0], [1.7, 95.0], [1.8, 96.0], [1.9, 96.0], [2.0, 108.0], [2.1, 110.0], [2.2, 111.0], [2.3, 111.0], [2.4, 114.0], [2.5, 116.0], [2.6, 116.0], [2.7, 117.0], [2.8, 117.0], [2.9, 120.0], [3.0, 120.0], [3.1, 120.0], [3.2, 126.0], [3.3, 133.0], [3.4, 133.0], [3.5, 138.0], [3.6, 144.0], [3.7, 151.0], [3.8, 151.0], [3.9, 156.0], [4.0, 156.0], [4.1, 162.0], [4.2, 162.0], [4.3, 169.0], [4.4, 183.0], [4.5, 193.0], [4.6, 197.0], [4.7, 198.0], [4.8, 199.0], [4.9, 204.0], [5.0, 209.0], [5.1, 213.0], [5.2, 214.0], [5.3, 216.0], [5.4, 218.0], [5.5, 223.0], [5.6, 224.0], [5.7, 230.0], [5.8, 230.0], [5.9, 232.0], [6.0, 234.0], [6.1, 236.0], [6.2, 241.0], [6.3, 241.0], [6.4, 243.0], [6.5, 246.0], [6.6, 254.0], [6.7, 257.0], [6.8, 260.0], [6.9, 261.0], [7.0, 267.0], [7.1, 269.0], [7.2, 270.0], [7.3, 271.0], [7.4, 274.0], [7.5, 274.0], [7.6, 281.0], [7.7, 284.0], [7.8, 292.0], [7.9, 303.0], [8.0, 303.0], [8.1, 304.0], [8.2, 306.0], [8.3, 311.0], [8.4, 315.0], [8.5, 317.0], [8.6, 320.0], [8.7, 324.0], [8.8, 338.0], [8.9, 342.0], [9.0, 346.0], [9.1, 348.0], [9.2, 349.0], [9.3, 350.0], [9.4, 350.0], [9.5, 351.0], [9.6, 351.0], [9.7, 353.0], [9.8, 361.0], [9.9, 362.0], [10.0, 362.0], [10.1, 373.0], [10.2, 376.0], [10.3, 378.0], [10.4, 379.0], [10.5, 383.0], [10.6, 391.0], [10.7, 401.0], [10.8, 403.0], [10.9, 403.0], [11.0, 409.0], [11.1, 411.0], [11.2, 415.0], [11.3, 421.0], [11.4, 423.0], [11.5, 424.0], [11.6, 428.0], [11.7, 434.0], [11.8, 436.0], [11.9, 440.0], [12.0, 441.0], [12.1, 445.0], [12.2, 446.0], [12.3, 447.0], [12.4, 449.0], [12.5, 452.0], [12.6, 453.0], [12.7, 454.0], [12.8, 462.0], [12.9, 462.0], [13.0, 472.0], [13.1, 483.0], [13.2, 484.0], [13.3, 492.0], [13.4, 501.0], [13.5, 506.0], [13.6, 507.0], [13.7, 509.0], [13.8, 509.0], [13.9, 511.0], [14.0, 514.0], [14.1, 522.0], [14.2, 522.0], [14.3, 525.0], [14.4, 527.0], [14.5, 537.0], [14.6, 539.0], [14.7, 542.0], [14.8, 543.0], [14.9, 545.0], [15.0, 546.0], [15.1, 550.0], [15.2, 558.0], [15.3, 560.0], [15.4, 560.0], [15.5, 566.0], [15.6, 570.0], [15.7, 573.0], [15.8, 575.0], [15.9, 576.0], [16.0, 580.0], [16.1, 583.0], [16.2, 583.0], [16.3, 585.0], [16.4, 593.0], [16.5, 598.0], [16.6, 601.0], [16.7, 604.0], [16.8, 608.0], [16.9, 619.0], [17.0, 622.0], [17.1, 628.0], [17.2, 629.0], [17.3, 633.0], [17.4, 640.0], [17.5, 640.0], [17.6, 642.0], [17.7, 643.0], [17.8, 643.0], [17.9, 647.0], [18.0, 653.0], [18.1, 654.0], [18.2, 654.0], [18.3, 657.0], [18.4, 660.0], [18.5, 664.0], [18.6, 665.0], [18.7, 665.0], [18.8, 668.0], [18.9, 669.0], [19.0, 671.0], [19.1, 671.0], [19.2, 678.0], [19.3, 685.0], [19.4, 686.0], [19.5, 686.0], [19.6, 691.0], [19.7, 693.0], [19.8, 694.0], [19.9, 695.0], [20.0, 700.0], [20.1, 710.0], [20.2, 711.0], [20.3, 712.0], [20.4, 718.0], [20.5, 720.0], [20.6, 721.0], [20.7, 721.0], [20.8, 724.0], [20.9, 727.0], [21.0, 728.0], [21.1, 729.0], [21.2, 732.0], [21.3, 735.0], [21.4, 736.0], [21.5, 738.0], [21.6, 740.0], [21.7, 743.0], [21.8, 745.0], [21.9, 746.0], [22.0, 748.0], [22.1, 749.0], [22.2, 749.0], [22.3, 758.0], [22.4, 762.0], [22.5, 762.0], [22.6, 763.0], [22.7, 764.0], [22.8, 767.0], [22.9, 767.0], [23.0, 770.0], [23.1, 772.0], [23.2, 772.0], [23.3, 773.0], [23.4, 776.0], [23.5, 776.0], [23.6, 779.0], [23.7, 780.0], [23.8, 786.0], [23.9, 786.0], [24.0, 788.0], [24.1, 795.0], [24.2, 796.0], [24.3, 796.0], [24.4, 801.0], [24.5, 804.0], [24.6, 805.0], [24.7, 808.0], [24.8, 814.0], [24.9, 815.0], [25.0, 821.0], [25.1, 822.0], [25.2, 828.0], [25.3, 833.0], [25.4, 836.0], [25.5, 838.0], [25.6, 839.0], [25.7, 839.0], [25.8, 839.0], [25.9, 840.0], [26.0, 841.0], [26.1, 844.0], [26.2, 845.0], [26.3, 847.0], [26.4, 847.0], [26.5, 848.0], [26.6, 855.0], [26.7, 858.0], [26.8, 861.0], [26.9, 864.0], [27.0, 867.0], [27.1, 867.0], [27.2, 868.0], [27.3, 868.0], [27.4, 869.0], [27.5, 869.0], [27.6, 874.0], [27.7, 874.0], [27.8, 875.0], [27.9, 881.0], [28.0, 887.0], [28.1, 887.0], [28.2, 887.0], [28.3, 890.0], [28.4, 891.0], [28.5, 892.0], [28.6, 894.0], [28.7, 896.0], [28.8, 897.0], [28.9, 898.0], [29.0, 899.0], [29.1, 903.0], [29.2, 903.0], [29.3, 907.0], [29.4, 907.0], [29.5, 907.0], [29.6, 908.0], [29.7, 909.0], [29.8, 912.0], [29.9, 913.0], [30.0, 913.0], [30.1, 914.0], [30.2, 914.0], [30.3, 915.0], [30.4, 916.0], [30.5, 917.0], [30.6, 920.0], [30.7, 920.0], [30.8, 921.0], [30.9, 922.0], [31.0, 923.0], [31.1, 925.0], [31.2, 925.0], [31.3, 927.0], [31.4, 928.0], [31.5, 930.0], [31.6, 932.0], [31.7, 932.0], [31.8, 933.0], [31.9, 934.0], [32.0, 934.0], [32.1, 935.0], [32.2, 936.0], [32.3, 939.0], [32.4, 939.0], [32.5, 941.0], [32.6, 944.0], [32.7, 944.0], [32.8, 945.0], [32.9, 947.0], [33.0, 948.0], [33.1, 950.0], [33.2, 951.0], [33.3, 951.0], [33.4, 952.0], [33.5, 952.0], [33.6, 956.0], [33.7, 956.0], [33.8, 957.0], [33.9, 961.0], [34.0, 965.0], [34.1, 967.0], [34.2, 968.0], [34.3, 969.0], [34.4, 970.0], [34.5, 971.0], [34.6, 973.0], [34.7, 974.0], [34.8, 976.0], [34.9, 977.0], [35.0, 978.0], [35.1, 979.0], [35.2, 981.0], [35.3, 982.0], [35.4, 987.0], [35.5, 987.0], [35.6, 987.0], [35.7, 987.0], [35.8, 993.0], [35.9, 997.0], [36.0, 997.0], [36.1, 1000.0], [36.2, 1005.0], [36.3, 1008.0], [36.4, 1009.0], [36.5, 1010.0], [36.6, 1011.0], [36.7, 1011.0], [36.8, 1014.0], [36.9, 1015.0], [37.0, 1015.0], [37.1, 1017.0], [37.2, 1017.0], [37.3, 1019.0], [37.4, 1024.0], [37.5, 1024.0], [37.6, 1025.0], [37.7, 1028.0], [37.8, 1030.0], [37.9, 1031.0], [38.0, 1031.0], [38.1, 1032.0], [38.2, 1033.0], [38.3, 1035.0], [38.4, 1037.0], [38.5, 1037.0], [38.6, 1037.0], [38.7, 1038.0], [38.8, 1038.0], [38.9, 1041.0], [39.0, 1042.0], [39.1, 1042.0], [39.2, 1045.0], [39.3, 1048.0], [39.4, 1051.0], [39.5, 1051.0], [39.6, 1051.0], [39.7, 1052.0], [39.8, 1053.0], [39.9, 1054.0], [40.0, 1055.0], [40.1, 1056.0], [40.2, 1057.0], [40.3, 1059.0], [40.4, 1059.0], [40.5, 1064.0], [40.6, 1073.0], [40.7, 1073.0], [40.8, 1073.0], [40.9, 1077.0], [41.0, 1077.0], [41.1, 1079.0], [41.2, 1080.0], [41.3, 1081.0], [41.4, 1084.0], [41.5, 1085.0], [41.6, 1086.0], [41.7, 1088.0], [41.8, 1089.0], [41.9, 1090.0], [42.0, 1090.0], [42.1, 1090.0], [42.2, 1090.0], [42.3, 1091.0], [42.4, 1091.0], [42.5, 1093.0], [42.6, 1095.0], [42.7, 1095.0], [42.8, 1095.0], [42.9, 1100.0], [43.0, 1101.0], [43.1, 1103.0], [43.2, 1103.0], [43.3, 1106.0], [43.4, 1106.0], [43.5, 1106.0], [43.6, 1106.0], [43.7, 1107.0], [43.8, 1108.0], [43.9, 1109.0], [44.0, 1110.0], [44.1, 1114.0], [44.2, 1115.0], [44.3, 1115.0], [44.4, 1115.0], [44.5, 1116.0], [44.6, 1121.0], [44.7, 1121.0], [44.8, 1123.0], [44.9, 1123.0], [45.0, 1124.0], [45.1, 1124.0], [45.2, 1125.0], [45.3, 1125.0], [45.4, 1131.0], [45.5, 1135.0], [45.6, 1146.0], [45.7, 1148.0], [45.8, 1148.0], [45.9, 1150.0], [46.0, 1151.0], [46.1, 1152.0], [46.2, 1153.0], [46.3, 1154.0], [46.4, 1155.0], [46.5, 1157.0], [46.6, 1159.0], [46.7, 1162.0], [46.8, 1162.0], [46.9, 1162.0], [47.0, 1162.0], [47.1, 1163.0], [47.2, 1164.0], [47.3, 1167.0], [47.4, 1168.0], [47.5, 1174.0], [47.6, 1176.0], [47.7, 1177.0], [47.8, 1178.0], [47.9, 1180.0], [48.0, 1181.0], [48.1, 1186.0], [48.2, 1191.0], [48.3, 1191.0], [48.4, 1192.0], [48.5, 1194.0], [48.6, 1195.0], [48.7, 1195.0], [48.8, 1196.0], [48.9, 1197.0], [49.0, 1199.0], [49.1, 1204.0], [49.2, 1205.0], [49.3, 1206.0], [49.4, 1206.0], [49.5, 1206.0], [49.6, 1206.0], [49.7, 1206.0], [49.8, 1207.0], [49.9, 1208.0], [50.0, 1208.0], [50.1, 1211.0], [50.2, 1214.0], [50.3, 1215.0], [50.4, 1215.0], [50.5, 1217.0], [50.6, 1219.0], [50.7, 1219.0], [50.8, 1220.0], [50.9, 1223.0], [51.0, 1227.0], [51.1, 1227.0], [51.2, 1228.0], [51.3, 1230.0], [51.4, 1231.0], [51.5, 1232.0], [51.6, 1233.0], [51.7, 1233.0], [51.8, 1233.0], [51.9, 1234.0], [52.0, 1235.0], [52.1, 1235.0], [52.2, 1239.0], [52.3, 1242.0], [52.4, 1242.0], [52.5, 1243.0], [52.6, 1245.0], [52.7, 1246.0], [52.8, 1247.0], [52.9, 1248.0], [53.0, 1251.0], [53.1, 1252.0], [53.2, 1253.0], [53.3, 1254.0], [53.4, 1256.0], [53.5, 1257.0], [53.6, 1258.0], [53.7, 1260.0], [53.8, 1260.0], [53.9, 1261.0], [54.0, 1261.0], [54.1, 1266.0], [54.2, 1266.0], [54.3, 1267.0], [54.4, 1268.0], [54.5, 1268.0], [54.6, 1269.0], [54.7, 1269.0], [54.8, 1271.0], [54.9, 1272.0], [55.0, 1272.0], [55.1, 1275.0], [55.2, 1275.0], [55.3, 1279.0], [55.4, 1280.0], [55.5, 1284.0], [55.6, 1285.0], [55.7, 1286.0], [55.8, 1286.0], [55.9, 1286.0], [56.0, 1287.0], [56.1, 1287.0], [56.2, 1288.0], [56.3, 1288.0], [56.4, 1288.0], [56.5, 1290.0], [56.6, 1294.0], [56.7, 1294.0], [56.8, 1296.0], [56.9, 1298.0], [57.0, 1299.0], [57.1, 1299.0], [57.2, 1299.0], [57.3, 1300.0], [57.4, 1300.0], [57.5, 1300.0], [57.6, 1301.0], [57.7, 1302.0], [57.8, 1302.0], [57.9, 1304.0], [58.0, 1304.0], [58.1, 1304.0], [58.2, 1304.0], [58.3, 1305.0], [58.4, 1306.0], [58.5, 1307.0], [58.6, 1307.0], [58.7, 1308.0], [58.8, 1309.0], [58.9, 1309.0], [59.0, 1310.0], [59.1, 1311.0], [59.2, 1312.0], [59.3, 1312.0], [59.4, 1312.0], [59.5, 1313.0], [59.6, 1314.0], [59.7, 1314.0], [59.8, 1315.0], [59.9, 1315.0], [60.0, 1315.0], [60.1, 1316.0], [60.2, 1317.0], [60.3, 1318.0], [60.4, 1318.0], [60.5, 1319.0], [60.6, 1319.0], [60.7, 1320.0], [60.8, 1320.0], [60.9, 1320.0], [61.0, 1320.0], [61.1, 1321.0], [61.2, 1322.0], [61.3, 1322.0], [61.4, 1323.0], [61.5, 1323.0], [61.6, 1323.0], [61.7, 1324.0], [61.8, 1324.0], [61.9, 1324.0], [62.0, 1324.0], [62.1, 1325.0], [62.2, 1325.0], [62.3, 1325.0], [62.4, 1326.0], [62.5, 1326.0], [62.6, 1326.0], [62.7, 1327.0], [62.8, 1327.0], [62.9, 1327.0], [63.0, 1327.0], [63.1, 1328.0], [63.2, 1328.0], [63.3, 1329.0], [63.4, 1330.0], [63.5, 1330.0], [63.6, 1332.0], [63.7, 1334.0], [63.8, 1336.0], [63.9, 1336.0], [64.0, 1336.0], [64.1, 1337.0], [64.2, 1338.0], [64.3, 1340.0], [64.4, 1340.0], [64.5, 1340.0], [64.6, 1341.0], [64.7, 1343.0], [64.8, 1343.0], [64.9, 1346.0], [65.0, 1347.0], [65.1, 1347.0], [65.2, 1347.0], [65.3, 1348.0], [65.4, 1349.0], [65.5, 1350.0], [65.6, 1352.0], [65.7, 1353.0], [65.8, 1353.0], [65.9, 1353.0], [66.0, 1354.0], [66.1, 1354.0], [66.2, 1354.0], [66.3, 1354.0], [66.4, 1355.0], [66.5, 1356.0], [66.6, 1357.0], [66.7, 1360.0], [66.8, 1360.0], [66.9, 1361.0], [67.0, 1362.0], [67.1, 1365.0], [67.2, 1365.0], [67.3, 1365.0], [67.4, 1366.0], [67.5, 1366.0], [67.6, 1367.0], [67.7, 1368.0], [67.8, 1369.0], [67.9, 1370.0], [68.0, 1370.0], [68.1, 1371.0], [68.2, 1372.0], [68.3, 1372.0], [68.4, 1372.0], [68.5, 1373.0], [68.6, 1374.0], [68.7, 1376.0], [68.8, 1377.0], [68.9, 1378.0], [69.0, 1378.0], [69.1, 1379.0], [69.2, 1379.0], [69.3, 1380.0], [69.4, 1381.0], [69.5, 1381.0], [69.6, 1382.0], [69.7, 1382.0], [69.8, 1382.0], [69.9, 1382.0], [70.0, 1383.0], [70.1, 1383.0], [70.2, 1383.0], [70.3, 1386.0], [70.4, 1387.0], [70.5, 1387.0], [70.6, 1387.0], [70.7, 1390.0], [70.8, 1391.0], [70.9, 1391.0], [71.0, 1392.0], [71.1, 1393.0], [71.2, 1394.0], [71.3, 1395.0], [71.4, 1395.0], [71.5, 1395.0], [71.6, 1396.0], [71.7, 1396.0], [71.8, 1396.0], [71.9, 1396.0], [72.0, 1396.0], [72.1, 1396.0], [72.2, 1397.0], [72.3, 1397.0], [72.4, 1398.0], [72.5, 1398.0], [72.6, 1399.0], [72.7, 1399.0], [72.8, 1399.0], [72.9, 1399.0], [73.0, 1399.0], [73.1, 1399.0], [73.2, 1402.0], [73.3, 1403.0], [73.4, 1403.0], [73.5, 1404.0], [73.6, 1406.0], [73.7, 1406.0], [73.8, 1406.0], [73.9, 1406.0], [74.0, 1407.0], [74.1, 1407.0], [74.2, 1407.0], [74.3, 1408.0], [74.4, 1408.0], [74.5, 1408.0], [74.6, 1409.0], [74.7, 1409.0], [74.8, 1410.0], [74.9, 1410.0], [75.0, 1411.0], [75.1, 1411.0], [75.2, 1411.0], [75.3, 1411.0], [75.4, 1411.0], [75.5, 1412.0], [75.6, 1412.0], [75.7, 1412.0], [75.8, 1413.0], [75.9, 1413.0], [76.0, 1414.0], [76.1, 1414.0], [76.2, 1415.0], [76.3, 1415.0], [76.4, 1415.0], [76.5, 1415.0], [76.6, 1417.0], [76.7, 1417.0], [76.8, 1419.0], [76.9, 1419.0], [77.0, 1420.0], [77.1, 1420.0], [77.2, 1423.0], [77.3, 1423.0], [77.4, 1424.0], [77.5, 1424.0], [77.6, 1424.0], [77.7, 1424.0], [77.8, 1425.0], [77.9, 1425.0], [78.0, 1426.0], [78.1, 1426.0], [78.2, 1426.0], [78.3, 1427.0], [78.4, 1427.0], [78.5, 1427.0], [78.6, 1427.0], [78.7, 1428.0], [78.8, 1428.0], [78.9, 1428.0], [79.0, 1428.0], [79.1, 1428.0], [79.2, 1429.0], [79.3, 1430.0], [79.4, 1430.0], [79.5, 1430.0], [79.6, 1430.0], [79.7, 1430.0], [79.8, 1431.0], [79.9, 1431.0], [80.0, 1433.0], [80.1, 1434.0], [80.2, 1435.0], [80.3, 1437.0], [80.4, 1438.0], [80.5, 1438.0], [80.6, 1438.0], [80.7, 1439.0], [80.8, 1439.0], [80.9, 1439.0], [81.0, 1439.0], [81.1, 1440.0], [81.2, 1440.0], [81.3, 1440.0], [81.4, 1441.0], [81.5, 1441.0], [81.6, 1442.0], [81.7, 1442.0], [81.8, 1442.0], [81.9, 1442.0], [82.0, 1442.0], [82.1, 1444.0], [82.2, 1444.0], [82.3, 1445.0], [82.4, 1446.0], [82.5, 1446.0], [82.6, 1446.0], [82.7, 1446.0], [82.8, 1448.0], [82.9, 1448.0], [83.0, 1449.0], [83.1, 1449.0], [83.2, 1449.0], [83.3, 1450.0], [83.4, 1451.0], [83.5, 1451.0], [83.6, 1453.0], [83.7, 1453.0], [83.8, 1455.0], [83.9, 1455.0], [84.0, 1455.0], [84.1, 1458.0], [84.2, 1458.0], [84.3, 1458.0], [84.4, 1458.0], [84.5, 1459.0], [84.6, 1459.0], [84.7, 1459.0], [84.8, 1460.0], [84.9, 1461.0], [85.0, 1461.0], [85.1, 1462.0], [85.2, 1463.0], [85.3, 1463.0], [85.4, 1463.0], [85.5, 1463.0], [85.6, 1464.0], [85.7, 1464.0], [85.8, 1464.0], [85.9, 1465.0], [86.0, 1465.0], [86.1, 1466.0], [86.2, 1466.0], [86.3, 1466.0], [86.4, 1466.0], [86.5, 1467.0], [86.6, 1467.0], [86.7, 1467.0], [86.8, 1467.0], [86.9, 1467.0], [87.0, 1468.0], [87.1, 1468.0], [87.2, 1468.0], [87.3, 1472.0], [87.4, 1472.0], [87.5, 1472.0], [87.6, 1476.0], [87.7, 1477.0], [87.8, 1477.0], [87.9, 1479.0], [88.0, 1480.0], [88.1, 1480.0], [88.2, 1480.0], [88.3, 1481.0], [88.4, 1481.0], [88.5, 1483.0], [88.6, 1483.0], [88.7, 1485.0], [88.8, 1486.0], [88.9, 1486.0], [89.0, 1487.0], [89.1, 1488.0], [89.2, 1489.0], [89.3, 1490.0], [89.4, 1490.0], [89.5, 1490.0], [89.6, 1491.0], [89.7, 1492.0], [89.8, 1493.0], [89.9, 1496.0], [90.0, 1496.0], [90.1, 1496.0], [90.2, 1497.0], [90.3, 1501.0], [90.4, 1501.0], [90.5, 1502.0], [90.6, 1502.0], [90.7, 1503.0], [90.8, 1504.0], [90.9, 1504.0], [91.0, 1505.0], [91.1, 1505.0], [91.2, 1505.0], [91.3, 1505.0], [91.4, 1505.0], [91.5, 1505.0], [91.6, 1506.0], [91.7, 1508.0], [91.8, 1508.0], [91.9, 1510.0], [92.0, 1510.0], [92.1, 1511.0], [92.2, 1511.0], [92.3, 1514.0], [92.4, 1515.0], [92.5, 1516.0], [92.6, 1519.0], [92.7, 1521.0], [92.8, 1521.0], [92.9, 1522.0], [93.0, 1523.0], [93.1, 1524.0], [93.2, 1524.0], [93.3, 1525.0], [93.4, 1525.0], [93.5, 1526.0], [93.6, 1526.0], [93.7, 1528.0], [93.8, 1528.0], [93.9, 1529.0], [94.0, 1532.0], [94.1, 1532.0], [94.2, 1533.0], [94.3, 1535.0], [94.4, 1538.0], [94.5, 1541.0], [94.6, 1541.0], [94.7, 1542.0], [94.8, 1542.0], [94.9, 1544.0], [95.0, 1547.0], [95.1, 1552.0], [95.2, 1554.0], [95.3, 1555.0], [95.4, 1555.0], [95.5, 1556.0], [95.6, 1556.0], [95.7, 1560.0], [95.8, 1561.0], [95.9, 1561.0], [96.0, 1566.0], [96.1, 1566.0], [96.2, 1568.0], [96.3, 1568.0], [96.4, 1569.0], [96.5, 1571.0], [96.6, 1580.0], [96.7, 1583.0], [96.8, 1588.0], [96.9, 1589.0], [97.0, 1599.0], [97.1, 1601.0], [97.2, 1602.0], [97.3, 1606.0], [97.4, 1608.0], [97.5, 1609.0], [97.6, 1611.0], [97.7, 1611.0], [97.8, 1614.0], [97.9, 1616.0], [98.0, 1618.0], [98.1, 1618.0], [98.2, 1624.0], [98.3, 1631.0], [98.4, 1632.0], [98.5, 1637.0], [98.6, 1639.0], [98.7, 1650.0], [98.8, 1652.0], [98.9, 1883.0], [99.0, 2149.0], [99.1, 2256.0], [99.2, 2307.0], [99.3, 2421.0], [99.4, 2598.0], [99.5, 2619.0], [99.6, 2624.0], [99.7, 2629.0], [99.8, 2699.0], [99.9, 2812.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 171.0, "series": [{"data": [[0.0, 19.0], [600.0, 34.0], [700.0, 43.0], [800.0, 47.0], [900.0, 70.0], [1000.0, 68.0], [1100.0, 62.0], [1200.0, 82.0], [1300.0, 159.0], [1400.0, 171.0], [1500.0, 68.0], [100.0, 30.0], [1600.0, 19.0], [1800.0, 1.0], [2100.0, 1.0], [2200.0, 1.0], [2300.0, 1.0], [2400.0, 1.0], [2500.0, 1.0], [2600.0, 4.0], [2800.0, 1.0], [200.0, 30.0], [300.0, 28.0], [400.0, 27.0], [500.0, 32.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 98.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 768.0, "series": [{"data": [[0.0, 134.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 768.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 98.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 70.02400000000002, "minX": 1.70665926E12, "maxY": 70.02400000000002, "series": [{"data": [[1.70665926E12, 70.02400000000002]], "isOverall": false, "label": "100 Users 10 Requests", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70665926E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 38.0, "minX": 1.0, "maxY": 1522.9230769230771, "series": [{"data": [[2.0, 324.0], [3.0, 232.5], [4.0, 232.0], [5.0, 171.33333333333331], [6.0, 42.0], [7.0, 324.33333333333337], [8.0, 391.0], [9.0, 159.5], [10.0, 141.75], [11.0, 242.66666666666666], [12.0, 175.33333333333331], [13.0, 265.0], [14.0, 205.4], [15.0, 307.5], [16.0, 264.33333333333337], [17.0, 177.5], [18.0, 376.0], [19.0, 323.0], [20.0, 270.75], [21.0, 470.5], [22.0, 277.83333333333337], [23.0, 514.0], [24.0, 296.2], [25.0, 405.66666666666663], [26.0, 335.6], [27.0, 620.6], [28.0, 509.75], [29.0, 493.1428571428571], [30.0, 392.0], [31.0, 553.25], [32.0, 584.0], [33.0, 343.8], [34.0, 513.0], [35.0, 569.6666666666666], [36.0, 531.8333333333334], [37.0, 775.625], [38.0, 450.75], [39.0, 546.4], [40.0, 574.4], [41.0, 613.5], [42.0, 659.5], [43.0, 506.2], [44.0, 716.5], [45.0, 559.8], [46.0, 734.2], [47.0, 681.875], [48.0, 698.75], [49.0, 695.8], [50.0, 730.8], [51.0, 889.047619047619], [52.0, 732.3333333333333], [53.0, 755.5], [54.0, 676.6666666666666], [55.0, 831.25], [56.0, 749.5], [57.0, 695.4], [58.0, 897.5], [59.0, 912.4375], [60.0, 846.5555555555555], [61.0, 986.5], [62.0, 789.2], [63.0, 1106.8055555555554], [64.0, 778.888888888889], [65.0, 1182.7857142857142], [66.0, 1147.1666666666667], [67.0, 1055.5], [68.0, 1082.857142857143], [69.0, 1056.7142857142858], [70.0, 1105.5454545454545], [71.0, 1182.0], [72.0, 1110.75], [73.0, 766.6249999999999], [74.0, 1292.4444444444446], [75.0, 1029.25], [76.0, 1153.0], [77.0, 1038.0], [78.0, 1233.6363636363637], [79.0, 1176.0], [81.0, 1283.8857142857146], [82.0, 1265.5], [83.0, 879.4285714285714], [80.0, 1343.769230769231], [84.0, 1305.8], [85.0, 1405.509433962264], [86.0, 1027.5], [87.0, 1405.7999999999997], [88.0, 1389.0384615384612], [89.0, 1253.0], [90.0, 1419.7674418604647], [91.0, 1251.0], [92.0, 1495.5866666666668], [93.0, 1522.9230769230771], [94.0, 1441.5], [95.0, 1460.9761904761904], [96.0, 1341.342857142857], [97.0, 1222.5999999999997], [98.0, 1101.4375], [1.0, 38.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[70.02400000000002, 1081.7970000000025]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 98.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2766.6666666666665, "minX": 1.70665926E12, "maxY": 484600.0, "series": [{"data": [[1.70665926E12, 484600.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.70665926E12, 2766.6666666666665]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70665926E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1081.7970000000025, "minX": 1.70665926E12, "maxY": 1081.7970000000025, "series": [{"data": [[1.70665926E12, 1081.7970000000025]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70665926E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1081.6640000000016, "minX": 1.70665926E12, "maxY": 1081.6640000000016, "series": [{"data": [[1.70665926E12, 1081.6640000000016]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70665926E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.09500000000000001, "minX": 1.70665926E12, "maxY": 0.09500000000000001, "series": [{"data": [[1.70665926E12, 0.09500000000000001]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70665926E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 33.0, "minX": 1.70665926E12, "maxY": 2812.0, "series": [{"data": [[1.70665926E12, 2812.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.70665926E12, 33.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.70665926E12, 1496.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.70665926E12, 2146.3400000000024]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.70665926E12, 1209.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.70665926E12, 1551.7499999999995]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70665926E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 66.5, "minX": 16.0, "maxY": 1446.5, "series": [{"data": [[16.0, 66.5], [40.0, 572.5], [55.0, 214.0], [57.0, 1181.0], [56.0, 1323.5], [59.0, 1398.0], [60.0, 914.0], [61.0, 1423.0], [62.0, 1446.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 62.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 66.5, "minX": 16.0, "maxY": 1445.5, "series": [{"data": [[16.0, 66.5], [40.0, 572.5], [55.0, 214.0], [57.0, 1181.0], [56.0, 1323.5], [59.0, 1398.0], [60.0, 914.0], [61.0, 1422.0], [62.0, 1445.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 62.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.70665926E12, "maxY": 16.666666666666668, "series": [{"data": [[1.70665926E12, 16.666666666666668]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70665926E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.70665926E12, "maxY": 16.666666666666668, "series": [{"data": [[1.70665926E12, 16.666666666666668]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70665926E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.70665926E12, "maxY": 16.666666666666668, "series": [{"data": [[1.70665926E12, 16.666666666666668]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70665926E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.70665926E12, "maxY": 16.666666666666668, "series": [{"data": [[1.70665926E12, 16.666666666666668]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70665926E12, "title": "Total Transactions Per Second"}},
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

