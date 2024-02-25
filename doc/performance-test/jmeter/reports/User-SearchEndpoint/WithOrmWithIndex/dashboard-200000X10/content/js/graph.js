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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 236.0, "series": [{"data": [[0.0, 1.0], [0.1, 1.0], [0.2, 1.0], [0.3, 1.0], [0.4, 1.0], [0.5, 1.0], [0.6, 1.0], [0.7, 1.0], [0.8, 1.0], [0.9, 1.0], [1.0, 1.0], [1.1, 1.0], [1.2, 1.0], [1.3, 1.0], [1.4, 1.0], [1.5, 1.0], [1.6, 1.0], [1.7, 1.0], [1.8, 1.0], [1.9, 1.0], [2.0, 1.0], [2.1, 1.0], [2.2, 1.0], [2.3, 1.0], [2.4, 1.0], [2.5, 1.0], [2.6, 1.0], [2.7, 2.0], [2.8, 2.0], [2.9, 2.0], [3.0, 2.0], [3.1, 2.0], [3.2, 2.0], [3.3, 2.0], [3.4, 2.0], [3.5, 2.0], [3.6, 2.0], [3.7, 2.0], [3.8, 2.0], [3.9, 2.0], [4.0, 2.0], [4.1, 2.0], [4.2, 2.0], [4.3, 2.0], [4.4, 2.0], [4.5, 2.0], [4.6, 2.0], [4.7, 2.0], [4.8, 2.0], [4.9, 2.0], [5.0, 2.0], [5.1, 2.0], [5.2, 2.0], [5.3, 2.0], [5.4, 2.0], [5.5, 2.0], [5.6, 2.0], [5.7, 2.0], [5.8, 2.0], [5.9, 2.0], [6.0, 2.0], [6.1, 2.0], [6.2, 2.0], [6.3, 2.0], [6.4, 2.0], [6.5, 2.0], [6.6, 2.0], [6.7, 2.0], [6.8, 2.0], [6.9, 2.0], [7.0, 2.0], [7.1, 2.0], [7.2, 2.0], [7.3, 2.0], [7.4, 2.0], [7.5, 2.0], [7.6, 2.0], [7.7, 2.0], [7.8, 2.0], [7.9, 2.0], [8.0, 2.0], [8.1, 2.0], [8.2, 2.0], [8.3, 2.0], [8.4, 2.0], [8.5, 2.0], [8.6, 2.0], [8.7, 2.0], [8.8, 2.0], [8.9, 2.0], [9.0, 2.0], [9.1, 2.0], [9.2, 2.0], [9.3, 2.0], [9.4, 2.0], [9.5, 2.0], [9.6, 2.0], [9.7, 2.0], [9.8, 2.0], [9.9, 2.0], [10.0, 2.0], [10.1, 2.0], [10.2, 2.0], [10.3, 2.0], [10.4, 2.0], [10.5, 2.0], [10.6, 2.0], [10.7, 2.0], [10.8, 2.0], [10.9, 2.0], [11.0, 2.0], [11.1, 2.0], [11.2, 2.0], [11.3, 2.0], [11.4, 2.0], [11.5, 2.0], [11.6, 2.0], [11.7, 2.0], [11.8, 2.0], [11.9, 2.0], [12.0, 2.0], [12.1, 2.0], [12.2, 2.0], [12.3, 2.0], [12.4, 2.0], [12.5, 2.0], [12.6, 2.0], [12.7, 2.0], [12.8, 2.0], [12.9, 2.0], [13.0, 2.0], [13.1, 2.0], [13.2, 2.0], [13.3, 2.0], [13.4, 2.0], [13.5, 2.0], [13.6, 2.0], [13.7, 2.0], [13.8, 2.0], [13.9, 2.0], [14.0, 2.0], [14.1, 2.0], [14.2, 2.0], [14.3, 2.0], [14.4, 2.0], [14.5, 2.0], [14.6, 2.0], [14.7, 2.0], [14.8, 2.0], [14.9, 2.0], [15.0, 2.0], [15.1, 2.0], [15.2, 2.0], [15.3, 2.0], [15.4, 2.0], [15.5, 2.0], [15.6, 2.0], [15.7, 2.0], [15.8, 2.0], [15.9, 2.0], [16.0, 2.0], [16.1, 2.0], [16.2, 2.0], [16.3, 2.0], [16.4, 2.0], [16.5, 2.0], [16.6, 2.0], [16.7, 2.0], [16.8, 2.0], [16.9, 2.0], [17.0, 2.0], [17.1, 2.0], [17.2, 2.0], [17.3, 2.0], [17.4, 2.0], [17.5, 2.0], [17.6, 2.0], [17.7, 2.0], [17.8, 2.0], [17.9, 2.0], [18.0, 2.0], [18.1, 2.0], [18.2, 2.0], [18.3, 2.0], [18.4, 2.0], [18.5, 2.0], [18.6, 2.0], [18.7, 2.0], [18.8, 2.0], [18.9, 2.0], [19.0, 2.0], [19.1, 2.0], [19.2, 2.0], [19.3, 2.0], [19.4, 2.0], [19.5, 2.0], [19.6, 2.0], [19.7, 2.0], [19.8, 2.0], [19.9, 2.0], [20.0, 2.0], [20.1, 2.0], [20.2, 2.0], [20.3, 2.0], [20.4, 2.0], [20.5, 2.0], [20.6, 2.0], [20.7, 2.0], [20.8, 2.0], [20.9, 2.0], [21.0, 2.0], [21.1, 2.0], [21.2, 2.0], [21.3, 2.0], [21.4, 2.0], [21.5, 2.0], [21.6, 2.0], [21.7, 2.0], [21.8, 2.0], [21.9, 2.0], [22.0, 2.0], [22.1, 2.0], [22.2, 2.0], [22.3, 2.0], [22.4, 2.0], [22.5, 2.0], [22.6, 2.0], [22.7, 2.0], [22.8, 2.0], [22.9, 2.0], [23.0, 2.0], [23.1, 2.0], [23.2, 2.0], [23.3, 2.0], [23.4, 2.0], [23.5, 2.0], [23.6, 2.0], [23.7, 2.0], [23.8, 2.0], [23.9, 2.0], [24.0, 2.0], [24.1, 2.0], [24.2, 2.0], [24.3, 2.0], [24.4, 2.0], [24.5, 2.0], [24.6, 2.0], [24.7, 2.0], [24.8, 2.0], [24.9, 2.0], [25.0, 2.0], [25.1, 2.0], [25.2, 2.0], [25.3, 2.0], [25.4, 2.0], [25.5, 2.0], [25.6, 3.0], [25.7, 3.0], [25.8, 3.0], [25.9, 3.0], [26.0, 3.0], [26.1, 3.0], [26.2, 3.0], [26.3, 3.0], [26.4, 3.0], [26.5, 3.0], [26.6, 3.0], [26.7, 3.0], [26.8, 3.0], [26.9, 3.0], [27.0, 3.0], [27.1, 3.0], [27.2, 3.0], [27.3, 3.0], [27.4, 3.0], [27.5, 3.0], [27.6, 3.0], [27.7, 3.0], [27.8, 3.0], [27.9, 3.0], [28.0, 3.0], [28.1, 3.0], [28.2, 3.0], [28.3, 3.0], [28.4, 3.0], [28.5, 3.0], [28.6, 3.0], [28.7, 3.0], [28.8, 3.0], [28.9, 3.0], [29.0, 3.0], [29.1, 3.0], [29.2, 3.0], [29.3, 3.0], [29.4, 3.0], [29.5, 3.0], [29.6, 3.0], [29.7, 3.0], [29.8, 3.0], [29.9, 3.0], [30.0, 3.0], [30.1, 3.0], [30.2, 3.0], [30.3, 3.0], [30.4, 3.0], [30.5, 3.0], [30.6, 3.0], [30.7, 3.0], [30.8, 3.0], [30.9, 3.0], [31.0, 3.0], [31.1, 3.0], [31.2, 3.0], [31.3, 3.0], [31.4, 3.0], [31.5, 3.0], [31.6, 3.0], [31.7, 3.0], [31.8, 3.0], [31.9, 3.0], [32.0, 3.0], [32.1, 3.0], [32.2, 3.0], [32.3, 3.0], [32.4, 3.0], [32.5, 3.0], [32.6, 3.0], [32.7, 3.0], [32.8, 3.0], [32.9, 3.0], [33.0, 3.0], [33.1, 3.0], [33.2, 3.0], [33.3, 3.0], [33.4, 3.0], [33.5, 3.0], [33.6, 3.0], [33.7, 3.0], [33.8, 3.0], [33.9, 3.0], [34.0, 3.0], [34.1, 3.0], [34.2, 3.0], [34.3, 3.0], [34.4, 3.0], [34.5, 3.0], [34.6, 3.0], [34.7, 3.0], [34.8, 3.0], [34.9, 3.0], [35.0, 3.0], [35.1, 3.0], [35.2, 3.0], [35.3, 3.0], [35.4, 3.0], [35.5, 3.0], [35.6, 3.0], [35.7, 3.0], [35.8, 3.0], [35.9, 3.0], [36.0, 3.0], [36.1, 3.0], [36.2, 3.0], [36.3, 3.0], [36.4, 3.0], [36.5, 3.0], [36.6, 3.0], [36.7, 3.0], [36.8, 3.0], [36.9, 3.0], [37.0, 3.0], [37.1, 3.0], [37.2, 3.0], [37.3, 3.0], [37.4, 3.0], [37.5, 3.0], [37.6, 3.0], [37.7, 3.0], [37.8, 3.0], [37.9, 3.0], [38.0, 3.0], [38.1, 3.0], [38.2, 3.0], [38.3, 3.0], [38.4, 3.0], [38.5, 3.0], [38.6, 3.0], [38.7, 3.0], [38.8, 3.0], [38.9, 3.0], [39.0, 3.0], [39.1, 3.0], [39.2, 3.0], [39.3, 3.0], [39.4, 3.0], [39.5, 3.0], [39.6, 3.0], [39.7, 3.0], [39.8, 3.0], [39.9, 3.0], [40.0, 3.0], [40.1, 3.0], [40.2, 3.0], [40.3, 3.0], [40.4, 3.0], [40.5, 3.0], [40.6, 3.0], [40.7, 3.0], [40.8, 3.0], [40.9, 3.0], [41.0, 3.0], [41.1, 3.0], [41.2, 3.0], [41.3, 3.0], [41.4, 3.0], [41.5, 3.0], [41.6, 3.0], [41.7, 3.0], [41.8, 3.0], [41.9, 3.0], [42.0, 3.0], [42.1, 3.0], [42.2, 3.0], [42.3, 3.0], [42.4, 3.0], [42.5, 3.0], [42.6, 3.0], [42.7, 3.0], [42.8, 3.0], [42.9, 3.0], [43.0, 3.0], [43.1, 3.0], [43.2, 3.0], [43.3, 3.0], [43.4, 3.0], [43.5, 3.0], [43.6, 3.0], [43.7, 3.0], [43.8, 3.0], [43.9, 3.0], [44.0, 3.0], [44.1, 3.0], [44.2, 3.0], [44.3, 3.0], [44.4, 3.0], [44.5, 3.0], [44.6, 3.0], [44.7, 3.0], [44.8, 3.0], [44.9, 3.0], [45.0, 3.0], [45.1, 3.0], [45.2, 3.0], [45.3, 3.0], [45.4, 3.0], [45.5, 3.0], [45.6, 3.0], [45.7, 3.0], [45.8, 3.0], [45.9, 3.0], [46.0, 3.0], [46.1, 3.0], [46.2, 3.0], [46.3, 3.0], [46.4, 3.0], [46.5, 3.0], [46.6, 3.0], [46.7, 3.0], [46.8, 3.0], [46.9, 3.0], [47.0, 3.0], [47.1, 3.0], [47.2, 3.0], [47.3, 3.0], [47.4, 3.0], [47.5, 3.0], [47.6, 3.0], [47.7, 3.0], [47.8, 3.0], [47.9, 3.0], [48.0, 3.0], [48.1, 3.0], [48.2, 3.0], [48.3, 3.0], [48.4, 3.0], [48.5, 3.0], [48.6, 3.0], [48.7, 3.0], [48.8, 3.0], [48.9, 3.0], [49.0, 3.0], [49.1, 3.0], [49.2, 3.0], [49.3, 3.0], [49.4, 3.0], [49.5, 3.0], [49.6, 3.0], [49.7, 3.0], [49.8, 3.0], [49.9, 3.0], [50.0, 3.0], [50.1, 3.0], [50.2, 3.0], [50.3, 3.0], [50.4, 3.0], [50.5, 3.0], [50.6, 3.0], [50.7, 3.0], [50.8, 3.0], [50.9, 3.0], [51.0, 3.0], [51.1, 3.0], [51.2, 3.0], [51.3, 3.0], [51.4, 3.0], [51.5, 3.0], [51.6, 3.0], [51.7, 3.0], [51.8, 3.0], [51.9, 3.0], [52.0, 3.0], [52.1, 3.0], [52.2, 3.0], [52.3, 3.0], [52.4, 3.0], [52.5, 3.0], [52.6, 4.0], [52.7, 4.0], [52.8, 4.0], [52.9, 4.0], [53.0, 4.0], [53.1, 4.0], [53.2, 4.0], [53.3, 4.0], [53.4, 4.0], [53.5, 4.0], [53.6, 4.0], [53.7, 4.0], [53.8, 4.0], [53.9, 4.0], [54.0, 4.0], [54.1, 4.0], [54.2, 4.0], [54.3, 4.0], [54.4, 4.0], [54.5, 4.0], [54.6, 4.0], [54.7, 4.0], [54.8, 4.0], [54.9, 4.0], [55.0, 4.0], [55.1, 4.0], [55.2, 4.0], [55.3, 4.0], [55.4, 4.0], [55.5, 4.0], [55.6, 4.0], [55.7, 4.0], [55.8, 4.0], [55.9, 4.0], [56.0, 4.0], [56.1, 4.0], [56.2, 4.0], [56.3, 4.0], [56.4, 4.0], [56.5, 4.0], [56.6, 4.0], [56.7, 4.0], [56.8, 4.0], [56.9, 4.0], [57.0, 4.0], [57.1, 4.0], [57.2, 4.0], [57.3, 4.0], [57.4, 4.0], [57.5, 4.0], [57.6, 4.0], [57.7, 4.0], [57.8, 4.0], [57.9, 4.0], [58.0, 4.0], [58.1, 4.0], [58.2, 4.0], [58.3, 4.0], [58.4, 4.0], [58.5, 4.0], [58.6, 4.0], [58.7, 4.0], [58.8, 4.0], [58.9, 4.0], [59.0, 4.0], [59.1, 4.0], [59.2, 4.0], [59.3, 4.0], [59.4, 4.0], [59.5, 4.0], [59.6, 4.0], [59.7, 4.0], [59.8, 4.0], [59.9, 4.0], [60.0, 4.0], [60.1, 4.0], [60.2, 4.0], [60.3, 4.0], [60.4, 4.0], [60.5, 4.0], [60.6, 4.0], [60.7, 4.0], [60.8, 4.0], [60.9, 4.0], [61.0, 4.0], [61.1, 4.0], [61.2, 4.0], [61.3, 4.0], [61.4, 4.0], [61.5, 4.0], [61.6, 4.0], [61.7, 4.0], [61.8, 4.0], [61.9, 4.0], [62.0, 4.0], [62.1, 4.0], [62.2, 4.0], [62.3, 4.0], [62.4, 4.0], [62.5, 4.0], [62.6, 4.0], [62.7, 4.0], [62.8, 4.0], [62.9, 4.0], [63.0, 4.0], [63.1, 4.0], [63.2, 4.0], [63.3, 4.0], [63.4, 4.0], [63.5, 4.0], [63.6, 4.0], [63.7, 4.0], [63.8, 4.0], [63.9, 4.0], [64.0, 4.0], [64.1, 4.0], [64.2, 4.0], [64.3, 4.0], [64.4, 4.0], [64.5, 4.0], [64.6, 4.0], [64.7, 4.0], [64.8, 4.0], [64.9, 4.0], [65.0, 4.0], [65.1, 4.0], [65.2, 4.0], [65.3, 4.0], [65.4, 4.0], [65.5, 4.0], [65.6, 4.0], [65.7, 4.0], [65.8, 4.0], [65.9, 4.0], [66.0, 4.0], [66.1, 4.0], [66.2, 4.0], [66.3, 4.0], [66.4, 4.0], [66.5, 4.0], [66.6, 4.0], [66.7, 4.0], [66.8, 4.0], [66.9, 4.0], [67.0, 4.0], [67.1, 4.0], [67.2, 4.0], [67.3, 4.0], [67.4, 4.0], [67.5, 4.0], [67.6, 4.0], [67.7, 4.0], [67.8, 4.0], [67.9, 4.0], [68.0, 4.0], [68.1, 4.0], [68.2, 4.0], [68.3, 4.0], [68.4, 4.0], [68.5, 4.0], [68.6, 4.0], [68.7, 4.0], [68.8, 4.0], [68.9, 4.0], [69.0, 4.0], [69.1, 4.0], [69.2, 4.0], [69.3, 4.0], [69.4, 4.0], [69.5, 4.0], [69.6, 4.0], [69.7, 4.0], [69.8, 4.0], [69.9, 4.0], [70.0, 5.0], [70.1, 5.0], [70.2, 5.0], [70.3, 5.0], [70.4, 5.0], [70.5, 5.0], [70.6, 5.0], [70.7, 5.0], [70.8, 5.0], [70.9, 5.0], [71.0, 5.0], [71.1, 5.0], [71.2, 5.0], [71.3, 5.0], [71.4, 5.0], [71.5, 5.0], [71.6, 5.0], [71.7, 5.0], [71.8, 5.0], [71.9, 5.0], [72.0, 5.0], [72.1, 5.0], [72.2, 5.0], [72.3, 5.0], [72.4, 5.0], [72.5, 5.0], [72.6, 5.0], [72.7, 5.0], [72.8, 5.0], [72.9, 5.0], [73.0, 5.0], [73.1, 5.0], [73.2, 5.0], [73.3, 5.0], [73.4, 5.0], [73.5, 5.0], [73.6, 5.0], [73.7, 5.0], [73.8, 5.0], [73.9, 5.0], [74.0, 5.0], [74.1, 5.0], [74.2, 5.0], [74.3, 5.0], [74.4, 5.0], [74.5, 5.0], [74.6, 5.0], [74.7, 5.0], [74.8, 5.0], [74.9, 5.0], [75.0, 5.0], [75.1, 5.0], [75.2, 5.0], [75.3, 5.0], [75.4, 5.0], [75.5, 5.0], [75.6, 5.0], [75.7, 5.0], [75.8, 5.0], [75.9, 5.0], [76.0, 5.0], [76.1, 5.0], [76.2, 5.0], [76.3, 5.0], [76.4, 5.0], [76.5, 5.0], [76.6, 5.0], [76.7, 5.0], [76.8, 5.0], [76.9, 5.0], [77.0, 5.0], [77.1, 5.0], [77.2, 5.0], [77.3, 5.0], [77.4, 5.0], [77.5, 5.0], [77.6, 5.0], [77.7, 5.0], [77.8, 5.0], [77.9, 5.0], [78.0, 5.0], [78.1, 5.0], [78.2, 5.0], [78.3, 5.0], [78.4, 5.0], [78.5, 5.0], [78.6, 5.0], [78.7, 5.0], [78.8, 5.0], [78.9, 5.0], [79.0, 5.0], [79.1, 5.0], [79.2, 5.0], [79.3, 5.0], [79.4, 5.0], [79.5, 5.0], [79.6, 5.0], [79.7, 5.0], [79.8, 5.0], [79.9, 5.0], [80.0, 5.0], [80.1, 6.0], [80.2, 6.0], [80.3, 6.0], [80.4, 6.0], [80.5, 6.0], [80.6, 6.0], [80.7, 6.0], [80.8, 6.0], [80.9, 6.0], [81.0, 6.0], [81.1, 6.0], [81.2, 6.0], [81.3, 6.0], [81.4, 6.0], [81.5, 6.0], [81.6, 6.0], [81.7, 6.0], [81.8, 6.0], [81.9, 6.0], [82.0, 6.0], [82.1, 6.0], [82.2, 6.0], [82.3, 6.0], [82.4, 6.0], [82.5, 6.0], [82.6, 6.0], [82.7, 6.0], [82.8, 6.0], [82.9, 6.0], [83.0, 6.0], [83.1, 6.0], [83.2, 6.0], [83.3, 6.0], [83.4, 6.0], [83.5, 6.0], [83.6, 6.0], [83.7, 6.0], [83.8, 6.0], [83.9, 6.0], [84.0, 6.0], [84.1, 6.0], [84.2, 6.0], [84.3, 6.0], [84.4, 6.0], [84.5, 6.0], [84.6, 6.0], [84.7, 6.0], [84.8, 6.0], [84.9, 6.0], [85.0, 6.0], [85.1, 6.0], [85.2, 6.0], [85.3, 6.0], [85.4, 6.0], [85.5, 6.0], [85.6, 6.0], [85.7, 6.0], [85.8, 6.0], [85.9, 6.0], [86.0, 6.0], [86.1, 6.0], [86.2, 7.0], [86.3, 7.0], [86.4, 7.0], [86.5, 7.0], [86.6, 7.0], [86.7, 7.0], [86.8, 7.0], [86.9, 7.0], [87.0, 7.0], [87.1, 7.0], [87.2, 7.0], [87.3, 7.0], [87.4, 7.0], [87.5, 7.0], [87.6, 7.0], [87.7, 7.0], [87.8, 7.0], [87.9, 7.0], [88.0, 7.0], [88.1, 7.0], [88.2, 7.0], [88.3, 7.0], [88.4, 7.0], [88.5, 7.0], [88.6, 7.0], [88.7, 7.0], [88.8, 7.0], [88.9, 7.0], [89.0, 7.0], [89.1, 7.0], [89.2, 7.0], [89.3, 7.0], [89.4, 7.0], [89.5, 7.0], [89.6, 7.0], [89.7, 7.0], [89.8, 7.0], [89.9, 7.0], [90.0, 7.0], [90.1, 8.0], [90.2, 8.0], [90.3, 8.0], [90.4, 8.0], [90.5, 8.0], [90.6, 8.0], [90.7, 8.0], [90.8, 8.0], [90.9, 8.0], [91.0, 8.0], [91.1, 8.0], [91.2, 8.0], [91.3, 8.0], [91.4, 8.0], [91.5, 8.0], [91.6, 8.0], [91.7, 8.0], [91.8, 8.0], [91.9, 8.0], [92.0, 8.0], [92.1, 8.0], [92.2, 8.0], [92.3, 8.0], [92.4, 8.0], [92.5, 8.0], [92.6, 9.0], [92.7, 9.0], [92.8, 9.0], [92.9, 9.0], [93.0, 9.0], [93.1, 9.0], [93.2, 9.0], [93.3, 9.0], [93.4, 9.0], [93.5, 9.0], [93.6, 9.0], [93.7, 9.0], [93.8, 9.0], [93.9, 9.0], [94.0, 9.0], [94.1, 9.0], [94.2, 9.0], [94.3, 9.0], [94.4, 10.0], [94.5, 10.0], [94.6, 10.0], [94.7, 10.0], [94.8, 10.0], [94.9, 10.0], [95.0, 10.0], [95.1, 10.0], [95.2, 10.0], [95.3, 10.0], [95.4, 10.0], [95.5, 10.0], [95.6, 10.0], [95.7, 11.0], [95.8, 11.0], [95.9, 11.0], [96.0, 11.0], [96.1, 11.0], [96.2, 11.0], [96.3, 11.0], [96.4, 11.0], [96.5, 11.0], [96.6, 12.0], [96.7, 12.0], [96.8, 12.0], [96.9, 12.0], [97.0, 12.0], [97.1, 12.0], [97.2, 12.0], [97.3, 13.0], [97.4, 13.0], [97.5, 13.0], [97.6, 13.0], [97.7, 13.0], [97.8, 14.0], [97.9, 14.0], [98.0, 14.0], [98.1, 14.0], [98.2, 15.0], [98.3, 15.0], [98.4, 15.0], [98.5, 16.0], [98.6, 16.0], [98.7, 17.0], [98.8, 17.0], [98.9, 18.0], [99.0, 18.0], [99.1, 19.0], [99.2, 20.0], [99.3, 22.0], [99.4, 23.0], [99.5, 25.0], [99.6, 29.0], [99.7, 34.0], [99.8, 40.0], [99.9, 56.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1999579.0, "series": [{"data": [[0.0, 1999579.0], [100.0, 420.0], [200.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2000000.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2000000.0, "series": [{"data": [[0.0, 2000000.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 5.502724030905358, "minX": 1.70667162E12, "maxY": 14.268977351292303, "series": [{"data": [[1.70667168E12, 5.605596713305875], [1.70667264E12, 5.502724030905358], [1.70667234E12, 9.747748348233285], [1.70667204E12, 9.22734928708415], [1.70667174E12, 7.604127251360637], [1.7066724E12, 11.062423398560933], [1.7066721E12, 9.842775625807011], [1.7066718E12, 8.53509999999985], [1.70667246E12, 14.268977351292303], [1.70667216E12, 9.780811974369104], [1.70667186E12, 8.42220147854279], [1.70667252E12, 12.353984586544419], [1.70667222E12, 9.787540574282028], [1.70667192E12, 9.015564461701345], [1.70667162E12, 12.104794731968273], [1.70667258E12, 7.190117078455057], [1.70667228E12, 10.097561992081753], [1.70667198E12, 9.850136239782124]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70667264E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1.8272632674297622, "minX": 1.0, "maxY": 43.0, "series": [{"data": [[2.0, 1.8827413479052797], [3.0, 1.9443055239827167], [4.0, 2.1656325499670537], [5.0, 2.553962216247894], [6.0, 2.976200920908519], [7.0, 3.3818219702506127], [8.0, 3.8189440163454194], [9.0, 4.28060064935062], [10.0, 4.723315221355127], [11.0, 5.242151223231028], [12.0, 5.752377724164079], [13.0, 6.2071224635464155], [14.0, 6.675592354443763], [15.0, 6.879355456285901], [16.0, 7.441508128675191], [17.0, 7.927719221197488], [18.0, 8.24180979968177], [19.0, 8.62481496433857], [20.0, 8.839526145496274], [21.0, 9.249937343358436], [22.0, 9.546803403883889], [23.0, 9.873979503213548], [24.0, 9.900813988543861], [25.0, 10.19391802556195], [26.0, 10.66008445106809], [27.0, 10.617398648648637], [28.0, 10.708979328165402], [29.0, 11.58904665314398], [30.0, 11.175941780821871], [31.0, 11.635617141390806], [32.0, 11.891835127329971], [33.0, 12.247191011235962], [34.0, 12.711248285322357], [35.0, 12.91688311688311], [36.0, 13.227272727272723], [37.0, 13.004792332268382], [38.0, 13.44990079365081], [39.0, 13.986539984164674], [40.0, 13.168888888888887], [41.0, 13.947289156626498], [42.0, 14.989345509893456], [43.0, 16.140127388535024], [44.0, 15.902887139107607], [45.0, 16.65170940170938], [46.0, 17.716666666666676], [47.0, 17.43853211009176], [48.0, 18.190839694656503], [49.0, 18.106060606060613], [50.0, 21.000000000000004], [51.0, 18.372222222222202], [52.0, 21.62650602409639], [53.0, 25.405797101449274], [54.0, 23.694444444444446], [55.0, 19.94827586206896], [56.0, 18.863636363636367], [57.0, 26.56666666666667], [58.0, 28.023255813953483], [59.0, 36.23529411764706], [60.0, 26.920000000000005], [61.0, 27.187969924812023], [63.0, 25.03333333333333], [62.0, 24.5], [64.0, 31.666666666666664], [65.0, 25.77777777777777], [66.0, 23.672727272727276], [67.0, 36.11764705882352], [69.0, 29.558823529411757], [68.0, 37.285714285714285], [70.0, 35.189655172413794], [71.0, 40.470588235294116], [72.0, 31.856115107913666], [73.0, 30.48214285714285], [74.0, 28.000000000000007], [75.0, 36.9016393442623], [76.0, 43.0], [77.0, 32.12499999999999], [1.0, 1.8272632674297622]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.427918500000427, 4.40316599999971]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 77.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 53778.46666666667, "minX": 1.70667162E12, "maxY": 5.822469E7, "series": [{"data": [[1.70667168E12, 5.81515154E7], [1.70667264E12, 2.93531912E7], [1.70667234E12, 5.81631458E7], [1.70667204E12, 5.8118078E7], [1.70667174E12, 5.81437618E7], [1.7066724E12, 5.81224394E7], [1.7066721E12, 5.8173807E7], [1.7066718E12, 5.8152E7], [1.70667246E12, 5.81767146E7], [1.70667216E12, 5.80822176E7], [1.70667186E12, 5.81437618E7], [1.70667252E12, 5.8164115E7], [1.70667222E12, 5.822469E7], [1.70667192E12, 5.81602382E7], [1.70667162E12, 9419654.8], [1.70667258E12, 5.8154423E7], [1.70667228E12, 5.8139885E7], [1.70667198E12, 5.81563614E7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.70667168E12, 331997.23333333334], [1.70667264E12, 167582.53333333333], [1.70667234E12, 332063.63333333336], [1.70667204E12, 331806.3333333333], [1.70667174E12, 331952.9666666667], [1.7066724E12, 331831.23333333334], [1.7066721E12, 332124.5], [1.7066718E12, 332000.0], [1.70667246E12, 332141.1], [1.70667216E12, 331601.6], [1.70667186E12, 331952.9666666667], [1.70667252E12, 332069.1666666667], [1.70667222E12, 332415.0], [1.70667192E12, 332047.0333333333], [1.70667162E12, 53778.46666666667], [1.70667258E12, 332013.8333333333], [1.70667228E12, 331930.8333333333], [1.70667198E12, 332024.9]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70667264E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 2.5732131101092746, "minX": 1.70667162E12, "maxY": 6.694346569374676, "series": [{"data": [[1.70667168E12, 2.5732131101092746], [1.70667264E12, 2.6010367826718195], [1.70667234E12, 4.599235146596826], [1.70667204E12, 4.301951138163905], [1.70667174E12, 3.452855821241323], [1.7066724E12, 5.203536797872233], [1.7066721E12, 4.589845474613604], [1.7066718E12, 3.9223333333333374], [1.70667246E12, 6.694346569374676], [1.70667216E12, 4.5747647176611785], [1.70667186E12, 3.9179967162014675], [1.70667252E12, 5.861353884607405], [1.70667222E12, 4.562047440699171], [1.70667192E12, 4.1706258280077595], [1.70667162E12, 5.5485646671468745], [1.70667258E12, 3.414416065997239], [1.70667228E12, 4.727334861429422], [1.70667198E12, 4.607796081960486]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70667264E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 2.4828963877699275, "minX": 1.70667162E12, "maxY": 6.562577571198863, "series": [{"data": [[1.70667168E12, 2.5206876723972855], [1.70667264E12, 2.4828963877699275], [1.70667234E12, 4.510427168126156], [1.70667204E12, 4.215550737930479], [1.70667174E12, 3.378978688647598], [1.7066724E12, 5.102435404664045], [1.7066721E12, 4.498338123203828], [1.7066718E12, 3.8459250000000065], [1.70667246E12, 6.562577571198863], [1.70667216E12, 4.481919970631391], [1.70667186E12, 3.8385021211338493], [1.70667252E12, 5.7395542595292355], [1.70667222E12, 4.472759051185934], [1.70667192E12, 4.065132439570993], [1.70667162E12, 5.421185307130382], [1.70667258E12, 3.2942960709970746], [1.70667228E12, 4.636082517191082], [1.70667198E12, 4.507253622645013]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70667264E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.016344185432213002, "minX": 1.70667162E12, "maxY": 0.06621051548513167, "series": [{"data": [[1.70667168E12, 0.01727514395953287], [1.70667264E12, 0.016344185432213002], [1.70667234E12, 0.020229456020929407], [1.70667204E12, 0.01991995330609558], [1.70667174E12, 0.019311069068118056], [1.7066724E12, 0.01890961238629636], [1.7066721E12, 0.018726310966720686], [1.7066718E12, 0.02151666666666674], [1.70667246E12, 0.0203830038900133], [1.70667216E12, 0.019623548257909466], [1.70667186E12, 0.017910870706683443], [1.70667252E12, 0.019645907102686787], [1.70667222E12, 0.019225967540574786], [1.70667192E12, 0.019255605455893682], [1.70667162E12, 0.06621051548513167], [1.70667258E12, 0.016482646556393248], [1.70667228E12, 0.018720566784746775], [1.70667198E12, 0.019023573232007453]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70667264E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.70667162E12, "maxY": 236.0, "series": [{"data": [[1.70667168E12, 93.0], [1.70667264E12, 46.0], [1.70667234E12, 110.0], [1.70667204E12, 115.0], [1.70667174E12, 131.0], [1.7066724E12, 136.0], [1.7066721E12, 115.0], [1.7066718E12, 123.0], [1.70667246E12, 148.0], [1.70667216E12, 112.0], [1.70667186E12, 118.0], [1.70667252E12, 157.0], [1.70667222E12, 115.0], [1.70667192E12, 98.0], [1.70667162E12, 236.0], [1.70667258E12, 45.0], [1.70667228E12, 154.0], [1.70667198E12, 144.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.70667168E12, 1.0], [1.70667264E12, 1.0], [1.70667234E12, 1.0], [1.70667204E12, 1.0], [1.70667174E12, 1.0], [1.7066724E12, 1.0], [1.7066721E12, 1.0], [1.7066718E12, 1.0], [1.70667246E12, 1.0], [1.70667216E12, 1.0], [1.70667186E12, 1.0], [1.70667252E12, 1.0], [1.70667222E12, 1.0], [1.70667192E12, 1.0], [1.70667162E12, 1.0], [1.70667258E12, 1.0], [1.70667228E12, 1.0], [1.70667198E12, 1.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.70667168E12, 5.0], [1.70667264E12, 3.0], [1.70667234E12, 8.0], [1.70667204E12, 6.0], [1.70667174E12, 7.0], [1.7066724E12, 10.0], [1.7066721E12, 9.0], [1.7066718E12, 7.0], [1.70667246E12, 12.0], [1.70667216E12, 8.0], [1.70667186E12, 7.0], [1.70667252E12, 7.0], [1.70667222E12, 8.0], [1.70667192E12, 7.0], [1.70667162E12, 12.0], [1.70667258E12, 4.0], [1.70667228E12, 10.0], [1.70667198E12, 6.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.70667168E12, 12.0], [1.70667264E12, 4.990000000001601], [1.70667234E12, 20.0], [1.70667204E12, 14.0], [1.70667174E12, 17.0], [1.7066724E12, 21.0], [1.7066721E12, 24.0], [1.7066718E12, 18.0], [1.70667246E12, 31.9900000000016], [1.70667216E12, 17.0], [1.70667186E12, 14.0], [1.70667252E12, 15.9900000000016], [1.70667222E12, 17.9900000000016], [1.70667192E12, 14.0], [1.70667162E12, 53.0], [1.70667258E12, 10.0], [1.70667228E12, 28.0], [1.70667198E12, 13.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.70667168E12, 2.0], [1.70667264E12, 2.0], [1.70667234E12, 4.0], [1.70667204E12, 3.0], [1.70667174E12, 3.0], [1.7066724E12, 4.0], [1.7066721E12, 4.0], [1.7066718E12, 3.0], [1.70667246E12, 5.0], [1.70667216E12, 4.0], [1.70667186E12, 3.0], [1.70667252E12, 3.0], [1.70667222E12, 4.0], [1.70667192E12, 3.0], [1.70667162E12, 2.0], [1.70667258E12, 3.0], [1.70667228E12, 4.0], [1.70667198E12, 3.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.70667168E12, 6.0], [1.70667264E12, 3.0], [1.70667234E12, 11.0], [1.70667204E12, 8.0], [1.70667174E12, 9.0], [1.7066724E12, 12.0], [1.7066721E12, 12.0], [1.7066718E12, 9.0], [1.70667246E12, 16.0], [1.70667216E12, 10.0], [1.70667186E12, 8.0], [1.70667252E12, 9.0], [1.70667222E12, 10.0], [1.70667192E12, 8.0], [1.70667162E12, 24.0], [1.70667258E12, 6.0], [1.70667228E12, 13.0], [1.70667198E12, 8.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70667264E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 2.0, "minX": 577.0, "maxY": 25.0, "series": [{"data": [[577.0, 2.0], [1085.0, 25.0], [1755.0, 8.0], [1850.0, 4.0], [1843.0, 5.0], [1829.0, 6.0], [1805.0, 7.0], [1825.0, 2.0], [1912.0, 3.0], [1878.0, 3.0], [1884.0, 5.0], [1877.0, 4.0], [1875.0, 4.0], [1874.0, 4.0], [1916.0, 3.0], [1918.0, 5.0], [1913.0, 4.0], [1915.0, 5.0], [1896.0, 4.0], [1893.0, 5.0], [1892.0, 4.0], [1890.0, 5.0], [1902.0, 4.0], [1897.0, 4.0], [1898.0, 4.0], [1909.0, 3.0], [1911.0, 3.0], [1910.0, 4.0], [1885.0, 3.0], [1864.0, 3.0], [1861.0, 3.0], [1906.0, 5.0], [1905.0, 3.0], [1870.0, 5.0], [1867.0, 3.0], [1904.0, 6.0], [1919.0, 2.0], [1968.0, 3.0], [1981.0, 3.0], [1982.0, 3.0], [1974.0, 3.0], [1983.0, 4.0], [1952.0, 3.0], [1953.0, 4.0], [1955.0, 3.0], [1954.0, 3.0], [1956.0, 5.0], [1962.0, 4.0], [1963.0, 3.0], [1959.0, 4.0], [1960.0, 4.0], [1958.0, 3.0], [1957.0, 4.0], [1975.0, 3.0], [1977.0, 4.0], [1978.0, 4.0], [1976.0, 4.0], [1979.0, 5.0], [1980.0, 3.0], [1932.0, 3.0], [1926.0, 4.0], [1925.0, 3.0], [1924.0, 4.0], [1930.0, 4.0], [1931.0, 5.0], [1929.0, 4.0], [1927.0, 5.0], [1928.0, 3.0], [1934.0, 3.0], [1935.0, 4.0], [1933.0, 3.0], [1923.0, 4.0], [1922.0, 3.0], [1921.0, 4.0], [1920.0, 4.0], [1947.0, 3.0], [1948.0, 4.0], [1951.0, 3.0], [1950.0, 4.0], [1949.0, 4.0], [1972.0, 3.0], [1971.0, 2.0], [1973.0, 3.0], [1969.0, 3.0], [1970.0, 3.0], [1965.0, 3.0], [1966.0, 4.0], [1967.0, 5.0], [1964.0, 4.0], [1946.0, 3.0], [1942.0, 3.0], [1940.0, 4.0], [1941.0, 3.0], [1939.0, 3.0], [1937.0, 3.0], [1938.0, 4.0], [1945.0, 5.0], [1944.0, 4.0], [1943.0, 4.0], [1992.0, 4.0], [2022.0, 3.0], [2017.0, 3.0], [2018.0, 3.0], [2019.0, 3.0], [2021.0, 4.0], [2020.0, 3.0], [2024.0, 4.0], [2023.0, 4.0], [2025.0, 4.0], [2028.0, 3.0], [2027.0, 3.0], [2029.0, 3.0], [2030.0, 3.0], [2031.0, 4.0], [2026.0, 3.0], [2016.0, 3.0], [2036.0, 4.0], [2039.0, 4.0], [2038.0, 4.0], [2037.0, 4.0], [2044.0, 4.0], [2045.0, 4.0], [2047.0, 4.0], [2046.0, 4.0], [2043.0, 4.0], [2041.0, 4.0], [2042.0, 4.0], [2040.0, 4.0], [2035.0, 3.0], [2033.0, 4.0], [2032.0, 4.0], [2034.0, 4.0], [2001.0, 4.0], [2002.0, 4.0], [2003.0, 3.0], [2004.0, 3.0], [2012.0, 3.0], [2011.0, 3.0], [2009.0, 3.0], [2010.0, 3.0], [2013.0, 3.0], [2014.0, 4.0], [1991.0, 3.0], [1990.0, 4.0], [1984.0, 4.0], [1988.0, 4.0], [1987.0, 3.0], [1986.0, 4.0], [1985.0, 3.0], [1989.0, 4.0], [2015.0, 3.0], [2008.0, 4.0], [2005.0, 3.0], [2006.0, 3.0], [2007.0, 3.0], [1997.0, 3.0], [1995.0, 3.0], [1994.0, 3.0], [1993.0, 3.0], [1996.0, 4.0], [1998.0, 3.0], [1999.0, 3.0], [2000.0, 3.0], [2049.0, 4.0], [2067.0, 4.0], [2059.0, 2.0], [2061.0, 4.0], [2060.0, 9.0], [2062.0, 4.0], [2066.0, 4.0], [2065.0, 5.0], [2063.0, 5.0], [2064.0, 4.0], [2091.0, 3.0], [2081.0, 5.0], [2080.0, 4.0], [2082.0, 3.0], [2083.0, 4.0], [2086.0, 3.0], [2090.0, 5.0], [2084.0, 4.0], [2125.0, 3.0], [2126.0, 7.0], [2133.0, 5.0], [2134.0, 5.0], [2141.0, 5.0], [2137.0, 6.0], [2077.0, 4.0], [2078.0, 6.0], [2151.0, 6.0], [2152.0, 6.0], [2079.0, 4.0], [2153.0, 4.0], [2112.0, 4.0], [2161.0, 4.0], [2115.0, 4.0], [2114.0, 4.0], [2121.0, 3.0], [2124.0, 5.0], [2119.0, 4.0], [2120.0, 4.0], [2117.0, 4.0], [2069.0, 2.0], [2068.0, 5.0], [2070.0, 3.0], [2073.0, 5.0], [2075.0, 4.0], [2074.0, 3.0], [2076.0, 4.0], [2053.0, 3.0], [2052.0, 6.0], [2054.0, 4.0], [2051.0, 4.0], [2050.0, 4.0], [2056.0, 3.0], [2058.0, 4.0], [2057.0, 5.0], [2055.0, 3.0], [2103.0, 4.0], [2092.0, 4.0], [2098.0, 4.0], [2100.0, 5.0], [2102.0, 6.0], [2101.0, 5.0], [2095.0, 4.0], [2094.0, 5.0], [2093.0, 4.0], [2105.0, 3.0], [2106.0, 4.0], [2048.0, 4.0], [2109.0, 6.0], [2232.0, 7.0], [2243.0, 8.0], [2318.0, 10.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2318.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 2.0, "minX": 577.0, "maxY": 24.0, "series": [{"data": [[577.0, 2.0], [1085.0, 24.0], [1755.0, 8.0], [1850.0, 4.0], [1843.0, 5.0], [1829.0, 6.0], [1805.0, 7.0], [1825.0, 2.0], [1912.0, 3.0], [1878.0, 3.0], [1884.0, 5.0], [1877.0, 4.0], [1875.0, 4.0], [1874.0, 4.0], [1916.0, 3.0], [1918.0, 5.0], [1913.0, 4.0], [1915.0, 5.0], [1896.0, 4.0], [1893.0, 5.0], [1892.0, 4.0], [1890.0, 5.0], [1902.0, 4.0], [1897.0, 4.0], [1898.0, 4.0], [1909.0, 3.0], [1911.0, 3.0], [1910.0, 4.0], [1885.0, 3.0], [1864.0, 3.0], [1861.0, 3.0], [1906.0, 5.0], [1905.0, 3.0], [1870.0, 5.0], [1867.0, 3.0], [1904.0, 6.0], [1919.0, 2.0], [1968.0, 3.0], [1981.0, 3.0], [1982.0, 3.0], [1974.0, 3.0], [1983.0, 3.0], [1952.0, 3.0], [1953.0, 4.0], [1955.0, 3.0], [1954.0, 3.0], [1956.0, 5.0], [1962.0, 4.0], [1963.0, 3.0], [1959.0, 4.0], [1960.0, 4.0], [1958.0, 3.0], [1957.0, 4.0], [1975.0, 3.0], [1977.0, 4.0], [1978.0, 4.0], [1976.0, 4.0], [1979.0, 5.0], [1980.0, 3.0], [1932.0, 3.0], [1926.0, 4.0], [1925.0, 3.0], [1924.0, 4.0], [1930.0, 3.0], [1931.0, 4.0], [1929.0, 4.0], [1927.0, 5.0], [1928.0, 3.0], [1934.0, 3.0], [1935.0, 4.0], [1933.0, 3.0], [1923.0, 3.0], [1922.0, 3.0], [1921.0, 4.0], [1920.0, 4.0], [1947.0, 3.0], [1948.0, 4.0], [1951.0, 3.0], [1950.0, 4.0], [1949.0, 4.0], [1972.0, 3.0], [1971.0, 2.0], [1973.0, 3.0], [1969.0, 3.0], [1970.0, 3.0], [1965.0, 3.0], [1966.0, 4.0], [1967.0, 4.0], [1964.0, 4.0], [1946.0, 3.0], [1942.0, 3.0], [1940.0, 4.0], [1941.0, 3.0], [1939.0, 3.0], [1937.0, 3.0], [1938.0, 4.0], [1945.0, 5.0], [1944.0, 4.0], [1943.0, 4.0], [1992.0, 4.0], [2022.0, 3.0], [2017.0, 3.0], [2018.0, 3.0], [2019.0, 3.0], [2021.0, 4.0], [2020.0, 3.0], [2024.0, 3.0], [2023.0, 4.0], [2025.0, 4.0], [2028.0, 3.0], [2027.0, 3.0], [2029.0, 3.0], [2030.0, 3.0], [2031.0, 4.0], [2026.0, 3.0], [2016.0, 3.0], [2036.0, 4.0], [2039.0, 4.0], [2038.0, 4.0], [2037.0, 4.0], [2044.0, 4.0], [2045.0, 4.0], [2047.0, 4.0], [2046.0, 4.0], [2043.0, 4.0], [2041.0, 4.0], [2042.0, 4.0], [2040.0, 4.0], [2035.0, 3.0], [2033.0, 4.0], [2032.0, 4.0], [2034.0, 4.0], [2001.0, 4.0], [2002.0, 3.0], [2003.0, 3.0], [2004.0, 3.0], [2012.0, 3.0], [2011.0, 3.0], [2009.0, 3.0], [2010.0, 3.0], [2013.0, 3.0], [2014.0, 4.0], [1991.0, 3.0], [1990.0, 4.0], [1984.0, 4.0], [1988.0, 4.0], [1987.0, 3.0], [1986.0, 4.0], [1985.0, 3.0], [1989.0, 4.0], [2015.0, 3.0], [2008.0, 4.0], [2005.0, 3.0], [2006.0, 3.0], [2007.0, 3.0], [1997.0, 3.0], [1995.0, 3.0], [1994.0, 3.0], [1993.0, 3.0], [1996.0, 4.0], [1998.0, 3.0], [1999.0, 3.0], [2000.0, 3.0], [2049.0, 4.0], [2067.0, 4.0], [2059.0, 2.0], [2061.0, 4.0], [2060.0, 9.0], [2062.0, 4.0], [2066.0, 4.0], [2065.0, 5.0], [2063.0, 5.0], [2064.0, 4.0], [2091.0, 3.0], [2081.0, 5.0], [2080.0, 4.0], [2082.0, 3.0], [2083.0, 4.0], [2086.0, 3.0], [2090.0, 5.0], [2084.0, 4.0], [2125.0, 3.0], [2126.0, 7.0], [2133.0, 5.0], [2134.0, 5.0], [2141.0, 5.0], [2137.0, 6.0], [2077.0, 4.0], [2078.0, 5.0], [2151.0, 6.0], [2152.0, 6.0], [2079.0, 4.0], [2153.0, 4.0], [2112.0, 4.0], [2161.0, 4.0], [2115.0, 4.0], [2114.0, 4.0], [2121.0, 3.0], [2124.0, 5.0], [2119.0, 4.0], [2120.0, 4.0], [2117.0, 4.0], [2069.0, 2.0], [2068.0, 5.0], [2070.0, 3.0], [2073.0, 5.0], [2075.0, 4.0], [2074.0, 3.0], [2076.0, 4.0], [2053.0, 3.0], [2052.0, 6.0], [2054.0, 4.0], [2051.0, 4.0], [2050.0, 4.0], [2056.0, 3.0], [2058.0, 4.0], [2057.0, 5.0], [2055.0, 3.0], [2103.0, 4.0], [2092.0, 4.0], [2098.0, 4.0], [2100.0, 5.0], [2102.0, 6.0], [2101.0, 5.0], [2095.0, 3.0], [2094.0, 5.0], [2093.0, 4.0], [2105.0, 3.0], [2106.0, 4.0], [2048.0, 4.0], [2109.0, 6.0], [2232.0, 7.0], [2243.0, 8.0], [2318.0, 10.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2318.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 324.03333333333336, "minX": 1.70667162E12, "maxY": 2002.25, "series": [{"data": [[1.70667168E12, 1999.9666666666667], [1.70667264E12, 1009.4333333333333], [1.70667234E12, 2000.3166666666666], [1.70667204E12, 1998.9833333333333], [1.70667174E12, 1999.75], [1.7066724E12, 1999.1333333333334], [1.7066721E12, 2000.65], [1.7066718E12, 2000.0333333333333], [1.70667246E12, 2000.7166666666667], [1.70667216E12, 1997.85], [1.70667186E12, 1999.6166666666666], [1.70667252E12, 2000.3166666666666], [1.70667222E12, 2002.25], [1.70667192E12, 2000.3833333333334], [1.70667162E12, 324.03333333333336], [1.70667258E12, 2000.1166666666666], [1.70667228E12, 1999.65], [1.70667198E12, 2000.1333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70667264E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 323.96666666666664, "minX": 1.70667162E12, "maxY": 2002.5, "series": [{"data": [[1.70667168E12, 1999.9833333333333], [1.70667264E12, 1009.5333333333333], [1.70667234E12, 2000.3833333333334], [1.70667204E12, 1998.8333333333333], [1.70667174E12, 1999.7166666666667], [1.7066724E12, 1998.9833333333333], [1.7066721E12, 2000.75], [1.7066718E12, 2000.0], [1.70667246E12, 2000.85], [1.70667216E12, 1997.6], [1.70667186E12, 1999.7166666666667], [1.70667252E12, 2000.4166666666667], [1.70667222E12, 2002.5], [1.70667192E12, 2000.2833333333333], [1.70667162E12, 323.96666666666664], [1.70667258E12, 2000.0833333333333], [1.70667228E12, 1999.5833333333333], [1.70667198E12, 2000.15]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70667264E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 323.96666666666664, "minX": 1.70667162E12, "maxY": 2002.5, "series": [{"data": [[1.70667168E12, 1999.9833333333333], [1.70667264E12, 1009.5333333333333], [1.70667234E12, 2000.3833333333334], [1.70667204E12, 1998.8333333333333], [1.70667174E12, 1999.7166666666667], [1.7066724E12, 1998.9833333333333], [1.7066721E12, 2000.75], [1.7066718E12, 2000.0], [1.70667246E12, 2000.85], [1.70667216E12, 1997.6], [1.70667186E12, 1999.7166666666667], [1.70667252E12, 2000.4166666666667], [1.70667222E12, 2002.5], [1.70667192E12, 2000.2833333333333], [1.70667162E12, 323.96666666666664], [1.70667258E12, 2000.0833333333333], [1.70667228E12, 1999.5833333333333], [1.70667198E12, 2000.15]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70667264E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 323.96666666666664, "minX": 1.70667162E12, "maxY": 2002.5, "series": [{"data": [[1.70667168E12, 1999.9833333333333], [1.70667264E12, 1009.5333333333333], [1.70667234E12, 2000.3833333333334], [1.70667204E12, 1998.8333333333333], [1.70667174E12, 1999.7166666666667], [1.7066724E12, 1998.9833333333333], [1.7066721E12, 2000.75], [1.7066718E12, 2000.0], [1.70667246E12, 2000.85], [1.70667216E12, 1997.6], [1.70667186E12, 1999.7166666666667], [1.70667252E12, 2000.4166666666667], [1.70667222E12, 2002.5], [1.70667192E12, 2000.2833333333333], [1.70667162E12, 323.96666666666664], [1.70667258E12, 2000.0833333333333], [1.70667228E12, 1999.5833333333333], [1.70667198E12, 2000.15]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70667264E12, "title": "Total Transactions Per Second"}},
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

