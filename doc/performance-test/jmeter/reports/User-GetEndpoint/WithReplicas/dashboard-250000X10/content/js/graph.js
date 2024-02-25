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
        data: {"result": {"minY": 0.0, "minX": 0.0, "maxY": 163.0, "series": [{"data": [[0.0, 0.0], [0.1, 0.0], [0.2, 0.0], [0.3, 0.0], [0.4, 0.0], [0.5, 0.0], [0.6, 0.0], [0.7, 0.0], [0.8, 0.0], [0.9, 0.0], [1.0, 0.0], [1.1, 0.0], [1.2, 0.0], [1.3, 0.0], [1.4, 0.0], [1.5, 0.0], [1.6, 0.0], [1.7, 0.0], [1.8, 0.0], [1.9, 0.0], [2.0, 0.0], [2.1, 0.0], [2.2, 0.0], [2.3, 0.0], [2.4, 0.0], [2.5, 0.0], [2.6, 0.0], [2.7, 0.0], [2.8, 0.0], [2.9, 0.0], [3.0, 0.0], [3.1, 0.0], [3.2, 0.0], [3.3, 0.0], [3.4, 0.0], [3.5, 0.0], [3.6, 0.0], [3.7, 0.0], [3.8, 0.0], [3.9, 0.0], [4.0, 0.0], [4.1, 0.0], [4.2, 0.0], [4.3, 0.0], [4.4, 0.0], [4.5, 0.0], [4.6, 0.0], [4.7, 0.0], [4.8, 0.0], [4.9, 0.0], [5.0, 0.0], [5.1, 0.0], [5.2, 0.0], [5.3, 0.0], [5.4, 0.0], [5.5, 0.0], [5.6, 0.0], [5.7, 0.0], [5.8, 0.0], [5.9, 0.0], [6.0, 0.0], [6.1, 0.0], [6.2, 0.0], [6.3, 0.0], [6.4, 0.0], [6.5, 0.0], [6.6, 0.0], [6.7, 0.0], [6.8, 0.0], [6.9, 0.0], [7.0, 0.0], [7.1, 0.0], [7.2, 0.0], [7.3, 0.0], [7.4, 0.0], [7.5, 0.0], [7.6, 0.0], [7.7, 0.0], [7.8, 0.0], [7.9, 0.0], [8.0, 0.0], [8.1, 0.0], [8.2, 0.0], [8.3, 0.0], [8.4, 0.0], [8.5, 0.0], [8.6, 0.0], [8.7, 0.0], [8.8, 0.0], [8.9, 0.0], [9.0, 0.0], [9.1, 0.0], [9.2, 0.0], [9.3, 0.0], [9.4, 0.0], [9.5, 0.0], [9.6, 0.0], [9.7, 0.0], [9.8, 0.0], [9.9, 0.0], [10.0, 0.0], [10.1, 0.0], [10.2, 0.0], [10.3, 0.0], [10.4, 0.0], [10.5, 0.0], [10.6, 0.0], [10.7, 0.0], [10.8, 0.0], [10.9, 0.0], [11.0, 0.0], [11.1, 0.0], [11.2, 0.0], [11.3, 0.0], [11.4, 0.0], [11.5, 0.0], [11.6, 0.0], [11.7, 0.0], [11.8, 0.0], [11.9, 0.0], [12.0, 0.0], [12.1, 0.0], [12.2, 0.0], [12.3, 0.0], [12.4, 0.0], [12.5, 0.0], [12.6, 0.0], [12.7, 0.0], [12.8, 0.0], [12.9, 0.0], [13.0, 0.0], [13.1, 0.0], [13.2, 0.0], [13.3, 0.0], [13.4, 0.0], [13.5, 0.0], [13.6, 0.0], [13.7, 0.0], [13.8, 0.0], [13.9, 0.0], [14.0, 0.0], [14.1, 0.0], [14.2, 0.0], [14.3, 0.0], [14.4, 0.0], [14.5, 0.0], [14.6, 0.0], [14.7, 0.0], [14.8, 0.0], [14.9, 0.0], [15.0, 0.0], [15.1, 0.0], [15.2, 0.0], [15.3, 0.0], [15.4, 0.0], [15.5, 0.0], [15.6, 0.0], [15.7, 0.0], [15.8, 0.0], [15.9, 0.0], [16.0, 0.0], [16.1, 0.0], [16.2, 0.0], [16.3, 0.0], [16.4, 0.0], [16.5, 0.0], [16.6, 0.0], [16.7, 0.0], [16.8, 0.0], [16.9, 0.0], [17.0, 0.0], [17.1, 0.0], [17.2, 0.0], [17.3, 0.0], [17.4, 0.0], [17.5, 0.0], [17.6, 0.0], [17.7, 0.0], [17.8, 0.0], [17.9, 0.0], [18.0, 0.0], [18.1, 0.0], [18.2, 0.0], [18.3, 0.0], [18.4, 0.0], [18.5, 0.0], [18.6, 0.0], [18.7, 0.0], [18.8, 0.0], [18.9, 0.0], [19.0, 0.0], [19.1, 0.0], [19.2, 0.0], [19.3, 0.0], [19.4, 0.0], [19.5, 0.0], [19.6, 0.0], [19.7, 0.0], [19.8, 0.0], [19.9, 0.0], [20.0, 0.0], [20.1, 0.0], [20.2, 0.0], [20.3, 0.0], [20.4, 0.0], [20.5, 0.0], [20.6, 0.0], [20.7, 0.0], [20.8, 0.0], [20.9, 0.0], [21.0, 0.0], [21.1, 0.0], [21.2, 0.0], [21.3, 0.0], [21.4, 0.0], [21.5, 0.0], [21.6, 0.0], [21.7, 0.0], [21.8, 0.0], [21.9, 0.0], [22.0, 0.0], [22.1, 0.0], [22.2, 0.0], [22.3, 0.0], [22.4, 0.0], [22.5, 0.0], [22.6, 0.0], [22.7, 0.0], [22.8, 0.0], [22.9, 0.0], [23.0, 0.0], [23.1, 0.0], [23.2, 0.0], [23.3, 0.0], [23.4, 0.0], [23.5, 0.0], [23.6, 0.0], [23.7, 0.0], [23.8, 0.0], [23.9, 0.0], [24.0, 0.0], [24.1, 0.0], [24.2, 0.0], [24.3, 0.0], [24.4, 0.0], [24.5, 0.0], [24.6, 0.0], [24.7, 0.0], [24.8, 0.0], [24.9, 0.0], [25.0, 0.0], [25.1, 0.0], [25.2, 0.0], [25.3, 0.0], [25.4, 0.0], [25.5, 0.0], [25.6, 0.0], [25.7, 0.0], [25.8, 0.0], [25.9, 0.0], [26.0, 0.0], [26.1, 0.0], [26.2, 0.0], [26.3, 0.0], [26.4, 0.0], [26.5, 0.0], [26.6, 0.0], [26.7, 0.0], [26.8, 0.0], [26.9, 0.0], [27.0, 0.0], [27.1, 0.0], [27.2, 0.0], [27.3, 0.0], [27.4, 0.0], [27.5, 0.0], [27.6, 0.0], [27.7, 0.0], [27.8, 0.0], [27.9, 0.0], [28.0, 0.0], [28.1, 0.0], [28.2, 0.0], [28.3, 0.0], [28.4, 0.0], [28.5, 0.0], [28.6, 0.0], [28.7, 0.0], [28.8, 0.0], [28.9, 0.0], [29.0, 0.0], [29.1, 0.0], [29.2, 0.0], [29.3, 0.0], [29.4, 0.0], [29.5, 0.0], [29.6, 0.0], [29.7, 0.0], [29.8, 0.0], [29.9, 0.0], [30.0, 0.0], [30.1, 0.0], [30.2, 0.0], [30.3, 0.0], [30.4, 0.0], [30.5, 0.0], [30.6, 0.0], [30.7, 0.0], [30.8, 0.0], [30.9, 0.0], [31.0, 0.0], [31.1, 0.0], [31.2, 0.0], [31.3, 0.0], [31.4, 0.0], [31.5, 0.0], [31.6, 0.0], [31.7, 0.0], [31.8, 0.0], [31.9, 0.0], [32.0, 0.0], [32.1, 0.0], [32.2, 0.0], [32.3, 0.0], [32.4, 0.0], [32.5, 0.0], [32.6, 0.0], [32.7, 0.0], [32.8, 0.0], [32.9, 0.0], [33.0, 0.0], [33.1, 0.0], [33.2, 0.0], [33.3, 0.0], [33.4, 0.0], [33.5, 0.0], [33.6, 0.0], [33.7, 0.0], [33.8, 0.0], [33.9, 0.0], [34.0, 0.0], [34.1, 0.0], [34.2, 0.0], [34.3, 0.0], [34.4, 0.0], [34.5, 0.0], [34.6, 0.0], [34.7, 0.0], [34.8, 0.0], [34.9, 0.0], [35.0, 0.0], [35.1, 0.0], [35.2, 0.0], [35.3, 0.0], [35.4, 0.0], [35.5, 0.0], [35.6, 0.0], [35.7, 0.0], [35.8, 0.0], [35.9, 0.0], [36.0, 0.0], [36.1, 0.0], [36.2, 0.0], [36.3, 0.0], [36.4, 0.0], [36.5, 0.0], [36.6, 0.0], [36.7, 0.0], [36.8, 0.0], [36.9, 0.0], [37.0, 0.0], [37.1, 0.0], [37.2, 0.0], [37.3, 0.0], [37.4, 0.0], [37.5, 0.0], [37.6, 0.0], [37.7, 0.0], [37.8, 0.0], [37.9, 0.0], [38.0, 0.0], [38.1, 0.0], [38.2, 0.0], [38.3, 0.0], [38.4, 0.0], [38.5, 0.0], [38.6, 0.0], [38.7, 0.0], [38.8, 0.0], [38.9, 0.0], [39.0, 0.0], [39.1, 0.0], [39.2, 0.0], [39.3, 0.0], [39.4, 0.0], [39.5, 0.0], [39.6, 0.0], [39.7, 0.0], [39.8, 0.0], [39.9, 0.0], [40.0, 0.0], [40.1, 0.0], [40.2, 0.0], [40.3, 0.0], [40.4, 0.0], [40.5, 0.0], [40.6, 0.0], [40.7, 0.0], [40.8, 0.0], [40.9, 0.0], [41.0, 0.0], [41.1, 0.0], [41.2, 0.0], [41.3, 0.0], [41.4, 0.0], [41.5, 0.0], [41.6, 0.0], [41.7, 0.0], [41.8, 0.0], [41.9, 0.0], [42.0, 0.0], [42.1, 0.0], [42.2, 0.0], [42.3, 0.0], [42.4, 0.0], [42.5, 0.0], [42.6, 0.0], [42.7, 0.0], [42.8, 0.0], [42.9, 0.0], [43.0, 0.0], [43.1, 0.0], [43.2, 0.0], [43.3, 0.0], [43.4, 0.0], [43.5, 0.0], [43.6, 0.0], [43.7, 0.0], [43.8, 0.0], [43.9, 0.0], [44.0, 0.0], [44.1, 0.0], [44.2, 0.0], [44.3, 0.0], [44.4, 0.0], [44.5, 0.0], [44.6, 0.0], [44.7, 0.0], [44.8, 0.0], [44.9, 0.0], [45.0, 0.0], [45.1, 0.0], [45.2, 0.0], [45.3, 0.0], [45.4, 0.0], [45.5, 0.0], [45.6, 0.0], [45.7, 0.0], [45.8, 0.0], [45.9, 0.0], [46.0, 0.0], [46.1, 0.0], [46.2, 0.0], [46.3, 0.0], [46.4, 0.0], [46.5, 0.0], [46.6, 0.0], [46.7, 0.0], [46.8, 0.0], [46.9, 0.0], [47.0, 0.0], [47.1, 0.0], [47.2, 0.0], [47.3, 0.0], [47.4, 0.0], [47.5, 0.0], [47.6, 0.0], [47.7, 0.0], [47.8, 0.0], [47.9, 0.0], [48.0, 0.0], [48.1, 0.0], [48.2, 0.0], [48.3, 0.0], [48.4, 0.0], [48.5, 0.0], [48.6, 0.0], [48.7, 0.0], [48.8, 0.0], [48.9, 1.0], [49.0, 1.0], [49.1, 1.0], [49.2, 1.0], [49.3, 1.0], [49.4, 1.0], [49.5, 1.0], [49.6, 1.0], [49.7, 1.0], [49.8, 1.0], [49.9, 1.0], [50.0, 1.0], [50.1, 1.0], [50.2, 1.0], [50.3, 1.0], [50.4, 1.0], [50.5, 1.0], [50.6, 1.0], [50.7, 1.0], [50.8, 1.0], [50.9, 1.0], [51.0, 1.0], [51.1, 1.0], [51.2, 1.0], [51.3, 1.0], [51.4, 1.0], [51.5, 1.0], [51.6, 1.0], [51.7, 1.0], [51.8, 1.0], [51.9, 1.0], [52.0, 1.0], [52.1, 1.0], [52.2, 1.0], [52.3, 1.0], [52.4, 1.0], [52.5, 1.0], [52.6, 1.0], [52.7, 1.0], [52.8, 1.0], [52.9, 1.0], [53.0, 1.0], [53.1, 1.0], [53.2, 1.0], [53.3, 1.0], [53.4, 1.0], [53.5, 1.0], [53.6, 1.0], [53.7, 1.0], [53.8, 1.0], [53.9, 1.0], [54.0, 1.0], [54.1, 1.0], [54.2, 1.0], [54.3, 1.0], [54.4, 1.0], [54.5, 1.0], [54.6, 1.0], [54.7, 1.0], [54.8, 1.0], [54.9, 1.0], [55.0, 1.0], [55.1, 1.0], [55.2, 1.0], [55.3, 1.0], [55.4, 1.0], [55.5, 1.0], [55.6, 1.0], [55.7, 1.0], [55.8, 1.0], [55.9, 1.0], [56.0, 1.0], [56.1, 1.0], [56.2, 1.0], [56.3, 1.0], [56.4, 1.0], [56.5, 1.0], [56.6, 1.0], [56.7, 1.0], [56.8, 1.0], [56.9, 1.0], [57.0, 1.0], [57.1, 1.0], [57.2, 1.0], [57.3, 1.0], [57.4, 1.0], [57.5, 1.0], [57.6, 1.0], [57.7, 1.0], [57.8, 1.0], [57.9, 1.0], [58.0, 1.0], [58.1, 1.0], [58.2, 1.0], [58.3, 1.0], [58.4, 1.0], [58.5, 1.0], [58.6, 1.0], [58.7, 1.0], [58.8, 1.0], [58.9, 1.0], [59.0, 1.0], [59.1, 1.0], [59.2, 1.0], [59.3, 1.0], [59.4, 1.0], [59.5, 1.0], [59.6, 1.0], [59.7, 1.0], [59.8, 1.0], [59.9, 1.0], [60.0, 1.0], [60.1, 1.0], [60.2, 1.0], [60.3, 1.0], [60.4, 1.0], [60.5, 1.0], [60.6, 1.0], [60.7, 1.0], [60.8, 1.0], [60.9, 1.0], [61.0, 1.0], [61.1, 1.0], [61.2, 1.0], [61.3, 1.0], [61.4, 1.0], [61.5, 1.0], [61.6, 1.0], [61.7, 1.0], [61.8, 1.0], [61.9, 1.0], [62.0, 1.0], [62.1, 1.0], [62.2, 1.0], [62.3, 1.0], [62.4, 1.0], [62.5, 1.0], [62.6, 1.0], [62.7, 1.0], [62.8, 1.0], [62.9, 1.0], [63.0, 1.0], [63.1, 1.0], [63.2, 1.0], [63.3, 1.0], [63.4, 1.0], [63.5, 1.0], [63.6, 1.0], [63.7, 1.0], [63.8, 1.0], [63.9, 1.0], [64.0, 1.0], [64.1, 1.0], [64.2, 1.0], [64.3, 1.0], [64.4, 1.0], [64.5, 1.0], [64.6, 1.0], [64.7, 1.0], [64.8, 1.0], [64.9, 1.0], [65.0, 1.0], [65.1, 1.0], [65.2, 1.0], [65.3, 1.0], [65.4, 1.0], [65.5, 1.0], [65.6, 1.0], [65.7, 1.0], [65.8, 1.0], [65.9, 1.0], [66.0, 1.0], [66.1, 1.0], [66.2, 1.0], [66.3, 1.0], [66.4, 1.0], [66.5, 1.0], [66.6, 1.0], [66.7, 1.0], [66.8, 1.0], [66.9, 1.0], [67.0, 1.0], [67.1, 1.0], [67.2, 1.0], [67.3, 1.0], [67.4, 1.0], [67.5, 1.0], [67.6, 1.0], [67.7, 1.0], [67.8, 1.0], [67.9, 1.0], [68.0, 1.0], [68.1, 1.0], [68.2, 1.0], [68.3, 1.0], [68.4, 1.0], [68.5, 1.0], [68.6, 1.0], [68.7, 1.0], [68.8, 1.0], [68.9, 1.0], [69.0, 1.0], [69.1, 1.0], [69.2, 1.0], [69.3, 1.0], [69.4, 1.0], [69.5, 1.0], [69.6, 1.0], [69.7, 1.0], [69.8, 1.0], [69.9, 1.0], [70.0, 1.0], [70.1, 1.0], [70.2, 1.0], [70.3, 1.0], [70.4, 1.0], [70.5, 1.0], [70.6, 1.0], [70.7, 1.0], [70.8, 1.0], [70.9, 1.0], [71.0, 1.0], [71.1, 1.0], [71.2, 1.0], [71.3, 1.0], [71.4, 1.0], [71.5, 1.0], [71.6, 1.0], [71.7, 1.0], [71.8, 1.0], [71.9, 1.0], [72.0, 1.0], [72.1, 1.0], [72.2, 1.0], [72.3, 1.0], [72.4, 1.0], [72.5, 1.0], [72.6, 1.0], [72.7, 1.0], [72.8, 1.0], [72.9, 1.0], [73.0, 1.0], [73.1, 1.0], [73.2, 1.0], [73.3, 1.0], [73.4, 1.0], [73.5, 1.0], [73.6, 1.0], [73.7, 1.0], [73.8, 1.0], [73.9, 1.0], [74.0, 1.0], [74.1, 1.0], [74.2, 1.0], [74.3, 1.0], [74.4, 1.0], [74.5, 1.0], [74.6, 1.0], [74.7, 1.0], [74.8, 1.0], [74.9, 1.0], [75.0, 1.0], [75.1, 1.0], [75.2, 1.0], [75.3, 1.0], [75.4, 1.0], [75.5, 1.0], [75.6, 1.0], [75.7, 1.0], [75.8, 1.0], [75.9, 1.0], [76.0, 1.0], [76.1, 1.0], [76.2, 1.0], [76.3, 1.0], [76.4, 1.0], [76.5, 1.0], [76.6, 1.0], [76.7, 1.0], [76.8, 1.0], [76.9, 1.0], [77.0, 1.0], [77.1, 1.0], [77.2, 1.0], [77.3, 1.0], [77.4, 1.0], [77.5, 1.0], [77.6, 1.0], [77.7, 1.0], [77.8, 1.0], [77.9, 1.0], [78.0, 1.0], [78.1, 1.0], [78.2, 1.0], [78.3, 1.0], [78.4, 1.0], [78.5, 1.0], [78.6, 1.0], [78.7, 1.0], [78.8, 1.0], [78.9, 1.0], [79.0, 1.0], [79.1, 1.0], [79.2, 1.0], [79.3, 1.0], [79.4, 1.0], [79.5, 1.0], [79.6, 1.0], [79.7, 1.0], [79.8, 1.0], [79.9, 1.0], [80.0, 1.0], [80.1, 1.0], [80.2, 1.0], [80.3, 1.0], [80.4, 1.0], [80.5, 1.0], [80.6, 1.0], [80.7, 1.0], [80.8, 1.0], [80.9, 1.0], [81.0, 1.0], [81.1, 1.0], [81.2, 1.0], [81.3, 1.0], [81.4, 1.0], [81.5, 1.0], [81.6, 1.0], [81.7, 1.0], [81.8, 1.0], [81.9, 1.0], [82.0, 1.0], [82.1, 1.0], [82.2, 1.0], [82.3, 1.0], [82.4, 1.0], [82.5, 1.0], [82.6, 1.0], [82.7, 1.0], [82.8, 1.0], [82.9, 1.0], [83.0, 1.0], [83.1, 1.0], [83.2, 1.0], [83.3, 1.0], [83.4, 1.0], [83.5, 1.0], [83.6, 1.0], [83.7, 1.0], [83.8, 1.0], [83.9, 1.0], [84.0, 1.0], [84.1, 1.0], [84.2, 1.0], [84.3, 1.0], [84.4, 1.0], [84.5, 1.0], [84.6, 1.0], [84.7, 1.0], [84.8, 1.0], [84.9, 1.0], [85.0, 1.0], [85.1, 1.0], [85.2, 1.0], [85.3, 1.0], [85.4, 1.0], [85.5, 1.0], [85.6, 1.0], [85.7, 1.0], [85.8, 1.0], [85.9, 1.0], [86.0, 1.0], [86.1, 1.0], [86.2, 1.0], [86.3, 1.0], [86.4, 1.0], [86.5, 1.0], [86.6, 1.0], [86.7, 1.0], [86.8, 1.0], [86.9, 1.0], [87.0, 1.0], [87.1, 1.0], [87.2, 1.0], [87.3, 1.0], [87.4, 1.0], [87.5, 1.0], [87.6, 1.0], [87.7, 1.0], [87.8, 1.0], [87.9, 1.0], [88.0, 1.0], [88.1, 1.0], [88.2, 1.0], [88.3, 1.0], [88.4, 1.0], [88.5, 1.0], [88.6, 1.0], [88.7, 1.0], [88.8, 1.0], [88.9, 1.0], [89.0, 1.0], [89.1, 1.0], [89.2, 1.0], [89.3, 1.0], [89.4, 1.0], [89.5, 1.0], [89.6, 1.0], [89.7, 1.0], [89.8, 1.0], [89.9, 1.0], [90.0, 1.0], [90.1, 1.0], [90.2, 1.0], [90.3, 1.0], [90.4, 1.0], [90.5, 1.0], [90.6, 1.0], [90.7, 1.0], [90.8, 1.0], [90.9, 1.0], [91.0, 2.0], [91.1, 2.0], [91.2, 2.0], [91.3, 2.0], [91.4, 2.0], [91.5, 2.0], [91.6, 2.0], [91.7, 2.0], [91.8, 2.0], [91.9, 2.0], [92.0, 2.0], [92.1, 2.0], [92.2, 2.0], [92.3, 2.0], [92.4, 2.0], [92.5, 2.0], [92.6, 2.0], [92.7, 2.0], [92.8, 2.0], [92.9, 2.0], [93.0, 2.0], [93.1, 2.0], [93.2, 2.0], [93.3, 2.0], [93.4, 2.0], [93.5, 2.0], [93.6, 2.0], [93.7, 2.0], [93.8, 2.0], [93.9, 2.0], [94.0, 2.0], [94.1, 2.0], [94.2, 2.0], [94.3, 2.0], [94.4, 2.0], [94.5, 2.0], [94.6, 2.0], [94.7, 2.0], [94.8, 2.0], [94.9, 2.0], [95.0, 2.0], [95.1, 2.0], [95.2, 2.0], [95.3, 2.0], [95.4, 2.0], [95.5, 2.0], [95.6, 2.0], [95.7, 2.0], [95.8, 2.0], [95.9, 2.0], [96.0, 2.0], [96.1, 2.0], [96.2, 2.0], [96.3, 2.0], [96.4, 3.0], [96.5, 3.0], [96.6, 3.0], [96.7, 3.0], [96.8, 3.0], [96.9, 3.0], [97.0, 3.0], [97.1, 3.0], [97.2, 3.0], [97.3, 3.0], [97.4, 3.0], [97.5, 3.0], [97.6, 3.0], [97.7, 3.0], [97.8, 3.0], [97.9, 3.0], [98.0, 3.0], [98.1, 3.0], [98.2, 4.0], [98.3, 4.0], [98.4, 4.0], [98.5, 4.0], [98.6, 4.0], [98.7, 4.0], [98.8, 4.0], [98.9, 4.0], [99.0, 5.0], [99.1, 5.0], [99.2, 5.0], [99.3, 6.0], [99.4, 6.0], [99.5, 7.0], [99.6, 7.0], [99.7, 9.0], [99.8, 11.0], [99.9, 19.0], [100.0, 163.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 203.0, "minX": 0.0, "maxY": 2749797.0, "series": [{"data": [[0.0, 2749797.0], [100.0, 203.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.5747854697434447, "minX": 1.70820222E12, "maxY": 4.933648111331969, "series": [{"data": [[1.70820276E12, 4.746704822418092], [1.70820246E12, 4.27499303308985], [1.7082024E12, 4.610251902149228], [1.70820306E12, 3.9691983199084158], [1.70820252E12, 4.396315039849704], [1.70820222E12, 4.082192172038102], [1.70820318E12, 1.5747854697434447], [1.70820312E12, 1.8421413073780937], [1.70820282E12, 4.706873568511538], [1.70820228E12, 4.117444214149851], [1.70820294E12, 4.548165165420085], [1.70820288E12, 4.2741100755088], [1.70820258E12, 4.224150998308388], [1.708203E12, 4.630792163801473], [1.7082027E12, 4.464427057133732], [1.70820264E12, 4.685883379169073], [1.70820234E12, 4.933648111331969]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70820318E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 0.4204583998265212, "minX": 1.0, "maxY": 28.376623376623368, "series": [{"data": [[2.0, 0.5019464316022392], [3.0, 0.7110846107980213], [4.0, 0.915183925298497], [5.0, 1.1003871784371495], [6.0, 1.2134923752723015], [7.0, 1.3503928532988976], [8.0, 1.477150626782502], [9.0, 1.6655239230883985], [10.0, 1.69008455034588], [11.0, 1.7994833068362508], [12.0, 1.758845223003344], [13.0, 1.8925368437614754], [14.0, 1.9460668509675794], [15.0, 1.9936913708925457], [16.0, 1.9967692569290838], [17.0, 1.9320466674941024], [18.0, 1.9047220478482196], [19.0, 1.9634382005101672], [20.0, 1.9367015098722418], [21.0, 1.9176859208999186], [22.0, 2.0846314589665695], [23.0, 2.018696311268317], [24.0, 2.019149562997155], [25.0, 2.08961081434646], [26.0, 2.2490533773054837], [27.0, 2.2055077035060084], [28.0, 2.2768842217200684], [29.0, 2.2144571509247535], [30.0, 2.4316387748658146], [31.0, 2.4833984375000044], [33.0, 2.47556349029235], [32.0, 2.524995099000189], [35.0, 3.2590443686006823], [34.0, 2.546702476872573], [36.0, 2.8548199767711946], [37.0, 3.0022883295194505], [38.0, 4.400665004156286], [39.0, 3.195652173913044], [40.0, 2.676767676767679], [41.0, 3.8704402515723286], [43.0, 2.6724137931034484], [42.0, 3.603903559127443], [45.0, 5.194805194805193], [44.0, 2.9843749999999996], [46.0, 6.571428571428574], [47.0, 2.210084033613445], [48.0, 3.346153846153848], [49.0, 28.2], [50.0, 28.376623376623368], [51.0, 4.530612244897958], [53.0, 2.6], [52.0, 4.953488372093022], [55.0, 5.647887323943662], [54.0, 4.53030303030303], [56.0, 3.5], [57.0, 3.0], [58.0, 3.1], [59.0, 1.6666666666666665], [60.0, 2.2857142857142856], [61.0, 1.9000000000000001], [63.0, 2.9230769230769234], [62.0, 3.6666666666666665], [67.0, 2.285714285714286], [64.0, 3.3333333333333335], [66.0, 3.25], [65.0, 2.625], [68.0, 4.333333333333333], [71.0, 8.080000000000002], [70.0, 2.5599999999999996], [69.0, 2.31578947368421], [75.0, 1.4], [74.0, 1.5], [73.0, 2.5], [72.0, 2.3750000000000004], [76.0, 7.75], [78.0, 3.3000000000000003], [79.0, 3.266666666666667], [82.0, 3.333333333333333], [83.0, 11.571428571428571], [81.0, 2.9], [80.0, 2.263157894736842], [84.0, 12.0], [85.0, 15.624999999999998], [86.0, 3.1212121212121207], [87.0, 4.9302325581395365], [88.0, 3.9705882352941186], [89.0, 7.3], [90.0, 4.3999999999999995], [91.0, 12.327731092436977], [92.0, 7.083333333333332], [94.0, 4.2592592592592595], [95.0, 10.250000000000002], [93.0, 2.8846153846153846], [96.0, 6.033333333333335], [97.0, 9.535714285714286], [98.0, 10.862745098039216], [99.0, 12.090909090909093], [100.0, 10.916666666666666], [102.0, 11.521739130434783], [103.0, 6.571428571428572], [101.0, 5.0], [104.0, 7.067796610169492], [105.0, 8.585714285714289], [106.0, 8.5], [107.0, 6.552447552447554], [108.0, 7.77064220183486], [109.0, 7.438596491228069], [110.0, 7.266666666666667], [1.0, 0.4204583998265212]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[4.150676727272527, 0.7363116363636909]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 110.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 342680.85, "minX": 1.70820222E12, "maxY": 8579044.916666666, "series": [{"data": [[1.70820276E12, 8571604.6], [1.70820246E12, 8578430.0], [1.7082024E12, 8572141.666666666], [1.70820306E12, 8573969.116666667], [1.70820252E12, 8575433.266666668], [1.70820222E12, 7279499.533333333], [1.70820318E12, 7012712.85], [1.70820312E12, 8575493.816666666], [1.70820282E12, 8577234.766666668], [1.70820228E12, 8575051.9], [1.70820294E12, 8574298.583333334], [1.70820288E12, 8575597.616666667], [1.70820258E12, 8571050.233333332], [1.708203E12, 8576203.883333333], [1.7082027E12, 8574991.35], [1.70820264E12, 8579044.916666666], [1.70820234E12, 8573908.566666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.70820276E12, 418842.4666666667], [1.70820246E12, 419167.6], [1.7082024E12, 418860.3333333333], [1.70820306E12, 418976.85], [1.70820252E12, 418987.6666666667], [1.70820222E12, 355672.86666666664], [1.70820318E12, 342680.85], [1.70820312E12, 419005.2833333333], [1.70820282E12, 419096.63333333336], [1.70820228E12, 419015.1], [1.70820294E12, 418934.31666666665], [1.70820288E12, 419035.48333333334], [1.70820258E12, 418819.56666666665], [1.708203E12, 419073.48333333334], [1.7082027E12, 418997.48333333334], [1.70820264E12, 419208.11666666664], [1.70820234E12, 418959.23333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70820318E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 0.360388599884397, "minX": 1.70820222E12, "maxY": 0.8095330456286566, "series": [{"data": [[1.70820276E12, 0.8030168911954714], [1.70820246E12, 0.7639368495026196], [1.7082024E12, 0.8039225196277373], [1.70820306E12, 0.6850858531677568], [1.70820252E12, 0.7738173884057079], [1.70820222E12, 0.7596350187774025], [1.70820318E12, 0.360388599884397], [1.70820312E12, 0.41700706658101844], [1.70820282E12, 0.798494892085465], [1.70820228E12, 0.7830684944789752], [1.70820294E12, 0.788548498551285], [1.70820288E12, 0.7520574011902158], [1.70820258E12, 0.7640984908657641], [1.708203E12, 0.7964115397899709], [1.7082027E12, 0.7852471833162608], [1.70820264E12, 0.8080832555941889], [1.70820234E12, 0.8095330456286566]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70820318E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 0.3569131356246221, "minX": 1.70820222E12, "maxY": 0.793167822334275, "series": [{"data": [[1.70820276E12, 0.7845857231201937], [1.70820246E12, 0.7459925120860802], [1.7082024E12, 0.7856255115341447], [1.70820306E12, 0.6705335442539234], [1.70820252E12, 0.7581926725052291], [1.70820222E12, 0.736095443446475], [1.70820318E12, 0.3569131356246221], [1.70820312E12, 0.4100677567544644], [1.70820282E12, 0.7822562076612558], [1.70820228E12, 0.7659539653103433], [1.70820294E12, 0.768745378059571], [1.70820288E12, 0.7349073411953068], [1.70820258E12, 0.7499833261585258], [1.708203E12, 0.7774936526307513], [1.7082027E12, 0.765234940817829], [1.70820264E12, 0.7855732302734391], [1.70820234E12, 0.793167822334275]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70820318E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.011630563607545238, "minX": 1.70820222E12, "maxY": 0.03657597924835928, "series": [{"data": [[1.70820276E12, 0.033418617904909916], [1.70820246E12, 0.032853525256563675], [1.7082024E12, 0.03207129649277073], [1.70820306E12, 0.03226842676267195], [1.70820252E12, 0.0317645989272403], [1.70820222E12, 0.011630563607545238], [1.70820318E12, 0.016903057519303925], [1.70820312E12, 0.017163428322081124], [1.70820282E12, 0.024988184539318187], [1.70820228E12, 0.026344496563761644], [1.70820294E12, 0.0288954623152733], [1.70820288E12, 0.023701019307452564], [1.70820258E12, 0.030364581122785762], [1.708203E12, 0.03398796575147454], [1.7082027E12, 0.03657597924835928], [1.70820264E12, 0.035745871748585095], [1.70820234E12, 0.035803471851817315]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70820318E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.70820222E12, "maxY": 163.0, "series": [{"data": [[1.70820276E12, 135.0], [1.70820246E12, 126.0], [1.7082024E12, 140.0], [1.70820306E12, 151.0], [1.70820252E12, 118.0], [1.70820222E12, 124.0], [1.70820318E12, 23.0], [1.70820312E12, 53.0], [1.70820282E12, 148.0], [1.70820228E12, 123.0], [1.70820294E12, 163.0], [1.70820288E12, 153.0], [1.70820258E12, 120.0], [1.708203E12, 152.0], [1.7082027E12, 120.0], [1.70820264E12, 134.0], [1.70820234E12, 137.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.70820276E12, 0.0], [1.70820246E12, 0.0], [1.7082024E12, 0.0], [1.70820306E12, 0.0], [1.70820252E12, 0.0], [1.70820222E12, 0.0], [1.70820318E12, 0.0], [1.70820312E12, 0.0], [1.70820282E12, 0.0], [1.70820228E12, 0.0], [1.70820294E12, 0.0], [1.70820288E12, 0.0], [1.70820258E12, 0.0], [1.708203E12, 0.0], [1.7082027E12, 0.0], [1.70820264E12, 0.0], [1.70820234E12, 0.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.70820276E12, 2.0], [1.70820246E12, 1.0], [1.7082024E12, 1.0], [1.70820306E12, 1.0], [1.70820252E12, 1.0], [1.70820222E12, 1.0], [1.70820318E12, 1.0], [1.70820312E12, 1.0], [1.70820282E12, 3.0], [1.70820228E12, 1.0], [1.70820294E12, 1.0], [1.70820288E12, 2.0], [1.70820258E12, 1.0], [1.708203E12, 1.0], [1.7082027E12, 1.0], [1.70820264E12, 1.0], [1.70820234E12, 2.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.70820276E12, 7.0], [1.70820246E12, 4.0], [1.7082024E12, 5.0], [1.70820306E12, 3.0], [1.70820252E12, 4.0], [1.70820222E12, 4.0], [1.70820318E12, 1.0], [1.70820312E12, 1.0], [1.70820282E12, 8.0], [1.70820228E12, 4.0], [1.70820294E12, 4.0], [1.70820288E12, 6.0], [1.70820258E12, 4.0], [1.708203E12, 4.0], [1.7082027E12, 4.0], [1.70820264E12, 4.0], [1.70820234E12, 6.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.70820276E12, 1.0], [1.70820246E12, 1.0], [1.7082024E12, 1.0], [1.70820306E12, 0.0], [1.70820252E12, 1.0], [1.70820222E12, 1.0], [1.70820318E12, 0.0], [1.70820312E12, 0.0], [1.70820282E12, 1.0], [1.70820228E12, 1.0], [1.70820294E12, 1.0], [1.70820288E12, 1.0], [1.70820258E12, 1.0], [1.708203E12, 1.0], [1.7082027E12, 1.0], [1.70820264E12, 1.0], [1.70820234E12, 1.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.70820276E12, 3.0], [1.70820246E12, 2.0], [1.7082024E12, 2.0], [1.70820306E12, 1.0], [1.70820252E12, 2.0], [1.70820222E12, 2.0], [1.70820318E12, 1.0], [1.70820312E12, 1.0], [1.70820282E12, 4.0], [1.70820228E12, 2.0], [1.70820294E12, 2.0], [1.70820288E12, 3.0], [1.70820258E12, 2.0], [1.708203E12, 2.0], [1.7082027E12, 2.0], [1.70820264E12, 2.0], [1.70820234E12, 2.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70820318E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 0.0, "minX": 257.0, "maxY": 4.0, "series": [{"data": [[257.0, 0.0], [2426.0, 0.0], [2557.0, 0.0], [2513.0, 4.0], [2490.0, 1.0], [2517.0, 1.0], [2470.0, 1.0], [2472.0, 1.0], [2464.0, 1.0], [2503.0, 0.0], [2522.0, 1.0], [2440.0, 0.0], [2555.0, 0.0], [2556.0, 0.0], [2549.0, 1.0], [2548.0, 1.0], [2491.0, 1.0], [2437.0, 0.0], [2665.0, 0.0], [2594.0, 1.0], [2607.0, 1.0], [2613.0, 1.0], [2612.0, 1.0], [2616.0, 1.0], [2606.0, 1.0], [2605.0, 1.0], [2599.0, 0.0], [2601.0, 0.0], [2592.0, 1.0], [2617.0, 1.0], [2591.0, 1.0], [2657.0, 1.0], [2658.0, 0.0], [2664.0, 1.0], [2662.0, 0.0], [2661.0, 0.0], [2673.0, 0.0], [2675.0, 0.0], [2677.0, 1.0], [2678.0, 0.0], [2676.0, 1.0], [2671.0, 1.0], [2668.0, 1.0], [2669.0, 1.0], [2666.0, 0.0], [2563.0, 1.0], [2623.0, 0.0], [2622.0, 1.0], [2619.0, 0.0], [2618.0, 1.0], [2566.0, 1.0], [2582.0, 1.0], [2579.0, 1.0], [2586.0, 0.0], [2679.0, 0.0], [2653.0, 1.0], [2643.0, 1.0], [2648.0, 1.0], [2649.0, 0.0], [2650.0, 0.0], [2652.0, 1.0], [2654.0, 1.0], [2655.0, 1.0], [2636.0, 1.0], [2680.0, 1.0], [2681.0, 0.0], [2684.0, 1.0], [2683.0, 1.0], [2686.0, 0.0], [2625.0, 0.0], [2685.0, 1.0], [2630.0, 1.0], [2633.0, 0.0], [2634.0, 1.0], [2629.0, 1.0], [2626.0, 1.0], [2682.0, 0.0], [2715.0, 1.0], [2757.0, 1.0], [2750.0, 0.0], [2754.0, 0.0], [2774.0, 1.0], [2763.0, 1.0], [2768.0, 1.0], [2766.0, 0.0], [2765.0, 0.0], [2764.0, 1.0], [2767.0, 1.0], [2771.0, 1.0], [2769.0, 1.0], [2770.0, 1.0], [2773.0, 1.0], [2772.0, 1.0], [2758.0, 1.0], [2760.0, 0.0], [2762.0, 1.0], [2761.0, 0.0], [2759.0, 1.0], [2756.0, 0.0], [2755.0, 0.0], [2747.0, 0.0], [2781.0, 1.0], [2776.0, 1.0], [2775.0, 1.0], [2777.0, 0.0], [2779.0, 1.0], [2780.0, 1.0], [2778.0, 1.0], [2783.0, 1.0], [2782.0, 1.0], [2751.0, 0.0], [2693.0, 1.0], [2692.0, 1.0], [2689.0, 0.0], [2690.0, 1.0], [2688.0, 0.0], [2695.0, 1.0], [2699.0, 0.0], [2700.0, 0.0], [2697.0, 1.0], [2696.0, 1.0], [2698.0, 0.0], [2701.0, 0.0], [2703.0, 1.0], [2704.0, 0.0], [2706.0, 1.0], [2705.0, 0.0], [2707.0, 1.0], [2709.0, 1.0], [2708.0, 0.0], [2711.0, 0.0], [2714.0, 0.0], [2713.0, 0.0], [2712.0, 0.0], [2710.0, 1.0], [2718.0, 1.0], [2719.0, 1.0], [2716.0, 1.0], [2717.0, 0.0], [2797.0, 1.0], [2803.0, 1.0], [2801.0, 1.0], [2804.0, 1.0], [2808.0, 0.0], [2813.0, 1.0], [2814.0, 0.0], [2809.0, 0.0], [2810.0, 1.0], [2805.0, 0.0], [2791.0, 1.0], [2792.0, 1.0], [2788.0, 1.0], [2786.0, 0.0], [2787.0, 0.0], [2790.0, 1.0], [2789.0, 0.0], [2793.0, 1.0], [2784.0, 0.0], [2745.0, 0.0], [2744.0, 0.0], [2743.0, 1.0], [2742.0, 0.0], [2741.0, 0.0], [2740.0, 1.0], [2739.0, 1.0], [2738.0, 0.0], [2737.0, 1.0], [2735.0, 0.0], [2736.0, 0.0], [2734.0, 1.0], [2724.0, 1.0], [2727.0, 0.0], [2725.0, 1.0], [2726.0, 0.0], [2722.0, 1.0], [2720.0, 1.0], [2721.0, 1.0], [2723.0, 1.0], [2730.0, 1.0], [2731.0, 0.0], [2729.0, 1.0], [2732.0, 1.0], [2733.0, 1.0], [2728.0, 0.0], [2752.0, 0.0], [2753.0, 0.0], [2746.0, 0.0], [2749.0, 0.0], [2748.0, 0.0], [2914.0, 1.0], [2825.0, 1.0], [2837.0, 1.0], [2839.0, 0.0], [2841.0, 0.0], [2912.0, 1.0], [2845.0, 0.0], [2846.0, 1.0], [2843.0, 1.0], [2836.0, 1.0], [2885.0, 1.0], [2888.0, 1.0], [2892.0, 0.0], [2880.0, 1.0], [2920.0, 1.0], [2915.0, 1.0], [2933.0, 1.0], [2939.0, 1.0], [2934.0, 1.0], [2884.0, 1.0], [2881.0, 1.0], [2899.0, 0.0], [2903.0, 1.0], [2909.0, 1.0], [2910.0, 1.0], [2904.0, 1.0], [2824.0, 1.0], [2822.0, 0.0], [2820.0, 1.0], [2819.0, 1.0], [2821.0, 1.0], [2872.0, 1.0], [2864.0, 1.0], [2862.0, 1.0], [2863.0, 1.0], [2865.0, 1.0], [2866.0, 0.0], [2816.0, 1.0], [2856.0, 1.0], [2854.0, 1.0], [2850.0, 1.0], [2848.0, 1.0], [2833.0, 0.0], [2828.0, 1.0], [2827.0, 0.0], [2830.0, 0.0], [2832.0, 1.0], [2818.0, 1.0], [2973.0, 1.0], [2944.0, 1.0], [3015.0, 1.0], [3047.0, 1.0], [3062.0, 1.0], [3008.0, 1.0], [3036.0, 1.0], [2993.0, 1.0], [3003.0, 1.0], [2966.0, 1.0], [2952.0, 1.0], [2954.0, 1.0], [2956.0, 1.0], [2959.0, 1.0], [2985.0, 1.0], [2971.0, 1.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3062.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 257.0, "maxY": 3.0, "series": [{"data": [[257.0, 0.0], [2426.0, 0.0], [2557.0, 0.0], [2513.0, 3.0], [2490.0, 1.0], [2517.0, 1.0], [2470.0, 1.0], [2472.0, 1.0], [2464.0, 1.0], [2503.0, 0.0], [2522.0, 1.0], [2440.0, 0.0], [2555.0, 0.0], [2556.0, 0.0], [2549.0, 1.0], [2548.0, 1.0], [2491.0, 1.0], [2437.0, 0.0], [2665.0, 0.0], [2594.0, 1.0], [2607.0, 1.0], [2613.0, 1.0], [2612.0, 1.0], [2616.0, 1.0], [2606.0, 1.0], [2605.0, 1.0], [2599.0, 0.0], [2601.0, 0.0], [2592.0, 1.0], [2617.0, 1.0], [2591.0, 1.0], [2657.0, 1.0], [2658.0, 0.0], [2664.0, 1.0], [2662.0, 0.0], [2661.0, 0.0], [2673.0, 0.0], [2675.0, 0.0], [2677.0, 1.0], [2678.0, 0.0], [2676.0, 1.0], [2671.0, 1.0], [2668.0, 1.0], [2669.0, 1.0], [2666.0, 0.0], [2563.0, 1.0], [2623.0, 0.0], [2622.0, 0.5], [2619.0, 0.0], [2618.0, 1.0], [2566.0, 1.0], [2582.0, 1.0], [2579.0, 1.0], [2586.0, 0.0], [2679.0, 0.0], [2653.0, 1.0], [2643.0, 1.0], [2648.0, 1.0], [2649.0, 0.0], [2650.0, 0.0], [2652.0, 1.0], [2654.0, 1.0], [2655.0, 1.0], [2636.0, 1.0], [2680.0, 0.0], [2681.0, 0.0], [2684.0, 1.0], [2683.0, 1.0], [2686.0, 0.0], [2625.0, 0.0], [2685.0, 1.0], [2630.0, 1.0], [2633.0, 0.0], [2634.0, 1.0], [2629.0, 0.5], [2626.0, 1.0], [2682.0, 0.0], [2715.0, 1.0], [2757.0, 1.0], [2750.0, 0.0], [2754.0, 0.0], [2774.0, 1.0], [2763.0, 1.0], [2768.0, 1.0], [2766.0, 0.0], [2765.0, 0.0], [2764.0, 1.0], [2767.0, 1.0], [2771.0, 1.0], [2769.0, 1.0], [2770.0, 1.0], [2773.0, 1.0], [2772.0, 1.0], [2758.0, 1.0], [2760.0, 0.0], [2762.0, 1.0], [2761.0, 0.0], [2759.0, 1.0], [2756.0, 0.0], [2755.0, 0.0], [2747.0, 0.0], [2781.0, 1.0], [2776.0, 1.0], [2775.0, 1.0], [2777.0, 0.0], [2779.0, 1.0], [2780.0, 1.0], [2778.0, 1.0], [2783.0, 1.0], [2782.0, 1.0], [2751.0, 0.0], [2693.0, 1.0], [2692.0, 1.0], [2689.0, 0.0], [2690.0, 1.0], [2688.0, 0.0], [2695.0, 1.0], [2699.0, 0.0], [2700.0, 0.0], [2697.0, 1.0], [2696.0, 1.0], [2698.0, 0.0], [2701.0, 0.0], [2703.0, 1.0], [2704.0, 0.0], [2706.0, 1.0], [2705.0, 0.0], [2707.0, 1.0], [2709.0, 1.0], [2708.0, 0.0], [2711.0, 0.0], [2714.0, 0.0], [2713.0, 0.0], [2712.0, 0.0], [2710.0, 1.0], [2718.0, 1.0], [2719.0, 1.0], [2716.0, 1.0], [2717.0, 0.0], [2797.0, 1.0], [2803.0, 1.0], [2801.0, 1.0], [2804.0, 1.0], [2808.0, 0.0], [2813.0, 1.0], [2814.0, 0.0], [2809.0, 0.0], [2810.0, 1.0], [2805.0, 0.0], [2791.0, 1.0], [2792.0, 1.0], [2788.0, 1.0], [2786.0, 0.0], [2787.0, 0.0], [2790.0, 1.0], [2789.0, 0.0], [2793.0, 1.0], [2784.0, 0.0], [2745.0, 0.0], [2744.0, 0.0], [2743.0, 1.0], [2742.0, 0.0], [2741.0, 0.0], [2740.0, 1.0], [2739.0, 1.0], [2738.0, 0.0], [2737.0, 1.0], [2735.0, 0.0], [2736.0, 0.0], [2734.0, 1.0], [2724.0, 1.0], [2727.0, 0.0], [2725.0, 1.0], [2726.0, 0.0], [2722.0, 1.0], [2720.0, 1.0], [2721.0, 1.0], [2723.0, 1.0], [2730.0, 1.0], [2731.0, 0.0], [2729.0, 1.0], [2732.0, 1.0], [2733.0, 1.0], [2728.0, 0.0], [2752.0, 0.0], [2753.0, 0.0], [2746.0, 0.0], [2749.0, 0.0], [2748.0, 0.0], [2914.0, 1.0], [2825.0, 1.0], [2837.0, 1.0], [2839.0, 0.0], [2841.0, 0.0], [2912.0, 1.0], [2845.0, 0.0], [2846.0, 1.0], [2843.0, 1.0], [2836.0, 1.0], [2885.0, 1.0], [2888.0, 1.0], [2892.0, 0.0], [2880.0, 1.0], [2920.0, 1.0], [2915.0, 1.0], [2933.0, 1.0], [2939.0, 1.0], [2934.0, 1.0], [2884.0, 1.0], [2881.0, 1.0], [2899.0, 0.0], [2903.0, 1.0], [2909.0, 1.0], [2910.0, 1.0], [2904.0, 1.0], [2824.0, 1.0], [2822.0, 0.0], [2820.0, 1.0], [2819.0, 1.0], [2821.0, 1.0], [2872.0, 1.0], [2864.0, 1.0], [2862.0, 1.0], [2863.0, 1.0], [2865.0, 1.0], [2866.0, 0.0], [2816.0, 1.0], [2856.0, 1.0], [2854.0, 1.0], [2850.0, 1.0], [2848.0, 1.0], [2833.0, 0.0], [2828.0, 1.0], [2827.0, 0.0], [2830.0, 0.0], [2832.0, 1.0], [2818.0, 1.0], [2973.0, 1.0], [2944.0, 1.0], [3015.0, 1.0], [3047.0, 1.0], [3062.0, 1.0], [3008.0, 1.0], [3036.0, 1.0], [2993.0, 1.0], [3003.0, 1.0], [2966.0, 1.0], [2952.0, 1.0], [2954.0, 1.0], [2956.0, 1.0], [2959.0, 1.0], [2985.0, 1.0], [2971.0, 1.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3062.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2249.0666666666666, "minX": 1.70820222E12, "maxY": 2751.366666666667, "series": [{"data": [[1.70820276E12, 2748.983333333333], [1.70820246E12, 2751.116666666667], [1.7082024E12, 2749.0666666666666], [1.70820306E12, 2749.8166666666666], [1.70820252E12, 2749.9166666666665], [1.70820222E12, 2334.383333333333], [1.70820318E12, 2249.0666666666666], [1.70820312E12, 2750.0666666666666], [1.70820282E12, 2750.616666666667], [1.70820228E12, 2750.1], [1.70820294E12, 2749.5666666666666], [1.70820288E12, 2750.233333333333], [1.70820258E12, 2748.8166666666666], [1.708203E12, 2750.5], [1.7082027E12, 2749.983333333333], [1.70820264E12, 2751.366666666667], [1.70820234E12, 2749.733333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70820318E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2249.1, "minX": 1.70820222E12, "maxY": 2751.366666666667, "series": [{"data": [[1.70820276E12, 2748.9666666666667], [1.70820246E12, 2751.1], [1.7082024E12, 2749.0833333333335], [1.70820306E12, 2749.85], [1.70820252E12, 2749.9166666666665], [1.70820222E12, 2334.366666666667], [1.70820318E12, 2249.1], [1.70820312E12, 2750.0333333333333], [1.70820282E12, 2750.633333333333], [1.70820228E12, 2750.1], [1.70820294E12, 2749.5666666666666], [1.70820288E12, 2750.233333333333], [1.70820258E12, 2748.8166666666666], [1.708203E12, 2750.483333333333], [1.7082027E12, 2749.983333333333], [1.70820264E12, 2751.366666666667], [1.70820234E12, 2749.733333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70820318E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2249.1, "minX": 1.70820222E12, "maxY": 2751.366666666667, "series": [{"data": [[1.70820276E12, 2748.9666666666667], [1.70820246E12, 2751.1], [1.7082024E12, 2749.0833333333335], [1.70820306E12, 2749.85], [1.70820252E12, 2749.9166666666665], [1.70820222E12, 2334.366666666667], [1.70820318E12, 2249.1], [1.70820312E12, 2750.0333333333333], [1.70820282E12, 2750.633333333333], [1.70820228E12, 2750.1], [1.70820294E12, 2749.5666666666666], [1.70820288E12, 2750.233333333333], [1.70820258E12, 2748.8166666666666], [1.708203E12, 2750.483333333333], [1.7082027E12, 2749.983333333333], [1.70820264E12, 2751.366666666667], [1.70820234E12, 2749.733333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70820318E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2249.1, "minX": 1.70820222E12, "maxY": 2751.366666666667, "series": [{"data": [[1.70820276E12, 2748.9666666666667], [1.70820246E12, 2751.1], [1.7082024E12, 2749.0833333333335], [1.70820306E12, 2749.85], [1.70820252E12, 2749.9166666666665], [1.70820222E12, 2334.366666666667], [1.70820318E12, 2249.1], [1.70820312E12, 2750.0333333333333], [1.70820282E12, 2750.633333333333], [1.70820228E12, 2750.1], [1.70820294E12, 2749.5666666666666], [1.70820288E12, 2750.233333333333], [1.70820258E12, 2748.8166666666666], [1.708203E12, 2750.483333333333], [1.7082027E12, 2749.983333333333], [1.70820264E12, 2751.366666666667], [1.70820234E12, 2749.733333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70820318E12, "title": "Total Transactions Per Second"}},
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

