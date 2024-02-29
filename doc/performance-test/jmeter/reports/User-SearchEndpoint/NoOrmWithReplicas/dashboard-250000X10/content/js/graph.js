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
        data: {"result": {"minY": 0.0, "minX": 0.0, "maxY": 342.0, "series": [{"data": [[0.0, 0.0], [0.1, 1.0], [0.2, 1.0], [0.3, 1.0], [0.4, 1.0], [0.5, 1.0], [0.6, 1.0], [0.7, 1.0], [0.8, 1.0], [0.9, 1.0], [1.0, 1.0], [1.1, 1.0], [1.2, 1.0], [1.3, 1.0], [1.4, 1.0], [1.5, 1.0], [1.6, 1.0], [1.7, 1.0], [1.8, 1.0], [1.9, 1.0], [2.0, 1.0], [2.1, 1.0], [2.2, 1.0], [2.3, 1.0], [2.4, 1.0], [2.5, 1.0], [2.6, 1.0], [2.7, 1.0], [2.8, 1.0], [2.9, 1.0], [3.0, 1.0], [3.1, 1.0], [3.2, 1.0], [3.3, 1.0], [3.4, 1.0], [3.5, 1.0], [3.6, 1.0], [3.7, 1.0], [3.8, 1.0], [3.9, 1.0], [4.0, 1.0], [4.1, 1.0], [4.2, 1.0], [4.3, 1.0], [4.4, 1.0], [4.5, 1.0], [4.6, 1.0], [4.7, 1.0], [4.8, 1.0], [4.9, 1.0], [5.0, 1.0], [5.1, 1.0], [5.2, 1.0], [5.3, 1.0], [5.4, 1.0], [5.5, 1.0], [5.6, 1.0], [5.7, 1.0], [5.8, 1.0], [5.9, 1.0], [6.0, 1.0], [6.1, 1.0], [6.2, 1.0], [6.3, 1.0], [6.4, 1.0], [6.5, 1.0], [6.6, 1.0], [6.7, 1.0], [6.8, 1.0], [6.9, 1.0], [7.0, 1.0], [7.1, 1.0], [7.2, 1.0], [7.3, 1.0], [7.4, 1.0], [7.5, 1.0], [7.6, 1.0], [7.7, 1.0], [7.8, 1.0], [7.9, 1.0], [8.0, 1.0], [8.1, 1.0], [8.2, 1.0], [8.3, 1.0], [8.4, 1.0], [8.5, 1.0], [8.6, 1.0], [8.7, 1.0], [8.8, 1.0], [8.9, 1.0], [9.0, 1.0], [9.1, 1.0], [9.2, 1.0], [9.3, 1.0], [9.4, 1.0], [9.5, 1.0], [9.6, 1.0], [9.7, 1.0], [9.8, 1.0], [9.9, 1.0], [10.0, 1.0], [10.1, 1.0], [10.2, 1.0], [10.3, 1.0], [10.4, 1.0], [10.5, 1.0], [10.6, 1.0], [10.7, 1.0], [10.8, 1.0], [10.9, 1.0], [11.0, 1.0], [11.1, 1.0], [11.2, 1.0], [11.3, 1.0], [11.4, 1.0], [11.5, 1.0], [11.6, 1.0], [11.7, 1.0], [11.8, 1.0], [11.9, 1.0], [12.0, 1.0], [12.1, 1.0], [12.2, 1.0], [12.3, 1.0], [12.4, 1.0], [12.5, 1.0], [12.6, 1.0], [12.7, 1.0], [12.8, 1.0], [12.9, 1.0], [13.0, 1.0], [13.1, 1.0], [13.2, 1.0], [13.3, 1.0], [13.4, 2.0], [13.5, 2.0], [13.6, 2.0], [13.7, 2.0], [13.8, 2.0], [13.9, 2.0], [14.0, 2.0], [14.1, 2.0], [14.2, 2.0], [14.3, 2.0], [14.4, 2.0], [14.5, 2.0], [14.6, 2.0], [14.7, 2.0], [14.8, 2.0], [14.9, 2.0], [15.0, 2.0], [15.1, 2.0], [15.2, 2.0], [15.3, 2.0], [15.4, 2.0], [15.5, 2.0], [15.6, 2.0], [15.7, 2.0], [15.8, 2.0], [15.9, 2.0], [16.0, 2.0], [16.1, 2.0], [16.2, 2.0], [16.3, 2.0], [16.4, 2.0], [16.5, 2.0], [16.6, 2.0], [16.7, 2.0], [16.8, 2.0], [16.9, 2.0], [17.0, 2.0], [17.1, 2.0], [17.2, 2.0], [17.3, 2.0], [17.4, 2.0], [17.5, 2.0], [17.6, 2.0], [17.7, 2.0], [17.8, 2.0], [17.9, 2.0], [18.0, 2.0], [18.1, 2.0], [18.2, 2.0], [18.3, 2.0], [18.4, 2.0], [18.5, 2.0], [18.6, 2.0], [18.7, 2.0], [18.8, 2.0], [18.9, 2.0], [19.0, 2.0], [19.1, 2.0], [19.2, 2.0], [19.3, 2.0], [19.4, 2.0], [19.5, 2.0], [19.6, 2.0], [19.7, 2.0], [19.8, 2.0], [19.9, 2.0], [20.0, 2.0], [20.1, 2.0], [20.2, 2.0], [20.3, 2.0], [20.4, 2.0], [20.5, 2.0], [20.6, 2.0], [20.7, 2.0], [20.8, 2.0], [20.9, 2.0], [21.0, 2.0], [21.1, 2.0], [21.2, 2.0], [21.3, 2.0], [21.4, 2.0], [21.5, 2.0], [21.6, 2.0], [21.7, 2.0], [21.8, 2.0], [21.9, 2.0], [22.0, 2.0], [22.1, 2.0], [22.2, 2.0], [22.3, 2.0], [22.4, 2.0], [22.5, 2.0], [22.6, 2.0], [22.7, 2.0], [22.8, 2.0], [22.9, 2.0], [23.0, 2.0], [23.1, 2.0], [23.2, 2.0], [23.3, 2.0], [23.4, 2.0], [23.5, 2.0], [23.6, 2.0], [23.7, 2.0], [23.8, 2.0], [23.9, 2.0], [24.0, 2.0], [24.1, 2.0], [24.2, 2.0], [24.3, 2.0], [24.4, 2.0], [24.5, 2.0], [24.6, 2.0], [24.7, 2.0], [24.8, 2.0], [24.9, 2.0], [25.0, 2.0], [25.1, 2.0], [25.2, 2.0], [25.3, 2.0], [25.4, 2.0], [25.5, 2.0], [25.6, 2.0], [25.7, 2.0], [25.8, 2.0], [25.9, 2.0], [26.0, 2.0], [26.1, 2.0], [26.2, 2.0], [26.3, 2.0], [26.4, 2.0], [26.5, 2.0], [26.6, 2.0], [26.7, 2.0], [26.8, 2.0], [26.9, 2.0], [27.0, 2.0], [27.1, 2.0], [27.2, 2.0], [27.3, 2.0], [27.4, 2.0], [27.5, 2.0], [27.6, 2.0], [27.7, 2.0], [27.8, 2.0], [27.9, 2.0], [28.0, 2.0], [28.1, 2.0], [28.2, 2.0], [28.3, 2.0], [28.4, 2.0], [28.5, 2.0], [28.6, 2.0], [28.7, 2.0], [28.8, 2.0], [28.9, 2.0], [29.0, 2.0], [29.1, 2.0], [29.2, 2.0], [29.3, 2.0], [29.4, 2.0], [29.5, 2.0], [29.6, 2.0], [29.7, 2.0], [29.8, 2.0], [29.9, 2.0], [30.0, 2.0], [30.1, 2.0], [30.2, 2.0], [30.3, 2.0], [30.4, 2.0], [30.5, 2.0], [30.6, 2.0], [30.7, 2.0], [30.8, 2.0], [30.9, 2.0], [31.0, 2.0], [31.1, 2.0], [31.2, 2.0], [31.3, 2.0], [31.4, 2.0], [31.5, 2.0], [31.6, 2.0], [31.7, 2.0], [31.8, 2.0], [31.9, 2.0], [32.0, 2.0], [32.1, 2.0], [32.2, 2.0], [32.3, 2.0], [32.4, 2.0], [32.5, 2.0], [32.6, 2.0], [32.7, 2.0], [32.8, 2.0], [32.9, 2.0], [33.0, 2.0], [33.1, 2.0], [33.2, 2.0], [33.3, 2.0], [33.4, 2.0], [33.5, 2.0], [33.6, 2.0], [33.7, 2.0], [33.8, 2.0], [33.9, 2.0], [34.0, 2.0], [34.1, 2.0], [34.2, 2.0], [34.3, 2.0], [34.4, 2.0], [34.5, 2.0], [34.6, 2.0], [34.7, 2.0], [34.8, 2.0], [34.9, 2.0], [35.0, 2.0], [35.1, 2.0], [35.2, 2.0], [35.3, 2.0], [35.4, 2.0], [35.5, 2.0], [35.6, 2.0], [35.7, 2.0], [35.8, 2.0], [35.9, 2.0], [36.0, 2.0], [36.1, 2.0], [36.2, 2.0], [36.3, 2.0], [36.4, 2.0], [36.5, 2.0], [36.6, 2.0], [36.7, 2.0], [36.8, 2.0], [36.9, 2.0], [37.0, 2.0], [37.1, 2.0], [37.2, 2.0], [37.3, 2.0], [37.4, 2.0], [37.5, 2.0], [37.6, 2.0], [37.7, 2.0], [37.8, 2.0], [37.9, 2.0], [38.0, 2.0], [38.1, 2.0], [38.2, 2.0], [38.3, 2.0], [38.4, 2.0], [38.5, 2.0], [38.6, 2.0], [38.7, 2.0], [38.8, 2.0], [38.9, 2.0], [39.0, 2.0], [39.1, 2.0], [39.2, 2.0], [39.3, 2.0], [39.4, 2.0], [39.5, 2.0], [39.6, 2.0], [39.7, 2.0], [39.8, 2.0], [39.9, 2.0], [40.0, 2.0], [40.1, 2.0], [40.2, 2.0], [40.3, 2.0], [40.4, 2.0], [40.5, 2.0], [40.6, 2.0], [40.7, 2.0], [40.8, 2.0], [40.9, 2.0], [41.0, 2.0], [41.1, 2.0], [41.2, 2.0], [41.3, 2.0], [41.4, 2.0], [41.5, 2.0], [41.6, 2.0], [41.7, 2.0], [41.8, 2.0], [41.9, 2.0], [42.0, 2.0], [42.1, 2.0], [42.2, 2.0], [42.3, 2.0], [42.4, 2.0], [42.5, 2.0], [42.6, 2.0], [42.7, 2.0], [42.8, 2.0], [42.9, 2.0], [43.0, 2.0], [43.1, 2.0], [43.2, 2.0], [43.3, 2.0], [43.4, 2.0], [43.5, 2.0], [43.6, 2.0], [43.7, 2.0], [43.8, 2.0], [43.9, 2.0], [44.0, 2.0], [44.1, 2.0], [44.2, 2.0], [44.3, 2.0], [44.4, 2.0], [44.5, 2.0], [44.6, 2.0], [44.7, 2.0], [44.8, 2.0], [44.9, 2.0], [45.0, 2.0], [45.1, 2.0], [45.2, 2.0], [45.3, 2.0], [45.4, 2.0], [45.5, 2.0], [45.6, 2.0], [45.7, 2.0], [45.8, 2.0], [45.9, 2.0], [46.0, 2.0], [46.1, 2.0], [46.2, 2.0], [46.3, 2.0], [46.4, 2.0], [46.5, 2.0], [46.6, 2.0], [46.7, 2.0], [46.8, 2.0], [46.9, 2.0], [47.0, 2.0], [47.1, 2.0], [47.2, 2.0], [47.3, 2.0], [47.4, 2.0], [47.5, 2.0], [47.6, 2.0], [47.7, 2.0], [47.8, 2.0], [47.9, 2.0], [48.0, 2.0], [48.1, 2.0], [48.2, 2.0], [48.3, 2.0], [48.4, 2.0], [48.5, 3.0], [48.6, 3.0], [48.7, 3.0], [48.8, 3.0], [48.9, 3.0], [49.0, 3.0], [49.1, 3.0], [49.2, 3.0], [49.3, 3.0], [49.4, 3.0], [49.5, 3.0], [49.6, 3.0], [49.7, 3.0], [49.8, 3.0], [49.9, 3.0], [50.0, 3.0], [50.1, 3.0], [50.2, 3.0], [50.3, 3.0], [50.4, 3.0], [50.5, 3.0], [50.6, 3.0], [50.7, 3.0], [50.8, 3.0], [50.9, 3.0], [51.0, 3.0], [51.1, 3.0], [51.2, 3.0], [51.3, 3.0], [51.4, 3.0], [51.5, 3.0], [51.6, 3.0], [51.7, 3.0], [51.8, 3.0], [51.9, 3.0], [52.0, 3.0], [52.1, 3.0], [52.2, 3.0], [52.3, 3.0], [52.4, 3.0], [52.5, 3.0], [52.6, 3.0], [52.7, 3.0], [52.8, 3.0], [52.9, 3.0], [53.0, 3.0], [53.1, 3.0], [53.2, 3.0], [53.3, 3.0], [53.4, 3.0], [53.5, 3.0], [53.6, 3.0], [53.7, 3.0], [53.8, 3.0], [53.9, 3.0], [54.0, 3.0], [54.1, 3.0], [54.2, 3.0], [54.3, 3.0], [54.4, 3.0], [54.5, 3.0], [54.6, 3.0], [54.7, 3.0], [54.8, 3.0], [54.9, 3.0], [55.0, 3.0], [55.1, 3.0], [55.2, 3.0], [55.3, 3.0], [55.4, 3.0], [55.5, 3.0], [55.6, 3.0], [55.7, 3.0], [55.8, 3.0], [55.9, 3.0], [56.0, 3.0], [56.1, 3.0], [56.2, 3.0], [56.3, 3.0], [56.4, 3.0], [56.5, 3.0], [56.6, 3.0], [56.7, 3.0], [56.8, 3.0], [56.9, 3.0], [57.0, 3.0], [57.1, 3.0], [57.2, 3.0], [57.3, 3.0], [57.4, 3.0], [57.5, 3.0], [57.6, 3.0], [57.7, 3.0], [57.8, 3.0], [57.9, 3.0], [58.0, 3.0], [58.1, 3.0], [58.2, 3.0], [58.3, 3.0], [58.4, 3.0], [58.5, 3.0], [58.6, 3.0], [58.7, 3.0], [58.8, 3.0], [58.9, 3.0], [59.0, 3.0], [59.1, 3.0], [59.2, 3.0], [59.3, 3.0], [59.4, 3.0], [59.5, 3.0], [59.6, 3.0], [59.7, 3.0], [59.8, 3.0], [59.9, 3.0], [60.0, 3.0], [60.1, 3.0], [60.2, 3.0], [60.3, 3.0], [60.4, 3.0], [60.5, 3.0], [60.6, 3.0], [60.7, 3.0], [60.8, 3.0], [60.9, 3.0], [61.0, 3.0], [61.1, 3.0], [61.2, 3.0], [61.3, 3.0], [61.4, 3.0], [61.5, 3.0], [61.6, 3.0], [61.7, 3.0], [61.8, 3.0], [61.9, 3.0], [62.0, 3.0], [62.1, 3.0], [62.2, 3.0], [62.3, 3.0], [62.4, 3.0], [62.5, 3.0], [62.6, 3.0], [62.7, 3.0], [62.8, 3.0], [62.9, 3.0], [63.0, 3.0], [63.1, 3.0], [63.2, 3.0], [63.3, 3.0], [63.4, 3.0], [63.5, 3.0], [63.6, 3.0], [63.7, 3.0], [63.8, 3.0], [63.9, 3.0], [64.0, 3.0], [64.1, 3.0], [64.2, 3.0], [64.3, 3.0], [64.4, 3.0], [64.5, 3.0], [64.6, 3.0], [64.7, 3.0], [64.8, 3.0], [64.9, 3.0], [65.0, 3.0], [65.1, 3.0], [65.2, 3.0], [65.3, 3.0], [65.4, 3.0], [65.5, 3.0], [65.6, 3.0], [65.7, 3.0], [65.8, 3.0], [65.9, 3.0], [66.0, 3.0], [66.1, 3.0], [66.2, 3.0], [66.3, 3.0], [66.4, 3.0], [66.5, 3.0], [66.6, 3.0], [66.7, 3.0], [66.8, 3.0], [66.9, 3.0], [67.0, 3.0], [67.1, 3.0], [67.2, 3.0], [67.3, 3.0], [67.4, 3.0], [67.5, 3.0], [67.6, 3.0], [67.7, 3.0], [67.8, 3.0], [67.9, 3.0], [68.0, 3.0], [68.1, 3.0], [68.2, 3.0], [68.3, 3.0], [68.4, 3.0], [68.5, 3.0], [68.6, 3.0], [68.7, 3.0], [68.8, 3.0], [68.9, 3.0], [69.0, 3.0], [69.1, 3.0], [69.2, 3.0], [69.3, 3.0], [69.4, 3.0], [69.5, 3.0], [69.6, 3.0], [69.7, 3.0], [69.8, 3.0], [69.9, 3.0], [70.0, 3.0], [70.1, 3.0], [70.2, 3.0], [70.3, 3.0], [70.4, 3.0], [70.5, 3.0], [70.6, 3.0], [70.7, 3.0], [70.8, 3.0], [70.9, 3.0], [71.0, 3.0], [71.1, 3.0], [71.2, 3.0], [71.3, 3.0], [71.4, 4.0], [71.5, 4.0], [71.6, 4.0], [71.7, 4.0], [71.8, 4.0], [71.9, 4.0], [72.0, 4.0], [72.1, 4.0], [72.2, 4.0], [72.3, 4.0], [72.4, 4.0], [72.5, 4.0], [72.6, 4.0], [72.7, 4.0], [72.8, 4.0], [72.9, 4.0], [73.0, 4.0], [73.1, 4.0], [73.2, 4.0], [73.3, 4.0], [73.4, 4.0], [73.5, 4.0], [73.6, 4.0], [73.7, 4.0], [73.8, 4.0], [73.9, 4.0], [74.0, 4.0], [74.1, 4.0], [74.2, 4.0], [74.3, 4.0], [74.4, 4.0], [74.5, 4.0], [74.6, 4.0], [74.7, 4.0], [74.8, 4.0], [74.9, 4.0], [75.0, 4.0], [75.1, 4.0], [75.2, 4.0], [75.3, 4.0], [75.4, 4.0], [75.5, 4.0], [75.6, 4.0], [75.7, 4.0], [75.8, 4.0], [75.9, 4.0], [76.0, 4.0], [76.1, 4.0], [76.2, 4.0], [76.3, 4.0], [76.4, 4.0], [76.5, 4.0], [76.6, 4.0], [76.7, 4.0], [76.8, 4.0], [76.9, 4.0], [77.0, 4.0], [77.1, 4.0], [77.2, 4.0], [77.3, 4.0], [77.4, 4.0], [77.5, 4.0], [77.6, 4.0], [77.7, 4.0], [77.8, 4.0], [77.9, 4.0], [78.0, 4.0], [78.1, 4.0], [78.2, 4.0], [78.3, 4.0], [78.4, 4.0], [78.5, 4.0], [78.6, 4.0], [78.7, 4.0], [78.8, 4.0], [78.9, 4.0], [79.0, 4.0], [79.1, 4.0], [79.2, 4.0], [79.3, 4.0], [79.4, 4.0], [79.5, 4.0], [79.6, 4.0], [79.7, 4.0], [79.8, 4.0], [79.9, 4.0], [80.0, 4.0], [80.1, 4.0], [80.2, 4.0], [80.3, 4.0], [80.4, 4.0], [80.5, 4.0], [80.6, 4.0], [80.7, 4.0], [80.8, 4.0], [80.9, 4.0], [81.0, 4.0], [81.1, 4.0], [81.2, 4.0], [81.3, 4.0], [81.4, 4.0], [81.5, 4.0], [81.6, 4.0], [81.7, 4.0], [81.8, 4.0], [81.9, 4.0], [82.0, 4.0], [82.1, 4.0], [82.2, 4.0], [82.3, 4.0], [82.4, 4.0], [82.5, 4.0], [82.6, 5.0], [82.7, 5.0], [82.8, 5.0], [82.9, 5.0], [83.0, 5.0], [83.1, 5.0], [83.2, 5.0], [83.3, 5.0], [83.4, 5.0], [83.5, 5.0], [83.6, 5.0], [83.7, 5.0], [83.8, 5.0], [83.9, 5.0], [84.0, 5.0], [84.1, 5.0], [84.2, 5.0], [84.3, 5.0], [84.4, 5.0], [84.5, 5.0], [84.6, 5.0], [84.7, 5.0], [84.8, 5.0], [84.9, 5.0], [85.0, 5.0], [85.1, 5.0], [85.2, 5.0], [85.3, 5.0], [85.4, 5.0], [85.5, 5.0], [85.6, 5.0], [85.7, 5.0], [85.8, 5.0], [85.9, 5.0], [86.0, 5.0], [86.1, 5.0], [86.2, 5.0], [86.3, 5.0], [86.4, 5.0], [86.5, 5.0], [86.6, 5.0], [86.7, 5.0], [86.8, 5.0], [86.9, 5.0], [87.0, 5.0], [87.1, 5.0], [87.2, 5.0], [87.3, 5.0], [87.4, 5.0], [87.5, 5.0], [87.6, 5.0], [87.7, 5.0], [87.8, 5.0], [87.9, 5.0], [88.0, 5.0], [88.1, 5.0], [88.2, 5.0], [88.3, 5.0], [88.4, 6.0], [88.5, 6.0], [88.6, 6.0], [88.7, 6.0], [88.8, 6.0], [88.9, 6.0], [89.0, 6.0], [89.1, 6.0], [89.2, 6.0], [89.3, 6.0], [89.4, 6.0], [89.5, 6.0], [89.6, 6.0], [89.7, 6.0], [89.8, 6.0], [89.9, 6.0], [90.0, 6.0], [90.1, 6.0], [90.2, 6.0], [90.3, 6.0], [90.4, 6.0], [90.5, 6.0], [90.6, 6.0], [90.7, 6.0], [90.8, 6.0], [90.9, 6.0], [91.0, 6.0], [91.1, 6.0], [91.2, 6.0], [91.3, 6.0], [91.4, 6.0], [91.5, 6.0], [91.6, 6.0], [91.7, 6.0], [91.8, 7.0], [91.9, 7.0], [92.0, 7.0], [92.1, 7.0], [92.2, 7.0], [92.3, 7.0], [92.4, 7.0], [92.5, 7.0], [92.6, 7.0], [92.7, 7.0], [92.8, 7.0], [92.9, 7.0], [93.0, 7.0], [93.1, 7.0], [93.2, 7.0], [93.3, 7.0], [93.4, 7.0], [93.5, 7.0], [93.6, 7.0], [93.7, 7.0], [93.8, 7.0], [93.9, 8.0], [94.0, 8.0], [94.1, 8.0], [94.2, 8.0], [94.3, 8.0], [94.4, 8.0], [94.5, 8.0], [94.6, 8.0], [94.7, 8.0], [94.8, 8.0], [94.9, 8.0], [95.0, 8.0], [95.1, 8.0], [95.2, 8.0], [95.3, 8.0], [95.4, 9.0], [95.5, 9.0], [95.6, 9.0], [95.7, 9.0], [95.8, 9.0], [95.9, 9.0], [96.0, 9.0], [96.1, 9.0], [96.2, 9.0], [96.3, 9.0], [96.4, 10.0], [96.5, 10.0], [96.6, 10.0], [96.7, 10.0], [96.8, 10.0], [96.9, 10.0], [97.0, 10.0], [97.1, 11.0], [97.2, 11.0], [97.3, 11.0], [97.4, 11.0], [97.5, 11.0], [97.6, 12.0], [97.7, 12.0], [97.8, 12.0], [97.9, 12.0], [98.0, 12.0], [98.1, 13.0], [98.2, 13.0], [98.3, 13.0], [98.4, 14.0], [98.5, 14.0], [98.6, 15.0], [98.7, 15.0], [98.8, 16.0], [98.9, 17.0], [99.0, 17.0], [99.1, 19.0], [99.2, 20.0], [99.3, 21.0], [99.4, 24.0], [99.5, 27.0], [99.6, 32.0], [99.7, 37.0], [99.8, 47.0], [99.9, 75.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 16.0, "minX": 0.0, "maxY": 2498931.0, "series": [{"data": [[0.0, 2498931.0], [300.0, 16.0], [100.0, 1036.0], [200.0, 17.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2500000.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2500000.0, "series": [{"data": [[0.0, 2500000.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 4.287455575299866, "minX": 1.70809632E12, "maxY": 14.04009061792023, "series": [{"data": [[1.7080968E12, 9.762168289105212], [1.70809662E12, 9.295293780376602], [1.70809716E12, 10.685519622940863], [1.70809686E12, 10.438089080268037], [1.70809656E12, 9.298925361990188], [1.70809722E12, 13.461887713262703], [1.70809692E12, 9.963000500083465], [1.7080965E12, 9.440482936552932], [1.70809728E12, 6.2832543349132175], [1.70809698E12, 9.728027197280293], [1.70809644E12, 9.73915565452794], [1.70809674E12, 10.074634227628723], [1.70809734E12, 4.287455575299866], [1.70809704E12, 10.270188115775792], [1.70809638E12, 7.6348224345171545], [1.70809668E12, 9.714969628676515], [1.7080971E12, 9.600749378296241], [1.70809632E12, 14.04009061792023]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70809734E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1.3787177792465315, "minX": 1.0, "maxY": 57.555555555555586, "series": [{"data": [[2.0, 1.4187817258883237], [3.0, 1.497655883731829], [4.0, 1.7149331627859163], [5.0, 2.056225062829854], [6.0, 2.342719579807447], [7.0, 2.630145431109431], [8.0, 2.965383924400817], [9.0, 3.3375469864281215], [10.0, 3.6838400084373055], [11.0, 4.077115673510303], [12.0, 4.493714248779933], [13.0, 4.968528117359331], [14.0, 5.384622599479479], [15.0, 5.699935643033368], [16.0, 6.044133678014165], [17.0, 6.133831191385871], [18.0, 6.457510425682588], [19.0, 6.737424865548875], [20.0, 6.986570875932578], [21.0, 7.094886055344544], [22.0, 7.0186662535822215], [23.0, 7.646934257387601], [24.0, 7.823884323312184], [25.0, 7.9513677811550245], [26.0, 8.10368906455865], [27.0, 9.008600237247931], [28.0, 8.852344740177426], [29.0, 8.612923864363419], [30.0, 8.752151462994824], [31.0, 9.082379862700193], [33.0, 9.79977835241961], [32.0, 9.88672789483166], [35.0, 9.825310559006208], [34.0, 9.285976505139526], [37.0, 10.196261682242982], [36.0, 9.810725552050467], [39.0, 11.023342175066306], [38.0, 10.858262108262098], [41.0, 10.813778990450233], [40.0, 10.948653725735763], [43.0, 11.229544613106263], [42.0, 11.19175108538352], [45.0, 11.616564417177923], [44.0, 11.202470059880241], [47.0, 11.993659942363129], [46.0, 11.773032629558546], [49.0, 13.986320109439134], [48.0, 12.252552756977542], [50.0, 13.181818181818176], [51.0, 13.185922974767603], [52.0, 14.654956085319947], [53.0, 14.175035868005729], [54.0, 14.515086206896553], [55.0, 12.947589098532493], [56.0, 13.219026548672563], [57.0, 15.223300970873787], [58.0, 18.805921052631565], [59.0, 18.014925373134343], [60.0, 16.773076923076907], [61.0, 17.889328063241095], [62.0, 18.114754098360656], [63.0, 17.16535433070867], [64.0, 21.071823204419896], [65.0, 21.906976744186053], [66.0, 17.172839506172846], [67.0, 21.652173913043484], [68.0, 24.857142857142854], [69.0, 23.323529411764707], [70.0, 23.341463414634145], [71.0, 30.121951219512205], [72.0, 43.71951219512194], [73.0, 22.469387755102034], [75.0, 27.333333333333332], [74.0, 33.76923076923077], [79.0, 35.31034482758622], [78.0, 22.749999999999996], [77.0, 29.59842519685039], [76.0, 16.250000000000004], [80.0, 27.720930232558143], [82.0, 15.958333333333341], [83.0, 23.257575757575758], [81.0, 20.14], [84.0, 21.967741935483872], [85.0, 22.076923076923077], [86.0, 39.77777777777778], [87.0, 36.714285714285715], [88.0, 22.253968253968253], [89.0, 22.766666666666666], [90.0, 21.161290322580648], [91.0, 20.44736842105263], [92.0, 16.222222222222225], [93.0, 11.518518518518517], [94.0, 19.069767441860463], [95.0, 16.89610389610389], [96.0, 27.36904761904762], [97.0, 34.62393162393164], [99.0, 26.33663366336634], [98.0, 26.632075471698112], [100.0, 26.492537313432823], [101.0, 30.70689655172412], [102.0, 46.876923076923056], [103.0, 38.78151260504201], [105.0, 36.391304347826086], [106.0, 29.416666666666657], [107.0, 24.567164179104473], [104.0, 37.95384615384616], [108.0, 32.55421686746988], [109.0, 33.13978494623657], [110.0, 34.11764705882353], [111.0, 38.41666666666665], [112.0, 46.50495049504949], [113.0, 30.006993006993], [114.0, 27.929292929292927], [115.0, 34.11403508771928], [117.0, 30.6904761904762], [118.0, 50.5], [119.0, 35.791044776119406], [116.0, 20.826086956521742], [123.0, 32.13725490196079], [122.0, 41.27536231884059], [121.0, 38.927272727272744], [120.0, 36.666666666666664], [124.0, 32.459016393442624], [125.0, 33.73972602739727], [126.0, 51.74285714285715], [127.0, 56.60000000000001], [128.0, 49.519480519480524], [129.0, 57.555555555555586], [131.0, 52.38805970149254], [132.0, 42.78873239436622], [130.0, 45.43137254901962], [134.0, 40.008810572687224], [135.0, 45.83070866141733], [133.0, 41.85802469135803], [136.0, 53.50234741784036], [137.0, 53.18954248366012], [140.0, 27.09090909090909], [139.0, 28.27777777777778], [141.0, 23.2], [138.0, 37.86451612903227], [1.0, 1.3787177792465315]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.744613999999991, 3.5173195999999716]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 141.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 99644.26666666666, "minX": 1.70809632E12, "maxY": 7.28971475E7, "series": [{"data": [[1.7080968E12, 7.2875282E7], [1.70809662E12, 7.28815987E7], [1.70809716E12, 7.28864577E7], [1.70809686E12, 7.28956898E7], [1.70809656E12, 7.28869436E7], [1.70809722E12, 7.28806269E7], [1.70809692E12, 7.28728525E7], [1.7080965E12, 7.28845141E7], [1.70809728E12, 7.28864577E7], [1.70809698E12, 7.28922885E7], [1.70809644E12, 7.28781974E7], [1.70809674E12, 7.28971475E7], [1.70809734E12, 1.75001744E7], [1.70809704E12, 7.28918026E7], [1.70809638E12, 7.28854859E7], [1.70809668E12, 7.28738243E7], [1.7080971E12, 7.28806269E7], [1.70809632E12, 3.11000295E7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7080968E12, 414944.6666666667], [1.70809662E12, 414980.63333333336], [1.70809716E12, 415008.3], [1.70809686E12, 415060.86666666664], [1.70809656E12, 415011.06666666665], [1.70809722E12, 414975.1], [1.70809692E12, 414930.8333333333], [1.7080965E12, 414997.23333333334], [1.70809728E12, 415008.3], [1.70809698E12, 415041.5], [1.70809644E12, 414961.26666666666], [1.70809674E12, 415069.1666666667], [1.70809734E12, 99644.26666666666], [1.70809704E12, 415038.73333333334], [1.70809638E12, 415002.76666666666], [1.70809668E12, 414936.36666666664], [1.7080971E12, 414975.1], [1.70809632E12, 177080.5]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70809734E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1.5595013327410112, "minX": 1.70809632E12, "maxY": 4.978798531364715, "series": [{"data": [[1.7080968E12, 3.5556540872116544], [1.70809662E12, 3.3833178881681363], [1.70809716E12, 3.8424564842037072], [1.70809686E12, 3.7848115609710717], [1.70809656E12, 3.351317298205404], [1.70809722E12, 4.843923968771481], [1.70809692E12, 3.6350725120853156], [1.7080965E12, 3.3823092153947436], [1.70809728E12, 2.3134603974586843], [1.70809698E12, 3.567369929673726], [1.70809644E12, 3.402230874881668], [1.70809674E12, 3.6383602732877818], [1.70809734E12, 1.5595013327410112], [1.70809704E12, 3.6771301345208296], [1.70809638E12, 2.7401217325218004], [1.70809668E12, 3.5184128232995917], [1.7080971E12, 3.487669260155609], [1.70809632E12, 4.978798531364715]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70809734E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1.461683696135058, "minX": 1.70809632E12, "maxY": 4.827357237715778, "series": [{"data": [[1.7080968E12, 3.3435258034404867], [1.70809662E12, 3.1830485422652592], [1.70809716E12, 3.604121250908302], [1.70809686E12, 3.5628107877511317], [1.70809656E12, 3.1533159115757003], [1.70809722E12, 4.543592615556963], [1.70809692E12, 3.427704617436241], [1.7080965E12, 3.2025280168534533], [1.70809728E12, 2.170136597268017], [1.70809698E12, 3.3554444555544225], [1.70809644E12, 3.2376955182484077], [1.70809674E12, 3.425242459590046], [1.70809734E12, 1.461683696135058], [1.70809704E12, 3.4543509272467556], [1.70809638E12, 2.614742568382916], [1.70809668E12, 3.3146215753082164], [1.7080971E12, 3.2820569234154005], [1.70809632E12, 4.827357237715778]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70809734E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.002609951132829857, "minX": 1.70809632E12, "maxY": 0.09363228460374322, "series": [{"data": [[1.7080968E12, 0.07457661021469392], [1.70809662E12, 0.06792316974792133], [1.70809716E12, 0.07809843803123988], [1.70809686E12, 0.07834184319633043], [1.70809656E12, 0.06515159595744119], [1.70809722E12, 0.09363228460374322], [1.70809692E12, 0.07289214869144883], [1.7080965E12, 0.06750045000299913], [1.70809728E12, 0.03178603094604803], [1.70809698E12, 0.07467253274672467], [1.70809644E12, 0.0668329044044117], [1.70809674E12, 0.06936177303782644], [1.70809734E12, 0.002609951132829857], [1.70809704E12, 0.06985348034183483], [1.70809638E12, 0.04907300617995891], [1.70809668E12, 0.05742880575021486], [1.7080971E12, 0.06919748518244365], [1.70809632E12, 0.05113662995078525]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70809734E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.70809632E12, "maxY": 342.0, "series": [{"data": [[1.7080968E12, 154.0], [1.70809662E12, 164.0], [1.70809716E12, 161.0], [1.70809686E12, 128.0], [1.70809656E12, 128.0], [1.70809722E12, 329.0], [1.70809692E12, 146.0], [1.7080965E12, 133.0], [1.70809728E12, 117.0], [1.70809698E12, 123.0], [1.70809644E12, 163.0], [1.70809674E12, 159.0], [1.70809734E12, 17.0], [1.70809704E12, 148.0], [1.70809638E12, 150.0], [1.70809668E12, 154.0], [1.7080971E12, 126.0], [1.70809632E12, 342.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7080968E12, 1.0], [1.70809662E12, 1.0], [1.70809716E12, 0.0], [1.70809686E12, 0.0], [1.70809656E12, 0.0], [1.70809722E12, 1.0], [1.70809692E12, 0.0], [1.7080965E12, 0.0], [1.70809728E12, 1.0], [1.70809698E12, 0.0], [1.70809644E12, 0.0], [1.70809674E12, 0.0], [1.70809734E12, 1.0], [1.70809704E12, 0.0], [1.70809638E12, 0.0], [1.70809668E12, 0.0], [1.7080971E12, 0.0], [1.70809632E12, 0.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7080968E12, 5.0], [1.70809662E12, 9.0], [1.70809716E12, 5.0], [1.70809686E12, 5.0], [1.70809656E12, 6.0], [1.70809722E12, 8.0], [1.70809692E12, 5.0], [1.7080965E12, 5.0], [1.70809728E12, 4.0], [1.70809698E12, 5.0], [1.70809644E12, 5.0], [1.70809674E12, 5.0], [1.70809734E12, 2.0], [1.70809704E12, 6.0], [1.70809638E12, 5.0], [1.70809668E12, 7.0], [1.7080971E12, 5.0], [1.70809632E12, 4.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7080968E12, 14.0], [1.70809662E12, 32.0], [1.70809716E12, 14.0], [1.70809686E12, 11.0], [1.70809656E12, 17.0], [1.70809722E12, 23.0], [1.70809692E12, 13.0], [1.7080965E12, 12.0], [1.70809728E12, 8.0], [1.70809698E12, 10.0], [1.70809644E12, 13.0], [1.70809674E12, 11.0], [1.70809734E12, 4.0], [1.70809704E12, 15.0], [1.70809638E12, 17.0], [1.70809668E12, 19.0], [1.7080971E12, 12.0], [1.70809632E12, 9.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7080968E12, 3.0], [1.70809662E12, 3.0], [1.70809716E12, 3.0], [1.70809686E12, 3.0], [1.70809656E12, 3.0], [1.70809722E12, 3.0], [1.70809692E12, 3.0], [1.7080965E12, 2.0], [1.70809728E12, 2.0], [1.70809698E12, 2.0], [1.70809644E12, 2.0], [1.70809674E12, 2.0], [1.70809734E12, 1.0], [1.70809704E12, 3.0], [1.70809638E12, 2.0], [1.70809668E12, 3.0], [1.7080971E12, 3.0], [1.70809632E12, 2.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.7080968E12, 7.0], [1.70809662E12, 13.0], [1.70809716E12, 7.0], [1.70809686E12, 6.0], [1.70809656E12, 9.0], [1.70809722E12, 11.0], [1.70809692E12, 7.0], [1.7080965E12, 6.0], [1.70809728E12, 5.0], [1.70809698E12, 6.0], [1.70809644E12, 7.0], [1.70809674E12, 6.0], [1.70809734E12, 2.0], [1.70809704E12, 8.0], [1.70809638E12, 7.0], [1.70809668E12, 10.0], [1.7080971E12, 6.0], [1.70809632E12, 5.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70809734E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 1.0, "minX": 828.0, "maxY": 33.0, "series": [{"data": [[828.0, 33.0], [993.0, 1.0], [2163.0, 13.0], [2215.0, 2.0], [2283.0, 3.0], [2266.0, 3.0], [2268.0, 3.0], [2253.0, 3.0], [2274.0, 4.0], [2225.0, 3.0], [2303.0, 4.0], [2424.0, 2.0], [2409.0, 3.0], [2415.0, 2.0], [2420.0, 2.0], [2421.0, 3.0], [2422.0, 3.0], [2410.0, 3.0], [2413.0, 3.0], [2412.0, 3.0], [2414.0, 2.0], [2331.0, 3.0], [2325.0, 3.0], [2330.0, 8.0], [2316.0, 6.0], [2317.0, 7.0], [2321.0, 3.0], [2315.0, 3.0], [2311.0, 3.0], [2362.0, 5.0], [2367.0, 4.0], [2305.0, 3.0], [2401.0, 3.0], [2406.0, 3.0], [2403.0, 3.0], [2407.0, 2.0], [2332.0, 4.0], [2400.0, 3.0], [2361.0, 3.0], [2393.0, 2.0], [2399.0, 3.0], [2398.0, 3.0], [2395.0, 3.0], [2428.0, 3.0], [2377.0, 5.0], [2430.0, 3.0], [2429.0, 3.0], [2431.0, 3.0], [2374.0, 2.0], [2375.0, 3.0], [2373.0, 3.0], [2371.0, 2.0], [2387.0, 3.0], [2388.0, 5.0], [2383.0, 3.0], [2379.0, 2.0], [2392.0, 3.0], [2391.0, 4.0], [2427.0, 2.0], [2425.0, 3.0], [2426.0, 3.0], [2347.0, 3.0], [2340.0, 3.0], [2344.0, 3.0], [2348.0, 3.0], [2351.0, 5.0], [2357.0, 5.0], [2349.0, 5.0], [2534.0, 2.0], [2483.0, 3.0], [2499.0, 3.0], [2509.0, 2.0], [2506.0, 3.0], [2507.0, 2.0], [2508.0, 3.0], [2505.0, 2.0], [2504.0, 2.0], [2514.0, 2.0], [2515.0, 2.0], [2518.0, 2.0], [2517.0, 2.0], [2516.0, 3.0], [2511.0, 2.0], [2512.0, 3.0], [2510.0, 3.0], [2513.0, 2.0], [2520.0, 2.0], [2521.0, 3.0], [2522.0, 2.0], [2523.0, 3.0], [2524.0, 3.0], [2527.0, 2.0], [2526.0, 3.0], [2525.0, 3.0], [2519.0, 3.0], [2531.0, 3.0], [2528.0, 3.0], [2529.0, 3.0], [2530.0, 4.0], [2532.0, 3.0], [2533.0, 3.0], [2463.0, 2.0], [2461.0, 3.0], [2459.0, 3.0], [2458.0, 3.0], [2455.0, 2.0], [2454.0, 3.0], [2453.0, 3.0], [2452.0, 3.0], [2440.0, 3.0], [2439.0, 2.0], [2437.0, 3.0], [2441.0, 2.0], [2443.0, 2.0], [2447.0, 2.0], [2445.0, 2.0], [2446.0, 3.0], [2442.0, 3.0], [2449.0, 2.0], [2450.0, 2.0], [2448.0, 2.0], [2451.0, 2.0], [2457.0, 2.0], [2465.0, 2.0], [2464.0, 3.0], [2466.0, 2.0], [2470.0, 3.0], [2468.0, 2.0], [2467.0, 3.0], [2471.0, 3.0], [2472.0, 3.0], [2474.0, 3.0], [2475.0, 3.0], [2473.0, 2.0], [2476.0, 3.0], [2482.0, 3.0], [2481.0, 3.0], [2479.0, 2.0], [2478.0, 2.0], [2477.0, 2.0], [2480.0, 2.0], [2498.0, 2.0], [2502.0, 3.0], [2501.0, 2.0], [2500.0, 2.0], [2497.0, 2.0], [2547.0, 3.0], [2545.0, 2.0], [2541.0, 3.0], [2542.0, 3.0], [2544.0, 4.0], [2543.0, 3.0], [2546.0, 3.0], [2540.0, 2.0], [2535.0, 3.0], [2536.0, 2.0], [2539.0, 2.0], [2538.0, 3.0], [2537.0, 3.0], [2496.0, 2.0], [2559.0, 3.0], [2557.0, 2.0], [2556.0, 3.0], [2555.0, 2.0], [2558.0, 2.0], [2554.0, 2.0], [2552.0, 2.0], [2553.0, 3.0], [2551.0, 3.0], [2550.0, 2.0], [2548.0, 3.0], [2549.0, 2.0], [2503.0, 3.0], [2494.0, 3.0], [2495.0, 3.0], [2432.0, 3.0], [2435.0, 3.0], [2434.0, 3.0], [2493.0, 2.0], [2489.0, 3.0], [2484.0, 2.0], [2485.0, 3.0], [2486.0, 3.0], [2488.0, 3.0], [2487.0, 2.0], [2491.0, 3.0], [2490.0, 3.0], [2492.0, 2.0], [2436.0, 2.0], [2660.0, 2.0], [2652.0, 21.0], [2655.0, 3.0], [2646.0, 2.0], [2637.0, 2.0], [2592.0, 2.0], [2594.0, 2.0], [2609.0, 3.0], [2608.0, 3.0], [2562.0, 3.0], [2620.0, 2.0], [2563.0, 3.0], [2612.0, 3.0], [2614.0, 3.0], [2610.0, 3.0], [2566.0, 3.0], [2567.0, 3.0], [2569.0, 3.0], [2570.0, 3.0], [2568.0, 3.0], [2564.0, 3.0], [2598.0, 3.0], [2596.0, 3.0], [2597.0, 2.0], [2601.0, 2.0], [2602.0, 3.0], [2605.0, 3.0], [2669.0, 3.0], [2667.0, 3.0], [2662.0, 3.0], [2675.0, 2.0], [2673.0, 3.0], [2674.0, 5.0], [2678.0, 3.0], [2677.0, 4.0], [2679.0, 4.0], [2629.0, 3.0], [2682.0, 3.0], [2625.0, 5.0], [2684.0, 3.0], [2630.0, 2.0], [2635.0, 5.0], [2571.0, 2.0], [2586.0, 2.0], [2583.0, 3.0], [2585.0, 3.0], [2589.0, 3.0], [2588.0, 3.0], [2590.0, 3.0], [2591.0, 4.0], [2659.0, 2.0], [2644.0, 2.0], [2643.0, 3.0], [2642.0, 2.0], [2640.0, 4.0], [2578.0, 4.0], [2579.0, 3.0], [2577.0, 3.0], [2574.0, 3.0], [2576.0, 3.0], [2572.0, 2.0], [2580.0, 2.0], [2709.0, 5.0], [2702.0, 3.0], [2781.0, 3.0], [2741.0, 3.0], [2697.0, 3.0], [2695.0, 3.0], [2749.0, 6.0], [2703.0, 3.0], [2752.0, 3.0], [2799.0, 5.0], [2707.0, 5.0], [2705.0, 6.0], [2776.0, 3.0], [2820.0, 4.0], [3006.0, 6.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3006.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 1.0, "minX": 828.0, "maxY": 30.0, "series": [{"data": [[828.0, 30.0], [993.0, 1.0], [2163.0, 12.0], [2215.0, 2.0], [2283.0, 3.0], [2266.0, 3.0], [2268.0, 3.0], [2253.0, 3.0], [2274.0, 4.0], [2225.0, 3.0], [2303.0, 3.0], [2424.0, 2.0], [2409.0, 3.0], [2415.0, 2.0], [2420.0, 2.0], [2421.0, 3.0], [2422.0, 3.0], [2410.0, 3.0], [2413.0, 3.0], [2412.0, 2.0], [2414.0, 2.0], [2331.0, 3.0], [2325.0, 2.0], [2330.0, 7.0], [2316.0, 6.0], [2317.0, 7.0], [2321.0, 3.0], [2315.0, 3.0], [2311.0, 3.0], [2362.0, 4.0], [2367.0, 3.0], [2305.0, 3.0], [2401.0, 3.0], [2406.0, 3.0], [2403.0, 3.0], [2407.0, 2.0], [2332.0, 4.0], [2400.0, 3.0], [2361.0, 2.0], [2393.0, 2.0], [2399.0, 3.0], [2398.0, 3.0], [2395.0, 3.0], [2428.0, 3.0], [2377.0, 4.0], [2430.0, 2.0], [2429.0, 2.0], [2431.0, 3.0], [2374.0, 2.0], [2375.0, 3.0], [2373.0, 3.0], [2371.0, 2.0], [2387.0, 3.0], [2388.0, 5.0], [2383.0, 2.0], [2379.0, 2.0], [2392.0, 3.0], [2391.0, 4.0], [2427.0, 2.0], [2425.0, 3.0], [2426.0, 3.0], [2347.0, 3.0], [2340.0, 3.0], [2344.0, 3.0], [2348.0, 3.0], [2351.0, 5.0], [2357.0, 4.0], [2349.0, 5.0], [2534.0, 2.0], [2483.0, 3.0], [2499.0, 3.0], [2509.0, 2.0], [2506.0, 3.0], [2507.0, 2.0], [2508.0, 2.0], [2505.0, 2.0], [2504.0, 2.0], [2514.0, 2.0], [2515.0, 2.0], [2518.0, 2.0], [2517.0, 2.0], [2516.0, 2.0], [2511.0, 2.0], [2512.0, 2.0], [2510.0, 2.0], [2513.0, 2.0], [2520.0, 2.0], [2521.0, 3.0], [2522.0, 2.0], [2523.0, 2.0], [2524.0, 2.0], [2527.0, 2.0], [2526.0, 2.0], [2525.0, 3.0], [2519.0, 2.0], [2531.0, 2.0], [2528.0, 3.0], [2529.0, 3.0], [2530.0, 3.0], [2532.0, 3.0], [2533.0, 3.0], [2463.0, 2.0], [2461.0, 3.0], [2459.0, 3.0], [2458.0, 3.0], [2455.0, 2.0], [2454.0, 3.0], [2453.0, 3.0], [2452.0, 3.0], [2440.0, 3.0], [2439.0, 2.0], [2437.0, 2.0], [2441.0, 2.0], [2443.0, 2.0], [2447.0, 2.0], [2445.0, 2.0], [2446.0, 3.0], [2442.0, 3.0], [2449.0, 2.0], [2450.0, 2.0], [2448.0, 2.0], [2451.0, 2.0], [2457.0, 2.0], [2465.0, 2.0], [2464.0, 3.0], [2466.0, 2.0], [2470.0, 3.0], [2468.0, 2.0], [2467.0, 3.0], [2471.0, 3.0], [2472.0, 3.0], [2474.0, 2.0], [2475.0, 3.0], [2473.0, 2.0], [2476.0, 3.0], [2482.0, 3.0], [2481.0, 3.0], [2479.0, 2.0], [2478.0, 2.0], [2477.0, 2.0], [2480.0, 2.0], [2498.0, 2.0], [2502.0, 2.0], [2501.0, 2.0], [2500.0, 2.0], [2497.0, 2.0], [2547.0, 2.0], [2545.0, 2.0], [2541.0, 2.0], [2542.0, 3.0], [2544.0, 3.0], [2543.0, 3.0], [2546.0, 3.0], [2540.0, 2.0], [2535.0, 3.0], [2536.0, 2.0], [2539.0, 2.0], [2538.0, 2.0], [2537.0, 3.0], [2496.0, 2.0], [2559.0, 3.0], [2557.0, 2.0], [2556.0, 3.0], [2555.0, 1.0], [2558.0, 2.0], [2554.0, 2.0], [2552.0, 2.0], [2553.0, 3.0], [2551.0, 3.0], [2550.0, 2.0], [2548.0, 3.0], [2549.0, 2.0], [2503.0, 2.0], [2494.0, 2.0], [2495.0, 3.0], [2432.0, 2.0], [2435.0, 2.0], [2434.0, 3.0], [2493.0, 2.0], [2489.0, 2.0], [2484.0, 2.0], [2485.0, 3.0], [2486.0, 3.0], [2488.0, 3.0], [2487.0, 2.0], [2491.0, 3.0], [2490.0, 3.0], [2492.0, 2.0], [2436.0, 2.0], [2660.0, 2.0], [2652.0, 20.0], [2655.0, 3.0], [2646.0, 2.0], [2637.0, 2.0], [2592.0, 2.0], [2594.0, 2.0], [2609.0, 2.0], [2608.0, 3.0], [2562.0, 3.0], [2620.0, 1.0], [2563.0, 2.0], [2612.0, 3.0], [2614.0, 3.0], [2610.0, 2.0], [2566.0, 3.0], [2567.0, 3.0], [2569.0, 3.0], [2570.0, 3.0], [2568.0, 3.0], [2564.0, 3.0], [2598.0, 3.0], [2596.0, 3.0], [2597.0, 2.0], [2601.0, 2.0], [2602.0, 2.0], [2605.0, 3.0], [2669.0, 3.0], [2667.0, 2.0], [2662.0, 3.0], [2675.0, 2.0], [2673.0, 3.0], [2674.0, 4.0], [2678.0, 3.0], [2677.0, 3.0], [2679.0, 3.0], [2629.0, 2.0], [2682.0, 3.0], [2625.0, 5.0], [2684.0, 3.0], [2630.0, 2.0], [2635.0, 4.0], [2571.0, 2.0], [2586.0, 2.0], [2583.0, 3.0], [2585.0, 3.0], [2589.0, 2.0], [2588.0, 3.0], [2590.0, 3.0], [2591.0, 4.0], [2659.0, 2.0], [2644.0, 2.0], [2643.0, 2.0], [2642.0, 2.0], [2640.0, 3.0], [2578.0, 4.0], [2579.0, 2.0], [2577.0, 2.0], [2574.0, 3.0], [2576.0, 3.0], [2572.0, 2.0], [2580.0, 2.0], [2709.0, 4.0], [2702.0, 2.0], [2781.0, 3.0], [2741.0, 2.0], [2697.0, 3.0], [2695.0, 3.0], [2749.0, 5.0], [2703.0, 3.0], [2752.0, 3.0], [2799.0, 4.0], [2707.0, 4.0], [2705.0, 6.0], [2776.0, 3.0], [2820.0, 4.0], [3006.0, 6.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3006.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 600.2166666666667, "minX": 1.70809632E12, "maxY": 2500.366666666667, "series": [{"data": [[1.7080968E12, 2499.766666666667], [1.70809662E12, 2499.883333333333], [1.70809716E12, 2500.0666666666666], [1.70809686E12, 2500.2833333333333], [1.70809656E12, 2500.0666666666666], [1.70809722E12, 2499.883333333333], [1.70809692E12, 2499.616666666667], [1.7080965E12, 2500.0], [1.70809728E12, 2499.9666666666667], [1.70809698E12, 2500.25], [1.70809644E12, 2499.7833333333333], [1.70809674E12, 2500.366666666667], [1.70809734E12, 600.2166666666667], [1.70809704E12, 2500.1833333333334], [1.70809638E12, 2500.0333333333333], [1.70809668E12, 2499.633333333333], [1.7080971E12, 2499.85], [1.70809632E12, 1066.8166666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70809734E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 600.2666666666667, "minX": 1.70809632E12, "maxY": 2500.4166666666665, "series": [{"data": [[1.7080968E12, 2499.6666666666665], [1.70809662E12, 2499.883333333333], [1.70809716E12, 2500.05], [1.70809686E12, 2500.366666666667], [1.70809656E12, 2500.0666666666666], [1.70809722E12, 2499.85], [1.70809692E12, 2499.5833333333335], [1.7080965E12, 2499.983333333333], [1.70809728E12, 2500.05], [1.70809698E12, 2500.25], [1.70809644E12, 2499.766666666667], [1.70809674E12, 2500.4166666666665], [1.70809734E12, 600.2666666666667], [1.70809704E12, 2500.233333333333], [1.70809638E12, 2500.016666666667], [1.70809668E12, 2499.616666666667], [1.7080971E12, 2499.85], [1.70809632E12, 1066.75]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70809734E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 600.2666666666667, "minX": 1.70809632E12, "maxY": 2500.4166666666665, "series": [{"data": [[1.7080968E12, 2499.6666666666665], [1.70809662E12, 2499.883333333333], [1.70809716E12, 2500.05], [1.70809686E12, 2500.366666666667], [1.70809656E12, 2500.0666666666666], [1.70809722E12, 2499.85], [1.70809692E12, 2499.5833333333335], [1.7080965E12, 2499.983333333333], [1.70809728E12, 2500.05], [1.70809698E12, 2500.25], [1.70809644E12, 2499.766666666667], [1.70809674E12, 2500.4166666666665], [1.70809734E12, 600.2666666666667], [1.70809704E12, 2500.233333333333], [1.70809638E12, 2500.016666666667], [1.70809668E12, 2499.616666666667], [1.7080971E12, 2499.85], [1.70809632E12, 1066.75]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70809734E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 600.2666666666667, "minX": 1.70809632E12, "maxY": 2500.4166666666665, "series": [{"data": [[1.7080968E12, 2499.6666666666665], [1.70809662E12, 2499.883333333333], [1.70809716E12, 2500.05], [1.70809686E12, 2500.366666666667], [1.70809656E12, 2500.0666666666666], [1.70809722E12, 2499.85], [1.70809692E12, 2499.5833333333335], [1.7080965E12, 2499.983333333333], [1.70809728E12, 2500.05], [1.70809698E12, 2500.25], [1.70809644E12, 2499.766666666667], [1.70809674E12, 2500.4166666666665], [1.70809734E12, 600.2666666666667], [1.70809704E12, 2500.233333333333], [1.70809638E12, 2500.016666666667], [1.70809668E12, 2499.616666666667], [1.7080971E12, 2499.85], [1.70809632E12, 1066.75]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70809734E12, "title": "Total Transactions Per Second"}},
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

