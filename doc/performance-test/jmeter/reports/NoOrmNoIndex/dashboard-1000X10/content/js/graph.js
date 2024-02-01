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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 3166.0, "series": [{"data": [[0.0, 1.0], [0.1, 2.0], [0.2, 2.0], [0.3, 2.0], [0.4, 2.0], [0.5, 2.0], [0.6, 2.0], [0.7, 2.0], [0.8, 2.0], [0.9, 2.0], [1.0, 2.0], [1.1, 2.0], [1.2, 2.0], [1.3, 2.0], [1.4, 2.0], [1.5, 3.0], [1.6, 3.0], [1.7, 3.0], [1.8, 3.0], [1.9, 3.0], [2.0, 3.0], [2.1, 3.0], [2.2, 3.0], [2.3, 3.0], [2.4, 3.0], [2.5, 3.0], [2.6, 3.0], [2.7, 3.0], [2.8, 3.0], [2.9, 3.0], [3.0, 3.0], [3.1, 3.0], [3.2, 3.0], [3.3, 3.0], [3.4, 3.0], [3.5, 3.0], [3.6, 3.0], [3.7, 3.0], [3.8, 3.0], [3.9, 3.0], [4.0, 3.0], [4.1, 3.0], [4.2, 3.0], [4.3, 4.0], [4.4, 4.0], [4.5, 4.0], [4.6, 4.0], [4.7, 4.0], [4.8, 4.0], [4.9, 4.0], [5.0, 4.0], [5.1, 4.0], [5.2, 4.0], [5.3, 4.0], [5.4, 4.0], [5.5, 4.0], [5.6, 4.0], [5.7, 4.0], [5.8, 4.0], [5.9, 4.0], [6.0, 4.0], [6.1, 5.0], [6.2, 5.0], [6.3, 5.0], [6.4, 5.0], [6.5, 5.0], [6.6, 5.0], [6.7, 5.0], [6.8, 5.0], [6.9, 5.0], [7.0, 5.0], [7.1, 5.0], [7.2, 5.0], [7.3, 5.0], [7.4, 5.0], [7.5, 5.0], [7.6, 5.0], [7.7, 5.0], [7.8, 5.0], [7.9, 5.0], [8.0, 6.0], [8.1, 6.0], [8.2, 6.0], [8.3, 6.0], [8.4, 6.0], [8.5, 6.0], [8.6, 6.0], [8.7, 6.0], [8.8, 6.0], [8.9, 6.0], [9.0, 6.0], [9.1, 6.0], [9.2, 6.0], [9.3, 6.0], [9.4, 6.0], [9.5, 7.0], [9.6, 7.0], [9.7, 7.0], [9.8, 7.0], [9.9, 7.0], [10.0, 7.0], [10.1, 7.0], [10.2, 7.0], [10.3, 7.0], [10.4, 7.0], [10.5, 7.0], [10.6, 7.0], [10.7, 8.0], [10.8, 8.0], [10.9, 8.0], [11.0, 8.0], [11.1, 8.0], [11.2, 8.0], [11.3, 8.0], [11.4, 8.0], [11.5, 8.0], [11.6, 8.0], [11.7, 8.0], [11.8, 8.0], [11.9, 8.0], [12.0, 9.0], [12.1, 9.0], [12.2, 9.0], [12.3, 9.0], [12.4, 9.0], [12.5, 9.0], [12.6, 9.0], [12.7, 9.0], [12.8, 9.0], [12.9, 9.0], [13.0, 9.0], [13.1, 10.0], [13.2, 10.0], [13.3, 10.0], [13.4, 10.0], [13.5, 10.0], [13.6, 10.0], [13.7, 10.0], [13.8, 10.0], [13.9, 10.0], [14.0, 10.0], [14.1, 10.0], [14.2, 10.0], [14.3, 10.0], [14.4, 11.0], [14.5, 11.0], [14.6, 11.0], [14.7, 11.0], [14.8, 11.0], [14.9, 11.0], [15.0, 11.0], [15.1, 11.0], [15.2, 11.0], [15.3, 11.0], [15.4, 11.0], [15.5, 11.0], [15.6, 11.0], [15.7, 12.0], [15.8, 12.0], [15.9, 12.0], [16.0, 12.0], [16.1, 12.0], [16.2, 12.0], [16.3, 12.0], [16.4, 12.0], [16.5, 12.0], [16.6, 12.0], [16.7, 13.0], [16.8, 13.0], [16.9, 13.0], [17.0, 13.0], [17.1, 13.0], [17.2, 13.0], [17.3, 13.0], [17.4, 13.0], [17.5, 13.0], [17.6, 13.0], [17.7, 13.0], [17.8, 14.0], [17.9, 14.0], [18.0, 14.0], [18.1, 14.0], [18.2, 14.0], [18.3, 14.0], [18.4, 15.0], [18.5, 15.0], [18.6, 15.0], [18.7, 15.0], [18.8, 15.0], [18.9, 15.0], [19.0, 15.0], [19.1, 16.0], [19.2, 16.0], [19.3, 16.0], [19.4, 16.0], [19.5, 16.0], [19.6, 16.0], [19.7, 16.0], [19.8, 16.0], [19.9, 17.0], [20.0, 17.0], [20.1, 17.0], [20.2, 17.0], [20.3, 17.0], [20.4, 17.0], [20.5, 17.0], [20.6, 18.0], [20.7, 18.0], [20.8, 18.0], [20.9, 18.0], [21.0, 18.0], [21.1, 18.0], [21.2, 19.0], [21.3, 19.0], [21.4, 19.0], [21.5, 19.0], [21.6, 19.0], [21.7, 19.0], [21.8, 19.0], [21.9, 20.0], [22.0, 20.0], [22.1, 20.0], [22.2, 20.0], [22.3, 20.0], [22.4, 20.0], [22.5, 20.0], [22.6, 21.0], [22.7, 21.0], [22.8, 21.0], [22.9, 21.0], [23.0, 21.0], [23.1, 21.0], [23.2, 22.0], [23.3, 22.0], [23.4, 22.0], [23.5, 22.0], [23.6, 22.0], [23.7, 22.0], [23.8, 22.0], [23.9, 23.0], [24.0, 23.0], [24.1, 23.0], [24.2, 23.0], [24.3, 23.0], [24.4, 23.0], [24.5, 23.0], [24.6, 24.0], [24.7, 24.0], [24.8, 24.0], [24.9, 24.0], [25.0, 25.0], [25.1, 25.0], [25.2, 25.0], [25.3, 25.0], [25.4, 26.0], [25.5, 26.0], [25.6, 26.0], [25.7, 26.0], [25.8, 26.0], [25.9, 27.0], [26.0, 27.0], [26.1, 27.0], [26.2, 27.0], [26.3, 27.0], [26.4, 28.0], [26.5, 28.0], [26.6, 28.0], [26.7, 28.0], [26.8, 29.0], [26.9, 29.0], [27.0, 29.0], [27.1, 29.0], [27.2, 30.0], [27.3, 30.0], [27.4, 30.0], [27.5, 30.0], [27.6, 30.0], [27.7, 31.0], [27.8, 31.0], [27.9, 31.0], [28.0, 31.0], [28.1, 32.0], [28.2, 32.0], [28.3, 32.0], [28.4, 33.0], [28.5, 33.0], [28.6, 33.0], [28.7, 33.0], [28.8, 34.0], [28.9, 34.0], [29.0, 34.0], [29.1, 35.0], [29.2, 35.0], [29.3, 35.0], [29.4, 35.0], [29.5, 35.0], [29.6, 36.0], [29.7, 36.0], [29.8, 36.0], [29.9, 37.0], [30.0, 37.0], [30.1, 37.0], [30.2, 38.0], [30.3, 38.0], [30.4, 38.0], [30.5, 38.0], [30.6, 39.0], [30.7, 39.0], [30.8, 39.0], [30.9, 39.0], [31.0, 39.0], [31.1, 40.0], [31.2, 40.0], [31.3, 40.0], [31.4, 40.0], [31.5, 40.0], [31.6, 41.0], [31.7, 41.0], [31.8, 41.0], [31.9, 41.0], [32.0, 42.0], [32.1, 42.0], [32.2, 42.0], [32.3, 42.0], [32.4, 42.0], [32.5, 43.0], [32.6, 43.0], [32.7, 43.0], [32.8, 43.0], [32.9, 44.0], [33.0, 44.0], [33.1, 44.0], [33.2, 44.0], [33.3, 45.0], [33.4, 45.0], [33.5, 45.0], [33.6, 46.0], [33.7, 46.0], [33.8, 46.0], [33.9, 46.0], [34.0, 47.0], [34.1, 47.0], [34.2, 47.0], [34.3, 47.0], [34.4, 47.0], [34.5, 48.0], [34.6, 48.0], [34.7, 48.0], [34.8, 48.0], [34.9, 49.0], [35.0, 49.0], [35.1, 49.0], [35.2, 50.0], [35.3, 50.0], [35.4, 50.0], [35.5, 51.0], [35.6, 51.0], [35.7, 52.0], [35.8, 52.0], [35.9, 52.0], [36.0, 53.0], [36.1, 53.0], [36.2, 54.0], [36.3, 54.0], [36.4, 54.0], [36.5, 55.0], [36.6, 55.0], [36.7, 55.0], [36.8, 56.0], [36.9, 56.0], [37.0, 56.0], [37.1, 57.0], [37.2, 57.0], [37.3, 58.0], [37.4, 58.0], [37.5, 59.0], [37.6, 59.0], [37.7, 60.0], [37.8, 60.0], [37.9, 61.0], [38.0, 61.0], [38.1, 62.0], [38.2, 62.0], [38.3, 62.0], [38.4, 63.0], [38.5, 63.0], [38.6, 63.0], [38.7, 64.0], [38.8, 64.0], [38.9, 65.0], [39.0, 65.0], [39.1, 66.0], [39.2, 66.0], [39.3, 67.0], [39.4, 67.0], [39.5, 68.0], [39.6, 68.0], [39.7, 68.0], [39.8, 69.0], [39.9, 70.0], [40.0, 70.0], [40.1, 71.0], [40.2, 71.0], [40.3, 72.0], [40.4, 72.0], [40.5, 73.0], [40.6, 74.0], [40.7, 74.0], [40.8, 75.0], [40.9, 75.0], [41.0, 76.0], [41.1, 76.0], [41.2, 77.0], [41.3, 78.0], [41.4, 78.0], [41.5, 79.0], [41.6, 80.0], [41.7, 80.0], [41.8, 81.0], [41.9, 81.0], [42.0, 82.0], [42.1, 83.0], [42.2, 84.0], [42.3, 85.0], [42.4, 86.0], [42.5, 88.0], [42.6, 89.0], [42.7, 90.0], [42.8, 90.0], [42.9, 92.0], [43.0, 93.0], [43.1, 94.0], [43.2, 94.0], [43.3, 96.0], [43.4, 98.0], [43.5, 99.0], [43.6, 101.0], [43.7, 103.0], [43.8, 104.0], [43.9, 106.0], [44.0, 108.0], [44.1, 111.0], [44.2, 112.0], [44.3, 116.0], [44.4, 120.0], [44.5, 124.0], [44.6, 126.0], [44.7, 132.0], [44.8, 137.0], [44.9, 145.0], [45.0, 152.0], [45.1, 156.0], [45.2, 165.0], [45.3, 181.0], [45.4, 195.0], [45.5, 218.0], [45.6, 237.0], [45.7, 246.0], [45.8, 271.0], [45.9, 295.0], [46.0, 323.0], [46.1, 345.0], [46.2, 375.0], [46.3, 397.0], [46.4, 414.0], [46.5, 427.0], [46.6, 443.0], [46.7, 459.0], [46.8, 474.0], [46.9, 487.0], [47.0, 498.0], [47.1, 519.0], [47.2, 534.0], [47.3, 556.0], [47.4, 567.0], [47.5, 578.0], [47.6, 595.0], [47.7, 610.0], [47.8, 628.0], [47.9, 637.0], [48.0, 653.0], [48.1, 669.0], [48.2, 682.0], [48.3, 693.0], [48.4, 701.0], [48.5, 710.0], [48.6, 722.0], [48.7, 733.0], [48.8, 741.0], [48.9, 750.0], [49.0, 755.0], [49.1, 763.0], [49.2, 772.0], [49.3, 777.0], [49.4, 783.0], [49.5, 791.0], [49.6, 800.0], [49.7, 807.0], [49.8, 820.0], [49.9, 830.0], [50.0, 833.0], [50.1, 842.0], [50.2, 846.0], [50.3, 852.0], [50.4, 857.0], [50.5, 868.0], [50.6, 877.0], [50.7, 886.0], [50.8, 892.0], [50.9, 904.0], [51.0, 914.0], [51.1, 922.0], [51.2, 929.0], [51.3, 934.0], [51.4, 943.0], [51.5, 954.0], [51.6, 961.0], [51.7, 968.0], [51.8, 974.0], [51.9, 980.0], [52.0, 987.0], [52.1, 991.0], [52.2, 997.0], [52.3, 1005.0], [52.4, 1012.0], [52.5, 1016.0], [52.6, 1021.0], [52.7, 1028.0], [52.8, 1033.0], [52.9, 1038.0], [53.0, 1045.0], [53.1, 1053.0], [53.2, 1060.0], [53.3, 1065.0], [53.4, 1071.0], [53.5, 1075.0], [53.6, 1079.0], [53.7, 1086.0], [53.8, 1091.0], [53.9, 1097.0], [54.0, 1101.0], [54.1, 1104.0], [54.2, 1111.0], [54.3, 1118.0], [54.4, 1123.0], [54.5, 1130.0], [54.6, 1137.0], [54.7, 1143.0], [54.8, 1149.0], [54.9, 1153.0], [55.0, 1158.0], [55.1, 1163.0], [55.2, 1171.0], [55.3, 1175.0], [55.4, 1179.0], [55.5, 1183.0], [55.6, 1185.0], [55.7, 1194.0], [55.8, 1197.0], [55.9, 1203.0], [56.0, 1207.0], [56.1, 1215.0], [56.2, 1221.0], [56.3, 1228.0], [56.4, 1236.0], [56.5, 1240.0], [56.6, 1247.0], [56.7, 1249.0], [56.8, 1257.0], [56.9, 1261.0], [57.0, 1269.0], [57.1, 1275.0], [57.2, 1278.0], [57.3, 1283.0], [57.4, 1286.0], [57.5, 1292.0], [57.6, 1297.0], [57.7, 1302.0], [57.8, 1307.0], [57.9, 1311.0], [58.0, 1316.0], [58.1, 1321.0], [58.2, 1327.0], [58.3, 1333.0], [58.4, 1337.0], [58.5, 1345.0], [58.6, 1350.0], [58.7, 1353.0], [58.8, 1357.0], [58.9, 1362.0], [59.0, 1367.0], [59.1, 1372.0], [59.2, 1376.0], [59.3, 1381.0], [59.4, 1386.0], [59.5, 1390.0], [59.6, 1394.0], [59.7, 1399.0], [59.8, 1402.0], [59.9, 1406.0], [60.0, 1409.0], [60.1, 1413.0], [60.2, 1418.0], [60.3, 1424.0], [60.4, 1427.0], [60.5, 1432.0], [60.6, 1435.0], [60.7, 1442.0], [60.8, 1445.0], [60.9, 1448.0], [61.0, 1453.0], [61.1, 1456.0], [61.2, 1460.0], [61.3, 1467.0], [61.4, 1470.0], [61.5, 1474.0], [61.6, 1477.0], [61.7, 1480.0], [61.8, 1482.0], [61.9, 1487.0], [62.0, 1490.0], [62.1, 1492.0], [62.2, 1495.0], [62.3, 1497.0], [62.4, 1502.0], [62.5, 1504.0], [62.6, 1508.0], [62.7, 1512.0], [62.8, 1514.0], [62.9, 1518.0], [63.0, 1520.0], [63.1, 1522.0], [63.2, 1525.0], [63.3, 1528.0], [63.4, 1531.0], [63.5, 1533.0], [63.6, 1536.0], [63.7, 1538.0], [63.8, 1542.0], [63.9, 1545.0], [64.0, 1549.0], [64.1, 1551.0], [64.2, 1554.0], [64.3, 1557.0], [64.4, 1560.0], [64.5, 1565.0], [64.6, 1568.0], [64.7, 1570.0], [64.8, 1572.0], [64.9, 1574.0], [65.0, 1577.0], [65.1, 1580.0], [65.2, 1584.0], [65.3, 1586.0], [65.4, 1589.0], [65.5, 1592.0], [65.6, 1594.0], [65.7, 1599.0], [65.8, 1602.0], [65.9, 1603.0], [66.0, 1605.0], [66.1, 1607.0], [66.2, 1610.0], [66.3, 1612.0], [66.4, 1615.0], [66.5, 1617.0], [66.6, 1620.0], [66.7, 1623.0], [66.8, 1625.0], [66.9, 1627.0], [67.0, 1630.0], [67.1, 1632.0], [67.2, 1635.0], [67.3, 1638.0], [67.4, 1639.0], [67.5, 1642.0], [67.6, 1645.0], [67.7, 1647.0], [67.8, 1649.0], [67.9, 1651.0], [68.0, 1652.0], [68.1, 1655.0], [68.2, 1657.0], [68.3, 1659.0], [68.4, 1661.0], [68.5, 1664.0], [68.6, 1665.0], [68.7, 1667.0], [68.8, 1670.0], [68.9, 1672.0], [69.0, 1674.0], [69.1, 1676.0], [69.2, 1678.0], [69.3, 1680.0], [69.4, 1682.0], [69.5, 1683.0], [69.6, 1685.0], [69.7, 1686.0], [69.8, 1689.0], [69.9, 1691.0], [70.0, 1693.0], [70.1, 1695.0], [70.2, 1699.0], [70.3, 1700.0], [70.4, 1701.0], [70.5, 1703.0], [70.6, 1705.0], [70.7, 1707.0], [70.8, 1709.0], [70.9, 1711.0], [71.0, 1713.0], [71.1, 1716.0], [71.2, 1717.0], [71.3, 1718.0], [71.4, 1721.0], [71.5, 1723.0], [71.6, 1724.0], [71.7, 1726.0], [71.8, 1728.0], [71.9, 1730.0], [72.0, 1731.0], [72.1, 1733.0], [72.2, 1736.0], [72.3, 1737.0], [72.4, 1740.0], [72.5, 1743.0], [72.6, 1745.0], [72.7, 1746.0], [72.8, 1749.0], [72.9, 1752.0], [73.0, 1754.0], [73.1, 1757.0], [73.2, 1759.0], [73.3, 1761.0], [73.4, 1763.0], [73.5, 1766.0], [73.6, 1767.0], [73.7, 1769.0], [73.8, 1772.0], [73.9, 1774.0], [74.0, 1776.0], [74.1, 1779.0], [74.2, 1780.0], [74.3, 1784.0], [74.4, 1785.0], [74.5, 1787.0], [74.6, 1789.0], [74.7, 1792.0], [74.8, 1794.0], [74.9, 1797.0], [75.0, 1798.0], [75.1, 1799.0], [75.2, 1802.0], [75.3, 1803.0], [75.4, 1805.0], [75.5, 1808.0], [75.6, 1810.0], [75.7, 1812.0], [75.8, 1813.0], [75.9, 1815.0], [76.0, 1817.0], [76.1, 1818.0], [76.2, 1819.0], [76.3, 1821.0], [76.4, 1824.0], [76.5, 1826.0], [76.6, 1828.0], [76.7, 1831.0], [76.8, 1832.0], [76.9, 1835.0], [77.0, 1837.0], [77.1, 1840.0], [77.2, 1841.0], [77.3, 1844.0], [77.4, 1846.0], [77.5, 1848.0], [77.6, 1849.0], [77.7, 1850.0], [77.8, 1851.0], [77.9, 1853.0], [78.0, 1855.0], [78.1, 1857.0], [78.2, 1859.0], [78.3, 1860.0], [78.4, 1863.0], [78.5, 1864.0], [78.6, 1866.0], [78.7, 1868.0], [78.8, 1871.0], [78.9, 1872.0], [79.0, 1874.0], [79.1, 1875.0], [79.2, 1877.0], [79.3, 1879.0], [79.4, 1881.0], [79.5, 1883.0], [79.6, 1885.0], [79.7, 1886.0], [79.8, 1887.0], [79.9, 1889.0], [80.0, 1891.0], [80.1, 1893.0], [80.2, 1895.0], [80.3, 1897.0], [80.4, 1900.0], [80.5, 1902.0], [80.6, 1903.0], [80.7, 1906.0], [80.8, 1908.0], [80.9, 1910.0], [81.0, 1911.0], [81.1, 1913.0], [81.2, 1915.0], [81.3, 1917.0], [81.4, 1919.0], [81.5, 1920.0], [81.6, 1922.0], [81.7, 1924.0], [81.8, 1926.0], [81.9, 1927.0], [82.0, 1930.0], [82.1, 1932.0], [82.2, 1934.0], [82.3, 1936.0], [82.4, 1938.0], [82.5, 1939.0], [82.6, 1941.0], [82.7, 1943.0], [82.8, 1944.0], [82.9, 1946.0], [83.0, 1948.0], [83.1, 1950.0], [83.2, 1953.0], [83.3, 1955.0], [83.4, 1956.0], [83.5, 1958.0], [83.6, 1961.0], [83.7, 1963.0], [83.8, 1964.0], [83.9, 1967.0], [84.0, 1969.0], [84.1, 1972.0], [84.2, 1974.0], [84.3, 1976.0], [84.4, 1977.0], [84.5, 1980.0], [84.6, 1982.0], [84.7, 1984.0], [84.8, 1987.0], [84.9, 1989.0], [85.0, 1991.0], [85.1, 1993.0], [85.2, 1995.0], [85.3, 1998.0], [85.4, 1999.0], [85.5, 2002.0], [85.6, 2004.0], [85.7, 2005.0], [85.8, 2007.0], [85.9, 2010.0], [86.0, 2011.0], [86.1, 2012.0], [86.2, 2015.0], [86.3, 2017.0], [86.4, 2019.0], [86.5, 2020.0], [86.6, 2021.0], [86.7, 2024.0], [86.8, 2026.0], [86.9, 2027.0], [87.0, 2030.0], [87.1, 2031.0], [87.2, 2033.0], [87.3, 2036.0], [87.4, 2038.0], [87.5, 2040.0], [87.6, 2042.0], [87.7, 2044.0], [87.8, 2047.0], [87.9, 2049.0], [88.0, 2053.0], [88.1, 2056.0], [88.2, 2058.0], [88.3, 2061.0], [88.4, 2065.0], [88.5, 2067.0], [88.6, 2070.0], [88.7, 2074.0], [88.8, 2076.0], [88.9, 2078.0], [89.0, 2079.0], [89.1, 2083.0], [89.2, 2086.0], [89.3, 2088.0], [89.4, 2090.0], [89.5, 2093.0], [89.6, 2095.0], [89.7, 2097.0], [89.8, 2100.0], [89.9, 2103.0], [90.0, 2106.0], [90.1, 2108.0], [90.2, 2111.0], [90.3, 2113.0], [90.4, 2118.0], [90.5, 2120.0], [90.6, 2123.0], [90.7, 2127.0], [90.8, 2129.0], [90.9, 2132.0], [91.0, 2133.0], [91.1, 2136.0], [91.2, 2138.0], [91.3, 2140.0], [91.4, 2143.0], [91.5, 2145.0], [91.6, 2147.0], [91.7, 2150.0], [91.8, 2154.0], [91.9, 2157.0], [92.0, 2160.0], [92.1, 2162.0], [92.2, 2164.0], [92.3, 2167.0], [92.4, 2170.0], [92.5, 2174.0], [92.6, 2178.0], [92.7, 2180.0], [92.8, 2186.0], [92.9, 2191.0], [93.0, 2193.0], [93.1, 2195.0], [93.2, 2197.0], [93.3, 2199.0], [93.4, 2203.0], [93.5, 2208.0], [93.6, 2211.0], [93.7, 2212.0], [93.8, 2219.0], [93.9, 2225.0], [94.0, 2228.0], [94.1, 2230.0], [94.2, 2234.0], [94.3, 2238.0], [94.4, 2242.0], [94.5, 2246.0], [94.6, 2250.0], [94.7, 2255.0], [94.8, 2262.0], [94.9, 2266.0], [95.0, 2269.0], [95.1, 2275.0], [95.2, 2281.0], [95.3, 2285.0], [95.4, 2289.0], [95.5, 2292.0], [95.6, 2297.0], [95.7, 2302.0], [95.8, 2305.0], [95.9, 2311.0], [96.0, 2318.0], [96.1, 2321.0], [96.2, 2324.0], [96.3, 2329.0], [96.4, 2335.0], [96.5, 2340.0], [96.6, 2346.0], [96.7, 2352.0], [96.8, 2355.0], [96.9, 2362.0], [97.0, 2370.0], [97.1, 2377.0], [97.2, 2386.0], [97.3, 2389.0], [97.4, 2397.0], [97.5, 2406.0], [97.6, 2417.0], [97.7, 2423.0], [97.8, 2428.0], [97.9, 2439.0], [98.0, 2448.0], [98.1, 2456.0], [98.2, 2463.0], [98.3, 2473.0], [98.4, 2486.0], [98.5, 2497.0], [98.6, 2509.0], [98.7, 2521.0], [98.8, 2526.0], [98.9, 2539.0], [99.0, 2548.0], [99.1, 2563.0], [99.2, 2580.0], [99.3, 2598.0], [99.4, 2604.0], [99.5, 2627.0], [99.6, 2669.0], [99.7, 2710.0], [99.8, 2780.0], [99.9, 2843.0], [100.0, 3166.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 4354.0, "series": [{"data": [[0.0, 4354.0], [600.0, 72.0], [700.0, 121.0], [800.0, 130.0], [900.0, 137.0], [1000.0, 172.0], [1100.0, 190.0], [1200.0, 178.0], [1300.0, 207.0], [1400.0, 264.0], [1500.0, 336.0], [100.0, 188.0], [1600.0, 454.0], [1700.0, 485.0], [1800.0, 529.0], [1900.0, 502.0], [2000.0, 436.0], [2100.0, 355.0], [2200.0, 231.0], [2300.0, 180.0], [2400.0, 107.0], [2500.0, 80.0], [2600.0, 37.0], [2800.0, 11.0], [2700.0, 15.0], [2900.0, 2.0], [3000.0, 1.0], [3100.0, 3.0], [200.0, 50.0], [300.0, 42.0], [400.0, 70.0], [500.0, 61.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1533.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4704.0, "series": [{"data": [[0.0, 4704.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1533.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 3763.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 108.08082026538007, "minX": 1.7066502E12, "maxY": 191.79996646545942, "series": [{"data": [[1.7066502E12, 108.08082026538007], [1.70665032E12, 170.71219207982531], [1.70665026E12, 191.79996646545942]], "isOverall": false, "label": "1000 Users 10 Requests", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70665032E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 39.5, "minX": 1.0, "maxY": 1685.0666666666666, "series": [{"data": [[2.0, 80.0], [3.0, 41.0], [4.0, 59.0], [5.0, 73.0], [6.0, 84.0], [7.0, 46.0], [8.0, 44.0], [9.0, 39.5], [10.0, 42.0], [11.0, 41.0], [12.0, 52.333333333333336], [13.0, 43.0], [14.0, 43.0], [15.0, 54.666666666666664], [16.0, 62.5], [17.0, 51.0], [18.0, 43.5], [19.0, 53.5], [20.0, 55.5], [21.0, 47.666666666666664], [22.0, 48.6], [23.0, 42.75], [24.0, 47.2], [25.0, 54.666666666666664], [26.0, 51.333333333333336], [27.0, 53.0], [28.0, 67.0], [29.0, 63.66666666666667], [30.0, 124.75], [31.0, 82.2], [32.0, 123.33333333333334], [33.0, 69.6], [34.0, 113.4], [35.0, 94.0], [36.0, 77.25], [37.0, 64.5], [38.0, 93.89999999999998], [39.0, 57.66666666666667], [40.0, 55.4], [41.0, 148.625], [42.0, 102.25], [43.0, 98.5], [44.0, 69.33333333333333], [45.0, 122.75], [46.0, 113.0], [47.0, 235.0], [48.0, 146.0], [49.0, 147.0], [50.0, 86.33333333333333], [51.0, 178.66666666666666], [52.0, 127.42857142857142], [53.0, 185.0], [54.0, 187.85714285714283], [55.0, 175.2], [56.0, 227.875], [57.0, 234.25], [58.0, 320.66666666666674], [59.0, 157.71428571428572], [60.0, 231.42857142857144], [61.0, 454.5833333333333], [62.0, 468.2352941176471], [63.0, 377.42857142857144], [64.0, 227.2857142857143], [65.0, 196.75], [66.0, 307.5], [67.0, 236.5], [68.0, 506.41666666666674], [69.0, 262.8571428571429], [70.0, 353.85714285714283], [71.0, 418.6], [72.0, 554.8333333333333], [73.0, 364.54545454545456], [74.0, 546.2], [75.0, 300.8333333333333], [76.0, 417.27272727272725], [77.0, 411.8], [78.0, 543.7333333333332], [79.0, 710.25], [80.0, 535.5555555555555], [81.0, 581.625], [82.0, 545.5], [83.0, 516.2857142857143], [84.0, 755.0], [85.0, 769.6666666666666], [86.0, 547.6666666666666], [87.0, 850.0526315789474], [88.0, 755.6666666666666], [89.0, 457.0], [90.0, 753.3], [91.0, 828.2307692307693], [92.0, 682.25], [93.0, 1175.0909090909092], [94.0, 697.5], [95.0, 1122.1666666666665], [96.0, 970.3636363636363], [97.0, 808.1428571428571], [98.0, 1201.4736842105262], [99.0, 841.25], [100.0, 1126.4285714285713], [101.0, 778.1666666666667], [102.0, 1177.6666666666667], [103.0, 1074.625], [104.0, 1122.5882352941173], [105.0, 1100.6923076923076], [106.0, 1220.1666666666667], [107.0, 1072.4615384615386], [108.0, 1105.4], [109.0, 779.111111111111], [110.0, 1279.3478260869567], [111.0, 1007.0], [112.0, 1304.5], [113.0, 841.1111111111111], [114.0, 1292.9285714285718], [115.0, 1218.7692307692307], [116.0, 1299.2307692307693], [117.0, 1339.0], [118.0, 1095.8333333333333], [119.0, 1232.0], [120.0, 1056.5833333333333], [121.0, 1305.5], [122.0, 1097.5], [123.0, 1678.9285714285716], [124.0, 1685.0666666666666], [125.0, 1506.2727272727268], [126.0, 1530.6190476190477], [127.0, 1642.857142857143], [128.0, 1637.142857142857], [129.0, 1546.6666666666665], [130.0, 1358.7499999999998], [131.0, 1432.8000000000002], [132.0, 1079.6000000000001], [133.0, 897.125], [134.0, 1351.6799999999998], [135.0, 1272.607142857143], [136.0, 1677.3999999999999], [137.0, 1597.7777777777778], [138.0, 1622.75], [139.0, 1455.0], [140.0, 1459.0], [141.0, 1447.5], [142.0, 1681.5333333333333], [143.0, 1305.0357142857142], [144.0, 1234.878787878788], [145.0, 1354.2499999999998], [146.0, 1015.4999999999999], [147.0, 1330.6666666666667], [148.0, 1451.5555555555557], [149.0, 1417.8636363636365], [150.0, 1472.4705882352941], [151.0, 1491.421052631579], [152.0, 1295.4545454545453], [153.0, 1314.9615384615383], [154.0, 1106.0714285714287], [155.0, 459.33333333333326], [156.0, 997.125], [157.0, 1599.8124999999998], [158.0, 915.6428571428572], [159.0, 1233.5333333333333], [160.0, 1586.6521739130435], [161.0, 1519.4000000000003], [162.0, 1663.604651162791], [163.0, 1166.5], [164.0, 687.9062499999999], [165.0, 1097.8750000000002], [166.0, 1238.5789473684208], [167.0, 482.57894736842115], [168.0, 791.6774193548385], [169.0, 1383.4074074074076], [170.0, 1521.0689655172414], [171.0, 1592.5714285714287], [172.0, 764.6], [173.0, 1252.9259259259259], [174.0, 968.9230769230768], [175.0, 815.2608695652174], [176.0, 1413.0666666666666], [177.0, 1407.1200000000003], [178.0, 847.3749999999998], [179.0, 660.5833333333334], [180.0, 770.9230769230769], [181.0, 1268.65], [182.0, 1069.7272727272727], [183.0, 1277.981132075472], [184.0, 947.5346534653463], [185.0, 996.294117647059], [186.0, 1046.6621004566205], [187.0, 969.9999999999995], [188.0, 939.882747068677], [189.0, 908.5591098748256], [190.0, 937.6111786148234], [191.0, 863.2170329670329], [192.0, 906.785585585586], [193.0, 990.8341013824883], [194.0, 986.1403846153836], [195.0, 789.9903691813806], [196.0, 930.932558139535], [197.0, 855.9155405405404], [198.0, 871.6559633027528], [199.0, 772.1232876712327], [200.0, 805.4695652173913], [201.0, 830.6380952380952], [202.0, 763.5748792270529], [203.0, 910.4265734265739], [204.0, 945.7755102040811], [205.0, 856.5301204819277], [206.0, 874.1282051282054], [207.0, 257.8125], [1.0, 47.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[178.09689999999964, 922.8024000000003]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 207.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2293.5666666666666, "minX": 1.7066502E12, "maxY": 1506424.55, "series": [{"data": [[1.7066502E12, 385427.73333333334], [1.70665032E12, 924892.7], [1.70665026E12, 1506424.55]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7066502E12, 2293.5666666666666], [1.70665032E12, 8872.7], [1.70665026E12, 16500.4]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70665032E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 786.9131483715324, "minX": 1.7066502E12, "maxY": 967.7103211724344, "series": [{"data": [[1.7066502E12, 786.9131483715324], [1.70665032E12, 967.7103211724344], [1.70665026E12, 917.5429242119384]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70665032E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 786.8214716525945, "minX": 1.7066502E12, "maxY": 967.6591830371067, "series": [{"data": [[1.7066502E12, 786.8214716525945], [1.70665032E12, 967.6591830371067], [1.70665026E12, 917.4884305835023]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70665032E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.032740879326473404, "minX": 1.7066502E12, "maxY": 0.1278648974668275, "series": [{"data": [[1.7066502E12, 0.1278648974668275], [1.70665032E12, 0.032740879326473404], [1.70665026E12, 0.044936284372904055]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70665032E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.7066502E12, "maxY": 3166.0, "series": [{"data": [[1.7066502E12, 2482.0], [1.70665032E12, 3120.0], [1.70665026E12, 3166.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7066502E12, 2.0], [1.70665032E12, 1.0], [1.70665026E12, 1.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7066502E12, 1680.0], [1.70665032E12, 2160.2000000000003], [1.70665026E12, 2101.5]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7066502E12, 2074.4000000000015], [1.70665032E12, 2596.84], [1.70665026E12, 2538.7000000000007]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7066502E12, 715.0], [1.70665032E12, 928.0], [1.70665026E12, 843.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.7066502E12, 1856.5], [1.70665032E12, 2322.6], [1.70665026E12, 2268.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70665032E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 40.0, "minX": 2.0, "maxY": 1849.0, "series": [{"data": [[2.0, 63.5], [6.0, 41.5], [9.0, 44.0], [15.0, 41.0], [21.0, 51.0], [25.0, 40.0], [30.0, 63.5], [34.0, 46.5], [39.0, 1014.0], [41.0, 129.0], [47.0, 193.0], [49.0, 95.5], [48.0, 1501.5], [51.0, 1353.0], [50.0, 1286.5], [52.0, 794.0], [53.0, 632.0], [55.0, 791.0], [54.0, 754.5], [57.0, 1333.0], [56.0, 1157.5], [60.0, 1849.0], [63.0, 1320.0], [62.0, 1776.5], [64.0, 1062.5], [66.0, 1645.5], [70.0, 1460.0], [74.0, 1553.5], [72.0, 1086.0], [73.0, 1693.0], [83.0, 1243.0], [87.0, 1327.0], [88.0, 1499.0], [91.0, 838.0], [93.0, 1158.0], [94.0, 363.5], [95.0, 1103.0], [92.0, 1015.5], [99.0, 769.0], [96.0, 794.5], [97.0, 88.0], [98.0, 131.0], [103.0, 75.0], [100.0, 846.0], [101.0, 100.0], [102.0, 71.0], [104.0, 956.5], [105.0, 57.5], [106.0, 113.0], [107.0, 1038.0], [111.0, 527.0], [108.0, 123.5], [109.0, 136.0], [110.0, 87.5], [114.0, 140.0], [112.0, 96.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 114.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 40.0, "minX": 2.0, "maxY": 1849.0, "series": [{"data": [[2.0, 63.5], [6.0, 41.5], [9.0, 44.0], [15.0, 41.0], [21.0, 51.0], [25.0, 40.0], [30.0, 63.5], [34.0, 46.5], [39.0, 1014.0], [41.0, 129.0], [47.0, 192.0], [49.0, 95.5], [48.0, 1501.5], [51.0, 1353.0], [50.0, 1286.5], [52.0, 793.5], [53.0, 632.0], [55.0, 790.0], [54.0, 754.5], [57.0, 1333.0], [56.0, 1157.5], [60.0, 1849.0], [63.0, 1320.0], [62.0, 1776.0], [64.0, 1062.5], [66.0, 1645.5], [70.0, 1460.0], [74.0, 1553.5], [72.0, 1086.0], [73.0, 1692.0], [83.0, 1243.0], [87.0, 1327.0], [88.0, 1499.0], [91.0, 838.0], [93.0, 1158.0], [94.0, 363.5], [95.0, 1103.0], [92.0, 1015.5], [99.0, 768.5], [96.0, 794.0], [97.0, 88.0], [98.0, 131.0], [103.0, 75.0], [100.0, 846.0], [101.0, 100.0], [102.0, 71.0], [104.0, 956.0], [105.0, 57.5], [106.0, 113.0], [107.0, 1038.0], [111.0, 527.0], [108.0, 123.5], [109.0, 136.0], [110.0, 87.5], [114.0, 140.0], [112.0, 96.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 114.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 15.366666666666667, "minX": 1.7066502E12, "maxY": 99.35, "series": [{"data": [[1.7066502E12, 15.366666666666667], [1.70665032E12, 51.95], [1.70665026E12, 99.35]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70665032E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 13.816666666666666, "minX": 1.7066502E12, "maxY": 99.4, "series": [{"data": [[1.7066502E12, 13.816666666666666], [1.70665032E12, 53.45], [1.70665026E12, 99.4]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70665032E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 13.816666666666666, "minX": 1.7066502E12, "maxY": 99.4, "series": [{"data": [[1.7066502E12, 13.816666666666666], [1.70665032E12, 53.45], [1.70665026E12, 99.4]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70665032E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 13.816666666666666, "minX": 1.7066502E12, "maxY": 99.4, "series": [{"data": [[1.7066502E12, 13.816666666666666], [1.70665032E12, 53.45], [1.70665026E12, 99.4]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70665032E12, "title": "Total Transactions Per Second"}},
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

