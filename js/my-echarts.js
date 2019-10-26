function myEcharts() {
    var e = echarts.init(document.getElementById("love-map"));
    var n = {
        "广州": [113.264385,23.129112]
    };
    var option = {
        // backgroundColor: "#A7B1CA",
        geo: {
            map: "china",
            label: {
                emphasis: {
                    show: true
                }
            },
            roam: false,
            itemStyle: {
                normal: {
                    borderWidth: .2, //区域边框宽度
                    borderColor: '#009fe8', //区域边框颜色
                    areaColor: "#ffefd5", //区域颜色
                },
                emphasis: {//鼠标滑过地图高亮的相关设置
                    borderWidth: .2,
                    borderColor: '#4b0082',
                    areaColor: "#ffdead",
                }
            },
        },
        tooltip: {
            trigger: "item",
            formatter: function (e) {
                return e.name + " - " + e.value[2]
            }
        },
        series: [{
            type: "effectScatter",
            coordinateSystem: "geo",
            data: function (e) {
                for (var t = [], o = 0; o < e.length; o++) {
                    var a = n[e[o].name];
                    a && t.push({
                        name: e[o].name,
                        value: a.concat(e[o].value)
                    })
                }
                return t
            }([{
                name: "广州",
                value: "如今"
            }]),
            symbolSize: 5,
            showEffectOn: "render",
            rippleEffect: {
                brushType: "stroke"
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: "{b}",
                    position: "right",
                    fontSize: 14,
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: "#FD8888"
                }
            }
        }]
    };
    // 使用制定的配置项和数据显示图表
    e.setOption(option);
    // echart图表自适应
    window.addEventListener("resize", function() {
        e.resize();
    });
}