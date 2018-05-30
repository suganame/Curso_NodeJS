$(document).ready(function($) {
    // Highcharts.chart('teste', {
    //     chart: {
    //         type: 'line'
    //     },
    //     title: {
    //         text: 'Meta X Vendas 2018'
    //     },
    //     subtitle: {
    //         text: 'Meta x Vendas do ano de 2018'
    //     },
    //     xAxis: {
    //         categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
    //     },
    //     yAxis: {
    //         title: {
    //             text: ''
    //         }
    //     },
    //     plotOptions: {
    //         line: {
    //             dataLabels: {
    //                 enabled: true
    //             }
    //         }
    //     },
    //     series: [{
    //         name: 'Meta',
    //         data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
    //     }, {
    //         name: 'Vendas',
    //         data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
    //     }]
    // });

    Highcharts.chart('teste2', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Produtos vendidos por seção'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: '{data.name}',
            colorByPoint: true,
            data: [{
                name: 'Doces',
                y: 61.41,
                sliced: true,
                selected: true
            }, {
                name: 'Bebidas',
                y: 11.84
            }, {
                name: 'Doces Caseiros',
                y: 10.85
            }, {
                name: 'Salgadinhos',
                y: 4.67
            }, {
                name: 'Materiais',
                y: 4.18
            }]
        }]
    });

    Highcharts.chart('teste3', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Vendas por ano'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: [
                ''
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: ''
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: '2015',
            data: [49.9]
        },
        {
            name: '2016',
            data: [70]
        },
        {
            name: '2017',
            data: [90]
        }]
    });
});