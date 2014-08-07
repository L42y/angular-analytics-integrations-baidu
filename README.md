# [angular](https://angularjs.org)-[analytics](https://github.com/L42y/angular-analytics)-integrations-[baidu](http://tongji.baidu.com)

## Installation

1. `bower install --save L42y/angular-analytics-integrations-baidu`

2. including script file provided by this component into your application

3. adding `l42y.analytics.integrations.baidu` as a module dependency into your application

## Configuration

```js
angular.module('App.config', []).config(function (
    AnalyticsProvider
) {
    AnalyticsProvider.config.integrations['Baidu'] = {
        siteId: '{{ your site id }}'
    }
})
```

## License

[WTFPL](http://wtfpl.org)
