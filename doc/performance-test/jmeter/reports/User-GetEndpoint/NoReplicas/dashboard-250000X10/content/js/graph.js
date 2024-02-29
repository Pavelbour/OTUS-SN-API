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
        data: {"result": {"minY": 0.0, "minX": 0.0, "maxY": 172.0, "series": [{"data": [[0.0, 0.0], [0.1, 0.0], [0.2, 0.0], [0.3, 0.0], [0.4, 0.0], [0.5, 0.0], [0.6, 0.0], [0.7, 0.0], [0.8, 0.0], [0.9, 0.0], [1.0, 0.0], [1.1, 0.0], [1.2, 0.0], [1.3, 0.0], [1.4, 0.0], [1.5, 0.0], [1.6, 0.0], [1.7, 0.0], [1.8, 0.0], [1.9, 0.0], [2.0, 0.0], [2.1, 0.0], [2.2, 0.0], [2.3, 0.0], [2.4, 0.0], [2.5, 0.0], [2.6, 0.0], [2.7, 0.0], [2.8, 0.0], [2.9, 0.0], [3.0, 0.0], [3.1, 0.0], [3.2, 0.0], [3.3, 0.0], [3.4, 0.0], [3.5, 0.0], [3.6, 0.0], [3.7, 0.0], [3.8, 0.0], [3.9, 0.0], [4.0, 0.0], [4.1, 0.0], [4.2, 0.0], [4.3, 0.0], [4.4, 0.0], [4.5, 0.0], [4.6, 0.0], [4.7, 0.0], [4.8, 0.0], [4.9, 0.0], [5.0, 0.0], [5.1, 0.0], [5.2, 0.0], [5.3, 0.0], [5.4, 0.0], [5.5, 0.0], [5.6, 0.0], [5.7, 0.0], [5.8, 0.0], [5.9, 0.0], [6.0, 0.0], [6.1, 0.0], [6.2, 0.0], [6.3, 0.0], [6.4, 0.0], [6.5, 0.0], [6.6, 0.0], [6.7, 0.0], [6.8, 0.0], [6.9, 0.0], [7.0, 0.0], [7.1, 0.0], [7.2, 0.0], [7.3, 0.0], [7.4, 0.0], [7.5, 0.0], [7.6, 0.0], [7.7, 0.0], [7.8, 0.0], [7.9, 0.0], [8.0, 0.0], [8.1, 0.0], [8.2, 0.0], [8.3, 0.0], [8.4, 0.0], [8.5, 0.0], [8.6, 0.0], [8.7, 0.0], [8.8, 0.0], [8.9, 0.0], [9.0, 0.0], [9.1, 0.0], [9.2, 0.0], [9.3, 0.0], [9.4, 0.0], [9.5, 0.0], [9.6, 0.0], [9.7, 0.0], [9.8, 0.0], [9.9, 0.0], [10.0, 0.0], [10.1, 0.0], [10.2, 0.0], [10.3, 0.0], [10.4, 0.0], [10.5, 0.0], [10.6, 0.0], [10.7, 0.0], [10.8, 0.0], [10.9, 0.0], [11.0, 0.0], [11.1, 0.0], [11.2, 0.0], [11.3, 0.0], [11.4, 0.0], [11.5, 0.0], [11.6, 0.0], [11.7, 0.0], [11.8, 0.0], [11.9, 0.0], [12.0, 0.0], [12.1, 0.0], [12.2, 0.0], [12.3, 0.0], [12.4, 0.0], [12.5, 0.0], [12.6, 0.0], [12.7, 0.0], [12.8, 0.0], [12.9, 0.0], [13.0, 0.0], [13.1, 0.0], [13.2, 0.0], [13.3, 0.0], [13.4, 0.0], [13.5, 0.0], [13.6, 0.0], [13.7, 0.0], [13.8, 0.0], [13.9, 0.0], [14.0, 0.0], [14.1, 0.0], [14.2, 0.0], [14.3, 0.0], [14.4, 0.0], [14.5, 0.0], [14.6, 0.0], [14.7, 0.0], [14.8, 0.0], [14.9, 0.0], [15.0, 0.0], [15.1, 0.0], [15.2, 0.0], [15.3, 0.0], [15.4, 0.0], [15.5, 0.0], [15.6, 0.0], [15.7, 0.0], [15.8, 0.0], [15.9, 0.0], [16.0, 0.0], [16.1, 0.0], [16.2, 0.0], [16.3, 0.0], [16.4, 0.0], [16.5, 0.0], [16.6, 0.0], [16.7, 0.0], [16.8, 0.0], [16.9, 0.0], [17.0, 0.0], [17.1, 0.0], [17.2, 0.0], [17.3, 0.0], [17.4, 0.0], [17.5, 0.0], [17.6, 0.0], [17.7, 0.0], [17.8, 0.0], [17.9, 0.0], [18.0, 0.0], [18.1, 0.0], [18.2, 0.0], [18.3, 0.0], [18.4, 0.0], [18.5, 0.0], [18.6, 0.0], [18.7, 0.0], [18.8, 0.0], [18.9, 0.0], [19.0, 0.0], [19.1, 0.0], [19.2, 0.0], [19.3, 0.0], [19.4, 0.0], [19.5, 0.0], [19.6, 0.0], [19.7, 0.0], [19.8, 0.0], [19.9, 0.0], [20.0, 0.0], [20.1, 0.0], [20.2, 0.0], [20.3, 0.0], [20.4, 0.0], [20.5, 0.0], [20.6, 0.0], [20.7, 0.0], [20.8, 0.0], [20.9, 0.0], [21.0, 0.0], [21.1, 0.0], [21.2, 0.0], [21.3, 0.0], [21.4, 0.0], [21.5, 0.0], [21.6, 0.0], [21.7, 0.0], [21.8, 0.0], [21.9, 0.0], [22.0, 0.0], [22.1, 0.0], [22.2, 0.0], [22.3, 0.0], [22.4, 0.0], [22.5, 0.0], [22.6, 0.0], [22.7, 0.0], [22.8, 0.0], [22.9, 0.0], [23.0, 0.0], [23.1, 0.0], [23.2, 0.0], [23.3, 0.0], [23.4, 0.0], [23.5, 0.0], [23.6, 0.0], [23.7, 0.0], [23.8, 0.0], [23.9, 0.0], [24.0, 0.0], [24.1, 0.0], [24.2, 0.0], [24.3, 0.0], [24.4, 0.0], [24.5, 0.0], [24.6, 0.0], [24.7, 0.0], [24.8, 0.0], [24.9, 0.0], [25.0, 0.0], [25.1, 0.0], [25.2, 0.0], [25.3, 0.0], [25.4, 0.0], [25.5, 0.0], [25.6, 0.0], [25.7, 0.0], [25.8, 0.0], [25.9, 0.0], [26.0, 0.0], [26.1, 0.0], [26.2, 0.0], [26.3, 0.0], [26.4, 0.0], [26.5, 0.0], [26.6, 0.0], [26.7, 0.0], [26.8, 0.0], [26.9, 0.0], [27.0, 0.0], [27.1, 0.0], [27.2, 0.0], [27.3, 0.0], [27.4, 0.0], [27.5, 0.0], [27.6, 0.0], [27.7, 0.0], [27.8, 0.0], [27.9, 0.0], [28.0, 0.0], [28.1, 0.0], [28.2, 0.0], [28.3, 0.0], [28.4, 0.0], [28.5, 0.0], [28.6, 0.0], [28.7, 0.0], [28.8, 0.0], [28.9, 0.0], [29.0, 0.0], [29.1, 0.0], [29.2, 0.0], [29.3, 0.0], [29.4, 0.0], [29.5, 0.0], [29.6, 0.0], [29.7, 0.0], [29.8, 0.0], [29.9, 0.0], [30.0, 0.0], [30.1, 0.0], [30.2, 0.0], [30.3, 0.0], [30.4, 0.0], [30.5, 0.0], [30.6, 0.0], [30.7, 0.0], [30.8, 0.0], [30.9, 0.0], [31.0, 0.0], [31.1, 0.0], [31.2, 0.0], [31.3, 0.0], [31.4, 0.0], [31.5, 0.0], [31.6, 0.0], [31.7, 0.0], [31.8, 0.0], [31.9, 0.0], [32.0, 0.0], [32.1, 0.0], [32.2, 0.0], [32.3, 0.0], [32.4, 0.0], [32.5, 0.0], [32.6, 0.0], [32.7, 0.0], [32.8, 0.0], [32.9, 0.0], [33.0, 0.0], [33.1, 0.0], [33.2, 0.0], [33.3, 0.0], [33.4, 0.0], [33.5, 0.0], [33.6, 0.0], [33.7, 0.0], [33.8, 0.0], [33.9, 0.0], [34.0, 0.0], [34.1, 0.0], [34.2, 0.0], [34.3, 0.0], [34.4, 0.0], [34.5, 0.0], [34.6, 0.0], [34.7, 0.0], [34.8, 0.0], [34.9, 0.0], [35.0, 0.0], [35.1, 0.0], [35.2, 0.0], [35.3, 0.0], [35.4, 0.0], [35.5, 0.0], [35.6, 0.0], [35.7, 0.0], [35.8, 0.0], [35.9, 0.0], [36.0, 0.0], [36.1, 0.0], [36.2, 0.0], [36.3, 0.0], [36.4, 0.0], [36.5, 0.0], [36.6, 0.0], [36.7, 0.0], [36.8, 0.0], [36.9, 0.0], [37.0, 0.0], [37.1, 0.0], [37.2, 0.0], [37.3, 0.0], [37.4, 0.0], [37.5, 0.0], [37.6, 0.0], [37.7, 0.0], [37.8, 0.0], [37.9, 0.0], [38.0, 0.0], [38.1, 0.0], [38.2, 0.0], [38.3, 0.0], [38.4, 0.0], [38.5, 0.0], [38.6, 0.0], [38.7, 0.0], [38.8, 0.0], [38.9, 0.0], [39.0, 0.0], [39.1, 0.0], [39.2, 0.0], [39.3, 0.0], [39.4, 0.0], [39.5, 0.0], [39.6, 0.0], [39.7, 0.0], [39.8, 0.0], [39.9, 0.0], [40.0, 0.0], [40.1, 0.0], [40.2, 0.0], [40.3, 0.0], [40.4, 0.0], [40.5, 0.0], [40.6, 0.0], [40.7, 0.0], [40.8, 0.0], [40.9, 0.0], [41.0, 0.0], [41.1, 0.0], [41.2, 0.0], [41.3, 0.0], [41.4, 0.0], [41.5, 0.0], [41.6, 0.0], [41.7, 0.0], [41.8, 0.0], [41.9, 0.0], [42.0, 0.0], [42.1, 0.0], [42.2, 0.0], [42.3, 0.0], [42.4, 1.0], [42.5, 1.0], [42.6, 1.0], [42.7, 1.0], [42.8, 1.0], [42.9, 1.0], [43.0, 1.0], [43.1, 1.0], [43.2, 1.0], [43.3, 1.0], [43.4, 1.0], [43.5, 1.0], [43.6, 1.0], [43.7, 1.0], [43.8, 1.0], [43.9, 1.0], [44.0, 1.0], [44.1, 1.0], [44.2, 1.0], [44.3, 1.0], [44.4, 1.0], [44.5, 1.0], [44.6, 1.0], [44.7, 1.0], [44.8, 1.0], [44.9, 1.0], [45.0, 1.0], [45.1, 1.0], [45.2, 1.0], [45.3, 1.0], [45.4, 1.0], [45.5, 1.0], [45.6, 1.0], [45.7, 1.0], [45.8, 1.0], [45.9, 1.0], [46.0, 1.0], [46.1, 1.0], [46.2, 1.0], [46.3, 1.0], [46.4, 1.0], [46.5, 1.0], [46.6, 1.0], [46.7, 1.0], [46.8, 1.0], [46.9, 1.0], [47.0, 1.0], [47.1, 1.0], [47.2, 1.0], [47.3, 1.0], [47.4, 1.0], [47.5, 1.0], [47.6, 1.0], [47.7, 1.0], [47.8, 1.0], [47.9, 1.0], [48.0, 1.0], [48.1, 1.0], [48.2, 1.0], [48.3, 1.0], [48.4, 1.0], [48.5, 1.0], [48.6, 1.0], [48.7, 1.0], [48.8, 1.0], [48.9, 1.0], [49.0, 1.0], [49.1, 1.0], [49.2, 1.0], [49.3, 1.0], [49.4, 1.0], [49.5, 1.0], [49.6, 1.0], [49.7, 1.0], [49.8, 1.0], [49.9, 1.0], [50.0, 1.0], [50.1, 1.0], [50.2, 1.0], [50.3, 1.0], [50.4, 1.0], [50.5, 1.0], [50.6, 1.0], [50.7, 1.0], [50.8, 1.0], [50.9, 1.0], [51.0, 1.0], [51.1, 1.0], [51.2, 1.0], [51.3, 1.0], [51.4, 1.0], [51.5, 1.0], [51.6, 1.0], [51.7, 1.0], [51.8, 1.0], [51.9, 1.0], [52.0, 1.0], [52.1, 1.0], [52.2, 1.0], [52.3, 1.0], [52.4, 1.0], [52.5, 1.0], [52.6, 1.0], [52.7, 1.0], [52.8, 1.0], [52.9, 1.0], [53.0, 1.0], [53.1, 1.0], [53.2, 1.0], [53.3, 1.0], [53.4, 1.0], [53.5, 1.0], [53.6, 1.0], [53.7, 1.0], [53.8, 1.0], [53.9, 1.0], [54.0, 1.0], [54.1, 1.0], [54.2, 1.0], [54.3, 1.0], [54.4, 1.0], [54.5, 1.0], [54.6, 1.0], [54.7, 1.0], [54.8, 1.0], [54.9, 1.0], [55.0, 1.0], [55.1, 1.0], [55.2, 1.0], [55.3, 1.0], [55.4, 1.0], [55.5, 1.0], [55.6, 1.0], [55.7, 1.0], [55.8, 1.0], [55.9, 1.0], [56.0, 1.0], [56.1, 1.0], [56.2, 1.0], [56.3, 1.0], [56.4, 1.0], [56.5, 1.0], [56.6, 1.0], [56.7, 1.0], [56.8, 1.0], [56.9, 1.0], [57.0, 1.0], [57.1, 1.0], [57.2, 1.0], [57.3, 1.0], [57.4, 1.0], [57.5, 1.0], [57.6, 1.0], [57.7, 1.0], [57.8, 1.0], [57.9, 1.0], [58.0, 1.0], [58.1, 1.0], [58.2, 1.0], [58.3, 1.0], [58.4, 1.0], [58.5, 1.0], [58.6, 1.0], [58.7, 1.0], [58.8, 1.0], [58.9, 1.0], [59.0, 1.0], [59.1, 1.0], [59.2, 1.0], [59.3, 1.0], [59.4, 1.0], [59.5, 1.0], [59.6, 1.0], [59.7, 1.0], [59.8, 1.0], [59.9, 1.0], [60.0, 1.0], [60.1, 1.0], [60.2, 1.0], [60.3, 1.0], [60.4, 1.0], [60.5, 1.0], [60.6, 1.0], [60.7, 1.0], [60.8, 1.0], [60.9, 1.0], [61.0, 1.0], [61.1, 1.0], [61.2, 1.0], [61.3, 1.0], [61.4, 1.0], [61.5, 1.0], [61.6, 1.0], [61.7, 1.0], [61.8, 1.0], [61.9, 1.0], [62.0, 1.0], [62.1, 1.0], [62.2, 1.0], [62.3, 1.0], [62.4, 1.0], [62.5, 1.0], [62.6, 1.0], [62.7, 1.0], [62.8, 1.0], [62.9, 1.0], [63.0, 1.0], [63.1, 1.0], [63.2, 1.0], [63.3, 1.0], [63.4, 1.0], [63.5, 1.0], [63.6, 1.0], [63.7, 1.0], [63.8, 1.0], [63.9, 1.0], [64.0, 1.0], [64.1, 1.0], [64.2, 1.0], [64.3, 1.0], [64.4, 1.0], [64.5, 1.0], [64.6, 1.0], [64.7, 1.0], [64.8, 1.0], [64.9, 1.0], [65.0, 1.0], [65.1, 1.0], [65.2, 1.0], [65.3, 1.0], [65.4, 1.0], [65.5, 1.0], [65.6, 1.0], [65.7, 1.0], [65.8, 1.0], [65.9, 1.0], [66.0, 1.0], [66.1, 1.0], [66.2, 1.0], [66.3, 1.0], [66.4, 1.0], [66.5, 1.0], [66.6, 1.0], [66.7, 1.0], [66.8, 1.0], [66.9, 1.0], [67.0, 1.0], [67.1, 1.0], [67.2, 1.0], [67.3, 1.0], [67.4, 1.0], [67.5, 1.0], [67.6, 1.0], [67.7, 1.0], [67.8, 1.0], [67.9, 1.0], [68.0, 1.0], [68.1, 1.0], [68.2, 1.0], [68.3, 1.0], [68.4, 1.0], [68.5, 1.0], [68.6, 1.0], [68.7, 1.0], [68.8, 1.0], [68.9, 1.0], [69.0, 1.0], [69.1, 1.0], [69.2, 1.0], [69.3, 1.0], [69.4, 1.0], [69.5, 1.0], [69.6, 1.0], [69.7, 1.0], [69.8, 1.0], [69.9, 1.0], [70.0, 1.0], [70.1, 1.0], [70.2, 1.0], [70.3, 1.0], [70.4, 1.0], [70.5, 1.0], [70.6, 1.0], [70.7, 1.0], [70.8, 1.0], [70.9, 1.0], [71.0, 1.0], [71.1, 1.0], [71.2, 1.0], [71.3, 1.0], [71.4, 1.0], [71.5, 1.0], [71.6, 1.0], [71.7, 1.0], [71.8, 1.0], [71.9, 1.0], [72.0, 1.0], [72.1, 1.0], [72.2, 1.0], [72.3, 1.0], [72.4, 1.0], [72.5, 1.0], [72.6, 1.0], [72.7, 1.0], [72.8, 1.0], [72.9, 1.0], [73.0, 1.0], [73.1, 1.0], [73.2, 1.0], [73.3, 1.0], [73.4, 1.0], [73.5, 1.0], [73.6, 1.0], [73.7, 1.0], [73.8, 1.0], [73.9, 1.0], [74.0, 1.0], [74.1, 1.0], [74.2, 1.0], [74.3, 1.0], [74.4, 1.0], [74.5, 1.0], [74.6, 1.0], [74.7, 1.0], [74.8, 1.0], [74.9, 1.0], [75.0, 1.0], [75.1, 1.0], [75.2, 1.0], [75.3, 1.0], [75.4, 1.0], [75.5, 1.0], [75.6, 1.0], [75.7, 1.0], [75.8, 1.0], [75.9, 1.0], [76.0, 1.0], [76.1, 1.0], [76.2, 1.0], [76.3, 1.0], [76.4, 1.0], [76.5, 1.0], [76.6, 1.0], [76.7, 1.0], [76.8, 1.0], [76.9, 1.0], [77.0, 1.0], [77.1, 1.0], [77.2, 1.0], [77.3, 1.0], [77.4, 1.0], [77.5, 1.0], [77.6, 1.0], [77.7, 1.0], [77.8, 1.0], [77.9, 1.0], [78.0, 1.0], [78.1, 1.0], [78.2, 1.0], [78.3, 1.0], [78.4, 1.0], [78.5, 1.0], [78.6, 1.0], [78.7, 1.0], [78.8, 1.0], [78.9, 1.0], [79.0, 1.0], [79.1, 1.0], [79.2, 1.0], [79.3, 1.0], [79.4, 1.0], [79.5, 1.0], [79.6, 1.0], [79.7, 1.0], [79.8, 1.0], [79.9, 1.0], [80.0, 1.0], [80.1, 1.0], [80.2, 1.0], [80.3, 1.0], [80.4, 1.0], [80.5, 1.0], [80.6, 1.0], [80.7, 1.0], [80.8, 1.0], [80.9, 1.0], [81.0, 1.0], [81.1, 1.0], [81.2, 1.0], [81.3, 1.0], [81.4, 1.0], [81.5, 1.0], [81.6, 1.0], [81.7, 1.0], [81.8, 1.0], [81.9, 1.0], [82.0, 1.0], [82.1, 1.0], [82.2, 1.0], [82.3, 1.0], [82.4, 1.0], [82.5, 1.0], [82.6, 1.0], [82.7, 1.0], [82.8, 1.0], [82.9, 1.0], [83.0, 1.0], [83.1, 1.0], [83.2, 1.0], [83.3, 1.0], [83.4, 1.0], [83.5, 1.0], [83.6, 1.0], [83.7, 1.0], [83.8, 1.0], [83.9, 1.0], [84.0, 1.0], [84.1, 1.0], [84.2, 1.0], [84.3, 1.0], [84.4, 1.0], [84.5, 1.0], [84.6, 1.0], [84.7, 1.0], [84.8, 1.0], [84.9, 1.0], [85.0, 1.0], [85.1, 1.0], [85.2, 1.0], [85.3, 1.0], [85.4, 1.0], [85.5, 1.0], [85.6, 1.0], [85.7, 1.0], [85.8, 1.0], [85.9, 1.0], [86.0, 1.0], [86.1, 1.0], [86.2, 1.0], [86.3, 2.0], [86.4, 2.0], [86.5, 2.0], [86.6, 2.0], [86.7, 2.0], [86.8, 2.0], [86.9, 2.0], [87.0, 2.0], [87.1, 2.0], [87.2, 2.0], [87.3, 2.0], [87.4, 2.0], [87.5, 2.0], [87.6, 2.0], [87.7, 2.0], [87.8, 2.0], [87.9, 2.0], [88.0, 2.0], [88.1, 2.0], [88.2, 2.0], [88.3, 2.0], [88.4, 2.0], [88.5, 2.0], [88.6, 2.0], [88.7, 2.0], [88.8, 2.0], [88.9, 2.0], [89.0, 2.0], [89.1, 2.0], [89.2, 2.0], [89.3, 2.0], [89.4, 2.0], [89.5, 2.0], [89.6, 2.0], [89.7, 2.0], [89.8, 2.0], [89.9, 2.0], [90.0, 2.0], [90.1, 2.0], [90.2, 2.0], [90.3, 2.0], [90.4, 2.0], [90.5, 2.0], [90.6, 2.0], [90.7, 2.0], [90.8, 2.0], [90.9, 2.0], [91.0, 2.0], [91.1, 2.0], [91.2, 2.0], [91.3, 2.0], [91.4, 2.0], [91.5, 2.0], [91.6, 2.0], [91.7, 2.0], [91.8, 2.0], [91.9, 2.0], [92.0, 2.0], [92.1, 2.0], [92.2, 2.0], [92.3, 2.0], [92.4, 2.0], [92.5, 2.0], [92.6, 2.0], [92.7, 2.0], [92.8, 2.0], [92.9, 2.0], [93.0, 2.0], [93.1, 2.0], [93.2, 2.0], [93.3, 2.0], [93.4, 2.0], [93.5, 2.0], [93.6, 2.0], [93.7, 2.0], [93.8, 2.0], [93.9, 2.0], [94.0, 2.0], [94.1, 2.0], [94.2, 2.0], [94.3, 2.0], [94.4, 2.0], [94.5, 2.0], [94.6, 2.0], [94.7, 3.0], [94.8, 3.0], [94.9, 3.0], [95.0, 3.0], [95.1, 3.0], [95.2, 3.0], [95.3, 3.0], [95.4, 3.0], [95.5, 3.0], [95.6, 3.0], [95.7, 3.0], [95.8, 3.0], [95.9, 3.0], [96.0, 3.0], [96.1, 3.0], [96.2, 3.0], [96.3, 3.0], [96.4, 3.0], [96.5, 3.0], [96.6, 3.0], [96.7, 3.0], [96.8, 3.0], [96.9, 3.0], [97.0, 3.0], [97.1, 3.0], [97.2, 3.0], [97.3, 4.0], [97.4, 4.0], [97.5, 4.0], [97.6, 4.0], [97.7, 4.0], [97.8, 4.0], [97.9, 4.0], [98.0, 4.0], [98.1, 4.0], [98.2, 4.0], [98.3, 4.0], [98.4, 5.0], [98.5, 5.0], [98.6, 5.0], [98.7, 5.0], [98.8, 5.0], [98.9, 6.0], [99.0, 6.0], [99.1, 6.0], [99.2, 6.0], [99.3, 7.0], [99.4, 7.0], [99.5, 8.0], [99.6, 9.0], [99.7, 10.0], [99.8, 13.0], [99.9, 23.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 235.0, "minX": 0.0, "maxY": 2749765.0, "series": [{"data": [[0.0, 2749765.0], [100.0, 235.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2750000.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2750000.0, "series": [{"data": [[0.0, 2750000.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.5904005615759222, "minX": 1.70714328E12, "maxY": 5.501250855609485, "series": [{"data": [[1.7071437E12, 4.500991564124178], [1.707144E12, 4.65033145518839], [1.70714406E12, 5.069150128089483], [1.7071434E12, 5.07177317688135], [1.70714346E12, 4.979647621414307], [1.70714376E12, 4.898594164295415], [1.70714382E12, 5.241037436068168], [1.70714412E12, 4.667765669886864], [1.70714418E12, 2.4603757575757044], [1.70714352E12, 4.774864858313159], [1.70714358E12, 4.411168620225673], [1.70714388E12, 5.501250855609485], [1.70714394E12, 5.115843126321944], [1.70714328E12, 3.9946997682583603], [1.70714424E12, 1.7665899036421948], [1.70714334E12, 4.474896386242908], [1.7071443E12, 1.5904005615759222], [1.70714364E12, 4.502184861726425]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7071443E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 0.4783179211161668, "minX": 1.0, "maxY": 8.635014836795243, "series": [{"data": [[2.0, 0.5710002798749109], [3.0, 0.7702667971081864], [4.0, 1.0380875040102548], [5.0, 1.2631424409084204], [6.0, 1.4143127434613207], [7.0, 1.5900235195001153], [8.0, 1.694435172380901], [9.0, 1.8681125083530785], [10.0, 1.9498907791090276], [11.0, 2.044954860897862], [12.0, 2.087107635494731], [13.0, 2.162980694177022], [14.0, 2.329773030707629], [15.0, 2.345543763551303], [16.0, 2.510075168972263], [17.0, 2.3004503538494436], [18.0, 2.370228445099473], [19.0, 2.3291328868523244], [20.0, 2.4879962634283004], [21.0, 2.51891742612538], [22.0, 2.5297157622739035], [23.0, 2.4232613908872986], [24.0, 2.4689876316995005], [25.0, 2.601826682613915], [26.0, 2.6125363660407293], [27.0, 2.71878157932727], [28.0, 2.848844015218032], [29.0, 3.119270346117867], [30.0, 3.1287546933667136], [31.0, 3.3389966020387734], [32.0, 3.0608191973520906], [33.0, 3.1034823413188413], [35.0, 3.236296879097834], [34.0, 3.288627450980396], [36.0, 2.9647822057460633], [37.0, 3.575201432408234], [39.0, 3.743016759776536], [38.0, 3.734456711214414], [40.0, 3.7142857142857144], [41.0, 3.473889321901793], [42.0, 3.7637178051511757], [43.0, 3.127204030226702], [44.0, 4.567460317460318], [45.0, 8.635014836795243], [47.0, 4.296137339055792], [46.0, 5.304761904761903], [49.0, 5.028846153846153], [48.0, 4.71212121212121], [50.0, 5.1870748299319756], [51.0, 4.005263157894739], [53.0, 6.230769230769232], [52.0, 3.9279279279279296], [54.0, 4.860335195530729], [55.0, 3.160714285714285], [56.0, 4.354838709677416], [57.0, 2.5], [58.0, 3.3191489361702136], [59.0, 3.25], [60.0, 2.4814814814814814], [61.0, 4.6], [62.0, 2.739130434782609], [63.0, 7.75], [64.0, 4.333333333333334], [65.0, 5.88888888888889], [67.0, 5.628571428571427], [66.0, 6.25], [68.0, 7.509090909090909], [69.0, 5.455555555555554], [70.0, 5.620689655172415], [71.0, 6.314285714285713], [72.0, 4.357142857142858], [73.0, 5.75], [74.0, 5.666666666666667], [75.0, 5.157894736842105], [76.0, 3.87878787878788], [77.0, 3.5357142857142856], [78.0, 5.200000000000001], [79.0, 4.986301369863013], [80.0, 4.764044943820226], [81.0, 3.285714285714285], [82.0, 5.075], [83.0, 5.187500000000001], [1.0, 0.4783179211161668]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[4.465114545454654, 0.899453454545435]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 83.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 57880.38333333333, "minX": 1.70714328E12, "maxY": 8544782.533333333, "series": [{"data": [[1.7071437E12, 8531090.95], [1.707144E12, 8535273.5], [1.70714406E12, 8539209.566666666], [1.7071434E12, 8537182.266666668], [1.70714346E12, 8537190.733333332], [1.70714376E12, 8532334.616666667], [1.70714382E12, 8544782.533333333], [1.70714412E12, 8536757.05], [1.70714418E12, 8537250.0], [1.70714352E12, 8537351.6], [1.70714358E12, 8536757.05], [1.70714388E12, 8540842.7], [1.70714394E12, 8537241.533333333], [1.70714328E12, 4510437.55], [1.70714424E12, 8537810.683333334], [1.70714334E12, 8538982.85], [1.7071443E12, 1179287.2666666666], [1.70714364E12, 8537717.55]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7071437E12, 418722.93333333335], [1.707144E12, 418694.98333333334], [1.70714406E12, 419299.98333333334], [1.7071434E12, 418979.86666666664], [1.70714346E12, 418982.38333333336], [1.70714376E12, 418527.63333333336], [1.70714382E12, 419544.0833333333], [1.70714412E12, 418994.7166666667], [1.70714418E12, 419000.0], [1.70714352E12, 419030.2], [1.70714358E12, 418994.7166666667], [1.70714388E12, 419220.45], [1.70714394E12, 418997.48333333334], [1.70714328E12, 221349.01666666666], [1.70714424E12, 419025.4166666667], [1.70714334E12, 419091.35], [1.7071443E12, 57880.38333333333], [1.70714364E12, 418997.73333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7071443E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 0.4010880533497116, "minX": 1.70714328E12, "maxY": 1.0169062373173126, "series": [{"data": [[1.7071437E12, 0.9245319635395549], [1.707144E12, 0.948568344058367], [1.70714406E12, 0.9676778565761558], [1.7071434E12, 0.981841543832424], [1.70714346E12, 0.9633378385749682], [1.70714376E12, 0.9470369449012048], [1.70714382E12, 1.0163604999546294], [1.70714412E12, 0.9275082122207461], [1.70714418E12, 0.5941090909090914], [1.70714352E12, 0.9448100744188231], [1.70714358E12, 0.934568903865501], [1.70714388E12, 1.0169062373173126], [1.70714394E12, 0.9822362559773095], [1.70714328E12, 0.8754560264323225], [1.70714424E12, 0.46338403733107125], [1.70714334E12, 0.9406735500133266], [1.7071443E12, 0.4010880533497116], [1.70714364E12, 0.9190904187298108]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7071443E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 0.39784144254815246, "minX": 1.70714328E12, "maxY": 0.9930158037882845, "series": [{"data": [[1.7071437E12, 0.9029540726904558], [1.707144E12, 0.9255696601750387], [1.70714406E12, 0.9435316347603794], [1.7071434E12, 0.962325446082221], [1.70714346E12, 0.9428642427254461], [1.70714376E12, 0.9260555902750401], [1.70714382E12, 0.9927064733831562], [1.70714412E12, 0.9077928217311746], [1.70714418E12, 0.5855333333333335], [1.70714352E12, 0.9237146389353548], [1.70714358E12, 0.914332294936905], [1.70714388E12, 0.9930158037882845], [1.70714394E12, 0.9580482305953166], [1.70714328E12, 0.8511001996191184], [1.70714424E12, 0.4583358584328204], [1.70714334E12, 0.9192358030975], [1.7071443E12, 0.39784144254815246], [1.70714364E12, 0.9008236413553935]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7071443E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0014916860439608622, "minX": 1.70714328E12, "maxY": 0.03690781224445269, "series": [{"data": [[1.7071437E12, 0.02349430836128133], [1.707144E12, 0.03151401937178167], [1.70714406E12, 0.036319260654437094], [1.7071434E12, 0.03410468386345985], [1.70714346E12, 0.033025643512149094], [1.70714376E12, 0.024676451493510658], [1.70714382E12, 0.03496655872650788], [1.70714412E12, 0.03121249954544879], [1.70714418E12, 0.018715151515151584], [1.70714352E12, 0.031549220662739984], [1.70714358E12, 0.03339434417386873], [1.70714388E12, 0.03690781224445269], [1.70714394E12, 0.034824453481536316], [1.70714328E12, 0.012436041575843992], [1.70714424E12, 0.01314465789952114], [1.70714334E12, 0.02999345597324238], [1.7071443E12, 0.0014916860439608622], [1.70714364E12, 0.028194110267334933]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7071443E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.70714328E12, "maxY": 172.0, "series": [{"data": [[1.7071437E12, 140.0], [1.707144E12, 141.0], [1.70714406E12, 139.0], [1.7071434E12, 169.0], [1.70714346E12, 127.0], [1.70714376E12, 144.0], [1.70714382E12, 172.0], [1.70714412E12, 120.0], [1.70714418E12, 92.0], [1.70714352E12, 127.0], [1.70714358E12, 127.0], [1.70714388E12, 160.0], [1.70714394E12, 137.0], [1.70714328E12, 94.0], [1.70714424E12, 28.0], [1.70714334E12, 133.0], [1.7071443E12, 5.0], [1.70714364E12, 142.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7071437E12, 0.0], [1.707144E12, 0.0], [1.70714406E12, 0.0], [1.7071434E12, 0.0], [1.70714346E12, 0.0], [1.70714376E12, 0.0], [1.70714382E12, 0.0], [1.70714412E12, 0.0], [1.70714418E12, 0.0], [1.70714352E12, 0.0], [1.70714358E12, 0.0], [1.70714388E12, 0.0], [1.70714394E12, 0.0], [1.70714328E12, 0.0], [1.70714424E12, 0.0], [1.70714334E12, 0.0], [1.7071443E12, 0.0], [1.70714364E12, 0.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7071437E12, 2.0], [1.707144E12, 2.0], [1.70714406E12, 2.0], [1.7071434E12, 2.0], [1.70714346E12, 2.0], [1.70714376E12, 2.0], [1.70714382E12, 2.0], [1.70714412E12, 2.0], [1.70714418E12, 1.0], [1.70714352E12, 2.0], [1.70714358E12, 2.0], [1.70714388E12, 2.0], [1.70714394E12, 2.0], [1.70714328E12, 2.0], [1.70714424E12, 1.0], [1.70714334E12, 2.0], [1.7071443E12, 1.0], [1.70714364E12, 3.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7071437E12, 9.0], [1.707144E12, 5.0], [1.70714406E12, 5.0], [1.7071434E12, 6.0], [1.70714346E12, 5.0], [1.70714376E12, 6.0], [1.70714382E12, 6.0], [1.70714412E12, 5.0], [1.70714418E12, 2.0], [1.70714352E12, 6.0], [1.70714358E12, 7.0], [1.70714388E12, 6.0], [1.70714394E12, 6.0], [1.70714328E12, 4.0], [1.70714424E12, 2.0], [1.70714334E12, 7.0], [1.7071443E12, 1.0], [1.70714364E12, 9.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7071437E12, 1.0], [1.707144E12, 1.0], [1.70714406E12, 1.0], [1.7071434E12, 1.0], [1.70714346E12, 1.0], [1.70714376E12, 1.0], [1.70714382E12, 1.0], [1.70714412E12, 1.0], [1.70714418E12, 0.0], [1.70714352E12, 1.0], [1.70714358E12, 1.0], [1.70714388E12, 1.0], [1.70714394E12, 1.0], [1.70714328E12, 1.0], [1.70714424E12, 0.0], [1.70714334E12, 1.0], [1.7071443E12, 0.0], [1.70714364E12, 1.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.7071437E12, 4.0], [1.707144E12, 2.0], [1.70714406E12, 2.0], [1.7071434E12, 3.0], [1.70714346E12, 2.0], [1.70714376E12, 3.0], [1.70714382E12, 3.0], [1.70714412E12, 2.0], [1.70714418E12, 1.0], [1.70714352E12, 2.0], [1.70714358E12, 3.0], [1.70714388E12, 3.0], [1.70714394E12, 2.0], [1.70714328E12, 2.0], [1.70714424E12, 1.0], [1.70714334E12, 3.0], [1.7071443E12, 1.0], [1.70714364E12, 4.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7071443E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 0.0, "minX": 795.0, "maxY": 4.0, "series": [{"data": [[795.0, 0.0], [1910.0, 4.0], [2383.0, 1.0], [2426.0, 1.0], [2405.0, 1.0], [2538.0, 1.0], [2547.0, 1.0], [2543.0, 1.0], [2555.0, 1.0], [2551.0, 1.0], [2435.0, 1.0], [2502.0, 1.0], [2511.0, 1.0], [2495.0, 1.0], [2487.0, 1.0], [2476.0, 1.0], [2485.0, 1.0], [2482.0, 1.0], [2557.0, 1.0], [2452.0, 1.0], [2672.0, 1.0], [2682.0, 1.0], [2656.0, 1.0], [2620.0, 1.0], [2674.0, 1.0], [2675.0, 1.0], [2681.0, 1.0], [2680.0, 1.0], [2679.0, 0.0], [2677.0, 1.0], [2662.0, 1.0], [2657.0, 1.0], [2660.0, 1.0], [2659.0, 1.0], [2671.0, 1.0], [2670.0, 1.0], [2663.0, 1.0], [2664.0, 1.0], [2673.0, 1.0], [2605.0, 1.0], [2606.0, 1.0], [2599.0, 1.0], [2607.0, 1.0], [2609.0, 1.0], [2617.0, 1.0], [2608.0, 1.0], [2619.0, 1.0], [2618.0, 1.0], [2598.0, 1.0], [2594.0, 1.0], [2595.0, 1.0], [2592.0, 1.0], [2586.0, 1.0], [2584.0, 1.0], [2564.0, 1.0], [2623.0, 0.0], [2571.0, 1.0], [2578.0, 0.0], [2579.0, 1.0], [2647.0, 1.0], [2653.0, 1.0], [2651.0, 1.0], [2650.0, 1.0], [2649.0, 1.0], [2683.0, 1.0], [2685.0, 1.0], [2684.0, 1.0], [2624.0, 1.0], [2625.0, 1.0], [2640.0, 1.0], [2643.0, 1.0], [2642.0, 0.0], [2636.0, 1.0], [2637.0, 1.0], [2631.0, 1.0], [2629.0, 1.0], [2646.0, 1.0], [2645.0, 1.0], [2627.0, 1.0], [2711.0, 1.0], [2749.0, 0.0], [2775.0, 1.0], [2776.0, 1.0], [2777.0, 1.0], [2770.0, 1.0], [2769.0, 1.0], [2772.0, 1.0], [2773.0, 1.0], [2771.0, 1.0], [2783.0, 1.0], [2780.0, 1.0], [2781.0, 1.0], [2779.0, 1.0], [2782.0, 1.0], [2778.0, 1.0], [2768.0, 1.0], [2741.0, 1.0], [2761.0, 1.0], [2758.0, 1.0], [2759.0, 1.0], [2760.0, 1.0], [2766.0, 1.0], [2767.0, 1.0], [2765.0, 1.0], [2764.0, 1.0], [2763.0, 1.0], [2762.0, 1.0], [2748.0, 0.0], [2740.0, 1.0], [2738.0, 1.0], [2737.0, 1.0], [2739.0, 1.0], [2736.0, 1.0], [2735.0, 1.0], [2733.0, 1.0], [2734.0, 1.0], [2732.0, 1.0], [2730.0, 1.0], [2731.0, 1.0], [2729.0, 1.0], [2725.0, 1.0], [2727.0, 1.0], [2728.0, 0.0], [2726.0, 1.0], [2720.0, 1.0], [2722.0, 1.0], [2723.0, 1.0], [2724.0, 0.0], [2721.0, 1.0], [2747.0, 0.0], [2757.0, 1.0], [2750.0, 0.0], [2698.0, 1.0], [2702.0, 1.0], [2701.0, 1.0], [2700.0, 1.0], [2699.0, 1.0], [2708.0, 1.0], [2706.0, 1.0], [2705.0, 1.0], [2704.0, 1.0], [2703.0, 1.0], [2691.0, 1.0], [2689.0, 1.0], [2690.0, 1.0], [2697.0, 1.0], [2695.0, 1.0], [2693.0, 1.0], [2696.0, 1.0], [2692.0, 1.0], [2719.0, 1.0], [2784.0, 1.0], [2718.0, 1.0], [2713.0, 1.0], [2716.0, 1.0], [2717.0, 0.0], [2715.0, 1.0], [2712.0, 1.0], [2785.0, 1.0], [2792.0, 1.0], [2791.0, 0.0], [2793.0, 1.0], [2790.0, 1.0], [2789.0, 1.0], [2787.0, 1.0], [2786.0, 1.0], [2794.0, 1.0], [2800.0, 1.0], [2801.0, 1.0], [2803.0, 1.0], [2804.0, 1.0], [2806.0, 1.0], [2802.0, 1.0], [2799.0, 1.0], [2796.0, 1.0], [2795.0, 1.0], [2797.0, 1.0], [2798.0, 1.0], [2809.0, 1.0], [2815.0, 1.0], [2812.0, 1.0], [2814.0, 0.0], [2808.0, 1.0], [2807.0, 1.0], [2751.0, 0.0], [2754.0, 1.0], [2755.0, 1.0], [2756.0, 1.0], [2753.0, 0.0], [2752.0, 1.0], [2743.0, 1.0], [2742.0, 1.0], [2746.0, 1.0], [2745.0, 1.0], [2744.0, 1.0], [2833.0, 1.0], [2823.0, 1.0], [2817.0, 1.0], [2818.0, 1.0], [2820.0, 1.0], [2897.0, 1.0], [2902.0, 0.0], [2904.0, 1.0], [2909.0, 1.0], [2893.0, 1.0], [2894.0, 1.0], [2895.0, 1.0], [2827.0, 1.0], [2824.0, 1.0], [2825.0, 1.0], [2828.0, 1.0], [2839.0, 1.0], [2834.0, 1.0], [2836.0, 1.0], [2840.0, 1.0], [2842.0, 1.0], [2841.0, 1.0], [2844.0, 1.0], [2846.0, 1.0], [2843.0, 1.0], [2831.0, 1.0], [2829.0, 1.0], [2888.0, 1.0], [2916.0, 1.0], [2886.0, 1.0], [2881.0, 1.0], [2880.0, 0.0], [2938.0, 1.0], [2942.0, 1.0], [2887.0, 1.0], [2924.0, 1.0], [2921.0, 1.0], [2919.0, 1.0], [2925.0, 1.0], [2850.0, 1.0], [2848.0, 1.0], [2851.0, 1.0], [2853.0, 1.0], [2854.0, 1.0], [2855.0, 1.0], [2816.0, 1.0], [2856.0, 1.0], [2857.0, 1.0], [2858.0, 0.0], [2860.0, 1.0], [2876.0, 1.0], [2865.0, 1.0], [2867.0, 1.0], [2872.0, 1.0], [2868.0, 1.0], [2878.0, 1.0], [2863.0, 1.0], [2862.0, 1.0], [3048.0, 1.0], [2966.0, 1.0], [2971.0, 1.0], [2973.0, 1.0], [2959.0, 1.0], [2958.0, 1.0], [3067.0, 1.0], [3001.0, 1.0], [2980.0, 1.0], [2997.0, 1.0], [3052.0, 1.0], [3017.0, 1.0], [3039.0, 1.0], [3031.0, 1.0], [3111.0, 1.0], [3081.0, 1.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3111.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 795.0, "maxY": 4.0, "series": [{"data": [[795.0, 0.0], [1910.0, 4.0], [2383.0, 1.0], [2426.0, 1.0], [2405.0, 1.0], [2538.0, 1.0], [2547.0, 1.0], [2543.0, 1.0], [2555.0, 1.0], [2551.0, 1.0], [2435.0, 1.0], [2502.0, 1.0], [2511.0, 1.0], [2495.0, 1.0], [2487.0, 1.0], [2476.0, 1.0], [2485.0, 1.0], [2482.0, 1.0], [2557.0, 1.0], [2452.0, 1.0], [2672.0, 1.0], [2682.0, 1.0], [2656.0, 1.0], [2620.0, 1.0], [2674.0, 1.0], [2675.0, 1.0], [2681.0, 1.0], [2680.0, 1.0], [2679.0, 0.0], [2677.0, 1.0], [2662.0, 1.0], [2657.0, 1.0], [2660.0, 1.0], [2659.0, 1.0], [2671.0, 1.0], [2670.0, 1.0], [2663.0, 1.0], [2664.0, 1.0], [2673.0, 1.0], [2605.0, 1.0], [2606.0, 1.0], [2599.0, 1.0], [2607.0, 1.0], [2609.0, 1.0], [2617.0, 1.0], [2608.0, 1.0], [2619.0, 1.0], [2618.0, 1.0], [2598.0, 1.0], [2594.0, 1.0], [2595.0, 1.0], [2592.0, 1.0], [2586.0, 1.0], [2584.0, 1.0], [2564.0, 1.0], [2623.0, 0.0], [2571.0, 1.0], [2578.0, 0.0], [2579.0, 1.0], [2647.0, 1.0], [2653.0, 1.0], [2651.0, 1.0], [2650.0, 1.0], [2649.0, 1.0], [2683.0, 1.0], [2685.0, 1.0], [2684.0, 1.0], [2624.0, 1.0], [2625.0, 1.0], [2640.0, 1.0], [2643.0, 1.0], [2642.0, 0.0], [2636.0, 1.0], [2637.0, 1.0], [2631.0, 1.0], [2629.0, 1.0], [2646.0, 1.0], [2645.0, 1.0], [2627.0, 1.0], [2711.0, 1.0], [2749.0, 0.0], [2775.0, 1.0], [2776.0, 1.0], [2777.0, 1.0], [2770.0, 1.0], [2769.0, 1.0], [2772.0, 1.0], [2773.0, 1.0], [2771.0, 1.0], [2783.0, 1.0], [2780.0, 1.0], [2781.0, 1.0], [2779.0, 1.0], [2782.0, 1.0], [2778.0, 1.0], [2768.0, 1.0], [2741.0, 1.0], [2761.0, 1.0], [2758.0, 1.0], [2759.0, 1.0], [2760.0, 1.0], [2766.0, 1.0], [2767.0, 1.0], [2765.0, 1.0], [2764.0, 1.0], [2763.0, 1.0], [2762.0, 1.0], [2748.0, 0.0], [2740.0, 1.0], [2738.0, 1.0], [2737.0, 1.0], [2739.0, 1.0], [2736.0, 1.0], [2735.0, 1.0], [2733.0, 1.0], [2734.0, 1.0], [2732.0, 1.0], [2730.0, 1.0], [2731.0, 1.0], [2729.0, 1.0], [2725.0, 1.0], [2727.0, 1.0], [2728.0, 0.0], [2726.0, 1.0], [2720.0, 1.0], [2722.0, 0.0], [2723.0, 1.0], [2724.0, 0.0], [2721.0, 1.0], [2747.0, 0.0], [2757.0, 1.0], [2750.0, 0.0], [2698.0, 1.0], [2702.0, 1.0], [2701.0, 1.0], [2700.0, 1.0], [2699.0, 1.0], [2708.0, 1.0], [2706.0, 1.0], [2705.0, 1.0], [2704.0, 1.0], [2703.0, 1.0], [2691.0, 1.0], [2689.0, 1.0], [2690.0, 1.0], [2697.0, 1.0], [2695.0, 1.0], [2693.0, 1.0], [2696.0, 1.0], [2692.0, 1.0], [2719.0, 1.0], [2784.0, 1.0], [2718.0, 1.0], [2713.0, 1.0], [2716.0, 1.0], [2717.0, 0.0], [2715.0, 1.0], [2712.0, 1.0], [2785.0, 1.0], [2792.0, 1.0], [2791.0, 0.0], [2793.0, 1.0], [2790.0, 1.0], [2789.0, 1.0], [2787.0, 1.0], [2786.0, 1.0], [2794.0, 1.0], [2800.0, 1.0], [2801.0, 1.0], [2803.0, 1.0], [2804.0, 1.0], [2806.0, 1.0], [2802.0, 1.0], [2799.0, 1.0], [2796.0, 1.0], [2795.0, 1.0], [2797.0, 1.0], [2798.0, 1.0], [2809.0, 1.0], [2815.0, 1.0], [2812.0, 1.0], [2814.0, 0.0], [2808.0, 1.0], [2807.0, 1.0], [2751.0, 0.0], [2754.0, 1.0], [2755.0, 1.0], [2756.0, 1.0], [2753.0, 0.0], [2752.0, 1.0], [2743.0, 1.0], [2742.0, 1.0], [2746.0, 1.0], [2745.0, 1.0], [2744.0, 1.0], [2833.0, 1.0], [2823.0, 1.0], [2817.0, 1.0], [2818.0, 1.0], [2820.0, 1.0], [2897.0, 1.0], [2902.0, 0.0], [2904.0, 1.0], [2909.0, 1.0], [2893.0, 1.0], [2894.0, 1.0], [2895.0, 1.0], [2827.0, 1.0], [2824.0, 1.0], [2825.0, 1.0], [2828.0, 1.0], [2839.0, 1.0], [2834.0, 1.0], [2836.0, 1.0], [2840.0, 1.0], [2842.0, 1.0], [2841.0, 1.0], [2844.0, 1.0], [2846.0, 1.0], [2843.0, 1.0], [2831.0, 1.0], [2829.0, 1.0], [2888.0, 1.0], [2916.0, 1.0], [2886.0, 1.0], [2881.0, 1.0], [2880.0, 0.0], [2938.0, 1.0], [2942.0, 1.0], [2887.0, 1.0], [2924.0, 1.0], [2921.0, 1.0], [2919.0, 1.0], [2925.0, 1.0], [2850.0, 1.0], [2848.0, 1.0], [2851.0, 1.0], [2853.0, 1.0], [2854.0, 1.0], [2855.0, 1.0], [2816.0, 1.0], [2856.0, 1.0], [2857.0, 1.0], [2858.0, 0.0], [2860.0, 1.0], [2876.0, 1.0], [2865.0, 1.0], [2867.0, 1.0], [2872.0, 1.0], [2868.0, 1.0], [2878.0, 1.0], [2863.0, 1.0], [2862.0, 1.0], [3048.0, 1.0], [2966.0, 1.0], [2971.0, 1.0], [2973.0, 1.0], [2959.0, 1.0], [2958.0, 1.0], [3067.0, 1.0], [3001.0, 1.0], [2980.0, 1.0], [2997.0, 1.0], [3052.0, 1.0], [3017.0, 1.0], [3039.0, 1.0], [3031.0, 1.0], [3111.0, 1.0], [3081.0, 1.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3111.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 379.8833333333333, "minX": 1.70714328E12, "maxY": 2753.15, "series": [{"data": [[1.7071437E12, 2748.2166666666667], [1.707144E12, 2748.1666666666665], [1.70714406E12, 2751.7833333333333], [1.7071434E12, 2749.85], [1.70714346E12, 2749.9333333333334], [1.70714376E12, 2747.3333333333335], [1.70714382E12, 2753.15], [1.70714412E12, 2749.95], [1.70714418E12, 2750.0], [1.70714352E12, 2750.15], [1.70714358E12, 2749.95], [1.70714388E12, 2751.383333333333], [1.70714394E12, 2750.016666666667], [1.70714328E12, 1452.7833333333333], [1.70714424E12, 2750.1666666666665], [1.70714334E12, 2750.616666666667], [1.7071443E12, 379.8833333333333], [1.70714364E12, 2750.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7071443E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 379.8833333333333, "minX": 1.70714328E12, "maxY": 2753.5833333333335, "series": [{"data": [[1.7071437E12, 2748.1833333333334], [1.707144E12, 2747.983333333333], [1.70714406E12, 2751.983333333333], [1.7071434E12, 2749.866666666667], [1.70714346E12, 2749.883333333333], [1.70714376E12, 2746.883333333333], [1.70714382E12, 2753.5833333333335], [1.70714412E12, 2749.9666666666667], [1.70714418E12, 2750.0], [1.70714352E12, 2750.2], [1.70714358E12, 2749.9666666666667], [1.70714388E12, 2751.45], [1.70714394E12, 2749.983333333333], [1.70714328E12, 1452.7666666666667], [1.70714424E12, 2750.1666666666665], [1.70714334E12, 2750.6], [1.7071443E12, 379.8833333333333], [1.70714364E12, 2749.983333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7071443E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 379.8833333333333, "minX": 1.70714328E12, "maxY": 2753.5833333333335, "series": [{"data": [[1.7071437E12, 2748.1833333333334], [1.707144E12, 2747.983333333333], [1.70714406E12, 2751.983333333333], [1.7071434E12, 2749.866666666667], [1.70714346E12, 2749.883333333333], [1.70714376E12, 2746.883333333333], [1.70714382E12, 2753.5833333333335], [1.70714412E12, 2749.9666666666667], [1.70714418E12, 2750.0], [1.70714352E12, 2750.2], [1.70714358E12, 2749.9666666666667], [1.70714388E12, 2751.45], [1.70714394E12, 2749.983333333333], [1.70714328E12, 1452.7666666666667], [1.70714424E12, 2750.1666666666665], [1.70714334E12, 2750.6], [1.7071443E12, 379.8833333333333], [1.70714364E12, 2749.983333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7071443E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 379.8833333333333, "minX": 1.70714328E12, "maxY": 2753.5833333333335, "series": [{"data": [[1.7071437E12, 2748.1833333333334], [1.707144E12, 2747.983333333333], [1.70714406E12, 2751.983333333333], [1.7071434E12, 2749.866666666667], [1.70714346E12, 2749.883333333333], [1.70714376E12, 2746.883333333333], [1.70714382E12, 2753.5833333333335], [1.70714412E12, 2749.9666666666667], [1.70714418E12, 2750.0], [1.70714352E12, 2750.2], [1.70714358E12, 2749.9666666666667], [1.70714388E12, 2751.45], [1.70714394E12, 2749.983333333333], [1.70714328E12, 1452.7666666666667], [1.70714424E12, 2750.1666666666665], [1.70714334E12, 2750.6], [1.7071443E12, 379.8833333333333], [1.70714364E12, 2749.983333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7071443E12, "title": "Total Transactions Per Second"}},
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

