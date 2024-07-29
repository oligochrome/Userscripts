// ==UserScript==
// @name         SMMO - Commas on Price History Chart - Inspect
// @namespace   https://github.com/oligochrome
// @version      0.1
// @description  Changes the jschart price history on inspect item pages to show comma'd numbers (i.e. 40,000,000) on the tooltip and legend
// @author      Ogliochrome
// @match        https://web.simple-mmo.com/item/inspect/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=simple-mmo.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to update the script block
    function updateScriptBlock() {
        // Get the script block content
        var scriptBlock = document.querySelector("#app > div.h-screen.flex.overflow-hidden.bg-gray-100 > div.flex.flex-col.w-0.flex-1.overflow-hidden.relative > main > div.web-app-container > footer").previousElementSibling.innerHTML;

        // Replace floating point numbers with integers
        scriptBlock = scriptBlock.replace(/\b\d+\.\d+\b/g, function(match) {
            return parseInt(match);
        });

        // Define the new options content
        var newOptions = `
            options: {
                tooltips: {
                    callbacks: {
                        label: function(tooltipItem, data) {
                            var value = data.datasets[0].data[tooltipItem.index];
                            value = value.toString();
                            value = value.split(/(?=(?:...)*$)/);
                            value = value.join(',');
                            return value;
                        }
                    }
                },
                layout: {
                    padding: {
                        left: 20,
                        right: 20,
                        top: 0,
                        bottom: 0
                    }
                },
                legend: {
                    display: false
                },
                scales: {
                    yAxes: [{
                        gridLines: {
                            color: "rgba(0, 0, 0, 0)"
                        },
                        ticks: {
                            beginAtZero: true,
                            userCallback: function(value, index, values) {
                                value = value.toString();
                                value = value.split(/(?=(?:...)*$)/);
                                value = value.join(',');
                                return value;
                            }
                        }
                    }],
                    xAxes: [{
                        gridLines: {
                            color: "rgba(0, 0, 0, 0)"
                        }
                    }]
                }
            }
        });`;

        // Replace the content including and after 'options: '
        scriptBlock = scriptBlock.replace(/options: .*/s, newOptions.trim());

        // Create a new script element with the updated content
        var newScript = document.createElement('script');
        newScript.type = 'text/javascript';
        newScript.innerHTML = scriptBlock;

        // Replace the old script with the new script
        var oldScript = document.querySelector('script');
        oldScript.parentNode.replaceChild(newScript, oldScript);
    }

    // Wait for the DOM to be fully loaded
    window.addEventListener('load', function() {
        // Add the canvas element
        document.querySelector("#app > div.h-screen.flex.overflow-hidden.bg-gray-100 > div.flex.flex-col.w-0.flex-1.overflow-hidden.relative > main > div.web-app-container > div > div.mt-2.bg-white.rounded-lg.py-2.text-center.text-xs.sm\\:text-sm.ring-1.ring-black.ring-opacity-5.shadow-sm").innerHTML = '<div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>\n    <canvas id="price_chart" width="1088" height="1088" style="display: block; width: 1088px; height: 1088px;" class="chartjs-render-monitor"></canvas>\n';

        // Call the function to update the script block
        updateScriptBlock();
    });
})();
